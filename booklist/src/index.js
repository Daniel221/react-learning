import React from "react";
import reactDom from "react-dom";
import { bookList } from "./data/books";
import Book from "./book";

//CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      {bookList.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

reactDom.render(<BookList />, document.getElementById("root"));
