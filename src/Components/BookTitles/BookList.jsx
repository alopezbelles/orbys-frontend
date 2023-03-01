
import React from 'react';
import "./BookList.css";
import { useNavigate } from "react-router-dom";


const data = require('../../assets/books.json');

const BookTitles = () => {

  const navigate = useNavigate();

  return (
    <div>
      {data.map(item => (
        <div key={item.title}>
          <h2 className="booksTitlesList" onClick={()=>navigate(`/bookdetail`)} >{item.title}</h2>          
          {/* <h2 className="booksTitlesList" onClick={()=>navigate(`/books/${item.isbn}`)} >{item.title}</h2> */}
        </div>
      ))}
    </div>
  );
};

export default BookTitles;