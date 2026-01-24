import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Centered Content */}
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="mb-6">
              <div className="w-20 h-20 bg-zinc-900 rounded-2xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/helm-icon.png"
                  alt="Helm"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-lg font-medium">Helm</p>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
              A roadmap for real progress
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-8">
              #1 AI Goal Planner
            </p>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl">
              Stop letting big goals overwhelm you. Helm uses AI to break down your ambitions into clear subgoals, daily habits, and actionable tasks, creating a personalized roadmap that turns intention into real, measurable progress.
            </p>

            {/* App Store Button */}
            <a
              href="https://apps.apple.com/app/helm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1276560000"
                alt="Download on the App Store"
                className="h-14 w-auto"
              />
            </a>
          </div>

          {/* App Screenshots */}
          <div className="mt-20 flex justify-center items-end gap-4 md:gap-6">
            {/* Phone Frame 1 - Left */}
            <div className="w-44 md:w-52 lg:w-60 rounded-[2rem] overflow-hidden border-4 border-zinc-800 shadow-2xl">
              <Image
                src="/Home.png"
                alt="Helm App - Home Screen"
                width={240}
                height={520}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Phone Frame 2 - Center (slightly raised) */}
            <div className="w-44 md:w-52 lg:w-60 rounded-[2rem] overflow-hidden border-4 border-zinc-800 shadow-2xl -mb-4">
              <Image
                src="/Timeline-1.png"
                alt="Helm App - Timeline View"
                width={240}
                height={520}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Phone Frame 3 - Right */}
            <div className="w-44 md:w-52 lg:w-60 rounded-[2rem] overflow-hidden border-4 border-zinc-800 shadow-2xl">
              <Image
                src="/Timeline.png"
                alt="Helm App - Goal Timeline"
                width={240}
                height={520}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
