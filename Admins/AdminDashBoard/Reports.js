const reports = [
    { id: 1, name: "Stethoscope", manufacturer: "Medtronic", date: "12/10/24", reporter: "ABCCC", severity: "HIGH" },
    { id: 2, name: "Thermometer", manufacturer: "Johnson Devices", date: "16/10/24", reporter: "ABCCC", severity: "LOW" },
    { id: 3, name: "Glucometer", manufacturer: "Siemens", date: "18/10/24", reporter: "ABCCC", severity: "HIGH" },
    { id: 4, name: "ECG", manufacturer: "GE healthcare", date: "21/10/24", reporter: "ABCCC", severity: "MEDIUM" },
    { id: 5, name: "Endoscope", manufacturer: "Philips", date: "22/10/24", reporter: "ABCCC", severity: "LOW" },
    { id: 6, name: "Colonoscope", manufacturer: "Boston", date: "23/10/24", reporter: "ABCCC", severity: "HIGH" },
    { id: 7, name: "Otoscope", manufacturer: "Stryker", date: "01/11/24", reporter: "ABCCC", severity: "MEDIUM" },
    { id: 8, name: "Doppler", manufacturer: "Zimmer", date: "03/11/24", reporter: "ABCCC", severity: "MEDIUM" },
    { id: 9, name: "MRI", manufacturer: "Opto Circuits", date: "05/11/24", reporter: "ABCCC", severity: "HIGH" },
    { id: 10, name: "CT", manufacturer: "Vygon India", date: "07/11/24", reporter: "ABCCC", severity: "HIGH" },
    { id: 11, name: "Pulse Oximeter", manufacturer: "BPL", date: "17/11/24", reporter: "ABCCC", severity: "LOW" },
  ];
  
  const tableBody = document.getElementById("table-body");
  
  reports.forEach((report, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${report.name}</td>
      <td>${report.manufacturer}</td>
      <td>${report.date}</td>
      <td>${report.reporter}</td>
      <td class="severity-${report.severity.toLowerCase()}">${report.severity}</td>
      <td>
        <div class="dropdown">
          <select>
            <option value="">Select</option>
            <option value="View">View</option>
            <option value="Edit">Edit</option>
            <option value="Delete">Delete</option>
          </select>
        </div>
      </td>
    `;
    tableBody.appendChild(row);
  });
  