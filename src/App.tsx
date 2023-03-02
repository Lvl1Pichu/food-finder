import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HelpButton from "./components/HelpButton";
import HelpPanel from "./components/HelpPanel";

export default function App() {

  const [helpOpen, setHelpOpen] = useState(false);
    
  // Toggle visibility of the help panel.
  const openHelp = () => {
    setHelpOpen(true)
  }

  const closeHelp = () => {
    setHelpOpen(false)
  }

    return (
        <Main>
        <ButtonContainer>
          <HelpButton content="i" onClick={openHelp}></HelpButton>
        </ButtonContainer>
            
          <HelpPanel closeHelp={closeHelp} helpOpen={helpOpen}/>
        <Outlet/>
        </Main>
    )
}

const ButtonContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 99;
`

const Main = styled.div`
  height: 100%;
`