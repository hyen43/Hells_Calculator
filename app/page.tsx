"use client";

import { useCompletion } from "ai/react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { InputLabel } from "constants/InputLable";
import InputBox from "components/InputBox";
import TitleBox from "components/TitleBox";
import { useStore } from "./store/useStore";

export default function Page() {
  const { values, setValue } = useStore();

  const { complete } = useCompletion({
    api: "/api/completion",
  });

  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const result = `${data}, ${data2}`;

    const completion = await complete(result);
    // const typos = JSON.parse(completion);
    console.log("completion", completion);
  };

  const handleChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue: string = e.target.value;
    setValue(id, targetValue);
  };

  return (
    <>
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
    </>
  );
}
