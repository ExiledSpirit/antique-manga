import PostCard from "@/components/post-card";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <main className="bg-white w-full h-screen text-black">
      {
        posts.map((post) => {
          return <PostCard post={post}></PostCard>
        })
      }
    </main>
  );
}
