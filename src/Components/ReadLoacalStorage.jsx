


const ReadLoacalStorage = (data) => {

 const saveBook = JSON.parse(localStorage.getItem("BookRead")) || [];
 const existBook = saveBook.find(item => item.bookId == data.bookId)
//  return [saveBook , existBook];
 if(!existBook){
    
    saveBook.push(data);
    localStorage.setItem("BookRead", JSON.stringify(saveBook))
   alert('Successfully Added')
 }
 else{
   // toast("Book is Already Exists in Read List")
   alert('You Have Already read this Book!!!')
 }

};

export const ReadBook = () => {
   const books = JSON.parse(localStorage.getItem("BookRead")) || [];
   return books;
}

export default ReadLoacalStorage;