"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const communities = [
  {
    slug: "romanticism",
    name: "Romanticism & Dreams",
    description:
      "Explore the beauty of romantic landscapes, emotional expression, and artistic wonder. Share your appreciation for nature's majesty and the sublime.",
    image: "/romanticism.jpg",
    members: 2847,
    posts: 1203,
  },
  {
    slug: "history",
    name: "Historic Culture",
    description:
      "Discuss ancient civilizations, cultural heritage, and historical discoveries. Learn from the past and share fascinating insights about human history.",
    image: "/historic.jpg",
    members: 1956,
    posts: 892,
  },
  {
    slug: "nature",
    name: "Nature & Landscapes",
    description:
      "Celebrate natural beauty, wildlife, and outdoor adventures. Share your favorite nature discoveries and connect with environmental enthusiasts.",
    image: "/nature-art.webp",
    members: 3124,
    posts: 1567,
  },
  {
    slug: "modern",
    name: "Modern & Abstract",
    description:
      "Explore contemporary art, abstract expressions, and bold creative visions. Celebrate innovation and artistic experimentation in all forms.",
    image: "/modern.jpg",
    members: 2341,
    posts: 1089,
  },
  {
    slug: "technology",
    name: "Technology & Innovation",
    description:
      "Explore cutting-edge tech, digital innovation, and the future. Connect with tech enthusiasts and discuss emerging technologies.",
    image: "/technology.jpg",
    members: 4201,
    posts: 2341,
  },
  {
    slug: "gaming",
    name: "Gaming & Play",
    description:
      "Celebrate gaming culture, esports, and interactive entertainment. Share your favorite games and connect with fellow gamers worldwide.",
    image: "/games.jpg",
    members: 2934,
    posts: 1489,
  },
]

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Header */}
      <header className="border-b-4 border-black py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">COMMUNITIES</h1>
          <p className="text-sm md:text-base tracking-widest font-mono border-t-2 border-black pt-2">
            DISCOVER TOPIC-BASED COMMUNITIES
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Intro Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Find Your Community</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Join communities centered around your passions and interests. Connect with like-minded individuals and
            engage in meaningful conversations.
          </p>
        </section>

        {/* Communities Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community) => (
            <Link key={community.slug} href={`/communities/${community.slug}`}>
              <div className="border-4 border-black overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col cursor-pointer group">
                {/* Image */}
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img
                    src={community.image || "/placeholder.svg"}
                    alt={community.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 tracking-wide">{community.name}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed flex-1">{community.description}</p>

                  {/* Stats */}
                  <div className="border-t-2 border-black pt-4 mb-4 flex justify-between text-sm font-mono">
                    <div>
                      <p className="text-gray-600">MEMBERS</p>
                      <p className="font-bold text-lg">{community.members.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">POSTS</p>
                      <p className="font-bold text-lg">{community.posts.toLocaleString()}</p>
                    </div>
                  </div>

                  <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono tracking-widest">
                    EXPLORE
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Footer */}
        <section className="border-t-4 border-black mt-16 pt-8 text-center">
          <p className="text-sm text-gray-600 mb-4 font-mono">Join a community and start conversations</p>
          <p className="text-xs text-gray-500 font-mono">© 2025 TALKSY. All rights reserved.</p>
        </section>
      </main>
    </div>
  )
}
