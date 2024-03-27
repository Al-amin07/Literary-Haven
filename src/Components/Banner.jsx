import { useNavigate } from 'react-router-dom';
import book from '../images/book.png'

const Banner = () => {

    const navigate  = useNavigate();

    const handleViewList = () => {
        navigate('/list')
    }
    return (
        <div className='my-8 rounded-xl flex flex-col lg:flex-row lg:justify-between lg:h-[550px] bg-[#1313130D] py-6 px-4 lg:px-[120px]'>
            <div className='flex flex-col justify-center'>
                <h2 className="text-3xl lg:text-[56px] leading-normal font-bold">Books to freshen up <br /> your bookshelf</h2>
                <button onClick={handleViewList} className='btn bg-[#23BE0A] text-white w-1/3 mt-3'>View The List</button>
            </div>
            <div className='flex items-center'>
                <img src={book} alt="" />
            </div>
        </div>
    );
};

export default Banner;