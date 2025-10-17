"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useParams } from "next/navigation"
import { Send } from "lucide-react"

const conversationData: Record<string, any> = {
  "sarah-m": {
    username: "Sarah M.",
    avatar: "/avatar-sarah.jpg",
    status: "Online",
    messages: [
      {
        id: 1,
        sender: "Sarah M.",
        content: "Hey! I loved your latest post about digital art techniques.",
        timestamp: "10:30 AM",
        isOwn: false,
      },
      {
        id: 2,
        sender: "You",
        content: "Thanks so much! I'm planning to do a series on this topic.",
        timestamp: "10:35 AM",
        isOwn: true,
      },
      {
        id: 3,
        sender: "Sarah M.",
        content: "That's a great idea! Let's collaborate on the project.",
        timestamp: "10:40 AM",
        isOwn: false,
      },
      {
        id: 4,
        sender: "You",
        content: "I'd love to! What did you have in mind?",
        timestamp: "10:42 AM",
        isOwn: true,
      },
    ],
  },
  "james-k": {
    username: "James K.",
    avatar: "/avatar-james.jpg",
    status: "Offline",
    messages: [
      {
        id: 1,
        sender: "James K.",
        content: "Your post about Next.js was really informative!",
        timestamp: "Yesterday 3:20 PM",
        isOwn: false,
      },
      {
        id: 2,
        sender: "You",
        content: "Thanks for the feedback on my post!",
        timestamp: "Yesterday 3:25 PM",
        isOwn: true,
      },
    ],
  },
  "emma-l": {
    username: "Emma L.",
    avatar: "/avatar-emma.jpg",
    status: "Online",
    messages: [
      {
        id: 1,
        sender: "Emma L.",
        content: "I loved your latest artwork. Do you have prints available?",
        timestamp: "2 days ago",
        isOwn: false,
      },
    ],
  },
}

export default function ConversationPage() {
  const params = useParams()
  const slug = params?.slug as string
  const conversation = conversationData[slug]
  const [messageInput, setMessageInput] = useState("")

  if (!conversation) {
    return (
      <div className="min-h-screen bg-white text-black font-serif flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Conversation Not Found</h1>
          <Link href="/messages">
            <Button className="bg-black text-white hover:bg-gray-800">Back to Messages</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (messageInput.trim()) {
      setMessageInput("")
    }
  }

  return (
    <div className="min-h-screen bg-white text-black font-serif flex flex-col">
      {/* Header */}
      <header className="border-b-4 border-black py-6 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/messages" className="text-xs tracking-widest font-mono hover:underline mb-4 inline-block">
            ← BACK TO MESSAGES
          </Link>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={conversation.avatar || "/placeholder.svg"}
                alt={conversation.username}
                className="w-12 h-12 border-2 border-black object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold tracking-tight">{conversation.username}</h1>
                <p className="text-xs font-mono text-gray-600">{conversation.status}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Messages Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 md:px-12 py-8 overflow-y-auto">
        <div className="space-y-6">
          {conversation.messages.map((message: any) => (
            <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs lg:max-w-md border-4 border-black p-6 ${
                  message.isOwn ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                <p className="text-sm font-mono mb-3 opacity-75">{message.sender}</p>
                <p className="mb-3 leading-relaxed">{message.content}</p>
                <p className="text-xs font-mono opacity-60">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Message Input */}
      <div className="border-t-4 border-black bg-white">
        <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto px-6 md:px-12 py-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border-2 border-black p-4 font-serif text-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="border-2 border-black bg-black text-white hover:bg-gray-800 px-6 py-4 transition-colors flex items-center gap-2"
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
