import { useEffect, useState } from "react";
import { api } from "../api/api";

export default function AssignmentList() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    api.get("/assignments").then(res => setAssignments(res.data));
  }, []);

  return (
    <div className="assignments">
      {assignments.map(a => (
        <div key={a._id} className="assignment-card">
          <h3>{a.title}</h3>
          <p>{a.question}</p>
        </div>
      ))}
    </div>
  );
}