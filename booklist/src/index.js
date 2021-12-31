import React from "react";
import reactDom from "react-dom";

//CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

function Book() {
  const title = "The Midnight Library: A Novel";
  const author = "Matt Haig";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/81YzHKeWq7L._AC_UL480_FMwebp_QL65_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p></p> */}
    </article>
  );
}

reactDom.render(<BookList />, document.getElementById("root"));
