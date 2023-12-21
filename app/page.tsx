"use client";

import { useCompletion } from "ai/react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { InputLabel } from "constants/InputLable";
import Wrapper from "components/Wrapper";
import InputBox from "components/InputBox";
import TitleBox from "components/TitleBox";
import Button from "components/Button";
import { useStore } from "./store/useStore";

export default function Page() {
  const { values, setValue } = useStore();

  const { complete } = useCompletion({
    api: "/api/completion",
  });

  const [result, setResult] = useState("");

  const handleClick = async () => {
    console.log("values", values);

    // 1. values를 가공하는 함수를 돌린다.
    // 2. 해당 결과를 complete 함수에 넣는다.
    // 3. 결과가 나오면, store에 저장한다.  (결과가 나오지 않으면 loading 띄어주기)
    // 4. 페이지를 이동한다.
    // 5. values를 초기화 한다.

    // const completion = await complete(result);
    // const typos = JSON.parse(completion);
    // console.log("completion", completion);
  };

  const handleChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue: string = e.target.value;
    setValue(id, targetValue);
  };

  return (
    <Wrapper>
      <TitleBox />
      {InputLabel.map(({ id, label, placeholder }) => (
        <InputBox
          key={id}
          id={id}
          label={label}
          placeholder={placeholder}
          value={values[id]}
          handleChange={handleChange}
        />
      ))}
      <Button handleClick={handleClick} />
    </Wrapper>
  );
}
