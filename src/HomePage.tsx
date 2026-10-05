import { useEffect, useState } from "react";
import { Link } from "react-router";

import measurableOutcomes from "@/imports/Measurable_Outcomes.png";
import safelinkJourneyMap from "@/imports/Screenshot_2024-04-21_164244.png";
import safelinkEmail from "@/imports/Screenshot_2024-04-22_093913.png";
import dashboardScreenshot from "@/imports/Image_9-9-26_at_1.12_PM.png";
import heartCityImage from "@/imports/HCHC_smoothie_image.png";
import mightyWellArticle from "@/imports/Screenshot_2024-04-02_211629.png";
import marshmallowFluff from "@/imports/Screenshot_2024-03-12_231417.png";

/* Replace these placeholders before publishing. */
const RESUME_URL = "#";
const REVIEW_QUOTE =
  "Giulia sees a need at Keel and takes the initiative to act on it. It may involve forming a group or simply getting it done.";

const colors = {
  navy: "#102C49",
  deepNavy: "#0B2138",
  cream: "#FCFAF7",
  paleBlue: "#EEF7FC",
  blue: "#3E82B8",
  blueHover: "#2E6A99",
  body: "#526777",
  muted: "#74899A",
  border: "#DCE6EC",
  darkBody: "#D5DEE5",
  lightLabel: "#B8CAD8",
  darkLink: "#C5D6E2",
};

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: RESUME_URL, external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/giuliamorgan",
    external: true,
  },
  { label: "Contact", href: "#contact" },
];

const capabilities = [
  {
    title: "Strategy & Brand",
    copy: "Brand positioning, audience strategy, competitive research, messaging, content strategy, go-to-market thinking",
  },
  {
    title: "UX & Digital Experience",
    copy: "User needs, information architecture, web strategy, responsive experience, Webflow, journey thinking, client-facing systems",
  },
  {
    title: "Analytics & Optimization",
    copy: "GA4, Google Search Console, Looker Studio, SEO, KPI reporting, performance analysis, conversion thinking",
  },
  {
    title: "Project Leadership & Operations",
    copy: "Stakeholder coordination, prioritization, budget tracking, process improvement, cross-functional delivery, executive communication",
  },
];

const additionalWork = [
  {
    context: "Professional Experience",
    company: "Mighty Well",
    role: "Consumer Health Marketing",
    copy: "Audience and competitive research, social content planning, website UX review, email and ecommerce support, and performance monitoring for a consumer-health brand.",
    image: mightyWellArticle,
    imageAlt: "Mighty Well article by Giulia Morgan",
    imageFit: "cover" as const,
    imagePosition: "top",
    imageBackground: colors.cream,
    href: "/mighty-well",
    button: "View Experience →",
  },
  {
    context: "Academic Client Project",
    company: "Marshmallow Fluff",
    role: "UX Research + Responsive Web Design",
    copy: "A responsive website redesign developed through site evaluation, competitive research, wireframing, and a functional Figma prototype.",
    image: marshmallowFluff,
    imageAlt: "Marshmallow Fluff responsive mobile website design",
    imageFit: "contain" as const,
    imagePosition: "center",
    imageBackground: "#1A1A1A",
    href: "/marshmallow-fluff",
    button: "View Project →",
  },
];

const eyebrowLight = {
  margin: "0 0 14px",
  fontSize: 11,
  lineHeight: 1.4,
  letterSpacing: "0.12em",
  fontWeight: 600,
  textTransform: "uppercase" as const,
  color: colors.lightLabel,
};

const eyebrowDark = {
  margin: "0 0 10px",
  fontSize: 11,
  lineHeight: 1.4,
  letterSpacing: "0.1em",
  fontWeight: 600,
  textTransform: "uppercase" as const,
  color: colors.navy,
};

const serifHeading = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 300,
  letterSpacing: "-0.01em",
};

