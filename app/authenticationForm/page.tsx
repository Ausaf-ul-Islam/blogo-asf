"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { AlertCircle, Github, Twitter, Facebook } from 'lucide-react';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission (removed for UI-only focus)
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center dark:bg-gray-900 dark:text-gray-100 bg-gray-100 text-gray-900">
            <Card className="w-full max-w-md mx-auto dark:bg-gray-800 dark:text-gray-100 bg-white text-gray-900">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold dark:text-purple-400 text-purple-600">SignIn / SignUp</CardTitle>
                    <CardDescription className="dark:text-gray-400 text-gray-600">
                        Enter your credentials to access your account
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="dark:text-gray-200 text-gray-800">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-purple-400 dark:focus:ring-purple-400 bg-gray-200 border-gray-300 placeholder-gray-500 text-gray-900 focus:border-purple-600 focus:ring-purple-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="dark:text-gray-200 text-gray-800">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-purple-400 dark:focus:ring-purple-400 bg-gray-200 border-gray-300 placeholder-gray-500 text-gray-900 focus:border-purple-600 focus:ring-purple-600"
                            />
                        </div>
                        {error && (
                            <div className="flex items-center space-x-2 text-red-400">
                                <AlertCircle size={16} />
                                <span className="text-sm">{error}</span>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button type="submit" className="w-full dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white bg-purple-500 hover:bg-purple-600 text-white">
                            Log in
                        </Button>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t dark:border-gray-600 border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="dark:bg-gray-800 dark:text-gray-400 bg-gray-100 text-gray-600 px-2">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <Button type="button" variant="outline" className="dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:border-gray-600 bg-gray-200 hover:bg-gray-300 text-gray-800 border-gray-400">
                                <Github className="h-5 w-5" />
                            </Button>
                            <Button type="button" variant="outline" className="dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:border-gray-600 bg-gray-200 hover:bg-gray-300 text-gray-800 border-gray-400">
                                <Twitter className="h-5 w-5" />
                            </Button>
                            <Button type="button" variant="outline" className="dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:border-gray-600 bg-gray-200 hover:bg-gray-300 text-gray-800 border-gray-400">
                                <Facebook className="h-5 w-5" />
                            </Button>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
