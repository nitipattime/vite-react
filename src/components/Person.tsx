import React from 'react';
import axios from 'axios';

const URL = "https://christmas-backend.vercel.app/api/detail";

function Test() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(URL).then((response) => {
      setPost(response.data);
    });
  }, []);
  console.log(post)

  // if (!post) return null;

  // return (
  //   <div>
  //     <h1>{post.T1}</h1>
  //     <p>{post.T2}</p>
  //   </div>
  // );
}

export default class PersonList extends React.Component {
  state = {
    persons: [],
    detailT1: '',
    detailT2: '',
    array1:[],
    array2:[],
  }

    //   https://www.digitalocean.com/community/tutorials/react-axios-react
  componentDidMount() {
    void axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })

      void axios
      .get(`https://christmas-backend.vercel.app/api/detail`)
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        // console.log(res.data.T1);
        const detailT1 = res.data.T1;
        this.setState({ detailT1 });
        const detailT2 = res.data.T2;
        this.setState({ detailT2 });
      });

      void axios
      .get(`https://christmas-backend.vercel.app/api/array`)
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        // console.log(res.data.T1);
        const array1 = res.data.array;
        this.setState({ array1 });
        const array2 = res.data.struct;
        this.setState({ array2 });
      });

    // axios.get('https://christmas-backend.vercel.app/api/detail')
    // .then(res => {
    //   const detail = res.data;
    //   this.setState({ detail });
    // })

  // const url = 'https://christmas-backend.vercel.app/api/detail';

  // axios.get(url).then((response) => {
  //   // handle success
  //   const detail = response.data;
  //   this.setState({detail});
  // })
  
  }


  render() {
    return (
        <ul>
        <h3>Call API</h3>
        {/* {Test()} */}
        <p>T1 : {this.state.detailT1}</p>
        <p>T2 : {this.state.detailT2}</p>
        {/* <p>array1 : {this.state.array1}</p>
        <p>array2 : {this.state.array2}</p> */}
        {
          this.state.array1
          .map(array1 =>
            <div>
              <hr />
              <p >array1 : {array1}</p>
            </div>
            )
        }
        {
          this.state.array2
          .map(array2 =>
            <div>
              <hr />
              <p >array2 : {array2['t1']}</p>
              <p >array2 : {array2['t2']}</p>
            </div>
            )
        }
        
        {
          this.state.persons
            .map(person =>
                <div>
                    <hr />
                    <p key={person['id']}>ID : {person['id']}</p>
                    <p key={person['id']}>Name : {person['name']}</p>
                    <p key={person['id']}>Email : {person['email']}</p>
                    <p key={person['id']}>Phone : {person['phone']}</p>
                    <p key={person['id']}>Address : street {person['address']['street']}, city {person['address']['city']}</p>
                    <p key={person['id']}>Website : {person['website']}</p>
                </div>
            )
        }
      </ul>
    )
  }
}