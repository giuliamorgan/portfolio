import { useEffect, useState } from "react";
import { Link } from "react-router";

import mightyWellArticle from "@/imports/Screenshot_2024-04-02_211629.png";
import mightyWellInstagram from "@/imports/Screenshot_2024-04-02_210832.png";

const RESUME_URL = "/Giulia-Morgan-Resume.pdf";

const COLORS = {
  navy: "#102C49",
  cream: "#FCFAF7",
  paleBlue: "#EEF7FC",
  body: "#526777",
  muted: "#74899A",
  border: "#DCE6EC",
  teal: "#0F766E",
  lightTeal: "#82CFC5",
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

export default function MightyWellExperience() {
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
      label: "Role",
      value: "Marketing & Communications Intern",
    },
    {
      label: "Timeline",
      value: "February–May 2024",
    },
    {
      label: "Industry",
      value: "Consumer Health / Ecommerce",
    },
    {
      label: "Focus",
      value: "Research / Content / UX / Email / Social",
    },
  ];

  const workAreas = [
    {
      title: "Research + Audience",
      body: "Analyzed customer demographics, product interest, competitor positioning, market trends, and audience patterns.",
    },
    {
      title: "Content + Channels",
      body: "Supported content calendars, blog content, email campaigns, and communications across Instagram, LinkedIn, Facebook, and Pinterest.",
    },
    {
      title: "Digital Experience + Ecommerce",
      body: "Evaluated website UX, supported Shopify content, created campaign mockups, and helped maintain accurate product information.",
    },
  ];

  const selectedWork = [
    {
      title: "Editorial Content",
      body: "Contributed to educational blog content designed to answer product questions and support informed purchasing decisions.",
      caption: "Educational article content for the Mighty Well website",
      image: mightyWellArticle,
      alt: "Mighty Well compression socks article",
      fit: "cover" as const,
      position: "top",
    },
    {
      title: "Social Content + Brand Execution",
      body: "Supported social planning and creative development while monitoring how content performed across key consumer channels.",
      caption: "Mighty Well’s Instagram presence during my internship",
      image: mightyWellInstagram,
      alt: "Mighty Well Instagram profile and content",
      fit: "contain" as const,
      position: "center",
    },
  ];

  const capabilities = [
    "Consumer Research",
    "Editorial + Social Content",
    "Ecommerce + Shopify",
    "Digital UX",
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
            Professional Experience
          </p>

          <h1
            style={{
              maxWidth: 1050,
              margin: "0 0 14px",
              fontFamily: SERIF,
              fontSize: isMobile ? 46 : "clamp(54px, 5.5vw, 72px)",
              fontWeight: 300,
              lineHeight: 1.03,
              letterSpacing: "-0.025em",
              color: COLORS.navy,
            }}
          >
            Mighty Well
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
            Supporting consumer health marketing across research, content,
            ecommerce, and digital experience.
          </p>

          <p style={{ ...bodyText, maxWidth: 680, marginBottom: 36 }}>
            During my marketing and communications internship, I supported a
            health-and-wellness brand serving people with chronic illness and
            medical-device needs across several customer touchpoints.
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

      {/* CONTRIBUTIONS */}
      <section
        style={{
          padding: sectionPadding,
          backgroundColor: COLORS.paleBlue,
        }}
      >
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <p style={{ ...EYEBROW, marginBottom: 16 }}>
            Areas of Contribution
          </p>

          <h2
            style={{
              maxWidth: 760,
              margin: "0 0 34px",
              fontFamily: SERIF,
              fontSize: isMobile ? 34 : "clamp(36px, 3.2vw, 48px)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: COLORS.navy,
            }}
          >
            Supporting the Consumer Experience Across Channels
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              borderTop: `1px solid ${COLORS.border}`,
              borderBottom: `1px solid ${COLORS.border}`,
            }}
          >
            {workAreas.map((item, index) => (
              <div
                key={item.title}
                style={{
                  paddingTop: 26,
                  paddingBottom: 26,
                  paddingLeft: !isMobile && index > 0 ? 32 : 0,
                  paddingRight:
                    !isMobile && index < workAreas.length - 1 ? 32 : 0,
                  borderRight:
                    !isMobile && index < workAreas.length - 1
                      ? `1px solid ${COLORS.border}`
                      : "none",
                  borderBottom:
                    isMobile && index < workAreas.length - 1
                      ? `1px solid ${COLORS.border}`
                      : "none",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontFamily: SERIF,
                    fontSize: 23,
                    lineHeight: 1.2,
                    color: COLORS.navy,
                    fontWeight: 400,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.75,
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

      {/* SELECTED WORK */}
      <section
        style={{
          padding: sectionPadding,
          backgroundColor: COLORS.cream,
        }}
      >
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <p style={{ ...EYEBROW, marginBottom: 16 }}>
            Selected Work
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
            Content Across Editorial and Social Channels
          </h2>

          <p style={{ ...bodyText, maxWidth: 680, marginBottom: 34 }}>
            My work supported consumer education and ongoing brand
            communication across the company’s website and social channels.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 24,
            }}
          >
            {selectedWork.map((item) => (
              <div key={item.title}>
                <div
                  style={{
                    height: isMobile ? 280 : 340,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    backgroundColor: "#F3F6F8",
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: item.fit,
                      objectPosition: item.position,
                    }}
                  />
                </div>

                <h3
                  style={{
                    margin: "14px 0 8px",
                    fontFamily: SERIF,
                    fontSize: 24,
                    lineHeight: 1.2,
                    color: COLORS.navy,
                    fontWeight: 400,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: "0 0 10px",
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: COLORS.body,
                    fontWeight: 300,
                  }}
                >
                  {item.body}
                </p>

                <p
                  style={{
                    margin: 0,
                    fontSize: 12,
                    lineHeight: 1.5,
                    color: COLORS.muted,
                  }}
                >
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAKEAWAY + CAPABILITIES */}
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
                isMobile || isTablet ? "1fr" : "0.8fr 1.2fr",
              gap: isMobile || isTablet ? 18 : 64,
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
                Experience Takeaway
              </p>

              <h2
                style={{
                  maxWidth: 580,
                  margin: 0,
                  fontFamily: SERIF,
                  fontSize: isMobile ? 32 : 40,
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: COLORS.cream,
                }}
              >
                Connecting Consumer Insight with Channel Execution
              </h2>
            </div>

            <p
              style={{
                maxWidth: 700,
                margin: 0,
                fontSize: 14,
                lineHeight: 1.8,
                color: COLORS.darkBody,
                fontWeight: 300,
              }}
            >
              Mighty Well gave me in-house experience supporting a physical
              consumer product across research, content, ecommerce, and digital
              experience. It strengthened my understanding of how audience
              insight, product information, and channel execution work together
              within a consumer-health brand.
            </p>
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
        </div>
      </section>

      {/* NEXT EXPERIENCE */}
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
              Next Experience
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
              Marshmallow Fluff Website Redesign
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
              Academic Client Project / UX Research / Responsive Web Design
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
              to="/marshmallow-fluff"
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