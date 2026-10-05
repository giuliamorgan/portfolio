import iPhoneScreen from "@/imports/Mobile_Faster_Decisions.PNG";

export default function IPhoneMockup({ width = 300 }: { width?: number }) {
  // iPhone 15 Pro proportions: ~71.5mm wide, 146.6mm tall → aspect ~2.05
  const ASPECT = 2.05;

  // Thin bezels — iPhone 15 Pro has ~2mm side bezels
  const BEZEL_X = Math.round(width * 0.038);   // ~4px at 100px width
  const BEZEL_TOP = Math.round(width * 0.032);
  const BEZEL_BOTTOM = Math.round(width * 0.038);

  // Corner radii — iPhone 15 Pro: 47px corner on a 390px wide screen
  const FRAME_RADIUS = Math.round(width * 0.22);
  const SCREEN_RADIUS = Math.round(width * 0.18);

  const frameW = width;
  const frameH = Math.round(frameW * ASPECT);
  const screenW = frameW - BEZEL_X * 2;
  const screenH = frameH - BEZEL_TOP - BEZEL_BOTTOM;
  const scale = screenW / 390; // iPhone 15 Pro logical width

  // Dynamic Island
  const diW = Math.round(126 * scale);
  const diH = Math.round(37 * scale);
  const diTop = Math.round(12 * scale);
  const diLeft = Math.round((screenW - diW) / 2);
  const diRadius = diH / 2;

  // Titanium frame colors
  const frameColor = "#A5A49E";
  const buttonColor = "#8E8D87";

  return (
    <div style={{ position: "relative", width: frameW, height: frameH, flexShrink: 0 }}>

      {/* Drop shadow */}
      <div style={{
        position: "absolute",
        inset: 0,
        borderRadius: FRAME_RADIUS,
        boxShadow: "0 40px 90px rgba(0,0,0,0.5), 0 12px 32px rgba(0,0,0,0.3), 0 3px 8px rgba(0,0,0,0.18)",
        pointerEvents: "none",
      }} />

      {/* Outer titanium band — flat-sided, brushed look */}
      <div style={{
        position: "absolute",
        inset: 0,
        borderRadius: FRAME_RADIUS,
        background: `linear-gradient(135deg, #C8C7C1 0%, #A5A49E 40%, #8E8D87 70%, #B0AFA9 100%)`,
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18), inset 0 1px 0 rgba(255,255,255,0.32)",
      }}>
        {/* Inner inset — creates the thin frame illusion */}
        <div style={{
          position: "absolute",
          inset: BEZEL_X - 1,
          borderRadius: SCREEN_RADIUS + 2,
          backgroundColor: "#0a0a0c",
        }} />
      </div>

      {/* Screen area */}
      <div style={{
        position: "absolute",
        top: BEZEL_TOP,
        left: BEZEL_X,
        width: screenW,
        height: screenH,
        borderRadius: SCREEN_RADIUS,
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}>
        {/* Photo fills screen */}
        <img
          src={iPhoneScreen}
          alt="Keel on iPhone"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "top center",
          }}
        />

        {/* Dynamic Island */}
        <div style={{
          position: "absolute",
          top: diTop,
          left: diLeft,
          width: diW,
          height: diH,
          backgroundColor: "#000",
          borderRadius: diRadius,
        }} />

        {/* Screen glare */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, transparent 40%)",
          pointerEvents: "none",
        }} />
      </div>

      {/* Hardware buttons */}
      {/* Mute switch */}
      <div style={{ position: "absolute", left: -Math.round(width * 0.022), top: Math.round(frameH * 0.13), width: Math.round(width * 0.022), height: Math.round(frameH * 0.04), background: `linear-gradient(90deg, ${buttonColor} 0%, ${frameColor} 100%)`, borderRadius: "2px 0 0 2px" }} />
      {/* Volume up */}
      <div style={{ position: "absolute", left: -Math.round(width * 0.022), top: Math.round(frameH * 0.2), width: Math.round(width * 0.022), height: Math.round(frameH * 0.08), background: `linear-gradient(90deg, ${buttonColor} 0%, ${frameColor} 100%)`, borderRadius: "2px 0 0 2px" }} />
      {/* Volume down */}
      <div style={{ position: "absolute", left: -Math.round(width * 0.022), top: Math.round(frameH * 0.31), width: Math.round(width * 0.022), height: Math.round(frameH * 0.08), background: `linear-gradient(90deg, ${buttonColor} 0%, ${frameColor} 100%)`, borderRadius: "2px 0 0 2px" }} />
      {/* Power */}
      <div style={{ position: "absolute", left: frameW, top: Math.round(frameH * 0.25), width: Math.round(width * 0.022), height: Math.round(frameH * 0.12), background: `linear-gradient(90deg, ${frameColor} 0%, ${buttonColor} 100%)`, borderRadius: "0 2px 2px 0" }} />
    </div>
  );
}
