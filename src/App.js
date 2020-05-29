import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Siderbar  from './components/Siderbar';
import Video from './components/Video';
import store from './store'

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                
                    <Video />
                    <Siderbar />

                </Provider>
                
            </div>
        )
    }
}
