"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RenderPosts from "@/components/posts/RenderPosts"

import { posts } from "@/lib/mockData"
import { useContext, useEffect } from "react"
import { Context } from "@/app/Store"
import { UserProfile } from "@/lib/types"


export default function ProfilePage() {



  const { user, fetchUserDetails } = useContext(Context) as {
    user: UserProfile
    fetchUserDetails: () => void
  }

  useEffect(() => {
      fetchUserDetails()
    }, []
  )



  return (
    <div className="mx-auto max-w-5xl px-4 py-8">

      <div className="flex flex-col gap-6 md:flex-row">

        <div className="flex justify-center md:w-1/3">
          <div className="relative h-36 w-36 overflow-hidden rounded-full border">
            <Image
              src={user.profilePic || "/avatar.png"}
              alt="Profile Pic"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">@{user.username}</h2>
            <Button>Follow</Button>
            <Button variant="outline">Message</Button>
          </div>

          {/* Stats */}
          <div className="flex gap-6 text-sm">
            <span>
              <strong>{user.posts.length}</strong> posts
            </span>
            <span>
              <strong>{user.followers.length}</strong> followers
            </span>
            <span>
              <strong>{user.following.length}</strong> following
            </span>
          </div>

          {/* Bio */}
          {user.bio && (
            <p className="max-w-md text-sm text-muted-foreground">
              {user.bio}
            </p>
          )}
        </div>
      </div>

      <Separator className="my-8" />

      {/* Tabs */}
      <Tabs defaultValue="posts">
        <TabsList className="mx-auto flex w-fit">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="stories">Stories</TabsTrigger>
          <TabsTrigger value="tagged">Tagged</TabsTrigger>
        </TabsList>

        {/* Posts Grid */}
        <TabsContent value="posts">
          <div className="mx-auto max-w-6xl px-4 py-6">
            <RenderPosts posts={posts} />
          </div>
        </TabsContent>

        {/* Stories */}
        <TabsContent value="stories">
          <p className="text-center text-muted-foreground">
            Stories expire in 24 hours
          </p>
        </TabsContent>

        {/* Tagged */}
        <TabsContent value="tagged">
          <p className="text-center text-muted-foreground">
            No tagged posts
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
