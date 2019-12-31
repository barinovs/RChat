import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import StatusComponent from './statusComponent'

export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {ws:{}}
    }

    componentWillMount() {
        const ws = new WebSocket("ws://192.168.37.91:8088");
        this.setState({ws});
        console.log(ws);
    }

    render() {
        const {ws} = this.state;
        ws.onopen = () => {console.log('onopen');}
        return (
            <div>

                <StatusComponent status="Тестовый статус"/>

            </div>
        )
    }
}
