import { useEffect, useState } from "react"

function PostsLoader() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Http Error")
        }
        return res.json()
      })
      .then((data) => setData(data.slice(0, 10)))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <div className="header">Top Posts</div>
      <div className="posts-wrapper">
        {data ? (
          data.map((post, index) => (
            <div className="post" key={index}>
              <div className="post-title">{post.title}</div>
              <div className="post-body">{post.body}</div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  )
}

export default PostsLoader
