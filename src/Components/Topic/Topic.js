import React from 'react';
import "./Topic.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

const Topic = ({topic}) => {
    const{name,logo,total}= topic;
    return (
        <div className='card'>
            <img src={logo}/>
            <h2>{name}</h2>
            <h2>Question: {total}</h2>
            <button  >
           Lets go
                <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Topic;