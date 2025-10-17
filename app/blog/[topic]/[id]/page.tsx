"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useParams } from "next/navigation"

const blogContent: Record<string, Record<string, any>> = {
  life: {
    "1": {
      title: "Finding Purpose in Everyday Moments",
      date: "2025-01-15",
      topic: "Life & Experiences",
      hashtags: ["#life", "#growth", "#reflection"],
      likes: 234,
      content: `
        <h2>Finding Purpose in Everyday Moments</h2>
        <p>Life often feels like we're rushing from one moment to the next, constantly chasing the next milestone or achievement. But what if the real magic lies in the everyday moments we often overlook?</p>
        
        <h3>The Power of Presence</h3>
        <p>When we slow down and truly pay attention to the present moment, we begin to notice things we've been missing. A conversation with a friend, the way sunlight filters through leaves, the taste of your morning coffee—these simple moments hold profound meaning.</p>
        
        <h3>Creating Intentional Moments</h3>
        <p>Purpose isn't always about grand gestures or life-changing decisions. Sometimes it's about being intentional with how we spend our time and who we spend it with. When we approach each day with awareness and gratitude, we create moments that matter.</p>
        
        <h3>Reflection and Growth</h3>
        <p>Taking time to reflect on our experiences helps us understand what truly matters to us. Through reflection, we can identify patterns, learn from our experiences, and grow as individuals.</p>
        
        <p>The journey to finding purpose begins with a single moment of awareness. What will you notice today?</p>
      `,
    },
  },
  spirituality: {
    "1": {
      title: "The Bhagavad Gita: Timeless Wisdom for Modern Times",
      date: "2025-01-13",
      topic: "Spirituality",
      hashtags: ["#hinduism", "#spirituality", "#philosophy"],
      likes: 289,
      content: `
        <h2>The Bhagavad Gita: Timeless Wisdom for Modern Times</h2>
        <p>The Bhagavad Gita, a 700-verse Hindu scripture, contains profound wisdom that remains relevant thousands of years after it was written. Its teachings on duty, action, and the nature of reality offer guidance for navigating modern life's challenges.</p>
        
        <h3>The Concept of Dharma</h3>
        <p>One of the central teachings of the Gita is the concept of dharma—one's duty or righteous path. In today's world, this translates to understanding our responsibilities and living in alignment with our values.</p>
        
        <h3>Action Without Attachment</h3>
        <p>The Gita teaches the principle of performing our duties without being attached to the results. This ancient wisdom speaks directly to modern anxiety about outcomes and success, offering a path to inner peace.</p>
        
        <h3>The Nature of the Self</h3>
        <p>The Gita explores the nature of consciousness and the eternal self, concepts that modern psychology and neuroscience are only beginning to understand.</p>
        
        <p>By studying the Gita, we can find answers to life's deepest questions and discover a path to inner peace and fulfillment.</p>
      `,
    },
  },
  research: {
    "1": {
      title: "Product Analysis Framework: A Comprehensive Guide",
      date: "2025-01-16",
      topic: "Research & Analysis",
      hashtags: ["#productanalysis", "#research", "#business"],
      likes: 398,
      content: `
        <h2>Product Analysis Framework: A Comprehensive Guide</h2>
        <p>Effective product analysis is crucial for understanding market opportunities and making informed business decisions. This guide provides a comprehensive framework for analyzing products systematically.</p>
        
        <h3>Understanding the Market Context</h3>
        <p>Before analyzing a product, it's essential to understand the broader market context. What are the market trends? Who are the key players? What are the customer needs?</p>
        
        <h3>Product Features and Benefits</h3>
        <p>Analyze the product's core features and how they translate into benefits for users. What problems does it solve? How does it compare to competitors?</p>
        
        <h3>User Experience and Design</h3>
        <p>The user experience is critical to a product's success. Evaluate the design, usability, and overall user satisfaction.</p>
        
        <h3>Business Model and Monetization</h3>
        <p>Understand how the product generates revenue and whether the business model is sustainable.</p>
        
        <p>By following this framework, you can conduct thorough product analysis that informs strategic decisions.</p>
      `,
    },
  },
  technology: {
    "1": {
      title: "The Evolution of Large Language Models in 2025",
      date: "2025-01-16",
      topic: "Technology & AI",
      hashtags: ["#AI", "#LLM", "#technology"],
      likes: 456,
      content: `
        <h2>The Evolution of Large Language Models in 2025</h2>
        <p>Large Language Models have undergone remarkable evolution in recent years. As we move into 2025, we're seeing new capabilities and applications emerge that were unimaginable just a few years ago.</p>
        
        <h3>Improved Accuracy and Reasoning</h3>
        <p>Recent LLMs demonstrate significantly improved accuracy in reasoning tasks and factual knowledge. The gap between human and machine performance continues to narrow.</p>
        
        <h3>Multimodal Capabilities</h3>
        <p>Modern LLMs are increasingly capable of processing and generating multiple types of content—text, images, audio, and video—opening new possibilities for applications.</p>
        
        <h3>Efficiency and Accessibility</h3>
        <p>As models become more efficient, they're becoming more accessible to smaller organizations and individual developers, democratizing AI technology.</p>
        
        <h3>Ethical Considerations</h3>
        <p>With increased capabilities come increased responsibilities. The field is grappling with important questions about bias, fairness, and the societal impact of AI.</p>
        
        <p>The evolution of LLMs continues to reshape how we work, create, and solve problems.</p>
      `,
    },
  },
  academia: {
    "1": {
      title: "Transforming Development Projects into Research Papers",
      date: "2025-01-17",
      topic: "Academia",
      hashtags: ["#academia", "#research", "#writing"],
      likes: 567,
      content: `
        <h2>Transforming Development Projects into Research Papers</h2>
        <p>Many developers have created innovative software projects but struggle to translate them into academic research papers. This comprehensive guide walks you through the process of transforming your development work into a publishable research contribution.</p>
        
        <h3>From Builder to Scientist</h3>
        <p>The first step is shifting your mindset from that of a builder (focused on creating working software) to that of a scientist (focused on producing and validating new knowledge). Your software is not the research—it's the evidence for your research claim.</p>
        
        <h3>Identifying Your Research Contribution</h3>
        <p>What is the novel insight your project demonstrates? Is it a new algorithm, a different architectural pattern, or a new understanding of a development process? Clearly articulating this is crucial.</p>
        
        <h3>Structuring Your Paper</h3>
        <p>A research paper follows a specific structure: Introduction, Related Work, Methodology, Evaluation, Results, Discussion, and Conclusion. Each section serves a distinct purpose in building your argument.</p>
        
        <h3>Rigorous Evaluation</h3>
        <p>The evaluation is the scientific bedrock of your paper. Design experiments that generate evidence supporting your claims. Compare against appropriate baselines and report results objectively.</p>
        
        <h3>Publication Strategy</h3>
        <p>Choose the right venue for your work. Top-tier conferences like ICSE, FSE, and ASE are the primary venues for software engineering research. Understand the peer-review process and be prepared to respond constructively to feedback.</p>
        
        <p>By following these principles, you can successfully bridge the gap between building innovative software and producing impactful, peer-reviewed research.</p>
      `,
    },
  },
}

