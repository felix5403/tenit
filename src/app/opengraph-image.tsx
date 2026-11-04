import { ImageResponse } from "next/og";

export const alt = "TENIT — AI-Powered Business Development Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 한글 폰트를 번들하지 않도록 영문만 사용
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "80px",
          borderBottom: "16px solid #1a47d6",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", fontSize: 64, fontWeight: 800, letterSpacing: 12, color: "#15171c" }}>
          TENIT
          <div style={{ width: 16, height: 16, background: "#1a47d6", marginLeft: 8, marginBottom: 14 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#1a47d6", fontWeight: 600 }}>AI-Powered Business Development Studio</div>
          <div style={{ display: "flex", gap: 28, marginTop: 36, fontSize: 26, color: "#5b616d" }}>
            <span>Tenit Cloud</span>
            <span>BeShop AI</span>
            <span>Blackguard</span>
            <span>BTSPDF</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
