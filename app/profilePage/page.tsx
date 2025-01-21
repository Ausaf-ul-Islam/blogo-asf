'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from "../firebase/firebase"
import { onAuthStateChanged, User } from 'firebase/auth'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

interface UserData {
    firstName: string
    lastName: string
    gender: string
    email: string
}

const ProfilePage = () => {
    const [user, setUser] = useState<User | null>(null)
    const [userData, setUserData] = useState<UserData | null>(null)
    const router = useRouter()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                // Retrieve user data from localStorage
                const storedData = localStorage.getItem('registrationUserData')
                if (storedData) {
                    setUserData(JSON.parse(storedData))
                }
            } else {
                // If not logged in, redirect to login page
                router.push('/login')
            }
        })

        return () => unsubscribe()
    }, [router])

    const handleLogout = async () => {
        try {
            await auth.signOut()
            router.push('/login')
        } catch (error) {
            console.error('Error signing out:', error)
        }
    }

    if (!user || !userData) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <p className="text-lg text-gray-600 dark:text-gray-400">Loading...</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-200">
            <Card className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg transition-colors duration-200">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-purple-600 dark:text-purple-400">
                        User Profile
                    </CardTitle>
                    <CardDescription className="text-center text-gray-600 dark:text-gray-400">
                        Welcome back, {userData.firstName}!
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">First Name</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{userData.firstName}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Name</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{userData.lastName}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{userData.email}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Gender</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{userData.gender}</p>
                    </div>
                    {!user.emailVerified && (
                        <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 text-yellow-700 dark:text-yellow-300 p-4 rounded" role="alert">
                            <p className="font-bold">Email Not Verified</p>
                            <p>Please check your email to verify your account.</p>
                        </div>
                    )}
                </CardContent>
                <CardFooter>
                    <Button
                        onClick={handleLogout}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
                    >
                        Log Out
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ProfilePage

