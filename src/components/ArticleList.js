import React from 'react'
import Article from './Article'
// import blogData from '../data/blog'

function ArticleList({posts}) {

  // JS code to loop through blogData and display it in form of articles 
  // when using map to loop we must pass in an id, coz that is the syntax .
    const  article = posts.map((blogs) => (
      <Article 
      key = {blogs.id} 
      title = {blogs.title}  
      name = {blogs.name} 
      preview = {blogs.preview} 
      />
  ))

  return (
    <div>
        <main > {article}</main>
    </div>
  )
}

export default ArticleList