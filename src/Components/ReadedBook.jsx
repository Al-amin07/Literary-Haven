import loca from '../images/loca.png'
import person from '../images/person.png'
import page from '../images/page.png'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
const ReadedBook = ({book}) => {
    const {bookName, bookId,  author, image, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;

    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/book/${bookId}`)
    }

    return (
      <div className="flex flex-col lg:flex-row gap-8 my-12 border-2 p-6 rounded-2xl">
        <div className="bg-[#F3F3F3] py-8 px-16 rounded-xl">
            <img className=" h-[172px] w-3/4 mx-auto lg:w-[120px]" src={image} alt="" />
        </div>
        <div>
            <h2 className="text-3xl font-bold">{bookName}</h2>
            <h2 className="font-medium">By : {author}</h2>
         <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-8">
         <div className="flex gap-3 items-center my-3">
                <h2 className="font-medium">Tags : </h2>
                <h2 className="py-2 px-4 rounded-full font-medium text-[#23BE0A] bg-[#23BE0A0D]">#{tags[0]}</h2>
                <h2 className="py-2 px-4 rounded-full font-medium text-[#23BE0A] bg-[#23BE0A0D]">#{tags[1]}</h2>

            </div>
            <div className="flex items-center gap-2">
                <img src={loca} alt="" />
                <h2>Year of Publishing : </h2>
                <h2>{yearOfPublishing}</h2>
            </div>
       
         </div>
         <div className='flex flex-col lg:flex-row gap-2 lg:gap-12 border-b-2 pb-5 '>
            <div className="flex items-center gap-2  text-[#13131399]">
                <img src={person} alt="" />
                <h2>Publisher : </h2>
                <h2>{publisher}</h2>
            </div>
            <div className="flex items-center gap-2 text-[#13131399]">
                <img src={page} alt="" />
                <h2>Page : </h2>
                <h2>{totalPages}</h2>
            </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-5 mt-4'>
                <button className='text-[#32A8FF] bg-[#E0EEFF] rounded-full py-3 px-6 font-bold'>Category : {category}</button>
                <button className='text-[#FFAC33] bg-[#FFF3E0] rounded-full py-3 px-6 font-bold'>Rating : {rating}</button>
                <button onClick={handleViewDetails} className='text-white bg-[#23BE0A] rounded-full py-3 px-6 font-bold'>View Details</button>
            </div>
        </div>
      </div>
    );
};

ReadedBook.propTypes = {
    book: PropTypes.object
}

export default ReadedBook;