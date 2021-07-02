import React, {useState, useEffect} from 'react'
import Comments from './Comments';

const PostList = () => {
    const [postList, setPostList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)

useEffect(() => {
     fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`)
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            setPostList(data)
          })
}, [currentPage])

    

    return (
        <div>
            {postList.map((post)=>{
                return<div>
                    <p>Title:{post.title}</p>
                    <Comments  postId={post.id} />
                </div>
              
            })

            }
        </div>
    )
}

export default PostList
