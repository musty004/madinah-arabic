import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function Lesson() {
  const navigate = useNavigate()
  const { bookId, lessonId } = useParams()
  const [quizAnswered, setQuizAnswered] = useState(null)

  const lesson = {
    title: "The Arabic Alphabet",
    arabicTitle: "الحروف الهجائية",
    explanation: "The Arabic alphabet consists of 28 letters. Arabic is written and read from right to left. Every letter in Arabic has up to four different forms depending on its position in a word — at the beginning, in the middle, at the end, or standing alone.",
    arabicText: "الْحُرُوفُ الْهِجَائِيَّةُ أَسَاسُ اللُّغَةِ الْعَرَبِيَّةِ",
    arabicTranslation: "The alphabet is the foundation of the Arabic language.",
    vocabulary: [
      { arabic: "حَرْفٌ", english: "Letter" },
      { arabic: "كَلِمَةٌ", english: "Word" },
      { arabic: "لُغَةٌ", english: "Language" },
      { arabic: "كِتَابَةٌ", english: "Writing" },
      { arabic: "قِرَاءَةٌ", english: "Reading" },
    ],
    quiz: {
      question: "How many letters are in the Arabic alphabet?",
      options: ["24", "26", "28", "30"],
      answer: "28",
    },
  }

  return (
    <div className="min-h-screen bg-green-50">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-green-700">Madinah Arabic</a>
        <button
          onClick={() => navigate(`/lessons/${bookId}`)}
          className="text-gray-600 hover:text-green-700 font-medium"
        >
          Back to Lessons
        </button>
      </nav>

      <div className="max-w-3xl mx-auto px-8 py-12 flex flex-col gap-8">

        {/* Lesson Title */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-900 mb-2">{lesson.title}</h2>
          <p className="text-3xl text-green-700 font-bold" dir="rtl">{lesson.arabicTitle}</p>
        </div>

        {/* Explanation */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-xl font-bold text-green-800 mb-4">Explanation</h3>
          <p className="text-gray-600 leading-relaxed">{lesson.explanation}</p>
        </div>

        {/* Arabic Text */}
        <div className="bg-green-700 rounded-2xl shadow-sm p-8 text-center">
          <h3 className="text-xl font-bold text-green-100 mb-6">Read This</h3>
          <p className="text-4xl text-white font-bold leading-loose" dir="rtl">
            {lesson.arabicText}
          </p>
          <p className="text-green-200 mt-4 text-lg italic">{lesson.arabicTranslation}</p>
        </div>

        {/* Vocabulary */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-xl font-bold text-green-800 mb-6">Vocabulary</h3>
          <div className="flex flex-col gap-3">
            {lesson.vocabulary.map((word, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-green-50 px-6 py-4 rounded-xl"
              >
                <span className="text-gray-700 font-medium">{word.english}</span>
                <span className="text-2xl text-green-800 font-bold" dir="rtl">{word.arabic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quiz */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-xl font-bold text-green-800 mb-2">Quick Quiz</h3>
          <p className="text-gray-600 mb-6">{lesson.quiz.question}</p>
          <div className="grid grid-cols-2 gap-4">
            {lesson.quiz.options.map((option) => (
              <button
                key={option}
                onClick={() => setQuizAnswered(option)}
                className={`py-4 rounded-xl font-bold text-lg border-2 transition-all
                  ${quizAnswered === null
                    ? "border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-700"
                    : option === lesson.quiz.answer
                    ? "border-green-500 bg-green-50 text-green-700"
                    : quizAnswered === option
                    ? "border-red-400 bg-red-50 text-red-600"
                    : "border-gray-200 text-gray-400"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
          {quizAnswered && (
            <div className={`mt-6 p-4 rounded-xl text-center font-bold text-lg ${quizAnswered === lesson.quiz.answer ? "bg-green-100 text-green-700" : "bg-red-50 text-red-600"}`}>
              {quizAnswered === lesson.quiz.answer ? "Correct! Well done." : "Not quite. The correct answer is " + lesson.quiz.answer}
            </div>
          )}
        </div>

        {/* Next Lesson Button */}
        <button
          onClick={() => navigate(`/lessons/${bookId}`)}
          className="w-full bg-green-700 text-white font-bold py-4 rounded-xl text-lg hover:bg-green-800"
        >
          Complete Lesson and Continue
        </button>

      </div>

    </div>
  )
}

export default Lesson