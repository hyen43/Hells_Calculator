import styled from "styled-components";

type ButtonProps = {
  handleClick: () => void;
  title: string;
};

const ButtonWrapper = styled.button`
  width: 100%;
  max-width: 200px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color.deepPink};
  color: ${({ theme }) => theme.color.white};
  font-size: 20px;
`;

export default function Button({ handleClick, title }: ButtonProps) {
  return (
    <ButtonWrapper type="button" onClick={handleClick}>
      {title}
    </ButtonWrapper>
  );
}
