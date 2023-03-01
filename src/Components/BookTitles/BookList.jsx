
import React from 'react';
import "./BookList.css";


const data = require('../../assets/books.json');

const BookTitles = () => {
  return (
    <div >
      {data.map(item => (
        <div key={item.title}>
          <h2 className="booksTitlesList">{item.title}</h2>
          {/* <p>{item.descripcion}</p> */}
        </div>
      ))}
    </div>
  );
};

export default BookTitles;