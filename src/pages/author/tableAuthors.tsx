import React from "react";
import {connect} from "umi";


function TableAuthors(props: any) {
  const {author}=props;

  const deleteAuthor = (id: any) => {
    console.log(id)
    props.deleteAuthorById(id);
  }

  return(
  <tr style={{color: 'black'}}>
    <td>{author.name}</td>
    <td>{author.createdAt}</td>

    <td><button onClick={()=>deleteAuthor(author._id)}>Delete</button></td>

  </tr>
  )
}
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: any) => ({
  deleteAuthorById: (payload: any) => dispatch({ type: 'Author/delAuthors', payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableAuthors);
