import styles from '@/pages/index.less';
import { connect } from 'umi';
import React, {useEffect} from "react";
import TableBooks from '@/pages/book/tableBooks';
import AddNewBook from "@/pages/book/addNewBook";

function Book(props: any) {

  const {bookList = []} = props;
  useEffect(()=>{props.getBooks()}, []);

  return (
    <div>
      <h1 className={styles.title}>Books</h1>
      <div className={styles.div_center}>
       <table style={{border: "none"}}>
         <AddNewBook />
       </table>
      <table>
        <thead>
        <tr>
          <td>Name</td>
          <td>Date of creation</td>
          <td>Cost</td>
          <td>Price</td>
          <td>Book status</td>
          <td>Delete Book</td>
        </tr>
        </thead>
        <tbody>
          {bookList.map((el:any) => <TableBooks book={el} key={el._id}/>)}
        </tbody>
      </table>
      </div>
    </div>
  );
}

const mapStateToProps = (state:any) => ({
  bookList: state.Book.list,
});

const mapDispatchToProps = (dispatch: any) => ({
  getBooks: () => dispatch({ type: 'Book/getBooks' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);
