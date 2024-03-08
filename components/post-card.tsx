import { format } from 'date-fns';
import Link from "next/link";

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
  tags: string[]
  content: string
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
    date,
    tags,
    content
  } = post

  return (
    <article>
      <div className="w-full h-44 relative">
        <div className="absolute right-0">
          <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-70">
            {tags.map((tag, index) => {
              return (
                <Link key={tag} href="" className="hover:text-gray-300">{tag + (index < tags.length - 1 ? ', ' : '')}</Link>
              )
            })}
          </span>
        </div>
        <img className="object-cover w-full h-full" src={imgSrc} alt=""></img>
      </div>
      <div className="flex row gap-8 w-full mt-4">
        <header className="w-1/3">
          <h1 className="text-brown text-base uppercase break-all tracking-wide">
            <Link href="" className="hover:underline hover:decoration-gray-800 hover:text-gray-800">{title}</Link>
          </h1>
          <div className="text-sm text-gray-500">
            <p>{ format(date, 'dd/MM/yyyy') }</p>
            <p>por <Link href="" className='hover:text-black'>{author.name}</Link></p>
            <p><Link href="" className='hover:text-black'>{comments.length} Comentários</Link></p>
          </div>
        </header>
        <p className="w-full">
          {content}
        </p>
      </div>
    </article>
  )
}