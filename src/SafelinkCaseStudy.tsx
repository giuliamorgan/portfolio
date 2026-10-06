import { useEffect, useState } from "react";
import { Link } from "react-router";

import safelinkJourneyMap from "@/imports/Screenshot_2024-04-21_164244.png";
import safelinkEmail from "@/imports/Screenshot_2024-04-22_093913.png";
import personaSamuel from "@/imports/Screenshot_2025-10-06_120141.png";
import personaHannah from "@/imports/Screenshot_2024-04-22_101138-2.png";
import personaPete from "@/imports/Screenshot_2025-10-06_120431.png";

const RESUME_URL = "/portfolio/Giulia-Morgan-Resume.pdf";

const COLORS = {
  teal: "#0F766E",
  lightTeal: "#82CFC5",
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
  color: COLORS.teal,
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

export default function SafelinkCaseStudy() {
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
      value: "Collaborative Academic Project",
    },
    {
      label: "Role",
      value: "Audience Strategy + Campaign Development",
    },
    {
      label: "Contribution",
      value: "Personas, Journey Mapping + Lifecycle Campaign Work",
    },
    {
      label: "Status",
      value: "Completed Academic Project",
    },
  ];

  const personas = [
    {
      name: "Police Chief Pete",
      role: "Campus safety and security decision-maker",
      image: personaPete,
    },
    {
      name: "HR Hannah",
      role: "Workplace safety and employee experience decision-maker",
      image: personaHannah,
    },
    {
      name: "Cybersecurity Samuel",
      role: "Technology and security stakeholder",
      image: personaSamuel,
    },
  ];

  const capabilities = [
    "Audience Segmentation",
    "Buyer-Journey Mapping",
    "Campaign Development",
    "Lifecycle + CRM Planning",
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
        }}
      >
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <p style={{ ...EYEBROW, marginBottom: 18 }}>
            Academic Marketing Project
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
            SafeLink Campaign Strategy
          </h1>

          <p
            style={{
              maxWidth: 720,
              margin: "0 0 26px",
              fontSize: isMobile ? 15 : 17,
              lineHeight: 1.6,
              color: COLORS.body,
              fontWeight: 300,
            }}
          >
            Building an integrated campaign around the needs and decision
            journey of a high-consideration B2B audience.
          </p>

          <p style={{ ...bodyText, maxWidth: 680, marginBottom: 36 }}>
            Accelant provided our MK361 class with the SafeLink case and asked
            us to develop the foundation for an integrated marketing campaign.
            Our team translated stakeholder needs into audience personas, a
            buyer journey, and coordinated campaign touchpoints.
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
        </div>
      </section>

      {/* AUDIENCE STRATEGY */}
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
              gap: isMobile || isTablet ? 20 : 64,
              alignItems: "start",
              marginBottom: 36,
            }}
          >
            <div>
              <p style={{ ...EYEBROW, marginBottom: 16 }}>
                Audience Strategy
              </p>

              <h2
                style={{
                  maxWidth: 620,
                  margin: 0,
                  fontFamily: SERIF,
                  fontSize: isMobile ? 34 : "clamp(36px, 3.2vw, 48px)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: COLORS.navy,
                }}
              >
                Audience Insight Before Campaign Execution
              </h2>
            </div>

            <p style={{ ...bodyText, maxWidth: 650 }}>
              We began by identifying the people involved in evaluating,
              approving, and using the platform. Their responsibilities,
              concerns, and decision criteria shaped the campaign journey and
              messaging.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: 20,
              marginBottom: 16,
            }}
          >
            {personas.map((persona) => (
              <a
                key={persona.name}
                href={persona.image}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    height: isMobile ? 250 : 230,
                    overflow: "hidden",
                    backgroundColor: COLORS.cream,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <img
                    src={persona.image}
                    alt={`${persona.name} audience persona`}
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
                    margin: "10px 0 3px",
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: COLORS.navy,
                    fontWeight: 500,
                  }}
                >
                  {persona.name}
                </p>

                <p
                  style={{
                    margin: 0,
                    fontSize: 12,
                    lineHeight: 1.5,
                    color: COLORS.muted,
                  }}
                >
                  {persona.role}
                </p>
              </a>
            ))}
          </div>

          <p
            style={{
              margin: "0 0 36px",
              fontSize: 12,
              lineHeight: 1.6,
              color: COLORS.muted,
            }}
          >
            Select a persona to view the complete artifact.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                isMobile || isTablet ? "1fr" : "0.65fr 1.35fr",
              gap: isMobile || isTablet ? 28 : 48,
              alignItems: "center",
              paddingTop: 36,
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            <div>
              <p style={{ ...EYEBROW, marginBottom: 12 }}>
                Primary Campaign Persona
              </p>

              <h3
                style={{
                  margin: "0 0 14px",
                  fontFamily: SERIF,
                  fontSize: isMobile ? 28 : 34,
                  fontWeight: 300,
                  lineHeight: 1.15,
                  color: COLORS.navy,
                }}
              >
                Mapping Police Chief Pete’s Decision Journey
              </h3>

              <p style={bodyText}>
                Police Chief Pete served as the primary campaign persona. The
                journey mapped his questions and information needs from initial
                awareness through consideration, decision, and continued
                support.
              </p>
            </div>

            <a
              href={safelinkJourneyMap}
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <div
                style={{
                  overflow: "hidden",
                  backgroundColor: COLORS.cream,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <img
                  src={safelinkJourneyMap}
                  alt="Police Chief Pete customer journey map"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>

              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: 12,
                  lineHeight: 1.5,
                  color: COLORS.muted,
                  textAlign: "center",
                }}
              >
                Police Chief Pete customer journey map
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CAMPAIGN EXECUTION */}
      <section style={{ padding: sectionPadding }}>
        <div
          style={{
            maxWidth: maxW,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              isMobile || isTablet ? "1fr" : "0.72fr 1.28fr",
            gap: isMobile || isTablet ? 32 : 64,
            alignItems: "center",
          }}
        >
          <a
            href={safelinkEmail}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "block",
              order: isMobile || isTablet ? 2 : 1,
            }}
          >
            <div
              style={{
                padding: isMobile ? 18 : 24,
                display: "flex",
                justifyContent: "center",
                backgroundColor: COLORS.paleBlue,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <img
                src={safelinkEmail}
                alt="SafeLink lifecycle campaign email"
                style={{
                  display: "block",
                  width: "auto",
                  maxWidth: "100%",
                  height: isMobile ? 360 : 440,
                  objectFit: "contain",
                }}
              />
            </div>
          </a>

          <div style={{ order: isMobile || isTablet ? 1 : 2 }}>
            <p style={{ ...EYEBROW, marginBottom: 14 }}>
              Campaign Execution
            </p>

            <h2
              style={{
                maxWidth: 620,
                margin: "0 0 16px",
                fontFamily: SERIF,
                fontSize: isMobile ? 32 : "clamp(34px, 3.2vw, 44px)",
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: COLORS.navy,
              }}
            >
              Lifecycle Messaging Built Around Education
            </h2>

            <p style={{ ...bodyText, maxWidth: 600, marginBottom: 18 }}>
              The buyer journey informed an educational lifecycle campaign.
              Messaging addressed safety challenges, introduced the platform’s
              capabilities, and directed the audience toward a training webinar
              as the primary conversion event.
            </p>

            <p
              style={{
                maxWidth: 600,
                margin: "0 0 20px",
                fontSize: 12,
                lineHeight: 1.7,
                color: COLORS.muted,
                fontWeight: 300,
              }}
            >
              A simulated HubSpot environment connected campaign
              communications with contacts and lifecycle stages.
            </p>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: 13,
                lineHeight: 1.6,
                color: COLORS.navy,
                fontWeight: 500,
              }}
            >
              Education → Consideration → Decision → Adoption
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px 20px",
                paddingTop: 20,
                borderTop: `1px solid ${COLORS.border}`,
              }}
            >
              {[
                "Email",
                "Training Webinar",
                "Landing Experience",
                "Social Outreach",
                "Educational Content",
                "HubSpot CRM",
              ].map((item) => (
                <p
                  key={item}
                  style={{
                    margin: 0,
                    fontSize: 11,
                    lineHeight: 1.5,
                    letterSpacing: "0.1em",
                    color: COLORS.body,
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section
        style={{
          padding: isMobile ? "44px 24px" : "52px 80px",
          backgroundColor: COLORS.navy,
        }}
      >
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                isMobile || isTablet ? "1fr" : "0.85fr 1.15fr",
              gap: isMobile || isTablet ? 20 : 64,
              alignItems: "start",
              marginBottom: 28,
            }}
          >
            <div>
              <p
                style={{
                  ...EYEBROW,
                  marginBottom: 14,
                  color: COLORS.lightTeal,
                }}
              >
                Outcome
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
                A Connected Full-Funnel Campaign Framework
              </h2>
            </div>

            <div>
              <p
                style={{
                  maxWidth: 680,
                  margin: "0 0 14px",
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: COLORS.darkBody,
                  fontWeight: 300,
                }}
              >
                The final strategy connected audience research, buyer-stage
                questions, campaign messaging, lifecycle communications, and
                CRM planning into one coordinated campaign foundation.
              </p>

              <p
                style={{
                  maxWidth: 680,
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: COLORS.darkBody,
                  fontWeight: 300,
                }}
              >
                The project strengthened my ability to carry audience insight
                through a complete campaign system, connecting stakeholder
                needs with messaging, content, lifecycle touchpoints, and CRM
                planning.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
              borderTop: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            {capabilities.map((item, index) => (
              <div
                key={item}
                style={{
                  padding: "20px 0",
                  paddingLeft: !isMobile && index > 0 ? 24 : 0,
                  paddingRight:
                    !isMobile && index < capabilities.length - 1 ? 24 : 0,
                  borderRight:
                    (!isMobile && index < capabilities.length - 1) ||
                    (isMobile && index % 2 === 0)
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
                    margin: "0 0 8px",
                    fontSize: 11,
                    lineHeight: 1.4,
                    letterSpacing: "0.12em",
                    color: COLORS.lightTeal,
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p
                  style={{
                    maxWidth: 220,
                    margin: 0,
                    fontFamily: SERIF,
                    fontSize: isMobile ? 18 : 21,
                    lineHeight: 1.2,
                    color: COLORS.cream,
                    fontWeight: 400,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              maxWidth: 800,
              margin: "22px 0 0",
              fontSize: 12,
              lineHeight: 1.65,
              color: "#AFC0CD",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            Collaborative MK361 academic project based on an
            Accelant-provided case. SafeLink was the assigned case
            organization, and HubSpot was used as a simulated educational
            environment.
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
              Heart City Campaign
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
              Community Engagement / Campaign Strategy / Creative Development
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
              to="/heart-city"
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
              View Case Study →
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
