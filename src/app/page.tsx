import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="max-w-3xl space-y-8">

          <div className="inline-block rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
            AI Powered Digital Marketing Agency
          </div>

          <h1 className="text-6xl font-bold leading-tight">
            Create Marketing Content Faster With AI
          </h1>

          <p className="text-zinc-400 text-xl leading-relaxed">
            Social Curator helps businesses grow with AI-powered
            social media, reels, ad creatives, content systems,
            and modern digital marketing.
          </p>

          <div className="flex gap-4">

            <Link
              href="/dashboard"
              className="bg-white text-black px-6 py-4 rounded-xl font-semibold"
            >
              Open Dashboard
            </Link>

            <button className="border border-zinc-700 px-6 py-4 rounded-xl">
              View Portfolio
            </button>

          </div>

        </div>

      </section>

    </main>
  )
}
