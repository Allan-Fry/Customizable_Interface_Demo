//*https://codepen.io/pigabo/pen/eAiLF*/

import React, { useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container } from 'reactstrap';
import { NavBar } from './components/NavBar/NavBar';
import './App.css';
import { EditPage } from './pages/EditPage/EditPage';
import { JoinPage } from './pages/JoinPage/JoinPage';

function App() {
  
  return (
    <Container className="FullScreenCotainer">
      <Container>
        <Router>
          <NavBar>
          </NavBar>
          <Switch>
          <Route path="/join" component={JoinPage} />
          <Route path="/account">
            <div>Account</div>
          </Route>
          <Route path="/" component={EditPage} />
          </Switch>
        </Router>
      </Container>
    </Container>
  );
}

export default App;
