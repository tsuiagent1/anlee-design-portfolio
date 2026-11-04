/**
 * ANLEE PORTFOLIO: Core Application Logic
 * 負責：雙語切換、資料聚合、閱讀彈窗、地圖彈窗、政策彈窗、即時檢索、快捷鍵監聽
 */

// 聚合所有文章模組為統一資料庫
const articlesDB = {
  ...designArticles,
  ...artArticles,
  ...essaysArticles
};

let currentLang = 'tc'; // 預設繁體中文

// 初始化首頁動態綁定 (Hero 與 About)
function initPageContent() {
  // 載入 Hero 資料
  const heroImg = document.getElementById('heroImage');
  if (heroImg && heroData) {
    heroImg.src = heroData.image;
    heroImg.alt = heroData.alt;
  }
  const heroCat = document.getElementById('heroCategory');
  if (heroCat && heroData) {
    heroCat.innerHTML = currentLang === 'tc' ? heroData.category.tc : heroData.category.en;
  }
  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle && heroData) {
    heroTitle.innerHTML = currentLang === 'tc' ? heroData.title.tc : heroData.title.en;
  }
  const heroDesc = document.getElementById('heroDesc');
  if (heroDesc && heroData) {
    heroDesc.innerHTML = currentLang === 'tc' ? heroData.description.tc : heroData.description.en;
  }

  // 載入 About 資料
  const aboutQuote = document.getElementById('aboutQuote');
  if (aboutQuote && aboutData) {
    aboutQuote.innerHTML = currentLang === 'tc' ? aboutData.quote.tc : aboutData.quote.en;
  }
  const aboutBio1 = document.getElementById('aboutBioP1');
  if (aboutBio1 && aboutData) {
    aboutBio1.innerHTML = currentLang === 'tc' ? aboutData.bio_p1.tc : aboutData.bio_p1.en;
  }
  const aboutBio2 = document.getElementById('aboutBioP2');
  if (aboutBio2 && aboutData) {
    aboutBio2.innerHTML = currentLang === 'tc' ? aboutData.bio_p2.tc : aboutData.bio_p2.en;
  }
  const aboutCap = document.getElementById('aboutImgCaption');
  if (aboutCap && aboutData) {
    aboutCap.innerHTML = currentLang === 'tc' ? aboutData.caption.tc : aboutData.caption.en;
  }
}

// 雙語切換功能
function toggleLanguage() {
  currentLang = currentLang === 'tc' ? 'en' : 'tc';
  document.body.className = currentLang === 'tc' ? 'lang-tc' : 'lang-en';
  
  const switchBtn = document.getElementById('langSwitchBtn');
  if (switchBtn) {
    switchBtn.textContent = currentLang === 'tc' ? 'EN / 中文' : '中文 / EN';
  }
  const drawerLabel = document.getElementById('drawerLangLabel');
  if (drawerLabel) {
    drawerLabel.textContent = currentLang === 'tc' ? '切換至 English' : '切換至 繁體中文';
  }

  // 更新所有具備 data-i18n 的靜態標籤
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nDict[key] && i18nDict[key][currentLang]) {
      el.innerHTML = i18nDict[key][currentLang];
    }
  });

  // 更新動態模組資料
  initPageContent();
}

