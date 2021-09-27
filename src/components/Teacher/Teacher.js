
import { faCheckCircle,faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Teacher.css";

const Teacher = (props) => {
    const { name, position, qualification, department, salary, publications, img, isActive } = props.teacher;
    const { teacher } = props
    console.log(props.teacher.name);
    return (
        <div className="col-md-4">
        <div className="card card-my  py-4 ">
                <img src={img } className="card-img-top" alt="..." />
        <div className="card-body  text-center px-2 mt-3">
                    <h3 className="card-title">{name }</h3>
                    <h4>{position }</h4>
                    <h4>Department of {department }</h4>
                    <h4>{qualification}</h4>
                    <h4>Salary:{salary}</h4>
                    <h4>Total Publications: {publications}</h4>
                </div>
                <div className="card-footer mx-0 px-0 ">
                    { isActive? <button className="btn-regular w-100"><FontAwesomeIcon className="btn-icon" icon={faCheck} />Already Added </button>: <button onClick={() => props.hendleAddSalary(teacher)} className=" btn btn-regular w-100 "> <FontAwesomeIcon className="btn-icon" icon={faCheckCircle} />Add to Card</button> }
                    <ul className="d-flex mt-4 social justify-content-center">
                        <li><a href="/"><i className="fab fa-facebook    "></i></a></li>
                        <li><a href="/"><i className="fab fa-twitter    "></i></a></li>
                        <li><a href="/"><i className="fab fa-youtube    "></i></a></li>
                        <li><a href="/"><i className="fab fa-instagram    "></i></a></li>
                        <li><a href="/"><i className="fab fa-whatsapp    "></i></a></li>
                        <li><a href="/"><i className="fab fa-linkedin    "></i></a></li>
                    </ul>
                </div>
            </div>
        </div>    
    );
};

export default Teacher;