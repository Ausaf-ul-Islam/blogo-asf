'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

const Dashboard = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')
    const [tags, setTags] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the blog post data to your backend
        console.log({ title, content, category, tags: tags.split(',').map(tag => tag.trim()) })
        // Reset form after submission
        setTitle('')
        setContent('')
        setCategory('')
        setTags('')
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-purple-600 dark:text-purple-400">Create New Blog Post</CardTitle>
                    <CardDescription className="text-center text-gray-600 dark:text-gray-400">Fill in the details of your new blog post</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter your blog post title"
                                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="content">Content</Label>
                            <Textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Write your blog post content here"
                                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                rows={6}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Input
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                placeholder="Enter a category for your post"
                                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="tags">Tags</Label>
                            <Input
                                id="tags"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                                placeholder="Enter tags separated by commas"
                                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
                        >
                            Publish Blog Post
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

export default Dashboard

