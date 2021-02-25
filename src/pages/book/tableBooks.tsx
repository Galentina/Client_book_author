import React from "react";
import {connect} from "umi";


function TableBooks(props: any) {
  const {book}=props;

  const deleteBook = (id: any) => {
    console.log(id)
    props.deleteBookById(id);
  }

  return(
  <tr style={{color: 'black'}}>
    <td>{book.name}</td>
    <td>{book.createdAt}</td>
    <td>{book.cost} $</td>
    <td>{book.sale} $</td>
    <td>{book.status}</td>
    <td><button onClick={()=>deleteBook(book._id)}>Delete</button></td>

  </tr>
  )
}
const mapStateToProps = (state:any) => ({
  bookList: state.Book.list,
});

const mapDispatchToProps = (dispatch: any) => ({
  deleteBookById: (payload: any) => dispatch({ type: 'Book/delBook', payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableBooks);
