import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './All.css';
import Aux from '../Auxila/Aux';
import Home from '../Home/Home';
import Post from '../Post/Post';
import NewPost from '../NewPost/NewPost';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import ResponsiveMenu from 'react-responsive-navbar';

class All extends Component {
    render() {
        return <Aux>

            <ResponsiveMenu
                menuOpenButton={<div style={{background:'#333'}}>
                {/* <i style={{overflow:'hidden',color:'white',fontSize:'450%'}} className='fas fas fa-bars'></i> */}
                <img style={{overflow:'hidden',color:'white',fontSize:'450%'}} src="https://img.icons8.com/ios/50/ffffff/more-filled.png"></img>
                </div>}
                menuCloseButton={<div style={{background:'#333'}}>
                {/* <i style={{overflow:'hidden',color:'white',fontSize:'450%'}} className='fas fas fa-bars'></i> */}
                <img src="https://img.icons8.com/ios/50/ffffff/menu-2-filled.png"></img>
                </div>}
                changeMenuOn="992px"
/*                 largeMenuClassName="large-menu-classname"
                smallMenuClassName="small-menu-classname" */
                menu={
                    <ul className="navBar" activeclassname="active">
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/post">Posts</NavLink></li>
                        <li><NavLink to="/newPost">New Post</NavLink></li>
                        <li><NavLink to="/aboutUs">About Us</NavLink></li>
                        <li><NavLink to="/contactUs">Contact Us</NavLink></li>
                    </ul>
                }
            />

            {/*    <nav>
                <ul className="navBar" activeclassname="active">
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/post">Posts</NavLink></li>
                    <li><NavLink to="/newPost">New Post</NavLink></li>
                    <li><NavLink to="/aboutUs">About Us</NavLink></li>
                    <li><NavLink to="/contactUs">Contact Us</NavLink></li>
                </ul>
            </nav> */}

            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/post" component={Post}></Route>
                <Route path="/newPost" component={NewPost}></Route>
                <Route path="/aboutUs" component={AboutUs}></Route>
                <Route path="/contactUs" component={ContactUs}></Route>
            </Switch>
            <Footer />
        </Aux>
    }
}

export default All;