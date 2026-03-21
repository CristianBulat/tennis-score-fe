const screenshots = [
  { title: 'Create Match', src: '/screenshots/create-match.png' },
  { title: 'Live Scoring', src: '/screenshots/live-score.png' },
  { title: 'Match History', src: '/screenshots/history.png' },
  { title: 'Apple Watch', src: '/screenshots/watch.png' },
];

const APP_STORE_URL = 'https://apps.apple.com/'; // replace with production link when available

function App() {
  return (
    <div className="min-h-screen flex flex-col text-cream">
      <header className="max-w-screen-md mx-auto w-full px-5 pt-10 pb-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-cream/10 grid place-items-center overflow-hidden">
            <img
              src="/logo.svg"
              alt="Tennis Score logo"
              className="h-full w-full object-cover"
              onError={(e) => { e.currentTarget.src = 'https://dummyimage.com/120x120/c8ff4d/0f3b2d&text=Logo'; }}
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cream/70">Tennis Score</p>
            <h1 className="text-3xl font-semibold leading-tight">Minimal scorekeeping for iPhone & Apple Watch.</h1>
          </div>
        </div>
        <p className="text-cream/75 text-base leading-relaxed">
          Fast point entry, clean match history, and a companion watch app that stays in sync. Built for courtside use—no web sharing, no distractions.
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
          <span className="text-sm px-3 py-2 rounded-xl border border-outline/30 text-cream/80">iOS · iPadOS · watchOS</span>
          <span className="text-xs px-3 py-2 rounded-xl border border-outline/20 text-cream/70 bg-cream/5">Native only · no web sharing</span>
        </div>
      </header>

      <main className="flex-1 max-w-screen-md mx-auto w-full px-5 pb-14 space-y-10">
        <section className="grid gap-3 sm:grid-cols-3">
          {[
            { title: 'One-tap points', desc: 'Large targets, haptics, and undo so you never lose the flow.' },
            { title: 'Structured sets', desc: 'Best-of formats with crisp set tiles inspired by the native UI.' },
            { title: 'Stay on wrist', desc: 'Full Apple Watch companion so you can pocket your phone.' },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-outline/12 bg-courtDeep/80 shadow-soft p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-cream/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Screenshots</h2>
            <span className="text-xs px-3 py-1 rounded-full border border-outline/25 text-cream/70">Native UI</span>
          </div>
          <p className="text-cream/70 text-sm">These are direct captures from the app. Drop your final PNGs into <code className="bg-courtDeep px-2 py-1 rounded">public/screenshots</code>.</p>
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
                    e.currentTarget.src = 'https://dummyimage.com/600x1200/0f3b2d/ced6c0&text=Add+' + encodeURIComponent(title.replace(' ', '+'));
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
            <li>✔️ Optimized for outdoor contrast and low-distraction colors</li>
            <li>ℹ️ Sharing/export is not available—scores live locally on your devices.</li>
          </ul>
        </section>
      </main>

      <footer className="max-w-screen-md mx-auto w-full px-5 pb-10 text-cream/60 text-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>Tennis Score · Native iOS &amp; watchOS</span>
          <div className="flex gap-4 flex-wrap">
            <a href="mailto:hello@tennisscore.app" className="hover:text-cream">hello@tennisscore.app</a>
            <a href="#privacy" className="hover:text-cream">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
