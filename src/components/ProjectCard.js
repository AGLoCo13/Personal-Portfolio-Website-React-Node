import React from 'react'
import {Col} from "react-bootstrap"
// //import {Link} from "react-router-dom"; //Import Link from React Router Dom
// import {Link} from "react-router-dom"
export const ProjectCard = ({title , description , imgUrl , projectUrl}) => {
  return (
    <Col sm={6} md={4}>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
            <img src={imgUrl} alt={title} style={{maxWidth:'100%', height:'50%'}}/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
        </a>
    </Col>
  )
}
