import React from 'react';

class GameOver extends React.Component {
    calculateStats(timers) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let sum = timers.reduce(reducer);
        const total = sum / timers.length;
        return total;
    }
    handleClick = () => {
		window.location.reload();
	}
    render() {
    	if (this.props.reactionTimers.length !== 0) {
    		return (
    			<div className='GameOver'>
					<div className="endGame">
						<ul>
							<h1>Game Over!</h1>
							<p>Your average reaction: {this.calculateStats(this.props.reactionTimers)} ms</p>
							<span onClick = {this.handleClick}>RETRY</span>
						</ul>
					</div>
				</div>
    		)
    	}
    	else return (
    		<div className='GameOver'>
				<div className="endGame">
                <ul>
					<h1>Game Over!</h1>
					<span onClick = {this.handleClick}>RETRY</span>
                </ul>
				</div>
			</div>
    	)
    }
}

export default GameOver;

