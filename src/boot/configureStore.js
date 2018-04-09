// @flow

import devTools from "remote-redux-devtools";
import { createStore, applyMiddleware, compose } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import reducer from "@reducer";

export default function configureStore(onCompletion) {
  const enhancer = compose(
    applyMiddleware(apiMiddleware, thunk),
    devTools({
      name: "react-native-boilerplate",
      realtime: true
    })
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, onCompletion);

  return store;
}
