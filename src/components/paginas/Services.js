import React from 'react';
import '../../App.css';
import Footer from './Footer';
import './Services.css'
/*preview code of the section with no backend or jsx elements*/
export default function Services() {
    return( 
    <section className="menu" id="menu">
    <h1 className="heading"> Our <span>menu</span></h1>
    <div className='presentation'>
        <p><span>Coffee</span> is produced from the seeds of a small red (sometimes yellow) fruit that grows on plants halfway in 
        size between shrub and tree. The process that turns these seeds into beverage is a long and complex process, perhaps the most complex process associated with any major beverage.
        It is also a very labor intensive process involving a vast intercontinental collaboration that starts with 
        the coffee grower, moves from there to the picker, then to the mill workers who meticulously remove the 
        fruit and dry the beans, then to those who clean and grade the beans, to those who roast them, to those 
        consumers and baristas who finally grind the beans and prepare the beverage.</p>

        <p>Coffee <span>Notes</span> is devoted to promoting the fine, distinctive cup and celebrating its lore and pleasures.</p>
    </div>
    <div className="box-container">
       

        <div className="box">
            <img src="images/menu-1.png" alt=""/>
            <h3>tasty and healty</h3>
            <div className="price">$15.99<span>20.99</span></div>
            <a href="#" className="btn">add to cart</a>
        </div>
        <div className="box">
            <img src="images/menu-2.png" alt=""/>
            <h3>tasty and healty</h3>
            <div className="price">$15.99<span>20.99</span></div>
            <a href="#" className="btn">add to cart</a>
        </div>
        <div className="box">
            <img src="images/menu-3.png" alt=""/>
            <h3>tasty and healty</h3>
            <div className="price">$15.99<span>20.99</span></div>
            <a href="#" className="btn">add to cart</a>
        </div>
        <div className="box">
            <img src="images/menu-4.png" alt=""/>
            <h3>tasty and healty</h3>
            <div className="price">$15.99<span>20.99</span></div>
            <a href="#" className="btn">add to cart</a>
        </div>
        <div className="box">
            <img src="images/menu-5.png" alt=""/>
            <h3>tasty and healty</h3>
            <div className="price">$15.99<span>20.99</span></div>
            <a href="#" className="btn">add to cart</a>
        </div>
        <div className="box">
            <img src="images/menu-6.png" alt=""/>
            <h3>tasty and healty</h3>
            <div className="price">$15.99<span>20.99</span></div>
            <a href="#" className="btn">add to cart</a>
        </div>
        <div className="box">
            <img src="images/menu-5.png" alt=""/>
            <h3>tasty and healty</h3>
            <div className="price">$15.99<span>20.99</span></div>
            <a href="#" className="btn">add to cart</a>
        </div>
        <div className="box">
            <img src="images/menu-6.png" alt=""/>
            <h3>tasty and healty</h3>
            <div className="price">$15.99<span>20.99</span></div>
            <a href="#" className="btn">add to cart</a>
        </div>
    </div>
<Footer/>
</section>
)}