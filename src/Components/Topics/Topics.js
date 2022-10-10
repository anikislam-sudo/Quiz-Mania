import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import"./Topics.css";
const Topics = () => {
    const topics = useLoaderData();
   
    return (
        <div className='card-container'>
            {
                topics.data.map(topic=><Topic
                key={topic.id}
                topic={topic}></Topic>
                )
            }
         
        </div>
    );
};

export default Topics;