import { PostContent } from '@/components/post-content';
import { posts } from '@/data/posts';
import { PostEntity } from '@/interfaces/entity/post';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';
import { Fragment } from 'react';

interface Props {
  post: PostEntity
}

export function BlogPost({
   post 
  }: Props) {
  return (
      <Fragment>
          <PostContent post={post} />
      </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params ? context.params.slug : ''
  const postData = getPostData(slug as string || '');
  return {
      props: {
          post: postData,
      },
      // regenerate after every 600s(10mins)
      revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPosts().map((post) =>
      post.slug
  );
  return {
      paths: slugs.map((slug) => ({ params: { slug: slug } })),
      fallback: false,
  };
};

function getPostData(slug: string) {
  return posts.find((post) => post.slug === slug)
}

function getPosts() {
  return posts;
}

export default BlogPost;
