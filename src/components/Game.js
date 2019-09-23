import React from 'react';
import EasyLevel from './EasyLevel';
import MidLevel from './MidLevel';
import HighLevel from './HighLevel';
import TimerReady from './TimerReady';

class Game extends React.Component {
	state = {
		isReady:false
	}
	setReady = () => {
		this.setState({isReady:true});
	}
	render() {
		// сначала рендерим таймер, который меняет isReady на true, затем в зависимости от сложности рендерим уровень.
		if (this.props.difficulty && this.props.difficulty === '1' && this.state.isReady === true) {
			return(
				<EasyLevel difficulty={this.props.difficulty} />
			)
		}
		else if (this.props.difficulty && this.props.difficulty === '2' && this.state.isReady === true) {
			return(
				<MidLevel difficulty={this.props.difficulty} />
			)
		}
		else if (this.props.difficulty && this.props.difficulty === '3' && this.state.isReady === true) {
			return(
				<HighLevel difficulty={this.props.difficulty} />
			)
		}
		else return (
			<TimerReady setReady={this.setReady} />
			)
	}

}
export default Game;

