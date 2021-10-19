import React, { useEffect, useState } from 'react';
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'
import './Home.css'
import HomeCard from './HomeCard/HomeCard';

const Home = () => {

    const [doctors, setDoctor] = useState([]);

    useEffect(() => {
        fetch('./FakeData.json')
            .then(res => res.json())
            .then(data => setDoctor(data));
    }, [])

    return (
        <div>
            <div className="container my-3 shadow p-3">
                {/* Slider */}
                <div>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={banner1} className="d-block img-fluid image" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={banner2} className="d-block img-fluid image" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={banner3} className="d-block img-fluid image" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card */}
                <h1 className="text-center">Our Doctors</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        doctors.slice(0, 6).map(doctor => <HomeCard
                            key={doctor.id}
                            doctor={doctor}
                        ></HomeCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;