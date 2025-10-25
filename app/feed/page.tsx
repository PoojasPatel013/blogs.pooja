"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const allPosts = [
  {
    id: 1,
    community: "Nature",
    title: "Hidden Waterfall in Costa Rica",
    content:
      "Just discovered this amazing waterfall deep in the rainforest. The water is so clear and the surrounding nature is breathtaking!",
    hashtags: ["#nature", "#travel", "#photography", "#adventure"],
    likes: 234,
    comments: 45,
    timestamp: "2 hours ago",
  }
]

export default function FeedPage() {
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>([])

  // Get all unique hashtags
  const allHashtags = useMemo(() => {
    const tags = new Set<string>()
    allPosts.forEach((post) => {
      post.hashtags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [])

  // Filter posts based on selected hashtags
  const filteredPosts = useMemo(() => {
    if (selectedHashtags.length === 0) {
      return allPosts
    }
    return allPosts.filter((post) => selectedHashtags.some((tag) => post.hashtags.includes(tag)))
  }, [selectedHashtags])

  const toggleHashtag = (hashtag: string) => {
    setSelectedHashtags((prev) => (prev.includes(hashtag) ? prev.filter((tag) => tag !== hashtag) : [...prev, hashtag]))
  }

  const clearFilters = () => {
    setSelectedHashtags([])
  }

  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Header */}
      <header className="border-b-4 border-black py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-xs tracking-widest font-mono hover:underline mb-4 inline-block">
            ← BACK TO HOME
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">FEED</h1>
          <p className="text-sm md:text-base tracking-widest font-mono border-t-2 border-black pt-2">
            DISCOVER CONVERSATIONS THAT MATTER
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        {/* Hashtag Filter Section */}
        <section className="mb-12 border-4 border-black p-8">
          <h2 className="text-2xl font-bold mb-6 tracking-wide">FILTER BY HASHTAGS</h2>

          {/* Selected Hashtags */}
          {selectedHashtags.length > 0 && (
            <div className="mb-6 pb-6 border-b-2 border-black">
              <div className="flex flex-wrap gap-3 mb-4">
                {selectedHashtags.map((tag) => (
                  <div key={tag} className="bg-black text-white px-4 py-2 font-mono text-sm flex items-center gap-2">
                    {tag}
                    <button
                      onClick={() => toggleHashtag(tag)}
                      className="hover:opacity-70 transition-opacity"
                      aria-label={`Remove ${tag} filter`}
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
              <button onClick={clearFilters} className="text-sm font-mono text-gray-600 hover:text-black underline">
                Clear all filters
              </button>
            </div>
          )}

          {/* Available Hashtags */}
          <div className="flex flex-wrap gap-3">
            {allHashtags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleHashtag(tag)}
                className={`px-4 py-2 font-mono text-sm transition-all ${
                  selectedHashtags.includes(tag)
                    ? "bg-black text-white border-2 border-black"
                    : "border-2 border-black text-black hover:bg-gray-100"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* Posts Section */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-wide">
              {selectedHashtags.length > 0 ? "FILTERED POSTS" : "ALL POSTS"}
            </h2>
            <p className="text-sm font-mono text-gray-600">{filteredPosts.length} posts</p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="border-4 border-black p-12 text-center">
              <p className="text-lg text-gray-700 mb-4">No posts found with the selected hashtags.</p>
              <button onClick={clearFilters} className="text-sm font-mono text-gray-600 hover:text-black underline">
                Clear filters to see all posts
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <div key={post.id} className="border-4 border-black p-8 hover:shadow-lg transition-shadow">
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                        <p className="text-xs font-mono text-gray-600 mb-1">
                          {(post.author ?? "Unknown").toUpperCase()} • {post.community.toUpperCase()}
                        </p>

                      
                      <h3 className="text-2xl font-bold tracking-wide">{post.title}</h3>
                    </div>
                    <p className="text-xs font-mono text-gray-600 whitespace-nowrap ml-4">{post.timestamp}</p>
                  </div>

                  {/* Post Content */}
                  <p className="text-gray-700 mb-6 leading-relaxed">{post.content}</p>

                  {/* Hashtags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.hashtags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleHashtag(tag)}
                        className={`text-sm font-mono px-3 py-1 transition-all ${
                          selectedHashtags.includes(tag)
                            ? "bg-black text-white"
                            : "border-2 border-black text-black hover:bg-gray-100"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  {/* Post Stats */}
                  <div className="border-t-2 border-black pt-4 flex items-center justify-between">
                    <div className="flex gap-8 font-mono text-sm">
                      <div>
                        <p className="text-gray-600">LIKES</p>
                        <p className="font-bold text-lg">{post.likes}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">COMMENTS</p>
                        <p className="font-bold text-lg">{post.comments}</p>
                      </div>
                    </div>
                    <Button className="bg-black text-white hover:bg-gray-800 font-mono tracking-widest">
                      VIEW POST
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <section className="border-t-4 border-black mt-16 pt-8 text-center">
          <p className="text-sm text-gray-600 mb-4 font-mono">Discover conversations that matter to you</p>
          <p className="text-xs text-gray-500 font-mono">© 2025 TALKSY. All rights reserved.</p>
        </section>
      </main>
    </div>
  )
}
