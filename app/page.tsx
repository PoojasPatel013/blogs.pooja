"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Vintage Newspaper Header */}
      <header className="border-b-4 border-black py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xs tracking-widest font-mono">2025</div>
            <div className="text-xs tracking-widest font-mono">POOJA TALKS</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 tracking-tight">Pooja Talks</h1>
          <p className="text-center text-sm md:text-base tracking-widest font-mono border-t-2 border-b-2 border-black py-3">
            PERSONAL BLOGS ON LIFE, RESEARCH & DISCOVERY
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Tagline Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Exploring Life, Spirituality, Research & Technology
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Welcome to my personal blog space. I write about life experiences, spirituality, research insights,
            technology trends, AI & LLMs, product analysis, and my passion for discovery. Share your ideas, leave
            suggestions, and join the conversation.
          </p>
        </section>

        {/* Navigation Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Topics Card */}
          <div className="border-4 border-black p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 tracking-wide">TOPICS</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Explore my personal gallery and blog posts across different topics: Life, Spirituality, Research, and
              Technology.
            </p>
            <Link href="/topics">
              <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono tracking-widest">
                EXPLORE TOPICS
              </Button>
            </Link>
          </div>

          {/* Blogs Card */}
          <div className="border-4 border-black p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 tracking-wide">BLOGS</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Browse all my blog posts and research articles. Filter by topics and hashtags to find content that
              interests you.
            </p>
            <Link href="/feed">
              <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono tracking-widest">
                READ BLOGS
              </Button>
            </Link>
          </div>

          {/* My Socials Card */}
          <div className="border-4 border-black p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 tracking-wide">ABOUT ME</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Learn more about me, my research focus on AI, LLMs, product analysis, and project management. Connect on
              social platforms.
            </p>
            <Link href="/socials">
              <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono tracking-widest">
                MY SOCIALS
              </Button>
            </Link>
          </div>

          {/* Leave Ideas Card */}
          <div className="border-4 border-black p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 tracking-wide">LEAVE IDEAS</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Share your thoughts, suggestions, and ideas on my blog topics. Like posts and send me flowers as
              appreciation.
            </p>
            <Link href="/ideas">
              <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono tracking-widest">
                SHARE IDEAS
              </Button>
            </Link>
          </div>

          {/* Shop Card */}
          <div className="border-4 border-black p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 tracking-wide">MY SHOP</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Explore my published books and written works. Support my research and writing through purchases.
            </p>
            <Link href="/shop">
              <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono tracking-widest">
                BROWSE BOOKS
              </Button>
            </Link>
          </div>

          {/* Buy Me Coffee Card */}
          <div className="border-4 border-black p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 tracking-wide">SUPPORT ME</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Enjoy my content? Support my research and writing by buying me coffee or sending flowers. Every
              contribution helps.
            </p>
            <a href="https://buymeacoffee.com/pooja.p" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono tracking-widest">
                BUY ME COFFEE
              </Button>
            </a>
          </div>
        </section>

        {/* Featured Topics Section */}
        <section className="border-t-4 border-black pt-12">
          <h2 className="text-3xl font-bold mb-8 tracking-wide">FEATURED TOPICS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/topics/life" className="group">
              <div className="border-2 border-black overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200 flex items-center justify-center text-sm font-mono">
                  Life & Experiences
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-lg mb-2">Life</h3>
                  <p className="text-sm text-gray-700">Personal reflections and experiences</p>
                </div>
              </div>
            </Link>

            <Link href="/topics/technology" className="group">
              <div className="border-2 border-black overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200 flex items-center justify-center text-sm font-mono">
                  Technology & AI
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-lg mb-2">Technology</h3>
                  <p className="text-sm text-gray-700">AI, LLMs, product analysis & trends</p>
                </div>
              </div>
            </Link>

            <Link href="/topics/research" className="group">
              <div className="border-2 border-black overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200 flex items-center justify-center text-sm font-mono">
                  Research & Analysis
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-lg mb-2">Research</h3>
                  <p className="text-sm text-gray-700">Market research and business insights</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Footer Info */}
        <section className="border-t-4 border-black mt-16 pt-8 text-center">
          <p className="text-sm text-gray-600 mb-4 font-mono">
            Researching AI, LLMs, product analysis & project management
          </p>
          <p className="text-xs text-gray-500 font-mono">
            © 2025 Pooja Talks. All rights reserved. Conducting research, attending conferences, leading projects.
          </p>
        </section>
      </main>
    </div>
  )
}
