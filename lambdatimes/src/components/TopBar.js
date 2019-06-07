import React from 'react';
import styled from 'styled-components'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const StyledTopBar = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`

const StyledContainerLeft = styled(StyledContainer)`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`

const StyledTopBarSpanLeft = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

const StyledContainerCenter = styled(StyledContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`

const StyledTopBarSpanCenter = styled.span`
  cursor: pointer;
  margin-right: 5%;
`

const StyledContainerRight = styled(StyledContainer)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

const StyledTopBarSpanRight = styled.span`
  cursor: pointer;
`

const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledContainer>
        <StyledContainerLeft>
          <StyledTopBarSpanLeft>TOPICS</StyledTopBarSpanLeft><StyledTopBarSpanLeft>SEARCH</StyledTopBarSpanLeft>
        </StyledContainerLeft>
        <StyledContainerCenter>
          <StyledTopBarSpanCenter>GENERAL</StyledTopBarSpanCenter><StyledTopBarSpanCenter>BROWNBAG</StyledTopBarSpanCenter><StyledTopBarSpanCenter>RANDOM</StyledTopBarSpanCenter><StyledTopBarSpanCenter>MUSIC</StyledTopBarSpanCenter><StyledTopBarSpanCenter>ANNOUNCEMENTS</StyledTopBarSpanCenter>
        </StyledContainerCenter>
        <StyledContainerRight>
          <StyledTopBarSpanRight>LOG IN</StyledTopBarSpanRight>
        </StyledContainerRight>
      </StyledContainer>
    </StyledTopBar>
  )
}

export default TopBar;