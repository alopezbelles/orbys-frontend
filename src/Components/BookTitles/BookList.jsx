
import React from 'react';

const data = require('../../assets/books.json');

const BookTitles = () => {
  return (
    <div>
      {data.map(item => (
        <div key={item.title}>
          <h1>{item.title}</h1>
          {/* <p>{item.descripcion}</p> */}
        </div>
      ))}
    </div>
  );
};

export default BookTitles;