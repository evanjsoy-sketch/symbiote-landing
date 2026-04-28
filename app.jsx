// App entry — wires sections + Tweaks panel.

const TWEAK_DEFAULTS = JSON.parse(
  document.getElementById("tweak-defaults").textContent.match(/\{[\s\S]*\}/)[0]
);

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const { mood, wash, chemGuyTreatment } = tweaks;

  // mood applies background tint to the whole page
  React.useEffect(() => {
    const root = document.documentElement;
    if (mood === "warm") {
      root.style.setProperty("--cream", "#FBF4EB");
      root.style.setProperty("--cream-2", "#F4E9D6");
    } else if (mood === "cool") {
      root.style.setProperty("--cream", "#F7F4FB");
      root.style.setProperty("--cream-2", "#EDE6F4");
    } else {
      root.style.setProperty("--cream", "#FBF7F2");
      root.style.setProperty("--cream-2", "#F4EEE3");
    }
  }, [mood]);

  return (
    <>
      <Hero wash={wash} chemGuyTreatment={chemGuyTreatment} />
      <Product />
      <Why />
      <Waitlist chemGuyTreatment={chemGuyTreatment} />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Visual mood">
          <TweakRadio
            label="Cream tone"
            value={mood}
            onChange={(v) => setTweak("mood", v)}
            options={[
              { value: "soft", label: "Soft" },
              { value: "warm", label: "Warm" },
              { value: "cool", label: "Cool" },
            ]}
          />
          <TweakRadio
            label="Hero wash"
            value={wash}
            onChange={(v) => setTweak("wash", v)}
            options={[
              { value: "lavender", label: "Lavender" },
              { value: "peach", label: "Peach" },
              { value: "lilac", label: "Lilac" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Chem guy">
          <TweakRadio
            label="Treatment"
            value={chemGuyTreatment}
            onChange={(v) => setTweak("chemGuyTreatment", v)}
            options={[
              { value: "outline", label: "Outline" },
              { value: "solid", label: "Solid" },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
