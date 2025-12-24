// components/posts/RenderPosts.tsx
"use client"

import PostCard from "./PostCard"

interface RenderPostsProps {
  posts: any[]
  layout?: "grid" | "feed"
}

export default function RenderPosts({
  posts,
  layout = "grid",
}: RenderPostsProps) {
  return (
    <div
      className={
        layout === "grid"
          ? "grid grid-cols-2 gap-3 md:grid-cols-3"
          : "flex flex-col gap-6"
      }
    >
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  )
}
