<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Facebook Friend Auto-Remover</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f6f8fa;
      padding: 20px;
      line-height: 1.7;
    }
    h1 {
      color: #1877f2;
    }
    code, pre {
      background: #eee;
      padding: 10px;
      border-radius: 5px;
      display: block;
      white-space: pre-wrap;
    }
    button {
      padding: 10px 20px;
      background-color: #1877f2;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #155db2;
    }
  </style>
</head>
<body>

  <h1>🔍 Facebook Friend Auto-Remover Script</h1>
  <p>สคริปต์นี้จะช่วยลบเพื่อนใน Facebook อัตโนมัติ สำหรับเพื่อนที่มีเพื่อนร่วมกันน้อยกว่า 2 คน หรือไม่มีเลย</p>

  <h2>🛠 วิธีใช้</h2>
  <ol>
    <li>เข้าเว็บไซต์ <strong>facebook.com</strong> แล้วไปยังหน้า <strong>รายชื่อเพื่อน (Friends list)</strong></li>
    <li>เปิด DevTools (กด <kbd>F12</kbd> หรือ <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>) → ไปที่แท็บ <strong>Console</strong></li>
    <li>วางโค้ด JavaScript ด้านล่างลงใน Console แล้วกด <strong>Enter</strong> ✅</li>
    <li>ระบบจะทำการลบเพื่อนที่มีเพื่อนร่วมกันน้อยกว่า 2 คน โดยอัตโนมัติ</li>
  </ol>

  <h2>⚠️ คำเตือน</h2>
  <ul>
    <li>ใช้งานอย่างระมัดระวัง! หากทำเร็วเกินไป Facebook อาจจำกัดการใช้งานชั่วคราว</li>
    <li>สคริปต์นี้ <strong>ไม่สามารถย้อนคืนได้</strong> กรุณาตรวจสอบให้แน่ใจก่อนใช้งาน</li>
  </ul>

  <h2>✅ ข้อดี</h2>
  <ul>
    <li>ลบเพื่อนได้รวดเร็ว ไม่ต้องคลิกเองทีละคน</li>
    <li>เหมาะกับคนที่ต้องการเคลียร์เพื่อนที่ไม่มีปฏิสัมพันธ์</li>
  </ul>

  <h2>📜 JavaScript</h2>
  <button onclick="copyScript()">📋 คัดลอกโค้ด</button>
  <pre id="script">
(async () => {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const friends = [...document.querySelectorAll('a[role="link"][tabindex="0"]')];
  console.log(`🧾 พบเพื่อนทั้งหมด ${friends.length} คน`);

  let count = 0;
  for (const friend of friends) {
    const container = friend.closest('[role="article"]');
    const mutualText = container.innerText.match(/เพื่อนร่วมกัน (\d+) คน/);
    const mutualCount = mutualText ? parseInt(mutualText[1]) : 0;

    if (mutualCount < 2) {
      friend.scrollIntoView();
      container.querySelector('[aria-label*="เพิ่มเติม"]').click();
      await delay(1000);
      [...document.querySelectorAll('span')].find(el => el.textContent.includes('เลิกเป็นเพื่อน'))?.click();
      await delay(1000);
      [...document.querySelectorAll('div')].find(el => el.textContent.includes('ยืนยัน'))?.click();
      console.log(`✅ ลบเพื่อน: ${friend.textContent}`);
      count++;
      await delay(3000);
    }
  }

  console.log("======= 🔚 สรุปผล =======");
  console.log(`✅ ลบแล้ว: ${count} คน`);
})();
  </pre>

  <script>
    function copyScript() {
      const text = document.getElementById("script").innerText;
      navigator.clipboard.writeText(text).then(() => {
        alert("📋 คัดลอกโค้ดเรียบร้อย! นำไปวางใน Console ได้เลย");
      });
    }
  </script>

</body>
</html>
