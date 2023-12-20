"use client";

import { useCompletion } from "ai/react";
import { useState } from "react";
import styled from "styled-components";

export default function Page() {
  // const { completion, data, input, handleInputChange, handleSubmit } =
  //   useCompletion();
  const [data, setData] = useState<string>();
  const [data2, setData2] = useState<string>();
  const { complete } = useCompletion({
    api: "/api/completion",
  });

  const [result, setResult] = useState("");
  // const [test2, setTest2] = useState<string>();
  // const [test4, setTest3] = useState<string>();

  const handleSubmit = async () => {
    const result = `${data}, ${data2}`;

    const completion = await complete(result);
    // const typos = JSON.parse(completion);
    console.log("completion", completion);
  };

  return (
    <div>
      {/* {data && <div>{JSON.stringify(data, null, 2)}</div>} */}
      {/* {messages.map((m) => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))} */}
      {/* {completion} */}
      {/* {result} */}
      {/* <form onSubmit={handleSubmit}> */}
      <input value={data} onChange={(e) => setData(e.target.value)} />
      <input value={data2} onChange={(e) => setData2(e.target.value)} />
      {/* </form> */}
      <button type="button" onClick={handleSubmit}>
        제출
      </button>
    </div>
  );
}
