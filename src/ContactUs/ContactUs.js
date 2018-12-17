import React, { Component } from 'react';
import Aux from '../Auxila/Aux';
import "./ContactUs.css";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import SimpleMap from '../GoogleMaps/GoogleMaps'

class ContactUs extends Component {
    state = {
        mapDisplay: false,
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        const toggleMapHandler = () => {
            let abv = this.state.mapDisplay;
            this.setState({
                mapDisplay: !abv
            })
        }
        return <Aux>
            <div className="section3">
                <div className="backSection3">
                    <div className="section3Content">
                        <ScrollAnimation animateIn="bounceInLeft" animateOnce={true} duration={3}>
                            <h1 className="firstTitle3">Title title</h1>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="bounceInRight" animateOnce={true} duration={3}>
                            <p className="firstPar3">"Lorem ipsum dolor sit amet, contact us with email."</p>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="bounceInLeft" animateOnce={true} duration={3}>
                            <input type="text" className="inputSection3" placeholder="Your name" /><br />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="bounceInRight" animateOnce={true} duration={3}>
                            <input type="email" className="inputSection3" placeholder="Your email" /><br />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="bounceInLeft" animateOnce={true} duration={3}>
                            <textarea className="textareaSection3" placeholder="Write us"></textarea><br />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="bounceInRight" animateOnce={true} duration={3}>
                            <button className="submitBtn3">Submit</button>
                        </ScrollAnimation>
                    </div>

                </div>
            </div>
            <div className="section34">
                <div className="backSection34">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={3}>
                        <div className="section34Content">
                            <div>
                                <ul className="listaKontakt">
                                    <li>Adress: Qwerty 123</li>
                                    <li>Telephone: 123 456</li>
                                    <li>Email: qwerty@abv.com</li>
                                </ul>
                            </div>
                            <div className="guglMapa">
                                <button className="googleMapBtn" onClick={toggleMapHandler} >Google Map 
                                </button>
                                <div style={{ visibility: this.state.mapDisplay ? 'visible' : 'hidden' }}>
                                    <SimpleMap />
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <div className="socialBtns">
                        <p>Find us on</p>
                        <ul>
                            <ScrollAnimation animateIn="bounceInUp" animateOnce={true} duration={2} >
                                <li><a href=""><i className='fab fa-instagram'></i></a></li>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="bounceInUp" animateOnce={true} duration={2} delay={500}>
                                <li><a href=""><i className='fab fa-google-plus'></i></a></li>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="bounceInUp" animateOnce={true} duration={2} delay={1000}>
                            <li><a href=""><i className='fab fa-youtube'></i></a></li>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="bounceInUp" animateOnce={true} duration={2} delay={1500}>
                            <li><a href=""><i className='fab fa-facebook'></i></a></li>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="bounceInUp" animateOnce={true} duration={2} >
                                <li><a href=""><i className='fab fa-tumblr-square'></i></a></li>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="bounceInUp" animateOnce={true} duration={2} delay={500}>
                                <li><a href=""><i className='fab fa-linkedin'></i></a></li>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="bounceInUp" animateOnce={true} duration={2} delay={1000}>
                            <li><a href=""><i className='fab fa-stack-overflow'></i></a></li>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="bounceInUp" animateOnce={true} duration={2} delay={1500}>
                            <li><a href=""><i className='fab fa-github'></i></a></li>
                            </ScrollAnimation>
                        </ul>
                    </div>

                </div>
            </div>
        </Aux>
    }
}
export default ContactUs