import './App.css';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Forms from './components/Form';
import Display from './components/DisplayBooks';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/create-book" element={<Forms />} />
          <Route path="/books" element={<Display />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
