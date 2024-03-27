

const WishLocalStorage = (data) => {
    const saveBook = JSON.parse(localStorage.getItem("BookRead")) || [];
    const wishList = JSON.parse(localStorage.getItem('WishList')) || [];
    const isExist = saveBook.find(book => book.bookId == data.bookId)
    if(!isExist){
        const isWish = wishList.find(book => book.bookId == data.bookId);
        if(!isWish){
            wishList.push(data);
            localStorage.setItem("WishList", JSON.stringify(wishList))
           return true;
        }
        else{
           return false;
        }
    }
    else{
        return 'Book';
    }
};

export const WishBook = () => {
    const books = JSON.parse(localStorage.getItem("WishList")) || [];
    return books;
 }

export default WishLocalStorage;