import bannerImg from '../assets/banner-stack.png'

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="mt-5 max-w-md text-slate-600">
            Explore frontend, backend, database, and tooling options, compare them side by
            side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="brand-gradient-bg flex w-64 items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold shadow-sm transition hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="flex w-64 items-center justify-center rounded-2xl border border-slate-300 px-8 py-4 text-base font-semibold text-ink transition hover:border-slate-400"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end lg:pr-4">
          <img
            src={bannerImg}
            alt="Illustration of a layered technology stack"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  )
}