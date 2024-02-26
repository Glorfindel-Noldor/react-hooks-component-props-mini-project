import React from "react";
const ifNoDate = "January 1, 1970"

function Article({ title, date=ifNoDate, preview, minutes }){
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{minutes}: minutes</p>
        </article>
    );
}

export default Article;
