/*
    Scrie o funcție care primește ca parametru un număr și întoarce un calificativ.
    Încearcă să scrii cât mai puține instrucțiuni.
    
    Calificative:
    10: FB
     9: FB
     8: B
     7: B
     6: S
     5: S
     4: IS
     3: IS
     2: IS
     1: IS
*/
const grade = function (mark) {
  if (mark <= 4) {
    return "IS";
  } else if (mark <= 6) {
    return "S";
  } else if (mark <= 8) {
    return "B";
  } else {
    return "FB";
  }
};
console.log(grade(10));
console.log(grade(5));
console.log(grade(2));

// REZOLVARE CORNEL
/* function grade(mark) {
  if (mark >= 9) {
    return "FB";
  }
  if (mark >= 7) {
    return "B";
  }
  if (mark >= 5) {
    return "S";
  }
  return "IS";
}*/
