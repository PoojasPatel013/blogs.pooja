"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Plus } from "lucide-react"
import { useState } from "react"

const communityData: Record<string, any> = {
  nature: {
    name: "Nature & Landscapes",
    description: "Explore the beauty of natural landscapes, wildlife, and environmental conversations.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nature%20art-Uywe4utHZfUyeRvgrkjSwS9oAcHUVC.webp",
    intro:
      "Welcome to Nature & Landscapes, a community dedicated to celebrating the beauty of our natural world. Share stunning photographs, discuss environmental topics, and connect with fellow nature enthusiasts. This is a space for peaceful contemplation and shared appreciation of Earth's wonders.",
    guidelines: [
      "Respect all living creatures and ecosystems",
      "Share responsibly - no location spoiling for sensitive areas",
      "Celebrate biodiversity and conservation efforts",
      "Keep discussions peaceful and educational",
    ],
    members: 2847,
    posts: 1203,
  },
  history: {
    name: "History & Culture",
    description: "Dive into historical events, cultural traditions, and civilizations across time.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/historic-SdDQB7kiFclDeHk3Hx6Izsa6Myck45.jpg",
    intro:
      "Welcome to History & Culture, where we explore the rich tapestry of human civilization. Discuss historical events, share cultural traditions, and learn from diverse perspectives. This community celebrates our shared heritage and the lessons history teaches us.",
    guidelines: [
      "Respect all cultures and traditions",
      "Cite sources for historical claims",
      "Engage in respectful debate",
      "Celebrate diversity and inclusion",
    ],
    members: 3421,
    posts: 1856,
  },
  art: {
    name: "Art & Aesthetics",
    description: "Share and discuss artistic expressions, paintings, and creative visions.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Romanticism-Paintings-1-3Hwiy78lp1ORX2g5Cj7PhikegYZI9E.jpg",
    intro:
      "Welcome to Art & Aesthetics, a creative sanctuary for artists and art lovers. Share your work, discuss techniques, find inspiration, and celebrate the power of artistic expression. Whether you're a professional or hobbyist, this space is for you.",
    guidelines: [
      "Celebrate all forms of artistic expression",
      "Give constructive and encouraging feedback",
      "Credit original artists and sources",
      "Support fellow creators",
    ],
    members: 2156,
    posts: 987,
  },
  "modern-art": {
    name: "Modern & Abstract",
    description: "Explore contemporary art, abstract expressions, and modern artistic movements.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modern-zYgunwjAfhlmfVtIQkAujbE81E9TMe.jpg",
    intro:
      "Welcome to Modern & Abstract, where contemporary art and bold expressions thrive. Explore abstract movements, discuss modern artists, and push creative boundaries. This is a space for experimental thinking and innovative artistic vision.",
    guidelines: [
      "Embrace experimental and unconventional art",
      "Celebrate diversity in artistic styles",
      "Engage in thoughtful critique",
      "Support artistic innovation",
    ],
    members: 1834,
    posts: 756,
  },
  tech: {
    name: "Technology & Innovation",
    description: "Discuss cutting-edge technology, innovation, and the future of digital spaces.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/technology-JvJa0LX5rBOafVcNhQjSqSj4LyduaF.jpg",
    intro:
      "Welcome to Technology & Innovation, a forward-thinking community exploring the digital frontier. Discuss emerging technologies, share innovations, and collaborate on ideas. This space celebrates curiosity and collaborative problem-solving.",
    guidelines: [
      "Share knowledge generously",
      "Ask questions and support learning",
      "Discuss ethics in technology",
      "Collaborate and build together",
    ],
    members: 4203,
    posts: 2341,
  },
  gaming: {
    name: "Gaming & Play",
    description: "Connect with gamers, discuss games, strategies, and the joy of play.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/games-8vw3gTDXiKF51N3aQIRdOiQFNJNApa.jpg",
    intro:
      "Welcome to Gaming & Play, where gamers unite to share passion and joy. Discuss games, strategies, tournaments, and the community. This is a space for fun, competition, and camaraderie.",
    guidelines: [
      "Play fair and respect opponents",
      "Celebrate wins and support losses",
      "No harassment or toxic behavior",
      "Support your gaming community",
    ],
    members: 5621,
    posts: 3102,
  },
}

