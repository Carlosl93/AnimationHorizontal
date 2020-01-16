import React from "react"
import styled from 'styled-components'

import land from '../images/land.jpg';
import land1 from '../images/land1.jpeg';
import land2 from '../images/land2.jpeg';

const AppContainer = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
  width: 100vw;
`

const ImgContainer = styled.div`
  background: url(${land});
  background-repeat: no-repeat;
  background-size: cover;
  width: 300px;
  height: 240px;
`

const IndexPage = () => (
  <AppContainer>
    <ImgContainer />
  </AppContainer>
)

export default IndexPage
