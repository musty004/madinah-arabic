import { useState } from "react"

function Auth() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <a href="/" className="text-2xl font-bold text-green-700">Madinah Arabic</a>
      </nav>

      {/* Auth Card */}
      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">

          {/* Title */}
          <h2 className="text-3xl font-bold text-green-900 mb-2 text-center">
            {isLogin ? "Welcome Back" : "Create Your Account"}
          </h2>
          <p className="text-gray-500 text-center mb-8">
            {isLogin ? "Log in to continue learning" : "Start your Arabic learning journey today"}
          </p>

          {/* Form */}
          <div className="flex flex-col gap-4">

            {!isLogin && (
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                />
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
              />
            </div>

            <button className="w-full bg-green-700 text-white font-bold py-3 rounded-lg hover:bg-green-800 mt-2">
              {isLogin ? "Log In" : "Create Account"}
            </button>

          </div>

          {/* Switch between login and signup */}
          <p className="text-center text-gray-500 mt-6 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-green-700 font-semibold ml-1 hover:underline"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>

        </div>
      </div>

    </div>
  )
}

export default Auth