// components/posts/PostCard.tsx
"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import PostActions from "./PostActions"
import CommentsSection from "./CommentsSection"


export default function PostCard({ post }: { post: any }) {
  return (
    <Card className="overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 p-3">
        <Image
          src={post.userId.profilePic || "/avatar.png"}
          alt="User"
          width={36}
          height={36}
          className="rounded-full"
        />
        <span className="font-medium">@{post.userId.username}</span>
      </div>

      {/* Image */}
      {post.postPicUrl && (
        <div className="relative aspect-square">
          <Image
            src={post.postPicUrl}
            alt="Post"
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Actions */}
      <PostActions post={post} />

      {/* Caption */}
      {post.postCaption && (
        <p className="px-3 py-2 text-sm">
          <span className="font-medium">
            @{post.userId.username}
          </span>{" "}
          {post.postCaption}
        </p>
      )}

      {/* Comments */}
      <CommentsSection post={post} />
    </Card>
  )
}
