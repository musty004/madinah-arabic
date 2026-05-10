function Home() {
    return (
      <div className="min-h-screen bg-white">
  
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
          <h1 className="text-2xl font-bold text-green-700">Madinah Arabic</h1>
          <div className="flex gap-4">
            <a href="/books" className="text-gray-600 hover:text-green-700 font-medium">Books</a>
            <a href="/auth" className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">Get Started</a>
          </div>
        </nav>
  
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-8 py-24 bg-green-50">
          <h2 className="text-5xl font-bold text-green-900 mb-6">
            Learn Arabic the <span className="text-green-600">Madinah Way</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mb-10">
            The world's most trusted Arabic curriculum. Now fully digital, interactive, and available anywhere in the world.
          </p>
          <div className="flex gap-4">
            <a href="/books" className="bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-800">
              Start Learning Free
            </a>
            <a href="/auth" className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50">
              Sign Up
            </a>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="px-8 py-20 bg-white">
          <h3 className="text-3xl font-bold text-center text-green-900 mb-12">Why Madinah Arabic?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
  
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-green-50">
              <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h4 className="text-xl font-bold text-green-800 mb-2">Structured Lessons</h4>
              <p className="text-gray-600">Follow the proven Madinah curriculum step by step from beginner to advanced.</p>
            </div>
  
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-green-50">
              <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-green-800 mb-2">Mobile Friendly</h4>
              <p className="text-gray-600">Learn anywhere, anytime. The platform works perfectly on any device.</p>
            </div>
  
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-green-50">
              <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-green-800 mb-2">Interactive Exercises</h4>
              <p className="text-gray-600">Practice with quizzes and exercises after every lesson to reinforce learning.</p>
            </div>
  
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-green-50">
              <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-green-800 mb-2">Track Progress</h4>
              <p className="text-gray-600">See how far you have come with your personal dashboard and progress tracking.</p>
            </div>
  
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-green-50">
              <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-green-800 mb-2">AI Powered</h4>
              <p className="text-gray-600">Get instant hints, explanations and examples powered by AI as you learn.</p>
            </div>
  
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-green-50">
              <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-green-800 mb-2">Family Groups</h4>
              <p className="text-gray-600">Learn together with family. Create groups and track everyone's progress.</p>
            </div>
  
          </div>
        </section>
  
        {/* Email Signup Section */}
        <section className="px-8 py-20 bg-green-700">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-10 text-center shadow-lg">
            <h3 className="text-3xl font-bold text-green-900 mb-4">Be the First to Know</h3>
            <p className="text-gray-600 mb-8">
              We are launching soon. Sign up now to get early access and exclusive updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500 text-gray-800"
              />
              <button className="bg-green-700 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-800">
                Notify Me
              </button>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="px-8 py-8 bg-green-900 text-center text-green-300">
          <p className="text-lg font-bold text-white mb-2">Madinah Arabic</p>
          <p className="text-sm">© 2026 Madinah Arabic. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="/books" className="hover:text-white">Books</a>
            <a href="/auth" className="hover:text-white">Sign Up</a>
          </div>
        </footer>
  
      </div>
    )
  }
  
  export default Home