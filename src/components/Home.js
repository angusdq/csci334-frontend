import React, { useState, useEffect } from 'react';

export default function Home() {
  const[authors, setAuthor] = useState([])

  const handleClick = () => {
    alert(authors.name)
  }
/*
  useEffect(() => {
    const var = async () => {
    fetch("http://localhost:8080/author/2")
    .then(response => {
      if (!response.ok) { 
          alert('Failed');
          throw response
      }
      return response.json()
  })
    .then(json => {
      let authors = json;
      setAuthor(authors);
      console.log(authors.map())
    })
  },[])
*/

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('http://localhost:8080/systemadmin/1');//Change this url to whatever you are testing 
    const json = await response.json();
    setAuthor(json);
  };

  fetchData();
}, []);

  return (
    <div>
      <ul>
        {authors.map(item => ( //This map is causing errors :(
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}


