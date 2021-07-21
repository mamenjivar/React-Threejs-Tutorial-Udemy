import { Route, Switch, Redirect } from 'react-router';
import './App.css';

import Navbar from './components/Navbar';
import ReactThreeFiber from './components/ReactThreeFiber';
import ThreeDemo from './components/ThreeDemo';


const App = () => {

  return (
    <div>
      <Navbar />

      {/* might add home to this project */}
      <Switch>
        <Route exact path="/three">
          <ThreeDemo />
        </Route>
        <Route exact path="/">
          <Redirect to="/three" />
        </Route>
        <Route exact path="/react-three-fiber">
          <ReactThreeFiber />
        </Route>
        <Route exact path="*">
          <Redirect to="/three" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
