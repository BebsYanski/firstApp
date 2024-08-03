import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';


const MultipleReturnsFetchData = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if(!response.ok){
          setIsError(true);
          setIsLoading(false);
          // return new Error;
        }
        let user = response.json()
        console.log(user)
        setUser(user);
        
      } catch (error) {
        console.log(error);
      }
        setIsLoading(false);
    };
    fetchData();
  }, []);


  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1> There was an Error...</h1>
  }


  const {avatar_url,name,company,bio} = user;
  return (
    <section>
      <h2>Fetch Data </h2>
      <div>
        <img style={{width: '150px', borderRadius: '25px'}} src={user.avatar_url} alt={user.name} />
        <h2>{user.name}</h2>
        <h4>Works at {user.company}</h4>
        <p>{user.bio}</p>
        </div>

    </section>
);
};
export default MultipleReturnsFetchData;
