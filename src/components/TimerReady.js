import React from 'react';
import Timer from 'react-compound-timer';

class TimerReady extends React.Component {
    render() {

        return (
            <Timer
			    initialTime={3005}
			    direction="backward"
			    timeToUpdate = {1000}
			    checkpoints={[
						        {
						            time: 1001,
						            callback: () => this.props.setReady()
						        }
						    ]}
			>
    {() => (
        <React.Fragment>
        	<div className='readyTimer'>
            	<Timer.Seconds />
        	</div>
        </React.Fragment>
    )}
</Timer>)
    }
}

export default TimerReady;