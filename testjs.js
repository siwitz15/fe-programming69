/*// กำหนดฟังก์ชันชื่อ greet
function greet(name) {
  console.log("Hello, " + name + "!");
  console.log("Welcome to JavaScript programming.");
}

// เรียกใช้ฟังก์ชันพร้อมส่งค่าพารามิเตอร์
greet("Alice");*/

/*function add(a, b) {
  return a + b;  // ส่งผลลัพธ์กลับไปให้ผู้เรียก แล้วจบฟังก์ชันทันที
}

let result = add(5, 3);
console.log(result);  // Output: 8*/

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("Alice");  // Output: Hello, Alice!
greet();         // Output: Hello, Guest!  (ไม่ส่งค่า → ใช้ค่าเริ่มต้น)