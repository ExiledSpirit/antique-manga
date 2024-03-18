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
    coverImageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2021%2F11%2F20th-Century-Boys.jpg&f=1&nofb=1&ipt=6af99f7aa8dfd3722ea21171fb1751db04ccc40022d34e3d389975bda4d38ee7&ipo=images',
    createdAt: new Date(),
    excerpt: 'Descrição do post. Essa é a descrição do post pois para conseguir descrever do que se trata.',
    id: '0',
    publishedAt: new Date(),
    slug: 'esclarecendo-perguntas-frequentes',
    updatedAt: null
  },
  {
    author,
    title: 'Tópicos diversos',
    categories: new Array(categoryManga, categoryManhwa),
    content: '<article><h1>Teste</h1></article>',
    coverImageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2021%2F11%2F20th-Century-Boys.jpg&f=1&nofb=1&ipt=6af99f7aa8dfd3722ea21171fb1751db04ccc40022d34e3d389975bda4d38ee7&ipo=images',
    createdAt: new Date(),
    excerpt: 'Descrição do post. Essa é a descrição do post pois para conseguir descrever do que se trata.',
    id: '0',
    publishedAt: new Date(),
    slug: 'topicos-diversos',
    updatedAt: null
  },
  {
    author,
    title: 'Novo post de mangá',
    categories: new Array(categoryManga, categoryManhwa),
    content: '<article><h1>Teste</h1></article>',
    coverImageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2021%2F11%2F20th-Century-Boys.jpg&f=1&nofb=1&ipt=6af99f7aa8dfd3722ea21171fb1751db04ccc40022d34e3d389975bda4d38ee7&ipo=images',
    createdAt: new Date(),
    excerpt: 'Descrição do post. Essa é a descrição do post pois para conseguir descrever do que se trata.',
    id: '0',
    publishedAt: new Date(),
    slug: 'novo-post-de-manga',
    updatedAt: null
  },
  {
    author,
    title: 'Testando slug',
    categories: new Array(categoryManga, categoryManhwa),
    content: '<article><h1>Teste</h1></article>',
    coverImageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2021%2F11%2F20th-Century-Boys.jpg&f=1&nofb=1&ipt=6af99f7aa8dfd3722ea21171fb1751db04ccc40022d34e3d389975bda4d38ee7&ipo=images',
    createdAt: new Date(),
    excerpt: 'Descrição do post. Essa é a descrição do post pois para conseguir descrever do que se trata.',
    id: '0',
    publishedAt: new Date(),
    slug: 'testando-slug',
    updatedAt: null
  },
]