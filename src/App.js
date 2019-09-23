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
    	//  как только сложность меняется сразу же запускается окно Game, в которое передается сложность
    	if(this.state.difficulty !== 0){

				return (
					<div className='wrapper'>
					<Game difficulty={this.state.difficulty}/>
					</div>
					)
			}
    	return(
    		// если сложность не задана, тогда открываем меню выбора сложности
	    	<div className='wrapper'>
	  			<Difficulty setDifficulty ={this.setDifficulty}/>
	  		</div>
  		)
    }
}

export default App;