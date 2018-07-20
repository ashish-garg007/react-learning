import React from 'react';
import {Link} from 'react-router-dom';

class FullRoster extends React.Component {

    state = {
        players:[
            {
                name:'Ashish Garg',
                position:'Goal Keeper',
                number:1
            },
            {
                name:'Dharmendra',
                position:'Forward',
                number:2
            },
            {
                name:'Lokendra',
                position:'Defence',
                number:3
            }
        ]
    }
    render(){
    return(
        <div>
            
            <ul>
                {this.state.players.map(plyrs => (
                    <li key={plyrs.number}>
                    <Link to={`/roster/${plyrs.number}`}>{plyrs.name}</Link>
                    </li>
                ))}
            </ul>

        </div>
    )}
}

export default FullRoster;