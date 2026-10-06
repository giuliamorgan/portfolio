import { useEffect, useState } from "react";
import { Link } from "react-router";

import oldKeelHomepage from "@/imports/Screenshot_2026-09-08_192740.png";
import newKeelHomepage from "@/imports/Faster_Decisions.png";
import contentStrategyImg from "@/imports/Screenshot_2026-09-16_at_1.07.34_PM.PNG";
import analyticsImg from "@/imports/Screenshot_2026-09-16_at_1.09.53_PM.PNG";
import IPhoneMockup from "./IPhoneMockup";
import LaptopMockup from "./LaptopMockup";

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
  darkLink: "#C5D6E2",
};

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: RESUME_URL, external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/giuliamorgan",
    external: true,
  },
  { label: "Contact", href: "/#contact" },
];

const EYEBROW_LIGHT = {
  fontSize: 11,
  lineHeight: 1.4,
  letterSpacing: "0.12em",
  color: COLORS.lightLabel,
  fontWeight: 600,
  textTransform: "uppercase" as const,
};

const EYEBROW_DARK = {
  fontSize: 11,
  lineHeight: 1.4,
  letterSpacing: "0.12em",
  color: COLORS.blue,
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

function WebsiteWalkthrough() {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16 / 9",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        border: `1px solid ${COLORS.border}`,
      }}
    >
      <video
        src="/keel-website-redesign.mp4"
        aria-label="Walkthrough of the redesigned Keel Project Management website"
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          objectFit: "contain",
          backgroundColor: "#FFFFFF",
        }}
      >
        Your browser does not support the video element.
      </video>
    </div>
  );
}

