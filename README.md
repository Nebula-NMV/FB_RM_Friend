<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
</head>
<body>

  <h1>🔍 Facebook Friend Auto-Remover Script</h1>
  <p>
    สคริปต์นี้จะช่วย <strong>ลบเพื่อนใน Facebook อัตโนมัติ</strong><br>
    สำหรับเพื่อนที่มี <strong>เพื่อนร่วมกันน้อยกว่า 2 คน หรือไม่มีเลย</strong><br>
    เหมาะสำหรับการจัดระเบียบรายชื่อเพื่อนเพื่อให้เหลือเฉพาะคนที่คุณมีความเกี่ยวข้องจริง ๆ
  </p>

  <div class="steps">
    <h2>🛠 วิธีใช้</h2>
    <ul>
      <li>1. เข้าเว็บไซต์ <code>facebook.com</code> แล้วไปยังหน้า <strong>รายชื่อเพื่อน</strong> (Friends list)</li>
      <li>2. เปิด DevTools (<code>F12</code> หรือ <code>Ctrl+Shift+I</code>) → ไปที่แท็บ <code>Console</code></li>
      <li>3. วางโค้ด JavaScript ด้านล่างลงใน Console แล้วกด <strong>Enter</strong> ✅</li>
      <li>4. สคริปต์จะทำงานโดยอัตโนมัติ โดยจะ:
        <ul>
          <li>🔍 ค้นหาเพื่อนที่มีเพื่อนร่วมกัน &lt; 2 คน</li>
          <li>📂 กดเมนูเพิ่มเติม</li>
          <li>❌ เลือก "เลิกเป็นเพื่อน"</li>
          <li>✅ กด "ยืนยัน"</li>
          <li>⏱ เว้นระยะ 3 วินาทีต่อคน เพื่อป้องกันการโดนบล็อกจาก Facebook</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="warning">
    <h2>⚠️ คำเตือน</h2>
    <ul>
      <li>ใช้งานอย่างระมัดระวัง! หากทำเร็วเกินไป Facebook อาจจำกัดการใช้งานชั่วคราว</li>
      <li>สคริปต์นี้ไม่สามารถย้อนคืนได้ กรุณาตรวจสอบให้แน่ใจก่อนใช้งาน</li>
    </ul>
  </div>

  <div class="benefits">
    <h2 class="check">✅ ข้อดี</h2>
    <ul>
      <li>ลบเพื่อนได้รวดเร็ว ไม่ต้องคลิกเองทีละคน</li>
      <li>เหมาะกับคนที่ต้องการเคลียร์เพื่อนที่ไม่มีปฏิสัมพันธ์</li>
    </ul>
  </div>

</body>
</html>
