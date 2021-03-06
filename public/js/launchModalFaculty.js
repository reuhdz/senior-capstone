// output information into modal
var idGlobal;
var nameGlobal;
var titleGlobal

function launchStudentModal(
  status,
  title,
  id,
  abstract,
  primary,
  coPres,
  faculty,
  lastEdit
) {
  idGlobal = id;
  nameGlobal = primary;
  titleGlobal = title;
  document.getElementById("studentTitle").innerHTML = title;

  //change badge color in modal
  if (status == 'Pending ORSP') {
    document.getElementById("studentSubmissionID").className = "badge badge-info";
  }
  else if (status == 'Approved') {
    document.getElementById("studentSubmissionID").className = "badge badge-success";
  }
  else if (status == 'Denied') {
    document.getElementById("studentSubmissionID").className = "badge badge-danger";
  }
  else if (status == 'Pending Faculty') {
    document.getElementById("studentSubmissionID").className = "badge badge-warning";
  }
  else if (status == 'Pending PPT') {
    document.getElementById("studentSubmissionID").className = "badge badge-warning";
  }
  else {
    document.getElementById("studentSubmissionID").className = "badge badge-warning";
  }

  document.getElementById("studentSubmissionID").innerHTML = status + ": #" + id;
  if (status == "Pending Faculty") {
    document.getElementById("editStudentsAbstarct").style.visibility = "visible";
    document.getElementById("approveStudent").style.visibility = "visible";
    document.getElementById("denyStudent").style.visibility = "visible";
  }
  else {
    document.getElementById("editStudentsAbstarct").style.visibility = "hidden";
    document.getElementById("approveStudent").style.visibility = "hidden";
    document.getElementById("denyStudent").style.visibility = "hidden";
  }
  document.getElementById("studentAbstractLaunchModal").value = abstract;
  document.getElementById("studentPrimary").innerHTML = primary;
  document.getElementById("studentCoPres").innerHTML = coPres;
  document.getElementById("studentFaculty").innerHTML = faculty;
  document.getElementById("studentLastEdit").innerHTML = "Last edited on " + lastEdit;
}

function launchFacultySubmissionModal(
  step,
  title,
  id,
  abstract,
  description,
  primary,
  coPres,
  faculty,
  lastEdit
) {
  console.log("Test Faculty");
  document.getElementById("title").innerHTML = title;

 //change badge color in modal
if (step == 'Pending Approval') {
  document.getElementById("status").className = "badge badge-info";
}
else if (step == 'Approved') {
  document.getElementById("status").className = "badge badge-success";
}
else if (step == 'Denied') {
  document.getElementById("status").className = "badge badge-danger";
}
else {
  document.getElementById("status").className = "badge badge-warning";
}

  document.getElementById("status").innerHTML = step + ": #" + id;
  
  // need to know what status their are
  if (step == "Upload Required") {
    document.getElementById("IPO").style.visibility = "visible";
    $("#customFile").on('change', () => {
      console.log(status);
      $("input[id^='fileID']").attr('value', status);
    })
  }
  else if (step == "Faculty Review") {
    document.getElementById("edit").style.visibility = "visible";
    document.getElementById("approve").style.visibility = "visible";
  }

  document.getElementById("abstractLaunchModal").innerHTML = abstract;
  document.getElementById("description").innerHTML = description;
  document.getElementById("primary").innerHTML = primary;
  document.getElementById("coPres").innerHTML = coPres;
  document.getElementById("faculty").innerHTML = faculty;
  document.getElementById("lastEdit").innerHTML = "Last edited on " + lastEdit;
}

// Make div border grey to see it when in edit mode
function editAbstarct() {
  document.getElementById("studentAbstractLaunchModal").style.borderColor = "grey";
  document.getElementById("studentAbstractLaunchModal").readOnly = false;
}

// Make div border white to hide it when not in edit mode
function doneEditAbstarct() {
  document.getElementById("studentAbstractLaunchModal").style.borderColor = "white";
  document.getElementById("studentAbstractLaunchModal").readOnly = true;
}

// make the div editable
function editable() {
  var h1 = document.getElementsByTagName("input")[0];
  var att = document.createAttribute("contenteditable");
  att.value = "true";
  h1.setAttributeNode(att);
}

//make the div none editable
function noteditable() {
  var h1 = document.getElementsByTagName("input")[0];
  var att = document.createAttribute("contenteditable");
  att.value = "false";
  h1.setAttributeNode(att);
}

$("edit btn btn-primary").click(function () {
  $(".my-textbox").focus();
});
