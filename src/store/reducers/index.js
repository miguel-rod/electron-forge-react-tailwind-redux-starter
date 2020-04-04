import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
const changeMe = () => {
	return true;
};

const createRootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		changeMe,
	});

export default createRootReducer;
