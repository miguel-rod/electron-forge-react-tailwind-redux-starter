import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./Routes";
import configureStore, { history } from "./store/configureStore";

const store = configureStore();

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
