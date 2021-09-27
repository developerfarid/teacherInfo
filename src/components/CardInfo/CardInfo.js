import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CardInfo = (props) => {
  const { item } = props
  console.log(item.key);
    return (
        <div>
            <div className="card card2 mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img  src={item.img} className="img-fluid" alt="..." />
                  </div>
                  <div className="col-md-8  d-flex align-items-center">
                    <div className="card-body">
                        <h5 className="card-title">{item.name} <FontAwesomeIcon onClick={()=> props.handleRemove(item)} className="card-icon" icon={faTimes} /></h5>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default CardInfo;