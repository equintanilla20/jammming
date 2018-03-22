import React, { Component } from 'react';
import './App.css';
import SearchBar from './../SearchBar/SearchBar';
import SearchResults from './../SearchResults/SearchResults';
import Playlist from './../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'Sending Vessels',
          artist: 'Vanna',
          album: 'Lonely Hearts EP'
        },
        {
          name: 'Weapon Is Dead',
          artist: 'Vanna',
          album: 'Curses'
        },
        {
          name: 'The Alarm',
          artist: 'Vanna',
          album: 'Curses'
        }
      ],

      playlistName: 'Vanna Bangerzz',

      playlistTracks: [
        {
          name: 'Sending Vessels',
          artist: 'Vanna',
          album: 'Lonely Hearts EP'
        },
        {
          name: 'Weapon Is Dead',
          artist: 'Vanna',
          album: 'Curses'
        },
        {
          name: 'The Alarm',
          artist: 'Vanna',
          album: 'Curses'
        }
      ]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  };

  addTrack(track) {
    if(track.id !== this.playlistTracks.forEach(track.id)) {
      this.track.id.push(track);
    }
  }

  removeTrack(track) {
    if(track.id === this.playlistTracks.forEach(track.id)) {
      this.track.id.filter(track);
    }
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistTracks={this.state.playlistTracks} playlistName={this.state.playlistName} onNameChange={this.props.updatePlaylistName}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;