import { Component, Fragment } from "react";
class ClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            a: 10
        }

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.setState((prev) => {
            return { a: prev.a + 1 }
        })
    }

    increament() {
        this.setState({ a: this.state.a + 1 })
    }

    arrowFuncIncrement = ()=> {
        this.setState({ a: this.state.a + 1 })
    }
 
    // componentDidMount(){
    //     console.log("Component did mount...")
    // }
    
    // componentDidUpdate(){
    //     console.log("Component did update...")
    // }

    // componentWillUnmount(){
    //     console.log("Component Wil Unmout...")
    // }
    render() {
        return (
            <Fragment>
                <div> I am class Component build by {this.props.name} {this.props.lastName}</div>
                <p>a = {this.state.a}</p>
                <button onClick={this.handleClick}>increament using prev.a</button>
                <button onClick={this.increament.bind(this)}>increament using this.state.a</button>
                <button onMouseEnter={this.arrowFuncIncrement} onMouseOut={this.arrowFuncIncrement}>increament using arrow function</button>
            </Fragment>
        )
    }
}

export default ClassComponent;
