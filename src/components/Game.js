import React from 'react';
import Timer from 'react-compound-timer';
import GameBlock from './GameBlock';
import GameOver from './GameOver';


class Game extends React.Component {
	constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
	state = {
		initialTime:2001,
		playZone1: [[0,0,0],[0,0,0],[0,0,0]],
		active:false,
		reactionTimers: []
	};
	reactionTime = (time) => {
		const startTime = this.state.initialTime;
		let reactionTime = time.toFixed();
		reactionTime = startTime - reactionTime;
		return reactionTime;
	}
	startGame = () => {
		let clearArr = [[0,0,0],[0,0,0],[0,0,0]];
		const getRandomFirst = Math.floor(Math.random() * clearArr.length);
		const getRandomSecond = Math.floor(Math.random() * clearArr.length);
		clearArr[getRandomFirst][getRandomSecond] = 1;
		this.setState({playZone1:clearArr,
						active:true});
		if (this.myRef.current!=null){
			this.setState({
		        reactionTimers:[...this.state.reactionTimers, this.reactionTime(this.myRef.current.timer.time)]
		    });
			this.myRef.current.reset();
		}
	}
	componentDidMount(){
		this.startGame();
	}
	render() {
			if (this.state.active===true){
				return(
					
			<div>
			<div className='timer'>
				<Timer
				ref={this.myRef}
			    initialTime={this.state.initialTime}
			    direction="backward"
			    timeToUpdate={10}
			    checkpoints={[
			        {
			            time: 0,
			            callback: () => this.setState({active:false})
			        }
			    ]}
			>
			    {({ start, resume, pause, stop, reset, timerState }) => (
			        <React.Fragment>
			            <Timer.Seconds /> seconds
			            <Timer.Milliseconds /> miliseconds 
			        </React.Fragment>
			    )}
			</Timer>
			</div>

			<div className='playZone'>
				<table className='tablePlayZone'>
				 <tbody>
					<tr>
						{this.state.playZone1.map((element,index) => {
							return(
							<td key={`0${index}`} onClick={this.state.playZone1[0][index] === 1 ? this.startGame : null}><GameBlock isActive={this.state.playZone1[0][index]}
																																	playing={this.state.active}/></td>
							)
						})}
					</tr>
					<tr>
						{this.state.playZone1.map((element,index) => {
							return(
							<td key={`1${index}`} onClick={this.state.playZone1[1][index] === 1 ? this.startGame : null}><GameBlock isActive={this.state.playZone1[1][index]}
																																	playing={this.state.active}/></td>
							)
						})}
					</tr>
					<tr>
						{this.state.playZone1.map((element,index) => {
							return(
							<td key={`2${index}`} onClick={this.state.playZone1[2][index] === 1 ? this.startGame : null}><GameBlock isActive={this.state.playZone1[2][index]}
																																	playing={this.state.active}/></td>
							)
						})}
					</tr>
					</tbody>
				</table>
			</div>
			</div>)
			}
			else return (<GameOver reactionTimers = {this.state.reactionTimers}/>)
	}
}
export default Game;

