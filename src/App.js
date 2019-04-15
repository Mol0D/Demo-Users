import React, { Component } from 'react';
import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import {Route} from 'react-router-dom';

import VisibleHeader from './Containers/VisibleHeader';
import ListMenu from './Components/Menu/ListMenu';
import Home from './Components/Home/Home';
import Users from './Components/Users/Users';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
`

const ContainerApp = styled.div`
  margin: 0 auto;
  width: 1024px;
  display: flex;
`

const ContainerMenu = styled.div`
  width: 30%;
  @media (max-width: 960px){
    display: none
  }
`

const ContainerMain = styled.div`
  width: 70%;
  @media (max-width: 960px){
    width: 100%
  }
`

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
          <VisibleHeader/>
          <ContainerApp>
            <ContainerMenu>
              <ListMenu/>
            </ContainerMenu>
            <ContainerMain>
              <Route exact path="/" component={Home}/>
              <Route path="/users" component={Users}/>
            </ContainerMain>
          </ContainerApp>
      </div>
    );
  }
}

export default App;
