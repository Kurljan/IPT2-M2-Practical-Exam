document.addEventListener("DOMContentLoaded", function () {
    const addSubjectButton = document.getElementById("addSubject");
    const tableBody = document.getElementById("table-content");
    const subjectForm = document.getElementById("subjectForm");

    if (!addSubjectButton || !tableBody || !subjectForm) {
        return;
    }

    addSubjectButton.addEventListener("click", function () {
        const subjectCode = document.getElementById("subjectCode").value.trim();
        const subjectName = document.getElementById("subjectName").value.trim();
        const units = document.getElementById("units").value.trim();

        if (!subjectCode || !subjectName || !units) {
            alert("Please fill in all subject fields.");
            return;
        }

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${subjectCode}</td>
            <td>${subjectName}</td>
            <td>${units}</td>
        `;

        tableBody.appendChild(row);
        subjectForm.reset();
    });
});
