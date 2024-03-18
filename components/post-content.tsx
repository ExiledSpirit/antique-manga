import { PostEntity } from '@/interfaces/entity/post';
import ReactMarkdown from 'react-markdown';
import Markdown from 'react-markdown';

interface Props {
  post: PostEntity | null | undefined
}

export function PostContent({
  post
}: Props) {
  return (
    <div>
      <h1>{post?.title}</h1>
      <ReactMarkdown>{post?.content}</ReactMarkdown>
    </div>
  )
}