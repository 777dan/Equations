let a1 = prompt("Введите число a");
console.log(a1);
let b1 = prompt("Введите число b");
console.log(b1);
if (a1 != 0) {
  let x = -b1 / a1;
  console.log(x);
  alert("х линейного уравнения равен " + x);
} else {
  alert("Нет решения");
}
// let c1 = a1 * -1;
// let x3 = b1 / c1;
// alert("х линейного уравнения равен " + x3);
let a2 = prompt("Введите число a");
let b2 = prompt("Введите число b");
let c2 = prompt("Введите число c");
if (a2 == 0) {
  if (b2 != 0 && c2 != 0) {
    let X1 = -c2 / b2;
    alert(X1);
  } else {
    alert(0);
  }
} else if (b2 == 0) {
  if (c2 != 0 && a2 != 0) {
    let X2 = -c2 / a2;
    alert(X2);
  } else {
    alert(0);
  }
} else if (c2 == 0) {
  if (b2 != 0 && a2 != 0) {
    let X3 = -b2 / a2;
    alert(X3);
  } else {
    alert(0);
  }
} else {
  let d = b3 - 4 * a2 * c2;
  if (d < 0) {
    alert("Нет корней!");
  }
  if (d == 0) {
    let y = 2 * a2;
  let z1 = b4 + d1;
  let x1 = z1 / y;
    alert(x1);
  }
  if (d > 0) {
    let b3 = b2 * b2;
    // let d = b3 - 4 * a2 * c2;
    let d1 = Math.sqrt(d);
    let b4 = b2 * -1;
    let y = 2 * a2;
    let z1 = b4 + d1;
    let z2 = b4 - d1;
    let x1 = z1 / y;
    let x2 = z2 / y;
    alert(x1 + " " + x2);
  }
}
