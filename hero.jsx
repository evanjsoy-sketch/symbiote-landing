// Hero — chem guy is the protagonist.

const Wordmark = ({ size = 22, color = "var(--ink)", style }) => (
  <span className="wordmark" style={{ fontSize: size, color, lineHeight: 1, ...style }}>
    symbiote
  </span>
);

const Nav = () => (
  <nav style={{
    position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
    padding: "28px 48px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
  }}>
    <Wordmark size={22} />
    <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
      <a href="#what" style={navLinkStyle}>what it is</a>
      <a href="#why" style={navLinkStyle}>why</a>
      <a href="#waitlist" style={navLinkStyle}>research</a>
      <a href="#waitlist" style={{
        ...navLinkStyle,
        padding: "10px 18px",
        background: "var(--ink)",
        color: "var(--cream)",
        borderRadius: 999,
        fontFamily: "DM Mono, monospace",
        fontSize: 12,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      }}>join waitlist</a>
    </div>
  </nav>
);

const navLinkStyle = {
  fontFamily: "DM Mono, monospace",
  fontSize: 12,
  letterSpacing: "0.10em",
  textTransform: "uppercase",
  color: "var(--ink-soft)",
  textDecoration: "none",
};

const Hero = ({ wash, chemGuyTreatment }) => {
  const accentMap = {
    lavender: "var(--lavender)",
    peach: "var(--peach)",
    lilac: "var(--lilac)",
  };
  const accent = accentMap[wash] || "var(--lavender)";

  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      paddingTop: 120,
      paddingBottom: 80,
      overflow: "hidden",
      background: "var(--cream)",
    }}>
      <Nav />

      {/* Soft pastel washes */}
      <div aria-hidden style={{
        position: "absolute", top: -300, right: -200, width: 800, height: 800,
        borderRadius: "50%", background: accent, filter: "blur(100px)", opacity: 0.55,
        pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", bottom: -300, left: -200, width: 700, height: 700,
        borderRadius: "50%", background: "var(--lilac)", filter: "blur(100px)", opacity: 0.6,
        pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", top: "40%", left: "45%", width: 400, height: 400,
        borderRadius: "50%", background: "var(--peach)", filter: "blur(90px)", opacity: 0.35,
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 1280, margin: "0 auto", padding: "0 48px",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 48,
      }}>
        {/* Beta pill */}
        <div style={{
          justifySelf: "center",
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "8px 14px",
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.9)",
          borderRadius: 999,
          fontFamily: "DM Mono, monospace",
          fontSize: 11,
          letterSpacing: "0.10em",
          textTransform: "uppercase",
          color: "var(--ink-soft)",
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "#7B68C9",
            boxShadow: "0 0 0 4px rgba(123,104,201,0.18)",
          }} />
          Private beta · spring 2026
        </div>

        {/* Chem guy with breathing animation */}
        <div style={{
          justifySelf: "center",
          marginTop: 8,
          animation: "chemGuyFloat 6s ease-in-out infinite",
        }}>
          <ChemGuy size={260} treatment={chemGuyTreatment} color="var(--ink)" />
        </div>

        {/* Headline */}
        <h1 className="display" style={{
          margin: 0,
          textAlign: "center",
          fontSize: "clamp(56px, 9vw, 128px)",
          lineHeight: 0.95,
          fontVariationSettings: '"SOFT" 100, "opsz" 144, "wght" 360',
          maxWidth: 1100,
          justifySelf: "center",
        }}>
          stack smarter,<br />
          <em style={{
            fontStyle: "italic",
            fontVariationSettings: '"SOFT" 100, "opsz" 144, "wght" 320',
            color: "var(--ink-soft)",
          }}>together.</em>
        </h1>

        {/* Sub */}
        <p style={{
          justifySelf: "center",
          textAlign: "center",
          maxWidth: 640,
          margin: 0,
          fontSize: 20,
          lineHeight: 1.5,
          color: "var(--ink-soft)",
        }}>
          a research-first community for people stacking peptides, GLP-1s, and nootropics &mdash;
          log what you took, see what people like you actually felt. free, forever.
        </p>

        {/* CTA */}
        <div style={{
          justifySelf: "center",
          marginTop: 8,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
        }}>
          <a href="#waitlist" style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            padding: "18px 32px",
            background: "var(--ink)",
            color: "var(--cream)",
            borderRadius: 999,
            textDecoration: "none",
            fontFamily: "Rethink Sans, system-ui, sans-serif",
            fontWeight: 600,
            fontSize: 16,
            letterSpacing: "-0.005em",
            boxShadow: "0 14px 40px -12px rgba(26,21,48,0.4)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 20px 50px -12px rgba(26,21,48,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 14px 40px -12px rgba(26,21,48,0.4)";
            }}
          >
            join the waitlist
            <span aria-hidden style={{ fontSize: 18, marginTop: -2 }}>→</span>
          </a>
          <span style={{ fontSize: 13, color: "var(--ink-mute)" }}>
            ~2,400 people ahead of you. one weekly note while we build.
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        zIndex: 2,
      }}>
        <span className="mono">scroll</span>
        <div style={{
          width: 1, height: 36, background: "var(--ink-mute)",
          animation: "scrollCue 2.4s ease-in-out infinite",
          transformOrigin: "top",
        }} />
      </div>

      <style>{`
        @keyframes chemGuyFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-1deg); }
        }
        @keyframes scrollCue {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          50.01% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
};

window.Hero = Hero;
window.Wordmark = Wordmark;
