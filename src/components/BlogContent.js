import React from "react";

function BlogContent(props) {
     if(!props.isPublished){
        return null;
     }
     else{
      return( <>
        <div id="blog-content">{props.articleText}</div>
        <p>props.minutesToRead</p>
        </>
        );
     }
}



export default BlogContent;
