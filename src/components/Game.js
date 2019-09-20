import React from 'react';
import Timer from 'react-compound-timer';
import GameBlock from './GameBlock';
import GameOver from './GameOver';
import EasyLevel from './EasyLevel';
import MidLevel from './MidLevel';
import HighLevel from './HighLevel';

class Game extends React.Component {
	
	render() {
		if (this.props.difficulty && this.props.difficulty == 1) {
			return(
				<EasyLevel difficulty={this.props.difficulty} />
			)
		}
		else if (this.props.difficulty && this.props.difficulty == 2) {
			return(
				<MidLevel difficulty={this.props.difficulty} />
			)
		}
		else if (this.props.difficulty && this.props.difficulty == 3) {
			return(
				<HighLevel difficulty={this.props.difficulty} />
			)
		}
	}
}
export default Game;

