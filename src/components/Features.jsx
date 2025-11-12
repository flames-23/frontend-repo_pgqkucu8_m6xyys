import { MessageCircleHeart, Bot, ShieldCheck, Sparkles } from 'lucide-react'

const features = [
  {
    icon: MessageCircleHeart,
    title: 'Conversation-first matching',
    desc: 'We prioritize how you click in chat, not just profile pics. The algorithm learns your vibe from actual conversations.'
  },
  {
    icon: Bot,
    title: 'Smart icebreakers',
    desc: 'Built-in prompt ideas and AI-generated openers help you skip the awkward hello and get right into real talk.'
  },
  {
    icon: ShieldCheck,
    title: 'Safety built-in',
    desc: 'Photo verification, report tools, and conversation controls keep your experience safe and respectful.'
  },
  {
    icon: Sparkles,
    title: 'Real success stories',
    desc: 'Hundreds of couples met on Flutter. See how people are finding connections that last.'
  }
]

export default function Features() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Built for real connection</h2>
          <p className="mt-3 text-gray-600">Everything in Flutter is designed around better conversations and better matches.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-6 bg-white/80 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-500 to-violet-600 text-white flex items-center justify-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
