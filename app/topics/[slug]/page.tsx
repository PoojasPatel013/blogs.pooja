"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useParams } from "next/navigation"

const topicData: Record<string, any> = {
  life: {
    name: "Life & Experiences",
    description:
      "Personal reflections on life, growth, and the experiences that shape who we are. From everyday moments to profound realizations, I share my journey and insights about living authentically.",
    posts: [
      {
        id: 1,
        title: "Finding Purpose in Everyday Moments",
        excerpt: "How small moments of awareness can lead to profound life changes...",
        date: "2025-01-15",
        hashtags: ["#life", "#growth", "#reflection"],
        likes: 234,
      },
      {
        id: 2,
        title: "The Art of Meaningful Conversations",
        excerpt: "Why deep conversations matter more than we think...",
        date: "2025-01-10",
        hashtags: ["#relationships", "#communication", "#life"],
        likes: 189,
      },
      {
        id: 3,
        title: "Embracing Change and Uncertainty",
        excerpt: "Learning to navigate life's transitions with grace...",
        date: "2025-01-05",
        hashtags: ["#growth", "#change", "#mindfulness"],
        likes: 156,
      },
    ],
  },
  spirituality: {
    name: "Spirituality",
    description:
      "Exploring Hindu philosophy, spirituality, and ancient wisdom traditions. I share insights into Hindu teachings and their relevance to modern life.",
    posts: [
      {
        id: 1,
        title: "The Bhagavad Gita: Timeless Wisdom for Modern Times",
        excerpt: "How ancient Hindu philosophy addresses contemporary challenges...",
        date: "2025-01-13",
        hashtags: ["#hinduism", "#spirituality", "#philosophy"],
        likes: 289,
      },
      {
        id: 2,
        title: "Understanding Karma and Dharma",
        excerpt: "Deep dive into fundamental Hindu concepts...",
        date: "2025-01-07",
        hashtags: ["#hinduism", "#karma", "#dharma"],
        likes: 234,
      },
    ],
  },
  research: {
    name: "Research & Analysis",
    description:
      "Product analysis, market research, project management, and business insights. I conduct research on emerging products and market trends.",
    posts: [
      {
        id: 1,
        title: "Product Analysis Framework: A Comprehensive Guide",
        excerpt: "How to analyze products effectively for market insights...",
        date: "2025-01-16",
        hashtags: ["#productanalysis", "#research", "#business"],
        likes: 398,
      },
      {
        id: 2,
        title: "Market Trends Q1 2025: What's Emerging",
        excerpt: "Key market trends and opportunities to watch...",
        date: "2025-01-12",
        hashtags: ["#markettrends", "#research", "#business"],
        likes: 334,
      },
      {
        id: 3,
        title: "Project Management Best Practices",
        excerpt: "Strategies for leading successful projects...",
        date: "2025-01-08",
        hashtags: ["#projectmanagement", "#leadership", "#business"],
        likes: 289,
      },
      {
        id: 4,
        title: "Conducting Effective Market Research",
        excerpt: "Methods and tools for gathering market insights...",
        date: "2025-01-02",
        hashtags: ["#research", "#marketanalysis", "#business"],
        likes: 245,
      },
      {
        id: 5,
        title: "Business Intelligence: Turning Data into Insights",
        excerpt: "How to leverage data for strategic decision-making...",
        date: "2024-12-28",
        hashtags: ["#businessintelligence", "#data", "#analysis"],
        likes: 198,
      },
    ],
  },
  technology: {
    name: "Technology & AI",
    description:
      "AI, LLMs, product analysis, and emerging tech trends. I research and write about the intersection of AI, market trends, and innovation in technology.",
    posts: [
      {
        id: 1,
        title: "The Evolution of Large Language Models in 2025",
        excerpt: "Analyzing the latest advancements in LLM technology...",
        date: "2025-01-16",
        hashtags: ["#AI", "#LLM", "#technology"],
        likes: 456,
      },
      {
        id: 2,
        title: "Product Analysis: The New Wave of AI Tools",
        excerpt: "Evaluating emerging AI products and their market impact...",
        date: "2025-01-11",
        hashtags: ["#productanalysis", "#AI", "#innovation"],
        likes: 389,
      },
      {
        id: 3,
        title: "Accuracy and Ethics in AI Systems",
        excerpt: "Exploring the challenges of building trustworthy AI...",
        date: "2025-01-06",
        hashtags: ["#AI", "#ethics", "#accuracy"],
        likes: 334,
      },
      {
        id: 4,
        title: "Market Trends: Where AI is Heading",
        excerpt: "Insights on the future direction of artificial intelligence...",
        date: "2025-01-01",
        hashtags: ["#AI", "#markettrends", "#research"],
        likes: 298,
      },
    ],
  },
  culture: {
    name: "Culture",
    description: "Cultural exploration and heritage.",
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
    posts: [
      {
        id: 1,
        title: "Geography and Culture: How Landscape Shapes Civilization",
        excerpt: "The relationship between geography and cultural development...",
        date: "2025-01-09",
        hashtags: ["#geography", "#culture", "#history"],
        likes: 198,
      },
    ],
  },
  random: {
    name: "Random Thoughts",
    description: "Miscellaneous musings and observations.",
    posts: [
      {
        id: 1,
        title: "Thoughts on Creativity and Expression",
        excerpt: "Random musings on the creative process...",
        date: "2025-01-14",
        hashtags: ["#creativity", "#thoughts", "#expression"],
        likes: 145,
      },
    ],
  },
  academia: {
    name: "Academia",
    description: "Academic research and scholarly insights.",
    posts: [
      {
        id: 1,
        title: "Transforming Development Projects into Research Papers",
        excerpt: "A comprehensive guide to academic writing and publication...",
        date: "2025-01-17",
        hashtags: ["#academia", "#research", "#writing"],
        likes: 567,
      },
    ],
  },
}

export default function TopicDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const topic = topicData[slug]

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

                    {/* Likes */}
                    <div className="text-right ml-6">
                      <p className="text-sm font-mono text-gray-600 mb-1">LIKES</p>
                      <p className="text-3xl font-bold">{post.likes}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="border-t-2 border-black pt-4 flex gap-4">
                    <Button className="flex-1 bg-black text-white hover:bg-gray-800 font-mono text-sm">
                      READ MORE
                    </Button>
                    <Button className="flex-1 bg-white text-black border-2 border-black hover:bg-gray-100 font-mono text-sm">
                      LIKE
                    </Button>
                    <Button className="flex-1 bg-white text-black border-2 border-black hover:bg-gray-100 font-mono text-sm">
                      GIFT FLOWERS
                    </Button>
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
