import React, { Component } from 'react';
import './App.css';
import aircraft from './aircraft.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import AircraftCard from './components/AircraftCard'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        aircraft: aircraft,
        unselectedAircraft: aircraft
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectAircraft = jet => {
        const findAircraft = this.state.unselectedAircraft.find(item => item.jet === jet);

        if(findAircraft === undefined) {
            // failure to select a new aircraft
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                aircraft: aircraft,
                unselectedAircraft: aircraft
            });
        }
        else {
            // success to select a new aircraft
            const newAircraft = this.state.unselectedAircraft.filter(item => item.jet !== jet);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                aircraft: aircraft,
                unselectedAircraft: newAircraft
            });
        }

        this.shuffleArray(aircraft);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.aircraft.map((aircraft, index) => (
                        <AircraftCard
                            jet={aircraft.jet}
                            image={aircraft.image}
                            selectAircraft={this.selectAircraft} 
                            curScore={this.state.curScore}
                            key= {index}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;

