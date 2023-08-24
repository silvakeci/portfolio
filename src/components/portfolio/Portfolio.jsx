import React from 'react'
import './portfolio.css'
const Portfolio=()=>{
    return (
        <section id='portfolio'>
            <h5>Me Recent Work</h5>
            <h2>Portfolio</h2>
            <div className=" container portfolio__container">
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <h3>This is portfolio item title</h3>
                        <a href="" className='btn'>GitHub</a>
                        <a href="" className='btn btn-primary'>live demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio;