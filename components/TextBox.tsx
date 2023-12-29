import { useState, useEffect } from "react";
import styled from "styled-components";
import { useResultStore } from "../app/store/useStore";

const TextBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 60%;
  border: ${({ theme }) =>
    `1px solid ${theme.color?.primaryPink ?? "#FFE0E0"}`};
  border-radius: 10px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Result = styled.h2`
  color: ${({ theme }) => theme.color?.pointPink || "#FF9E9E"};
`;

const Contents = styled.div`
  width: 100%;
  padding: 20px 30px;
  color: ${({ theme }) => theme.color?.gray || "#8F8F8F"};
  max-height: 300px;
  overflow-y: auto;
  @media only screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

export default function TextBox() {
  const { result } = useResultStore();
  const [totalResult, setTotalResult] = useState("");

  const findResult = () => {
    // eslint-disable-next-line array-callback-return
    result.split("\n").map((line) => {
      if (line.includes("**")) {
        // eslint-disable-next-line array-callback-return
        line.split("**").map((text, index) => {
          if (text && index % 2 !== 0) {
            setTotalResult(text);
          }
        });
      }
    });
  };
  useEffect(() => {
    if (!result) return;
    findResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  const resultJSX = (
    <div>
      {result?.split("\n").map((line, index) => {
        // <p key={index}>{line}</p>
        if (line.includes("**")) {
          const boldText = line?.split("**").map((text, index2) => {
            if (index % 2 === 0) {
              // eslint-disable-next-line react/no-array-index-key
              return <span key={index2}>{text}</span>;
            }
            // eslint-disable-next-line react/no-array-index-key
            return <strong key={index2}>{text}</strong>;
          });
          // eslint-disable-next-line react/no-array-index-key
          return <p key={index}>{boldText}</p>;
        }
        // eslint-disable-next-line react/no-array-index-key
        return <p key={index}>{line}</p>;
      })}
    </div>
  );

  return (
    <TextBoxWrapper>
      {totalResult && <Result> 총 {totalResult} 칼로리</Result>}
      <Contents>{result && resultJSX}</Contents>
    </TextBoxWrapper>
  );
}
