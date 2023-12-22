import styled from "styled-components";

const TextBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px;
  width: 50%;
  border: ${({ theme }) => `1px solid ${theme.color.primaryPink}`};
  border-radius: 10px;
`;

const Result = styled.h2`
  color: ${({ theme }) => theme.color.pointPink};
`;

export default function TextBox() {
  return (
    <TextBoxWrapper>
      <Result>총 00 칼로리</Result>
    </TextBoxWrapper>
  );
}
