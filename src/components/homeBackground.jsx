import { useEffect, useRef } from "react";

export default function HomeBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure autoplay works on all browsers
    video.play().catch(() => {});
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <video
        ref={videoRef}
        src="/homebg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.75) contrast(1.1)",
        }}
      />
    </div>
  );
}
