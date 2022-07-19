import React from 'react';
import './Forecast.css';
import '../assets/';

export default class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: "",
            output: []
        }
    }
    
    componentDidMount() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let geoData = [position.coords.longitude, position.coords.latitude];
                fetch('http://www.7timer.info/bin/api.pl?lon='+geoData[0]+'&lat='+geoData[1]+'&product=civillight&output=json&unit=metric').then((response) => response.json()).then(data => {
                    console.log(data);
                    let tmp = [];
                    data["dataseries"].map((data) => {
                        tmp.push(
                            <div className="card" key={data["date"]}>
                                <div class="date">Datum: {this.formatDate(data["date"].toString())}</div> 
                                <div>| Wetter: <img src={this.formatDate(data["weather"])}></img></div>
                                <div className="temps">
                                    <div>
                                        Mindesttemperatur: {data["temp2m"]["min"]}
                                    </div>
                                    <div>
                                        Maximaltemperatur: {data["temp2m"]["max"]}
                                    </div>
                                </div>
                            </div>
                        );
                    });
                    this.setState({output: tmp});
                    // console.log(this.state.output);
                });
            });
        }
        else {
            this.setState({output: <div>Dein Browser unterstützt Geolocation nicht</div>});
        }
    }

    formatDate(date) {
        return date.substring(6,8) +"."+date.substring(4,6)+"."+date.substring(0,4);
    }

    getWeatherIcon(weather) {
        weather = weather.toString();
        switch(weather) {
            case "clear": return clear;
            case "ishower": return shower;
            case "rain": return rain;
            case "cloudy": return cloudy;
        }
    }

    render() {
        return (
            <div className="forecast">
                {this.state.output}
            </div>
        )
    }
}