function KeelCaseStudy() {
  const [menuOpen, setMenuOpen] = useState(false);
  const width = useWindowWidth();

  const isMobile = width < 768;
  const isTablet = width < 1024;
  const px = isMobile ? "24px" : isTablet ? "48px" : "80px";
  const maxW = 1440;

  const standardSectionPadding = isMobile
    ? "56px 24px"
    : isTablet
      ? "64px 48px"
      : "64px 80px";

  const sectionHeading = {
    margin: "0 0 20px",
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: isMobile ? 34 : "clamp(36px, 3.5vw, 50px)",
    fontWeight: 300,
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    color: COLORS.navy,
  };

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
        {/* HERO + WEBSITE TRANSFORMATION */}
        <section
          style={{
            padding: isMobile
              ? "48px 24px 56px"
              : isTablet
                ? "60px 48px 64px"
                : "72px 80px 64px",
            backgroundColor: COLORS.cream,
          }}
        >
          <div style={{ maxWidth: maxW, margin: "0 auto" }}>
            <p style={{ ...EYEBROW_DARK, margin: "0 0 18px" }}>
              Professional Work
            </p>

            <h1
              style={{
                maxWidth: 1180,
                margin: "0 0 16px",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: isMobile ? 46 : "clamp(56px, 6vw, 72px)",
                fontWeight: 300,
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                color: COLORS.navy,
              }}
            >
              Keel Brand &amp; Digital Marketing Transformation
            </h1>

            <p
              style={{
                margin: "0 0 28px",
                fontSize: isMobile ? 15 : 17,
                lineHeight: 1.5,
                color: COLORS.body,
                fontWeight: 300,
              }}
            >
              Brand, Web, SEO/AEO/GEO, Content &amp; Analytics
            </p>

            <p
              style={{
                ...bodyText,
                maxWidth: 620,
                margin: "0 0 36px",
              }}
            >
              I joined Keel in a hybrid marketing and project management role
              and took ownership of building the company&apos;s marketing
              function. My work spans brand positioning, website strategy and
              execution, search, content, analytics, and supporting marketing
              systems.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
                gap: isMobile ? "24px 20px" : 0,
                paddingTop: 24,
                marginBottom: 36,
                borderTop: `1px solid ${COLORS.border}`,
              }}
            >
              {[
                {
                  label: "Role",
                  value: "Marketing Lead + Associate Project Manager",
                },
                {
                  label: "Ownership",
                  value: "Brand and digital marketing strategy and execution",
                },
                {
                  label: "Status",
                  value: "Ongoing",
                },
                {
                  label: "Disciplines",
                  value:
                    "Brand / Webflow / Figma / SEO / AEO / Analytics / Content",
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
                  <p style={{ ...EYEBROW_DARK, margin: "0 0 8px" }}>
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

            <div
              style={{
                maxWidth: 1080,
                margin: "0 auto",
                paddingTop: isMobile ? 36 : 44,
                borderTop: `1px solid ${COLORS.border}`,
              }}
            >
              <p style={{ ...EYEBROW_DARK, margin: "0 0 14px" }}>
                Website Transformation
              </p>

              <p
                style={{
                  ...bodyText,
                  maxWidth: 700,
                  margin: "0 0 28px",
                }}
              >
                The existing site did not reflect Keel&apos;s experience,
                audience, or current service offering. I restructured the
                content and experience around clearer positioning, stronger
                navigation, and a more credible digital presence.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: 24,
                }}
              >
                {[
                  {
                    label: "Previous Website",
                    image: oldKeelHomepage,
                    alt: "Previous Keel website",
                    contain: false,
                  },
                  {
                    label: "Redesigned Website",
                    image: newKeelHomepage,
                    alt: "Redesigned Keel website",
                    contain: true,
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <div
                      style={{
                        height: isMobile ? 220 : 280,
                        overflow: "hidden",
                        border: `1px solid ${COLORS.border}`,
                        backgroundColor: item.contain ? "#FFFFFF" : undefined,
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          objectFit: item.contain ? "contain" : "cover",
                          objectPosition: "top",
                        }}
                      />
                    </div>

                    <p
                      style={{
                        margin: "10px 0 0",
                        fontSize: 12,
                        lineHeight: 1.5,
                        letterSpacing: "0.04em",
                        color: COLORS.muted,
                      }}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AUDIENCE + POSITIONING */}
        <section
          style={{
            padding: standardSectionPadding,
            backgroundColor: COLORS.cream,
          }}
        >
          <div style={{ maxWidth: maxW, margin: "0 auto" }}>
            <div style={{ marginBottom: 28 }}>
              <p style={{ ...EYEBROW_DARK, margin: "0 0 18px" }}>
                Audience + Positioning
              </p>

              <h2
                style={{
                  ...sectionHeading,
                  maxWidth: 620,
                  fontSize: isMobile ? 34 : "clamp(36px, 3.5vw, 46px)",
                }}
              >
                Starting with who we needed to reach
              </h2>

              <p
                style={{
                  ...bodyText,
                  maxWidth: 560,
                  margin: 0,
                }}
              >
                Audience research defined who Keel needed to reach, what
                mattered to those decision-makers, and how the brand needed to
                communicate with them.
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
              {[
                {
                  label: "Trust came before service details",
                  body: "Senior decision-makers needed to understand Keel's credibility and value before engaging with individual services.",
                },
                {
                  label: "Services needed clearer language",
                  body: "Existing descriptions created an opportunity to make Keel's capabilities clearer and easier to navigate.",
                },
                {
                  label: "The audience called for an executive tone",
                  body: "The brand needed to communicate with greater clarity, confidence, and restraint.",
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
                      margin: "0 0 8px",
                      fontSize: 13,
                      lineHeight: 1.5,
                      color: COLORS.navy,
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </p>

                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
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

        {/* BRAND, WEB + SEARCH */}
        <section
          style={{
            padding: standardSectionPadding,
            backgroundColor: COLORS.paleBlue,
          }}
        >
          <div style={{ maxWidth: maxW, margin: "0 auto" }}>
            <p style={{ ...EYEBROW_DARK, margin: "0 0 18px" }}>
              From Strategy to Execution
            </p>

            <h2 style={{ ...sectionHeading, maxWidth: 680 }}>
              Brand, Web &amp; Search Strategy
            </h2>

            <p
              style={{
                ...bodyText,
                maxWidth: 650,
                margin: "0 0 36px",
              }}
            >
              The audience strategy informed a broader refresh of Keel&apos;s
              brand, messaging, and digital presence. I redesigned and built the
              website in Webflow, clarified the service architecture, and
              developed the supporting SEO, AEO/GEO, schema, metadata, and
              content structure.
            </p>

            {/* DEVICE RENDERINGS */}
            <div style={{ maxWidth: 1120, margin: "0 auto" }}>
              <div
                style={{
                  position: "relative",
                  height: isMobile ? 400 : isTablet ? 490 : 530,
                  backgroundColor: "#F0F5F8",
                  border: `1px solid ${COLORS.border}`,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: isMobile ? "50%" : "5%",
                    bottom: isMobile ? 88 : isTablet ? 8 : 0,
                    width: isMobile ? "94%" : "74%",
                    display: "flex",
                    justifyContent: "center",
                    transform: isMobile ? "translateX(-50%)" : "none",
                  }}
                >
                  <LaptopMockup
                    width={isMobile ? 300 : isTablet ? 500 : 650}
                  />
                </div>

                <div
                  style={{
                    position: "absolute",
                    right: isMobile ? "50%" : "7%",
                    bottom: isMobile ? 12 : 24,
                    zIndex: 2,
                    transform: isMobile ? "translateX(50%)" : "none",
                    filter:
                      "drop-shadow(0 16px 24px rgba(16,44,73,0.14))",
                  }}
                >
                  <IPhoneMockup
                    width={isMobile ? 100 : isTablet ? 136 : 154}
                  />
                </div>
              </div>

              <p
                style={{
                  margin: "10px 0 28px",
                  fontSize: 12,
                  lineHeight: 1.5,
                  color: COLORS.muted,
                  textAlign: "center",
                }}
              >
                Built responsively across desktop, tablet, and mobile
              </p>
            </div>

            <div
              style={{
                paddingTop: 24,
                display: "flex",
                flexWrap: "wrap",
                gap: "10px 24px",
                borderTop: `1px solid ${COLORS.border}`,
              }}
            >
              {[
                "Webflow",
                "CMS",
                "SEO",
                "AEO",
                "GEO",
                "Schema",
                "Responsive Development",
              ].map((item) => (
                <p
                  key={item}
                  style={{
                    margin: 0,
                    fontSize: 12,
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

            {/* WEBSITE WALKTHROUGH */}
            <div style={{ maxWidth: 1120, margin: "36px auto 0" }}>
              <p style={{ ...EYEBROW_DARK, margin: "0 0 12px" }}>
                Explore the Full Website
              </p>

              <WebsiteWalkthrough />

              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: 12,
                  lineHeight: 1.5,
                  color: COLORS.muted,
                  textAlign: "center",
                }}
              >
                Walk through the complete responsive website experience
              </p>
            </div>
          </div>
        </section>

        {/* MARKETING SYSTEM + IMPACT */}
        <section
          style={{
            padding: isMobile ? "56px 0 0" : "64px 0 0",
            backgroundColor: COLORS.cream,
          }}
        >
          <div
            style={{
              maxWidth: maxW,
              margin: "0 auto",
              padding: `0 ${px}`,
            }}
          >
            <p style={{ ...EYEBROW_DARK, margin: "0 0 18px" }}>
              Content, Search + Measurement
            </p>

            <h2 style={{ ...sectionHeading, maxWidth: 700 }}>
              Building the Marketing System Around the Site
            </h2>

            <p
              style={{
                ...bodyText,
                maxWidth: 650,
                margin: "0 0 36px",
              }}
            >
              The website became the foundation for a broader marketing system
              connecting content, search strategy, audience engagement, and
              performance measurement.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                marginBottom: 36,
                borderTop: `1px solid ${COLORS.border}`,
                borderBottom: `1px solid ${COLORS.border}`,
              }}
            >
              {[
                {
                  label: "Content + LinkedIn",
                  body: "Thought leadership, white papers, service messaging, Insights content, and leadership communications designed to reinforce Keel's positioning.",
                },
                {
                  label: "Search + Discoverability",
                  body: "SEO, AEO/GEO, metadata, schema, keyword intent, and content structure developed to strengthen branded and non-branded discovery.",
                },
                {
                  label: "Measurement + Optimization",
                  body: "GA4, Google Search Console, and Looker Studio used to monitor performance, identify patterns, and guide ongoing priorities.",
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
                        ? `1px solid ${COLORS.border}`
                        : "none",
                    borderBottom:
                      isMobile && index < 2
                        ? `1px solid ${COLORS.border}`
                        : "none",
                  }}
                >
                  <p style={{ ...EYEBROW_DARK, margin: "0 0 10px" }}>
                    {item.label}
                  </p>

                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
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

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: 20,
                marginBottom: 32,
              }}
            >
              <SupportingImage
                image={contentStrategyImg}
                alt="Content strategy and publishing calendar"
                caption="Content strategy and publishing"
                isMobile={isMobile}
              />

              <SupportingImage
                image={analyticsImg}
                alt="Google Analytics performance reporting"
                caption="Performance measurement and reporting"
                isMobile={isMobile}
              />
            </div>

            <div
              style={{
                paddingTop: 24,
                marginBottom: isMobile ? 48 : 56,
                borderTop: `1px solid ${COLORS.border}`,
              }}
            >
              <p style={{ ...EYEBROW_DARK, margin: "0 0 10px" }}>
                What the Data Showed
              </p>

              <p
                style={{
                  ...bodyText,
                  maxWidth: 800,
                  margin: 0,
                }}
              >
                GA4, Search Console, and Microsoft Clarity helped distinguish
                engagement from discoverability, while Looker Studio turned
                those signals into recurring performance reporting. The
                analysis revealed meaningful engagement among existing visitors
                and an ongoing opportunity to strengthen non-branded search
                visibility.
              </p>
            </div>
          </div>

          {/* OUTCOMES */}
          <div
            style={{
              width: "100%",
              padding: isMobile ? "40px 0" : "48px 0",
              backgroundColor: COLORS.navy,
            }}
          >
            <div
              style={{
                maxWidth: maxW,
                margin: "0 auto",
                padding: `0 ${px}`,
              }}
            >
              <p style={{ ...EYEBROW_LIGHT, margin: "0 0 24px" }}>
                Outcomes
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile
                    ? "1fr"
                    : "repeat(3, 1fr)",
                }}
              >
                {[
                  {
                    value: "15×+ Traffic Growth",
                    body: "Monthly website traffic increased by more than 15× from October 2025 to September 2026.",
                  },
                  {
                    value: "Elevated Brand Positioning",
                    body: "Reorganized the brand, services, and website messaging around the needs of senior decision-makers.",
                  },
                  {
                    value: "Measurement System Established",
                    body: "Connected GA4, Search Console, Microsoft Clarity, and Looker Studio to support recurring reporting and optimization.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.value}
                    style={{
                      paddingTop: isMobile && index > 0 ? 24 : 0,
                      paddingBottom: isMobile && index < 2 ? 24 : 0,
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
                        margin: "0 0 10px",
                        fontFamily:
                          "'Cormorant Garamond', Georgia, serif",
                        fontSize: isMobile ? 30 : 34,
                        fontWeight: 300,
                        lineHeight: 1.05,
                        color: COLORS.cream,
                      }}
                    >
                      {item.value}
                    </p>

                    <p
                      style={{
                        maxWidth: 350,
                        margin: 0,
                        fontSize: 13,
                        lineHeight: 1.65,
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
                  maxWidth: 820,
                  margin: "30px 0 0",
                  paddingTop: 24,
                  borderTop: "1px solid rgba(255,255,255,0.12)",
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: COLORS.darkBody,
                  fontWeight: 300,
                }}
              >
                This work demonstrates my ability to connect positioning,
                content, search strategy, digital experience, and measurement
                as one coordinated marketing system.
              </p>
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
                Integrated Client Dashboard
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
                Product Strategy / UX / Dashboard Design
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
                to="/dashboard"
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
                View Project →
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

function SupportingImage({
  image,
  alt,
  caption,
  isMobile,
}: {
  image: string;
  alt: string;
  caption: string;
  isMobile: boolean;
}) {
  return (
    <div>
      <div
        style={{
          height: isMobile ? 220 : 260,
          overflow: "hidden",
          borderRadius: 4,
          border: `1px solid ${COLORS.border}`,
        }}
      >
        <img
          src={image}
          alt={alt}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
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
          textAlign: "center",
        }}
      >
        {caption}
      </p>
    </div>
  );
}

export default KeelCaseStudy;
