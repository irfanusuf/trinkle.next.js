
export interface Post {
  _id: string
  postPicUrl: string
  likes: { userId: string }[]
  comments: any[]
}

export interface UserProfile {
  username: string
  profilePic?: string
  bio?: string
  followers: any[]
  following: any[]
  posts: Post[]
}
