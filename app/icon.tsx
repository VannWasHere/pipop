import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(145deg, #F8F1FF 0%, #E4CCF6 100%)",
          borderRadius: 18,
        }}
      >
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: 999,
            background: "#F4E9FC",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7A2EA8",
            fontSize: 36,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          J
        </div>
      </div>
    ),
    { ...size },
  );
}
