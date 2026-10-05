import { useEffect, useState } from "react";
import { Link } from "react-router";

import dashboardMain from "@/imports/Image_9-9-26_at_1.12_PM.png";
import excelDataModel from "@/imports/Screenshot_2026-09-08_at_4.05.19_PM.png";

const RESUME_URL = "/Giulia-Morgan-Resume.pdf";

const COLORS = {
  navy: "#102C49",
  deepNavy: "#0B2138",
  cream: "#FCFAF7",
  paleBlue: "#EEF7FC",
  blue: "#3E82B8",
  body: "#526777",
  muted: "#74899A",
  border: "#DCE6EC",
  darkBody: "#D5DEE5",
  lightLabel: "#B8CAD8",
};

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

const EYEBROW_DARK = {
  margin: 0,
  fontSize: 11,
  lineHeight: 1.4,
  letterSpacing: "0.12em",
  color: COLORS.blue,
  fontWeight: 600,
  textTransform: "uppercase" as const,
};

const EYEBROW_LIGHT = {
  margin: 0,
  fontSize: 11,
  lineHeight: 1.4,
  letterSpacing: "0.12em",
  color: COLORS.lightLabel,
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

export default function DashboardCaseStudy() {
  const [menuOpen, setMenuOpen] = useState(false);
  const width = useWindowWidth();

  const isMobile = width < 768;
  const isTablet = width < 1024;
  const px = isMobile ? "24px" : isTablet ? "48px" : "80px";
  const maxW = 1440;

  const sectionPadding = isMobile
    ? "56px 24px"
    : isTablet
      ? "64px 48px"
      : "64px 80px";

  const bodyText = {
    fontSize: 14,
    lineHeight: 1.8,
    color: COLORS.body,
    fontWeight: 300,
  };

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
              fontFamily: "'Cormorant Garamond', Georgia, serif",
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

      {/* INTRODUCTION */}
      <section
        style={{
          padding: isMobile
            ? "56px 24px"
            : isTablet
              ? "64px 48px"
              : "72px 80px 64px",
          backgroundColor: COLORS.cream,
        }}
      >
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <p style={{ ...EYEBROW_DARK, marginBottom: 18 }}>
            Concept / In Development
          </p>

          <h1
            style={{
              maxWidth: 900,
              margin: "0 0 16px",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: isMobile ? 44 : "clamp(52px, 5.5vw, 72px)",
              fontWeight: 300,
              lineHeight: 1.03,
              letterSpacing: "-0.025em",
              color: COLORS.navy,
            }}
          >
            Integrated Client Dashboard
          </h1>

          <p
            style={{
              maxWidth: 680,
              margin: "0 0 28px",
              fontSize: isMobile ? 15 : 17,
              lineHeight: 1.6,
              color: COLORS.body,
              fontWeight: 300,
            }}
          >
            Designing a clearer, more scalable client experience for project
            communication.
          </p>

          <p
            style={{
              ...bodyText,
              maxWidth: 660,
              margin: "0 0 36px",
            }}
          >
            While supporting active client projects at Keel, I identified an
            opportunity to give clients a clearer and more consistent view of
            project status. I developed the concept for an executive dashboard
            that brings schedule, budget, milestone, and decision information
            into one client-facing experience.
          </p>

          {/* PROJECT INFORMATION */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
              gap: isMobile ? "24px 16px" : 0,
              paddingTop: 24,
              marginBottom: 44,
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            {[
              {
                label: "Project",
                value: "Self-Initiated Business Concept",
              },
              {
                label: "Role",
                value: "Product Concept, UX Design + Systems Planning",
              },
              {
                label: "Ownership",
                value: "Independent concept, prototype + data framework",
              },
              {
                label: "Status",
                value: "Concept + Working Prototype",
              },
            ].map((item, index) => (
              <div
                key={item.label}
                style={{
                  paddingLeft: !isMobile && index > 0 ? 28 : 0,
                  paddingRight: !isMobile && index < 3 ? 28 : 0,
                  borderRight:
                    !isMobile && index < 3
                      ? `1px solid ${COLORS.border}`
                      : "none",
                }}
              >
                <p style={{ ...EYEBROW_DARK, marginBottom: 8 }}>
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

          {/* PRIMARY DASHBOARD VIEW */}
          <div style={{ maxWidth: 1040, margin: "0 auto" }}>
            <div
              style={{
                position: "relative",
                height: isMobile ? 260 : 420,
                overflow: "hidden",
                backgroundColor: COLORS.cream,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <img
                src={dashboardMain}
                alt="Primary client-facing dashboard view"
                style={{
                  position: "absolute",
                  top: 0,
                  left: "-4%",
                  width: "108%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>

            <p
              style={{
                margin: "10px 0 0",
                fontSize: 12,
                lineHeight: 1.5,
                color: COLORS.muted,
              }}
            >
              Working dashboard prototype centralizing project status,
              schedule, budget, milestones, and required decisions.
            </p>

            <p
              style={{
                margin: "6px 0 0",
                fontSize: 12,
                lineHeight: 1.5,
                color: COLORS.muted,
                fontStyle: "italic",
              }}
            >
              Project information has been kept generic to protect client
              confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I BUILT */}
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
              gridTemplateColumns: isMobile ? "1fr" : "0.8fr 1.2fr",
              alignItems: "start",
              gap: isMobile ? 24 : 64,
              marginBottom: 40,
            }}
          >
            <div>
              <p style={{ ...EYEBROW_DARK, marginBottom: 18 }}>
                What I Built
              </p>

              <h2
                style={{
                  margin: 0,
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: isMobile ? 34 : "clamp(36px, 3.2vw, 48px)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: COLORS.navy,
                }}
              >
                From Interface Concept to System Plan
              </h2>
            </div>

            <p
              style={{
                ...bodyText,
                maxWidth: 660,
                margin: 0,
              }}
            >
              I defined what clients needed to understand at a glance,
              designed the responsive dashboard interface, and worked backward
              into the standardized data structure and technical requirements
              needed to support it.
            </p>
          </div>

          {/* CONTRIBUTIONS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? 32 : 64,
              marginBottom: 40,
            }}
          >
            {[
              {
                label: "Experience Design",
                items: [
                  "Defined an executive-level information hierarchy",
                  "Prioritized status, milestones, schedule, budget, and required decisions",
                  "Designed the responsive client-facing interface",
                ],
              },
              {
                label: "Data + Systems Planning",
                items: [
                  "Standardized the client-facing project fields",
                  "Created reusable project IDs and an initial Excel data model",
                  "Defined requirements for secure access, automation, and production integration",
                ],
              },
            ].map((group) => (
              <div key={group.label}>
                <p style={{ ...EYEBROW_DARK, marginBottom: 14 }}>
                  {group.label}
                </p>

                <div style={{ borderTop: `1px solid ${COLORS.border}` }}>
                  {group.items.map((item) => (
                    <p
                      key={item}
                      style={{
                        margin: 0,
                        padding: "12px 0",
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: COLORS.body,
                        fontWeight: 300,
                        borderBottom: `1px solid ${COLORS.border}`,
                      }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* PROCESS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: 16,
              marginBottom: 40,
            }}
          >
            {[
              "Dashboard Prototype",
              "Standardized Data Structure",
              "Secure Integration Plan",
            ].map((item, index) => (
              <div
                key={item}
                style={{
                  position: "relative",
                  padding: "18px 20px",
                  backgroundColor: COLORS.cream,
                  border: `1px solid ${COLORS.border}`,
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 12,
                    lineHeight: 1.5,
                    letterSpacing: "0.1em",
                    color: COLORS.navy,
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </p>

                {!isMobile && index < 2 && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: -13,
                      zIndex: 2,
                      width: 26,
                      color: COLORS.blue,
                      backgroundColor: COLORS.paleBlue,
                      transform: "translateY(-50%)",
                    }}
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* EXCEL DATA MODEL */}
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div
              style={{
                height: isMobile ? 210 : 280,
                border: `1px solid ${COLORS.border}`,
                overflow: "hidden",
                backgroundColor: COLORS.cream,
              }}
            >
              <img
                src={excelDataModel}
                alt="Standardized Excel data model supporting the dashboard"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
            </div>

            <p
              style={{
                margin: "10px 0 0",
                fontSize: 12,
                lineHeight: 1.5,
                color: COLORS.muted,
              }}
            >
              Standardized project fields and identifiers developed to support
              a repeatable dashboard model.
            </p>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section
        style={{
          padding: sectionPadding,
          backgroundColor: COLORS.navy,
        }}
      >
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <p style={{ ...EYEBROW_LIGHT, marginBottom: 18 }}>
            Outcome
          </p>

          <h2
            style={{
              maxWidth: 720,
              margin: "0 0 18px",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: isMobile ? 34 : "clamp(36px, 3.2vw, 48px)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: COLORS.cream,
            }}
          >
            A Clearer Path to a Scalable Client Portal
          </h2>

          <p
            style={{
              maxWidth: 760,
              margin: "0 0 36px",
              fontSize: 14,
              lineHeight: 1.8,
              color: COLORS.darkBody,
              fontWeight: 300,
            }}
          >
            The project produced a working front-end prototype, a reusable
            project-information framework, and a clearer definition of what a
            secure production system would require. It demonstrates my ability
            to turn an ambiguous operational need into a structured product
            concept, reusable data framework, and practical implementation
            plan.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              borderTop: "1px solid rgba(255,255,255,0.12)",
              borderBottom: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {[
              {
                label: "Working Prototype",
                body: "A responsive front-end experience demonstrating how clients could access essential project information.",
              },
              {
                label: "Reusable Framework",
                body: "Standardized project fields and identifiers designed to work across multiple client projects.",
              },
              {
                label: "Defined Implementation Path",
                body: "Clearer requirements for authentication, data synchronization, and secure project-level access.",
              },
            ].map((item, index) => (
              <div
                key={item.label}
                style={{
                  paddingTop: 24,
                  paddingBottom: 24,
                  paddingLeft: !isMobile && index > 0 ? 32 : 0,
                  paddingRight: !isMobile && index < 2 ? 32 : 0,
                  borderRight:
                    !isMobile && index < 2
                      ? "1px solid rgba(255,255,255,0.12)"
                      : "none",
                  borderBottom:
                    isMobile && index < 2
                      ? "1px solid rgba(255,255,255,0.12)"
                      : "none",
                }}
              >
                <p
                  style={{
                    ...EYEBROW_LIGHT,
                    marginBottom: 10,
                    color: COLORS.blue,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3
                  style={{
                    margin: "0 0 10px",
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 24,
                    fontWeight: 400,
                    lineHeight: 1.2,
                    color: COLORS.cream,
                  }}
                >
                  {item.label}
                </h3>

                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: COLORS.darkBody,
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
              maxWidth: 800,
              margin: "24px 0 0",
              fontSize: 12,
              lineHeight: 1.75,
              color: COLORS.lightLabel,
              fontWeight: 300,
            }}
          >
            The project currently exists as a working front-end prototype and
            initial data model. Production integration, live authentication,
            automated synchronization, and client rollout remain future
            phases.
          </p>
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
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: 32,
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 12px",
                fontSize: 11,
                lineHeight: 1.4,
                letterSpacing: "0.12em",
                color: COLORS.muted,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Next Project
            </p>

            <h2
              style={{
                margin: "0 0 8px",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: isMobile ? 30 : 36,
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                color: COLORS.navy,
              }}
            >
              SafeLink Campaign Strategy
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
              B2B Campaign Strategy / Personas / Buyer Journey
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "flex-start" : "flex-end",
              gap: 14,
            }}
          >
            <Link
              to="/safelink"
              style={{
                paddingBottom: 2,
                fontSize: 12,
                lineHeight: 1.5,
                letterSpacing: "0.05em",
                color: COLORS.navy,
                textDecoration: "none",
                borderBottom: `1px solid ${COLORS.navy}`,
              }}
            >
              View Case Study →
            </Link>

            <Link
              to="/#work"
              style={{
                fontSize: 12,
                lineHeight: 1.5,
                color: COLORS.muted,
                textDecoration: "none",
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
          <p
            style={{
              margin: 0,
              fontSize: 11,
              color: COLORS.muted,
            }}
          >
            © 2026 Giulia Morgan
          </p>

          <p
            style={{
              margin: 0,
              fontSize: 11,
              color: COLORS.muted,
            }}
          >
            Strategy. Brand. Digital.
          </p>
        </div>
      </footer>
    </div>
  );
}