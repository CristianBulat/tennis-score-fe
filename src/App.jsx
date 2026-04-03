const screenshots = [
  { title: 'Create Match', src: '/screenshots/create-match.png', desc: 'Set players, format, and first serve fast.' },
  { title: 'Live Scoring', src: '/screenshots/live-score.png', desc: 'Point-by-point with undo and advantage.' },
  { title: 'Match History', src: '/screenshots/history.png', desc: 'Scores stay on-device.' },
  { title: 'Apple Watch', src: '/screenshots/watch.png', desc: 'Score from your wrist.' },
];

const APP_STORE_URL = 'https://apps.apple.com/md/app/tennis-score-app/id6760890692/'; // replace with production link when available

function App() {
  return (
    <div className="min-h-screen text-cream bg-court">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_70%_at_50%_0%,rgba(200,255,77,0.08),transparent),radial-gradient(90%_70%_at_80%_10%,rgba(255,255,255,0.06),transparent)]" />
      <div className="max-w-6xl mx-auto px-6">
        <header className="pt-12 pb-12">
          <div className="grid gap-8 sm:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-2xl bg-cream/10 grid place-items-center overflow-hidden ring-1 ring-cream/10">
                  <img
                    src="/logo.png"
                    alt="Tennis Score logo"
                    className="h-full w-full object-cover"
                    onError={(e) => { e.currentTarget.src = 'https://dummyimage.com/120x120/c8ff4d/0f3b2d&text=Logo'; }}
                  />
                </div>
                <p className="text-3xl uppercase font-semibold tracking-[0.16em] text-cream/80 font-sans">Tennis Score App</p>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">Track every match. Anywhere.</h1>
                <p className="text-cream/80 text-base leading-relaxed max-w-xl">
                  Built for iPhone, and Apple Watch. Offline-first with calm colors and big, low-distraction controls.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={APP_STORE_URL}
                  className="px-4 py-3 rounded-2xl bg-cream text-court font-semibold shadow-soft border border-outline/30 hover:bg-cream/90 transition focus:outline-none focus:ring-2 focus:ring-cream/60 inline-flex items-center justify-center gap-2 whitespace-nowrap"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path></svg>
                  Download on the App Store
                </a>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-cream/75">
                <span className="px-3 py-2 rounded-xl border border-outline/30">iPhone</span>
                <span className="px-3 py-2 rounded-xl border border-outline/30">Apple Watch</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[32px] bg-cream/5 blur-2xl" aria-hidden />
              <img
                src="/screenshots/Game-Screen.png"
                alt="Live scoring screen"
                className="relative w-full h-full object-contain rounded-[80px] "
              />
            </div>
          </div>
        </header>

        <main className="space-y-14 pb-20">
          <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-6 rounded-[40px] bg-cream/5 blur-3xl" aria-hidden />
              <img
                src="/screenshots/Game-Screen-2.png"
                alt="Watch screen"
                className="w-full h-full max-h-[520px] object-contain bg-court"
                onError={(e) => { e.currentTarget.src = 'https://dummyimage.com/900x1600/0f3b2d/ced6c0&text=History'; }}
              />
            </div>
            <div className="space-y-3 order-1 lg:order-2">
              <h2 className="uppercase tracking-[0.18em] text-cream/60 font-sans text-3xl">Track matches on apple watch</h2>
            </div>
          </section>
          <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-3 order-1">
              <h2 className=" uppercase tracking-[0.18em] text-cream/60 font-sans text-3xl">Ready to play in seconds</h2>
            </div>
            <div className="relative order-2">
              <div className="absolute -inset-6 rounded-[32px] bg-cream/5 blur-3xl" aria-hidden />
              <img
                src="/screenshots/Game-Setup.png"
                alt="Game setup"
                className="w-[480px] h-full object-contain bg-court"
                onError={(e) => { e.currentTarget.src = 'https://dummyimage.com/900x1600/0f3b2d/ced6c0&text=History'; }}
              />
            </div>
          </section>
          <section className="grid gap-8 lg:grid-cols-[1fr_1fr] items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-6 rounded-[32px] bg-cream/5 blur-3xl" aria-hidden />
              <img
                src="/screenshots/History-Screen.png"
                alt="Game setup"
                className="w-[480px] h-full object-contain bg-court"
                onError={(e) => { e.currentTarget.src = 'https://dummyimage.com/900x1600/0f3b2d/ced6c0&text=History'; }}
              />
            </div>
            <div className="space-y-3 order-1 lg:order-2">
              <h2 className=" uppercase tracking-[0.18em] text-cream/60 font-sans text-3xl">All your matches in one place</h2>
            </div>
          </section>
        </main>

        <footer className="pb-12 text-cream/60 text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xl">
            <a href="#contact">Contact</a>
            <a href="#privacy" className="hover:text-cream">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
