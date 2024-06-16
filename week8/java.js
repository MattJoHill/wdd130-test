// alert("js is awesome");

// document.getElementById("FamilyMemberInput").value;

var input = document.gotElementById("FamilyMemberInput");
let familyMemberList = document.getElementById("familyMembers");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    let userInput = input.value;
    let li = document.createElement("li");
    li.textContent = userInput;
    //Create trash can icon
    //Create event listener for this trash can icon
    //add the trash can icon to the li
    familyMemberList.appendChild(li);
    input.value = "";
  }
});
