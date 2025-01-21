'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signInWithEmailAndPassword, AuthError } from "firebase/auth"
import { auth } from "../firebase/firebase" // Adjust the import path for your project
import Link from "next/link"

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault()
        setError(null) // Clear any previous errors

        try {
            await signInWithEmailAndPassword(auth, email, password)
            router.push("/profilePage") // Redirect to the dashboard or homepage after login
        } catch (error) {
            const firebaseError = error as AuthError
            setError(firebaseError.message || "An unknown error occurred")
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-200">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md transition-colors duration-200">
                <h2 className="text-3xl font-bold text-center mb-6 text-purple-600 dark:text-purple-400">
                    Log In
                </h2>
                {error && (
                    <div className="text-red-500 text-sm mb-4 p-3 bg-red-100 dark:bg-red-900 rounded-md">{error}</div>
                )}
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-colors duration-200"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-colors duration-200"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition-colors duration-200"
                    >
                        Log In
                    </button>
                </form>
                <p className="text-sm text-center mt-6 text-gray-600 dark:text-gray-400">
                    Don't have an account?{" "}
                    <Link href="/signUp" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage

