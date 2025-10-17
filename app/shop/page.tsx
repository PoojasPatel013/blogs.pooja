"use client"

import { Button } from "@/components/ui/button"

export default function ShopPage() {
  const books = [
    {
      id: 1,
      title: "Weight of Empty Hands",
      author: "Pooja Patel",
      description:
        "This is the story of a woman's journey to reclaim her light after enduring rejection and fear. It's about learning to accept the scars and the beauty they hold, discovering that the love she thought impossible began within herself. Along the way, she encountered someone extraordinary—a soul who refused to give up on her, who saw her worth when she couldn't. Weight of Empty Hands is a story for anyone who's ever felt lost, but dared to keep searching. It's about the courage to heal, the power of love, and the rare, precious people who help us carry the weight until we learn to let it go.",
      price: "On Demand",
      category: "Novel",
      image: "📖",
      available: true,
      link: "https://buymeacoffee.com/pooja.p",
    },
    {
      id: 2,
      title: "Shadowforged",
      author: "Paige",
      description:
        "A captivating fantasy novel featuring intricate world-building and compelling characters. Shadowforged weaves together magic, mystery, and adventure in a tale that will keep you turning pages late into the night.",
      price: "$14.99",
      category: "Poetry & Fantasy",
      image: "✨",
      available: true,
      link: "https://www.amazon.com",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Header */}
      <header className="border-b-4 border-black py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">MY SHOP</h1>
          <p className="text-sm md:text-base tracking-widest font-mono border-t-2 border-black pt-2">
            BOOKS & WRITTEN WORKS
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Intro Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Explore My Published Works</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            I've written books that explore the depths of human emotion, fantasy worlds, and personal transformation.
            Each book represents my passion for storytelling and connecting with readers. Support my work by purchasing
            a book today.
          </p>
        </section>

        {/* Books Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {books.map((book) => (
            <a key={book.id} href={book.link} target="_blank" rel="noopener noreferrer" className="group">
              <div className="border-4 border-black overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col bg-white">
                {/* Book Cover */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-b-4 border-black">
                  <div className="text-7xl">{book.image}</div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs font-mono text-gray-600 mb-2 uppercase">{book.category}</p>
                  <h3 className="text-2xl font-bold mb-2 group-hover:underline leading-tight">{book.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 font-mono">by {book.author}</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">{book.description}</p>

                  {/* Price and Button */}
                  <div className="border-t-2 border-black pt-4">
                    <p className="text-2xl font-bold mb-4">{book.price}</p>
                    <Button className="w-full bg-black text-white hover:bg-gray-800 font-mono tracking-widest">
                      {book.available ? "BUY NOW" : "COMING SOON"}
                    </Button>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* Why Buy Section */}
        <section className="border-t-4 border-black pt-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 tracking-wide">WHY BUY MY BOOKS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-black p-8">
              <h3 className="text-xl font-bold mb-4">Heartfelt Stories</h3>
              <p className="text-gray-700 leading-relaxed">
                Each book contains deeply personal stories and insights. I've invested significant time and emotion in
                crafting narratives that resonate with readers.
              </p>
            </div>

            <div className="border-2 border-black p-8">
              <h3 className="text-xl font-bold mb-4">Unique Perspectives</h3>
              <p className="text-gray-700 leading-relaxed">
                My books offer unique perspectives on love, transformation, fantasy, and the human experience. You'll
                find stories that touch your heart.
              </p>
            </div>

            <div className="border-2 border-black p-8">
              <h3 className="text-xl font-bold mb-4">Support My Work</h3>
              <p className="text-gray-700 leading-relaxed">
                Purchasing my books directly supports my writing and future projects. Your support helps me continue
                creating meaningful content.
              </p>
            </div>

            <div className="border-2 border-black p-8">
              <h3 className="text-xl font-bold mb-4">Beautifully Crafted</h3>
              <p className="text-gray-700 leading-relaxed">
                Each book is carefully written and edited. I take pride in delivering well-crafted, thoughtfully written
                works.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t-4 border-black pt-12 text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 tracking-wide">READY TO READ?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Visit Buy Me Coffee to purchase my books and support my writing journey.
          </p>
          <a href="https://buymeacoffee.com/pooja.p" target="_blank" rel="noopener noreferrer">
            <Button className="bg-black text-white hover:bg-gray-800 font-mono tracking-widest py-6 text-lg px-8">
              VISIT BUY ME COFFEE
            </Button>
          </a>
        </section>

        {/* Footer */}
        <section className="border-t-4 border-black mt-16 pt-8 text-center">
          <p className="text-sm text-gray-600 mb-4 font-mono">All books available through Buy Me Coffee</p>
          <p className="text-xs text-gray-500 font-mono">© 2025 Pooja Talks. All rights reserved.</p>
        </section>
      </main>
    </div>
  )
}
