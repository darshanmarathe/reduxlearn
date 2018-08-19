import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { createStore , combineReducers }  from 'redux';
import { Provider } from 'react-redux';

import { Todoreducer , UserReducer}  from './reducers/allreducers.js'

const AllReducers = combineReducers({
  todos : Todoreducer,
  user : UserReducer
});



const store = createStore(AllReducers, {
  todos : [{task : "achive dreams"}],
  user : "darshan"
},
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())




ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
