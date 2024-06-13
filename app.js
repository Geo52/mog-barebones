function getSelectedValues() {
  event.preventDefault();

  let exerciseDropdown = document.getElementById("exercise-dropdown");
  let exerciseDropdownSelectedValue = exerciseDropdown.value;

  let weightInput = document.getElementById("weight-input");
  let weightInputedValue = weightInput.value;

  let repsInput = document.getElementById("reps-input");
  let repsInputValue = repsInput.value;

  alert(
    repsInputValue + exerciseDropdownSelectedValue + " " + weightInputedValue
  );
}
