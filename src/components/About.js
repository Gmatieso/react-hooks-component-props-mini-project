import React from 'react'

function About({about,Image = "https://via.placeholder.com/215"}) {
    
  return (
    <div>
        <aside>
            <img src={Image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    </div>  
  )
}

export default About