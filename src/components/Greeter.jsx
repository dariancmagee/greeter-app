import React from 'react';
console.log("React is", React);
class Greeter extends React.Component {
    render() {
        return(
            <>
                <h2>Hello Again! {this.props.name}</h2>
                <p>I am {this.props.age} years old</p>
            </>
        );
    }
}

export default Greeter;