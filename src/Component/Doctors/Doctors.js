import React from 'react';
import { useEffect, useState } from 'react';
import DoctorsCard from './DoctorsCard';

const Doctors = () => {

    const [doctors, setDoctor] = useState([]);

    useEffect(() => {
        fetch('./FakeData.json')
            .then(res => res.json())
            .then(data => setDoctor(data));
    }, [])

    return (
        <div>
            <div className="container my-3 shadow p-3">
                <h1 className="text-center">Our Doctors</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        doctors.map(doctor => <DoctorsCard
                            key={doctor.id}
                            doctor={doctor}
                        ></DoctorsCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Doctors;