import { useState } from "react";
import { executeSQL, getHint } from "../api/api";

export default function SqlEditor({ question }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [hint, setHint] = useState("");

  const runQuery = async () => {
    const res = await executeSQL(query);
    setResult(res);
  };

  const fetchHint = async () => {
    const res = await getHint(question, query);
    setHint(res.hint || "Try focusing on SELECT and FROM clauses.");
  };

  return (
    <div>
      <textarea
        placeholder="Write your SQL query here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <br />

      <button onClick={runQuery}>Run Query</button>
      <button onClick={fetchHint}>Get Hint</button>

      {hint && (
        <p style={{ background: "#fff3cd", padding: "8px" }}>
          💡 {hint}
        </p>
      )}

      {result && (
        <pre style={{ background: "#000", color: "#0f0", padding: "10px" }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
