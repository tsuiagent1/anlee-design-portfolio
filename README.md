# AnLee 官方網站內容模組化架構與日常維護手冊 (V2.0)

> **專案代號**：`anlee-design-portfolio`  
> **核心目標**：維持視覺與互動 100% 像素級一致（Pixel-perfect Consistency），徹底解除單一臃腫檔案（單一 index.html 90KB）綁定，重構為語意分明、職責分離的模組化資料夾架構，方便崔董針對不同區塊獨立進行日常內容維護。  
> **設計對標**：深度對標國際極簡刊物 [Aesence](https://www.aesence.com/) 之 50/50 左右半剖（Split-screen layout）、中軸雙色跨界導覽、Inter 當代無襯線字體與大負空間閱讀節奏。  
> **交接標準**：全面落實《AnLee 官網交接資料總整 V1.1》規範（無個人照片、禁止 Interviews/Newsletter、繁中/英雙語對照、嚴格 6 大首頁區塊、真實可查證場館）。

---

## 一、 模組化資料夾架構分佈

全站採用純前端原生架構（Zero-build Vanilla Static Site，相容 GitHub Pages），檔案分佈與職責如下：

```text
anlee-design-portfolio/
├── index.html                   # 簡潔純淨的首頁骨架（清晰標記各區塊，語意化引入模組）
├── README.md                    # 本專案模組化架構說明與日常維護手冊
├── css/                         # 視覺樣式模組目錄
│   ├── base.css                 # 基礎樣式：字型引入、:root 色彩變數、重置樣式、通用 Typography
│   ├── layout.css               # 框架佈局：Masthead 頂部導航、50/50 Hero 左右分割、Statement 宣言、Footer 頁尾
│   ├── sections.css             # 內容區塊：Articles, Art, Design, Exhibitions, Essays, About, Map
│   ├── components.css           # 互動元件：文章閱讀彈窗、地圖彈窗、條款彈窗、全站搜尋面板、手機側欄抽屜
│   └── style.css                # 樣式總入口（聚合引入上述 4 支樣式）
└── js/                          # 程式腳本與內容資料庫目錄
    ├── app.js                   # 全站互動邏輯：中英雙語即時切換、Modal 彈窗開關、即時搜尋引擎、鍵盤事件
    └── data/                    # ★ 內容維護核心目錄（崔董日常更新內容請直接編輯此處檔案）
        ├── hero.js              # 首頁 Hero 模組：頭圖連結、主標題、副標題導言、品牌世界觀關鍵字（雙語）
        ├── design.js            # Design 區塊資料庫：收錄 AL-DES-001 ~ 004 專案圖文、規格與雙語內文
        ├── art.js               # Art 區塊資料庫：收錄 AL-ART-001 ~ 004 藝術觀察與雙語內文
        ├── essays.js            # Essays 區塊資料庫：收錄 AL-ESS-001 ~ 004 觀點專題與雙語內文
        ├── exhibitions.js       # Exhibitions 展覽資料庫：TFAM、MOCA、Jut Art Museum 等真實美術館展訊
        ├── about.js             # About 品牌模組：Sharon 簡介、三大核心原則、引言與空間光影攝影
        └── i18n.js              # 全站雙語辭典：導航標籤、頁尾版權、政策條款、按鈕等通用詞庫
```

---

## 二、 崔董日常維護指南（如何針對不同區塊維護內容）

### 1. 維護首頁「頭圖 + 文案 + 核心關鍵字」
- **操作檔案**：`js/data/hero.js`
- **維護方式**：
  直接在 `heroData` 物件中替換圖片連結或修改文案：
  ```javascript
  const heroData = {
    // 更換首頁右側 50% 滿版大圖
    image: 'https://你的新圖片網址',

    // 替換左下角垂直旋轉 90 度的品牌關鍵字
    verticalKeywords: 'LIGHT · LIFE · RESPECT · REDUCTION',

    // 替換首頁大標題（支援 <br> 換行）
    title: {
      tc: '光與生活的減法節奏 –<br>在空間與日常中探尋本質',
      en: 'The Rhythm of Light & Reduction –<br>Exploring the Essence of Space'
    },

    // 替換首頁導言
    description: {
      tc: 'AnLee 是一個分享藝術與設計觀點、文化觀察及思想的平台...',
      en: 'AnLee is a curatorial platform sharing perspectives...'
    }
  };
  ```

---

### 2. 維護「Design 設計」區塊專案與文章
- **操作檔案**：`js/data/design.js`
- **維護方式**：
  直接在 `designArticles` 中修改現有專案，或仿照格式新增一筆專案（如 `'des-005'`）：
  ```javascript
  'des-005': {
    category: 'Design',
    id_badge: 'AL-DES-005',
    title_tc: '山形與水景的過渡寓所：現代居所中的流暢動線',
    title_en: 'Mountain & Water Residence: Fluid Circulation in Living Space',
    img: 'https://圖片網址',
    excerpt_tc: '卡片摘要文字（繁中）...',
    excerpt_en: 'Card excerpt in English...',
    body_tc: `
      <p>完整的長篇內文段落...</p>
      <p><strong>專案規格：</strong> 30 坪 / 實木與自然石材。</p>
    `,
    body_en: `
      <p>Full article paragraph in English...</p>
    `
  }
  ```
  *(同理：`Art` 區塊請編輯 `js/data/art.js`；`Essays` 區塊請編輯 `js/data/essays.js`)*

---

### 3. 維護「Exhibitions 展覽資訊」
- **操作檔案**：`js/data/exhibitions.js`
- **維護方式**：
  在 `exhibitionsDB` 中更新檔期或新增真實美術館展訊：
  ```javascript
  'ex-05': {
    title_tc: '光之棲所：當代居住哲學專題展',
    title_en: 'Habitations of Light: Architectural Luminosity',
    venue_tc: '台北市立美術館 (TFAM) ↗',
    venue_en: 'Taipei Fine Arts Museum (TFAM) ↗',
    date: '2027.03.01 – 2027.06.30',
    desc_tc: '展覽論述與說明摘要...',
    desc_en: 'Exhibition statement in English...'
  }
  ```

---

### 4. 維護「About AnLee 品牌理念」
- **操作檔案**：`js/data/about.js`
- **維護方式**：
  修改創辦實踐簡介、引言金句或三大原則，純文字修改不影響任何頁面版型。

---

### 5. 維護「視覺樣式與版面排版」
- **字型、色彩變數、間距基準**：編輯 `css/base.css` 的 `:root` 變數。
- **頂部導覽列、Hero 左右剖分、頁尾**：編輯 `css/layout.css`。
- **文章卡片、網格排列、展覽表格**：編輯 `css/sections.css`。
- **文章彈窗、全站搜尋面板、手機側抽屜**：編輯 `css/components.css`。
