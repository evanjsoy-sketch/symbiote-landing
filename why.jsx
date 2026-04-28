// Why section — the values that justify "free, forever"

const Why = () => {
  const principles = [
    {
      n: "01",
      title: "free, forever",
      body: "the product doesn't sell you supplements, ad space, or your data. the platform exists so the dataset exists.",
    },
    {
      n: "02",
      title: "your data, your move",
      body: "everything you log is yours. opt in to research and you help the field. opt out and you still get the app.",
    },
    {
      n: "03",
      title: "we don't tell you what's safe",
      body: "we show you what people in your demographic actually felt. you make the call, your doctor makes the call. we just keep the receipts.",
    },
    {
      n: "04",
      title: "a research asset, not a forum",
      body: "structured logs beat anecdotes. the goal is data quality high enough that researchers cite it.",
    },
  ];

  return (
    <section id="why" style={{
      padding: "160px 0",
      background: "var(--lilac)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ marginBottom: 80, maxWidth: 920 }}>
          <div className="mono" style={{ marginBottom: 18 }}>02 · why we built it</div>
          <h2 className="display" style={{
            margin: 0,
            fontSize: "clamp(40px, 5.2vw, 72px)",
            lineHeight: 1.0,
            fontVariationSettings: '"SOFT" 100, "opsz" 144, "wght" 380',
          }}>
            biohackers have been running the largest uncontrolled trial in history.{" "}
            <em style={{
              fontStyle: "italic",
              fontVariationSettings: '"SOFT" 100, "opsz" 144, "wght" 320',
              color: "var(--ink-soft)",
            }}>nobody&rsquo;s been writing it down.</em>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 24,
        }}>
          {principles.map((p) => (
            <div key={p.n} style={{
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.9)",
              borderRadius: 24,
              padding: "40px 36px",
              minHeight: 220,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
              <div className="mono">{p.n}</div>
              <div>
                <div style={{
                  fontFamily: "Fraunces, serif",
                  fontSize: 32,
                  lineHeight: 1.05,
                  fontVariationSettings: '"SOFT" 100, "opsz" 144, "wght" 420',
                  marginTop: 32,
                }}>{p.title}</div>
                <p style={{
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: "var(--ink-soft)",
                  margin: "14px 0 0",
                }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Why = Why;
