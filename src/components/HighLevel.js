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
        lastRandom: [],
        forWin: 15,
        initialTime: 700,
        playZone3: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ],
        active: false,
        reactionTimers: [],
        isWon: false
    };

    reactionTime = (time) => {
        const startTime = this.state.initialTime;
        let reactionTime = time.toFixed();
        reactionTime = startTime - reactionTime;
        return reactionTime;
    }

    startGame = () => {
        if (this.state.reactionTimers.length < this.state.forWin - 1) {
            let clearArr = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ];
            let getRandomFirst = Math.floor(Math.random() * clearArr.length);
            let getRandomSecond = Math.floor(Math.random() * clearArr.length);
            if (getRandomFirst === this.state.lastRandom[this.state.lastRandom.length - 2] && getRandomSecond === this.state.lastRandom[this.state.lastRandom.length - 1]) {
                getRandomFirst = Math.floor(Math.random() * clearArr.length);
                getRandomSecond = Math.floor(Math.random() * clearArr.length);
            }
            //добавляем в lastRandom последние два рандома.
            this.setState({
                lastRandom: [...this.state.lastRandom, getRandomFirst, getRandomSecond]
            });
            clearArr[getRandomFirst][getRandomSecond] = 1;
            this.setState({
                playZone3: clearArr,
                active: true
            });
            if (this.myRef.current != null) {
                this.setState({
                    reactionTimers: [...this.state.reactionTimers, this.reactionTime(this.myRef.current.timer.time)]
                });
                this.myRef.current.reset();
            }
        } else {
            this.setState({
                isWon: true,
                active: false
            })
        }
    }
    componentDidMount() {
        this.startGame();
    }
    render() {
        if (this.state.active === true) {
            return (

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
        } else return (<GameOver reactionTimers = {this.state.reactionTimers}
        										   isWon={this.state.isWon}/>)
    }
}
export default HighLevel;