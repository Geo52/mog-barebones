const inputForm = document.querySelector("form");
const divThatDisplaysExerciseName = document.getElementById("exercise-history");

inputForm.addEventListener("submit", diplayValues);

function diplayValues(e) {
  e.preventDefault();

  // get all the inputted values from the form
  const selectedExercise = document.getElementById("exercise-dropdown").value;
  const weightInput = document.getElementById("weight-input").value;
  const repsInput = document.getElementById("reps-input").value;

  const newListItem = document.createElement("div");
  newListItem.textContent = selectedExercise;
  divThatDisplaysExerciseName.append(newListItem);

  const newListItem2 = document.createElement("div");
  newListItem2.textContent = "Weight: " + weightInput;
  divThatDisplaysExerciseName.append(newListItem2);

  const newListItem3 = document.createElement("div");
  newListItem3.textContent = "Reps: " + repsInput;
  divThatDisplaysExerciseName.append(newListItem3);

  const newListItem4 = document.createElement("br");
  divThatDisplaysExerciseName.append(newListItem4);
}