// 文章閱讀彈窗
function openArticleModal(id) {
  const art = articlesDB[id] || articlesDB['des-001'];
  if (!art) return;
  document.getElementById('modalTag').textContent = `${art.category.toUpperCase()} · ${art.id_badge}`;
  document.getElementById('modalTitle').textContent = currentLang === 'tc' ? art.title_tc : art.title_en;
  document.getElementById('modalImg').src = art.img;
  document.getElementById('modalBody').innerHTML = currentLang === 'tc' ? art.body_tc : art.body_en;
  document.getElementById('articleModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeArticleModal(e) {
  if (!e || e.target.id === 'articleModal' || e.target.classList.contains('modal-close-btn')) {
    document.getElementById('articleModal').classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// 展覽詳情彈窗
function openExhibitionDetail(id) {
  const ex = exhibitionsDB[id];
  if (!ex) return;
  document.getElementById('modalTag').textContent = `EXHIBITION INFO · ${ex.date}`;
  document.getElementById('modalTitle').textContent = currentLang === 'tc' ? ex.title_tc : ex.title_en;
  document.getElementById('modalImg').src = 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80';
  document.getElementById('modalBody').innerHTML = `
    <p><strong>${currentLang === 'tc' ? '展覽場館：' : 'Venue: '}</strong>${currentLang === 'tc' ? ex.venue_tc : ex.venue_en}</p>
    <p><strong>${currentLang === 'tc' ? '展出期間：' : 'Dates: '}</strong>${ex.date}</p>
    <p style="margin-top:16px;">${currentLang === 'tc' ? ex.desc_tc : ex.desc_en}</p>
    <p style="font-size:12px; color:#888; margin-top:20px;">${currentLang === 'tc' ? '註：本展覽為已確認真實舉辦之展事，確切開放時間以場館官方公告為準。' : 'Note: Exhibition verified against official institutional archives.'}</p>
  `;
  document.getElementById('articleModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 場館地圖彈窗
function openMapModal() {
  document.getElementById('mapModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMapModal(e) {
  if (!e || e.target.id === 'mapModal' || e.target.classList.contains('modal-close-btn')) {
    document.getElementById('mapModal').classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// 隱私權政策與法律聲明彈窗
function openPolicyModal(type) {
  if (type === 'privacy') {
    document.getElementById('policyModalTag').textContent = 'PRIVACY POLICY (SPECIFICATION)';
    document.getElementById('policyModalTitle').textContent = currentLang === 'tc' ? '隱私權政策 (待確認版型)' : 'Privacy Policy (Specification)';
    document.getElementById('policyModalBody').innerHTML = `
      <p>依據《AnLee 官網交接資料總整 V1.1》規範：正式公開前，依網站實際功能、資料蒐集方式及適用規範確認內容。本站目前不設有侵入性追蹤 Cookies，亦不主動收集訪客未經同意之個人敏感資訊。</p>
      <p>主要公開聯絡信箱為：<strong>sha2003ron@gmail.com</strong>。若有任何資料查閱或洽詢需求，歡迎直接來信。</p>
    `;
  } else {
    document.getElementById('policyModalTag').textContent = 'IMPRINT & LEGAL (SPECIFICATION)';
    document.getElementById('policyModalTitle').textContent = currentLang === 'tc' ? '版權與法律資訊 (待確認版型)' : 'Imprint & Legal Notice (Specification)';
    document.getElementById('policyModalBody').innerHTML = `
      <p>依據《AnLee 官網交接資料總整 V1.1》規範：不得填入虛構公司、地址或登記資料。本站對外品牌名稱為 <strong>AnLee</strong>，由 Sharon（李惠雲）主理。</p>
      <p>網站內容受相關智慧財產權法規保護，展覽資訊與客座文章之權利歸屬各自所有權人。正式發布前恪守真實性與權利確認原則。</p>
    `;
  }
  document.getElementById('policyModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePolicyModal(e) {
  if (!e || e.target.id === 'policyModal' || e.target.classList.contains('modal-close-btn')) {
    document.getElementById('policyModal').classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// 行動裝置側邊選單
function toggleDrawer() {
  document.getElementById('drawerPanel').classList.toggle('open');
}

// 即時搜尋功能
function openSearchModal() {
  document.getElementById('searchModal').classList.add('active');
  document.getElementById('searchInputField').value = '';
  document.getElementById('searchListResults').innerHTML = '';
  setTimeout(() => document.getElementById('searchInputField').focus(), 100);
  document.body.style.overflow = 'hidden';
}

function closeSearchModal() {
  document.getElementById('searchModal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

function handleSearch(q) {
  const trimmed = q.trim().toLowerCase();
  const list = document.getElementById('searchListResults');
  if (!trimmed) {
    list.innerHTML = '';
    return;
  }
  const matches = Object.keys(articlesDB).filter(k => {
    const item = articlesDB[k];
    return item.title_tc.toLowerCase().includes(trimmed) || 
           item.title_en.toLowerCase().includes(trimmed) || 
           item.category.toLowerCase().includes(trimmed) ||
           item.id_badge.toLowerCase().includes(trimmed);
  });
  if (matches.length === 0) {
    list.innerHTML = `<li style="padding:20px 0; color:#888;">${currentLang === 'tc' ? '查無相關專案或文章' : 'No curatorial articles found'}</li>`;
    return;
  }
  list.innerHTML = matches.map(k => {
    const item = articlesDB[k];
    return `
      <li class="search-item" onclick="closeSearchModal(); openArticleModal('${k}')">
        <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#888;">${item.category} · ${item.id_badge}</div>
        <h4 style="font-size:15px; font-weight:400; margin-top:4px;">${currentLang === 'tc' ? item.title_tc : item.title_en}</h4>
      </li>
    `;
  }).join('');
}

// 全域快捷鍵
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeArticleModal();
    closeMapModal();
    closePolicyModal();
    closeSearchModal();
  }
});

// 頁面加載完成時初始化
window.addEventListener('DOMContentLoaded', () => {
  initPageContent();
});
