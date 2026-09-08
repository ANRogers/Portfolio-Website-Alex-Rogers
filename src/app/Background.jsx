import { useEffect, useRef } from "react";

/**
 * TriangulatedNetworkBackground
 * A flat, dark, animated low-poly network: scattered nodes drifting slowly,
 * connected by a live Delaunay triangulation, rendered as thin glowing lines
 * with small dot nodes. Matches the "constellation / wiremesh" look rather
 * than a 3D object.
 *
 * Usage:
 *   <div style={{ position: "relative" }}>
 *     <TriangulatedNetworkBackground />
 *     <div style={{ position: "relative", zIndex: 1 }}>
 *       ...your page content...
 *     </div>
 *   </div>
 */
export default function TriangleBackground({
  backgroundColor = "rgba(13, 2, 33, 0.85)",
  backgroundColorBottom = "rgba(58, 12, 163, 0.95)", // gradient fades toward this near the bottom
  lineColor = "255, 45, 155",   // hot pink/magenta
  lineColorAlt = "0, 229, 255", // electric cyan, alternates with lineColor per edge
  nodeColor = "#00e5ff",        // electric cyan
  pointCount = 150,
  maxSpeed = 0.12,
  nodeRadius = 2.0,
  edgePadding = 70, // px of extra space beyond the viewport where points can live
  maxConnectionsPerNode = 6, // cap on how many lines can touch a single dot
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width, height;
    let points = [];
    let triangles = [];
    let frameId;
    let triangulationTimer;
    const triangulationInterval = 500;

    let mouse = {
  x: -9999,
  y: -9999,
};

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent.clientWidth;
      height = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleMouseMove = (event) => {
    const rect = canvas.getBoundingClientRect();

    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
    mouse.x = -9999;
    mouse.y = -9999;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const initPoints = () => {
      points = Array.from({ length: pointCount }, () => ({
        x: -edgePadding + Math.random() * (width + edgePadding * 2),
        y: -edgePadding + Math.random() * (height + edgePadding * 2),
        vx: (Math.random() - 0.5) * maxSpeed,
        vy: (Math.random() - 0.5) * maxSpeed,
      }));
    };

    resize();
    initPoints();


    const handleResize = () => {
      resize();
      initPoints();
      triangles = triangulate(points);
    
    };
    window.addEventListener("resize", handleResize);

    // --- Bowyer-Watson Delaunay triangulation ---
    function circumcircle(a, b, c) {
      const ax = a.x, ay = a.y, bx = b.x, by = b.y, cx = c.x, cy = c.y;
      const d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
      // If d is very close to zero, these 3 points are nearly in a straight
      // line. The "circle through them" math blows up in that case and
      // causes wrong, huge connections — so we just skip it.
      if (Math.abs(d) < 1e-3) return null;
      const ux =
        ((ax * ax + ay * ay) * (by - cy) +
          (bx * bx + by * by) * (cy - ay) +
          (cx * cx + cy * cy) * (ay - by)) /
        d;
      const uy =
        ((ax * ax + ay * ay) * (cx - bx) +
          (bx * bx + by * by) * (ax - cx) +
          (cx * cx + cy * cy) * (bx - ax)) /
        d;
      const rSq = (ux - ax) ** 2 + (uy - ay) ** 2;
      return { x: ux, y: uy, rSq };
    }

    function triangulate(pts) {
      // Super-triangle large enough to contain all points
      const margin = 1000;
      const superA = { x: -margin, y: -margin, idx: -1 };
      const superB = { x: width + margin * 2, y: -margin, idx: -2 };
      const superC = { x: -margin, y: height + margin * 2, idx: -3 };

      let triangles = [{ a: superA, b: superB, c: superC }];

      pts.forEach((p) => {
        const bad = [];
        triangles.forEach((t) => {
          const cc = circumcircle(t.a, t.b, t.c);
          if (cc) {
            const distSq = (cc.x - p.x) ** 2 + (cc.y - p.y) ** 2;
            if (distSq < cc.rSq) bad.push(t);
          }
        });

        // Find boundary edges of the polygonal hole
        const edgeKey = (u, v) =>
          [u.idx, v.idx].sort((m, n) => m - n).join(":");
        const edgeCount = new Map();
        bad.forEach((t) => {
          [
            [t.a, t.b],
            [t.b, t.c],
            [t.c, t.a],
          ].forEach(([u, v]) => {
            const key = edgeKey(u, v);
            if (edgeCount.has(key)) {
              edgeCount.get(key).count++;
            } else {
              edgeCount.set(key, { u, v, count: 1 });
            }
          });
        });
        const boundary = [...edgeCount.values()].filter((e) => e.count === 1);

        triangles = triangles.filter((t) => !bad.includes(t));
        boundary.forEach((e) => {
          triangles.push({ a: e.u, b: e.v, c: p });
        });
      });

      return triangles.filter(
        (t) => t.a.idx !== -1 && t.a.idx !== -2 && t.a.idx !== -3 &&
               t.b.idx !== -1 && t.b.idx !== -2 && t.b.idx !== -3 &&
               t.c.idx !== -1 && t.c.idx !== -2 && t.c.idx !== -3
      );
    }

    let lastTime = performance.now();

    const distanceToLine = (px, py, x1, y1, x2, y2) => {
    const dx = x2 - x1;
    const dy = y2 - y1;

    if (dx === 0 && dy === 0) {
        return Math.hypot(px - x1, py - y1);
    }

    const t = Math.max(
        0,
        Math.min(
        1,
        ((px - x1) * dx + (py - y1) * dy) /
            (dx * dx + dy * dy)
        )
    );

    const closestX = x1 + t * dx;
    const closestY = y1 + t * dy;

    return Math.hypot(px - closestX, py - closestY);
    };

    const animate = (now) => {
      // How much real time passed since the last frame, measured in
      // "60fps steps." If the browser is drawing slower than 60fps, this
      // number goes up, so each point moves further per frame — keeping
      // overall speed the same regardless of how fast frames are drawn.
      const delta = Math.min(3, (now - lastTime) / (1000 / 60));
      lastTime = now;

      // Clear previous frame
      ctx.clearRect(0, 0, width, height);

      // Update positions, bounce off edges
      points.forEach((p) => {
        p.x += (p.vx + (Math.random() - 0.5) * 0.06) * delta;
        p.y += (p.vy + (Math.random() - 0.5) * 0.06) * delta;
        if (p.x < -edgePadding || p.x > width + edgePadding) p.vx *= -1;
        if (p.y < -edgePadding || p.y > height + edgePadding) p.vy *= -1;
        p.x = Math.max(-edgePadding, Math.min(width + edgePadding, p.x));
        p.y = Math.max(-edgePadding, Math.min(height + edgePadding, p.y));
      });
      points.forEach((p, i) => (p.idx = i));

      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, backgroundColor);
      gradient.addColorStop(1, backgroundColorBottom);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);


      // Hard cutoff: any line longer than this is never drawn at all, even
      // faintly. This is what keeps the mesh looking tidy and local — any
      // rare, wrong "shoots across the whole screen" connection the math
      // occasionally produces gets thrown away instead of flashing on screen.
      const maxDrawLength = Math.hypot(width, height) * 0.24;

      // Step 1: collect every possible edge once (no duplicates), each with
      // its length, without drawing anything yet.
      const seen = new Set();
      const candidateEdges = [];
      triangles.forEach((t) => {
        [
          [t.a, t.b],
          [t.b, t.c],
          [t.c, t.a],
        ].forEach(([u, v]) => {
          const key = [u.idx, v.idx].sort((m, n) => m - n).join(":");
          if (seen.has(key)) return;
          seen.add(key);
          const len = Math.hypot(u.x - v.x, u.y - v.y);
          if (len > maxDrawLength) return;
          candidateEdges.push({ u, v, len });
        });
      });

      // Step 2: give priority to the shortest connections. Sorting shortest
      // first means that when we later cap how many lines a dot can have,
      // it keeps its closest neighbors and drops its far-away ones.
      candidateEdges.sort((a, b) => a.len - b.len);

      // Step 3: walk the sorted list, only keeping an edge if BOTH of its
      // dots still have room under the per-node connection limit.
      const connectionCount = new Map();
      const edgesToDraw = [];
      candidateEdges.forEach((edge) => {
        const cu = connectionCount.get(edge.u.idx) || 0;
        const cv = connectionCount.get(edge.v.idx) || 0;
        if (cu >= maxConnectionsPerNode || cv >= maxConnectionsPerNode) return;
        connectionCount.set(edge.u.idx, cu + 1);
        connectionCount.set(edge.v.idx, cv + 1);
        edgesToDraw.push(edge);
      });

      // Gives back the same "random" number every time for the same pair of
      // points, so each line's gradient stays stable frame to frame instead
      // of flickering.
      const seededRandom = (i, j) => {
        const x = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453;
        return x - Math.floor(x);
      };

      // Step 4: actually draw the surviving edges.
      edgesToDraw.forEach(({ u, v, len }) => {
        const mouseDistance = distanceToLine(
        mouse.x,
        mouse.y,
        u.x,
        u.y,
        v.x,
        v.y
        );

        // How far the mouse influence reaches
        const hoverRadius = 180;

        // 0 = no hover effect
        // 1 = directly over the line
        const hoverStrength = Math.max(
        0,
        1 - mouseDistance / hoverRadius
        );

        // Smooth the falloff so it doesn't feel too linear
        const smoothHover = hoverStrength * hoverStrength;

        // Fade scaled to the same cutoff distance, so short lines stay
        // bold and lines approaching the cutoff fade toward faint —
        // instead of everything landing near the same flat brightness.
        const baseAlpha = Math.max(
            0.08,
            0.55 * (1 - len / maxDrawLength)
            );

            const alpha = Math.min(
            1,
            baseAlpha + smoothHover * 0.45
        );

        // Always draw from the lower index to the higher index so the
        // gradient direction doesn't flip-flop between frames.
        const [p1, p2] = u.idx < v.idx ? [u, v] : [v, u];
        const r1 = seededRandom(p1.idx, p2.idx);
        const r2 = seededRandom(p2.idx, p1.idx);
        // Where the color starts blending, and how wide that blend zone
        // is — both randomized per line, so some lines are mostly pink,
        // some mostly cyan, some an even split down the middle.
        const blendStart = 0.15 + r1 * 0.35;
        const blendEnd = Math.min(0.98, blendStart + 0.2 + r2 * 0.35);

        const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        gradient.addColorStop(0, `rgba(${lineColor}, ${alpha.toFixed(3)})`);
        gradient.addColorStop(blendStart, `rgba(${lineColor}, ${alpha.toFixed(3)})`);
        gradient.addColorStop(blendEnd, `rgba(${lineColorAlt}, ${alpha.toFixed(3)})`);
        gradient.addColorStop(1, `rgba(${lineColorAlt}, ${alpha.toFixed(3)})`);

        ctx.strokeStyle = gradient;
        ctx.shadowColor = `rgb(${lineColor})`;

        ctx.shadowBlur = smoothHover > 0.1 ? 8 + smoothHover * 15 : 0;

        ctx.lineWidth =
        1.6 + smoothHover * 1.8;
        ctx.beginPath();
        ctx.moveTo(u.x, u.y);
        ctx.lineTo(v.x, v.y);
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Draw nodes
      points.forEach((p) => {
        ctx.beginPath();
        ctx.fillStyle = nodeColor;
        ctx.shadowColor = nodeColor;
        ctx.shadowBlur = 8;
        ctx.arc(p.x, p.y, nodeRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      frameId = requestAnimationFrame(animate);
    };
    requestAnimationFrame(() => {
        triangles = triangulate(points);
    });

    // Continue recalculating at the chosen interval
    triangulationTimer = setInterval(() => {
        triangles = triangulate(points);
    }, triangulationInterval);
    animate(performance.now());

    return () => {
      cancelAnimationFrame(frameId);
      clearInterval(triangulationTimer);

      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [backgroundColor, backgroundColorBottom, lineColor, lineColorAlt, nodeColor, pointCount, maxSpeed, nodeRadius, edgePadding, maxConnectionsPerNode]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
}