import { Route } from 'react-router';
import { Redirect, Switch } from 'react-router-dom';

import { Posts } from './components/Posts';
import { Header } from './components/Header';
import { SignUpPage } from './components/SignUpPage';

import './App.scss';

const App = () => (
	<div>
		<Header />
		<div>
			<Switch>
				<Redirect exact from="/" to="/posts" />
				<Route path='/posts'
					render={() => <Posts />} />
				<Route path='/signUp'
					render={() => <SignUpPage />} />
			</Switch>
		</div>
	</div>
);

export default App;
