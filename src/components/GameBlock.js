import React from 'react';

class GameBlock extends React.Component {

    render() {
        if (this.props.difficulty && this.props.difficulty === '1') {
            return (
                <div className={this.props.isActive === 1 && this.props.playing === true ? 'gameBlock-big-active' : 'gameBlock-big'}></div>)
        }
        else if (this.props.difficulty && this.props.difficulty === '2') {
        	return (
        		<div className={this.props.isActive === 1 && this.props.playing === true ? 'gameBlock-mid-active' : 'gameBlock-mid'}></div>
        		)
        }
        else if (this.props.difficulty && this.props.difficulty === '3') {
        	return (
        		<div className={this.props.isActive === 1 && this.props.playing === true ? 'gameBlock-small-active' : 'gameBlock-small'}></div>
        		)
        }

    }

}
export default GameBlock;