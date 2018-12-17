import React, { Component } from 'react'
import './Spinner.css'
import Aux from '../Auxila/Aux'
class Spinn extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return <Aux>
            <div className="centriranje">
                <h1 className="h1Spiner">Please wait a second </h1><div className="lds-ripple"><div></div><div></div></div>
            </div>
            {/* <div className="centriranje2"></div> */}
        </Aux>
    }
}
export default Spinn;