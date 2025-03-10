 // เลือกลิงก์ทั้งหมดภายใน <nav>
 const navLinks = document.querySelectorAll("nav a");
    
 // วนลูปเพื่อติดตั้งตัวจัดการคลิก
 navLinks.forEach(link => {
     link.addEventListener("click", function(event) {
         event.preventDefault(); // ป้องกันการนำทาง
         alert("“clicked!”"); // แสดงการแจ้งเตือน
     });
 });