import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import './Appointment.css'

const Appointment = (props) => {
    const { doctorId } = useParams();
    //const { name, qualifications, designation, img, chamberTime, roomNumber } = props.doctor;

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/FakeData.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const ExactIteam = data.filter((allData) => allData.id === doctorId);

    return (
        <div>
            <div className="container my-3 shadow p-3">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={ExactIteam[0]?.img} className="img-fluid rounded-start images" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><span className="fw-bold">Name: </span>{ExactIteam[0]?.name}</h5>
                                <h5 className="card-title"><span className="fw-bold">Qualification: </span>{ExactIteam[0]?.qualification}</h5>
                                <h5 className="card-title"><span className="fw-bold">Designation: </span>{ExactIteam[0]?.designation}</h5>
                                <h5 className="card-title"><span className="fw-bold">Chamber Time: </span>{ExactIteam[0]?.chamberTime}</h5>
                                <h5 className="card-title"><span className="fw-bold">room Number: </span>{ExactIteam[0]?.roomNumber}</h5>
                                <p className="card-text"><small className="text-muted"><button className="bg-dark p-2 fw-bold text-white">Appointment</button></small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;