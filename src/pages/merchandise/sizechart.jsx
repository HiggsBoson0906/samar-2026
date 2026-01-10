import React from "react";

const SizeChart = () => {
  const tableStyle = {
    borderCollapse: "collapse",
    width: "50%",

    color: "white", // White text
    background: "transparent" // No background
  };

  const cellStyle = {
    border: "2px solid white", // White borders
    textAlign: "center",
    padding: "10px",
    fontSize: "16px"
  };

  const headerStyle = {
    ...cellStyle,

    fontSize: "15px"
  };

  return (
    <div style={{ backgroundColor: "transparent" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>SIZE</th>
            <th style={headerStyle}>S</th>
            <th style={headerStyle}>M</th>
            <th style={headerStyle}>L</th>
            <th style={headerStyle}>XL</th>
            <th style={headerStyle}>XXL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={headerStyle}>LENGTH</th>
            <td style={cellStyle}>26</td>
            <td style={cellStyle}>27</td>
            <td style={cellStyle}>28</td>
            <td style={cellStyle}>29</td>
            <td style={cellStyle}>30</td>
          </tr>
          <tr>
            <th style={headerStyle}>CHEST</th>
            <td style={cellStyle}>36</td>
            <td style={cellStyle}>38</td>
            <td style={cellStyle}>40</td>
            <td style={cellStyle}>42</td>
            <td style={cellStyle}>44</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SizeChart;
