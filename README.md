<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Facebook Friend Auto-Remover</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      max-width: 800px;
      margin: auto;
      padding: 2rem;
      background-color: #f9f9f9;
      color: #333;
      line-height: 1.7;
    }
    h1 {
      font-size: 1.8rem;
      color: #1a73e8;
    }
    h2 {
      font-size: 1.4rem;
      margin-top: 2rem;
    }
    pre {
      background-color: #f0f0f0;
      padding: 1rem;
      border-radius: 6px;
      overflow-x: auto;
    }
    code {
      font-family: Consolas, monospace;
      font-size: 0.95rem;
    }
    ul {
      margin-left: 1.2rem;
    }
    .warning {
      color: #d93025;
      font-weight: bold;
    }
    .check {
      color: #188038;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>🔍 Facebook Friend Auto-Remover Script</h1>
  <p>
    สคริปต์นี้จะช่วย <strong>ลบเพื่อนใน Facebook อัตโนมัติ</strong> สำหรับเพื่อนที่มี <strong>เพื่อนร่วมกันน้อยกว่า 2 คน</strong> หรือ <strong>ไม่มีเลย</strong><br>
    เหมาะสำหรับการจัดระเบียบรายชื่อเพื่อนเพื่อให้เหลือเฉพาะคนที่คุณมีความเกี่ยวข้องจริง ๆ
  </p>

  <h2>🛠 วิธีใช้</h2>
  <ol>
    <li>เข้าเว็บไซต์ <a href="https://facebook.com" target="_blank">facebook.com</a> แล้วไปยังหน้า <strong>รายชื่อเพื่อน (Friends list)</strong></li>
    <li>เปิด DevTools (กด <code>F12</code> หรือ <code>Ctrl+Shift+I</code>) → ไปที่แท็บ <strong>Console</strong></li>
    <li>วางโค้ด JavaScript ด้านล่างลงใน Console แล้วกด <strong>Enter</strong> ✅</li>
    <li>สคริปต์จะทำงานโดยอัตโนมัติ โดยจะ:
      <ul>
        <li>ค้นหาเพื่อนที่มีเพื่อนร่วมกัน &lt; 2 คน</li>
        <li>กดเมนูเพิ่มเติม</li>
        <li>เลือก "เลิกเป็นเพื่อน"</li>
        <li>กด "ยืนยัน"</li>
        <li>เว้นระยะ 3 วินาทีต่อคน เพื่อป้องกันการโดนบล็อกจาก Facebook</li>
      </ul>
    </li>
  </ol>

  <h2 class="warning">⚠️ คำเตือน</h2>
  <ul>
    <li>ใช้งานอย่างระมัดระวัง! หากทำเร็วเกินไป Facebook อาจจำกัดการใช้งานชั่วคราว</li>
    <li>สคริปต์นี้ไม่สามารถย้อนคืนได้ กรุณาตรวจสอบให้แน่ใจก่อนใช้งาน</li>
  </ul>

  <h2 class="check">✅ ข้อดี</h2>
  <ul>
    <li>ลบเพื่อนได้รวดเร็ว ไม่ต้องคลิกเองทีละคน</li>
    <li>เหมาะกับคนที่ต้องการเคลียร์เพื่อนที่ไม่มีปฏิสัมพันธ์</li>
  </ul>

  <h2>📜 โค้ดสคริปต์</h2>
  <pre><code>(async function () {
  const delay = ms =&gt; new Promise(res =&gt; setTimeout(res, ms));
  let count = 0;

  const cards = document.querySelectorAll('div[class*="x6s0dn4"][class*="x1obq294"]');

  for (const card of cards) {
    const mutualTag = Array.from(card.querySelectorAll("a")).find(a =&gt; a.href.includes("friends_mutual"));
    let mutualCount = 0;
    if (mutualTag) {
      const match = mutualTag.innerText.match(/(\d+)/);
      mutualCount = match ? parseInt(match[1]) : 0;
    }

    if (mutualCount &lt; 2) {
      console.log(`🧹 เจอเพื่อนที่มีเพื่อนร่วมกัน ${mutualCount} คน → ลบ`);

      const menuBtn = card.querySelector('[aria-label^="ตัวเลือกเพิ่มเติมสำหรับ"]');
      if (!menuBtn) {
        console.warn("⚠️ ไม่เจอเมนูตัวเลือกเพิ่มเติม");
        continue;
      }

      menuBtn.click();
      await delay(1000);

      const unfriendBtn = Array.from(document.querySelectorAll('span')).find(span =&gt; span.innerText.trim() === "เลิกเป็นเพื่อน");
      if (!unfriendBtn) {
        console.warn("⚠️ ไม่เจอปุ่มเลิกเป็นเพื่อน");
        continue;
      }

      unfriendBtn.closest('[role="menuitem"]').click();
      await delay(1000);

      const confirmBtn = document.querySelector('[aria-label="ยืนยัน"][role="button"]');
      if (!confirmBtn) {
        console.warn("⚠️ ไม่เจอปุ่มยืนยัน");
        continue;
      }

      confirmBtn.click();
      count++;
      console.log(`✅ ลบแล้ว ${count} คน`);
      await delay(3000);
    }
  }

  console.log("🎯 ลบเพื่อนร่วมกัน &lt; 2 คน (หรือไม่มีเลย) เสร็จทั้งหมด:", count);
})();</code></pre>
</body>
</html>
