let condition;

do {
  const midtermGrade = Number(prompt("enter your midterm grade"));
  const finalGrade = Number(prompt("enter your final grade"));
  if (isNaN(midtermGrade) || isNaN(finalGrade)) {
    alert("Please enter valid grades for a calculation.");
    condition = confirm("Would you like to calculate again?");
    continue;
  }
  const grade = (midtermGrade / 10) * 4 + (finalGrade / 10) * 6;
  alert(`Your grade for this class is ${grade}`);
  condition = confirm("Would you like to calculate again?");
} while (condition);
