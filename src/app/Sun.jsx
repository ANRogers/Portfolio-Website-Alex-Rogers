import { useEffect, useRef } from "react";

export default function SunBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // =========================
    // SETTINGS
    // =========================

    const radius = 200;

    // Sun colours
    const sunColorTop = "#fbff00";
    const sunColorBottom = "#e600ac";

    // Stripe settings
    const lineSpacing = 24;
    const lineWidth = 9;

    // Stripe movement speed
    const scrollSpeed = 35;

    // Glow settings
    const glowColor = "#a855f7";

    // How far the glow extends outside the sun
    const glowRadius = 120;

    // =========================
    // OFF-SCREEN SUN CANVAS
    // =========================

    const sunCanvas = document.createElement("canvas");
    const sunCtx = sunCanvas.getContext("2d");

    // =========================
    // CANVAS SETUP
    // =========================

    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;

      sunCanvas.width = canvas.width;
      sunCanvas.height = canvas.height;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let frameID;

    // =========================
    // ANIMATION
    // =========================

    function animate(time) {
      // Clear main canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Clear off-screen sun canvas
      sunCtx.clearRect(0, 0, sunCanvas.width, sunCanvas.height);

      // Centre of the canvas
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // =========================
      // PURPLE GLOW
      // =========================

      /*
        Radial gradient:
        - Very low opacity in the centre
        - Stronger around the edge
        - Strong glow outside the sun
        - Completely fades away further out
      */

      const glowGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius - 30,
        centerX,
        centerY,
        radius + glowRadius
      );

      // Inside the sun
      glowGradient.addColorStop(0, "rgba(168, 85, 247, 0.1)");

      // Near the edge
      glowGradient.addColorStop(0.10, "rgba(168, 85, 247, 0.15)");

      // Strong glow immediately outside
      glowGradient.addColorStop(0.20, "rgba(168, 85, 247, 0.35)");

      // Still clearly visible
      glowGradient.addColorStop(0.30, "rgba(168, 85, 247, 0.22)");

      // Fade out
      glowGradient.addColorStop(0.45, "rgba(168, 85, 247, 0.08)");

      // Completely transparent
      glowGradient.addColorStop(1, "rgba(168, 85, 247, 0)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + glowRadius, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();

      // =========================
      // DRAW SUN TO OFF-SCREEN CANVAS
      // =========================

      const gradient = sunCtx.createLinearGradient(
        0,
        centerY - radius,
        0,
        centerY + radius
      );

      gradient.addColorStop(0, sunColorTop);
      gradient.addColorStop(1, sunColorBottom);

      sunCtx.beginPath();
      sunCtx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      sunCtx.fillStyle = gradient;
      sunCtx.fill();

      // =========================
        // CUT STRIPES OUT OF SUN
        // =========================

        sunCtx.globalCompositeOperation = "destination-out";

        // Calculate movement
        const offset = (time * scrollSpeed / 1000) % lineSpacing;
        const startY = centerY - radius - lineSpacing;
        const endY = centerY + radius + lineSpacing;

        // Stripes stop 70% of the way from bottom to top
        const fadeEndY = centerY - radius * 0.2;

        for (let y = startY; y <= endY; y += lineSpacing) {
        const lineY = y - offset;

        // Don't draw anything above the fade point
        if (lineY < fadeEndY) continue;

        // Calculate width from 0 at fadeEndY to full width at bottom
        const progress =
            (lineY - fadeEndY) / (centerY + radius - fadeEndY);

        const currentLineWidth = lineWidth * progress;

        sunCtx.beginPath();
        sunCtx.moveTo(centerX - radius, lineY);
        sunCtx.lineTo(centerX + radius, lineY);

        sunCtx.lineWidth = currentLineWidth;
        sunCtx.lineCap = "butt";
        sunCtx.stroke();
        }

      // =========================
      // DRAW SUN ON MAIN CANVAS
      // =========================

      sunCtx.globalCompositeOperation = "source-over";
      ctx.drawImage(sunCanvas, 0, 0);

      // =========================
      // NEXT FRAME
      // =========================

      frameID = requestAnimationFrame(animate);
    }

    frameID = requestAnimationFrame(animate);

    // =========================
    // CLEANUP
    // =========================

    return () => {
      cancelAnimationFrame(frameID);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}