import React from 'react';
import styled from 'styled-components';

type ButtonTypeProps = {
    title: string
    isDisabled: boolean
    onClickCallback: () => void
}

export const Button: React.FC<ButtonTypeProps> = (props) => {

    const {title, isDisabled, onClickCallback} = props

    return (
        <div>
            <ButtonStyle onClick={onClickCallback} disabled={isDisabled}>
                {/*<button onClick={onClickCallback} disabled={isDisabled}>{title}</button>*/}
                {title}
            </ButtonStyle>
        </div>
    )
}

const ButtonStyle = styled.button`
  cursor: pointer;
  width: 68px;
  height: 18px;
  outline: none;
  border: 1px solid #0066CC;
  background: #0066CC;
  border-radius: 3px;
  color: #fff;
  font: normal 600 10px/15px 'Montserrat', sans-serif;

  &:hover {
    background: #0080FF;
  }

  &:active {
    background: #0059B2;
  }
  
  &:disabled{
    opacity: 0.5;
    cursor: default;
  }
  
  &:disabled:hover {
    background: #0066CC;
  }
`
