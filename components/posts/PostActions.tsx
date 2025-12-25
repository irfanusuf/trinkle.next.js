// components/posts/PostActions.tsx
"use client"

import { Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PostActions({ post  , openDrawer}: { post: any , openDrawer : () => void}) {
  return (
    <div className="flex items-center gap-4 px-3 py-2">
      
      <Button variant="ghost" size="icon">
        <Heart className="h-5 w-5" />
      </Button>

      <Button variant="ghost" size="icon" onClick={openDrawer}>
        <MessageCircle className="h-5 w-5" />
      </Button>

      <span className="text-sm text-muted-foreground">
        {post.likes.length} likes
      </span>
    </div>
  )
}
