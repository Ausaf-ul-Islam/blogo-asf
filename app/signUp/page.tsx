'use client'

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    AuthError
} from "firebase/auth"
import { auth } from "../firebase/firebase"
import Link from "next/link"

const RegisterPage = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)
    const router = useRouter()

    const handleRegistration = async (event: FormEvent) => {
        event.preventDefault()
        setError(null)
        setMessage(null)
        if (password !== confirmPassword) {
            setError("Passwords do not match!")
            return
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            const user = userCredential.user
            await sendEmailVerification(user)
            setMessage("Verification email sent. Please check your inbox.")

            localStorage.setItem(
                "registrationUserData",
                JSON.stringify({
                    firstName,
                    lastName,
                    gender,
                    email,
                })
            )

            setFirstName("")
            setLastName("")
            setGender("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
        } catch (error) {
            const firebaseError = error as AuthError
            setError(firebaseError.message || "An unknown error occurred")
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-200">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md transition-colors duration-200">
                <h2 className="text-3xl font-bold text-center mb-6 text-purple-600 dark:text-purple-400">
                    Create Account
                </h2>
                {error && (
                    <div className="text-red-500 text-sm mb-4 p-3 bg-red-100 dark:bg-red-900 rounded-md">{error}</div>
                )}
                {message && (
                    <div className="text-green-500 text-sm mb-4 p-3 bg-green-100 dark:bg-green-900 rounded-md">{message}</div>
                )}
                <form onSubmit={handleRegistration} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-colors duration-200"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-colors duration-200"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Gender</label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-colors duration-200"
                            required
                        >
                            <option value="" disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-colors duration-200"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-colors duration-200"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-colors duration-200"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition-colors duration-200"
                    >
                        Create Account
                    </button>
                </form>
                <p className="text-sm text-center mt-6 text-gray-600 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link href="/login" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage

