import React from 'react'
import './about.css'
import ME from '../../assets/s2.png'
import {LiaAwardSolid} from 'react-icons/lia'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'
const About=()=>{
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About me</h2>
            <div className="container about__container">
                <div className='about__me'>
                  <div className="about__me-image">
                      <img src={ME} alt='About Image'/>
                  </div>
                </div>

                <div className="about__content">
                  <div className="about__cards">
                      <article className="about__card">
                          <LiaAwardSolid className="about__icon"/>
                         <h5>Experience</h5>
                          <small>1+ Year Working</small>
                      </article>
                      <article className="about__card">
                          <FiUsers className="about__icon"/>
                          <h5>Clients</h5>
                          <small>10+ happy clients</small>
                      </article>
                      <article className="about__card">
                          <AiFillFolderOpen className="about__icon"/>
                          <h5>Project</h5>
                          <small>8 Completed</small>
                      </article>
                  </div>

                    <p>
                        hfdjhgea efgdls fjdsf ;yr sifh rehgfrfhgerhg irghls tjrith edf  ijrfl gsi fsfjsiru u rj rgrg
                        hguhfirkgnj kiehwiolskrukr ikfrgikuj twijutw;ujewe  tridhtfler
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>

    )
}

export default About;