import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import App from '../App';
import NotFound from './NotFound';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Menu}/>
			<Route path='/game' component={App}></Route>
			<Route component={NotFound}></Route>
		</Switch>
	</BrowserRouter>
)

export default Router;