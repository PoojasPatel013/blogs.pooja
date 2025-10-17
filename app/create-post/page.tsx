"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, ImageIcon } from "lucide-react"

const communities = [
  { id: 1, name: "Nature & Landscapes" },
  { id: 2, name: "History & Culture" },
  { id: 3, name: "Art & Aesthetics" },
  { id: 4, name: "Technology & Innovation" },
  { id: 5, name: "Literature & Writing" },
  { id: 6, name: "Music & Sound" },
]

export default function CreatePostPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [selectedCommunity, setSelectedCommunity] = useState("")
  const [hashtags, setHashtags] = useState<string[]>([])
  const [hashtagInput, setHashtagInput] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [showPreview, setShowPreview] = useState(false)

  const addHashtag = () => {
    if (hashtagInput.trim() && !hashtags.includes(hashtagInput.trim())) {
      const tag = hashtagInput.trim().startsWith("#") ? hashtagInput.trim() : `#${hashtagInput.trim()}`
      setHashtags([...hashtags, tag])
      setHashtagInput("")
    }
  }

  const removeHashtag = (tag: string) => {
    setHashtags(hashtags.filter((t) => t !== tag))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addHashtag()
    }
  }

  const isFormValid = title.trim() && content.trim() && selectedCommunity

  const selectedCommunityName = communities.find((c) => c.id.toString() === selectedCommunity)?.name

  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Header */}
      <header className="border-b-4 border-black py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-xs tracking-widest font-mono hover:underline mb-4 inline-block">
            ← BACK TO HOME
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">CREATE POST</h1>
          <p className="text-sm md:text-base tracking-widest font-mono border-t-2 border-black pt-2">
            SHARE YOUR THOUGHTS WITH THE COMMUNITY
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <form className="space-y-8">
              {/* Community Selection */}
              <div className="border-4 border-black p-8">
                <label className="block text-sm font-mono text-gray-600 mb-4 tracking-widest">SELECT COMMUNITY</label>
                <select
                  value={selectedCommunity}
                  onChange={(e) => setSelectedCommunity(e.target.value)}
                  className="w-full border-2 border-black p-4 font-serif text-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Choose a community...</option>
                  {communities.map((community) => (
                    <option key={community.id} value={community.id}>
                      {community.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Title Input */}
              <div className="border-4 border-black p-8">
                <label className="block text-sm font-mono text-gray-600 mb-4 tracking-widest">POST TITLE</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your post title..."
                  className="w-full border-2 border-black p-4 font-serif text-2xl focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Content Input */}
              <div className="border-4 border-black p-8">
                <label className="block text-sm font-mono text-gray-600 mb-4 tracking-widest">CONTENT</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your post content here..."
                  rows={8}
                  className="w-full border-2 border-black p-4 font-serif text-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
              </div>

              {/* Image URL Input */}
              <div className="border-4 border-black p-8">
                <label className="block text-sm font-mono text-gray-600 mb-4 tracking-widest">
                  IMAGE URL (OPTIONAL)
                </label>
                <div className="flex gap-3">
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="flex-1 border-2 border-black p-4 font-serif text-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <button
                    type="button"
                    className="border-2 border-black px-6 py-4 hover:bg-gray-100 transition-colors"
                    aria-label="Add image"
                  >
                    <ImageIcon size={20} />
                  </button>
                </div>
              </div>

              {/* Hashtags Input */}
              <div className="border-4 border-black p-8">
                <label className="block text-sm font-mono text-gray-600 mb-4 tracking-widest">ADD HASHTAGS</label>
                <div className="flex gap-3 mb-4">
                  <input
                    type="text"
                    value={hashtagInput}
                    onChange={(e) => setHashtagInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type hashtag and press Enter..."
                    className="flex-1 border-2 border-black p-4 font-mono text-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <button
                    type="button"
                    onClick={addHashtag}
                    className="border-2 border-black px-6 py-4 font-mono hover:bg-black hover:text-white transition-colors"
                  >
                    ADD
                  </button>
                </div>

                {/* Hashtags Display */}
                {hashtags.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {hashtags.map((tag) => (
                      <div
                        key={tag}
                        className="bg-black text-white px-4 py-2 font-mono text-sm flex items-center gap-2"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeHashtag(tag)}
                          className="hover:opacity-70 transition-opacity"
                          aria-label={`Remove ${tag}`}
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex-1 border-2 border-black bg-white text-black hover:bg-gray-100 font-mono tracking-widest py-6 text-lg"
                >
                  {showPreview ? "HIDE PREVIEW" : "SHOW PREVIEW"}
                </Button>
                <Button
                  type="button"
                  disabled={!isFormValid}
                  className="flex-1 bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed font-mono tracking-widest py-6 text-lg"
                >
                  PUBLISH POST
                </Button>
              </div>
            </form>
          </div>

          {/* Preview Section */}
          <div className="lg:col-span-1">
            {showPreview && (
              <div className="sticky top-8 border-4 border-black p-8">
                <h2 className="text-xl font-bold mb-6 tracking-wide">PREVIEW</h2>

                {selectedCommunityName && (
                  <p className="text-xs font-mono text-gray-600 mb-2">{selectedCommunityName.toUpperCase()}</p>
                )}

                {title && <h3 className="text-2xl font-bold mb-4 tracking-wide">{title}</h3>}

                {imageUrl && (
                  <div className="mb-4 border-2 border-black overflow-hidden">
                    <img src={imageUrl || "/placeholder.svg"} alt="Preview" className="w-full h-40 object-cover" />
                  </div>
                )}

                {content && <p className="text-gray-700 mb-6 leading-relaxed text-sm">{content}</p>}

                {hashtags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {hashtags.map((tag) => (
                      <span key={tag} className="text-xs font-mono bg-gray-200 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="border-t-2 border-black pt-4 text-xs font-mono text-gray-600">
                  <p>Ready to publish</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <section className="border-t-4 border-black mt-16 pt-8 text-center">
          <p className="text-sm text-gray-600 mb-4 font-mono">Share your thoughts with the community</p>
          <p className="text-xs text-gray-500 font-mono">© 2025 TALKSY. All rights reserved.</p>
        </section>
      </main>
    </div>
  )
}
