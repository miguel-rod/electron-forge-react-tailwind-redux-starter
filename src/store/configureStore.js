import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "./reducers";
import thunk from "redux-thunk";
import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createHashHistory();

export default function configureStore(preloadedState) {
	const store = createStore(
		createRootReducer(history),
		preloadedState,
		compose(applyMiddleware(routerMiddleware(history), thunk))
	);

	return store;
}
