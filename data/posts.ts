import { AuthorEntity } from '@/interfaces/entity/author'
import { CategoryEntity } from '@/interfaces/entity/category'
import { PostEntity } from '@/interfaces/entity/post'

const author: AuthorEntity = {
  id: '0',
  name: 'camie',
  bio: 'Hi there!',
  email: 'camie@gmail.com'
}

const categoryManga: CategoryEntity = {
  created_at: new Date('2014-01-01'),
  updated_at: null,
  description: 'Mangas description',
  id: '0',
  name: 'Mangá',
  post_quantity: 0
}

const categoryManhwa: CategoryEntity = {
  created_at: new Date('2014-01-01'),
  updated_at: null,
  description: 'Manhwas description',
  id: '0',
  name: 'Manhwa',
  post_quantity: 0
}

export const posts: PostEntity[] = [
  {
    author,
    title: 'Esclarecendo perguntas frequentes',
    categories: new Array(categoryManga, categoryManhwa),
    content: '<article><h1>Teste</h1></article>',
    coverImageUrl: 'https://pulenao.com.br/wp-content/uploads/2024/02/2xko.png',
    createdAt: new Date(),
    excerpt: 'Descrição do post. Essa é a descrição do post pois para conseguir descrever do que se trata.',
    id: '0',
    publishedAt: new Date(),
    slug: 'esclarecendo-perguntas-frequentes',
    updatedAt: null
  },
  {
    author,
    title: 'Esclarecendo perguntas frequentes',
    categories: new Array(categoryManga, categoryManhwa),
    content: '<article><h1>Teste</h1></article>',
    coverImageUrl: 'https://pulenao.com.br/wp-content/uploads/2024/02/2xko.png',
    createdAt: new Date(),
    excerpt: 'Descrição do post. Essa é a descrição do post pois para conseguir descrever do que se trata.',
    id: '0',
    publishedAt: new Date(),
    slug: 'esclarecendo-perguntas-frequentes',
    updatedAt: null
  },
  {
    author,
    title: 'Esclarecendo perguntas frequentes',
    categories: new Array(categoryManga, categoryManhwa),
    content: '<article><h1>Teste</h1></article>',
    coverImageUrl: 'https://pulenao.com.br/wp-content/uploads/2024/02/2xko.png',
    createdAt: new Date(),
    excerpt: 'Descrição do post. Essa é a descrição do post pois para conseguir descrever do que se trata.',
    id: '0',
    publishedAt: new Date(),
    slug: 'esclarecendo-perguntas-frequentes',
    updatedAt: null
  },
  {
    author,
    title: 'Esclarecendo perguntas frequentes',
    categories: new Array(categoryManga, categoryManhwa),
    content: '<article><h1>Teste</h1></article>',
    coverImageUrl: 'https://pulenao.com.br/wp-content/uploads/2024/02/2xko.png',
    createdAt: new Date(),
    excerpt: 'Descrição do post. Essa é a descrição do post pois para conseguir descrever do que se trata.',
    id: '0',
    publishedAt: new Date(),
    slug: 'esclarecendo-perguntas-frequentes',
    updatedAt: null
  },
]