 // เลือกทุก <p> ที่อยู่ภายใน div#main
 const paragraphs = document.querySelectorAll("#main p");

 // วนลูปเปลี่ยนสไตล์ของแต่ละ <p>
 paragraphs.forEach(p => {
     p.style.fontSize = "24px"; // เปลี่ยนขนาดตัวอักษร
     p.style.color = "red"; // เปลี่ยนสีตัวอักษร
 });