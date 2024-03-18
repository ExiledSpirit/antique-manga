import { PostContent } from '@/components/post-content';
import { posts } from '@/data/posts';
import { PostEntity } from '@/interfaces/entity/post';
import { NextPage } from 'next';
import { Fragment } from 'react';

interface Props {
  params: {
    slug: string
  }
}

const BlogPost: NextPage<Props> = ({
   params
  }: Props) => {
  const post = getPostData(params.slug)

  return (
      <Fragment>
          <PostContent post={post} />
      </Fragment>
  );
};

export const dynamicParams = false

export const generateStaticParams = async () => {
  return getPosts().map((post) => ({
    slug: post.slug
  }));
};

function getPostData(slug: string): PostEntity | undefined {
  return posts.find((post) => post.slug === slug)
}

function getPosts() {
  return posts;
}

export default BlogPost;
