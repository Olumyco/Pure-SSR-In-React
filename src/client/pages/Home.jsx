import React from 'react';
import '../main.css';


class Home extends React.Component {
    state = {
        title: 'Server Side Rendering in React'
    }

    handleClickMe = () => {
        this.setState({
            title: 'How To Implement Server Side Rendering in React Without Using Any Framework'
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleClickMe}>Click Me</button>
            </div>
        );
    }
}

export default Home;