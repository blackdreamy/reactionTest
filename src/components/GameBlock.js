import React from 'react';

class GameBlock extends React.Component {

	render() {
		return(
			<div className={this.props.isActive === 1 && this.props.playing === true ? 'gameBlock-big-active' : 'gameBlock-big'}></div>)
	}
}
export default GameBlock;	
