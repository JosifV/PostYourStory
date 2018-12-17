import React, { Component } from 'react';
import Aux from '../Auxila/Aux';
import "./AboutUs.css";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import lk1 from '../Assets/lik1.jpg'
import lk2 from '../Assets/lik2.jpg'
import lk3 from '../Assets/lik3.jpg'
import lk4 from '../Assets/lik4.jpg'

class AboutUs extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return <Aux>
            <div className="section01">
                <div className="backSection01">
                    <div className="section01Content">
                        <ScrollAnimation animateIn="bounceInDown" animateOnce={true} duration={3}>
                            <h1 className="firstTitle1">Title title</h1>
                            <p className="firstPar1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut voluptate velit esse cillum dolore eu fu elit, sed do eiusmod tempor incididunt ut voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="bounceInUp" animateOnce={true} duration={3}>
                            <h1 className="firstTitle1">Title title</h1>
                            <p className="firstPar1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut voluptate velit esse cillum dolore eu fu elit, sed do eiusmod tempor incididunt ut voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>

            <div className="section012">
                <div className="backSection012">
                    <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={3}>
                        <div className="section012Content">
                            <div>
                                <img src={lk1} alt="imgNotFound" />
                                <h2>Neko Nekic<small><br />Job Title</small></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut voluptate velit esse cillum dolore eu fu elit, sed do eiusmod tempor incididunt ut voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            </div>
                            <div>
                                <img src={lk2} alt="imgNotFound" />
                                <h2>Neko Nekic<small><br />Job Title</small></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut voluptate velit esse cillum dolore eu fu elit, sed do eiusmod tempor incididunt ut voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={3}>
                        <div className="section012Content">
                            <div>
                                <img src={lk3} alt="imgNotFound" />
                                <h2>Neko Nekic<small><br />Job Title</small></h2>
                                <p>Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut voluptate velit esse ciriatur nulla pariatur. </p>
                            </div>
                            <div>
                                <img src={lk4} alt="imgNotFound" />
                                <h2>Neko Nekic<small><br />Job Title</small></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            <div className="section0123">
                <div className="backSection0123">
                    <ScrollAnimation animateIn="bounceIn" animateOnce={true} duration={1}>
                        <div className="section0123Content">
                            <h1>Title</h1>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut voluptate velit esse cillum dolore</li>
                                <li>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut voluptate velit esse cillum dolore</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore</li>
                                <li>Lorem sed do eiusmod tempor incididunt ut voluptate velit esse cillum dolore</li>
                                <li>Lorem ipsum dolor sit amet, consectetur incididunt ut voluptate velit esse cillum dolore</li>
                            </ul>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </Aux>
    }
}
export default AboutUs