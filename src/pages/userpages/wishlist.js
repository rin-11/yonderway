import { Link } from "react-router-dom";
import { useState } from "react";

// load user wishlist if user found
// else render register page
// JESS working on the layout 


const Wishlist = (props) => {
   
   const pageIcons = () => {
    return(
    <>
    <h3>My Wishlist</h3>
    <div>
    <h3> Hotels </h3>
        <img src="https://static.thenounproject.com/png/1650638-200.png" id="icons"/>
    </div>
    <div>
    <h3> Attractions </h3>
        <img src="https://static.thenounproject.com/png/4538455-200.png" id="icons" />
    </div>
    <div>
    <h3> Restaurants </h3>
        <img src="https://static.thenounproject.com/png/1062711-200.png" id="icons" />
    </div>
    </>
   )}

   //State to hold the data
   const [restaurants, setRestaurants] = useState('');
   const [attractions, setAttractions] = useState('');
   const [hotels, setHotels] = useState('');

   //call API 

   //function once we get the data
   const showhotels = () => {

    //ADD LOGIC, Conditional statements? 

    return hotels.map((hotels) => (
        <div>
            <h1>{hotels.photo}</h1>
            <h1>{hotels.name}</h1>
        </div>
   

    ));
   };


    return (
        <div>
        {pageIcons()}
        </div>

        



)}

export default Wishlist;


