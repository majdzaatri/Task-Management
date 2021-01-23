import React, { Component } from 'react'
import axios from "axios"

export default class Test extends Component {
    constructor () {
        super();
        this.state = {
            string: "Nothing good"
        };
    }

    Testing = () => {
        axios.get("/test").then(response => {
            this.setState({
                string: "All good"
            })
            console.log("Done");
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.Testing}> {this.state.string} </button>
            </div>
        )
    }
}
