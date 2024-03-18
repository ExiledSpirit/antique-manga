import { PostEntity } from '@/interfaces/entity/post';
import { format } from 'date-fns';
import Link from "next/link";

interface PostCardProps {
  post: PostEntity
}

export default function PostCard({
  post
}: Readonly<PostCardProps>) {
  const {
    coverImageUrl,
    title,
    author,
    publishedAt,
    categories,
    excerpt
  } = post

  const date = publishedAt || new Date()
  let urlYear = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  let urlMonth = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
  let urlDay = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

  return (
    <Link href={`/posts/${urlYear}/${urlMonth}/${urlDay}`}>
      <article>
        <div className="w-full h-44 relative">
          <div className="absolute right-0">
            <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-70">
              {categories.map((category, index) => {
                return (
                  <Link key={category.name} href="" className="hover:text-gray-300 text-base">{category.name + (index < categories.length - 1 ? ', ' : '')}</Link>
                )
              })}
            </span>
          </div>
          <img className="object-cover w-full h-full" src={coverImageUrl} alt=""></img>
        </div>
        <div className="flex row gap-8 w-full mt-4">
          <header className="w-1/3">
            <h1 className="text-brown text-base uppercase break-all tracking-wide">
              <Link href="" className="hover:underline hover:decoration-gray-800 hover:text-gray-800">{title}</Link>
            </h1>
            <div className="text-sm text-gray-500">
              <p>{ format(date, 'dd/MM/yyyy') }</p>
              <p>por <Link href="" className='hover:text-black'>{author.name}</Link></p>
            </div>
          </header>
          <p className="w-full">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  )
}