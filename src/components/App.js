import React, {Component} from 'react';

class App extends Component {
    state = { artistQuery: ''};

    updateArtistQuery = event => {
        console.log('event.target.value:', event.target.value);
        this.setState({artistQuery: event.target.value })
    };

    handlerKeyPress = event =>{
        if(event.key === 'Enter') {
            this.searchArtist();
        }
    };

    searchArtist = () =>{
        console.log('this.state:', this.state);
    };

    render() {
        return (
            <div>
                <h2>Music Master</h2>
                <input
                    onChange={this.updateArtistQuery}
                    onKeyPress={this.handlerKeyPress}
                    placeholder='Search for an artist'
                />
                <button onClick={this.searchArtist}>Seach</button>
            </div>
        );
    }
}

export default App;