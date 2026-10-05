import desktopScreen from "@/imports/Faster_Decisions.png";

/**
 * MacBook-style laptop mockup wrapping the Keel desktop screenshot.
 * Proportions match a 14" MacBook Pro: lid aspect ratio ~16:10, thin bezels,
 * aluminium-finish body, and a base/hinge below.
 */
export default function LaptopMockup({ width = 560 }: { width?: number }) {
  // Screenshot native dims: 1512 × 816 (16:10 ish — matches MacBook display)
  // Lid proportions
  const LID_RADIUS = Math.round(width * 0.018);
  const BEZEL_TOP = Math.round(width * 0.022);
  const BEZEL_SIDE = Math.round(width * 0.018);
  const BEZEL_BOTTOM = Math.round(width * 0.028);

  const screenW = width - BEZEL_SIDE * 2;
  // 16:10 screen aspect ratio
  const screenH = Math.round(screenW * (10 / 16));
  const lidH = screenH + BEZEL_TOP + BEZEL_BOTTOM;

  // Base / hinge
  const baseH = Math.round(width * 0.048);
  const baseW = Math.round(width * 1.06);
  const baseLeft = -Math.round((baseW - width) / 2);

  // Notch (camera bump) — centered at top of lid
  const notchW = Math.round(width * 0.014);
  const notchH = Math.round(notchW * 0.6);

  return (
    <div
      style={{
        position: "relative",
        width,
        // total height = lid + base
        height: lidH + baseH,
        flexShrink: 0,
      }}
    >
      {/* ── LID ─────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width,
          height: lidH,
          backgroundColor: "#c0c0c2",
          borderRadius: LID_RADIUS,
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.42), 0 8px 24px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.14)",
          border: "1px solid rgba(255,255,255,0.28)",
        }}
      >
        {/* Outer lid surface gradient — aluminium feel */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: LID_RADIUS,
            background:
              "linear-gradient(170deg, #e8e8ea 0%, #d0d0d2 30%, #b8b8bc 65%, #a8a8aa 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Specular highlight — top edge shine */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "8%",
            right: "8%",
            height: Math.round(lidH * 0.12),
            borderRadius: `${LID_RADIUS}px ${LID_RADIUS}px 60% 60%`,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Camera notch */}
        <div
          style={{
            position: "absolute",
            top: Math.round(BEZEL_TOP * 0.38),
            left: "50%",
            transform: "translateX(-50%)",
            width: notchW,
            height: notchH,
            backgroundColor: "#2a2a2a",
            borderRadius: notchH / 2,
          }}
        />

        {/* Screen bezel area */}
        <div
          style={{
            position: "absolute",
            top: BEZEL_TOP,
            left: BEZEL_SIDE,
            width: screenW,
            height: screenH,
            backgroundColor: "#ffffff",
            borderRadius: Math.round(LID_RADIUS * 0.4),
            overflow: "hidden",
          }}
        >
          {/* Screenshot fills the screen */}
          <img
            src={desktopScreen}
            alt="Keel website on desktop"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "top center",
            }}
          />

          {/* Subtle screen glare */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 40%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Lid bottom edge shine */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: BEZEL_SIDE,
            right: BEZEL_SIDE,
            height: 1,
            backgroundColor: "rgba(0,0,0,0.22)",
          }}
        />
      </div>

      {/* ── HINGE LINE ───────────────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: lidH,
          left: 0,
          width,
          height: Math.round(baseH * 0.18),
          backgroundColor: "#888888",
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.4)",
        }}
      />

      {/* ── BASE / KEYBOARD DECK ────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: lidH + Math.round(baseH * 0.18),
          left: baseLeft,
          width: baseW,
          height: Math.round(baseH * 0.82),
          background:
            "linear-gradient(180deg, #d4d4d6 0%, #b8b8ba 40%, #a4a4a6 100%)",
          borderRadius: `0 0 ${Math.round(width * 0.012)}px ${Math.round(width * 0.012)}px`,
          boxShadow:
            "0 10px 32px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.18)",
          border: "1px solid rgba(255,255,255,0.22)",
          borderTop: "none",
        }}
      />
    </div>
  );
}
