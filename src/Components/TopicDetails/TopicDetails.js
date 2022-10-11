import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const TopicDetails = () => {
    const topics = useLoaderData();
   //console.log(topics);
 
    return (
        <div>
            <h2>Quiz for: {topics.data.name}</h2>
              {
                topics.data.questions.map(ques=><Questions
                key={ques.id}
                ques={ques}
                ></Questions>)
              }
          
        </div>
    );
};

export default TopicDetails;