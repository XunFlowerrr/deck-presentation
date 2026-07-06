import { demoVideo } from "../../content/assets";

export function DemoVideo() {
  return (
    <video
      src={demoVideo}
      autoPlay
      controls
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "block",
      }}
    />
  );
}
