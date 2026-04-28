// Product section — what it is, with phone mockups of the logging flow.

const PhoneFrame = ({ children, label, style }) => (
  <div style={{
    width: 290,
    height: 600,
    borderRadius: 44,
    background: "var(--ink)",
    padding: 8,
    boxShadow: "0 40px 80px -30px rgba(26,21,48,0.45), 0 0 0 1px rgba(26,21,48,0.06)",
    position: "relative",
    ...style,
  }}>
    <div style={{
      width: "100%", height: "100%",
      borderRadius: 36,
      overflow: "hidden",
      background: "var(--cream)",
      position: "relative",
    }}>
      {/* notch */}
      <div style={{
        position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)",
        width: 92, height: 26, borderRadius: 999, background: "var(--ink)", zIndex: 5,
      }} />
      {/* status bar */}
      <div style={{
        position: "absolute", top: 16, left: 0, right: 0, zIndex: 4,
        display: "flex", justifyContent: "space-between",
        padding: "0 28px",
        fontFamily: "Rethink Sans, system-ui, sans-serif",
        fontSize: 12, fontWeight: 600,
      }}>
        <span>9:41</span>
        <span style={{ display: "inline-flex", gap: 4, alignItems: "center", fontSize: 11 }}>
          <span>●●●●</span>
          <span>5G</span>
        </span>
      </div>
      <div style={{ paddingTop: 50, height: "100%" }}>
        {children}
      </div>
    </div>
    {label && (
      <div className="mono" style={{
        position: "absolute", top: -28, left: 6, color: "var(--ink-mute)",
      }}>{label}</div>
    )}
  </div>
);

// Phone 1: today's stack / log entry
const PhoneLog = () => (
  <div style={{ padding: "8px 22px 22px", height: "100%", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
      <div>
        <div className="mono" style={{ fontSize: 9 }}>tuesday</div>
        <div style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontVariationSettings: '"SOFT" 100, "wght" 400', lineHeight: 1.1 }}>
          today&rsquo;s stack
        </div>
      </div>
      <div style={{
        width: 32, height: 32, borderRadius: "50%", background: "var(--lilac)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "Fraunces, serif", fontSize: 14,
      }}>m</div>
    </div>

    {/* entries */}
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {[
        { name: "BPC-157", dose: "250 mcg", time: "7:14 am", color: "var(--lavender)" },
        { name: "Semaglutide", dose: "0.25 mg", time: "7:16 am", color: "var(--peach)" },
        { name: "Methylene blue", dose: "10 mg", time: "8:30 am", color: "var(--lilac)" },
      ].map((e, i) => (
        <div key={i} style={{
          background: "var(--cream)",
          border: "1px solid var(--rule)",
          borderRadius: 14,
          padding: "12px 14px",
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8, background: e.color,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "Fraunces, serif", fontSize: 16, fontWeight: 500,
          }}>{e.name[0]}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "Fraunces, serif", fontSize: 14, fontVariationSettings: '"SOFT" 100, "wght" 480', lineHeight: 1.1 }}>{e.name}</div>
            <div style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 2 }}>{e.dose} · {e.time}</div>
          </div>
          <div style={{ fontSize: 14, color: "var(--ink-mute)" }}>✓</div>
        </div>
      ))}
    </div>

    {/* feel slider */}
    <div style={{
      marginTop: 16,
      background: "var(--lilac)",
      borderRadius: 16,
      padding: 14,
    }}>
      <div className="mono" style={{ fontSize: 9, marginBottom: 10 }}>how do you feel?</div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18 }}>
        {["○", "○", "●", "●", "●"].map((d, i) => (
          <span key={i} style={{
            width: 28, height: 28, borderRadius: "50%",
            background: i < 3 ? "var(--ink)" : "rgba(26,21,48,0.15)",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            color: "var(--cream)", fontSize: 11,
          }}>{i + 1}</span>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 10, color: "var(--ink-soft)" }}>
        <span>flat</span>
        <span>great</span>
      </div>
    </div>

    <div style={{ flex: 1 }} />

    {/* tab bar */}
    <div style={{
      marginTop: 12,
      display: "flex", justifyContent: "space-around", alignItems: "center",
      padding: "10px 0 4px",
      borderTop: "1px solid var(--rule)",
    }}>
      {[
        { l: "today", active: true },
        { l: "stacks" },
        { l: "people" },
        { l: "you" },
      ].map((t, i) => (
        <span key={i} style={{
          fontFamily: "DM Mono, monospace",
          fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase",
          color: t.active ? "var(--ink)" : "var(--ink-mute)",
          fontWeight: t.active ? 600 : 400,
        }}>{t.l}</span>
      ))}
    </div>
  </div>
);

