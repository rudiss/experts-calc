import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  height: 700px;
  width: 400px;
  overflow: hidden;
  border-radius: 20px;
  background-color: var(--calc-bg);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: 1px solid var(--txt-white);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  transition: all 0.8s ease;

  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`;
export const Result = styled.div`
  position: relative;
  margin-bottom: 20px;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const Exp = styled.div`
  font-size: 3.5rem;
  line-height: 1;
  transform-origin: right bottom;
  transition: transform 0.3s ease;
  color: var(--calc-res-color);

  &:last-child {
    position: absolute;
    right: 0;
  }
  span {
    display: inline-block;
    overflow: hidden;
    transition: width 0.3s ease;
  }
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  opacity: 0;

  button {
    border: 0;
    outline: 0;
    border-radius: 10px;
    font-size: 1.25rem;
    font-weight: 500;
    background-color: transparent;
    color: var(--txt-color);

    &:last-child {
      color: var(--txt-white);
      background-image: linear-gradient(312deg, #cd6e36, #d400ff);
    }
  }
  .btn-operator {
    color: var(--calc-btn-color);
  }
`;
