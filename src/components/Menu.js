import React from 'react';

class Menu extends React.Component {
	handleClick = () => {
		this.props.history.push(`/game`);
	}
    render() {
        return (
            <div className = 'container'>
		        <div className="menu scale-in-center">
		  			<ul>
		  				<li onClick = {this.handleClick}>
		  					PLAY
		  				</li>
		  			</ul>
		  		</div>
  			</div>
        )
    }
}

export default Menu;