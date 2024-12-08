import React, { useEffect, useState } from "react";
import Headers from "./header/Headers";
import Sidebar from "./Sidebar/Sidebar";
import MainContent from "./MainContent/MainContent";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import "./app.css";
import Diagnostic from "./Diagnostic/Diagnostic";
import Labresult from "./lab_result/Labresult";
const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [diagnosis_history, setDiagnosis_history] = useState([]);
  const [diagnostic_list, setDiagnostic_list] = useState([]);
  const [person, setPerson] = useState({});

  useEffect(() => {
    const url = "https://fedskillstest.coalitiontechnologies.workers.dev";
    const username = "coalition";
    const password = "skills-test";

    const credentials = btoa(`${username}:${password}`);

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        if (data && data.length > 0) {
          setDiagnosis_history(data[0].diagnosis_history);
          setDiagnostic_list(data[0].diagnostic_list);
          setPerson(data[0]);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  // console.log(data);
  return (
    <div>
      <Headers />
      <div className="main-container">
        <div className="sidebar">
          {data ? (
            <Sidebar data={data} />
          ) : (
            <div className="loading-message">Loading patients...</div>
          )}
        </div>

        <div className="mainContent">
          <div className="main-content-div">
            <MainContent diagnosis_history={diagnosis_history || []} />
          </div>
          <div className="diagnosis">
            <Diagnostic diagnostic_list={diagnostic_list || []} />
          </div>
        </div>
        <div className="profileDetails">
          <div>
            <ProfileDetails person={person || {}} />
          </div>
          <div>
            <Labresult />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
