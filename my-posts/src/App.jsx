
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 12));
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>My Blog Posts</h1>
      <p className="subtitle">
        Explore the latest posts
      </p>

      {loading ? (
        <h2>Loading posts...</h2>
      ) : (
        <div className="posts">
          {posts.map((post) => (
            <div className="card" key={post.id}>
              <span className="post-id">
                Post #{post.id}
              </span>

              <h2>{post.title}</h2>

              <p>{post.body}</p>

              <button>Read More →</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
