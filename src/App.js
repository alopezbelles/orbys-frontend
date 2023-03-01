
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Books from './Containers/Books/Books';
import BookDetail from './Containers/BookDetail/BookDetail';
import AddBook from './Containers/AddBook/AddBook';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books/>} />
        <Route path="/bookdetail" element={<BookDetail/>} />
        <Route path="/addbook" element={<AddBook/>} />
      
      </Routes>      
    </BrowserRouter>
      
    </div>
  );
}

export default App;
