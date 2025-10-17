"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function IdeasPage() {
  const [selectedTopic, setSelectedTopic] = useState("technology")
  const [ideaType, setIdeaType] = useState("suggestion")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "technology",
    type: "suggestion",
    title: "",
    description: "",
    hashtags: "",
  })

  const topics = [
    { value: "life", label: "Life & Experiences" },
    { value: "romance", label: "Romance & Relationships" },
    { value: "history", label: "History & Culture" },
    { value: "technology", label: "Technology & AI" },
    { value: "hinduism", label: "Hinduism & Spirituality" },
    { value: "archaeology", label: "Archaeology & Geography" },
    { value: "nature", label: "Climate & Nature" },
    { value: "research", label: "Research & Analysis" },
  ]

  const ideaTypes = [
    { value: "suggestion", label: "Blog Topic Suggestion" },
    { value: "idea", label: "New Idea or Insight" },
    { value: "feedback", label: "Feedback on Existing Post" },
    { value: "collaboration", label: "Collaboration Opportunity" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your idea! I'll review it soon.")
    setFormData({
      name: "",
      email: "",
      topic: "technology",
      type: "suggestion",
      title: "",
      description: "",
      hashtags: "",
    })
  }

  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Header */}
      <header className="border-b-4 border-black py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">LEAVE IDEAS</h1>
          <p className="text-sm md:text-base tracking-widest font-mono border-t-2 border-black pt-2">
            SHARE YOUR THOUGHTS & SUGGESTIONS
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Intro Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Share Your Ideas</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Have a blog topic suggestion? Want to share an insight? Found an error in my post? Or interested in
            collaboration? I'd love to hear from you. Your ideas help shape my future content.
          </p>
        </section>

        {/* Form Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="border-4 border-black p-8">
              <h3 className="text-2xl font-bold mb-8 tracking-wide">SUBMIT YOUR IDEA</h3>

              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-mono font-bold mb-2">YOUR NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-black p-3 font-serif focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono font-bold mb-2">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-black p-3 font-serif focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Topic and Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-mono font-bold mb-2">TOPIC</label>
                  <select
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full border-2 border-black p-3 font-serif focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    {topics.map((topic) => (
                      <option key={topic.value} value={topic.value}>
                        {topic.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-mono font-bold mb-2">IDEA TYPE</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full border-2 border-black p-3 font-serif focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    {ideaTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Title */}
              <div className="mb-6">
                <label className="block text-sm font-mono font-bold mb-2">IDEA TITLE</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-black p-3 font-serif focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Brief title of your idea"
                />
              </div>

              {/* Description */}
              <div className="mb-6">
                <label className="block text-sm font-mono font-bold mb-2">DESCRIPTION</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border-2 border-black p-3 font-serif focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  placeholder="Tell me more about your idea, suggestion, or feedback..."
                />
              </div>

              {/* Hashtags */}
              <div className="mb-8">
                <label className="block text-sm font-mono font-bold mb-2">HASHTAGS (OPTIONAL)</label>
                <input
                  type="text"
                  name="hashtags"
                  value={formData.hashtags}
                  onChange={handleChange}
                  className="w-full border-2 border-black p-3 font-serif focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="#hashtag1 #hashtag2 #hashtag3"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800 font-mono tracking-widest py-6 text-lg"
              >
                SUBMIT IDEA
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Guidelines */}
            <div className="border-4 border-black p-6">
              <h3 className="text-xl font-bold mb-4 tracking-wide">GUIDELINES</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="font-bold mr-3">•</span>
                  <span>Be respectful and constructive</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">•</span>
                  <span>Provide specific details and examples</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">•</span>
                  <span>Include relevant hashtags</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">•</span>
                  <span>Keep it focused and clear</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">•</span>
                  <span>No spam or promotional content</span>
                </li>
              </ul>
            </div>

            {/* What Happens Next */}
            <div className="border-4 border-black p-6">
              <h3 className="text-xl font-bold mb-4 tracking-wide">WHAT HAPPENS NEXT</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="font-bold mr-3">1.</span>
                  <span>I review your submission</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">2.</span>
                  <span>I may reach out for clarification</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">3.</span>
                  <span>Your idea influences future content</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">4.</span>
                  <span>I credit you if your idea is featured</span>
                </li>
              </ol>
            </div>

            {/* Support */}
            <div className="border-4 border-black p-6 bg-gray-50">
              <h3 className="text-xl font-bold mb-4 tracking-wide">LOVE MY CONTENT?</h3>
              <p className="text-sm mb-4 leading-relaxed">
                Support my research and writing by buying me coffee or sending flowers.
              </p>
              <a href="https://buymeacoffee.com/pooja.p" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono text-sm">SUPPORT ME</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="border-t-4 border-black pt-8 text-center">
          <p className="text-sm text-gray-600 mb-4 font-mono">Thank you for your ideas and engagement</p>
          <p className="text-xs text-gray-500 font-mono">© 2025 Pooja Talks. All rights reserved.</p>
        </section>
      </main>
    </div>
  )
}
