"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useParams } from "next/navigation"
import { useState } from "react"

const topicData: Record<string, any> = {
  life: {
    name: "Life & Experiences",
    description:
      "Personal reflections on life, growth, and the experiences that shape who we are. From everyday moments to profound realizations, I share my journey and insights about living authentically.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/life-PZ7EaVpXCuJh2qOHQwHLkeZMxSMU9x.jpg",
    posts: [
      {
        id: 1,
        title: "Finding Purpose in Everyday Moments",
        excerpt: "How small moments of awareness can lead to profound life changes...",
        date: "2025-01-15",
        hashtags: ["#life", "#growth", "#reflection"],
        likes: 2,
      },
    ],
  },
  spirituality: {
    name: "Spirituality",
    description:
      "Exploring Hindu philosophy, spirituality, and ancient wisdom traditions. I share insights into Hindu teachings and their relevance to modern life.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spirituality-l7ORrwdI3Sfo1yzmjlhtCdnEWOB9I4.jpg",
    posts: [
      {
        id: 1,
        title: "The Bhagavad Gita: Timeless Wisdom for Modern Times",
        excerpt: "How ancient Hindu philosophy addresses contemporary challenges...",
        date: "2025-01-13",
        hashtags: ["#hinduism", "#spirituality", "#philosophy"],
        likes: 2,
      },
    ],
  },
  research: {
    name: "Research & Analysis",
    description:
      "Product analysis, market research, project management, and business insights. I conduct research on emerging products and market trends.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/research-gApktgwnTqyXT3WKbm5lYxGSC3l78g.jpg",
    posts: [
      {
        id: 1,
        title: "Transforming Development Projects into Research Papers",
        excerpt: "A comprehensive guide to academic writing and publication...",
        date: "2025-01-17",
        hashtags: ["#academia", "#research", "#writing"],
        likes: 5,
      },
    ],
  },
  technology: {
    name: "Technology & AI",
    description:
      "AI, LLMs, product analysis, and emerging tech trends. I research and write about the intersection of AI, market trends, and innovation in technology.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/technology-jV3NuHKEtMpx4Dja6AgCaSPpyi8uYj.webp",
    posts: [
      {
        id: 1,
        title: "The Evolution of Large Language Models in 2025",
        excerpt: "Analyzing the latest advancements in LLM technology...",
        date: "2025-01-16",
        hashtags: ["#AI", "#LLM", "#technology"],
        likes: 4,
      },
    ],
  },
  culture: {
    name: "Culture",
    description: "Cultural exploration and heritage.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/culture-t7vr8oZbfQ7pNmVXTDcW12UWnE5USC.jpg",
    posts: [
      {
        id: 1,
        title: "The Role of Women in Historical Narratives",
        excerpt: "Uncovering hidden stories of influential women...",
        date: "2025-01-09",
        hashtags: ["#history", "#women", "#culture"],
        likes: 267,
      },
    ],
  },
  geography: {
    name: "Geography",
    description: "Geographical exploration and discoveries.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/geography-5tqr10XcoFEY9Tt9LG4ZZr6sVQd2UG.jpg",
    posts: [
      {
        id: 1,
        title: "Geography and Culture: How Landscape Shapes Civilization",
        excerpt: "The relationship between geography and cultural development...",
        date: "2025-01-09",
        hashtags: ["#geography", "#culture", "#history"],
        likes: 1,
      },
    ],
  },
  random: {
    name: "Random Thoughts",
    description: "Miscellaneous musings and observations.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/random%20thoughts-PA3DFRF9f7JbK29FE49uA9j77apJpM.jpg",
    posts: [
      {
        id: 1,
        title: "Thoughts on Creativity and Expression",
        excerpt: "Random musings on the creative process...",
        date: "2025-01-14",
        hashtags: ["#creativity", "#thoughts", "#expression"],
        likes: 14,
      },
    ],
  },
  academia: {
    name: "Academia",
    description: "Academic research and scholarly insights.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/academia-oCcvZ9S4heun5HjHpoonBzDjFgcxIg.jpg",
    posts: [
      {
        id: 1,
        title: "Conducting Effective Market Research",
        excerpt: "Methods and tools for gathering market insights...",
        date: "2025-04-12",
        hashtags: ["#academics", "#business"],
        likes: 2,
      },
    ],
  },
}

interface PostLikes {
  [key: number]: number
}

interface PostFlowers {
  [key: number]: number
}

interface PostLiked {
  [key: number]: boolean
}

const flowerStyles = `
  @keyframes fall {
    0% {
      top: -50px;
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      top: 100vh;
      opacity: 0;
    }
  }
  .falling-flower {
    position: fixed;
    animation: fall 3s linear forwards;
    font-size: 2rem;
    pointer-events: none;
    z-index: 50;
  }
`

interface FallingFlower {
  id: string
  emoji: string
  left: number
}

