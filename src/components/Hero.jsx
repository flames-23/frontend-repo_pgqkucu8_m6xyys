import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-gray-200 text-sm text-gray-700 shadow-sm">
              <Sparkles className="h-4 w-4 text-pink-600" />
              AI-matched in under 24 hours
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Meet your person. Not just profiles.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Flutter uses conversation-first matching to connect you with people who vibe with your energy. Less swiping, more meaningful chats.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#" className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-violet-600 text-white font-semibold shadow hover:opacity-95 transition-opacity">Start chatting free</a>
              <a href="#" className="px-6 py-3 rounded-xl border border-gray-300 text-gray-800 font-semibold bg-white/80 hover:bg-white transition-colors">Watch a demo</a>
            </div>
            <p className="mt-3 text-sm text-gray-500">No credit card required</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-white/70 border border-gray-100 p-4 shadow-xl backdrop-blur">
              <div className="h-full rounded-2xl bg-gradient-to-br from-pink-100 via-white to-violet-100 p-4 grid gap-3">
                <div className="rounded-2xl bg-white/90 border border-gray-100 p-4 shadow-sm">
                  <div className="text-sm text-gray-500">New match</div>
                  <div className="mt-1 font-semibold">Alex • 27 • Designer</div>
                  <p className="mt-2 text-gray-600">“Hey! Loved your travel pics. What’s your dream destination?”</p>
                </div>
                <div className="rounded-2xl bg-white/90 border border-gray-100 p-4 shadow-sm text-right">
                  <div className="text-sm text-gray-500">You</div>
                  <p className="mt-2 text-gray-600">“Japan in the spring. Cherry blossoms and ramen!”</p>
                </div>
                <div className="rounded-2xl bg-white/90 border border-gray-100 p-4 shadow-sm">
                  <div className="text-sm text-gray-500">Alex is typing…</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-40 h-40 rounded-3xl bg-white/70 border border-gray-100 p-3 shadow-xl">
              <div className="h-full rounded-2xl bg-gradient-to-br from-violet-100 via-white to-pink-100 p-3 flex flex-col justify-between">
                <div className="text-sm font-semibold">Today’s prompt</div>
                <div className="text-gray-600 text-sm">“Two truths and a lie”</div>
                <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-pink-600 to-violet-600 text-white text-sm font-semibold">Generate icebreakers</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
