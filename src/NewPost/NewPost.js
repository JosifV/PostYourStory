import React, { Component } from 'react';
import Aux from '../Auxila/Aux';
import "./NewPost.css";
import axios from '../axios-orders';

class NewPost extends Component {
    state = {
        newPost: {
            id: null,
            title: null,
            text: null,
        },
        posts: [],
        styleIfOk: {
            background: 'hsl(120, 100%, 45%, 0.8)',
            color: 'white',
            visibility: 'show',
            padding: '15px',
            width: '100%',
            textAlign:'center',
            fontSize: '120%',
            visibility: 'hidden'
        },
        styleIfBad: {
            background: 'hsl(15, 100%, 50%, 0.8)',
            color: 'white',
            visibility: 'show',
            padding: '15px',
            width: '100%',
            textAlign:'center',
            fontSize: '120%',
            visibility: 'hidden'
        },
        postOk: true
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    componentWillMount() {
        axios.get("/postovi.json").then(response => {
            let result = Object.keys(response.data).map(function (key) {
                return [String(key), response.data[key]];
            });
            let nizZaPush = [];
            result.map(q => {
                nizZaPush.push(q[1])
            })
            this.setState({
                posts: nizZaPush
            })
        })
    }
    render() {
        const setTitle = (event) => {
            this.setState({
                newPost: {
                    ...this.state.newPost,
                    title: event.target.value
                },
            })
        }
        const setText = (event) => {
            this.setState({
                newPost: {
                    ...this.state.newPost,
                    text: event.target.value
                },
            })
        }
        const noviPost = () => {
            this.setState({
                newPost: {
                    ...this.state.newPost,
                    id: 123
                },
            })
            const qwerty = this.state.newPost;
            qwerty.id = this.state.posts.length;

            if (this.state.newPost.title && this.state.newPost.text) {
                 axios.post("/postovi.json", qwerty).then(response => {
                    this.setState({
                        postOk: true,
                        styleIfOk:{
                            ...this.state.styleIfOk,
                            visibility: 'visible'
                        }
                    })
                    /////////////////////////////////////////////////////////////
                    setTimeout(function(){ window.location.reload(); }, 1000);
                })  
            }
            else {
                this.setState({
                    postOk: false,
                    styleIfBad:{
                        ...this.state.styleIfBad,
                        visibility: 'visible'
                    }
                })
            }
        }
        return <Aux>
            <div className="sve">
                <div className="backSectionNewPost">
                    <div className="glavniDiv">
                        <div className="upozorenje" style={
                            this.state.postOk ? this.state.styleIfOk : this.state.styleIfBad
                        }>{
                            this.state.postOk ? 'Post posted successfully' : 'Post not posted. Please check if all fields are entered'
                        }</div>
                        <input className="newPostinput" onChange={setTitle} placeholder="Enter post title" /><br />
                        <textarea className="newPostTextArea" onChange={setText} placeholder="Enter post content"></textarea><br /><br />
                        <button className="newPostSubmit" onClick={() => {
                            noviPost();
                        }}>Add post</button>
                    </div>
                </div>
            </div>
        </Aux>
    }
}
export default NewPost