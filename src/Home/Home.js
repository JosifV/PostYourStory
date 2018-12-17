import React, { Component } from 'react';
import Aux from '../Auxila/Aux';
import './Home.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return <Aux>
            <div className="section0">
                <div className="backSection0">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={3}>
                        <div className="section0Content">
                            <h1 className="firstTitle">Title title</h1>
                            <p className="firstPar">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            <button className="firstBtn">Start you journey NOW</button>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
            <div className="section1">
                <div className="backSection1">
                    <div className="section1Content">
                        <ScrollAnimation animateIn="bounceInLeft" animateOnce={true} duration={2}>
                            <div className="prviElementSection1">
                                <h1>Naslov</h1>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2} delay={2000}>
                            <div className='razmak'></div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="bounceInRight" animateOnce={true} duration={2}>
                            <div className="posebanElementSection1">
                                <h1>About</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2} delay={2000}>
                                    <div className="section1inputss">
                                        <input type='text' placeholder="Your name" /><br />
                                        <input type='text' placeholder="Your phone" /><br />
                                        <button type="submit" className="submitBtn">Send</button>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="backSection2">
                    <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true} duration={1}>
                        <div className="section2Content">
                            <h1 className="scndTitle">Title title</h1>
                            <ScrollAnimation animateIn="bounce" animateOnce={true} duration={2}>
                                <ul className="scndList">
                                    <li> - Lorem ipsum elit</li>
                                    <li> - Lorem dolor sit amet, elit</li>
                                    <li> - Lorem ipsum, adipiscing elit</li>
                                    <li> - Lorem sit amet, consectetur elit</li>
                                </ul>
                            </ScrollAnimation>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </Aux>
    }
}
export default Home;