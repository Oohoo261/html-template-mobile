document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ป้องกันการ submit แบบปกติ

    // รับค่า username และ password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // ตรวจสอบข้อมูล username และ password (สามารถเพิ่มการตรวจสอบจริงได้ที่นี่)
    if (username && password) { // ตรวจสอบว่ามีการกรอกข้อมูลทั้งคู่
        // เปลี่ยนไปหน้า main.html
        window.location.href = "main.html";
    } else {
        alert("กรุณากรอก Username และ Password");
    }
});
