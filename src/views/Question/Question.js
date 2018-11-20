import React from 'react';
import PropTypes from "prop-types";
import styled , {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  p{
    margin: 0;
  }
`

const SectionContainer = styled.section`
  background: #fff;
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  min-width: 436px;
  min-height: 175px;
  padding: 35px 0 0;
`

const Section = styled.div`
  position: relative;
`

const QuestionText = styled.p`
  color: #575757;
  font-size: 18px;
  margin: 22px 0;
`

const QuestionContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
`

const QuestionButton = styled.button`
  position: absolute;
  bottom: -45px;
  right: 0;
  border-radius: 4px;
  background: #344955;
  opacity: 0.1;
  color: #FFF;
  font-size: 13px;
  width: 85px;
  padding: 8px 0;
  border: none;
  cursor: pointer;
  transition: .2s;
`
const QuestionInput = styled.input`
  border: 1px solid #979797;
  width: 100%;
  border-radius: 4px;
  height: 32px;
  font-size: 14px;
  padding-left: 8px;
  transition: .2s ease-out;
  margin-bottom: 21px;
  &.focus{
    &::placeholder{
      opacity: 0;
    }
    box-shadow: 0 0 7px 1px #f9aa33;
    border-color: #f9aa33;
    &~button{
      opacity: 1;
    }
  }
`

const TopRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`
const Question = ({score, attempt , question , questionNb, eventChange , eventClick}) => {
  return (
    <Section>
    <SectionContainer>
    <GlobalStyle/>
      
      {question && (
        <QuestionContent>
          <h1>Question {questionNb + 1}</h1>
          <QuestionText>{question[questionNb].question}?</QuestionText>
          <QuestionInput type="text" onChange={eventChange} placeholder="Réponse..."/>

          <TopRight>
          <p>attempt : {attempt} </p>
          <p>{score} points</p>
          </TopRight>

          <QuestionButton type="submit" onClick={eventClick}>Valider</QuestionButton>
        </QuestionContent>
      )}

      {attempt === 0 && (
        <h1>Tu es nul , Game Over</h1>
      )}
    </SectionContainer>
    </Section>
  )
}

Question.propTypes = {
  category: PropTypes.string
};

export default Question;