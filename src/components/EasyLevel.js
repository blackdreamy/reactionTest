import React from 'react';
import Timer from 'react-compound-timer';
import GameBlock from './GameBlock';
import GameOver from './GameOver';


class EasyLevel extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef(); //реф на таймер
    }
    state = {
        lastRandom: [],        //массив со всеми рандомными блоками
        forWin: 10,            //количество кликов для победы 
        initialTime: 12200,    //время таймера
        playZone1: [           //игровое поле
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
        active: false,         //активна ли игра
        reactionTimers: [],    //время реакции на каждый клик 
        isWon: false           //победил ли игрок 
    };
    //рассчитываем время на клик
    reactionTime = (time) => {
        const startTime = this.state.initialTime;
        let reactionTime = time.toFixed();
        reactionTime = startTime - reactionTime;
        return reactionTime;
    }

    startGame = () => {
        // очищаем массив перед получением рандомного блока
        if (this.state.reactionTimers.length < this.state.forWin - 1) {
            let clearArr = [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ];
            let getRandomFirst = Math.floor(Math.random() * clearArr.length);
            let getRandomSecond = Math.floor(Math.random() * clearArr.length);
            // проверяем, если произошел рандом двух чисел как и в прошлый раз, то рерандомим
            if (getRandomFirst === this.state.lastRandom[this.state.lastRandom.length - 2] && getRandomSecond === this.state.lastRandom[this.state.lastRandom.length - 1]) {
                getRandomFirst = Math.floor(Math.random() * clearArr.length);
                getRandomSecond = Math.floor(Math.random() * clearArr.length);
                console.log('repeat');
            }
            //добавляем в lastRandom последние два рандома.
            this.setState({
                lastRandom: [...this.state.lastRandom, getRandomFirst, getRandomSecond]
            });
            //придаем рандомному блоку значение 1
            clearArr[getRandomFirst][getRandomSecond] = 1;
            //передаем это значение в state и делаем игру активной
            this.setState({
                playZone1: clearArr,
                active: true
            });
            // получаем значение из таймера и записываем его в state, затем ресетим таймер
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
                        {this.state.playZone1.map((element,index) => {
                            return(
                            <td key={`0${index}`} onClick={this.state.playZone1[0][index] === 1 ? this.startGame : null}><GameBlock isActive={this.state.playZone1[0][index]}
                                                                                                                                    playing={this.state.active}
                                                                                                                                    difficulty={this.props.difficulty}/></td>
                            )
                        })}
                    </tr>
                    <tr>
                        {this.state.playZone1.map((element,index) => {
                            return(
                            <td key={`1${index}`} onClick={this.state.playZone1[1][index] === 1 ? this.startGame : null}><GameBlock isActive={this.state.playZone1[1][index]}
                                                                                                                                    playing={this.state.active}
                                                                                                                                    difficulty={this.props.difficulty}/></td>
                            )
                        })}
                    </tr>
                    <tr>
                        {this.state.playZone1.map((element,index) => {
                            return(
                            <td key={`2${index}`} onClick={this.state.playZone1[2][index] === 1 ? this.startGame : null}><GameBlock isActive={this.state.playZone1[2][index]}
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
export default EasyLevel;