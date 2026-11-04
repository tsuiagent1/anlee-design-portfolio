/**
 * Design 設計區塊資料庫
 * 收錄：室內設計、空間規劃、家具工藝、燈具與生活材質觀察
 * 崔董若欲新增或修改 Design 區塊文章，請直接編輯本檔案。
 */
const designArticles = {
  'des-001': {
    category: 'Design',
    id_badge: 'AL-DES-001',
    title_tc: '日光與微水泥的減法寓所：24坪現代極簡空間的本質對話',
    title_en: 'AL-DES-001 Light & Microcement Residence: Essence Dialogue in a 24-Pin Minimalist Space',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    excerpt_tc: '透過微水泥肌理與自然光感的漫射，回歸純粹維度。在減法構思中，空間不再填塞繁複裝飾，而是包容日常起居與呼吸。',
    excerpt_en: 'Seamless microcement textures and diffused daylight strip away redundant decoration to embrace the rhythms of living.',
    body_tc: `
      <p>居所不該是物件的陳列容器，而是承載日常起居與心境沉澱的寧靜介質。AnLee 始終相信「減法」的力量——減去多餘的裝飾線板、減去刻意的立面造作、減去阻隔光線與氣流的實牆，以真實的材質回應生活的本質。</p>
      <p><strong>專案規格：</strong> 24 坪 / 2 房 2 廳 1 衛 / 無縫微水泥地坪、淺色天然橡木、消光霧面金屬、低反光亞麻布料。</p>
      <p>在此案中，微水泥連續無縫地自玄關延伸至客廳與餐廚區域，消弭了地坪分割線帶來的破碎感。隨著晨光自南向百葉窗漫射入室，粗獷而溫潤的微水泥顆粒在光影交錯間顯現細膩層次。</p>
      <p>設計不應製造距離，而應幫助人理解彼此。這座減法寓所捨棄了客廳電視主牆的傳統設定，轉而以低矮的實木長椅與開放式茶桌作為聚合核心，讓家人重新找回目光相視與輕聲交談的從容。</p>
    `,
    body_en: `
      <p>A residence should never be a mere container for objects; rather, it is a tranquil medium that holds the rhythms of daily living and spatial reflection. AnLee embraces the quiet power of reduction—stripping away excessive mouldings, artificial facade embellishments, and solid partitions that obstruct light and airflow, allowing authentic materiality to respond to life.</p>
      <p><strong>Project Specification:</strong> 24 Pin (approx. 80 sqm) / 2 Bed, 2 Living, 1 Bath / Seamless Microcement Flooring, Natural Light Oak, Matte Finished Metal, Low-reflectance Linen.</p>
      <p>Here, seamless microcement extends fluidly from the entryway through the living and dining areas, eliminating the fragmented sensation of floor breaks. As morning sunlight filters through south-facing louvers, the tactile yet gentle mineral grains reveal subtle gradations across light and shadow.</p>
      <p>Design should not create distance, but foster understanding. By dispensing with conventional television feature walls, the space adopts low oak benches and an open tea table as its communal heart, inviting family members to rediscover quiet eye contact and calm conversation.</p>
    `
  },
  'des-002': {
    category: 'Design',
    id_badge: 'AL-DES-002',
    title_tc: '家具與日常觸感的對話：在天然材料中重構生活節奏',
    title_en: 'Furniture and Tactile Intimacy: Restructuring Living Rhythms Through Natural Materials',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    excerpt_tc: '實木、紙繩與粗糙亞麻，家具是人體每日接觸最頻繁的介質，其溫度決定了空間的心境尺度。',
    excerpt_en: 'Solid timber, cord weaving, and linen: furniture is the intimate tactile medium defining spatial peace.',
    body_tc: `
      <p>Sharon 擁有長期家具工廠經營與製造實務背景，深知一件家具的誕生不僅關乎造型，更在於人體肌膚接觸木材倒角、棉麻編織時所感受到的真實反饋。</p>
      <p>在工業量產與合成材料充斥的今天，我們回歸質樸的實木與紙繩工藝。每一道榫接與收邊，都代表著對工藝尊重的態度，也讓家具在長年陪伴中隨歲月洗練出溫潤包漿。</p>
    `,
    body_en: `
      <p>With an extensive background in furniture manufacturing and operational practice, Sharon understands that an object’s integrity lies not merely in its visual silhouette, but in the tactile feedback when hands meet beveled timber and woven paper cords.</p>
      <p>Amid mass production and synthetic materials, we return to the quiet authenticity of solid timber and artisanal cord weaving. Every mortise-and-tenon joint reflects respect for craftsmanship, aging gracefully alongside its occupants over the years.</p>
    `
  },
  'des-003': {
    category: 'Design',
    id_badge: 'AL-DES-003',
    title_tc: '留白中的光線編排：消隱燈具與自然天光的和諧共存',
    title_en: 'Choreography of Light in Negative Space: Recessed Fixtures and Daylight',
    img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
    excerpt_tc: '捨棄炫目的人工主燈，改以隱蔽洗牆光與落地低照度燈具，讓夜幕降臨時居所擁有如暮光般的溫柔。',
    excerpt_en: 'Concealing artificial glare to allow natural daylight to dance, letting evening retreat into warm serenity.',
    body_tc: `
      <p>光是空間靈魂的雕刻刀。在減法哲學中，燈具本身的存在感越低，光線所形塑的空間氛圍便越純粹。</p>
      <p>我們透過天花板洗牆暗溝與低照度落地照明，模擬自然晨昏的光線流動。當人工光源退居幕後，白天的天光得以在白牆上自由漫步，夜晚則回歸如燭火般安穩的沉靜。</p>
    `,
    body_en: `
      <p>Light is the chisel that carves spatial soul. In the philosophy of reduction, the less intrusive a luminaire appears, the purer the atmospheric aura it evokes.</p>
      <p>Through concealed ceiling wall-washers and low-level floor lighting, we emulate the gentle transition of diurnal skies. As artificial glare recedes, natural daylight dances freely across pale walls, while evenings settle into intimate, candle-like serenity.</p>
    `
  },
  'des-004': {
    category: 'Design',
    id_badge: 'AL-DES-004',
    title_tc: '商業空間的安靜力量：從飽和刺激回歸沉著質感的規劃思維',
    title_en: 'The Quiet Strength of Commercial Spaces: Moving Beyond Saturated Clutter',
    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80',
    excerpt_tc: '商業場域不必然充斥喧鬧標語。用純粹的動線與留白，給訪客一段專注體驗品牌的從容時光。',
    excerpt_en: 'Commercial venues need not overwhelm. Restrained lines and negative space offer clarity to appreciate quality.',
    body_tc: `
      <p>商業空間的本質往往被誤認為必須爭奪眼球與製造感官刺激。然而，過多的裝飾往往稀釋了品牌與商品真正的價值。</p>
      <p>透過跨國設計與商業規劃經驗，AnLee 主張在商業場域中引入「減法與留白」，以克制的材料語彙為訪客營造安靜、能自主思考與體會品質的環境。</p>
    `,
    body_en: `
      <p>Commercial venues are too often assumed to require relentless sensory stimulation to capture consumer attention. Yet excess ornamentation frequently dilutes a brand’s genuine narrative and core value.</p>
      <p>Drawing on cross-border commercial planning experience, AnLee advocates introducing spatial reduction and pause, curating restrained materiality that grants visitors quiet clarity to appreciate intrinsic quality.</p>
    `
  }
};
