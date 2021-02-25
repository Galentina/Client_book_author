import styles from '@/pages/index.less';
import { connect } from 'umi';
import React, {useEffect} from "react";
import TableAuthors from '@/pages/author/tableAuthors';
import AddNewAuthor from "@/pages/author/addNewAuthor";

function Author(props: any) {

  const {authorsList = []} = props;
  useEffect(()=>{props.getAuthors()}, []);

  return (
    <div>
      <h1 className={styles.title}>Authors</h1>
      <div className={styles.div_center}>
       <table style={{border: "none"}}>
         <AddNewAuthor />
       </table>
      <table>
        <thead>
        <tr>
          <td>Name</td>
          <td>Date of creation</td>
          <td>Delete author</td>
        </tr>
        </thead>
        <tbody>
          {authorsList.map((el:any) => <TableAuthors author={el} key={el._id}/>)}
        </tbody>
      </table>
      </div>
    </div>
  );
}

const mapStateToProps = (state:any) => ({
  authorsList: state.Author.list,
});

const mapDispatchToProps = (dispatch: any) => ({
  getAuthors: () => dispatch({ type: 'Author/getAuthors' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Author);
