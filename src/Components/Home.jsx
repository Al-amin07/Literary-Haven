import Banner from "./Banner";
import Books from "./Books";

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

  return (
    <div>
      <Banner></Banner>
      <Books></Books>
    </div>
  );
};

export default Home;
