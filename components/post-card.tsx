import Image from "next/image"
import PostImage from '../public/header.jpg';

interface User {
  id: number
  name: string
  platform: string
}

interface Comment {
  user: User
  date: Date
  content: string
}

interface Author {
  id: number
  name: string
}

export interface Post {
  imgSrc: string
  title: string
  author: Author
  comments: Comment[]
  date: Date
}

interface PostCardProps {
  post: Post
}

export default function PostCard({
  post
}: Readonly<PostCardProps>) {
  const {
    imgSrc,
    title,
    author,
    comments,
    date
  } = post

  return (
    <div>
      <Image src={PostImage} alt=""></Image>
      <div className="flex row gap-8">
        <div>
          <h2>{title}</h2>
          <div>
            <p>{ date.toUTCString() }</p>
            <p>por {author.name}</p>
            <p>{comments.length} Comentários</p>
          </div>
        </div>
      </div>
    </div>
  )
}