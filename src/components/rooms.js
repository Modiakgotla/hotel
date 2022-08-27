import React from 'react'
import { Navigate, useHistory, Link} from  'react-router-dom';
import family from '../images/Rooms/FamilyQuad.jpg'
import single from '../images/Rooms/single.jpg'
import presidential from '../images/Rooms/Presidential-Guest.jpg'
import '../components/rooms.css'
import twitter from '../images/Rooms/twitter.png'
import facebook from '../images/Rooms/facebook.png'
import phone from '../images/Rooms/email.png'
import email from '../images/Rooms/phone.png'

const Rooms
    = () => {
        return (
            <div className="container">
                <section className="topPart">
                <div className="title"><h1>Hopewell's Gardens</h1></div>
                <div className='navigation'>
                    <a className="one">Home</a>
                    <a className="one">About Us</a>
                    <a className="one">Rooms</a>
                    <a className="one">Contacts</a>
                </div>
                </section>
                
                <div className="sub-title">Rooms

                </div>

                <br></br>
                <p><i>You've found the ideal spot if you're looking for useful and inexpensive hotel lodging in Durban.
                    The Hopewell's Gardens provides guests with contemporary, practical, and comfortable lodging at a great bargain.

                    We provide our customers with the ideal amenities to accompany a business, stopover, or short stay vacation in each of our modestly sized rooms.
                    Our accommodations have been specifically created so that we can host both business and leisure guests, including singles, couples, and families.
                    There are 125 spacious rooms available. You may reserve a room online or by speaking with one of our incredibly helpful experts right away. </i> </p>
                    
                    
                    
                    
                

                <div className="images">

                
                <div className="fam" >
                    <img src={family} alt=""/>
                    <br></br>
                FamilyQuad R1200.00
                </div>
            
                <div className="Pres" >
                <img src={presidential} alt=""/>
                <br></br>
                Presidential Suite R2500.00
                </div>
               
                <div className="sing" >
                <img src={single} alt=""/>
                <br></br>
                Single R1500.00</div>
                </div>
                <hr></hr>

                <div className="footer">
                    <div className="social">
                        <div className="border"></div>
                        <div className="twitter-part"> <img src={twitter} className="twitter"/>Twitter</div>
                        <div className="facebook-part"><img src={facebook} className="twitter"/>Facebook</div>
                        <div className="email-part"><img src={email}className="twitter"/>Email</div> 
                        <div className="phone-part"><img src={phone}className="twitter"/>Phone</div> 
                    </div>

                </div>
                </div>
           



        )
    }

export default Rooms
