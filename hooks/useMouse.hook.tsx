import React from "react";

export default function useMouse() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const updateMousePosition = (e: { clientX: number; clientY: number }) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
}
