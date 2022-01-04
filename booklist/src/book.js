import React from "react";

function Book({ img, title, author }) {
  const clickHandler = () => {
    alert("Hello world!");
  };

  const complexExample = (author) => {
    alert(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <button type="button" onClick={clickHandler}>
        example btn
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        complexExample
      </button>
    </article>
  );
}

export default Book;
