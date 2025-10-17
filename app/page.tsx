"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Vintage Newspaper Header */}
      <header className="border-b-4 border-black py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xs tracking-widest font-mono">2025</div>
            <div className="text-xs tracking-widest font-mono">EST. 2025</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 tracking-tight">TALKSY</h1>
          <p className="text-center text-sm md:text-base tracking-widest font-mono border-t-2 border-b-2 border-black py-3">
            A CONVERSATION-BASED SOCIAL NETWORK
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Tagline Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Find Your Tribe, Dare to Explore Your Interests
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            A peaceful community where conversations matter. Connect with different people, join topic-based
            discussions, create your own communities, or chat privately. Real. Simple. Focused on conversations.
          </p>
        </section>

        {/* Navigation Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Communities Card */}
          <div className="border-4 border-black p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 tracking-wide">COMMUNITIES</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Explore topic-based communities with unique vibes. Find your people, share interests, and engage in
              meaningful conversations.
            </p>
            <Link href="/communities">
              <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono tracking-widest">
                EXPLORE COMMUNITIES
              </Button>
            </Link>
          </div>

          {/* Feed Card */}
          <div className="border-4 border-black p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 tracking-wide">FEED</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Customize your feed with hashtags and topics you care about. Discover conversations that matter to you.
            </p>
            <Link href="/feed">
              <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono tracking-widest">
                VIEW FEED
              </Button>
            </Link>
          </div>

          {/* Profile Card */}
          <div className="border-4 border-black p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 tracking-wide">PROFILE</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Create your profile, showcase your interests, and manage your presence in the community.
            </p>
            <Link href="/profile">
              <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono tracking-widest">
                MY PROFILE
              </Button>
            </Link>
          </div>

          {/* Create Post Card */}
          <div className="border-4 border-black p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 tracking-wide">CREATE</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Share your thoughts with text, images, or videos. Start conversations that matter.
            </p>
            <Link href="/create-post">
              <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono tracking-widest">
                CREATE POST
              </Button>
            </Link>
          </div>
        </section>

        {/* Community Preview Section */}
        <section className="border-t-4 border-black pt-12">
          <h2 className="text-3xl font-bold mb-8 tracking-wide">FEATURED COMMUNITIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/communities/nature" className="group">
              <div className="border-2 border-black overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200 flex items-center justify-center text-sm font-mono">
                  Nature & Landscapes
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-lg mb-2">Nature</h3>
                  <p className="text-sm text-gray-700">Explore natural beauty and landscapes</p>
                </div>
              </div>
            </Link>

            <Link href="/communities/history" className="group">
              <div className="border-2 border-black overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200 flex items-center justify-center text-sm font-mono">
                  Historic Culture
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-lg mb-2">History</h3>
                  <p className="text-sm text-gray-700">Discuss historical events and cultures</p>
                </div>
              </div>
            </Link>

            <Link href="/communities/romanticism" className="group">
              <div className="border-2 border-black overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200 flex items-center justify-center text-sm font-mono">
                  Romanticism & Dreams
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-lg mb-2">Romanticism</h3>
                  <p className="text-sm text-gray-700">Explore romantic landscapes and wonder</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Footer Info */}
        <section className="border-t-4 border-black mt-16 pt-8 text-center">
          <p className="text-sm text-gray-600 mb-4 font-mono">A peaceful space for meaningful conversations</p>
          <p className="text-xs text-gray-500 font-mono">
            © 2025 TALKSY. All rights reserved. Be kind, be respectful, be yourself.
          </p>
        </section>
      </main>
    </div>
  )
}
