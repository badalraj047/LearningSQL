import { useEffect, useState } from "react";
import { getAssignments } from "../api/api";
import SqlEditor from "../components/SqlEditor";

export default function AssignmentList() {
  const [assignments, setAssignments] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getAssignments().then(setAssignments);
  }, []);

  if (selected) {
    return (
      <div>
        <h2>{selected.title}</h2>
        <p><b>Difficulty:</b> {selected.description}</p>
        <p>{selected.question}</p>

        <h4>Sample Table: employees</h4>
        <ul>
          <li>id (INTEGER)</li>
          <li>name (TEXT)</li>
          <li>salary (INTEGER)</li>
        </ul>

        <SqlEditor question={selected.question} />

        <br />
        <button onClick={() => setSelected(null)}>⬅ Back</button>
      </div>
    );
  }

  return (
    <div>
      <h1>CipherSQLStudio</h1>

      {assignments.map((a) => (
        <div key={a._id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h3>{a.title}</h3>
          <p>{a.description}</p>
          <button onClick={() => setSelected(a)}>Attempt</button>
        </div>
      ))}
    </div>
  );
}
