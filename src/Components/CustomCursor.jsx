import React, { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detect screen size
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, [isDesktop]);

  if (!isDesktop) return null; // Hide on mobile

  return (
    <>
      {/* Outer circle */}
      <div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-white/50 pointer-events-none"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        }}
      ></div>

      {/* Inner dot */}
      <div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-white pointer-events-none"
        style={{
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
        }}
      ></div>
    </>
  );
}

export default CustomCursor;
