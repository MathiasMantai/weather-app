import React from 'react';
import './Forecast.css';
import cloudy from './assets/cloudy.png';
import rain from './assets/rain.png';
import clear from './assets/clear.png';
import shower from './assets/shower.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloud, faCloudBolt, faSunCloud} from '@fortawesome/free-solid-svg-icons'

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
                fetch('https://www.7timer.info/bin/api.pl?lon='+geoData[0]+'&lat='+geoData[1]+'&product=civillight&output=json&unit=metric').then((response) => response.json()).then(data => {
                    console.log(data);
                    let tmp = [];
                    data["dataseries"].map((data) => {
                        tmp.push(
                            <div className=" bg-blue-400 text-white shadow-lg border-box m-5 w-2/3 sm:w-fit p-5 rounded-md" key={data["date"]}>

                                <div className="date">
                                    Datum: {this.formatDate(data["date"].toString())}
                                </div> 
                                <div className="info-container">
                                    <div className="weather">
                                        Wetter: {this.getWeatherIcon(data["weather"])}
                                    </div>

                                    <div className="temps">
                                        <div>
                                            Mindesttemperatur: {data["temp2m"]["min"]} °C
                                        </div>
                                        <div>
                                            Maximaltemperatur: {data["temp2m"]["max"]} °C
                                        </div>
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
            case "clear": return <FontAwesomeIcon icon={faSun} size="3x" />;
            case "ishower": return <FontAwesomeIcon icon={faCloud} size="3x"/>;
            case "rain": return <FontAwesomeIcon icon="fa-solid fa-cloud-drizzle" size="3x" />;
            case "cloudy": return <FontAwesomeIcon icon={faCloud} size="3x" />;
            case "mcloudy": return <img src={cloudy} width="32" height="32" />;
            case "pcloudy": return <FontAwesomeIcon icon="fa-solid fa-sun-cloud" />;
        }
    }

    render() {
        return (
            <div className=" forecast grid place-items-center grid-cols-1 content-evenly sm:grid-cols-2 lg:grid-cols-6 col-span-2 items-center margin-auto">
                {this.state.output}
            </div>
        )
    }
}