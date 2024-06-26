import { useFetch } from "../hooks/useFetch";

const Posts = () => {
  let posts = useFetch("https://jsonplaceholder.typicode.com/posts", []);
  return (
    <div>
      <h1>Aca van a ir los posts</h1>
      {posts.map((post) => {
        return <h2 key={post.id}>{post.title}</h2>;
      })}
    </div>
  );
};

export default Posts;
