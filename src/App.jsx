const screenshots = [
  { title: 'Create Match', src: '/screenshots/create-match.png' },
  { title: 'Live Scoring', src: '/screenshots/live-score.png' },
  { title: 'Match History', src: '/screenshots/history.png' },
  { title: 'Apple Watch', src: '/screenshots/watch.png' },
];

const APP_STORE_URL = 'https://apps.apple.com/'; // replace with production link when available

function App() {
  return (
    <div className="min-h-screen text-cream bg-court">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_70%_at_50%_0%,rgba(200,255,77,0.08),transparent),radial-gradient(90%_70%_at_80%_10%,rgba(255,255,255,0.06),transparent)]" />
      <div className="max-w-5xl mx-auto px-6">
        <header className="pt-12 pb-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-cream/10 grid place-items-center overflow-hidden ring-1 ring-cream/10">
              <img
                src="/logo.svg"
                alt="Tennis Score logo"
                className="h-full w-full object-cover"
                onError={(e) => { e.currentTarget.src = 'https://dummyimage.com/120x120/c8ff4d/0f3b2d&text=Logo'; }}
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cream/70">Tennis Score</p>
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">Court-side scoring, as clean as your serve.</h1>
            </div>
          </div>

          <p className="text-cream/80 text-base leading-relaxed max-w-3xl">
            Built for iPhone, iPad, and Apple Watch with large tap targets, offline reliability, and a calm color system that matches the native app. No web sharing—everything stays on your devices.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={APP_STORE_URL}
              className="px-4 py-3 rounded-2xl bg-gradient-to-r from-limeGlow to-maroon text-court font-semibold shadow-soft hover:opacity-95 transition focus:outline-none focus:ring-2 focus:ring-cream/70"
              target="_blank"
              rel="noreferrer"
            >
              Download on the App Store
            </a>
            <a href="#screens" className="px-4 py-3 rounded-2xl border border-outline/25 text-cream/85 hover:bg-cream/5 transition">
              View screenshots
            </a>
            <div className="flex flex-wrap gap-2 text-xs text-cream/75">
              <span className="px-3 py-2 rounded-xl border border-outline/30">iOS</span>
              <span className="px-3 py-2 rounded-xl border border-outline/30">iPadOS</span>
              <span className="px-3 py-2 rounded-xl border border-outline/30">watchOS</span>
              <span className="px-3 py-2 rounded-xl border border-outline/20 bg-cream/5">Native only · no web sharing</span>
            </div>
          </div>
        </header>

        <main className="space-y-12 pb-16">
          <section className="grid gap-4 sm:grid-cols-3">
            {[
              { title: 'One-tap points', desc: 'Oversized buttons, haptics, and undo so you never lose the flow.' },
              { title: 'Structured sets', desc: 'Best-of formats with the same maroon/cream tiles you see in-app.' },
              { title: 'Stay on wrist', desc: 'Apple Watch companion keeps scoring off your phone when you play.' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-outline/12 bg-courtDeep/80 shadow-soft p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </section>

          <section id="screens" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Screenshots</h2>
              <span className="text-xs px-3 py-1 rounded-full border border-outline/25 text-cream/70">Native UI</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {screenshots.map(({ title, src }) => (
                <figure key={title} className="rounded-3xl overflow-hidden border border-outline/15 bg-courtDeep/80 shadow-soft">
                  <div className="bg-court px-4 py-3 flex items-center justify-between">
                    <figcaption className="font-semibold">{title}</figcaption>
                    <span className="text-[11px] px-2 py-1 rounded-full border border-outline/30 text-cream/70">Preview</span>
                  </div>
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-[320px] object-contain bg-court"
                    onError={(e) => {
                      e.currentTarget.src = 'https://dummyimage.com/600x1200/0f3b2d/ced6c0&text=Screenshot';
                    }}
                  />
                </figure>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border border-outline/12 bg-courtDeep/70 shadow-soft p-6 space-y-3">
            <h3 className="text-xl font-semibold">What’s inside</h3>
            <ul className="space-y-2 text-cream/75 text-sm leading-relaxed">
              <li>✔️ Best-of-3 and Best-of-5 match formats</li>
              <li>✔️ Undo anytime, plus change-sides reminders</li>
              <li>✔️ Match history with set-by-set tiles</li>
              <li>✔️ Designed for outdoor contrast and low-distraction colors</li>
              <li>ℹ️ No cloud sync or web sharing—scores live locally on your devices.</li>
            </ul>
          </section>
        </main>

        <footer className="pb-12 text-cream/60 text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span>Tennis Score · Native iOS &amp; watchOS</span>
            <div className="flex gap-4 flex-wrap">
              <a href="mailto:hello@tennisscore.app" className="hover:text-cream">hello@tennisscore.app</a>
              <a href="#privacy" className="hover:text-cream">Privacy</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
