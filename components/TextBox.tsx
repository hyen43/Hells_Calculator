import styled from "styled-components";

const TextBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px 30px; // 모바일일 때 수정
  width: 80%; // 모바일일 때 수정
  border: ${({ theme }) => `1px solid ${theme.color.primaryPink}`};
  border-radius: 10px;
`;

const Result = styled.h2`
  color: ${({ theme }) => theme.color.pointPink};
`;

const Contents = styled.div`
  color: ${({ theme }) => theme.color.gray};
`;

export default function TextBox() {
  return (
    <TextBoxWrapper>
      <Result>총 00 칼로리</Result>
      <Contents>
        닭가슴살 칼로리는 00이며 이러하고 저러하다 이러하고 저러하다 이러하고
        저러하다 이러하고 저러하다 이러하고 저러하다 이러하고 저러하다 이러하고
        저러하다 이러하고 저러하다 이러하고 저러하다 이러하고 저러하다 이러하고
        저러하다 이러하고 저러하다 이러하고 저러하다 이러하고 저러하다 이러하고
        저러하다 이러하고 저러하다
      </Contents>
    </TextBoxWrapper>
  );
}
