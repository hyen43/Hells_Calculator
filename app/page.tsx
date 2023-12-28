"use client";

import { useCompletion } from "ai/react";
import { useState, useEffect } from "react";
import { InputLabel } from "constants/InputLable";
import Wrapper from "components/Wrapper";
import InputBox from "components/InputBox";
import TitleBox from "components/TitleBox";
import Button from "components/Button";
import Spinner from "components/Spinner";
import { useRouter } from "next/navigation";
import { usePrompt } from "utils/usePrompt";
import { toast } from "react-hot-toast";
import { useStore, useResultStore } from "./store/useStore";

export default function Page() {
  const { values, setValue, removeAllValues } = useStore();
  const { setResult, removeResultValue } = useResultStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    removeResultValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { complete } = useCompletion({
    api: "/api/completion",
  });

  const handleClick = async () => {
    const { breakfast, lunch, dinner, snack } = values;
    if (!breakfast && !lunch && !dinner && !snack) {
      toast.error("내용을 입력해주세요!");
      return;
    }
    // 1. values를 가공하는 함수를 돌린다.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const prompt = usePrompt(values);
    try {
      // spinner를 넣는다.
      setLoading(true);
      // 2. 해당 결과를 complete 함수에 넣는다.
      const completion = await complete(prompt);
      // const typos = JSON.parse(completion);
      // 3. 결과가 나오면, store에 저장한다.  (결과가 나오지 않으면 loading 띄어주기)
      setResult(completion);
      // 4. 페이지를 이동한다.
      router.push("/result");
      // 5. values를 초기화 한다.

      removeAllValues();
    } catch (error) {
      toast.error("AI 생성에 오류가 생겼습니다. 잠시 후에 다시 시작해주세요.");
    } finally {
      // 스피너를 종료한다.
      setLoading(false);
    }
  };

  const handleChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue: string = e.target.value;
    setValue(id, targetValue);
  };

  return (
    <>
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
        <Button handleClick={handleClick} title="칼로리 계산하기" />
      </Wrapper>
      {loading && <Spinner />}
    </>
  );
}
