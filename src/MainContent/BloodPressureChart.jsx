import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const BloodPressureChart = ({ diagnosisHistory }) => {
  if (!diagnosisHistory || diagnosisHistory.length === 0) {
    return <div>No diagnosis history available.</div>;
  }

  const monthToNumber = (month) => new Date(`${month} 1, 2024`).getMonth();

  const dataWithDates = diagnosisHistory.map((entry) => ({
    ...entry,
    date: new Date(entry.year, monthToNumber(entry.month)),
  }));

  const sortedData = dataWithDates.sort((a, b) => b.date - a.date);

  const filteredData = sortedData.slice(0, 6).map((entry) => ({
    month: `${entry.month.slice(0, 3)} ${entry.year}`,
    systolic: entry.blood_pressure.systolic.value,
    diastolic: entry.blood_pressure.diastolic.value,
  }));

  return (
    <div className="blood-pressure">
      <div style={{ width: "70%", height: 200 }}>
        <div className="blood-pressure-div">
          <h3>Blood Pressure</h3>
          <div style={{ margin: "auto 0px" }}>
            Last 6 months
            <img src="dropdown.png" alt="" />
          </div>
        </div>
        <ResponsiveContainer>
          <LineChart
            data={filteredData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="systolic"
              stroke="#D84F91"
              activeDot={{ r: 8 }}
              name="Systolic Pressure"
            />
            <Line
              type="monotone"
              dataKey="diastolic"
              stroke="#845EC2"
              activeDot={{ r: 8 }}
              name="Diastolic Pressure"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div style={{ width: "25%", height: 298 }}>
        <div>
          <h3>Systolic</h3>
          <h1>160</h1>
          <div>
            <img src="ArrowUp.svg" alt="" />
            &nbsp; &nbsp;
            <span>Higher than Average</span>
          </div>
        </div>
        <div className="border-bar"></div>
        <div>
          <h3>Diastolic</h3>
          <h1>78</h1>
          <div>
            <img src="ArrowDown.svg" alt="" />
            &nbsp; &nbsp;
            <span>Lower than Average</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
