"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const mainTopics = [
  {
    slug: "life",
    name: "Life & Experiences",
    description: "Personal reflections and experiences that shape who we are.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/life-PZ7EaVpXCuJh2qOHQwHLkeZMxSMU9x.jpg",
    posts: 1,
  },
  {
    slug: "spirituality",
    name: "Spirituality",
    description: "Exploring Hindu philosophy and ancient wisdom traditions.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spirituality-l7ORrwdI3Sfo1yzmjlhtCdnEWOB9I4.jpg",
    posts: 1,
  },
  {
    slug: "research",
    name: "Research & Analysis",
    description: "Product analysis, market research, and business insights.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/research-gApktgwnTqyXT3WKbm5lYxGSC3l78g.jpg",
    posts: 2,
  },
  {
    slug: "technology",
    name: "Technology & AI",
    description: "AI, LLMs, product analysis, and emerging tech trends.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/technology-jV3NuHKEtMpx4Dja6AgCaSPpyi8uYj.webp",
    posts: 2,
  },
]

const otherTopics = [
  {
    slug: "culture",
    name: "Culture",
    description: "Cultural exploration and heritage.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/culture-t7vr8oZbfQ7pNmVXTDcW12UWnE5USC.jpg",
    posts: 1,
  },
  {
    slug: "geography",
    name: "Geography",
    description: "Geographical exploration and discoveries.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/geography-5tqr10XcoFEY9Tt9LG4ZZr6sVQd2UG.jpg",
    posts: 1,
  },
  {
    slug: "random",
    name: "Random Thoughts",
    description: "Miscellaneous musings and observations.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/random%20thoughts-PA3DFRF9f7JbK29FE49uA9j77apJpM.jpg",
    posts: 1,
  },
  {
    slug: "academia",
    name: "Academia",
    description: "Academic research and scholarly insights.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/academia-oCcvZ9S4heun5HjHpoonBzDjFgcxIg.jpg",
    posts: 1,
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainTopics.map((topic) => (
              <Link key={topic.slug} href={`/topics/${topic.slug}`}>
                <div className="border-4 border-black overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col cursor-pointer group bg-white">
                  <div className="h-48 bg-gray-200 overflow-hidden border-b-4 border-black">
                    <img
                      src={topic.image || "/placeholder.svg"}
                      alt={topic.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
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
                <div className="border-4 border-black overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col cursor-pointer group bg-white">
                  <div className="h-32 bg-gray-200 overflow-hidden border-b-4 border-black">
                    <img
                      src={topic.image || "/placeholder.svg"}
                      alt={topic.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
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
