import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux'
// import store from './store/index'
import MainComponent from './components/maincomponent'

// import { rootReducer } from './reducers/index'
// import { createStore } from 'redux'

// import './css/style.css';

// const store = createStore(rootReducer)

// ReactDOM.render(<Provider store={store}>
//                     <MainComponent />
//                 </Provider>,
//     document.getElementById('app')
// )

ReactDOM.render(<MainComponent />, document.getElementById('app'))
