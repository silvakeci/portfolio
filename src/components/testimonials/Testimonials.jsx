import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
    {
        id:1,
        avatar:AVTR1,
        name: 'Tina',
        review:' Ernest jhf;hgsdf godgg  fgdlgfg kfjgkgj  dgfgdigrigyu rgrfggloe\n' +
            '                            jhduhgn hngjhsng jdfhguosirsuyhf ighdsrjghld jhgjugh g\n' +
            '                            ujhujyhgoshgoh jghsuyushuhgrsguh  fjhgohgosh'
    },
    {
        id:2,
        avatar:AVTR2,
        name: 'Tina',
        review:' Ernest jhf;hgsdf godgg  fgdlgfg kfjgkgj  dgfgdigrigyu rgrfggloe\n' +
            '                            jhduhgn hngjhsng jdfhguosirsuyhf ighdsrjghld jhgjugh g\n' +
            '                            ujhujyhgoshgoh jghsuyushuhgrsguh  fjhgohgosh'
    },
    {
        id:3,
        avatar:AVTR3,
        name: 'Tina',
        review:' Ernest jhf;hgsdf godgg  fgdlgfg kfjgkgj  dgfgdigrigyu rgrfggloe\n' +
            '                            jhduhgn hngjhsng jdfhguosirsuyhf ighdsrjghld jhgjugh g\n' +
            '                            ujhujyhgoshgoh jghsuyushuhgrsguh  fjhgohgosh'
    },
    {
        id:4,
        avatar:AVTR4,
        name: 'Tina',
        review:' Ernest jhf;hgsdf godgg  fgdlgfg kfjgkgj  dgfgdigrigyu rgrfggloe\n' +
            '                            jhduhgn hngjhsng jdfhguosirsuyhf ighdsrjghld jhgjugh g\n' +
            '                            ujhujyhgoshgoh jghsuyushuhgrsguh  fjhgohgosh'
    }
]
const Testimonials=()=>{
    return (
        <section id='testimonial'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper  className="container testimonials__container"
                // install Swiper modules
                     modules={[ Pagination]}
                     spaceBetween={40}
                     slidesPerView={1}
                     pagination={{ clickable: true }}
            >
            {
                data.map(({id, avatar, name,review})=>{
                    return(

                            <SwiperSlide key={id} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt='Avatar 1'/>
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>

                    )
                })
            }
            </Swiper>
        </section>
    )
}

export default Testimonials;