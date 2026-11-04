/**
 * 全站雙語辭典 (繁體中文 / 英文)
 * 涵蓋：導覽列、頁尾、通用按鈕、政策彈窗與場館地圖資訊
 * 崔董若欲調整網站的名詞翻譯或版權宣告，請直接編輯本檔案。
 */
const i18nDict = {
  nav_articles: { tc: 'Articles 文章', en: 'Articles' },
  nav_art: { tc: 'Art 藝術', en: 'Art' },
  nav_design: { tc: 'Design 設計', en: 'Design' },
  nav_essays: { tc: 'Essays & Editorials 觀點與專題', en: 'Essays & Editorials' },
  nav_exhibitions: { tc: 'Exhibitions 展覽', en: 'Exhibitions' },
  nav_about: { tc: 'About 關於', en: 'About' },
  nav_map: { tc: 'Map 場館地圖', en: 'Map' },
  nav_contact: { tc: 'Contact 聯絡', en: 'Contact' },

  statement_quote: {
    tc: '「設計不應製造距離，而應幫助人理解彼此；在光、生活、尊重與減法之中，探尋空間如何真實回應日常。」',
    en: '“Design should not create distance, but foster understanding; through light, life, respect, and reduction, we explore how spaces truly respond to living.”'
  },
  statement_author: { tc: 'ANLEE 核心世界觀與理念', en: 'ANLEE CORE PERSPECTIVES' },

  sec_articles_title: { tc: 'Articles 精選文章', en: 'Articles' },
  sec_articles_sub: { tc: '精選文章與深度觀察', en: 'Curated Articles & Observations' },
  sec_articles_all: { tc: '檢視所有分類 ➞', en: 'View All Categories ➞' },

  tag_design: { tc: 'Design 空間設計', en: 'Design & Living' },
  tag_essays: { tc: 'Essays 觀點專題', en: 'Essays & Editorials' },
  tag_art: { tc: 'Art 藝術觀察', en: 'Art & Culture' },

  sec_art_title: { tc: 'Art 藝術', en: 'Art' },
  sec_art_sub: { tc: '藝術作品、藝術家、展覽觀察與文化議題', en: 'Artworks, Artists, Exhibitions & Cultural Dialogue' },
  see_exhibitions: { tc: '查看相關展覽 ➞', en: 'Related Exhibitions ➞' },

  sec_design_title: { tc: 'Design 設計', en: 'Design' },
  sec_design_sub: { tc: '室內設計、空間、家具、材料與生活設計觀察', en: 'Interiors, Spatial Living, Furniture, and Materials' },
  sec_design_about: { tc: '關於 AnLee 設計實踐 ➞', en: 'About AnLee Practice ➞' },

  sec_exhibitions_title: { tc: 'Exhibitions 展覽資訊', en: 'Exhibitions' },
  sec_exhibitions_sub: { tc: '實際已確認之當代藝術與空間展覽資訊', en: 'Current & Upcoming Verified Curatorial Exhibitions' },
  sec_ex_map: { tc: '探索場館地圖 ➞', en: 'Explore Venue Map ➞' },

  sec_essays_title: { tc: 'Essays & Editorials 觀點與專題', en: 'Essays & Editorials' },
  sec_essays_sub: { tc: '個人觀點、文化觀察、思想整理及跨領域專題', en: 'Perspectives, Cultural Observations & Thought Essays' },
  sec_essays_about: { tc: '關於世界觀與原則 ➞', en: 'About Perspectives ➞' },

  sec_about_title: { tc: 'About AnLee 關於', en: 'About AnLee' },
  sec_about_sub: { tc: '品牌理念與創辦實踐', en: 'Brand Philosophy & Practice' },

  map_bar_title: { tc: 'Curatorial Map & Venues 展覽場館地圖', en: 'Curatorial Map & Venues' },
  map_bar_desc: {
    tc: '收錄實際存在、資訊已查證之當代美術館與公共文化空間。不收錄未確認之個人辦公室或私人住址。',
    en: 'Featuring verified contemporary museums and public cultural spaces. Private offices and unverified locations are strictly omitted.'
  },
  map_btn: { tc: 'View Verified Venues 查看場館地圖', en: 'View Verified Venues' },

  footer_bio: {
    tc: 'AnLee 是一個分享藝術與設計觀點、文化觀察及思想的平台。以直覺、真實、極簡為本，探索光、生活、尊重與減法在當代空間中的真實回應。',
    en: 'AnLee is an independent curatorial platform sharing perspectives on art, design, and cultural observations. Guided by intuition, authenticity, and minimalism.'
  },
  footer_col1_title: { tc: 'Categories 分類', en: 'Categories' },
  footer_art: { tc: 'Art 藝術觀點', en: 'Art & Sculpture' },
  footer_design: { tc: 'Design 空間與生活', en: 'Design & Interiors' },
  footer_essays: { tc: 'Essays & Editorials 專題', en: 'Essays & Editorials' },
  footer_ex: { tc: 'Exhibitions 展覽資訊', en: 'Exhibitions' },
  footer_col2_title: { tc: 'Contact & Dialogue 聯絡', en: 'Contact & Dialogue' },
  footer_ig_status: { tc: 'Instagram: 待官方發布', en: 'Instagram: Coming Soon' },
  footer_about: { tc: 'About Sharon / AnLee 簡介', en: 'About Sharon / AnLee' },
  footer_map: { tc: 'Venue Locations 場館地點', en: 'Venue Locations' },
  footer_col3_title: { tc: 'Legal & Policies 法律與聲明', en: 'Legal & Policies' },
  footer_privacy: { tc: 'Privacy Policy 隱私權政策', en: 'Privacy Policy' },
  footer_imprint: { tc: 'Imprint 版權與聲明', en: 'Imprint' },
  footer_status_tag: { tc: '遵循交接手冊 V1.1 規格建置', en: 'V1.1 Specification Compliant' },
  back_to_top: { tc: 'Back to top 回到頂部 ↑', en: 'Back to top ↑' },

  map_modal_tag: { tc: 'VERIFIED CURATORIAL VENUES', en: 'VERIFIED CURATORIAL VENUES' },
  map_modal_title: { tc: '已查證之當代文化與藝術場館', en: 'Verified Contemporary Art Venues' },
  map_modal_desc: {
    tc: '依據 AnLee 官網手冊規格，僅標示實際存在且地點已確認的展覽場館，地址與座標均取自官方查證資料，不顯示未確認之私人地址。',
    en: 'In compliance with AnLee portfolio specifications, only verified venues with public physical addresses and coordinates are presented.'
  }
};
