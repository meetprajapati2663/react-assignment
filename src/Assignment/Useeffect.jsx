import React, { useEffect, useState } from 'react'

function Useeffect() {
     const [post, setPost] = useState(null);

  useEffect(() => {
   
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div>
          <h2>Fetched Post</h2>
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  )
}

export default Useeffect