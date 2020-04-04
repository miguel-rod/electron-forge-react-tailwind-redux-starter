import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./constants/routes.json";
import HomePage from "./containers/HomePage";

const Routes = () => {
	return (
		<>
			<Switch>
				<Route exact path={routes.HOME} component={HomePage} />
			</Switch>
		</>
	);
};

export default Routes;
