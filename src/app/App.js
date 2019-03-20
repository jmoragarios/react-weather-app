import React, { Component} from 'react';
//Components
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm'

class App extends Component {
    render() {
        return(
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <WeatherForm/>
                        <WeatherInfo/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;