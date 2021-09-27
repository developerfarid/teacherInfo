
import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import './Card.css';


const Card = (props) => {

  const { salary, handleRemove } = props
  // const {key}= props.salary.key
    const totalSalary = salary.reduce((pre, crr) => pre + crr.salary, 0)
    return (
      <div>
        <div className="card-3 p-2 mb-4 border border-danger rounded">
        <h3 className="text-light">Total Teacher Add: {salary.length}</h3>
            <h3  className="text-light"> Total Salary Add: { totalSalary }</h3>
       </div>
            {
          props.salary.map(item => <CardInfo handleRemove={handleRemove}  key={item.key} item={item} /> )
        }
        <button className="btn-regular w-100">Clear</button>
        </div>
    );
};

export default Card;