import { Post } from "@/components/post-card";
import Image from '../public/header.jpg';

const author = {
  id: 0,
  name: 'camie'
}

export const posts: Post[] = [
  {
    author,
    comments: [],
    date: new Date(),
    imgSrc: Image.src,
    title: 'Título'
  },
  {
    author,
    comments: [],
    date: new Date(),
    imgSrc: Image.src,
    title: 'Título'
  },
  {
    author,
    comments: [],
    date: new Date(),
    imgSrc: Image.src,
    title: 'Título'
  }
]