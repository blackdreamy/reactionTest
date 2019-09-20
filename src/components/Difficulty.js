import React from 'react';
class Difficulty extends React.Component {
    state = {
        dif1: false,
        dif2: false,
        dif3: false,
    }
    handleHover = (event) => {
        const name = event.target.getAttribute('name');
        let names = [];
        let currentState = [];
        if (name === 'dif2') {
            names = ['dif1', 'dif2'];
            currentState = [this.state[names[0]], this.state[names[1]]];
            names.forEach((element, index) => {
                this.setState({
                    [element]: !currentState[index] });
            })
        } else if (name === 'dif3') {
            names = ['dif1', 'dif2', 'dif3'];
            currentState = [this.state[names[0]], this.state[names[1]], this.state[names[2]]];
            names.forEach((element, index) => {
                this.setState({
                    [element]: !currentState[index] });
            })
        } else {
            const currentState = this.state[name];
            this.setState({
                [name]: !currentState })
        }

    }

    render() {
        return (
            <div className='container'>
	  			<div 
	  				className={this.state.dif1 ? 'difficulty1' : 'difficulty-none'} 
	  				onMouseEnter={this.handleHover}  onMouseLeave={this.handleHover}
	  				onClick={()=>{this.props.setDifficulty('1')}}
	  				name='dif1'></div>
	  			<div 
	  				className={this.state.dif2 ? 'difficulty2' : 'difficulty-none'} 
	  				onMouseEnter={this.handleHover}  onMouseLeave={this.handleHover}
	  				onClick={()=>{this.props.setDifficulty('2')}} 
	  				name='dif2'></div>
	  			<div className={this.state.dif3 ? 'difficulty3' : 'difficulty-none'} 
	  				onMouseEnter={this.handleHover}  
	  				onMouseLeave={this.handleHover} 
	  				onClick={()=>{this.props.setDifficulty('3')}}
	  				name='dif3'></div>
	  		</div>
        )
    }
}

export default Difficulty;