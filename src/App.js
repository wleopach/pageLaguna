import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router, withRouter  } from 'react-router-dom';


// Import css
import './css/pe-icon-7-stroke.css';
import './css/materialdesignicons.min.css';
import './css/waves.css';
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/style.css';
import './css/colors/red.css';


const Index = React.lazy(() => import('./pages/index-9'));

const About = React.lazy(() => import('./pages/Subpages/about'));


class App extends Component {
 
  render() {

    return (
      <React.Fragment>

        <Router>
        <React.Suspense fallback={<div>&nbsp;</div>}>
          <Switch>           
            <Route path="/about" component={About} />  
            <Route path="/" component={Index} />               
           </Switch>
           </React.Suspense>
        </Router>        
      </React.Fragment>
    );
  }
}



export default withRouter(App);


