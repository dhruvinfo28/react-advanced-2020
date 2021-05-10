import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    const response = await fetch(url);
    const user = await response.json();
    setUser(user);
    setLoading(false);
  }

  useEffect(() => {
    // fetchData();
    fetch(url)
      .then(response =>{ 
        if(response.status>=200 && response.status<=299)
          return response.json()
        else
          {
            throw new Error('Not found')
          }
      })
      .then(user=> {       
          setUser(user);
          setLoading(false);
          console.log(user)
      })
      .catch(err=>{
        setIsError(true);
        setLoading(false);
        console.log(err)
      })
  }, [])

  if (loading) {
    return <h2>Loading...</h2>;
  } 
  if(isError){
    return <h2> There was an error </h2>
  }
    return <>
      <div>{user.login}</div>
    </>;
  
};

export default MultipleReturns;
