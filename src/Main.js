import React from 'react';
import arr from './product';

function Main() {
  return (
    <>
    <div className="outer">
      {arr.map((ele) => (
        <div className="main">
          <div key={ele.id} className="id">{ele.id}</div>
          <div className="name">{ele.name}</div>
          <button >Add-to-cart</button>
        </div>
      ))}
      </div>
    </>
  );
}

export default Main
