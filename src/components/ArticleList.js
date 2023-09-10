
import React from "react";
import Article from "./Article";
import {blogData} from '../data/blog.js'
function ArticleList(){

const ledger = blogData.posts.map(post =>  <Article key={post.id} post={post} /> )


    return(
        <main>
        {ledger}
        </main>
    )
}

export default ArticleList;