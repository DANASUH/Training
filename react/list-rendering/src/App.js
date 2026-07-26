import logo from './logo.svg';
import './App.css';
import MyFirstComponent from "./MyFirstComponent";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

function App() {
  const posts = [
    {
      id: 1,
      postName: "Hello",
      postBody: "This is the second body",
    },

    {
      id: 2,
      postName: "the second post",
      postBody: "This is the second body",
    },

    {
      id: 3,
      postName: "the third post",
      postBody: "This is the third body",
    },
    {
      id: 4,
      postName: "the fourth post",
      postBody: "This is the fourth body",
    },
  ];

  const postsList = posts.map((post) => {
    return <Post key={post.id} postName={post.postName} />;
  });
  return (
    <div className="App">
      <Header />

      {/* POSTS CONTAINER */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
        >
          {/* == POSTS CONTAINER == */}
          <div style={{ width: "70%" }}>{postsList}</div>

          <div style={{ width: "30%", marginTop: "25px" }}>
            <SideMenu />
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default App;
