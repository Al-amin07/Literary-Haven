import book from '../images/book.png'

const Banner = () => {
    return (
        <div className='my-8 rounded-xl flex justify-between h-[550px] bg-[#1313130D] px-[120px]'>
            <div className='flex flex-col justify-center'>
                <h2 className="text-[56px] font-bold">Books to freshen up <br /> your bookshelf</h2>
                <button className='btn bg-[#23BE0A] text-white w-1/3 mt-3'>View The List</button>
            </div>
            <div className='flex items-center'>
                <img src={book} alt="" />
            </div>
        </div>
    );
};

export default Banner;