"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

const conversations = [
  {
    id: 1,
    username: "Sarah M.",
    avatar: "/avatar-sarah.jpg",
    lastMessage: "That's a great idea! Let's collaborate on the project.",
    timestamp: "2 hours ago",
    unread: true,
    slug: "sarah-m",
  },
  {
    id: 2,
    username: "James K.",
    avatar: "/avatar-james.jpg",
    lastMessage: "Thanks for the feedback on my post!",
    timestamp: "5 hours ago",
    unread: false,
    slug: "james-k",
  },
  {
    id: 3,
    username: "Emma L.",
    avatar: "/avatar-emma.jpg",
    lastMessage: "I loved your latest artwork. Do you have prints available?",
    timestamp: "1 day ago",
    unread: false,
    slug: "emma-l",
  },
  {
    id: 4,
    username: "Dr. Robert H.",
    avatar: "/avatar-robert.jpg",
    lastMessage: "Would you like to discuss the historical context further?",
    timestamp: "2 days ago",
    unread: false,
    slug: "robert-h",
  },
  {
    id: 5,
    username: "Nina K.",
    avatar: "/avatar-nina.jpg",
    lastMessage: "Your digital art tutorial was incredibly helpful!",
    timestamp: "3 days ago",
    unread: false,
    slug: "nina-k",
  },
]

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Header */}
      <header className="border-b-4 border-black py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-xs tracking-widest font-mono hover:underline mb-4 inline-block">
            ← BACK TO HOME
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">MESSAGES</h1>
          <p className="text-sm md:text-base tracking-widest font-mono border-t-2 border-black pt-2">
            YOUR PRIVATE CONVERSATIONS
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        {/* Intro Section */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Connect privately with community members. Share ideas, ask questions, and build meaningful relationships one
            conversation at a time.
          </p>
        </section>

        {/* Conversations List */}
        <section>
          <h2 className="text-2xl font-bold mb-8 tracking-wide">CONVERSATIONS</h2>

          {conversations.length === 0 ? (
            <div className="border-4 border-black p-12 text-center">
              <MessageCircle size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-lg text-gray-700 mb-4">No conversations yet</p>
              <p className="text-sm text-gray-600">Start a conversation by visiting a user's profile</p>
            </div>
          ) : (
            <div className="space-y-4">
              {conversations.map((conversation) => (
                <Link key={conversation.id} href={`/messages/${conversation.slug}`}>
                  <div
                    className={`border-4 border-black p-6 hover:shadow-lg transition-shadow cursor-pointer ${
                      conversation.unread ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <img
                        src={conversation.avatar || "/placeholder.svg"}
                        alt={conversation.username}
                        className="w-16 h-16 border-2 border-black object-cover flex-shrink-0"
                      />

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold tracking-wide">{conversation.username}</h3>
                          <p className="text-xs font-mono text-gray-600 whitespace-nowrap ml-4">
                            {conversation.timestamp}
                          </p>
                        </div>
                        <p className="text-gray-700 truncate">{conversation.lastMessage}</p>
                      </div>

                      {/* Unread Indicator */}
                      {conversation.unread && <div className="w-3 h-3 bg-black rounded-full flex-shrink-0 mt-2"></div>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <section className="border-t-4 border-black mt-16 pt-8 text-center">
          <p className="text-sm text-gray-600 mb-4 font-mono">Keep conversations respectful and meaningful</p>
          <p className="text-xs text-gray-500 font-mono">© 2025 TALKSY. All rights reserved.</p>
        </section>
      </main>
    </div>
  )
}
