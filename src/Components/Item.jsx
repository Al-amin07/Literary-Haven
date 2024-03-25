import PropTypes from 'prop-types'
import Rate from '../images/rate.png'
import { Link } from 'react-router-dom';
const Item = ({item}) => {
    console.log(item)
    const {bookName, author, image, tags, category
, rating, bookId
} = item;
    return (
       <Link to={`/book/${bookId}`}>
        <div className="card p-6 bg-base-100 shadow-xl">
        <figure className="bg-[#F3F3F3] py-6"><img src={image} className="h-[166px] w-[130px] rounded-lg" alt="Shoes" /></figure>
        <div className="">
            <div className="flex gap-2 my-4">
                <h2 className="py-2 px-4 rounded-full font-medium text-[#23BE0A] bg-[#23BE0A0D]">{tags[0]}</h2>
                <h2 className="py-2 px-4 font-medium rounded-full text-[#23BE0A] bg-[#23BE0A0D]">{tags[1]}</h2>
            </div>
          <h2 className="text-2xl font-bold mb-4">{bookName}</h2>
          <p className='font-medium border-b-2 border-dotted pb-4'>By : {author}</p>
         <div className='mt-4 flex justify-between'>
            <h2 className='text-lg font-medium'>{category}</h2>
            <div className='flex gap-2 items-center'>
            <h2 className='text-lg font-medium'>{rating}</h2>
            <img className='h-5 w-5' src={Rate} alt="" />
            </div>
         </div>
        </div>
      </div>
       </Link>
    );
};


Item.propTypes = {
    item: PropTypes.object
}
export default Item;