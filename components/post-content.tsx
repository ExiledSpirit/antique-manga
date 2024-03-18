import { PostEntity } from '@/interfaces/entity/post';
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
      <Markdown>{post?.content}</Markdown>
    </div>
  )
}