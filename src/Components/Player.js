import React from 'react';
class Player extends React.Component{
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

    getPlayer =()=>{
        let {players} = this.state;
        const {number} = this.props.match.params;
        players = players.filter(plyr => plyr.number === parseInt(number, 10));
        return (
            <div>
                {players.map(plyrs=>(
                    <div>
                        <h1>{plyrs.name} (#{plyrs.number})</h1>
                        <h2>{plyrs.position}</h2>
                    </div>
                ))}
                
            </div>
        )
    }
     
render(){
    return(
        <div>
           {this.getPlayer()}
        </div>
    )
    }
}

export default Player;