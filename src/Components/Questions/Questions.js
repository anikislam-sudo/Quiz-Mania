import React from 'react';
import Option from '../Option/Option';
import "./Questions.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ ques }) => {
    const { question, options, correctAnswer } = ques;
    console.log("anik", correctAnswer)

    const handleCorrectAnswer = () => {
        // const {question,options,correctAnswer}=ques;
        toast(correctAnswer)


    }
    return (
        <>
            <div className='question-container'>


                <h4>{question}</h4>

                <div className='eye'>

                    <button onClick={handleCorrectAnswer}> <FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
                </div>



                {options.map(option => <Option
                    option={option} correctAnswer={correctAnswer}
                ></Option>)
                }

            </div>
            <ToastContainer></ToastContainer>
        </>

    );
};

export default Questions;