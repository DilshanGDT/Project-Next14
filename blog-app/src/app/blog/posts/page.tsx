import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';

export default function page() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>This is the Posts Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Post 
                id={post.id} 
                title={post.title} 
                content={post.content} 
                date={post.date} />
          </li>
        ))}
      </ul>
    </div>
  );
}