import React,{useState, useEffect} from 'react'

const Comments = ({postId}) => {

    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        )
           .then((response) => response.json())
           .then((data) =>{
               console.log(data)
               setCommentList(data)
             })
   }, [])
   

    return (
        <div>
               {commentList.map((comments)=>{
                return<p>{comments.name}</p>
              })
 }

 
        </div>
    )
}

export default Comments
