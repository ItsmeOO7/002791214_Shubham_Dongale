function Title(t1) 
{ this.mytitle = t1;
}
Title.prototype.getName = function () { 
return (this.mytitle); }

let t = new Title("CONNECT WITH ME!");
let toggleCount = 0;
let editCol = document.getElementById("editCol");
let delCol = document.getElementById("delCol");
let submitButton = document.getElementById("button");
let tableParent = document.getElementById("myTable");
let firstRow = tableParent.rows[1].cloneNode(true);
let studInfo = tableParent.rows[2].cloneNode(true);
function addNewStudent() {
  console.log("Add new button was pressed");
  let tableParent = document.getElementById("myTable");
  let length = tableParent.rows.length;
  if(length === 1) {
    createNewStudentRecord();
  } else {
    let new_row = tableParent.rows[length - 2].cloneNode(true);
    let studentInfo = tableParent.rows[length - 1].cloneNode(true);
    let rowId = parseInt(new_row.id) + 1;
    new_row.cells[1].innerHTML = "Student" + " " + rowId;
    new_row.cells[2].innerHTML = "Teacher" + " " + rowId;
    new_row.cells[6].innerHTML = Math.floor(Math.random()*12345) + 23456;
    new_row.id = rowId;
    studentInfo.id = 'addInfo' + ((length + 1) / 2);
    tableParent.appendChild(new_row);
    tableParent.appendChild(studentInfo);
    console.log(length, new_row, studentInfo);
  }
  return true;
}
function createNewStudentRecord() {
  let tableParent = document.getElementById("myTable");
  tableParent.appendChild(firstRow);
  tableParent.appendChild(studInfo);
  return true;
}
function addStudent() {
  try {
    if(addNewStudent()) {
      alert("New Student record added!!");
    }
  } catch(err) {
    console.log(err);
    alert("Error while adding new record!!");
  }
}
function showHiddenRow(rowId) {
  console.log(rowId);
  let hidRow = rowId.parentElement.parentElement.nextElementSibling;
  if (hidRow.style.display === "none") {
    hidRow.style.display = "block";
  } else {
    hidRow.style.display = "none";
  }
}
function editRow(rowId) {
  btnEnableDisable(toggleCount);
  prompt("You are editing");
}
function delRow(rowId) {
  let row = rowId.parentNode.parentNode;
  let sibRow = row.nextElementSibling;
  row.parentNode.removeChild(row);
  sibRow.parentNode.removeChild(sibRow);
  toggleCount -= 1;
  btnEnableDisable(toggleCount);
  alert("Deleted selected record!!");
}
function rowSelect(rowId) {

  let a = rowId.parentNode.parentNode;

  if (rowId.checked) {
    toggleCount += 1;
    btnEnableDisable(toggleCount);
    a.lastElementChild.previousElementSibling.removeAttribute("class");
    a.lastElementChild.removeAttribute("class");
    a.style.backgroundColor = "yellow";
  }
  else {
    toggleCount -= 1;
    btnEnableDisable(toggleCount);
    a.style.backgroundColor = "white";
    a.lastElementChild.classList.add("delete");
    a.lastElementChild.previousElementSibling.classList.add("edit");
  }
}

function btnEnableDisable(toggleCount) {
  let submitBtn = document.getElementById("button");
  if (toggleCount >= 1) {
    submitBtn.style.border = "2px solid orange";
    submitBtn.style.backgroundColor = "orange";
    submitButton.removeAttribute("disabled");
    delCol.removeAttribute("class");
    editCol.removeAttribute("class");
  }
  else {
    submitBtn.style.removeProperty("border");
    submitBtn.style.removeProperty("background-color");
    delCol.classList.add("delete");
    editCol.classList.add("edit");
  }

}