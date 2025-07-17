import React, { useState } from "react";

function Test() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    const result = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer API입력해`, // 여기에 직접 API 키 입력 (⚠️ 비추천)
      },
      body: JSON.stringify({
        model: "gpt-4o",
        input: [
          {
            role: "user",
            content: "알리오올리오 파스타 레시피를 알려줘.",
          },
        ],
      }),
    });

    const data = await result.json();
    setResponse(data.output_text || JSON.stringify(data));
    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>OpenAI Responses API 테스트</h1>
      <button onClick={handleClick} disabled={loading}>
        {loading ? "불러오는 중..." : "요청 보내기"}
      </button>
      <pre style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>{response}</pre>
    </div>
  );
}

export default Test;
