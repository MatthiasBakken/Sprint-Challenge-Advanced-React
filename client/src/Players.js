import React, { Component } from 'react'
import axios from 'axios';

export default class Players extends Component {
    state = {
        players: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/players')
            .then(res => {
                this.setState({ players: res.data })
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    render() {
        const {players} = this.state;
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {
                    players.map(player => {
                        return (
                            <div 
                                key={player.name.split(' ').join('')} 
                                style={{width: '200px', height: '100px', boxShadow: '2px 2px 2px 2px gray', marginTop: '10px'}} 
                            >
                                <p>{player.name}</p>
                                <p>{player.country}</p>
                                <p>{player.searches}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
