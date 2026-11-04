/**
 * 首頁 Hero 區塊配置與內容資料
 * 包含：頭圖連結、分類標籤、主標題、副標題簡介、左側垂直品牌世界觀關鍵字
 * 崔董若欲更換首頁主視覺或標題文案，請直接編輯本檔案。
 */
const heroData = {
  // 首頁右側 50% 滿版光影攝影圖
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  alt: 'AnLee Minimalist Architecture and Light',

  // 點擊 Hero 區域開啟的預設文章識別碼
  featuredArticleId: 'art-001',

  // 左側垂直旋轉 90 度品牌世界觀關鍵字
  verticalKeywords: 'LIGHT · LIFE · RESPECT · REDUCTION',

  // 分類標籤
  category: {
    tc: 'Essays & Perspectives 觀點專題',
    en: 'Essays & Perspectives'
  },

  // 首頁大標題 (支援 HTML 斷行 <br>)
  title: {
    tc: '光與生活的減法節奏 –<br>在空間與日常中探尋本質',
    en: 'The Rhythm of Light & Reduction –<br>Exploring the Essence of Space and Everyday Life'
  },

  // 首頁策展導言
  description: {
    tc: 'AnLee 是一個分享藝術與設計觀點、文化觀察及思想的平台。以直覺、真實、極簡為本，探索光、生活、尊重與減法在當代空間中的真實回應。',
    en: 'AnLee is a curatorial platform sharing perspectives on art, design, and cultural observations. Grounded in intuition, authenticity, and minimalism, it explores light, life, respect, and reduction.'
  }
};
