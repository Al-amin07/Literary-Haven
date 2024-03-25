import { setItem } from "localforage";
import { useEffect, useState } from "react";
import Item from "./Item";
import { useLoaderData } from "react-router-dom";




const Home = () => {
//    const [items, setItems] = useState([]);

//    useEffect(() => {
//     const loadItems = async() => {
//         const res = await fetch('./fake.json');
//         const data = await res.json();
//         setItem(data);
//     }
//     loadItems()
//    },[])

    const items = useLoaderData();
    return (
        <div>
        
            <div className="grid grid-cols-3 gap-5">
                {
                    items.map(item => <Item key={item.bookId} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Home;