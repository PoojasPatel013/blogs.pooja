"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useParams } from "next/navigation"

const communityData: Record<string, any> = {
  nature: {
    name: "Nature & Landscapes",
    description:
      "Celebrate natural beauty, wildlife, and outdoor adventures. Share your favorite nature discoveries and connect with environmental enthusiasts. From serene forests to majestic mountains, explore the wonders of our natural world.",
    image: "/nature-art.webp",
    members: 3124,
    posts: 1567,
    topics: ["Wildlife", "Landscapes", "Hiking", "Photography", "Conservation"],
    recentPosts: [
      { id: 1, author: "Forest Wanderer", title: "Autumn Colors in the Deep Woods", likes: 445 },
      { id: 2, author: "Wildlife Lover", title: "Photographing Rare Bird Species", likes: 389 },
      { id: 3, author: "Trail Explorer", title: "Hidden Gems: Secret Nature Spots", likes: 267 },
    ],
  },
  history: {
    name: "Historic Culture",
    description:
      "Discuss ancient civilizations, cultural heritage, and historical discoveries. Learn from the wisdom of the past and share fascinating insights about human history. Explore archaeological findings, cultural traditions, and the stories that shaped our world.",
    image: "/historic.jpg",
    members: 1956,
    posts: 892,
    topics: [
      "Ancient Civilizations",
      "Archaeological Discoveries",
      "Cultural Heritage",
      "Historical Events",
      "Traditions",
    ],
    recentPosts: [
      { id: 1, author: "Dr. History", title: "Ancient Settlements and Their Secrets", likes: 312 },
      { id: 2, author: "Culture Keeper", title: "Preserving Indigenous Traditions", likes: 267 },
      { id: 3, author: "Time Traveler", title: "The Rise and Fall of Great Empires", likes: 198 },
    ],
  },
  art: {
    name: "Art & Aesthetics",
    description:
      "Share and discuss artistic expressions, from traditional paintings to digital art. Celebrate creativity and inspire fellow artists in our community.",
    image: "/modern-art-gallery-colorful-paintings.jpg",
    members: 3124,
    posts: 1567,
    topics: ["Painting", "Digital Art", "Sculpture", "Photography", "Mixed Media"],
    recentPosts: [
      { id: 1, author: "Alex Rivera", title: "My Latest Abstract Series", likes: 445 },
      { id: 2, author: "Nina K.", title: "Digital Art Techniques for Beginners", likes: 389 },
      { id: 3, author: "David S.", title: "Street Art Around the World", likes: 267 },
    ],
  },
  technology: {
    name: "Technology & Innovation",
    description:
      "Explore cutting-edge tech, digital innovation, and the future. Connect with tech enthusiasts and discuss emerging technologies. From AI to blockchain, explore what's next in the digital world.",
    image: "/technology.jpg",
    members: 4201,
    posts: 2341,
    topics: ["AI & Machine Learning", "Web Development", "Cybersecurity", "Cloud Computing", "Startups"],
    recentPosts: [
      { id: 1, author: "Tech Pioneer", title: "The Future of AI in 2025", likes: 567 },
      { id: 2, author: "Code Architect", title: "Building Scalable Digital Solutions", likes: 423 },
      { id: 3, author: "Innovation Lead", title: "Emerging Technologies to Watch", likes: 356 },
    ],
  },
  literature: {
    name: "Literature & Writing",
    description:
      "Discuss books, poetry, and creative writing. Share your favorite reads and connect with fellow book lovers and aspiring writers.",
    image: "/books-library-literature-reading-writing.jpg",
    members: 1678,
    posts: 756,
    topics: ["Fiction", "Poetry", "Non-Fiction", "Writing Tips", "Book Reviews"],
    recentPosts: [
      { id: 1, author: "Bookworm", title: "Best Books of 2024", likes: 234 },
      { id: 2, author: "Poet's Voice", title: "Writing Poetry: A Beginner's Guide", likes: 178 },
      { id: 3, author: "Author Jane", title: "My Journey to Publishing", likes: 145 },
    ],
  },
  music: {
    name: "Music & Sound",
    description:
      "Celebrate all genres of music, from classical to contemporary. Share playlists, discuss artists, and connect with music lovers worldwide.",
    image: "/music-concert-stage-instruments-vinyl-records.jpg",
    members: 2934,
    posts: 1489,
    topics: ["Rock", "Jazz", "Classical", "Electronic", "Hip-Hop"],
    recentPosts: [
      { id: 1, author: "Music Lover", title: "Hidden Gems in Jazz", likes: 289 },
      { id: 2, author: "DJ Mix", title: "Electronic Music Production Guide", likes: 234 },
      { id: 3, author: "Concert Goer", title: "Best Live Performances of 2024", likes: 201 },
    ],
  },
  romanticism: {
    name: "Romanticism & Dreams",
    description:
      "Explore the beauty of romantic landscapes, emotional expression, and artistic wonder. This community celebrates the sublime in nature and the power of imagination. Share your appreciation for landscapes that inspire awe and wonder, discuss romantic art movements, and connect with those who find beauty in emotion and nature.",
    image: "/romanticism.jpg",
    members: 2847,
    posts: 1203,
    topics: ["Landscape Art", "Emotional Expression", "Nature Appreciation", "Sublime Beauty", "Artistic Wonder"],
    recentPosts: [
      { id: 1, author: "Aurora Dreams", title: "The Sublime in Mountain Landscapes", likes: 234 },
      { id: 2, author: "Canvas Soul", title: "Romantic Era Painters and Their Vision", likes: 189 },
      { id: 3, author: "Nature Mystic", title: "Finding Wonder in Misty Valleys", likes: 156 },
    ],
  },
  modern: {
    name: "Modern & Abstract",
    description:
      "Explore contemporary art, abstract expressions, and bold creative visions. Celebrate innovation and artistic experimentation in all forms. Share your modern art discoveries and connect with forward-thinking creatives.",
    image: "/modern.jpg",
    members: 2341,
    posts: 1089,
    topics: ["Abstract Art", "Contemporary Design", "Digital Expression", "Mixed Media", "Experimental Art"],
    recentPosts: [
      { id: 1, author: "Abstract Thinker", title: "Breaking Boundaries with Color and Form", likes: 356 },
      { id: 2, author: "Modern Visionary", title: "The Evolution of Contemporary Art", likes: 298 },
      { id: 3, author: "Creative Rebel", title: "Experimental Techniques in Modern Art", likes: 234 },
    ],
  },
  gaming: {
    name: "Gaming & Play",
    description:
      "Celebrate gaming culture, esports, and interactive entertainment. Share your favorite games and connect with fellow gamers worldwide. From casual to competitive, explore the vibrant world of gaming.",
    image: "/games.jpg",
    members: 2934,
    posts: 1489,
    topics: ["Video Games", "Esports", "Gaming Culture", "Game Design", "Streaming"],
    recentPosts: [
      { id: 1, author: "Gamer Pro", title: "Top Gaming Moments of 2024", likes: 489 },
      { id: 2, author: "Esports Fan", title: "The Rise of Competitive Gaming", likes: 367 },
      { id: 3, author: "Game Designer", title: "What Makes a Great Game Experience", likes: 289 },
    ],
  },
}

