import React from 'react';

class GameOver extends React.Component {
    calculateStats(timers) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let sum = timers.reduce(reducer);
        const total = sum / timers.length;
        return total.toFixed();
    }
    handleClick = () => {
		window.location.reload();
	}
    render() {
    	if (this.props.reactionTimers.length !== 0 && this.props.isWon===false) {
    		return (
    			<div className='GameOver'>
					<div className="endGame">
						<ul>
							<h1 className='loser'>You Lost!</h1>
							<p>Your average reaction: {this.calculateStats(this.props.reactionTimers)} ms</p>
							<div onClick = {this.handleClick}>RETRY</div>
						</ul>
					</div>
				</div>
    		)
    	}
        else if (this.props.reactionTimers.length !== 0 && this.props.isWon===true){
            return(<div className='GameOver'>
                    <div className="endGame">
                        <ul>
                            <h1 className='winner'>You Won!</h1>
                            <p>Your average reaction: {this.calculateStats(this.props.reactionTimers)} ms</p>
                            <div onClick = {this.handleClick}>RETRY</div>
                        </ul>
                    </div>
                </div>)
        }
    	else return (
    		<div className='GameOver'>
				<div className="endGame">
                <ul>
					<h1 className='loser'>Game Over!</h1>
					<div onClick = {this.handleClick}>RETRY</div>
                </ul>
				</div>
			</div>
    	)
    }
}

export default GameOver;

