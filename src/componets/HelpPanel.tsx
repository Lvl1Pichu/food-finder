import styled from "styled-components";
import HelpButton from "./HelpButton";

interface HelpProps {
    closeHelp: () => void;
    helpOpen: boolean
}

export default function HelpPanel (props: HelpProps) {
    return (
        <Panel className={props.helpOpen ? "open" : ""}>
            Help
            <HelpButton content="✕" onClick={props.closeHelp}/>
        </Panel>
    )
}


const Panel = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  top: 5%;
  bottom: 5%;
  left: 5%;
  right: 5%;
  padding: 2rem 5%;
  background: #c0c0c0;
  transform: translateY(110%);
  transition: transform 300ms ease-in-out;
  &.open {
    transform: translateY(0%);
  }
`