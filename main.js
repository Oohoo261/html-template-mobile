document.getElementById("submit-btn").addEventListener("click", function() {
    // รับค่า PO-ID
    const poId = document.getElementById("po-id").value;

    // ตรวจสอบว่ามีการกรอกข้อมูล PO-ID หรือไม่
    if (poId) {
        // ส่งค่า PO-ID ไปยัง form.html โดยใช้ URL parameters
        window.location.href = `form.html?po_id=${encodeURIComponent(poId)}`;
    } else {
        alert("กรุณากรอก PO-ID");
    }
});
