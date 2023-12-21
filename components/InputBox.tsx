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

export default function InputBox({
  id,
  label,
  placeholder,
  value,
  handleChange,
}: InputBoxProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        name={id}
        id={id}
        value={value}
        onChange={(e) => handleChange(id, e)}
        maxLength={100}
      />
    </div>
  );
}
