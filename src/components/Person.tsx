import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

    //   https://www.digitalocean.com/community/tutorials/react-axios-react
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
        <ul>
        <h3>Call API</h3>
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