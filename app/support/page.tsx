"use client"

import { Button } from "@/components/ui/button"

export default function SupportPage() {
  const supportOptions = [
    {
      title: "Buy Me Coffee",
      description: "Support my research and writing with a coffee",
      amount: "$3",
      icon: "☕",
      color: "bg-amber-50",
    },
    {
      title: "Send Flowers",
      description: "Show appreciation for my blog posts and ideas",
      amount: "$5",
      icon: "🌸",
      color: "bg-pink-50",
    },
    {
      title: "Support My Research",
      description: "Help fund my ongoing research projects",
      amount: "$10",
      icon: "🔬",
      color: "bg-blue-50",
    },
    {
      title: "Sponsor a Project",
      description: "Support a specific research or writing project",
      amount: "$25",
      icon: "🚀",
      color: "bg-purple-50",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Header */}
      <header className="border-b-4 border-black py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">SUPPORT ME</h1>
          <p className="text-sm md:text-base tracking-widest font-mono border-t-2 border-black pt-2">
            HELP FUEL MY RESEARCH & WRITING
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Intro Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Support My Work</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            If you enjoy my blog posts, research insights, and writing, consider supporting my work. Every contribution
            helps me continue researching, writing, and sharing knowledge about AI, technology, history, and more.
          </p>
        </section>

        {/* Support Options */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {supportOptions.map((option) => (
            <a
              key={option.title}
              href="https://buymeacoffee.com/pooja.p"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div
                className={`border-4 border-black p-8 hover:shadow-xl transition-shadow h-full flex flex-col ${option.color}`}
              >
                <div className="text-6xl mb-4">{option.icon}</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:underline">{option.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed flex-1">{option.description}</p>
                <div className="border-t-2 border-black pt-4">
                  <p className="text-3xl font-bold mb-4">{option.amount}</p>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono tracking-widest">
                    SUPPORT NOW
                  </Button>
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* Why Support Section */}
        <section className="border-t-4 border-black pt-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 tracking-wide">WHY SUPPORT?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-black p-8">
              <h3 className="text-xl font-bold mb-4">Research & Development</h3>
              <p className="text-gray-700 leading-relaxed">
                Your support helps me conduct in-depth research on AI, LLMs, market trends, and emerging technologies.
                It enables me to attend conferences and stay at the forefront of innovation.
              </p>
            </div>

            <div className="border-2 border-black p-8">
              <h3 className="text-xl font-bold mb-4">Quality Content</h3>
              <p className="text-gray-700 leading-relaxed">
                Support helps me dedicate more time to writing thoughtful, well-researched blog posts and articles on
                topics I'm passionate about.
              </p>
            </div>

            <div className="border-2 border-black p-8">
              <h3 className="text-xl font-bold mb-4">Project Development</h3>
              <p className="text-gray-700 leading-relaxed">
                Contributions help fund my research projects, writing initiatives, and the development of tools and
                resources I share with the community.
              </p>
            </div>

            <div className="border-2 border-black p-8">
              <h3 className="text-xl font-bold mb-4">Community Building</h3>
              <p className="text-gray-700 leading-relaxed">
                Your support enables me to create more interactive content, host discussions, and build a vibrant
                community around shared interests.
              </p>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="border-t-4 border-black pt-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 tracking-wide">WHAT YOU GET</h2>
          <div className="border-4 border-black p-8 bg-gray-50">
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="font-bold mr-4">✓</span>
                <span>My heartfelt gratitude and recognition as a supporter</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-4">✓</span>
                <span>Access to exclusive content and early blog post previews</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-4">✓</span>
                <span>Direct connection to support my ongoing research and projects</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-4">✓</span>
                <span>Knowing you're helping fuel quality content and research</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-4">✓</span>
                <span>Opportunity to suggest topics and ideas for future posts</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t-4 border-black pt-12 text-center">
          <h2 className="text-3xl font-bold mb-6 tracking-wide">READY TO SUPPORT?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Visit my Buy Me Coffee page to choose your support level and help me continue this journey of research,
            writing, and discovery.
          </p>
          <a href="https://buymeacoffee.com/pooja.p" target="_blank" rel="noopener noreferrer">
            <Button className="bg-black text-white hover:bg-gray-800 font-mono tracking-widest py-6 text-lg px-8">
              VISIT BUY ME COFFEE
            </Button>
          </a>
        </section>

        {/* Footer */}
        <section className="border-t-4 border-black mt-16 pt-8 text-center">
          <p className="text-sm text-gray-600 mb-4 font-mono">Thank you for supporting my work</p>
          <p className="text-xs text-gray-500 font-mono">© 2025 Pooja Talks. All rights reserved.</p>
        </section>
      </main>
    </div>
  )
}
