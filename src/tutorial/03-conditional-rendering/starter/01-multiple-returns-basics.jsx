import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);

  }, []);

  if(isLoading){
    return (
      <section>
  
        <h2>Loading...</h2>
      </section>
  );

  }

  return <h1>It is not Loading</h1>
};
export default MultipleReturnsBasics;
