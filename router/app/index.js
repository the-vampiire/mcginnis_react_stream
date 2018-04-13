import ReactDOM from 'react-dom';
import { Component } from 'react';
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

class Home extends Component {
    render() {
        return <h1>Home Page</h1>
    }
}

class Other extends Component {
    render() {
        return <h1>Other Page</h1>
    }
}

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/other'>Other</Link>
                        </li>
                    </ul>
                    <Route exact path='/' component={Home} />
                    <Route path='/other' component={Other} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);

export default App;
