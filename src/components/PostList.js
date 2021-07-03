import React, {useState, useEffect} from 'react'
import Comments from './Comments';

const PostList = () => {
    const [postList, setPostList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalNrPages, setTotalNrPages] = useState(1); 
    const [postPerPage, setPostPerPage] = useState(10);

useEffect(() => {
     fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`)
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            setPostList(data)

            
          })
}, [currentPage])

const pageNumberList = [];
for (let i = 1; i < totalNrPages; i++) {
  pageNumberList.push(i);
}

    return (
        <div >
            {postList.map((post)=>{
                return<div>
                    <p>Title:{post.title}</p>
                    <Comments  postId={post.id} />
                </div>
            }) }
            <div>
		  {
			  pageNumberList.map((pageNumber)=>{
				  return  <button onClick={(()=>{setCurrentPage(pageNumber)})}>{pageNumber}</button>
			  })
		  }
	  </div>
        </div>
    )
}

export default PostList
