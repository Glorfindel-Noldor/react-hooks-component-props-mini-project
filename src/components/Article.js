import React from "react";


const IFNoDate = "January 1, 1970"
function Article({post}){
    return(
        <article>
            <h3>{post.title}</h3>
            <small>{post.date}</small>
            <p>{post.preview}</p>
            <p>{post.minutes} minutes</p>
        </article>
    )
}
export default Article;