import axios from 'axios';


export async function QueryCreateAuthors(payload: any): Promise<any> {
  console.log(payload, "yes")
  return axios({
    method: 'POST',
    url: 'http://localhost:5000/author',
    data: payload,
  })
    .then((res) => {
      console.log(payload, "here")
      return res.data;
    })
    .catch((error) => {
      console.log(payload, "there")
      return error;
    });
}


export async function QueryDeleteAuthors(payload: any): Promise<any> {
  console.log(payload)
  return axios({
    method: 'DELETE',
    url: `http://localhost:5000/author/${payload}`
  })
    .then((res) => {
      return res.data;})
    .catch((error) => {
      console.log("something is wrong!")
      return error;
    });
}
