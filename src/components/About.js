import React from 'react'

function About({Image = "https://via.placeholder.com/215",about}) {
    
  return (
    <div>
        <aside>
            <img src={Image} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    </div>  
  )
}

export default About