export default function BlogDetailPage() {
  const params = useParams()
  const topic = params?.topic as string
  const id = params?.id as string

  const blog = blogContent[topic]?.[id]

  if (!blog) {
    return (
      <div className="min-h-screen bg-white text-black font-serif flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link href="/topics">
            <Button className="bg-black text-white hover:bg-gray-800">Back to Topics</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Header */}
      <header className="border-b-4 border-black py-8 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/topics/${topic}`}
            className="text-xs tracking-widest font-mono hover:underline mb-4 inline-block"
          >
            ← BACK TO {blog.topic.toUpperCase()}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">{blog.title}</h1>
          <div className="flex items-center justify-between border-t-2 border-black pt-4">
            <div>
              <p className="text-sm font-mono text-gray-600">{blog.date}</p>
              <p className="text-xs font-mono text-gray-500 mt-1">{blog.topic}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-mono text-gray-600">LIKES</p>
              <p className="text-2xl font-bold">{blog.likes}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        {/* Blog Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div
            className="text-gray-800 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{
              __html: blog.content
                .replace(/<h2>/g, '<h2 class="text-3xl font-bold mt-8 mb-4 tracking-wide">')
                .replace(/<h3>/g, '<h3 class="text-2xl font-bold mt-6 mb-3 tracking-wide">')
                .replace(/<p>/g, '<p class="text-lg leading-relaxed mb-4">'),
            }}
          />
        </article>

        {/* Hashtags */}
        <section className="border-t-2 border-black pt-8 mb-8">
          <div className="flex flex-wrap gap-2">
            {blog.hashtags.map((tag) => (
              <span
                key={tag}
                className="text-sm font-mono bg-gray-100 border border-gray-300 px-4 py-2 hover:bg-black hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <section className="border-t-2 border-black pt-8 mb-12">
          <div className="flex gap-4">
            <Button className="flex-1 bg-black text-white hover:bg-gray-800 font-mono text-sm py-6">
              LIKE THIS POST
            </Button>
            <a href="https://buymeacoffee.com/pooja.p" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full bg-white text-black border-2 border-black hover:bg-gray-100 font-mono text-sm py-6">
                GIFT FLOWERS
              </Button>
            </a>
          </div>
        </section>

        {/* Related Posts */}
        <section className="border-t-4 border-black pt-12">
          <h2 className="text-2xl font-bold mb-8 tracking-wide">EXPLORE MORE</h2>
          <Link href={`/topics/${topic}`}>
            <Button className="bg-black text-white hover:bg-gray-800 font-mono tracking-widest">
              BACK TO {blog.topic.toUpperCase()}
            </Button>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black mt-16 py-8 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-600 mb-2 font-mono">Enjoyed this post? Share your thoughts and ideas</p>
          <p className="text-xs text-gray-500 font-mono">© 2025 Pooja Talks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
