import React, { Component } from 'react';
import Siderbar from './components/Siderbar';
import Video from './components/Video';

export default class App extends Component {
    render() {
        return (
            <div>
                <Video />
                <Siderbar />
            </div>
        )
    }
}
