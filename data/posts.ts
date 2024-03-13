import { Post } from "@/components/post-card";

const imgSrc = 'https://antiquemanga.files.wordpress.com/2022/05/antiquemanga-lovingcoupleballroom-1.jpg';

const author = {
  id: 0,
  name: 'camie'
}

export const posts: Post[] = [
  {
    author,
    comments: [],
    date: new Date(),
    imgSrc: 'https://antiquemanga.files.wordpress.com/2022/05/anucc81ncio-banner.jpg',
    title: 'Esclarecendo perguntas frequentes',
    tags: ['anúncio'],
    content: 'Quando tem postagens? O que são essas mudanças no site? Vocês vão terminar o projeto tal? Estão aceitando parceria? Por que ficaram inativos? Qual o gasto anual mínimo? E muito mais…'
  },
  {
    author,
    comments: [],
    date: new Date(),
    imgSrc: 'https://antiquemanga.files.wordpress.com/2022/04/themasquerade.jpg',
    title: '100% PERFECT GIRL',
    tags: ['drama', 'romance'],
    content: 'Boa noite amantes de mangas e manhwas, a scan quer dar continuidade a essa obra prima coreana, que è 100% Perfct girl, esaa obra està ha anos abandonada… Estou ansiosa […]'
  },
  {
    author,
    comments: [],
    date: new Date(),
    imgSrc: 'https://antiquemanga.files.wordpress.com/2022/04/themasquerade.jpg',
    title: 'THE MASQUERADE – CAP. 05',
    tags: ['drama', 'historico', 'romance', 'yaoi'],
    content: 'Finalmente depois de muito tempo, trazemos atualização de The Masquerade. Um webtoon maravilhoso, mas sou suspeita pra falar. Dessa vez com a tradução da Karu, nova membro da equipe. Muito […]'
  },
  {
    author,
    comments: [],
    date: new Date(),
    imgSrc,
    title: 'Título',
    tags: ['mangá', 'manhwa', 'anúncio'],
    content: 'Quando tem postagens? O que são essas mudanças no site? Vocês vão terminar o projeto tal? Estão aceitando parceria? Por que ficaram inativos? Qual o gasto anual mínimo? E muito mais…'
  },
  {
    author,
    comments: [],
    date: new Date(),
    imgSrc,
    title: 'Título',
    tags: ['mangá', 'manhwa', 'anúncio'],
    content: 'Quando tem postagens? O que são essas mudanças no site? Vocês vão terminar o projeto tal? Estão aceitando parceria? Por que ficaram inativos? Qual o gasto anual mínimo? E muito mais…'
  }
]