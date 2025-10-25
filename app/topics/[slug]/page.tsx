const TopicPage = ({ params }) => {
  const { slug } = params
  const topic = {
    id: 1,
    title: "Thoughts on Creativity and Expression",
    excerpt: "Random musings on the creative process...",
    date: "2025-01-14",
    hashtags: ["#creativity", "#thoughts", "#expression"],
    likes: 0,
  }

  return (
    <div>
      <h1>{topic.title}</h1>
      <p>{topic.excerpt}</p>
      <p>Date: {topic.date}</p>
      <p>Hashtags: {topic.hashtags.join(", ")}</p>
      <p>Likes: {topic.likes}</p>
    </div>
  )
}

export default TopicPage
