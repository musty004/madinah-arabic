import { useNavigate } from "react-router-dom"

function Books() {
  const navigate = useNavigate()

  const books = [
    {
      id: "book-1",
      title: "Madinah Arabic Book 1",
      description: "The foundation of Arabic learning. Covers the alphabet, basic vocabulary, and simple sentence structures.",
      lessons: 22,
      level: "Beginner",
    },
    {
      id: "book-2",
      title: "Madinah Arabic Book 2",
      description: "Builds on Book 1 with more advanced grammar, vocabulary, and longer reading passages.",
      lessons: 20,
      level: "Intermediate",
    },
    {
      id: "book-3",
      title: "Madinah Arabic Book 3",
      description: "The final volume. Covers advanced grammar and prepares you to read classical Arabic texts.",
      lessons: 18,
      level: "Advanced",
    },
    {
      id: "side-book-1",
      title: "Arabic Vocabulary Builder",
      description: "A companion book with extensive vocabulary lists and exercises to strengthen your word bank.",
      lessons: 15,
      level: "All Levels",
    },
    {
      id: "side-book-2",
      title: "Arabic Grammar Guide",
      description: "A detailed grammar reference covering all the rules taught across the three Madinah books.",
      lessons: 12,
      level: "All Levels",
    },
  ]

  return (
    <div className="min-h-screen bg-green-50">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-green-700">Madinah Arabic</a>
        <div className="flex gap-4">
          <a href="/dashboard" className="text-gray-600 hover:text-green-700 font-medium">Dashboard</a>
          <a href="/auth" className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">Log In</a>
        </div>
      </nav>

      {/* Header */}
      <div className="text-center px-8 py-14 bg-green-700">
        <h2 className="text-4xl font-bold text-white mb-4">Choose Your Book</h2>
        <p className="text-green-100 text-lg max-w-xl mx-auto">
          Select a book to begin. We recommend starting with Book 1 if you are a complete beginner.
        </p>
      </div>

      {/* Books Grid */}
      <div className="px-8 py-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-green-900">{book.title}</h3>
              <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                {book.level}
              </span>
            </div>
            <p className="text-gray-600">{book.description}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-gray-400">{book.lessons} Lessons</span>
              <button
                onClick={() => navigate(`/lessons/${book.id}`)}
                className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 font-semibold"
              >
                Start Book
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Books