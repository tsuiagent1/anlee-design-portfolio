# AESENCE 1:1 像素級重構與 ANLEE 極簡策展刊物平台 (anlee-design-portfolio)

> **核心設計基準**：深度對標國際極簡當代美學出版物與刊物網站 [Aesence](https://www.aesence.com/)，以 100% 像素級還原其標誌性的左右半剖排版（Split-screen layout）、中軸跨界導覽、垂直邊欄文字與大膽負空間秩序。

---

## 一、 深度檢討：為什麼先前版本與 Aesence 截圖完全不一樣？

針對使用者提供的 Aesence 官方首頁截圖（包含左右分割、深邃攝影與純粹留白），深入剖析過去實作的 **5 大根本性落差**：

1. **版面結構的根本錯誤（上下單欄堆疊 vs 50/50 左右半剖 Split-screen）**：
   - **先前版本**：誤用了傳統商業或部落格常見的上下垂直流（頂部公告條 ➔ 居中 Hero 標題 ➔ 居中段落 ➔ 小型縮圖卡片），導致視線碎裂。
   - **Aesence 截圖**：採用震撼的 **100vh 雙欄半剖結構（Split-screen layout）**。左側 50% 寬度是極致純白大面積留白（Negative space），右側 50% 寬度是全幅垂直填滿的室內攝影（Hero image）。這種極致留白與深沉光影的左右並置，正是 Aesence 營造藝廊級寧靜氣場的靈魂所在。

2. **頂部導覽列「跨越中軸線」與「雙色對比」完全遺漏**：
   - **先前版本**：僅做了普通白底黑字的三欄式 Header，呆板且平庸。
   - **Aesence 截圖**：
     - 中央標誌 `A E S E N C E` 精準坐落於左右 50% 的中軸線上，字母直接橫跨白底與深色影像。
     - 左側導覽（Articles、Exhibitions、About）在白底上為炭黑文字；右側選單（Map、Subscribe 搭配信封圖示、搜尋圖示、漢堡選單）橫跨於深色攝影大圖上，呈現純白反白。先前版本完全沒有捕捉到這個極具巧思的雙色跨界細節。

3. **字體風格的嚴重偏差（誤用復古襯線體 Serif）**：
   - **先前版本**：誤以為極簡雜誌應使用復古羅馬襯線體（如 Playfair Display），讓視覺顯得繁複而古典。
   - **Aesence 截圖**：Aesence 的基因是 **純粹現代無襯線體（Contemporary Grotesk / Sans-serif，如 Inter）**。主標題採用 300~400 輕字重、微縮字距（`-0.02em`）、兩行斷行排版，體現理性克制、冷靜純粹的建築感。

4. **左側垂直旋轉邊欄（Vertical Side Bar）完全缺失**：
   - **先前版本**：完全忽略邊緣空間，僅依賴傳統頁尾放置社群連結。
   - **Aesence 截圖**：在左下角邊緣配置了旋轉 90 度由下而上的垂直社群標籤（`PINTEREST`、`INSTAGRAM`），打破常規水平流向，賦予頁面獨特的前衛出版品識別度。

5. **多餘裝飾干擾了「The Art of Less」的減法本質**：
   - **先前版本**：添加了頂部公告條、圓角、卡片外框與漸變，堆砌了無關元素。
   - **Aesence 截圖**：全站貫徹「零圓角（Border-radius: 0）」、極細髮絲線（`#ebebeb`）、純黑白無彩色階，所有注意力均聚焦於作品本質與光影。

---

## 二、 本次 1:1 像素級重構重點 (Architecture & Highlights)

1. **左右雙欄 100vh Split-Screen 首頁**：
   - **左半部 (Left 50%)**：大面積純白留白，垂直置中偏下呈現淡灰分類標籤 `News` 與兩行無襯線大標題 `The Art Of Less – An Exploration Of Essence`。
   - **左下邊緣**：精準還原垂直旋轉 90 度的 `PINTEREST` 與 `INSTAGRAM` 連結。
   - **右半部 (Right 50%)**：全幅攝影主視覺（高清原圖），深邃光影轉角與立放之米白色《The Art of Less》專著精裝書。

2. **跨越中軸線雙色導覽列 (Dual-tone Masthead)**：
   - 頂部導覽列全寬懸浮，中央 `A E S E N C E` 大字距標誌橫跨中線，運用現代 CSS 文字漸變剪裁（`background: linear-gradient(to right, #111 50%, #fff 50%)`），左半為黑、右半為白，完美契合截圖。
   - 左側黑字 Articles（含 Art, Design, Interviews, Essays 下拉選單）、Exhibitions、About。
   - 右側白字 Map、Subscribe（信封圖示）、搜尋放大鏡 🔍、漢堡選單 ☰。

3. **雙版本切換機制 (Edition Switcher)**：
   - 頂部右側支援一鍵切換 `[ AESENCE ]` / `[ ANLEE ]`：
     - **AESENCE 模式**：1:1 原版出版物體驗。
     - **ANLEE 模式**：崔董專屬建築與微水泥作品集（AL-DES-001 日光與微水泥的減法寓所、光之茶室、極簡居住本質）。

4. **完整豐富的下沉式策展單元 (Full Editorial Coverage)**：
   - **Selected Artworks**：4 欄無圓角藝廊網格（Stephan Siebers, Chris Liljenberg Halstrøm, Hyungshin Hwang, Chung Chang-Sup）。
   - **Current & Upcoming Exhibitions**：橫向展覽日曆表格（柏林、首爾、哥本哈根、巴黎展訊）。
   - **Artist Conversations**：4 欄藝術家專題深度對話。
   - **Essays & Critical Perspectives**：紐約畫派黑色繪畫、抽象表現主義、AI 生成藝術本質等理論文章。
   - **Design Objects & Architecture**：當代極簡器物與燈具選輯。
   - **Curated Dispatch**：直角極簡 Newsletter 訂閱橫幅。
   - **Site Footer**：版權宣告、單元索引與回到頂部按鈕。

5. **互動功能完整交付**：
   - **Reader Modal**：點擊卡片開啟沉浸式全螢幕文章閱讀彈窗。
   - **Search Modal**：點擊放大鏡開啟即時關鍵字過濾搜尋面板。
   - **Mobile Drawer**：響應式側滑抽屜導覽。
   - 通過無頭 Chrome 於 1440px（桌面寬螢幕）、1024px（平板）、390px（手機）完整驗證。

---

## 三、 檔案清冊與部署資訊

- `index.html`：純前端單頁式完整刊物與作品集，免建置步驟，相容所有現代瀏覽器與行動裝置。
- `README.md`：專案設計手冊、落差檢討與技術規格說明。
- **託管方案**：GitHub Pages 一鍵發布（`https://tsuiagent1.github.io/anlee-design-portfolio/`）。
