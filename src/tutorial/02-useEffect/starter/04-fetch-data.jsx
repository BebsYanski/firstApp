import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users';

const FetchData = () => {

  const [users, setUsers] = useState([]);

  const url = 'https://api.github.com/users';

  /* useEffect(() => {
    console.log('Hello');
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
  }, ['']); */
  
  useEffect(() => {
    console.log('Hello');
    const fetchData = async () =>{
      try {
         let response = await fetch(url)
         console.log(response.status)
         console.log(response.statusText)
         let users = await response.json()
        //  console.log(users);
        setUsers(users)
      } catch (error) {
        console.log(error);
      }
     
    };
    fetchData();
  }, []);

  return (
    <section>
      <h2>github Users</h2>
      <ul className="users">
        {users.map((user) => {
          console.log(user);
          const [id, login, avatar_url, html_url] = user;
          return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h5>{login}</h5>
              <a href={html_url}>profile</a>
            </div>
          </li>)
        })}
      </ul>
    
    </section>
  )
  
};
export default FetchData;
