const paragraphs = document.querySelectorAll("#main p");
    
        // วนลูปเพื่อตรวจสอบและเปลี่ยนสีเฉพาะย่อหน้าที่มีข้อความตรงกัน
        paragraphs.forEach(p => {
            if (p.textContent.trim() === "Llamas and Chickens!") {
                p.style.color = "red"; // เปลี่ยนสีตัวอักษรเป็นสีแดง
            }
        });