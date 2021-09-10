import "./styles/App.css";
import PostList from "./components/PostList";
import { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "Description",
    },
    {
      id: 2,
      title: "Python",
      body: "Description",
    },
    {
      id: 3,
      title: "Java",
      body: "Description",
    },
  ]);

  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });

  const sortedPosts = useMemo(() => {
    console.log("Sorted posts");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSelectedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLocaleLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Отримуємо post з дочірнього компонента

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSelectedPosts.length ? (
        <PostList
          remove={removePost}
          posts={sortedAndSelectedPosts}
          title={"Пости про JS"}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Пости не знайдені</h1>
      )}
    </div>
  );
}

export default App;
