import React from 'react'
import './subArticle.css'

const SubArticle = () =>{
    return(
       <section className="subArticle">
        <div className="article wrapper">
            <h3>A Price To Suit Everyone</h3>
            <p className='subText'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
            parturient montes, nascetur ridiculus.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
            parturient montes, nascetur ridiculus.
            </p>
            <p className='price'>$40</p>
            <p className='text2'>UI Design Kit</p>
            <p className='text3'>see one price</p>
            <button className='btn'>Purchase Now</button>
        </div>
       </section>
    )
}

export default SubArticle