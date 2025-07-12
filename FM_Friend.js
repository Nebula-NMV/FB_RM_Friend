(async function () {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  let count = 0;

  const cards = document.querySelectorAll('div[class*="x6s0dn4"][class*="x1obq294"]');

  for (const card of cards) {
    const mutualTag = Array.from(card.querySelectorAll("a")).find(a => a.href.includes("friends_mutual"));

    // ถ้าไม่มี tag "มีเพื่อนร่วมกัน" = ไม่มีเพื่อนร่วมกันเลย
    let mutualCount = 0;
    if (mutualTag) {
      const match = mutualTag.innerText.match(/(\d+)/);
      mutualCount = match ? parseInt(match[1]) : 0;
    }

    if (mutualCount < 2) {
      console.log(`🧹 เจอเพื่อนที่มีเพื่อนร่วมกัน ${mutualCount} คน → ลบ`);

      const menuBtn = card.querySelector('[aria-label^="ตัวเลือกเพิ่มเติมสำหรับ"]');
      if (!menuBtn) {
        console.warn("⚠️ ไม่เจอเมนูตัวเลือกเพิ่มเติม");
        continue;
      }

      menuBtn.click();
      await delay(1000);

      // ปุ่ม "เลิกเป็นเพื่อน"
      const unfriendBtn = Array.from(document.querySelectorAll('span')).find(span => span.innerText.trim() === "เลิกเป็นเพื่อน");
      if (!unfriendBtn) {
        console.warn("⚠️ ไม่เจอปุ่มเลิกเป็นเพื่อน");
        continue;
      }

      unfriendBtn.closest('[role="menuitem"]').click();
      await delay(1000);

      // ปุ่ม "ยืนยัน"
      const confirmBtn = document.querySelector('[aria-label="ยืนยัน"][role="button"]');
      if (!confirmBtn) {
        console.warn("⚠️ ไม่เจอปุ่มยืนยัน");
        continue;
      }

      confirmBtn.click();
      count++;
      console.log(`✅ ลบแล้ว ${count} คน`);

      await delay(3000); // พักเพื่อความปลอดภัย
    }
  }

  console.log("🎯 ลบเพื่อนร่วมกัน < 2 คน (หรือไม่มีเลย) เสร็จทั้งหมด:", count);
})();
