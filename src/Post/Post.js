import React, { Component } from 'react';
import Aux from '../Auxila/Aux';
import './Post.css';
import axios from '../axios-orders';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Post extends Component {
    state = {
        posts: [],
        selectedPost: [],
        newId: null,
        newtitle: null,
        newtext: null,
        togglePost: false,
        noviNoviPost: {
            id: null,
            title: null,
            text: null,
        },
        delIdNiz: [],
        collapseProba: false,
        popularNiz: [],
        newestNizzz: []
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
        axios.get("/deId.json").then(response => {
            let result = Object.keys(response.data).map(function (key) {
                return [String(key), response.data[key]];
            });
            let nizZaPush = [];
            result.map(q => {
                nizZaPush.push(q[1])
            })
            this.setState({
                delIdNiz: nizZaPush
            })
        })
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        const izaberi = (a) => {
            let q = this.state.posts;
            let w = q.slice(a, a + 1);
            this.setState({
                selectedPost: [...w]
            })
        }
        const promenaToggle = () => {
            let abv = this.state.togglePost;
            this.setState({
                togglePost: !abv
            })
        }
        const uzmiDelId = (w) => {
            axios.post("/deId.json", w).then(response => {
                window.location.reload();
            })
        }
        const restorePostsHandler = () => {
            axios.delete("/deId.json").then(response => {
                window.location.reload();
            })
        }
        const collapseProbaHandler = () => {
            let proba = this.state.collapseProba
            this.setState({
                collapseProba: !proba
            })
        }
        const listanje = <div className="grid-container">
            {
                this.state.posts.map(x => {
                    let sabraniNiz = []
                    this.state.delIdNiz.map(q => {
                        sabraniNiz.push(q)
                    })
                    if (sabraniNiz.includes(x.id)) {
                        return null
                    }
                    else {
                        return <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1} delay={700} >
                            <div key={x.id}>
                                <h4 className="naslov">{x.title}</h4>
                                <br />
                                <div className="deoTeksta">{x.text.substring(0, 65) + "..."}</div>
                                <br />
                                <button className="dirkaZaCitanje" onClick={() => {
                                    izaberi(x.id);
                                    promenaToggle()
                                }}>Read</button>
                            </div>
                        </ScrollAnimation>
                    }
                })
            }
        </div>
        const popularPostsss = <div className="grid-containerPopularPosts">
            {
                this.state.posts.map(x => {
                    let sabraniNiz = []
                    this.state.delIdNiz.map(q => {
                        sabraniNiz.push(q)
                    })
                    if (sabraniNiz.includes(x.id)) {
                        return null
                    }
                    if (x.id == 2 || x.id == 5 || x.id == 1 || x.id == 3) {
                        return <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={3} delay={1000} >
                            <div key={x.id}>
                                <h4 className="naslov">{x.title}</h4>
                                <button className="dirkaZaCitanjePopularPost" onClick={() => {
                                    izaberi(x.id);
                                    promenaToggle()
                                }}>Read</button>
                            </div>
                        </ScrollAnimation>
                    }
                    else {
                        return null
                    }
                })
            }
        </div>
        const newestPostsss = <div className="grid-containerPopularPosts">
            {
                this.state.posts.slice(0).reverse().map(x => {
                    let sabraniNiz = []
                    this.state.delIdNiz.map(q => {
                        sabraniNiz.push(q)
                    })
                    let newestNizzzZZZ = [...this.state.posts];

                    let abv = sabraniNiz.filter(val => !newestNizzzZZZ.includes(val));
                    abv.map(f => {
                        newestNizzzZZZ.splice(f, 1)
                    })
                    let krajnjiNizzz = []
                    krajnjiNizzz[0] = newestNizzzZZZ[newestNizzzZZZ.length - 1]
                    krajnjiNizzz[1] = newestNizzzZZZ[newestNizzzZZZ.length - 2]
                    krajnjiNizzz[2] = newestNizzzZZZ[newestNizzzZZZ.length - 3]
                    krajnjiNizzz[3] = newestNizzzZZZ[newestNizzzZZZ.length - 4]

                    if (x.id == krajnjiNizzz[0].id || x.id == krajnjiNizzz[1].id || x.id == krajnjiNizzz[2].id || x.id == krajnjiNizzz[3].id) {
                        return <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={3} delay={1000} >
                            <div key={x.id}>
                                <h4 className="naslov">{x.title}</h4>
                                <button className="dirkaZaCitanjePopularPost" onClick={() => {
                                    izaberi(x.id);
                                    promenaToggle()
                                }}>Read</button>
                            </div>
                        </ScrollAnimation>
                    }
                    else {
                        return null
                    }
                })
            }
        </div>
        const citanje = <div className="citanjePost">
            {
                this.state.selectedPost.map(y => {
                    return <div key={y.id}>
                        <h1 className="naslov">{y.title}</h1>
                        <br />
                        <p className="ceoTekst">{y.text}</p>
                        <br />
                        <div className="drzacDirki">
                            <button className=" dirke" onClick={() => {
                                promenaToggle()
                            }}>Go back</button>
                            <button
                                className=" dirke"
                                onClick={collapseProbaHandler}
                            >Delete this
                        </button>
                            {this.state.collapseProba ? <div className="collapseProba">
                                <button
                                    className=" dirkaBrisi" onClick={() => {
                                        uzmiDelId(y.id);
                                    }}>Yes - delete this
                            </button>
                                <button
                                    className=" dirkaNemoj" onClick={collapseProbaHandler}>
                                    No - go back
                            </button>
                            </div> : null}
                        </div>
                    </div>
                })
            }
        </div>
        return <Aux>
            <Container fluid style={{ margin: '0', padding: '0' }}>
                <Row>
                    <Col sm="8" style={{ margin: '0', padding: '0' }}>
                        <div className="mainCont">
                            <div className="postsBackSection">
                                {this.state.togglePost ? citanje : listanje}
                                {this.state.togglePost ? null : <div>
                                    <button className="dirkaZaCitanje restore"
                                        onClick={() => {
                                            restorePostsHandler()
                                        }
                                        }>Restore deleted posts</button>
                                </div>}
                            </div>
                        </div>
                    </Col>
                    <Col sm="4" style={{ margin: '0', padding: '0' }}>
                        <div className="sideBar">
                            <div className="sadrzajSideBara">
                                <div className="popularPosts">
                                    <h3>Popular posts</h3>
                                    {popularPostsss}
                                </div>
                                <div className="newestPosts">
                                    <h3>Newest posts</h3>
                                    {newestPostsss}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Aux>
    }
}

export default Post