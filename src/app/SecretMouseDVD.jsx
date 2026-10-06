import { useEffect, useRef } from "react";

import MouseLogo from "../assets/Mouse_Logo_Synthwave_Transparent.png";

export default function MouseDVDBackground({
    mouseSize = 150,
    speedMultiplier = 1.5,
    zIndex = 9999,
    showDVD = false,
}) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const img = new Image();

        img.src = MouseLogo;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Smaller logo on mobile
        const actualMouseSize =
            window.innerWidth <= 900
                ? 90
                : mouseSize;

        let x = Math.floor(
            Math.random() * (canvas.width - actualMouseSize)
        );

        let y = Math.floor(
            Math.random() * (canvas.height - actualMouseSize)
        );

        let xspeed =
            speedMultiplier * (Math.random() < 0.5 ? 1 : -1);

        let yspeed =
            speedMultiplier * (Math.random() < 0.5 ? 1 : -1);

        let frameId;

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.drawImage(
                img,
                x,
                y,
                actualMouseSize,
                actualMouseSize
            );

            if (x >= canvas.width - actualMouseSize) {
                xspeed = -Math.abs(xspeed);
            }

            if (x <= 0) {
                xspeed = Math.abs(xspeed);
            }

            if (y >= canvas.height - (actualMouseSize - 10)) {
                yspeed = -Math.abs(yspeed);
            }

            if (y <= -20) {
                yspeed = Math.abs(yspeed);
            }

            x += xspeed;
            y += yspeed;

            frameId = requestAnimationFrame(animate);
        }

        frameId = requestAnimationFrame(animate);

        function handleResize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", handleResize);
        };
    }, [mouseSize, speedMultiplier]);

    return (
        <canvas
            ref={canvasRef}
            id="DVDFun"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: zIndex,
                pointerEvents: "none",
                display: showDVD ? "block" : "none",
            }}
        />
    );
}