import styled from "styled-components";
import HelpButton from "./HelpButton";

interface HelpProps {
    closeHelp: () => void;
    helpOpen: boolean
}

export default function HelpPanel (props: HelpProps) {
    return (
        <Panel className={props.helpOpen ? "open" : ""}>
            <HelpText>
                <Paragraph>Start by adding the ingredients you have in your kitchen to the list. Type them into the text box and press enter or click the plus icon.</Paragraph>
                <Hyphen>~</Hyphen>
                <Paragraph>When you are done click 'Search recipes' and Food Finder will find recipes that you can cook with them.</Paragraph>
                <Hyphen>~</Hyphen>
                <Paragraph>If any ingredients are missing we will will let you know.</Paragraph>
                <Hyphen>~</Hyphen>
                <Paragraph>Once you have found a recipe that you like, click on it to see the details.</Paragraph>
                <Hyphen>~</Hyphen>
                <Paragraph>On the details page you will see a full list of ingredients and a link to the website where you can read the method.</Paragraph>
            </HelpText>
            <HelpButton content="✕" onClick={props.closeHelp}/>
        </Panel>
    )
}


const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 5%;
  left: 50%;
  max-height: 90%;
  width: 90%;
  max-width: calc(500px + 10%);
  padding: 2rem 5%;
  background: #c0c0c0;
  transform: translateY(-200%) translateX(-50%);
  transition: transform 300ms ease-in-out;
  &.open {
    transform: translateY(0%) translateX(-50%);
  }
`

const HelpText = styled.div`
    overflow: scroll;
    max-width: 500px;
`

const Paragraph = styled.p`
    color: #141414;
`

const Hyphen = styled.p`
    margin: 2rem 0;
    color: #141414;
    text-align: center;
`