import React from "react";
import CardItem from "./CardItem";
import './Cards.css'
function Cards() {
    return(
        <div className="cards">
         <h1>Check out our <span>New</span> articles</h1>
         <div className="cards__container">
             <div className="cards__wrapper">
                <ul className="cards__items">
                     <CardItem 
                     src="/images/blog-1.jpeg"
                     text='Lorem ipsum dolor sit amet consectetur 
                     adipisicing elit. Sint quo sapiente minima'
                     label="read"
                     path='/services'
                     />
                     <CardItem 
                     src="/images/blogpagewoman.jpg"
                     text='Lorem ipsum dolor sit amet consectetur 
                     adipisicing elit. Sint quo sapiente minima'
                     label="read"
                     path='/services'
                     />
                     
                 </ul>
                 <ul className="cards__items">   
                     <CardItem 
                     src="/images/blog-1.jpeg"
                     text='Lorem ipsum dolor sit amet consectetur 
                     adipisicing elit. Sint quo sapiente minima'
                     label="read"
                     path='/services'
                     />
                     <CardItem 
                     src="/images/blog-2.jpeg"
                     text='Lorem ipsum dolor sit amet consectetur 
                     adipisicing elit. Sint quo sapiente minima'
                     label="read"
                     path='/services'
                     />
                      <CardItem 
                     src="/images/blog-3.jpeg"
                     text='Lorem ipsum dolor sit amet consectetur 
                     adipisicing elit. Sint quo sapiente minima'
                     label="read"
                     path='/services'
                     />
                      <CardItem 
                     src="/images/about-img.jpeg"
                     text='Lorem ipsum dolor sit amet consectetur 
                     adipisicing elit. Sint quo sapiente minima'
                     label="read"
                     path='/services'
                     />
                 </ul>
                
             </div>

         </div>
        </div>
    );
    
}
export default Cards