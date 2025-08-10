import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const width = 1200;
  const height = 630;
  const gradient = {
    background: "linear-gradient(135deg, #a78bfa33, #22d3ee33, #34d39933)",
  } as const;

  return new ImageResponse(
    (
      <div
        style={{
          width,
          height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 80,
          color: "#fff",
          background: "#0a0a0a",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, ...gradient }} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontWeight: 700 }}>Nexus</span>
          <span style={{ fontSize: 28, opacity: 0.85 }}>Modern Communication App</span>
        </div>
      </div>
    ),
    { width, height }
  );
}


