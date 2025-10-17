"use client"
import { Button } from "@/components/ui/button"

export default function SocialsPage() {
  const socialLinks = [
    {
      name: "Twitter/X",
      url: "https://twitter.com",
      description: "Follow for daily insights on AI, tech trends, and research updates",
      icon: "𝕏",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      description: "Connect for professional updates and project management insights",
      icon: "in",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      description: "Visual journey through my personal gallery and travels",
      icon: "📷",
    },
    {
      name: "GitHub",
      url: "https://github.com",
      description: "Explore my projects and research implementations",
      icon: "⚙️",
    },
    {
      name: "Medium",
      url: "https://medium.com",
      description: "In-depth articles on AI, product analysis, and research",
      icon: "📝",
    },
    {
      name: "Buy Me Coffee",
      url: "https://buymeacoffee.com/pooja.p",
      description: "Support my research and writing",
      icon: "☕",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Header */}
      <header className="border-b-4 border-black py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">ABOUT ME</h1>
          <p className="text-sm md:text-base tracking-widest font-mono border-t-2 border-black pt-2">
            POOJA PATEL • RESEARCHER • WRITER • ANALYST
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Profile Section */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Bio */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 tracking-wide">WHO I AM</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                I'm Pooja, a researcher and writer passionate about exploring the intersection of AI, LLMs, and market
                trends. I conduct research, attend conferences, and lead projects that drive innovation and business
                insights.
              </p>
              <p>
                My work focuses on product analysis, project management, and uncovering insights that drive business
                growth. I'm particularly interested in how emerging technologies reshape industries and society.
              </p>
              <p>
                Beyond technology, I'm deeply passionate about history, culture, spirituality, and nature. I write about
                life experiences, romantic musings, archaeological discoveries, and the beauty of our natural world.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-4">
            <div className="border-4 border-black p-6">
              <p className="text-sm font-mono text-gray-600 mb-2">FOCUS AREAS</p>
              <ul className="space-y-2 text-sm">
                <li className="font-mono">• AI & LLMs</li>
                <li className="font-mono">• Product Analysis</li>
                <li className="font-mono">• Project Management</li>
                <li className="font-mono">• Market Research</li>
                <li className="font-mono">• Business Insights</li>
              </ul>
            </div>

            <div className="border-4 border-black p-6">
              <p className="text-sm font-mono text-gray-600 mb-2">INTERESTS</p>
              <ul className="space-y-2 text-sm">
                <li className="font-mono">• History & Culture</li>
                <li className="font-mono">• Archaeology</li>
                <li className="font-mono">• Hinduism</li>
                <li className="font-mono">• Geography</li>
                <li className="font-mono">• Nature</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16 border-t-4 border-black pt-12">
          <h2 className="text-3xl font-bold mb-8 tracking-wide">WHAT I DO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-black p-8">
              <h3 className="text-2xl font-bold mb-4">Conducting Research</h3>
              <p className="text-gray-700 leading-relaxed">
                I conduct in-depth research on emerging technologies, market trends, and product innovations. My
                research focuses on understanding how AI and LLMs are transforming industries.
              </p>
            </div>

            <div className="border-2 border-black p-8">
              <h3 className="text-2xl font-bold mb-4">Attending Conferences</h3>
              <p className="text-gray-700 leading-relaxed">
                I actively participate in conferences and industry events to stay updated on the latest developments and
                network with fellow researchers and innovators.
              </p>
            </div>

            <div className="border-2 border-black p-8">
              <h3 className="text-2xl font-bold mb-4">Project Leading</h3>
              <p className="text-gray-700 leading-relaxed">
                I lead projects that combine research insights with practical implementation. My focus is on creating
                solutions that drive business value and innovation.
              </p>
            </div>

            <div className="border-2 border-black p-8">
              <h3 className="text-2xl font-bold mb-4">Writing & Analysis</h3>
              <p className="text-gray-700 leading-relaxed">
                I write extensively about technology trends, product analysis, and market insights. My writing aims to
                make complex topics accessible and actionable.
              </p>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="border-t-4 border-black pt-12">
          <h2 className="text-3xl font-bold mb-8 tracking-wide">CONNECT WITH ME</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="group">
                <div className="border-4 border-black p-6 hover:shadow-lg transition-shadow h-full flex flex-col bg-white hover:bg-gray-50">
                  <div className="text-4xl mb-4">{social.icon}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:underline">{social.name}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">{social.description}</p>
                  <div className="border-t-2 border-black pt-4 mt-4">
                    <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono text-sm">VISIT</Button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <section className="border-t-4 border-black mt-16 pt-8 text-center">
          <p className="text-sm text-gray-600 mb-4 font-mono">
            Researching AI, LLMs, and market trends | Writing about life, history, and nature
          </p>
          <p className="text-xs text-gray-500 font-mono">© 2025 Pooja Talks. All rights reserved.</p>
        </section>
      </main>
    </div>
  )
}
