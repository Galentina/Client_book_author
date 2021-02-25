import React, {useState} from "react";
import styles from '@/pages/index.less';
import {connect} from "umi";



function AddNewBook(props: any){


  const [newBook, setNewBook] = useState('');
  const [bookCost, setBookCost] = useState('');
  const [bookSale, setBookSale] = useState('');
  const [status, setStatus] = useState('');

  const addNewBook =(name: string, cost: number, sale: number, status: string)=>{
    const book = {name: name, cost: cost, sale: sale, status: status};
    props.addBooks(book);
    setNewBook('');
    setBookCost('');
    setBookSale('');
    setStatus('');
  }


  return(
    <tbody>
    <tr ><td colSpan={2} style={{border: "none"}}><h2>Insert a new book:{" "}</h2></td></tr>
      <tr className={styles.left}>
        <td style={{border: "none"}}>Name: </td><td style={{border: "none"}}>
        <input value={newBook} onChange={(e)=>setNewBook(e.target.value)} placeholder={'Insert a new book'}/></td>
      </tr>
      <tr className={styles.left}>
        <td style={{border: "none"}}>Cost: </td><td style={{border: "none"}}>
        <input type={'number'} value={bookCost} onChange={(e)=>setBookCost(e.target.value)}/></td>
      </tr>
      <tr className={styles.left}>
        <td style={{border: "none"}}>Price: </td><td style={{border: "none"}}>
        <input type={'number'} value={bookSale} onChange={(e)=>setBookSale(e.target.value)}/></td>
      </tr>
      <tr className={styles.left}>
        <td style={{border: "none"}}>Status: </td><td style={{border: "none"}}>
        <input value={status} onChange={(e)=>setStatus(e.target.value)}/></td>
      </tr>

      <tr className={styles.right}>
        <td colSpan={2} style={{border: "none"}}>
          <button onClick={()=>addNewBook(newBook, Number(bookCost), Number(bookSale), status)}>Submit</button>
        </td>
      </tr>
    </tbody>
  );
}


const mapStateToProps = (state:any) => ({
  bookList: state.Book.list,
});

const mapDispatchToProps = (dispatch: any) => ({
  getBooks: () => dispatch({ type: 'Book/getBooks' }),
  addBooks: (book: any ) => dispatch({ type: 'Book/createBooks', payload: book})
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewBook);
