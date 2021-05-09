import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users,setUsers] = useState([]);

  const getData = async()=>{
    const response = await fetch(url)
    const data = await response.json()
    //setUsers(data)
    //The above thing will result in an infinite loop as setUsers causes a rerender and after 
    //every renrender runs a useEffect which again calls getData which again triggers a rerender
    //by calling setUsers

    //So we use the second parameter to only run on initial rerender
    setUsers(data)
    // console.log(data);
  }
  useEffect(()=>{
      getData();
  },[])
  return <>
    <h3>Github users</h3>
    <ul className="users">
      {
        users.map(user=>{
          const {id,avatar_url,login} = user;
            return <li key={id}>
                <img src={avatar_url} alt="" />
                <div>
                  <h4>
                    {login}
                  </h4>
                </div>
            </li>;
        })
      }
    </ul>
  </>;
};

export default UseEffectFetchData;
