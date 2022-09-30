import styled from "styled-components";

export const Container = styled.div`
  max-height: 567px;
  max-width: 286px;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-bottom: none;
  margin-top: 50px;
  align-items: center;
`;

export const Layer = styled.img`
  position: absolute;
`;
export const BackButton = styled.button`
  border: none;
  background-color: white;
  :active {
    transform: translateY(4px);
  }
`;
export const ButtonWarpper = styled.div`
  margin-top: 60px;
`;
export const Back = styled.img`
  width: 24px;
  height: 24px;
`;
