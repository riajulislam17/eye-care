import React from 'react';
import { Link } from 'react-router-dom';
import './DoctorsCard.css'

const DoctorsCard = (props) => {
    const { id, name, img } = props.doctor;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top img-fluid doctorsCard" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><span className="fw-bold">Doctor Name: </span>{name}</h5>
                        <Link to={`/appointment/${id}`}><button className="bg-dark p-2 fw-bold text-white">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsCard;