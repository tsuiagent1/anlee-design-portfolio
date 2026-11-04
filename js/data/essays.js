/**
 * Essays & Editorials 觀點專題區塊資料庫
 * 收錄：設計哲學、減法生活思維、材料真實性與身體直覺反思
 * 崔董若欲新增或修改 Essays 區塊文章，請直接編輯本檔案。
 */
const essaysArticles = {
  'ess-001': {
    category: 'Essays & Editorials',
    id_badge: 'AL-ESS-001',
    title_tc: '設計不應製造距離：從少數人的展示回歸真實生活的包容',
    title_en: 'Design Should Not Create Distance: From Exhibition to the Honesty of Living',
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    excerpt_tc: '設計不是少數人的審美特權，而是理解彼此的媒介。當我們卸下多餘的風格包袱，空間才能平等地擁抱不同生活型態。',
    excerpt_en: 'Design is not an aesthetic privilege for the few, but a conduit for mutual understanding and everyday honesty.',
    body_tc: `
      <p>當代許多設計雜誌將極簡風格塑造成纖塵不染、昂貴且難以靠近的樣品屋樣貌。然而，真正的生活是有溫度的，有煮水沖茶的蒸氣、有貓咪踩過的足跡、有隨手翻閱擺放的書冊。</p>
      <p>AnLee 堅信：設計不應製造階級或審美的距離，而應幫助人理解彼此。設計不只是少數人的高端展示，更應真誠回應不同生活條件、不同世代與不同日常需求。這不是一句高調的口號，而是我們在每一份設計圖紙、每一篇文章中所持續實踐的自省。</p>
    `,
    body_en: `
      <p>Contemporary design editorials too frequently depict minimalism as sterile, expensive, and unapproachable showrooms. Yet genuine life breathes with warmth—the gentle steam of boiling kettle water, the soft prints of a companion cat, the casual comfort of dog-eared books.</p>
      <p>AnLee holds that design must never cultivate distance, but help people understand one another. It is not an elite display for the few, but an honest accommodation of diverse living conditions, generations, and daily rhythms. This is not grand rhetoric, but a sustained self-reflection woven into every drawing and essay we produce.</p>
    `
  },
  'ess-002': {
    category: 'Essays & Editorials',
    id_badge: 'AL-ESS-002',
    title_tc: '生活的減法不是空無，而是讓光與思考重新走入日常',
    title_en: 'Reduction is Not Emptiness, But Allowing Light and Reflection to Enter',
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    excerpt_tc: '減去多餘的物慾與雜訊，並非追求極端的苦行，而是為了替晨光、清風與靜心思考騰出應有的容身之處。',
    excerpt_en: 'Subtraction is not severe deprivation, but clearing visual noise to make room for morning light and calm thought.',
    body_tc: `
      <p>減法往往被誤解為剝奪或刻意清除一切所有物。但在我們的世界觀中，「減法」是辨識何者真正重要的智慧。</p>
      <p>當我們把空間中多餘的裝飾板材、雜亂的非必要線條減去，被釋放出來的不是冰冷的空洞，而是晨光的漫射、微風的穿透，以及讓人停下腳步、好好思考生活的安歇之所。</p>
    `,
    body_en: `
      <p>Reduction is often misunderstood as deprivation or severe renunciation. In our worldview, reduction is the wisdom of recognizing what is truly essential.</p>
      <p>When we strip away redundant cladding and cluttering visual lines, what emerges is not vacant coldness, but the soft wash of morning light, cross-ventilation, and a restful haven where reflective thought can flourish.</p>
    `
  },
  'ess-003': {
    category: 'Essays & Editorials',
    id_badge: 'AL-ESS-003',
    title_tc: '尊重材料的原始語言：在水泥、木頭與石材中看見真實',
    title_en: 'Honoring Material Authenticity: Concrete, Timber, and Stone',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    excerpt_tc: '當材料不再被覆蓋厚重的塑料或裝飾面，天然木紋的裂隙與水泥的孔隙，才是時間留給居所最美妙的印記。',
    excerpt_en: 'Uncoated minerals and organic grain textures reveal the quiet passage of time and authentic grace.',
    body_tc: `
      <p>材料本身自有其語言。木材有其收縮膨脹的自然特性，微水泥有其手工抿壓留下的細微紋路，石材有其地質年代沉積的斑駁。</p>
      <p>尊重材料，就是不刻意用厚重的化學亮光漆去掩飾木材的毛孔，也不用假紋理的貼皮去仿冒自然。真實的事物自有一種沉靜的力量，能在日常中經受時間的考驗。</p>
    `,
    body_en: `
      <p>Materials speak their own innate dialects. Timber breathes and expands with the seasons; microcement preserves the subtle traces of the artisan's trowel; stone carries geologic memories etched over millennia.</p>
      <p>To respect materials is to refrain from smothering pores under synthetic gloss or masking surfaces with fake veneers. Authentic matter possesses an inherent, enduring tranquility that withstands time gracefully.</p>
    `
  },
  'ess-004': {
    category: 'Essays & Editorials',
    id_badge: 'AL-ESS-004',
    title_tc: '直覺作為設計的起點：當我們放下理論，身體如何感知空間？',
    title_en: 'Intuition as the Point of Departure: Bodily Perception in Space',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    excerpt_tc: '走進一個房間時，身體的直覺往往比理性的分析更早告訴我們：這裡是否讓人安心、是否能放鬆呼吸。',
    excerpt_en: 'Intuitive somatic comfort precedes theoretical analysis: does the spatial volume grant ease and natural breathing?',
    body_tc: `
      <p>過多的設計理論往往成為遮蔽感受的障礙。當一個人踏入一個空間，天花板的高度是否讓人放鬆？通道的寬度是否合宜？落坐時視線所及的光景是否令人安適？</p>
      <p>這些直覺感受，比任何華麗的風格名詞都更接近好設計的真諦。AnLee 始終以直覺為指引，在設計中尋找最不費力、最自然的空間狀態。</p>
    `,
    body_en: `
      <p>Excessive spatial doctrines often veil genuine somatic awareness. When stepping into an interior, does the ceiling height grant release? Does the threshold feel natural? Does the vista upon sitting offer quiet ease?</p>
      <p>These intuitive bodily responses lie far closer to design honesty than any stylistic label. AnLee consistently allows intuition to guide the pursuit of spaces that feel effortless and inherently harmonious.</p>
    `
  }
};
