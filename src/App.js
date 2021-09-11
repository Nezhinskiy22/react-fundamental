import "./styles/App.css";
import PostList from "./components/PostList";
import { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

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

  const [modal, setModal] = useState(false);

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
    setModal(false);
  };

  // Отримуємо post з дочірнього компонента

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Створити запис
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSelectedPosts}
        title={"Пости про JS"}
      />
    </div>
  );
}

export default App;