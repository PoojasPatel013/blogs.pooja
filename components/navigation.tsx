"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/")
  }

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/communities", label: "COMMUNITIES" },
    { href: "/feed", label: "FEED" },
    { href: "/create-post", label: "CREATE" },
    { href: "/profile", label: "PROFILE" },
    { href: "/messages", label: "MESSAGES" },
  ]

  return (
    <nav className="border-b-4 border-black bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-2xl tracking-widest font-serif hover:opacity-70 transition-opacity">
            POOJA's TALKS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-mono tracking-widest transition-all ${
                  isActive(item.href)
                    ? "border-b-2 border-black pb-1 font-bold"
                    : "hover:border-b-2 hover:border-black pb-1"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-black py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-sm font-mono tracking-widest py-2 px-4 border-l-4 transition-all ${
                  isActive(item.href)
                    ? "border-black bg-gray-100 font-bold"
                    : "border-transparent hover:border-black hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