export default function CommunityDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const community = communityData[slug]

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
      {/* Header */}
      <header className="border-b-4 border-black py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link href="/communities" className="text-xs tracking-widest font-mono hover:underline mb-4 inline-block">
            ← BACK TO COMMUNITIES
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">{community.name.toUpperCase()}</h1>
          <p className="text-sm md:text-base tracking-widest font-mono border-t-2 border-black pt-2">
            {community.members.toLocaleString()} MEMBERS • {community.posts.toLocaleString()} POSTS
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="border-b-4 border-black">
        <img
          src={community.image || "/placeholder.svg"}
          alt={community.name}
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Description Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 tracking-wide">ABOUT THIS COMMUNITY</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">{community.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border-2 border-black p-6">
              <p className="text-sm font-mono text-gray-600 mb-2">TOTAL MEMBERS</p>
              <p className="text-4xl font-bold">{community.members.toLocaleString()}</p>
            </div>
            <div className="border-2 border-black p-6">
              <p className="text-sm font-mono text-gray-600 mb-2">TOTAL POSTS</p>
              <p className="text-4xl font-bold">{community.posts.toLocaleString()}</p>
            </div>
            <div className="border-2 border-black p-6">
              <p className="text-sm font-mono text-gray-600 mb-2">ACTIVE TOPICS</p>
              <p className="text-4xl font-bold">{community.topics.length}</p>
            </div>
          </div>

          <Button className="w-full md:w-auto bg-black text-white hover:bg-gray-800 font-mono tracking-widest py-6 text-lg">
            JOIN COMMUNITY
          </Button>
        </section>

        {/* Topics Section */}
        <section className="mb-16 border-t-4 border-black pt-12">
          <h2 className="text-3xl font-bold mb-8 tracking-wide">POPULAR TOPICS</h2>
          <div className="flex flex-wrap gap-3">
            {community.topics.map((topic) => (
              <div
                key={topic}
                className="border-2 border-black px-4 py-2 font-mono text-sm hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                {topic}
              </div>
            ))}
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="border-t-4 border-black pt-12">
          <h2 className="text-3xl font-bold mb-8 tracking-wide">RECENT POSTS</h2>
          <div className="space-y-6">
            {community.recentPosts.map((post) => (
              <div key={post.id} className="border-2 border-black p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm font-mono text-gray-600 mb-1">BY {post.author.toUpperCase()}</p>
                    <h3 className="text-2xl font-bold">{post.title}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-mono text-gray-600">LIKES</p>
                    <p className="text-2xl font-bold">{post.likes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <section className="border-t-4 border-black mt-16 pt-8 text-center">
          <p className="text-sm text-gray-600 mb-4 font-mono">Join the conversation</p>
          <p className="text-xs text-gray-500 font-mono">© 2025 TALKSY. All rights reserved.</p>
        </section>
      </main>
    </div>
  )
}
