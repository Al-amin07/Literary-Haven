
import { ReadBook } from "./ReadLoacalStorage";
import ReadedBook from "./ReadedBook";
import { WishBook } from "./WishLocalStorage";
import WishedBook from "./WishedBook";
import { useState } from "react";
const ListedBook = () => {
  const books = ReadBook();
  console.log(books);
  const wishBooks = WishBook();
  const [toggle, setToggle] = useState(1);

  const updateToggle = (id) => {

    setToggle(id);
  };

  return (
    <div>
      <h2 className="text-center text-4xl font-bold py-6 bg-[#F3F3F3]">
        Books
      </h2>
      <div className="flex justify-center my-5">
        <select
          className="btn bg-[#23BE0A] py-2 px-4 text-white font-bold text-xl"
          name=""
          id=""
        >
          <option value="">Name</option>
          <option value="">Id</option>
          <option value="">Pages</option>
        </select>
      </div>
      {/* Tab */}
      <div role="tablist" className="tabs tabs-bordered">
  <input type="radio" name="my_tabs_1" role="tab" className="tab text-xl" aria-label="Read Book" checked />
  <div role="tabpanel" className="tab-content p-10">
  {books.map((book) => (
          <ReadedBook key={book.bookId} book={book}></ReadedBook>
        ))}
  </div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab text-xl" aria-label="Wishlist Books"   />
  <div role="tabpanel" className="tab-content p-10">
  {wishBooks.map((book) => (
          <WishedBook key={book.bookId} book={book}></WishedBook>
        ))}
  </div>

  
</div>
{/* Tab */}

      {/* <div className="flex  gap-3">
        <button onClick={() => updateToggle(1)} className="btn">
          Read Book
        </button>
        <button onClick={() => updateToggle(2)} className="btn">
          Wishlist Books
        </button>
      </div>

      <div className={toggle === 1 ? "block" : "hidden"}>
        {books.map((book) => (
          <ReadedBook key={book.bookId} book={book}></ReadedBook>
        ))}
      </div>

      <div className={toggle === 2 ? "block" : "hidden"}>
        {wishBooks.map((book) => (
          <WishedBook key={book.bookId} book={book}></WishedBook>
        ))}
      </div> */}
    </div>
  );
};

export default ListedBook;
