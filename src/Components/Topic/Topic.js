import React from 'react';
import "./Topic.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const{id,name,logo,total}= topic;
  
        return (
        <div className='card'>
            <img src={logo}/>
            <h2>{name}</h2>
            <h2>Question: {total}</h2>
            <Link to={`/topic/${id}`}>
            <button>
           Lets go
                <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon>
                </button>
                </Link> 
        </div>
    );
};

export default Topic;