import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import "./Option.css";


const Option = ({ option, correctAnswer }) => {
    const { options } = option;
    //console.log(option);

    const handleChange = (e) => {
        e.preventDefault()
        const value = e.target.value

        // console.log(value)
        if (value === correctAnswer) {
            //console.log(true)
            toast("Correct Answer!")

        }
        else{
            toast("Incorrect Answer!") 
        }
    }
    return (
        <>
            <div className='btn'>
                <button onChange={handleChange}>

                    <input type="radio" value={option} />
                    {option}

                </button>

            </div>

            <ToastContainer />
        </>
    );
};

export default Option;