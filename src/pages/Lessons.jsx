import { useNavigate, useParams } from "react-router-dom"

function Lessons() {
  const navigate = useNavigate()
  const { bookId } = useParams()

  const bookTitles = {
    "book-1": "Madinah Arabic Book 1",
    "book-2": "Madinah Arabic Book 2",
    "book-3": "Madinah Arabic Book 3",
    "side-book-1": "Arabic Vocabulary Builder",
    "side-book-2": "Arabic Grammar Guide",
  }

  const lessons = [
    { id: "lesson-1", title: "The Arabic Alphabet", description: "Learn the 28 letters of the Arabic alphabet and how they are written.", duration: "15 min", completed: false },
    { id: "lesson-2", title: "Greetings and Introductions", description: "Learn how to greet people and introduce yourself in Arabic.", duration: "20 min", completed: false },
    { id: "lesson-3", title: "Nouns and Gender", description: "Understand masculine and feminine nouns in Arabic.", duration: "25 min", completed: false },
    { id: "lesson-4", title: "The Definite Article", description: "Learn how to use Al to make nouns definite in Arabic.", duration: "20 min", completed: false },
    { id: "lesson-5", title: "Basic Sentence Structure", description: "Learn how to form simple sentences in Arabic.", duration: "30 min", completed: false },
    { id: "lesson-6", title: "Numbers 1 to 10", description: "Learn to count from one to ten in Arabic.", duration: "15 min", completed: false },
    { id: "lesson-7", title: "Colors and Descriptions", description: "Learn common adjectives and how to describe things in Arabic.", duration: "25 min", completed: false },
    { id: "lesson-8", title: "Family Members", description: "Learn the Arabic words for family members and relationships.", duration: "20 min", completed: false },
  ]

  return (
    <div className="min-h-screen bg-green-50">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-green-700">Madinah Arabic</a>
        <div className="flex gap-4">
          <a href="/books" className="text-gray-600 hover:text-green-700 font-medium">Books</a>
          <a href="/auth" className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">Log In</a>
        </div>
      </nav>

      {/* Header */}
      <div className="text-center px-8 py-14 bg-green-700">
        <h2 className="text-4xl font-bold text-white mb-4">
          {bookTitles[bookId] || "Lessons"}
        </h2>
        <p className="text-green-100 text-lg max-w-xl mx-auto">
          Work through each lesson in order for the best learning experience.
        </p>
      </div>

      {/* Lessons List */}
      <div className="px-8 py-12 max-w-3xl mx-auto flex flex-col gap-4">
        {lessons.map((lesson, index) => (
          <div
            key={lesson.id}
            className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-100 text-green-700 font-bold rounded-full flex items-center justify-center">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-900">{lesson.title}</h3>
                <p className="text-gray-500 text-sm">{lesson.description}</p>
                <span className="text-xs text-gray-400 mt-1 block">{lesson.duration}</span>
              </div>
            </div>
            <button
              onClick={() => navigate(`/lesson/${bookId}/${lesson.id}`)}
              className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 font-semibold text-sm ml-4"
            >
              Start
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Lessons