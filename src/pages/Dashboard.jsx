import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()

  const stats = [
    { label: "Lessons Completed", value: "4" },
    { label: "Current Book", value: "Book 1" },
    { label: "Day Streak", value: "3" },
    { label: "Total Points", value: "120" },
  ]

  const recentLessons = [
    { title: "The Arabic Alphabet", bookId: "book-1", lessonId: "lesson-1", completed: true },
    { title: "Greetings and Introductions", bookId: "book-1", lessonId: "lesson-2", completed: true },
    { title: "Nouns and Gender", bookId: "book-1", lessonId: "lesson-3", completed: true },
    { title: "The Definite Article", bookId: "book-1", lessonId: "lesson-4", completed: true },
    { title: "Basic Sentence Structure", bookId: "book-1", lessonId: "lesson-5", completed: false },
  ]

  return (
    <div className="min-h-screen bg-green-50">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-green-700">Madinah Arabic</a>
        <div className="flex gap-4">
          <a href="/books" className="text-gray-600 hover:text-green-700 font-medium">Books</a>
          <a href="/auth" className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">Log Out</a>
        </div>
      </nav>

      {/* Welcome Banner */}
      <div className="bg-green-700 px-8 py-14 text-center">
        <h2 className="text-4xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-green-100 text-lg">Keep going. You are making great progress.</p>
        <button
          onClick={() => navigate("/lesson/book-1/lesson-5")}
          className="mt-6 bg-white text-green-700 font-bold px-8 py-3 rounded-xl hover:bg-green-50"
        >
          Continue Learning
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12 flex flex-col gap-10">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <p className="text-4xl font-bold text-green-700 mb-2">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-green-900">Book 1 Progress</h3>
            <span className="text-green-700 font-bold">4 / 22 Lessons</span>
          </div>
          <div className="w-full bg-green-100 rounded-full h-4">
            <div
              className="bg-green-600 h-4 rounded-full"
              style={{ width: "18%" }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm mt-2">18% complete</p>
        </div>

        {/* Recent Lessons */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-xl font-bold text-green-900 mb-6">Your Lessons</h3>
          <div className="flex flex-col gap-3">
            {recentLessons.map((lesson, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-green-50 px-6 py-4 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${lesson.completed ? "bg-green-600 text-white" : "bg-gray-200 text-gray-500"}`}>
                    {lesson.completed ? "✓" : index + 1}
                  </div>
                  <span className={`font-medium ${lesson.completed ? "text-gray-700" : "text-gray-400"}`}>
                    {lesson.title}
                  </span>
                </div>
                <button
                  onClick={() => navigate(`/lesson/${lesson.bookId}/${lesson.lessonId}`)}
                  className={`text-sm font-semibold px-4 py-2 rounded-lg ${lesson.completed ? "text-green-700 hover:underline" : "bg-green-700 text-white hover:bg-green-800"}`}
                >
                  {lesson.completed ? "Review" : "Start"}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard