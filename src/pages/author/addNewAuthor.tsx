import React, {useState} from "react";
import styles from '@/pages/index.less';
import {connect} from "umi";



function AddNewAuthor(props: any){

  const [newAuthor, setNewAuthor] = useState('');

  const addNewAuthor =(name: string)=>{
    props.addAuthors({name: name});
    setNewAuthor('');
  }


  return(
    <tbody>
    <tr ><td colSpan={2} style={{border: "none"}}><h2>Insert a new author:{" "}</h2></td></tr>
      <tr className={styles.left}>
        <td style={{border: "none"}}>Name: </td><td style={{border: "none"}}>
        <input value={newAuthor} onChange={(e)=>setNewAuthor(e.target.value)} placeholder={'Insert a new author'}/></td>
      </tr>

      <tr className={styles.right}>
        <td colSpan={2} style={{border: "none"}}>
          <button onClick={()=>addNewAuthor(newAuthor)}>Submit</button>
        </td>
      </tr>
    </tbody>
  );
}


const mapStateToProps = (state:any) => ({
  authorList: state.Author.list,
});

const mapDispatchToProps = (dispatch: any) => ({
  getAuthors: () => dispatch({ type: 'Author/getAuthors' }),
  addAuthors: (payload: any ) => dispatch({ type: 'Author/createAuthors', payload})
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewAuthor);
