import { useEffect, useState } from "react";
import { Link } from "react-router";
import heartCityImage from "@/imports/HCHC_smoothie_image.png";

const RESUME_URL = "/portfolio/Giulia-Morgan-Resume.pdf";

const COLORS = {
  navy: "#102C49",
  cream: "#FCFAF7",
  paleBlue: "#EEF7FC",
  red: "#B84338",
  body: "#526777",
  muted: "#74899A",
  border: "#DCE6EC",
  darkBody: "#D5DEE5",
  lightRed: "#F08A80",
};

const SERIF = "'Cormorant Garamond', Georgia, serif";

const NAV_LINKS = [
  { label: "Work", href: "/portfolio#work" },
  { label: "About", href: "/portfolio#about" },
  { label: "Skills", href: "/portfolio#skills" },
  { label: "Resume", href: RESUME_URL, external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/giuliamorgan",
    external: true,
  },
  { label: "Contact", href: "/#contact" },
];

const EYEBROW = {
  margin: 0,
  fontSize: 11,
  lineHeight: 1.4,
  letterSpacing: "0.12em",
  color: COLORS.red,
  fontWeight: 600,
  textTransform: "uppercase" as const,
};

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440,
  );

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
}

export default function HeartCityCaseStudy() {
  const [menuOpen, setMenuOpen] = useState(false);
  const width = useWindowWidth();

  const isMobile = width < 768;
  const isTablet = width < 1024;
  const px = isMobile ? "24px" : isTablet ? "48px" : "80px";
  const maxW = 1440;

  const sectionPadding = isMobile
    ? "52px 24px"
    : isTablet
      ? "60px 48px"
      : "64px 80px";

  const bodyText = {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.8,
    color: COLORS.body,
    fontWeight: 300,
  };

  const projectDetails = [
    {
      label: "Project",
      value: "Collaborative Academic Client Project",
    },
    {
      label: "Role",
      value: "Team Lead, Consumer Research + Market Strategy",
    },
    {
      label: "Contribution",
      value: "Research, Analysis, Strategy + Client Presentation",
    },
    {
      label: "Status",
      value: "Completed Spring 2024",
    },
  ];

  const findings = [
    {
      value: "77%",
      label: "Low Awareness",
      body: "Had never heard of Heart City.",
    },
    {
      value: "$5–$10",
      label: "Preferred Price",
      body: "The strongest consumer comfort range.",
    },
    {
      value: "71% / 49%",
      label: "Social Discovery",
      body: "Instagram and TikTok led discovery.",
    },
    {
      value: "70%",
      label: "Protein Interest",
      body: "Would consider adding protein.",
    },
  ];

  const recommendations = [
    {
      number: "01",
      title: "Positioning + Pricing",
      body: "Sharpen the brand around an emotion-led health promise while maintaining an accessible $5–$10 price range.",
    },
    {
      number: "02",
      title: "Curbside Pickup",
      body: "Improve convenience by adding pickup to the existing order-ahead experience.",
    },
    {
      number: "03",
      title: "Mobile Cart",
      body: "Bring the concept directly to community gathering points through a branded mobile format.",
    },
    {
      number: "04",
      title: "Sister Location",
      body: "Explore expansion near an audience with stronger alignment to the recommended target market.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: COLORS.cream,
        color: COLORS.navy,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(252,250,247,0.96)",
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div
          style={{
            maxWidth: maxW,
            height: 60,
            margin: "0 auto",
            padding: `0 ${px}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/"
            style={{
              fontFamily: SERIF,
              fontSize: 19,
              fontWeight: 500,
              letterSpacing: "0.02em",
              color: COLORS.navy,
              textDecoration: "none",
            }}
          >
            Giulia Morgan
          </Link>

          {!isMobile && (
            <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  style={{
                    fontSize: 12,
                    lineHeight: 1.5,
                    letterSpacing: "0.05em",
                    color: COLORS.body,
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                  {item.external ? " ↗" : ""}
                </a>
              ))}
            </nav>
          )}

          {isMobile && (
            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((open) => !open)}
              style={{
                padding: 8,
                display: "flex",
                flexDirection: "column",
                gap: 5,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {[0, 1, 2].map((line) => (
                <span
                  key={line}
                  style={{
                    display: "block",
                    width: 22,
                    height: 1,
                    backgroundColor: COLORS.navy,
                  }}
                />
              ))}
            </button>
          )}
        </div>

        {isMobile && menuOpen && (
          <nav
            style={{
              padding: "16px 24px 20px",
              backgroundColor: COLORS.cream,
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "10px 0",
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: COLORS.body,
                  textDecoration: "none",
                  borderBottom: `1px solid ${COLORS.border}`,
                }}
              >
                {item.label}
                {item.external ? " ↗" : ""}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        style={{
          padding: isMobile
            ? "52px 24px"
            : isTablet
              ? "60px 48px"
              : "72px 80px 64px",
          backgroundColor: COLORS.cream,
        }}
      >
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <p style={{ ...EYEBROW, marginBottom: 18 }}>
            Academic Client Project
          </p>

          <h1
            style={{
              maxWidth: 1000,
              margin: "0 0 14px",
              fontFamily: SERIF,
              fontSize: isMobile ? 44 : "clamp(52px, 5.5vw, 70px)",
              fontWeight: 300,
              lineHeight: 1.03,
              letterSpacing: "-0.025em",
              color: COLORS.navy,
            }}
          >
            Heart City Health Cafe
          </h1>

          <p
            style={{
              maxWidth: 680,
              margin: "0 0 24px",
              fontSize: isMobile ? 15 : 17,
              lineHeight: 1.6,
              color: COLORS.body,
              fontWeight: 300,
            }}
          >
            A research-led consumer growth strategy for an underperforming
            health-focused cafe.
          </p>

          <p style={{ ...bodyText, maxWidth: 680, marginBottom: 36 }}>
            Our team studied consumer awareness, preferences, and purchase
            behavior to identify the strongest opportunities for Heart City to
            improve visibility, convenience, and market fit.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
              gap: isMobile ? "24px 16px" : 0,
              paddingTop: 24,
              marginBottom: 36,
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            {projectDetails.map((item, index) => (
              <div
                key={item.label}
                style={{
                  paddingLeft: !isMobile && index > 0 ? 28 : 0,
                  paddingRight:
                    !isMobile && index < projectDetails.length - 1 ? 28 : 0,
                  borderRight:
                    !isMobile && index < projectDetails.length - 1
                      ? `1px solid ${COLORS.border}`
                      : "none",
                }}
              >
                <p style={{ ...EYEBROW, marginBottom: 8 }}>{item.label}</p>

                <p
                  style={{
                    margin: 0,
                    fontSize: 12,
                    lineHeight: 1.65,
                    color: COLORS.navy,
                    fontWeight: 300,
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              height: isMobile ? 230 : isTablet ? 290 : 320,
              overflow: "hidden",
            }}
          >
            <img
              src={heartCityImage}
              alt="Heart City Health Cafe smoothie"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section
        style={{
          padding: sectionPadding,
          backgroundColor: COLORS.paleBlue,
        }}
      >
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                isMobile || isTablet ? "1fr" : "0.8fr 1.2fr",
              gap: isMobile || isTablet ? 18 : 64,
              alignItems: "start",
              marginBottom: 36,
            }}
          >
            <div>
              <p style={{ ...EYEBROW, marginBottom: 16 }}>
                Research + Key Findings
              </p>

              <h2
                style={{
                  maxWidth: 520,
                  margin: 0,
                  fontFamily: SERIF,
                  fontSize: isMobile ? 34 : "clamp(36px, 3.2vw, 48px)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: COLORS.navy,
                }}
              >
                What the Research Revealed
              </h2>
            </div>

            <div>
              <p style={{ ...bodyText, maxWidth: 660, marginBottom: 10 }}>
                Secondary research, qualitative interviews, and a structured
                consumer survey revealed consistent opportunities related to
                awareness, pricing, discovery, and product preferences.
              </p>

              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  lineHeight: 1.65,
                  color: COLORS.muted,
                  fontWeight: 300,
                }}
              >
                Findings were treated as directional and evaluated across all
                three research sources.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
              borderTop: `1px solid ${COLORS.border}`,
              borderBottom: `1px solid ${COLORS.border}`,
            }}
          >
            {findings.map((item, index) => (
              <div
                key={item.label}
                style={{
                  padding: isMobile ? "24px 14px" : "28px",
                  paddingLeft: !isMobile && index === 0 ? 0 : undefined,
                  borderRight:
                    (!isMobile && index < findings.length - 1) ||
                    (isMobile && index % 2 === 0)
                      ? `1px solid ${COLORS.border}`
                      : "none",
                  borderBottom:
                    isMobile && index < 2
                      ? `1px solid ${COLORS.border}`
                      : "none",
                }}
              >
                <p
                  style={{
                    margin: "0 0 10px",
                    fontFamily: SERIF,
                    fontSize: isMobile ? 34 : 42,
                    fontWeight: 300,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    color: COLORS.navy,
                  }}
                >
                  {item.value}
                </p>

                <p style={{ ...EYEBROW, marginBottom: 8 }}>{item.label}</p>

                <p
                  style={{
                    margin: 0,
                    fontSize: 12,
                    lineHeight: 1.6,
                    color: COLORS.body,
                    fontWeight: 300,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMENDATIONS */}
      <section
        style={{
          padding: sectionPadding,
          backgroundColor: COLORS.cream,
        }}
      >
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <p style={{ ...EYEBROW, marginBottom: 16 }}>
            Strategic Recommendations
          </p>

          <h2
            style={{
              maxWidth: 760,
              margin: "0 0 18px",
              fontFamily: SERIF,
              fontSize: isMobile ? 34 : "clamp(36px, 3.2vw, 48px)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: COLORS.navy,
            }}
          >
            Turning Consumer Insight into a Growth Direction
          </h2>

          <p style={{ ...bodyText, maxWidth: 680, marginBottom: 34 }}>
            The research pointed toward a clearer target audience, accessible
            pricing, stronger visibility, and greater convenience.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              borderTop: `1px solid ${COLORS.border}`,
              borderLeft: isMobile ? "none" : `1px solid ${COLORS.border}`,
            }}
          >
            {recommendations.map((item) => (
              <div
                key={item.number}
                style={{
                  padding: isMobile ? "26px 0" : "28px 32px",
                  borderRight: isMobile
                    ? "none"
                    : `1px solid ${COLORS.border}`,
                  borderBottom: `1px solid ${COLORS.border}`,
                }}
              >
                <p style={{ ...EYEBROW, marginBottom: 10 }}>{item.number}</p>

                <h3
                  style={{
                    margin: "0 0 8px",
                    fontFamily: SERIF,
                    fontSize: 23,
                    fontWeight: 400,
                    lineHeight: 1.2,
                    color: COLORS.navy,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    maxWidth: 500,
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: COLORS.body,
                    fontWeight: 300,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              maxWidth: 780,
              margin: "18px 0 0",
              fontSize: 12,
              lineHeight: 1.65,
              color: COLORS.muted,
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            Financial feasibility and implementation timing were modeled as
            part of the class project. These recommendations represent proposed
            directions rather than realized business results.
          </p>
        </div>
      </section>

      {/* OUTCOME */}
      <section
        style={{
          padding: isMobile ? "44px 24px" : "52px 80px",
          backgroundColor: COLORS.navy,
        }}
      >
        <div
          style={{
            maxWidth: maxW,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              isMobile || isTablet ? "1fr" : "1.25fr 0.75fr",
            gap: isMobile || isTablet ? 28 : 64,
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                ...EYEBROW,
                marginBottom: 14,
                color: COLORS.lightRed,
              }}
            >
              Presentation + Outcome
            </p>

            <h2
              style={{
                maxWidth: 680,
                margin: "0 0 16px",
                fontFamily: SERIF,
                fontSize: isMobile ? 32 : 40,
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: COLORS.cream,
              }}
            >
              Presenting a Commercially Grounded Recommendation
            </h2>

            <p
              style={{
                maxWidth: 720,
                margin: "0 0 14px",
                fontSize: 14,
                lineHeight: 1.8,
                color: COLORS.darkBody,
                fontWeight: 300,
              }}
            >
              I led the research analysis, strategy development, presentation
              narrative, and final client pitch, translating consumer findings
              into a practical growth direction.
            </p>

            <p
              style={{
                maxWidth: 720,
                margin: 0,
                fontSize: 14,
                lineHeight: 1.8,
                color: COLORS.darkBody,
                fontWeight: 300,
              }}
            >
              The experience strengthened my ability to synthesize mixed
              research, identify the most commercially relevant insights, and
              turn them into recommendations that a client could evaluate and
              act on.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr",
              borderTop: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            {[
              {
                value: "2nd Place",
                label: "Among class teams",
              },
              {
                value: "Client Pitch",
                label: "Strategy presented directly to Heart City",
              },
            ].map((item, index) => (
              <div
                key={item.value}
                style={{
                  padding: "18px 0",
                  borderBottom:
                    !isMobile || index === 1
                      ? "1px solid rgba(255,255,255,0.14)"
                      : "none",
                  borderRight:
                    isMobile && index === 0
                      ? "1px solid rgba(255,255,255,0.14)"
                      : "none",
                  paddingLeft: isMobile && index === 1 ? 18 : 0,
                }}
              >
                <p
                  style={{
                    margin: "0 0 6px",
                    fontFamily: SERIF,
                    fontSize: isMobile ? 27 : 30,
                    fontWeight: 300,
                    color: COLORS.cream,
                  }}
                >
                  {item.value}
                </p>

                <p
                  style={{
                    margin: 0,
                    fontSize: 12,
                    lineHeight: 1.5,
                    color: "#AFC0CD",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section
        style={{
          padding: isMobile ? "40px 24px" : "48px 80px",
          backgroundColor: COLORS.cream,
          borderTop: `1px solid ${COLORS.border}`,
        }}
      >
        <div
          style={{
            maxWidth: maxW,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr auto",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                ...EYEBROW,
                marginBottom: 12,
                color: COLORS.muted,
              }}
            >
              Next Project
            </p>

            <h2
              style={{
                margin: "0 0 8px",
                fontFamily: SERIF,
                fontSize: isMobile ? 30 : 36,
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                color: COLORS.navy,
              }}
            >
              Mighty Well
            </h2>

            <p
              style={{
                margin: 0,
                fontSize: 12,
                lineHeight: 1.5,
                letterSpacing: "0.06em",
                color: COLORS.muted,
                textTransform: "uppercase",
              }}
            >
              Social Media / Content Strategy / Brand Communications
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "flex-start" : "flex-end",
              gap: 12,
            }}
          >
            <Link
              to="/mighty-well"
              style={{
                paddingBottom: 2,
                fontSize: 12,
                lineHeight: 1.5,
                letterSpacing: "0.05em",
                color: COLORS.navy,
                textDecoration: "none",
                borderBottom: `1px solid ${COLORS.navy}`,
                whiteSpace: "nowrap",
              }}
            >
              View Experience →
            </Link>

            <Link
              to="/#work"
              style={{
                fontSize: 12,
                lineHeight: 1.5,
                color: COLORS.muted,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              ← Back to Selected Work
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: isMobile ? "28px 24px" : "28px 80px",
          backgroundColor: COLORS.cream,
          borderTop: `1px solid ${COLORS.border}`,
        }}
      >
        <div
          style={{
            maxWidth: maxW,
            margin: "0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: 14,
          }}
        >
          <p style={{ margin: 0, fontSize: 11, color: COLORS.muted }}>
            © 2026 Giulia Morgan
          </p>

          <p style={{ margin: 0, fontSize: 11, color: COLORS.muted }}>
            Strategy. Brand. Digital.
          </p>
        </div>
      </footer>
    </div>
  );
}