// Phone 2: a chart of how a compound has been working for similar people
const PhoneInsight = () => (
  <div style={{ padding: "8px 22px 22px", height: "100%", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
      <span style={{ fontSize: 14, color: "var(--ink-mute)" }}>←</span>
      <div className="mono" style={{ fontSize: 9 }}>BPC-157 · 250 mcg / day</div>
    </div>

    <div style={{ fontFamily: "Fraunces, serif", fontSize: 22, lineHeight: 1.15, fontVariationSettings: '"SOFT" 100, "wght" 400' }}>
      people like you reported a small lift in mood, no change in sleep.
    </div>

    {/* tiny chart */}
    <div style={{
      marginTop: 18,
      background: "var(--cream-2)",
      borderRadius: 16,
      padding: 14,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <span className="mono" style={{ fontSize: 9 }}>mood · 28 days</span>
        <span className="mono" style={{ fontSize: 9, color: "var(--ink-soft)" }}>n=412</span>
      </div>
      <svg viewBox="0 0 240 80" style={{ width: "100%", height: 70 }}>
        <path d="M 0 55 Q 30 50 60 48 T 120 38 T 180 30 T 240 22"
          fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
        <path d="M 0 55 Q 30 50 60 48 T 120 38 T 180 30 T 240 22 L 240 80 L 0 80 Z"
          fill="var(--lavender)" opacity="0.4" />
        <circle cx="240" cy="22" r="4" fill="var(--ink)" />
      </svg>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
        <span style={{ fontSize: 9, color: "var(--ink-mute)" }}>day 1</span>
        <span style={{ fontSize: 9, color: "var(--ink-mute)" }}>day 28</span>
      </div>
    </div>

    {/* notes */}
    <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
      <div className="mono" style={{ fontSize: 9 }}>what they noticed</div>
      {[
        "joints quieter after week 2",
        "no change in sleep, expected",
        "mild appetite shift, transient",
      ].map((t, i) => (
        <div key={i} style={{
          padding: "10px 12px",
          background: "var(--cream)",
          border: "1px solid var(--rule)",
          borderRadius: 12,
          fontFamily: "Source Serif 4, serif",
          fontSize: 12,
          lineHeight: 1.4,
        }}>&ldquo;{t}&rdquo;</div>
      ))}
    </div>
  </div>
);

// Phone 3: a community comparison
const PhoneCompare = () => (
  <div style={{ padding: "8px 22px 22px", height: "100%", display: "flex", flexDirection: "column" }}>
    <div style={{ marginBottom: 14 }}>
      <div className="mono" style={{ fontSize: 9 }}>stacks · sleep + recovery</div>
      <div style={{ fontFamily: "Fraunces, serif", fontSize: 22, fontVariationSettings: '"SOFT" 100, "wght" 400', lineHeight: 1.15, marginTop: 4 }}>
        what people ran this month
      </div>
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {[
        { who: "men · 30s · lifters", stack: "BPC + TB-500 + magnesium", n: "138", lift: "+14%" },
        { who: "men · 40s · runners", stack: "Ipamorelin + glycine", n: "84", lift: "+9%" },
        { who: "women · 30s · all", stack: "BPC alone", n: "212", lift: "+6%" },
      ].map((s, i) => (
        <div key={i} style={{
          background: i === 0 ? "var(--lilac)" : "var(--cream)",
          border: "1px solid var(--rule)",
          borderRadius: 14,
          padding: 14,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span className="mono" style={{ fontSize: 9 }}>{s.who}</span>
            <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: 14, fontVariationSettings: '"SOFT" 100, "wght" 480' }}>{s.lift}</span>
          </div>
          <div style={{
            fontFamily: "Fraunces, serif", fontSize: 15, fontVariationSettings: '"SOFT" 100, "wght" 440',
            marginTop: 6, lineHeight: 1.2,
          }}>{s.stack}</div>
          <div style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 4 }}>n = {s.n} · last 30 days</div>
        </div>
      ))}
    </div>

    <div style={{ flex: 1 }} />

    <div style={{
      marginTop: 12,
      padding: "12px 14px",
      background: "var(--ink)",
      color: "var(--cream)",
      borderRadius: 999,
      textAlign: "center",
      fontFamily: "Rethink Sans, system-ui, sans-serif",
      fontWeight: 600,
      fontSize: 13,
    }}>+ try this stack</div>
  </div>
);

const Product = () => {
  return (
    <section id="what" style={{
      padding: "160px 0 140px",
      background: "var(--cream)",
      borderTop: "1px solid var(--rule)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        {/* heading */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 64,
          alignItems: "end",
          marginBottom: 100,
        }}>
          <div>
            <div className="mono" style={{ marginBottom: 18 }}>01 · what it is</div>
            <h2 className="display" style={{
              margin: 0,
              fontSize: "clamp(40px, 5.2vw, 72px)",
              lineHeight: 1.0,
              fontVariationSettings: '"SOFT" 100, "opsz" 144, "wght" 380',
            }}>
              a quiet log,<br />
              <em style={{
                fontStyle: "italic",
                fontVariationSettings: '"SOFT" 100, "opsz" 144, "wght" 320',
                color: "var(--ink-soft)",
              }}>turned into a research asset.</em>
            </h2>
          </div>
          <div style={{ maxWidth: 540, justifySelf: "end" }}>
            <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--ink-soft)", margin: 0 }}>
              you log what you took, how it felt, and what changed. with consent, your entries
              join a growing dataset on real-world peptide use &mdash; the kind of evidence
              biohackers have never had a way to contribute before.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--ink-soft)", margin: "20px 0 0" }}>
              you get pattern matching from people in your demographic. researchers get a
              dataset that didn&rsquo;t exist last year. that&rsquo;s the trade.
            </p>
          </div>
        </div>

        {/* phones */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: 32,
          flexWrap: "wrap",
        }}>
          <PhoneFrame label="01 · log" style={{ transform: "translateY(20px) rotate(-2deg)" }}>
            <PhoneLog />
          </PhoneFrame>
          <PhoneFrame label="02 · learn">
            <PhoneInsight />
          </PhoneFrame>
          <PhoneFrame label="03 · compare" style={{ transform: "translateY(20px) rotate(2deg)" }}>
            <PhoneCompare />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
};

window.Product = Product;
