import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const handleDownloadCSV = async () => {
    const file: any = await axios.post(
      "http://localhost:3000/export/csv",
      {},
      { responseType: "blob" }
    );

    const blob = new Blob([file.data], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const pom = document.createElement("a");
    pom.href = url;
    pom.setAttribute("download", "file.csv");
    pom.click();
  };

  const handleDownloadXlsx = async () => {
    const file: any = await axios.post(
      "http://localhost:3000/export/xlsx",
      {},
      { responseType: "blob" }
    );

    const blob = new Blob([file.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });
    const url = URL.createObjectURL(blob);
    const pom = document.createElement("a");
    pom.href = url;
    pom.setAttribute("download", "file.xlsx");
    pom.click();
  };
  return (
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="export-container">
        <h1>Client - Export</h1>
        <button className="button-general" onClick={handleDownloadCSV}>
          Export CSV
        </button>
        <button
          className="button-general"
          style={{ background: "green" }}
          onClick={handleDownloadXlsx}
        >
          Export XLSX
        </button>
      </div>
    </div>
  );
}

export default App;
