function searchBook() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const shelfData = [
    { subject: "Philosophy, Psychology, Library and Information Science", cl: "001-154", rack: "1", shelf: "20", directions: "Left of entrance near Competitive Exam corner." },
    { subject: "Child Psychology", cl: "155-155.412", rack: "2", shelf: "21", directions: "Left wing, beside early Psychology section." },
    { subject: "Abnormal Psychology and Counselling", cl: "155.413-158.7", rack: "3", shelf: "22", directions: "Follow Psychology aisle past Rack 2." },
    // 🔄 Continue adding all entries from the Excel file here
  ];

  const result = shelfData.find(item =>
    item.subject.toLowerCase().includes(input) || item.cl.includes(input)
  );

  const display = document.getElementById("result");
  if (result) {
    display.innerHTML = `
      <strong>📚 Subject:</strong> ${result.subject}<br>
      <strong>📍 Rack:</strong> ${result.rack}<br>
      <strong>🗄️ Shelf:</strong> ${result.shelf}<br>
      <strong>🧭 Directions:</strong> ${result.directions}
    `;
  } else {
    display.innerHTML = "❌ Sorry, no match found. Try a different subject or class number.";
  }
}
