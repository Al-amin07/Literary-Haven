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
        <div className="grid grid-cols-3 gap-5">
            {
                 books.map(item => <Item key={item.bookId} item={item}></Item>)
            }
        </div>
    );
};

export default Books;