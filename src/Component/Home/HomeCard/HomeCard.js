import React from 'react';
import './HomeCard.css'

const HomeCard = (props) => {
    const { name, img, designation, chamberTime } = props.doctor;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top doctorImage img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><span className="fw-bold">Doctor Name: </span>{name}</h5>
                        <h5 className="card-title"><span className="fw-bold">Designation: </span>{designation}</h5>
                        <h5 className="card-title"><span className="fw-bold">Chamber Time: </span>{chamberTime}</h5>
                        <span className="fw-bold"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;