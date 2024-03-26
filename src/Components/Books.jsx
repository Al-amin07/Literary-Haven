import { useEffect, useState } from "react";
import Item from "./Item";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const loadBooks = async () => {
            const res = await fetch('./fake.json');
            const data = await res.json();
            setBooks(data)
        }
        loadBooks()
    }, [])
    return (
      <div>
        <h2 className="text-5xl font-bold text-center">Books</h2>
          <div className="grid grid-cols-3 gap-5">
            {
                 books.map(item => <Item key={item.bookId} item={item}></Item>)
            }
        </div>
      </div>
    );
};

export default Books;