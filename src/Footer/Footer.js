import React from "react";
import Aux from '../Auxila/Aux';
import "./Footer.css"
import Slika from '../Assets/LogoPrimer.png'
// import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
const footer = () => {
    return <Aux>
        <div className="footer">
            <div className="granichnik">
            </div>
            <div className="footerBack">
                {/* <ScrollAnimation animateIn="tada" animateOnce={true} duration="1.5"> */}
                <img src={Slika} className="logo" alt="imgNotFound" />
                {/* </ScrollAnimation> */}
                <ul className="listaF">
                    <li>Footer link</li>
                    <li>Footer link</li>
                    <li>Footer link</li>
                    <li>Footer link</li>
                </ul>
                <ul className="listaF">
                    <li>Footer link</li>
                    <li>Footer link</li>
                    <li>Footer link</li>
                </ul>
            </div>
            <div className="podFuter">
                <div className="podFutCont">
                    
                    <ul>
                    <li><a href="https://cv-josifv.firebaseapp.com/indexGreenEn.html">Made by Josif Vacić</a></li><br/><br/>
                        <li><a href="https://www.linkedin.com/in/josif-vaci%C4%87-657660165/"><i className='fab fa-linkedin'></i></a></li>
                        <li><a href="https://stackoverflow.com/users/9685324/jozev"><i className='fab fa-stack-overflow'></i></a></li>
                        <li><a href="https://github.com/JosifV"><i className='fab fa-github'></i></a></li>
                        <li><a href="https://www.facebook.com/iosif.vacic"><i className='fab fa-facebook'></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </Aux>
}
export default footer