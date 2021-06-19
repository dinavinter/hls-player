import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import icon from '../assets/icon.svg';
// import './App.global.css';
import FileSelect from "./components/FileSelect";


const Hello = () => {
  return (
    <div>

        {/*<PicturesWall/>*/}
        <FileSelect />
        {/*<Layout>*/}
        {/*  <Header><FileSelect/> </Header>*/}
        {/* </Layout>*/}
        {/*    <Content>*/}
        {/*      <Consumer/>*/}
        {/*    </Content>*/}

        {/*  </Layout>*/}
        {/*</Layout>*/}
     </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello}/>
        <Route path="/gallery" component={Hello}/>
      </Switch>
    </Router>
  );
}
