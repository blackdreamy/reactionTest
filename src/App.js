import React from 'react';
import './styles/App.scss';
import Difficulty from './components/Difficulty';
import Game from './components/Game';

class App extends React.Component {
	state = {
		difficulty:0,
	}
	setDifficulty = (dif) => {
		this.setState({difficulty:dif});
	}
	
	


    render(){
    	if(this.state.difficulty !== 0){

				return (
					<div className='wrapper'>
					<Game difficulty={this.state.difficulty}/>
					</div>
					)
			}
    	return(

	    	<div className='wrapper'>
	  			<Difficulty setDifficulty ={this.setDifficulty}/>
	  		</div>
  		)
    }
}

export default App;