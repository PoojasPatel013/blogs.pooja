"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const mainTopics = [
  {
    slug: "life",
    name: "Life & Experiences",
    description: "Personal reflections, life lessons, and experiences that shape who we are.",
    icon: "✨",
    posts: 24,
  },
  {
    slug: "spirituality",
    name: "Spirituality",
    description: "Exploring Hindu philosophy, spirituality, and ancient wisdom traditions.",
    icon: "🙏",
    posts: 19,
  },
  {
    slug: "research",
    name: "Research & Analysis",
    description: "Product analysis, market research, project management, and business insights.",
    icon: "📊",
    posts: 35,
  },
  {
    slug: "technology",
    name: "Technology & AI",
    description: "AI, LLMs, product analysis, emerging tech trends, and innovation.",
    icon: "🚀",
    posts: 42,
  },
]

const otherTopics = [
  {
    slug: "culture",
    name: "Culture",
    description: "Cultural exploration and heritage.",
    icon: "🎭",
    posts: 12,
  },
  {
    slug: "geography",
    name: "Geography",
    description: "Geographical exploration and discoveries.",
    icon: "🗺️",
    posts: 15,
  },
  {
    slug: "random",
    name: "Random Thoughts",
    description: "Miscellaneous musings and observations.",
    icon: "💭",
    posts: 8,
  },
  {
    slug: "academia",
    name: "Academia",
    description: "Academic research and scholarly insights.",
    icon: "📚",
    posts: 11,
  },
]

export default function TopicsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Header */}
      <header className="border-b-4 border-black py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">TOPICS</h1>
          <p className="text-sm md:text-base tracking-widest font-mono border-t-2 border-black pt-2">
            EXPLORE MY PERSONAL GALLERY & BLOG POSTS
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Intro Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Discover My Topics</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Explore my personal gallery and blog posts across different topics. Each topic contains my research,
            insights, and personal reflections on subjects I'm passionate about.
          </p>
        </section>

        {/* Main Topics Grid */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 tracking-wide border-b-2 border-black pb-4">MAIN TOPICS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainTopics.map((topic) => (
              <Link key={topic.slug} href={`/topics/${topic.slug}`}>
                <div className="border-4 border-black p-6 hover:shadow-xl transition-shadow h-full flex flex-col cursor-pointer group bg-white">
                  {/* Icon */}
                  <div className="text-5xl mb-4">{topic.icon}</div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 tracking-wide group-hover:underline">{topic.name}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed flex-1 text-sm">{topic.description}</p>

                  {/* Stats */}
                  <div className="border-t-2 border-black pt-4 mb-4">
                    <p className="text-sm font-mono text-gray-600">
                      {topic.posts} BLOG POST{topic.posts !== 1 ? "S" : ""}
                    </p>
                  </div>

                  <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono tracking-widest text-sm">
                    EXPLORE
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Other Topics Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 tracking-wide border-b-2 border-black pb-4">OTHER TOPICS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherTopics.map((topic) => (
              <Link key={topic.slug} href={`/topics/${topic.slug}`}>
                <div className="border-4 border-black p-6 hover:shadow-xl transition-shadow h-full flex flex-col cursor-pointer group bg-white">
                  {/* Icon */}
                  <div className="text-5xl mb-4">{topic.icon}</div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 tracking-wide group-hover:underline">{topic.name}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed flex-1 text-sm">{topic.description}</p>

                  {/* Stats */}
                  <div className="border-t-2 border-black pt-4 mb-4">
                    <p className="text-sm font-mono text-gray-600">
                      {topic.posts} BLOG POST{topic.posts !== 1 ? "S" : ""}
                    </p>
                  </div>

                  <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono tracking-widest text-sm">
                    EXPLORE
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <section className="border-t-4 border-black mt-16 pt-8 text-center">
          <p className="text-sm text-gray-600 mb-4 font-mono">
            Each topic contains my personal gallery, blog posts, and research
          </p>
          <p className="text-xs text-gray-500 font-mono">© 2025 Pooja Talks. All rights reserved.</p>
        </section>
      </main>
    </div>
  )
}
