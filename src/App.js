import logo from './logo.svg';
import './App.scss';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <header className='container'>
        <h1>Chatter</h1>
      </header>
      <CreatePost />
      <PostList />
    </div>
  );
}

export default App;