export default function TopicDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const topic = topicData[slug]

  const [postLikes, setPostLikes] = useState<PostLikes>(
    topic?.posts.reduce((acc: PostLikes, post: any) => ({ ...acc, [post.id]: post.likes }), {}) || {},
  )
  const [postFlowers, setPostFlowers] = useState<PostFlowers>(
    topic?.posts.reduce((acc: PostFlowers, post: any) => ({ ...acc, [post.id]: 0 }), {}) || {},
  )
  const [postLiked, setPostLiked] = useState<PostLiked>(
    topic?.posts.reduce((acc: PostLiked, post: any) => ({ ...acc, [post.id]: false }), {}) || {},
  )
  const [showFlowerMenu, setShowFlowerMenu] = useState<number | null>(null)
  const [fallingFlowers, setFallingFlowers] = useState<FallingFlower[]>([])

  const flowerOptions = [
    { name: "Rose", emoji: "🌹" },
    { name: "Sunflower", emoji: "🌻" },
    { name: "Tulip", emoji: "🌷" },
    { name: "Cherry Blossom", emoji: "🌸" },
    { name: "Hibiscus", emoji: "🌺" },
    { name: "Daisy", emoji: "🌼" },
  ]

  const handleLike = (postId: number) => {
    if (!postLiked[postId]) {
      setPostLikes({ ...postLikes, [postId]: postLikes[postId] + 1 })
      setPostLiked({ ...postLiked, [postId]: true })
    } else {
      setPostLikes({ ...postLikes, [postId]: postLikes[postId] - 1 })
      setPostLiked({ ...postLiked, [postId]: false })
    }
  }

  const handleGiftFlower = (postId: number, emoji: string) => {
    setPostFlowers({ ...postFlowers, [postId]: postFlowers[postId] + 1 })
    setShowFlowerMenu(null)

    const flowerId = `${Date.now()}-${Math.random()}`
    const leftPosition = Math.random() * 90

    setFallingFlowers((prev) => [...prev, { id: flowerId, emoji, left: leftPosition }])

    setTimeout(() => {
      setFallingFlowers((prev) => prev.filter((f) => f.id !== flowerId))
    }, 3000)
  }

  if (!topic) {
    return (
      <div className="min-h-screen bg-white text-black font-serif flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Topic Not Found</h1>
          <Link href="/topics">
            <Button className="bg-black text-white hover:bg-gray-800">Back to Topics</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-black font-serif">
      <style>{flowerStyles}</style>

      {fallingFlowers.map((flower) => (
        <div key={flower.id} className="falling-flower" style={{ left: `${flower.left}%` }}>
          {flower.emoji}
        </div>
      ))}

      <div className="w-full h-64 md:h-96 bg-gray-200 overflow-hidden border-b-4 border-black">
        <img src={topic.image || "/placeholder.svg"} alt={topic.name} className="w-full h-full object-cover" />
      </div>

      {/* Header */}
      <header className="border-b-4 border-black py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link href="/topics" className="text-xs tracking-widest font-mono hover:underline mb-4 inline-block">
            ← BACK TO TOPICS
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">{topic.name.toUpperCase()}</h1>
          <p className="text-sm md:text-base tracking-widest font-mono border-t-2 border-black pt-2">
            {topic.posts.length} BLOG POST{topic.posts.length !== 1 ? "S" : ""}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Description Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 tracking-wide">ABOUT THIS TOPIC</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">{topic.description}</p>
        </section>

        {/* Blog Posts Section */}
        <section className="border-t-4 border-black pt-12">
          <h2 className="text-3xl font-bold mb-8 tracking-wide">BLOG POSTS</h2>
          <div className="space-y-8">
            {topic.posts.map((post) => (
              <Link key={post.id} href={`/blog/${slug}/${post.id}`}>
                <div className="border-2 border-black p-8 hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <p className="text-xs font-mono text-gray-600 mb-2">{post.date}</p>
                      <h3 className="text-2xl font-bold mb-3 group-hover:underline">{post.title}</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>

                      {/* Hashtags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.hashtags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono bg-gray-100 border border-gray-300 px-3 py-1 hover:bg-black hover:text-white transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Likes and Flowers */}
                    <div className="text-right ml-6">
                      <p className="text-sm font-mono text-gray-600 mb-1">LIKES</p>
                      <p className="text-3xl font-bold">{postLikes[post.id]}</p>
                      {postFlowers[post.id] > 0 && (
                        <p className="text-sm font-mono text-gray-600 mt-2">🌸 {postFlowers[post.id]}</p>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="border-t-2 border-black pt-4 flex gap-4 relative" onClick={(e) => e.preventDefault()}>
                    <Link href={`/blog/${slug}/${post.id}`} className="flex-1">
                      <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono text-sm">
                        READ MORE
                      </Button>
                    </Link>

                    <Button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        handleLike(post.id)
                      }}
                      className={`flex-1 font-mono text-sm transition-all ${
                        postLiked[post.id]
                          ? "bg-black text-white hover:bg-gray-700"
                          : "bg-white text-black border-2 border-black hover:bg-gray-100"
                      }`}
                    >
                      {postLiked[post.id] ? "✓ LIKED" : "LIKE"}
                    </Button>

                    <div className="flex-1 relative">
                      <Button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          setShowFlowerMenu(showFlowerMenu === post.id ? null : post.id)
                        }}
                        className="w-full bg-white text-black border-2 border-black hover:bg-gray-100 font-mono text-sm"
                      >
                        GIFT FLOWERS
                      </Button>

                      {/* Flower selection menu */}
                      {showFlowerMenu === post.id && (
                        <div className="absolute bottom-full right-0 mb-2 bg-white border-2 border-black shadow-lg z-40">
                          <div className="p-4 grid grid-cols-3 gap-2">
                            {flowerOptions.map((flower) => (
                              <button
                                key={flower.name}
                                onClick={(e) => {
                                  e.preventDefault()
                                  e.stopPropagation()
                                  handleGiftFlower(post.id, flower.emoji)
                                }}
                                className="flex flex-col items-center gap-1 p-3 hover:bg-gray-100 transition-colors border border-gray-200 hover:border-black"
                                title={flower.name}
                              >
                                <span className="text-2xl">{flower.emoji}</span>
                                <span className="text-xs font-mono text-gray-600">{flower.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <section className="border-t-4 border-black mt-16 pt-8 text-center">
          <p className="text-sm text-gray-600 mb-4 font-mono">Enjoy my content? Leave ideas and suggestions</p>
          <p className="text-xs text-gray-500 font-mono">© 2025 Pooja Talks. All rights reserved.</p>
        </section>
      </main>
    </div>
  )
}
