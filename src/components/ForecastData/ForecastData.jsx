import React from 'react';

export default class ForecastData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            outputData: []
        }
    }

    componentDidMount() {
        fetch('', {method: 'post', })
    }
}