export default function CommunityPage({ params }: { params: { id: string } }) {
  const community = communityData[params.id]
  const [showPostForm, setShowPostForm] = useState(false)

  if (!community) {
    return (
      <div className="min-h-screen bg-white text-black font-serif flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Community Not Found</h1>
          <Link href="/communities">
            <Button className="bg-black text-white hover:bg-gray-800">Back to Communities</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Header with Image */}
      <header className="border-b-4 border-black">
        <div className="h-64 overflow-hidden bg-gray-200 relative">
          <img
            src={community.image || "/placeholder.svg"}
            alt={community.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Title Section */}
        <div className="px-6 md:px-12 py-8">
          <div className="max-w-6xl mx-auto">
            <Link href="/communities" className="text-sm font-mono tracking-widest hover:underline mb-4 inline-block">
              ← BACK TO COMMUNITIES
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">{community.name}</h1>
            <div className="flex flex-wrap gap-6 text-sm font-mono">
              <div>
                <span className="text-gray-600">Members:</span>
                <span className="ml-2 font-bold">{community.members.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-gray-600">Posts:</span>
                <span className="ml-2 font-bold">{community.posts.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Intro Section */}
        <section className="mb-12 border-4 border-black p-8 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4 tracking-wide">ABOUT THIS COMMUNITY</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">{community.intro}</p>
          <div className="border-t-2 border-gray-300 pt-6">
            <h3 className="font-bold mb-4 tracking-wide">COMMUNITY GUIDELINES</h3>
            <ul className="space-y-2">
              {community.guidelines.map((guideline: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="font-bold text-black mt-1">•</span>
                  <span className="text-gray-700">{guideline}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Create Post Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold tracking-wide">CONVERSATIONS</h2>
            <Button
              onClick={() => setShowPostForm(!showPostForm)}
              className="bg-black text-white hover:bg-gray-800 font-mono tracking-widest flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              NEW POST
            </Button>
          </div>

          {showPostForm && (
            <div className="border-4 border-black p-8 mb-8 bg-gray-50">
              <h3 className="text-xl font-bold mb-4 tracking-wide">START A CONVERSATION</h3>
              <textarea
                placeholder="Share your thoughts, ask a question, or start a discussion..."
                className="w-full p-4 border-2 border-black mb-4 font-serif text-base focus:outline-none focus:ring-2 focus:ring-black"
                rows={4}
              />
              <div className="flex gap-4">
                <Button className="bg-black text-white hover:bg-gray-800 font-mono tracking-widest">POST</Button>
                <Button
                  onClick={() => setShowPostForm(false)}
                  variant="outline"
                  className="border-2 border-black font-mono tracking-widest"
                >
                  CANCEL
                </Button>
              </div>
            </div>
          )}
        </section>

        {/* Sample Posts */}
        <section className="space-y-6">
          {[1, 2, 3].map((post) => (
            <div key={post} className="border-2 border-black p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg">Community Member {post}</h3>
                  <p className="text-sm text-gray-600 font-mono">2 hours ago</p>
                </div>
              </div>
              <p className="text-gray-800 mb-4 leading-relaxed">
                This is a sample post in the {community.name} community. Members can share thoughts, ask questions, and
                engage in meaningful conversations here.
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-300">
                <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-mono">Reply</span>
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black mt-16 py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-600 mb-2 font-mono">Be respectful. Be kind. Be yourself.</p>
          <p className="text-xs text-gray-500 font-mono">
            © 2025 TALKSY. Creating peaceful spaces for meaningful conversations.
          </p>
        </div>
      </footer>
    </div>
  )
}
