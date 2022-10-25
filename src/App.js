import './App.css';
import MovieHeader from './components/MovieHeader/MovieHeader';
import Movies from './components/Movies/Movies';

function App() {
  return (
    <div className="App">
      <div className='container movie-container'>
        <MovieHeader />
        <Movies />
      </div>
    </div>
  );
}

export default App;
