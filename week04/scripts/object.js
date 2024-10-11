// Example array of sections
const sections = [
  { sectionNum: 101, room: "A1", enrolled: 25, days: "MWF", instructor: "John Doe" },
  { sectionNum: 102, room: "B2", enrolled: 18, days: "TTH", instructor: "Jane Smith" },
  { sectionNum: 103, room: "C3", enrolled: 30, days: "MWF", instructor: "Mark Brown" },
];

// Function to render the sections table
function renderSections(sections) {
  const tbody = document.querySelector("#sections");
  tbody.innerHTML = ""; // Clear the table before re-rendering

  sections.forEach((section) => {
    const row = `
      <tr>
        <td>${section.sectionNum}</td>
        <td>${section.room}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// Initial rendering of sections
renderSections(sections);

// Function to change enrollment
function changeEnrollment(sectionNum, add = true) {
  // Find the index of the section matching the given sectionNum
  const sectionIndex = sections.findIndex(
    (section) => section.sectionNum == sectionNum
  );

  // If the section is found (i.e., index is not -1)
  if (sectionIndex >= 0) {
    // Increase or decrease the enrolled count based on the 'add' flag
    if (add) {
      sections[sectionIndex].enrolled++;
    } else {
      // Prevent enrollment from going below zero
      if (sections[sectionIndex].enrolled > 0) {
        sections[sectionIndex].enrolled--;
      }
    }

    // Re-render the sections after updating the enrollment count
    renderSections(sections);
  } else {
    alert(`Section ${sectionNum} not found`);
  }
}

// Add event listeners for the enroll and drop buttons
document.querySelector("#enrollStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  if (sectionNum) {
    changeEnrollment(sectionNum, true); // Enroll a student
  }
});

document.querySelector("#dropStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  if (sectionNum) {
    changeEnrollment(sectionNum, false); // Drop a student
  }
});
