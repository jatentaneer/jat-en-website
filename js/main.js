/* ============================================
   เมนูมือถือ : กดปุ่ม ☰ เพื่อเปิด-ปิดเมนู
   ============================================ */

// 1) ไปหา "ปุ่ม ☰" และ "เมนู" ในหน้าเว็บ แล้วเก็บไว้ในกล่องชื่อ menuButton และ mainNav
const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

// 2) สั่งว่า: เมื่อปุ่มถูกคลิก (click) ให้ทำงานในวงเล็บปีกกา
menuButton.addEventListener("click", function () {

  // toggle = ถ้ายังไม่มีป้าย "open" ให้แปะ / ถ้ามีอยู่แล้ว ให้ดึงออก
  mainNav.classList.toggle("open");

});