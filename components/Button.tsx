import styled from "styled-components";

type ButtonProps = {
  handleClick: () => void;
};

export default function Button({ handleClick }: ButtonProps) {
  return (
    <ButtonWrapper type="button" onClick={handleClick}>
      칼로리 계산하기
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  width: 100%;
  max-width: 200px;
  height: 60px;
  border-radius: 30px;
  /* background-color: ; */
`;
