// ดึงค่า PO-ID จาก URL
const urlParams = new URLSearchParams(window.location.search);
const poId = urlParams.get('po_id');

// ถ้ามีค่า PO-ID ให้นำไปใส่ในฟิลด์ PO NO
if (poId) {
    document.getElementById("po-no").value = poId;
}