const educationText = {
  margin: "0 0 6px",
  fontSize: 14,
  lineHeight: 1.6,
  color: colors.body,
  fontWeight: 300,
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

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const width = useWindowWidth();

  const isMobile = width < 768;
  const isTablet = width < 1024;
  const pagePadding = isMobile ? "24px" : isTablet ? "48px" : "80px";
  const maxWidth = 1440;

  const container = {
    maxWidth,
    margin: "0 auto",
    padding: `0 ${pagePadding}`,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: colors.cream,
        color: colors.navy,
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
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div
          style={{
            ...container,
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="#about"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 19,
              fontWeight: 500,
              letterSpacing: "0.02em",
              color: colors.navy,
              textDecoration: "none",
            }}
          >
            Giulia Morgan
          </a>

          {!isMobile && (
            <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={
                    item.external && item.href !== "#" ? "_blank" : undefined
                  }
                  rel={
                    item.external && item.href !== "#"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  style={{
                    fontSize: 12,
                    lineHeight: 1.5,
                    letterSpacing: "0.05em",
                    color: colors.body,
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
                    backgroundColor: colors.navy,
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
              backgroundColor: colors.cream,
              borderTop: `1px solid ${colors.border}`,
            }}
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={
                  item.external && item.href !== "#" ? "_blank" : undefined
                }
                rel={
                  item.external && item.href !== "#"
                    ? "noopener noreferrer"
                    : undefined
                }
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "10px 0",
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: colors.body,
                  textDecoration: "none",
                  borderBottom: `1px solid ${colors.border}`,
                }}
              >
                {item.label}
                {item.external ? " ↗" : ""}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO / ABOUT */}
      <section
        id="about"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: `${isMobile ? 56 : 72}px 0`,
          scrollMarginTop: 60,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(90deg, #EEF7FC 0px, #EEF7FC 60px, #FCFAF7 60px, #FCFAF7 140px)",
            opacity: 0.45,
          }}
        />

        <div style={{ ...container, position: "relative", zIndex: 1 }}>
          <h1
            style={{
              ...serifHeading,
              margin: "0 0 20px",
              fontSize: isMobile ? 46 : "clamp(52px, 5.25vw, 76px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Giulia Morgan
          </h1>

          <p
            style={{
              maxWidth: 680,
              margin: "0 0 30px",
              fontSize: isMobile ? 15 : 16,
              lineHeight: 1.75,
              color: colors.body,
              fontWeight: 300,
            }}
          >
            I&apos;m a marketing professional and Associate Project Manager
            based in Greater Boston. My work connects brand strategy, digital
            experience, content, analytics, and project execution. I&apos;m
            especially interested in roles where I can bring structure to
            cross-functional marketing initiatives and translate strategy into
            measurable work.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: isMobile ? 20 : 28,
            }}
          >
            <a
              href="#work"
              style={{
                padding: "12px 26px",
                backgroundColor: colors.navy,
                color: colors.cream,
                fontSize: 12,
                lineHeight: 1.5,
                letterSpacing: "0.06em",
                fontWeight: 600,
                textDecoration: "none",
                borderRadius: 3,
              }}
            >
              View Work
            </a>

            <a
              href={RESUME_URL}
              target={RESUME_URL !== "#" ? "_blank" : undefined}
              rel={RESUME_URL !== "#" ? "noopener noreferrer" : undefined}
              style={{
                fontSize: 12,
                color: colors.body,
                textDecoration: "none",
              }}
            >
              Resume ↗
            </a>

            <a
              href="https://www.linkedin.com/in/giuliamorgan"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12,
                color: colors.body,
                textDecoration: "none",
              }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section
        id="work"
        style={{
          padding: `${isMobile ? 56 : 80}px 0`,
          backgroundColor: colors.navy,
          scrollMarginTop: 60,
        }}
      >
        <div style={container}>
          <h2
            style={{
              ...serifHeading,
              margin: "0 0 40px",
              fontSize: isMobile ? 36 : "clamp(38px, 4vw, 52px)",
              lineHeight: 1.1,
              color: colors.cream,
            }}
          >
            Selected Work
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <ProjectCard
              context="Professional Work"
              title="Keel Brand & Digital Transformation"
              summary="Brand, website, content, search, and analytics work led alongside my Associate Project Manager role."
              image={measurableOutcomes}
              imageAlt="Keel digital marketing website"
              imagePosition="25% 15%"
              href="/keel"
              reverse={false}
              featured
              isMobile={isMobile}
            />

            <ProjectCard
              context="Concept / In Development"
              title="Integrated Client Dashboard"
              summary="A client-facing executive dashboard designed to centralize project information. Front-end prototype built; data integration and authentication are in development."
              image={dashboardScreenshot}
              imageAlt="Integrated client dashboard prototype"
              imagePosition="50% 60%"
              href="/dashboard"
              reverse
              isMobile={isMobile}
            />

            {/* SAFELINK */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1.5fr",
                overflow: "hidden",
                border: "1px solid rgba(220,230,236,0.12)",
                borderRadius: 3,
              }}
            >
              <div
                style={{
                  minHeight: isMobile ? "auto" : 250,
                  padding: isMobile ? "32px 28px" : "40px 44px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p style={eyebrowLight}>Academic Marketing Project</p>

                  <h3
                    style={{
                      margin: "0 0 14px",
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: isMobile ? 26 : 30,
                      fontWeight: 400,
                      lineHeight: 1.15,
                      color: colors.cream,
                    }}
                  >
                    SafeLink Campaign Strategy
                  </h3>

                  <p
                    style={{
                      maxWidth: 320,
                      margin: 0,
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: colors.darkBody,
                      fontWeight: 300,
                    }}
                  >
                    Full-funnel B2B campaign built around the buyer decision
                    journey, from persona development through lifecycle email
                    and CRM simulation.
                  </p>
                </div>

                <CaseStudyLink href="/safelink" />
              </div>

              <div
                style={{
                  minHeight: isMobile ? "auto" : 250,
                  padding: "22px 20px",
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 18,
                  overflow: "hidden",
                  backgroundColor: "#0D2438",
                  borderLeft: isMobile
                    ? "none"
                    : "1px solid rgba(220,230,236,0.08)",
                  borderTop: isMobile
                    ? "1px solid rgba(220,230,236,0.08)"
                    : "none",
                }}
              >
                <img
                  src={safelinkJourneyMap}
                  alt="Police Chief Pete buyer journey map"
                  style={{
                    width: "auto",
                    maxWidth: isMobile ? "100%" : "48%",
                    height: isMobile ? "auto" : 165,
                    objectFit: "contain",
                  }}
                />

                {!isMobile && (
                  <div
                    style={{
                      width: 1,
                      alignSelf: "stretch",
                      backgroundColor: "rgba(220,230,236,0.1)",
                    }}
                  />
                )}

                <img
                  src={safelinkEmail}
                  alt="SafeLink lifecycle campaign email"
                  style={{
                    width: "auto",
                    maxWidth: isMobile ? "100%" : "48%",
                    height: isMobile ? "auto" : 165,
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            <ProjectCard
              context="Academic Client Work"
              title="Heart City Health Cafe"
              summary="Consumer and market research used to develop a growth strategy and business recommendations for a real health-focused cafe client."
              image={heartCityImage}
              imageAlt="Heart City Health Cafe smoothie cup"
              imagePosition="center"
              href="/heart-city"
              reverse
              isMobile={isMobile}
            />
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="skills"
        style={{
          padding: `${isMobile ? 52 : 72}px 0`,
          backgroundColor: colors.cream,
          borderTop: `1px solid ${colors.border}`,
          scrollMarginTop: 60,
        }}
      >
        <div style={container}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isTablet ? "1fr" : "1fr 2fr",
              alignItems: "start",
              gap: isTablet ? 36 : 64,
              marginBottom: 40,
            }}
          >
            <h2
              style={{
                ...serifHeading,
                margin: 0,
                fontSize: isMobile ? 32 : "clamp(32px, 3vw, 44px)",
                lineHeight: 1.1,
              }}
            >
              Capabilities
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? 28 : 36,
              }}
            >
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  style={{
                    paddingTop: 20,
                    borderTop: `1px solid ${colors.border}`,
                  }}
                >
                  <p style={eyebrowDark}>{item.title}</p>

                  <p
                    style={{
                      margin: 0,
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: colors.body,
                      fontWeight: 300,
                    }}
                  >
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              paddingTop: 24,
              borderTop: `1px solid ${colors.border}`,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 12,
                lineHeight: 1.8,
                letterSpacing: "0.1em",
                color: colors.muted,
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Webflow / Figma / GA4 / Google Search Console / Looker Studio /
              HubSpot / Canva / Microsoft 365
            </p>
          </div>
        </div>
      </section>

      {/* ADDITIONAL WORK */}
      <section
        style={{
          padding: `${isMobile ? 52 : 68}px 0`,
          backgroundColor: colors.paleBlue,
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div style={container}>
          <h2
            style={{
              ...serifHeading,
              margin: "0 0 36px",
              fontSize: isMobile ? 32 : "clamp(32px, 3.2vw, 44px)",
              lineHeight: 1.1,
            }}
          >
            Additional Work
          </h2>

          <div
            style={{
              maxWidth: 1040,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 24,
            }}
          >
            {additionalWork.map((item) => (
              <AdditionalCard
                key={item.company}
                item={item}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        style={{
          padding: `${isMobile ? 48 : 64}px 0`,
          backgroundColor: colors.cream,
          borderTop: `1px solid ${colors.border}`,
        }}
      >
        <div style={container}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr",
              alignItems: "start",
              gap: isTablet ? 36 : 72,
            }}
          >
            <div>
              <h2
                style={{
                  ...serifHeading,
                  margin: "0 0 10px",
                  fontSize: isMobile ? 28 : 32,
                  lineHeight: 1.15,
                }}
              >
                Bentley University
              </h2>

              <p style={educationText}>Bachelor of Science in Marketing</p>
              <p style={educationText}>LSM in Quantitative Perspectives</p>

              <p
                style={{
                  margin: "8px 0 0",
                  fontSize: 12,
                  color: colors.muted,
                  fontWeight: 300,
                }}
              >
                May 2025 · GPA 3.73
              </p>
            </div>

            <div
              style={{
                paddingLeft: isTablet ? 0 : 44,
                paddingTop: isTablet ? 28 : 0,
                borderLeft: isTablet
                  ? "none"
                  : `1px solid ${colors.border}`,
                borderTop: isTablet
                  ? `1px solid ${colors.border}`
                  : "none",
              }}
            >
              <p style={eyebrowDark}>Leadership & Certifications</p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {[
                  "President, Bentley Italian Society",
                  "Campus-Wide Professional Sales Competition, First Place",
                  "HubSpot Digital Marketing Certification",
                  "HubSpot Content Marketing Certification",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        width: 12,
                        height: 1,
                        marginTop: 9,
                        flexShrink: 0,
                        backgroundColor: colors.blue,
                      }}
                    />

                    <span
                      style={{
                        fontSize: 14,
                        lineHeight: 1.5,
                        color: colors.body,
                        fontWeight: 300,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE REVIEW QUOTE */}
      <section
        style={{
          padding: `${isMobile ? 44 : 54}px 0`,
          backgroundColor: colors.cream,
          borderTop: `1px solid ${colors.border}`,
        }}
      >
        <div style={{ ...container, maxWidth: 1080 }}>
          <p
            style={{
              margin: "0 0 14px",
              color: colors.blue,
              fontSize: 11,
              lineHeight: 1.4,
              letterSpacing: "0.12em",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Performance Review
          </p>

          <blockquote
            style={{
              maxWidth: 860,
              margin: "0 0 18px",
              color: colors.navy,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: isMobile ? 25 : 30,
              fontWeight: 300,
              lineHeight: 1.35,
              letterSpacing: "-0.01em",
            }}
          >
            “{REVIEW_QUOTE}”
          </blockquote>

          <p
            style={{
              margin: 0,
              color: colors.muted,
              fontSize: 12,
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            2026 Performance Review · Keel Project Management
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: `${isMobile ? 56 : 76}px 0`,
          backgroundColor: colors.navy,
          scrollMarginTop: 60,
        }}
      >
        <div style={container}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr",
              alignItems: "center",
              gap: isTablet ? 44 : 72,
            }}
          >
            <div>
              <h2
                style={{
                  ...serifHeading,
                  margin: "0 0 20px",
                  fontSize: isMobile ? 46 : "clamp(48px, 5vw, 68px)",
                  lineHeight: 1.05,
                  color: colors.cream,
                }}
              >
                Contact
              </h2>

              <p
                style={{
                  maxWidth: 420,
                  margin: "0 0 28px",
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: colors.darkBody,
                  fontWeight: 300,
                }}
              >
                I&apos;m open to conversations about marketing, digital
                experience, brand, and new opportunities.
              </p>

              <a
                href="mailto:giuliamorgan7@gmail.com"
                style={{
                  display: "inline-block",
                  padding: "12px 28px",
                  backgroundColor: colors.blue,
                  color: colors.cream,
                  fontSize: 12,
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: 3,
                }}
              >
                Get In Touch →
              </a>
            </div>

            <div
              style={{
                paddingLeft: isTablet ? 0 : 44,
                paddingTop: isTablet ? 32 : 0,
                borderLeft: isTablet
                  ? "none"
                  : "1px solid rgba(220,230,236,0.14)",
                borderTop: isTablet
                  ? "1px solid rgba(220,230,236,0.14)"
                  : "none",
              }}
            >
              <ContactDetail
                label="Location"
                value="Greater Boston, MA"
              />

              <ContactDetail
                label="Email"
                value="giuliamorgan7@gmail.com"
                href="mailto:giuliamorgan7@gmail.com"
              />

              <ContactDetail
                label="LinkedIn"
                value="linkedin.com/in/giuliamorgan"
                href="https://www.linkedin.com/in/giuliamorgan"
                external
                last
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "24px 0",
          backgroundColor: colors.deepNavy,
          borderTop: "1px solid rgba(220,230,236,0.08)",
        }}
      >
        <div
          style={{
            ...container,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 17,
              fontWeight: 500,
              color: colors.cream,
            }}
          >
            Giulia Morgan
          </p>

          <nav style={{ display: "flex", gap: 24 }}>
            {[
              ["Work", "#work"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                style={{
                  fontSize: 11,
                  color: colors.lightLabel,
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}

function CaseStudyLink({ href }: { href: string }) {
  return (
    <Link
      to={href}
      style={{
        alignSelf: "flex-start",
        marginTop: 28,
        paddingBottom: 2,
        fontSize: 12,
        lineHeight: 1.5,
        color: colors.darkLink,
        textDecoration: "none",
        borderBottom: "1px solid rgba(197,214,226,0.4)",
      }}
    >
      View Case Study →
    </Link>
  );
}

function ProjectCard({
  context,
  title,
  summary,
  image,
  imageAlt,
  imagePosition,
  href,
  reverse,
  featured = false,
  isMobile,
}: {
  context: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  href: string;
  reverse: boolean;
  featured?: boolean;
  isMobile: boolean;
}) {
  const height = featured ? 290 : 250;

  const text = (
    <div
      style={{
        minHeight: isMobile ? "auto" : height,
        padding: isMobile ? "32px 28px" : "40px 44px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <p style={eyebrowLight}>{context}</p>

        <h3
          style={{
            margin: "0 0 14px",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: featured ? (isMobile ? 28 : 34) : isMobile ? 26 : 30,
            fontWeight: 400,
            lineHeight: 1.15,
            color: colors.cream,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            maxWidth: 350,
            margin: 0,
            fontSize: 14,
            lineHeight: 1.7,
            color: colors.darkBody,
            fontWeight: 300,
          }}
        >
          {summary}
        </p>
      </div>

      <CaseStudyLink href={href} />
    </div>
  );

  const imageBlock = (
    <div
      style={{
        position: "relative",
        minHeight: isMobile ? 210 : height,
        overflow: "hidden",
        borderLeft:
          !isMobile && !reverse
            ? "1px solid rgba(220,230,236,0.08)"
            : "none",
        borderRight:
          !isMobile && reverse
            ? "1px solid rgba(220,230,236,0.08)"
            : "none",
        borderTop: isMobile
          ? "1px solid rgba(220,230,236,0.08)"
          : "none",
      }}
    >
      <img
        src={image}
        alt={imageAlt}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: imagePosition,
        }}
      />
    </div>
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1.5fr",
        overflow: "hidden",
        border: "1px solid rgba(220,230,236,0.12)",
        borderRadius: 3,
      }}
    >
      {isMobile ? (
        <>
          {text}
          {imageBlock}
        </>
      ) : reverse ? (
        <>
          {imageBlock}
          {text}
        </>
      ) : (
        <>
          {text}
          {imageBlock}
        </>
      )}
    </div>
  );
}

function AdditionalCard({
  item,
  isMobile,
}: {
  item: (typeof additionalWork)[number];
  isMobile: boolean;
}) {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        backgroundColor: colors.cream,
        border: `1px solid ${colors.border}`,
        borderRadius: 3,
      }}
    >
      <div
        style={{
          position: "relative",
          height: isMobile ? 190 : 200,
          overflow: "hidden",
          backgroundColor: item.imageBackground,
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <img
          src={item.image}
          alt={item.imageAlt}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: item.imageFit,
            objectPosition: item.imagePosition,
          }}
        />
      </div>

      <div
        style={{
          padding: "22px 24px 24px",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <p style={{ ...eyebrowDark, color: colors.blue }}>
          {item.context}
        </p>

        <h3
          style={{
            margin: "0 0 4px",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 23,
            fontWeight: 400,
            color: colors.navy,
          }}
        >
          {item.company}
        </h3>

        <p
          style={{
            margin: "0 0 10px",
            fontSize: 12,
            color: colors.body,
            fontWeight: 500,
          }}
        >
          {item.role}
        </p>

        <p
          style={{
            margin: "0 0 18px",
            fontSize: 13,
            lineHeight: 1.65,
            color: colors.body,
            fontWeight: 300,
          }}
        >
          {item.copy}
        </p>

        <Link
          to={item.href}
          style={{
            marginTop: "auto",
            padding: "9px 16px",
            backgroundColor: colors.navy,
            color: colors.cream,
            fontSize: 11,
            fontWeight: 600,
            textDecoration: "none",
            borderRadius: 3,
          }}
        >
          {item.button}
        </Link>
      </div>
    </article>
  );
}

function ContactDetail({
  label,
  value,
  href,
  external = false,
  last = false,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  last?: boolean;
}) {
  const valueStyle = {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.5,
    color: colors.cream,
    fontWeight: 300,
    textDecoration: "none",
  };

  return (
    <div
      style={{
        paddingBottom: last ? 0 : 20,
        marginBottom: last ? 0 : 20,
        borderBottom: last
          ? "none"
          : "1px solid rgba(220,230,236,0.1)",
      }}
    >
      <p style={{ ...eyebrowLight, marginBottom: 6 }}>{label}</p>

      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          style={valueStyle}
        >
          {value}
        </a>
      ) : (
        <p style={valueStyle}>{value}</p>
      )}
    </div>
  );
}