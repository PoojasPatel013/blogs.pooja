"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Edit2, MapPin, Calendar } from "lucide-react"

const userProfile = {
  id: 1,
  name: "Alex Rivera",
  username: "@alexrivera",
  bio: "Artist, designer, and creative thinker. Passionate about exploring the intersection of art and technology.",
  avatar: "/profile-avatar-artist.jpg",
  coverImage: "/profile-cover-art-creative.jpg",
  location: "San Francisco, CA",
  joinDate: "Joined March 2024",
  followers: 1234,
  following: 567,
  posts: 89,
  communities: [
    { id: 1, name: "Art & Aesthetics", role: "Member" },
    { id: 2, name: "Technology & Innovation", role: "Member" },
    { id: 3, name: "Nature & Landscapes", role: "Moderator" },
  ],
  recentPosts: [
    {
      id: 1,
      title: "My Latest Abstract Series",
      content:
        "Excited to share my new abstract painting series. Each piece explores the intersection of color and emotion.",
      likes: 445,
      comments: 67,
      timestamp: "2 days ago",
    },
    {
      id: 2,
      title: "Digital Art Techniques for Beginners",
      content: "Starting a series on digital art fundamentals. Today we cover brushes, layers, and color theory.",
      likes: 389,
      comments: 124,
      timestamp: "1 week ago",
    },
    {
      id: 3,
      title: "Street Art Around the World",
      content: "Exploring street art from different cities. The creativity and diversity of urban art is inspiring.",
      likes: 267,
      comments: 89,
      timestamp: "2 weeks ago",
    },
  ],
}

export default function ProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Header */}
      <header className="border-b-4 border-black py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-xs tracking-widest font-mono hover:underline mb-4 inline-block">
            ← BACK TO HOME
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">PROFILE</h1>
          <p className="text-sm md:text-base tracking-widest font-mono border-t-2 border-black pt-2">
            YOUR COMMUNITY PRESENCE
          </p>
        </div>
      </header>

      {/* Cover Image */}
      <div className="border-b-4 border-black">
        <img
          src={userProfile.coverImage || "/placeholder.svg"}
          alt="Profile cover"
          className="w-full h-48 md:h-64 object-cover"
        />
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Profile Header Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img
                src={userProfile.avatar || "/placeholder.svg"}
                alt={userProfile.name}
                className="w-32 h-32 md:w-40 md:h-40 border-4 border-black object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">{userProfile.name}</h2>
                  <p className="text-lg font-mono text-gray-600 mb-4">{userProfile.username}</p>
                </div>
                <div className="flex gap-3">
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-black text-white hover:bg-gray-800 font-mono tracking-widest flex items-center gap-2"
                  >
                    <Edit2 size={16} />
                    EDIT
                  </Button>
                  <Button
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`font-mono tracking-widest ${
                      isFollowing
                        ? "bg-white text-black border-2 border-black hover:bg-gray-100"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    {isFollowing ? "FOLLOWING" : "FOLLOW"}
                  </Button>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{userProfile.bio}</p>

              {/* Location and Join Date */}
              <div className="flex flex-wrap gap-6 text-sm font-mono text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {userProfile.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {userProfile.joinDate}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 border-t-4 border-black pt-8">
            <div className="border-2 border-black p-6 text-center">
              <p className="text-sm font-mono text-gray-600 mb-2">FOLLOWERS</p>
              <p className="text-4xl font-bold">{userProfile.followers.toLocaleString()}</p>
            </div>
            <div className="border-2 border-black p-6 text-center">
              <p className="text-sm font-mono text-gray-600 mb-2">FOLLOWING</p>
              <p className="text-4xl font-bold">{userProfile.following.toLocaleString()}</p>
            </div>
            <div className="border-2 border-black p-6 text-center">
              <p className="text-sm font-mono text-gray-600 mb-2">POSTS</p>
              <p className="text-4xl font-bold">{userProfile.posts}</p>
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section className="mb-16 border-t-4 border-black pt-12">
          <h2 className="text-3xl font-bold mb-8 tracking-wide">COMMUNITIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userProfile.communities.map((community) => (
              <Link key={community.id} href={`/communities/${community.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="border-4 border-black p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <h3 className="text-xl font-bold mb-3 tracking-wide">{community.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono text-gray-600">{community.role}</span>
                    <span className="text-xs font-mono bg-black text-white px-3 py-1">MEMBER</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="border-t-4 border-black pt-12">
          <h2 className="text-3xl font-bold mb-8 tracking-wide">RECENT POSTS</h2>
          <div className="space-y-6">
            {userProfile.recentPosts.map((post) => (
              <div key={post.id} className="border-4 border-black p-8 hover:shadow-lg transition-shadow">
                {/* Post Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-wide mb-2">{post.title}</h3>
                    <p className="text-xs font-mono text-gray-600">{post.timestamp}</p>
                  </div>
                </div>

                {/* Post Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">{post.content}</p>

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
                  <Button className="bg-black text-white hover:bg-gray-800 font-mono tracking-widest">VIEW POST</Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <section className="border-t-4 border-black mt-16 pt-8 text-center">
          <p className="text-sm text-gray-600 mb-4 font-mono">Your profile is your community presence</p>
          <p className="text-xs text-gray-500 font-mono">© 2025 TALKSY. All rights reserved.</p>
        </section>
      </main>
    </div>
  )
}
