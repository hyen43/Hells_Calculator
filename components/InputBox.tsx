import styled from "styled-components";

type InputBoxProps = {
  id: string; // state 분리 확인용
  label: string;
  placeholder: string;
  value: string;
  handleChange: (
    id: string,
    targetValue: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

const InputBoxWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  max-width: 500px;
  width: 100%;
  height: 80px;
  padding: 10px;
  border: ${({ theme }) =>
    `3px solid ${theme.color?.primaryPink ?? "#FFE0E0"}`};
  border-radius: 10px;
  box-shadow: ${({ theme }) =>
    `2px  2px 4px 0px ${theme.color?.primaryPink ?? "#FFE0E0"}`};
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

const Input = styled.input`
  flex: 1; // flex 나머지 부분만 차지
  height: 100%;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.color?.lightGray ?? "#E9E9E9"}`};
  padding: 5px;

  &::placeholder {
    font-size: 12px;
    vertical-align: middle;
  }
`;

export default function InputBox({
  id,
  label,
  placeholder,
  value,
  handleChange,
}: InputBoxProps) {
  return (
    <InputBoxWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type="text"
        placeholder={`ex. ${placeholder} (최대 100자)`}
        name={id}
        id={id}
        value={value}
        onChange={(e) => handleChange(id, e)}
        maxLength={100}
      />
    </InputBoxWrapper>
  );
}
