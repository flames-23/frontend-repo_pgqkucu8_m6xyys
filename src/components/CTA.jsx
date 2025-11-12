export default function CTA() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-pink-600 to-violet-600 text-white text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold">Ready to try conversation-first dating?</h3>
          <p className="mt-3 text-white/90">Join free and get your first AI-introduced match in under a day.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="px-6 py-3 rounded-xl bg-white text-pink-600 font-semibold shadow hover:opacity-95">Get started</a>
            <a href="#" className="px-6 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10">See how it works</a>
          </div>
        </div>
      </div>
    </section>
  )
}
