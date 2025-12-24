// components/posts/PostActions.tsx
"use client"

import { Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PostActions({ post }: { post: any }) {
  return (
    <div className="flex items-center gap-4 px-3 py-2">
      <Button variant="ghost" size="icon">
        <Heart className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <MessageCircle className="h-5 w-5" />
      </Button>

      <span className="text-sm text-muted-foreground">
        {post.likes.length} likes
      </span>
    </div>
  )
}
