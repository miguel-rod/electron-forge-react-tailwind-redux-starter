import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import store from "./store/configureStore";
import HomePage from "./containers/HomePage";

const App = () => (
	<Provider store={store}>
		<HashRouter>
			<Switch>
				<Route path="/" exact component={HomePage} />
			</Switch>
		</HashRouter>
	</Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
