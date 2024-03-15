import PostCard from "@/components/post-card";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <main className="w-full text-black flex flex-col gap-8">
      {
        posts.map((post) => {
          return <PostCard key={post.title} post={post}></PostCard>
        })
      }
    </main>
  );
}
