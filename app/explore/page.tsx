"use client"

import Image from "next/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

interface ExplorePost {
  _id: string
  postPicUrl: string
  userId: {
    _id: string
    username: string
    profilePic?: string
  }
  likes: { userId: string }[]
  comments: any[]
}

export default function ExplorePage() {
  // 🔹 Replace with real API response
  const [posts] = useState<ExplorePost[]>([
    {
      _id: "1",
      postPicUrl: "/post1.jpg",
      userId: {
        _id: "u1",
        username: "irfan_dev",
        profilePic: "/avatar.png",
      },
      likes: [{ userId: "u2" }, { userId: "u3" }],
      comments: [{}, {}],
    },
    {
      _id: "2",
      postPicUrl: "/post2.jpg",
      userId: {
        _id: "u2",
        username: "john_doe",
        profilePic: "/avatar.png",
      },
      likes: [],
      comments: [],
    },
  ])

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      {/* Search */}
      <div className="mb-6">
        <Input placeholder="Search posts, users..." />
      </div>

      <Separator className="mb-6" />

      {/* Explore Grid */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <Card
            key={post._id}
            className="group relative aspect-square overflow-hidden cursor-pointer"
          >
            {/* Post Image */}
            <Image
              src={post.postPicUrl}
              alt="Explore post"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
              {/* User Info */}
              <div className="flex items-center gap-2 p-2 text-white">
                <Image
                  src={post.userId.profilePic || "/avatar.png"}
                  alt="User"
                  width={28}
                  height={28}
                  className="rounded-full"
                />
                <span className="text-sm font-medium">
                  @{post.userId.username}
                </span>
              </div>

              {/* Stats */}
              <div className="flex justify-center gap-6 pb-4 text-white">
                <span>❤️ {post.likes.length}</span>
                <span>💬 {post.comments.length}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
