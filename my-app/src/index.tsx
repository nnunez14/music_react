import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Dashboard, SignIn } from './components'; //NEW_ADDITION
import './styles.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
      <Provider store = { store }> {/* Add this line */ }
      <Router>
        <Switch>
  
          <Route exact path='/'>
            <Home title={'Music Inventory'}/>
          </Route>
  
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
  
          <Route path='/signin'>
            <SignIn></SignIn>
          </Route>
  
        </Switch>
      </Router>
      </Provider>{/* Add this line */ }
    </React.StrictMode>,
    document.getElementById('root')
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();