import React from 'react';
import Timer from 'react-compound-timer';
import GameBlock from './GameBlock';
import GameOver from './GameOver';


class HighLevel extends React.Component {
	constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
	state = {
		initialTime:700,
		playZone3: [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
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
		let clearArr = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
		const getRandomFirst = Math.floor(Math.random() * clearArr.length);
		const getRandomSecond = Math.floor(Math.random() * clearArr.length);
		clearArr[getRandomFirst][getRandomSecond] = 1;
		this.setState({playZone3:clearArr,
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
						{this.state.playZone3.map((element,index) => {
							return(
							<td key={`0${index}`} onClick={this.state.playZone3[0][index] === 1 ? this.startGame : null}><GameBlock isActive={this.state.playZone3[0][index]}
																																	playing={this.state.active}
																																	difficulty={this.props.difficulty}/></td>
							)
						})}
					</tr>
					<tr>
						{this.state.playZone3.map((element,index) => {
							return(
							<td key={`1${index}`} onClick={this.state.playZone3[1][index] === 1 ? this.startGame : null}><GameBlock isActive={this.state.playZone3[1][index]}
																																	playing={this.state.active}
																																	difficulty={this.props.difficulty}/></td>
							)
						})}
					</tr>
					<tr>
						{this.state.playZone3.map((element,index) => {
							return(
							<td key={`2${index}`} onClick={this.state.playZone3[2][index] === 1 ? this.startGame : null}><GameBlock isActive={this.state.playZone3[2][index]}
																																	playing={this.state.active}
																																	difficulty={this.props.difficulty}/></td>
							)
						})}
					</tr>
					<tr>
						{this.state.playZone3.map((element,index) => {
							return(
							<td key={`3${index}`} onClick={this.state.playZone3[3][index] === 1 ? this.startGame : null}><GameBlock isActive={this.state.playZone3[3][index]}
																																	playing={this.state.active}
																																	difficulty={this.props.difficulty}/></td>
							)
						})}
					</tr>
					<tr>
						{this.state.playZone3.map((element,index) => {
							return(
							<td key={`4${index}`} onClick={this.state.playZone3[4][index] === 1 ? this.startGame : null}><GameBlock isActive={this.state.playZone3[4][index]}
																																	playing={this.state.active}
																																	difficulty={this.props.difficulty}/></td>
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
export default HighLevel;

