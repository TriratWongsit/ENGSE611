 // เลือกลิงก์ทั้งหมดภายใน <nav>
 const navLinks = document.querySelectorAll("nav a");

 // วนลูปเพื่อติดตั้งตัวจัดการคลิก
 navLinks.forEach(link => {
     link.addEventListener("click", function(event) {
         event.preventDefault(); // ป้องกันการนำทาง
         alert(`คุณคลิก: ${this.textContent}`); // แสดงข้อความของลิงก์ที่คลิก
     });
 });