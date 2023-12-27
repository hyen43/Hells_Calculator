"use client";

import { useCompletion } from "ai/react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { InputLabel } from "constants/InputLable";
import Wrapper from "components/Wrapper";
import InputBox from "components/InputBox";
import TitleBox from "components/TitleBox";
import Button from "components/Button";
import { useRouter } from "next/navigation";
import { usePrompt } from "utils/usePrompt";
import { toast } from "react-hot-toast";
import { useStore, useResultStore } from "./store/useStore";

export default function Page() {
  const { values, setValue } = useStore();
  const { result, setResult } = useResultStore();
  const router = useRouter();

  const { complete } = useCompletion({
    api: "/api/completion",
  });

  const handleClick = () => {
    const { breakfast, lunch, dinner, snack } = values;
    if (!breakfast && !lunch && !dinner && !snack) {
      toast.error("내용을 입력해주세요!");
      return;
    }
    // 1. values를 가공하는 함수를 돌린다.
    // eslint-disable-next-line react-hooks/rules-of-hooks

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const prompt = usePrompt(values);
    console.log("prompt", prompt);
    // 2. 해당 결과를 complete 함수에 넣는다.
    // const completion = await complete(result);
    // const typos = JSON.parse(completion);
    console.log("completion", completion);
    // 3. 결과가 나오면, store에 저장한다.  (결과가 나오지 않으면 loading 띄어주기)
    const res = "이 테스트가 들어가나?";
    setResult(res);
    // 4. 페이지를 이동한다.
    router.push("/result");
    // 5. values를 초기화 한다.
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
