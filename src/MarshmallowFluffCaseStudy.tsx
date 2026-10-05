import { useEffect, useState } from "react";
import { Link } from "react-router";

import mobileDesign from "@/imports/Screenshot_2024-03-12_231417.png";
import lowFidelityWireframe from "@/imports/Screenshot_2024-03-12_175103.png";

const RESUME_URL = "/Giulia-Morgan-Resume.pdf";

const COLORS = {
  red: "#B84338",
  lightRed: "#F08A80",
  navy: "#102C49",
  cream: "#FCFAF7",
  paleBlue: "#EEF7FC",
  body: "#526777",
  muted: "#74899A",
  border: "#DCE6EC",
  darkBody: "#D5DEE5",
};

const SERIF = "'Cormorant Garamond', Georgia, serif";

const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
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

export default function MarshmallowFluffPage() {
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
      value: "Individual Academic Project",
    },
    {
      label: "Role",
      value: "UX + Web Designer",
    },
    {
      label: "Focus",
      value: "Research, Information Architecture + Interface Design",
    },
    {
      label: "Deliverable",
      value: "Interactive Figma Concept",
    },
  ];

  const priorities = [
    {
      title: "Preserve Recognition",
      body: "Retain the product imagery, established colors, and familiar character customers already associate with Marshmallow Fluff.",
    },
    {
      title: "Clarify Exploration",
      body: "Create clearer pathways between product information, recipes, purchase options, and the broader brand story.",
    },
    {
      title: "Prioritize Mobile",
      body: "Translate the content into a compact interface with simplified navigation, stronger hierarchy, and prominent actions.",
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
            <nav
              aria-label="Primary navigation"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 28,
              }}
            >
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
              aria-expanded={menuOpen}
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
            aria-label="Mobile navigation"
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

      <main>
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
              Academic UX Concept
            </p>

            <h1
              style={{
                maxWidth: 1000,
                margin: "0 0 16px",
                fontFamily: SERIF,
                fontSize: isMobile ? 44 : "clamp(52px, 5.5vw, 72px)",
                fontWeight: 300,
                lineHeight: 1.03,
                letterSpacing: "-0.025em",
                color: COLORS.navy,
              }}
            >
              Marshmallow Fluff Website Redesign
            </h1>

            <p
              style={{
                maxWidth: 740,
                margin: "0 0 24px",
                fontSize: isMobile ? 15 : 17,
                lineHeight: 1.6,
                color: COLORS.body,
                fontWeight: 300,
              }}
            >
              Exploring how an established consumer brand could organize
              product, recipe, and purchase content into a clearer mobile
              experience.
            </p>

            <p
              style={{
                ...bodyText,
                maxWidth: 720,
                marginBottom: 36,
              }}
            >
              I evaluated the existing Marshmallow Fluff website, reviewed
              comparable consumer-brand experiences, and translated those
              findings into a new content structure, low-fidelity wireframe,
              and mobile interface concept.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
                gap: isMobile ? "24px 16px" : 0,
                paddingTop: 24,
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
                  <p style={{ ...EYEBROW, marginBottom: 8 }}>
                    {item.label}
                  </p>

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
          </div>
        </section>

        {/* REDESIGN PRIORITIES */}
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
                  Redesign Priorities
                </p>

                <h2
                  style={{
                    maxWidth: 620,
                    margin: 0,
                    fontFamily: SERIF,
                    fontSize: isMobile
                      ? 34
                      : "clamp(36px, 3.2vw, 48px)",
                    fontWeight: 300,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    color: COLORS.navy,
                  }}
                >
                  Clarifying How Customers Explore the Brand
                </h2>
              </div>

              <p style={{ ...bodyText, maxWidth: 660 }}>
                The concept focused on making the experience easier to navigate
                without losing the recognizable visual personality of the
                Marshmallow Fluff brand. Three priorities guided the structure
                and interface.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                borderTop: `1px solid ${COLORS.border}`,
                borderBottom: `1px solid ${COLORS.border}`,
              }}
            >
              {priorities.map((item, index) => (
                <div
                  key={item.title}
                  style={{
                    padding: "26px 0",
                    paddingLeft: !isMobile && index > 0 ? 32 : 0,
                    paddingRight:
                      !isMobile && index < priorities.length - 1 ? 32 : 0,
                    borderRight:
                      !isMobile && index < priorities.length - 1
                        ? `1px solid ${COLORS.border}`
                        : "none",
                    borderBottom:
                      isMobile && index < priorities.length - 1
                        ? `1px solid ${COLORS.border}`
                        : "none",
                  }}
                >
                  <p style={{ ...EYEBROW, marginBottom: 10 }}>
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3
                    style={{
                      margin: "0 0 10px",
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
          </div>
        </section>

        {/* DESIGN DEVELOPMENT */}
        <section
          style={{
            padding: sectionPadding,
            backgroundColor: COLORS.cream,
          }}
        >
          <div style={{ maxWidth: maxW, margin: "0 auto" }}>
            <p style={{ ...EYEBROW, marginBottom: 16 }}>
              Design Development
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
              From Content Structure to Mobile Interface
            </h2>

            <p
              style={{
                ...bodyText,
                maxWidth: 720,
                marginBottom: 34,
              }}
            >
              The low-fidelity wireframe established the page hierarchy and
              major content areas. The mobile concept then translated that
              structure into a more focused interface using familiar brand
              elements, clearer navigation, and more visible purchase and
              recipe pathways.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  isMobile || isTablet ? "1fr" : "1.6fr 0.7fr",
                gap: isMobile ? 32 : 24,
                alignItems: "stretch",
              }}
            >
              {/* WIREFRAME */}
              <figure style={{ margin: 0 }}>
                <div
                  style={{
                    height: isMobile ? 340 : 520,
                    padding: isMobile ? 16 : 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    backgroundColor: "#F2F5F6",
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <img
                    src={lowFidelityWireframe}
                    alt="Low-fidelity Marshmallow Fluff website wireframe"
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <figcaption
                  style={{
                    marginTop: 12,
                    fontSize: 12,
                    lineHeight: 1.65,
                    color: COLORS.muted,
                  }}
                >
                  <strong
                    style={{
                      color: COLORS.navy,
                      fontWeight: 600,
                    }}
                  >
                    Structural wireframe.
                  </strong>{" "}
                  Early exploration of navigation, hierarchy, product content,
                  recipes, and supporting brand information.
                </figcaption>
              </figure>

              {/* MOBILE DESIGN */}
              <figure style={{ margin: 0 }}>
                <div
                  style={{
                    height: isMobile ? 600 : 520,
                    padding: isMobile ? 18 : 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    backgroundColor: COLORS.paleBlue,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <img
                    src={mobileDesign}
                    alt="Mobile interface concept for the Marshmallow Fluff website"
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <figcaption
                  style={{
                    marginTop: 12,
                    fontSize: 12,
                    lineHeight: 1.65,
                    color: COLORS.muted,
                  }}
                >
                  <strong
                    style={{
                      color: COLORS.navy,
                      fontWeight: 600,
                    }}
                  >
                    Mobile interface concept.
                  </strong>{" "}
                  Mobile translation featuring simplified navigation, stronger
                  content grouping, and more prominent purchase and recipe
                  actions.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* CONCEPT TAKEAWAY */}
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
                isMobile || isTablet ? "1fr" : "0.85fr 1.15fr",
              gap: isMobile || isTablet ? 18 : 64,
              alignItems: "start",
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
                Concept Takeaway
              </p>

              <h2
                style={{
                  maxWidth: 600,
                  margin: 0,
                  fontFamily: SERIF,
                  fontSize: isMobile ? 32 : 40,
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: COLORS.cream,
                }}
              >
                Connecting Brand Recognition with Clearer Content Structure
              </h2>
            </div>

            <div>
              <p
                style={{
                  maxWidth: 700,
                  margin: "0 0 14px",
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: COLORS.darkBody,
                  fontWeight: 300,
                }}
              >
                The final concept brought product information, recipes,
                purchasing pathways, and brand content into one more deliberate
                structure. It demonstrates how I move from evaluating an
                existing experience to establishing priorities and translating
                them into an interface.
              </p>

              <p
                style={{
                  maxWidth: 700,
                  margin: "0 0 18px",
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: COLORS.darkBody,
                  fontWeight: 300,
                }}
              >
                Because this was an academic concept rather than a launched
                redesign, its value lies in the design process and rationale
                rather than measured performance results.
              </p>

              <p
                style={{
                  maxWidth: 700,
                  margin: 0,
                  paddingTop: 18,
                  fontSize: 12,
                  lineHeight: 1.65,
                  color: "#AFC0CD",
                  fontWeight: 300,
                  fontStyle: "italic",
                  borderTop: "1px solid rgba(255,255,255,0.14)",
                }}
              >
                Individual academic project. The redesign was developed as an
                interactive Figma concept and was not launched as a live
                website.
              </p>
            </div>
          </div>
        </section>

        {/* RETURN TO WORK */}
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
                Continue Exploring
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
                Explore Selected Work
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
                Strategy / Brand / Digital Experience
              </p>
            </div>

            <Link
              to="/#work"
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
              Back to Selected Work →
            </Link>
          </div>
        </section>
      </main>

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