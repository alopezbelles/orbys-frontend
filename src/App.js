import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Books from './Containers/Books/Books';
import BookDetail from './Containers/BookDetail/BookDetail';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
      
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books/>} />
        <Route path="/bookdetail" element={<BookDetail/>} />
                
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
