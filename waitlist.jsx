// Waitlist + footer — final CTA

const SUPABASE_URL = "https://kojwcppyogamjhlmvngp.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvandjcHB5b2dhbWpobG12bmdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxMDQ4MjQsImV4cCI6MjA5MTY4MDgyNH0.GV-dUmLPMKZKukzhoAN-zIJqt11fIPD4CtQwSvidr00";

const Waitlist = ({ chemGuyTreatment }) => {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("idle"); // idle | sending | done | error
  const [errorMsg, setErrorMsg] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || status === "sending") return;
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_ANON,
          "Authorization": `Bearer ${SUPABASE_ANON}`,
          "Prefer": "return=minimal",
        },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("done");
      } else if (res.status === 409) {
        // duplicate — treat as success from user's perspective
        setStatus("done");
      } else {
        const text = await res.text();
        setErrorMsg(text || "something went wrong. try again?");
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("network hiccup. try again?");
      setStatus("error");
    }
  };

  const submitted = status === "done";

  return (
    <section id="waitlist" style={{
      padding: "160px 0 120px",
      background: "var(--ink)",
      color: "var(--cream)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* soft glow */}
      <div aria-hidden style={{
        position: "absolute", top: -200, right: -100, width: 600, height: 600,
        borderRadius: "50%", background: "var(--lavender)",
        filter: "blur(120px)", opacity: 0.25, pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", bottom: -200, left: -100, width: 500, height: 500,
        borderRadius: "50%", background: "var(--peach)",
        filter: "blur(120px)", opacity: 0.15, pointerEvents: "none",
      }} />

      <div style={{
        position: "relative",
        maxWidth: 920,
        margin: "0 auto",
        padding: "0 48px",
        textAlign: "center",
      }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <ChemGuy size={120} treatment={chemGuyTreatment} color="var(--cream)" />
        </div>

        <div className="mono" style={{ color: "var(--lavender)", marginBottom: 24 }}>
          03 · join the waitlist
        </div>

        <h2 className="display" style={{
          margin: 0,
          fontSize: "clamp(48px, 7vw, 96px)",
          lineHeight: 0.95,
          fontVariationSettings: '"SOFT" 100, "opsz" 144, "wght" 360',
        }}>
          we&rsquo;re inviting people<br />
          <em style={{
            fontStyle: "italic",
            fontVariationSettings: '"SOFT" 100, "opsz" 144, "wght" 320',
            color: "var(--lavender)",
          }}>in small batches.</em>
        </h2>

        <p style={{
          marginTop: 28,
          fontSize: 19,
          lineHeight: 1.55,
          color: "rgba(251,247,242,0.7)",
          maxWidth: 560,
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          one weekly note while we build. when it&rsquo;s your turn, you get an invite and a
          quiet onboarding. no marketing emails. ever.
        </p>

        {!submitted ? (
          <>
          <form onSubmit={onSubmit} style={{
            marginTop: 48,
            display: "flex",
            gap: 8,
            maxWidth: 520,
            margin: "48px auto 0",
            background: "rgba(251,247,242,0.08)",
            border: "1px solid rgba(251,247,242,0.18)",
            borderRadius: 999,
            padding: 6,
            backdropFilter: "blur(10px)",
          }}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@somewhere.so"
              disabled={status === "sending"}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "var(--cream)",
                fontFamily: "Source Serif 4, serif",
                fontSize: 17,
                padding: "14px 22px",
              }}
            />
            <button type="submit" disabled={status === "sending"} style={{
              background: "var(--cream)",
              color: "var(--ink)",
              border: "none",
              borderRadius: 999,
              padding: "14px 26px",
              fontFamily: "Rethink Sans, system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 15,
              transition: "transform 0.15s ease",
              opacity: status === "sending" ? 0.6 : 1,
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              {status === "sending" ? "joining…" : "join \u2192"}
            </button>
          </form>
          {status === "error" && (
            <div style={{
              marginTop: 16,
              fontSize: 13,
              color: "#FFB6A8",
              fontFamily: "DM Mono, monospace",
              letterSpacing: "0.06em",
            }}>{errorMsg}</div>
          )}
          </>
        ) : (
          <div style={{
            marginTop: 48,
            maxWidth: 520,
            margin: "48px auto 0",
            padding: "20px 28px",
            background: "rgba(214,201,252,0.15)",
            border: "1px solid rgba(214,201,252,0.3)",
            borderRadius: 16,
            color: "var(--lavender)",
            fontFamily: "Fraunces, serif",
            fontStyle: "italic",
            fontSize: 19,
            fontVariationSettings: '"SOFT" 100, "wght" 380',
          }}>
            you&rsquo;re in. we&rsquo;ll be in touch &mdash; quietly.
          </div>
        )}

        <div style={{
          marginTop: 28,
          display: "flex",
          justifyContent: "center",
          gap: 32,
          fontFamily: "DM Mono, monospace",
          fontSize: 11,
          letterSpacing: "0.10em",
          textTransform: "uppercase",
          color: "rgba(251,247,242,0.5)",
        }}>
          <span>~ 2,400 ahead of you</span>
          <span>·</span>
          <span>private beta · spring 2026</span>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{
    background: "var(--ink)",
    color: "var(--cream)",
    padding: "60px 48px 40px",
    borderTop: "1px solid rgba(251,247,242,0.08)",
  }}>
    <div style={{
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "start",
    }}>
      <div>
        <Wordmark size={28} color="var(--cream)" />
        <p style={{
          marginTop: 16,
          maxWidth: 380,
          fontSize: 13,
          lineHeight: 1.55,
          color: "rgba(251,247,242,0.5)",
          fontStyle: "italic",
          fontFamily: "Fraunces, serif",
          fontVariationSettings: '"SOFT" 100, "wght" 320',
        }}>
          symbiote is an observational community log. nothing here is medical advice.
          talk to a clinician about anything you put in your body.
        </p>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: 48,
      }}>
        {[
          { h: "platform", l: ["what it is", "why", "research", "changelog"] },
          { h: "company", l: ["about", "careers", "press"] },
          { h: "legal", l: ["privacy", "terms", "data use"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="mono" style={{ color: "var(--lavender)", marginBottom: 14 }}>{c.h}</div>
            {c.l.map((item) => (
              <div key={item} style={{
                fontSize: 13,
                color: "rgba(251,247,242,0.7)",
                marginBottom: 8,
                fontFamily: "Source Serif 4, serif",
              }}>{item}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
    <div style={{
      maxWidth: 1280,
      margin: "60px auto 0",
      paddingTop: 28,
      borderTop: "1px solid rgba(251,247,242,0.08)",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "DM Mono, monospace",
      fontSize: 11,
      letterSpacing: "0.10em",
      textTransform: "uppercase",
      color: "rgba(251,247,242,0.4)",
    }}>
      <span>© 2026 symbiote labs</span>
      <span>made with care · n = 1, but counting</span>
    </div>
  </footer>
);

window.Waitlist = Waitlist;
window.Footer = Footer;
