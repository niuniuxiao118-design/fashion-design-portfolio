const projects = [
  {
    id: "sand-system",
    number: "NO.1",
    title: "CHILL都市",
    englishTitle: "CHILL CITY",
    category: "FASHION VISUAL",
    capabilityTitle: "针织专项设计",
    capabilityEnglish: "Specialized Knitwear Design",
    time: "2025.11",
    intro: "以城市通勤与松弛生活为核心，延续自然中性色和机能廓形，构建轻松但有结构感的系列表达。",
    introEn: "Centered on urban commuting and relaxed daily life, this project extends natural neutrals and functional silhouettes into an easy yet structured series.",
    concept: "在秩序与自由之间寻找平衡，<br />以松弛的层次与中性色调<br />构建都市生活的自洽节奏。",
    conceptEn: "FINDING BALANCE BETWEEN ORDER AND FREEDOM,<br />BUILDING A SELF-CONSISTENT RHYTHMOF URBAN LIFE WITH RELAXED LAYERSAND NEUTRAL TONES.",
    cover: "./assets/urban-nomad-style-extension-board.png",
    heroVideo: "./assets/sand-system-hero-video.mp4",
    palette: []
  },
  {
    id: "urban-nomad",
    number: "NO.2",
    title: "都市游牧",
    englishTitle: "URBAN NOMAD",
    category: "FASHION VISUAL / 2025 FW",
    capabilityTitle: "商业女装系列开发",
    capabilityEnglish: "Commercial Womenswear Series Development",
    time: "2025 FW",
    intro: "从自然地貌中汲取色彩与质感，融合实用机能与松弛廓形，演绎都市游牧美学。",
    introEn: "Drawing color and texture from natural landforms, the collection blends utility details with relaxed silhouettes to express an urban nomadic mood.",
    concept: "在都市与自然之间寻找平衡，以流动的剪裁、自然的材质与中性的色彩，构建自由而优雅的生活方式。",
    conceptEn: "Balancing city life and nature through fluid cutting, natural textures, and neutral tones, the series builds a free yet refined way of dressing.",
    hero: "./assets/urban-nomad-hero-bg.png",
    heroVideo: "./assets/urban-nomad-loop.mp4",
    cover: "./assets/urban-nomad-board.png",
    conceptImage: "./assets/urban-nomad-concept.png",
    looks: [
      "./assets/urban-nomad-look-01.png",
      "./assets/urban-nomad-look-02.png",
      "./assets/urban-nomad-look-03.png",
      "./assets/urban-nomad-look-04.png"
    ],
    sketches: [
      { title: "SKETCH 01", sketch: "./assets/sketch-c1.png", color: "./assets/sketch-s1.png" },
      { title: "SKETCH 02", sketch: "./assets/sketch-c2.png", color: "./assets/sketch-s2.png" },
      { title: "SKETCH 03", sketch: "./assets/sketch-c3.png", color: "./assets/sketch-s3.png" }
    ],
    outcomes: [
      { title: "褶皱针织上衣", titleEn: "Draped Knit Top", src: "./assets/outcome-01.png" },
      { title: "褶皱针织上衣 Back", titleEn: "Draped Knit Top Back", src: "./assets/outcome-02.png" },
      { title: "工装口袋半裙", titleEn: "Utility Pocket Skirt", src: "./assets/outcome-03.png" },
      { title: "短款夹克", titleEn: "Cropped Jacket", src: "./assets/outcome-04.png" },
      { title: "织纹背心", titleEn: "Textured Knit Vest", src: "./assets/outcome-05.png" },
      { title: "织纹背心 Back", titleEn: "Textured Knit Vest Back", src: "./assets/outcome-06.png" },
      { title: "刺绣针织衫", titleEn: "Embroidered Knitwear", src: "./assets/outcome-07.png" },
      { title: "刺绣针织衫 Back", titleEn: "Embroidered Knitwear Back", src: "./assets/outcome-08.png" },
      { title: "翻领针织衫", titleEn: "Collared Knitwear", src: "./assets/outcome-09.png" },
      { title: "翻领针织衫 Back", titleEn: "Collared Knitwear Back", src: "./assets/outcome-10.png" },
      { title: "米白阔腿裤", titleEn: "Ivory Wide-leg Pants", src: "./assets/outcome-11.png" },
      { title: "针织宽裤", titleEn: "Wide Knit Pants", src: "./assets/outcome-12.png" }
    ],
    lookViews: [
      [
        { label: "FRONT", src: "./assets/look01-view-front.png" },
        { label: "SIDE", src: "./assets/look01-view-side.png" },
        { label: "BACK", src: "./assets/look01-view-back.png" }
      ],
      [
        { label: "FRONT", src: "./assets/look02-view-front.png" },
        { label: "SIDE", src: "./assets/look02-view-side.png" },
        { label: "BACK", src: "./assets/look02-view-back.png" }
      ],
      [
        { label: "FRONT", src: "./assets/look03-view-front.png" },
        { label: "SIDE", src: "./assets/look03-view-side.png" },
        { label: "BACK", src: "./assets/look03-view-back.png" }
      ],
      [
        { label: "FRONT", src: "./assets/look04-view-front.png" },
        { label: "SIDE", src: "./assets/look04-view-side.png" },
        { label: "BACK", src: "./assets/look04-view-back.png" }
      ]
    ],
    palette: [
      { name: "砂岩棕", hex: "#C8A27C" },
      { name: "沙漠米", hex: "#DCC7A6" },
      { name: "暖驼色", hex: "#B78A5E" },
      { name: "陶土褐", hex: "#8B6B4F" },
      { name: "深咖啡", hex: "#4A2E23" },
      { name: "青石蓝", hex: "#244F63" },
      { name: "柔粉", hex: "#F2A2C7" }
    ],
    keywords: [
      { zh: "流动", en: "FLOW" },
      { zh: "自然", en: "NATURE" },
      { zh: "自由", en: "FREEDOM" },
      { zh: "探索", en: "EXPLORE" },
      { zh: "优雅", en: "ELEGANCE" }
    ]
  },
  {
    id: "relaxed-utility",
    number: "NO.3",
    title: "个人设计",
    englishTitle: "Personal Design",
    category: "Fashion Design",
    capabilityTitle: "个人设计系列",
    capabilityEnglish: "Personal Design Works",
    time: "2025.09",
    intro: "一个服装系列线上 lookbook，突出面料、廓形和搭配关系。",
    introEn: "An online lookbook for a womenswear series, focusing on fabric, silhouette, and styling relationships.",
    concept: "",
    conceptEn: "",
    cover: "./assets/relaxed-utility-cover.png",
    palette: []
  },
  {
    id: "stone-blue",
    number: "NO.4",
    title: "工作能力",
    englishTitle: "STONE BLUE",
    category: "EDITORIAL",
    capabilityTitle: "工作能力补充",
    capabilityEnglish: "Additional Professional Capabilities",
    time: "2025.07",
    intro: "以青石蓝作为冷静锚点，为自然色系建立更现代的视觉反差。",
    introEn: "Using stone blue as a calm anchor, this study adds a contemporary contrast to the natural palette.",
    concept: "在温暖沙色中压入少量深蓝，形成城市感与自然感之间的稳定张力。",
    conceptEn: "A measured dose of deep blue is placed into warm sand tones, creating a stable tension between urban clarity and natural warmth.",
    palette: [],
    cover: "./assets/工作能力补充封面.png"
  }
];

const detailLabels = {
  intro: ["项目介绍", "Project Overview"],
  concept: ["设计理念", "Design Concept"],
  time: ["完成时间", "Completion Time"]
};

function bilingualHeading(cn, en) {
  return `<span class="heading-cn">${cn}</span><span class="heading-en">${en}</span>`;
}

function bilingualCopy(cn, en) {
  return `<span class="copy-cn">${cn}</span><span class="copy-en">${en}</span>`;
}

function detailArticle(kind, content, contentEn) {
  const [cn, en] = detailLabels[kind];
  return `<article data-reveal><h2>${bilingualHeading(cn, en)}</h2><p>${bilingualCopy(content, contentEn)}</p></article>`;
}

function backToWorksLink() {
  return `<a class="back-link ripple-target" href="./index.html#works"><span>返回作品</span><em>Back to Works</em></a>`;
}

function projectPager(currentProject) {
  const currentIndex = projects.findIndex((item) => item.id === currentProject.id);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const prevProject = projects[(safeIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(safeIndex + 1) % projects.length];

  return `
    <nav class="project-pager" id="projectPager" aria-label="Project navigation" data-reveal>
      <a class="project-pager-link project-pager-prev ripple-target" href="./project.html?id=${prevProject.id}" aria-label="上一个作品：${prevProject.title}">
        <span class="project-pager-arrow" aria-hidden="true">‹</span>
        <span class="project-pager-copy">
          <em>上一个</em>
          <strong>${prevProject.number} ${prevProject.title}</strong>
        </span>
      </a>
      <a class="project-pager-link project-pager-next ripple-target" href="./project.html?id=${nextProject.id}" aria-label="下一个作品：${nextProject.title}">
        <span class="project-pager-copy">
          <em>下一个</em>
          <strong>${nextProject.number} ${nextProject.title}</strong>
        </span>
        <span class="project-pager-arrow" aria-hidden="true">›</span>
      </a>
    </nav>
  `;
}

function renderChillTrendSection() {
  const trendImages = [
    { src: "./assets/chill-knit-trend-01.png", alt: "松弛中性色V领羊毛针织衫通勤造型" },
    { src: "./assets/chill-knit-trend-02.png", alt: "米色开衫与黑色阔腿裤针织通勤造型" },
    { src: "./assets/chill-knit-trend-03.png", alt: "灰色羊毛开衫与浅色西裤复古通勤造型" },
    { src: "./assets/chill-knit-trend-04.png", alt: "棕色复古羊毛开衫与木质背景造型" },
    { src: "./assets/chill-knit-trend-05.png", alt: "米白拉链罗纹羊毛针织衫极简造型" },
    { src: "./assets/chill-knit-trend-06.png", alt: "柔软米色针织开衫与衬衫层次穿搭" },
    { src: "./assets/chill-knit-trend-07.png", alt: "白色绞花高领羊毛开衫经典复古造型" }
  ];

  const takeaways = [
    "经典中性色持续占据主导，传递低调高级感",
    "舒适松弛的版型成为主流，注重实穿与多场景搭配",
    "材质与工艺升级，强调羊绒、羊毛等天然纤维的质感表达",
    "消费者更关注长期穿着价值与造型多样性"
  ];

  const holidayTrendImages = [
    { src: "./assets/fx1.png", alt: "灰红节日提花羊毛开衫" },
    { src: "./assets/fx2.png", alt: "蓝白复古提花圆领针织衫" },
    { src: "./assets/fx3.png", alt: "深绿蓝灰复古提花针织造型" },
    { src: "./assets/fx4.png", alt: "绿色粉色菱格毛感针织衫" },
    { src: "./assets/fx5.png", alt: "棕色菱格针织开衫节日造型" },
    { src: "./assets/fx6.png", alt: "多色复古提花针织开衫" },
    { src: "./assets/fx7.png", alt: "红蓝节日提花毛衣造型" }
  ];

  const holidayTakeaways = [
    "复古提花成为核心识别点",
    "色彩以温暖中性色为底，加入节日跳色",
    "廓形偏宽松舒适，强调包裹感",
    "毛感纱线提升温暖与高级感"
  ];

  return `
    <section class="chill-report-carousel" id="chillReportCarousel" aria-labelledby="chillReportCarouselTitle" data-reveal>
      <div class="chill-report-shell">
        <div class="chill-report-bar">
          <div>
            <p class="section-code">CHILL CITY REPORT</p>
            <h2 id="chillReportCarouselTitle">
              <span class="heading-cn">羊毛针织衫市场趋势分析</span>
              <span class="heading-en">Wool Knitwear Market Trend Analysis</span>
            </h2>
          </div>
          <div class="chill-report-controls" aria-label="报告页切换">
            <button class="chill-report-control ripple-target" type="button" data-chill-carousel-prev aria-label="上一页">‹</button>
            <button class="chill-report-control ripple-target" type="button" data-chill-carousel-next aria-label="下一页">›</button>
          </div>
        </div>
        <div class="chill-report-viewport" tabindex="0">
          <div class="chill-report-track">
            <article class="chill-report-slide is-active" data-chill-slide="0">
              <section class="chill-trend-section" id="chill-knit-trends" aria-labelledby="chillTrendTitle">
      <div class="chill-trend-copy">
        <p class="section-code" data-reveal>WOOL KNITWEAR TREND REPORT</p>
        <h2 id="chillTrendTitle" data-reveal>
          <span class="heading-cn">市场趋势分析一</span>
          <span class="heading-en">Wool Knitwear Market Trend Analysis</span>
        </h2>
        <p class="chill-trend-lead" data-reveal>
          当代女装针织正从单一的“内搭功能单品”转向具有独立造型表达的核心品类。通过对 CIRCLE、COS、MO&amp;Co、Calvin Klein、Ralph Lauren 等品牌的对比分析，可以观察到市场呈现出以“极简通勤”与“经典复古”为主导的双重趋势路径。
        </p>
      </div>
      <div class="chill-trend-collage" aria-label="羊毛针织衫趋势图片拼贴">
        ${trendImages.map((image, index) => `
          <figure class="chill-trend-image chill-trend-image-${index + 1}" data-reveal style="--delay:${160 + index * 70}ms">
            <img src="${image.src}" alt="${image.alt}" loading="eager" />
          </figure>
        `).join("")}
        <article class="chill-takeaway-card" data-reveal style="--delay:720ms">
          <h3><span>关键趋势总结</span><em>KEY TAKEAWAYS</em></h3>
          <ul>
            ${takeaways.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      </div>
              </section>
            </article>
            <article class="chill-report-slide" data-chill-slide="1">
              <section class="chill-trend-section chill-trend-section-holiday" id="holidayTrendAnalysis" aria-labelledby="holidayTrendTitle">
                <div class="chill-trend-copy">
                  <p class="section-code" data-reveal>HOLIDAY KNITWEAR TREND REPORT</p>
                  <h2 id="holidayTrendTitle" data-reveal>
                    <span class="heading-cn">市场趋势分析二</span>
                    <span class="heading-en">Holiday Mood Knitwear Trend Analysis</span>
                  </h2>
                  <p class="chill-trend-lead" data-reveal>
                    随着秋冬消费场景逐渐向圣诞、新年、春节等节日节点集中，针织衫不再只是基础保暖单品，而成为承载情绪价值与节日氛围的重要服装品类。通过围绕“节日氛围感”为主题展开市场调研，提炼羊毛针织衫的开发方向关键趋势。
                  </p>
                </div>
                <div class="chill-trend-collage" aria-label="节日氛围羊毛针织衫趋势图片拼贴">
                  ${holidayTrendImages.map((image, index) => `
                    <figure class="chill-trend-image chill-trend-image-${index + 1}" data-reveal style="--delay:${160 + index * 70}ms">
                      <img src="${image.src}" alt="${image.alt}" loading="lazy" />
                    </figure>
                  `).join("")}
                  <article class="chill-takeaway-card" data-reveal style="--delay:720ms">
                    <h3><span>关键趋势总结</span><em>KEY TAKEAWAYS</em></h3>
                    <ul>
                      ${holidayTakeaways.map((item) => `<li>${item}</li>`).join("")}
                    </ul>
                  </article>
                </div>
              </section>
            </article>
            <article class="chill-report-slide" data-chill-slide="2">
              <!-- 趋势分析详细模块 -->
              <section class="trend-analysis-section" id="trendAnalysis">

      <!-- 模块一：版形趋势 -->
      <div class="trend-module trend-silhouette" data-animate>
        <div class="module-header">
          <span class="module-number">01</span>
          <h3 class="module-title-cn">版形趋势</h3>
          <p class="module-title-en">SILHOUETTE</p>
        </div>

        <div class="silhouette-gallery">
          <figure class="silhouette-item" data-delay="0">
            <img src="./assets/黑色圆领开衫.png" alt="黑色圆领开衫" loading="lazy" />
            <figcaption>黑色圆领开衫</figcaption>
          </figure>
          <figure class="silhouette-item" data-delay="100">
            <img src="./assets/藏青色开衫.png" alt="藏青色开衫" loading="lazy" />
            <figcaption>藏青色开衫</figcaption>
          </figure>
          <figure class="silhouette-item" data-delay="200">
            <img src="./assets/灰色V领开衫.png" alt="灰色V领短款开衫" loading="lazy" />
            <figcaption>灰色V领短款开衫</figcaption>
          </figure>
          <figure class="silhouette-item" data-delay="300">
            <img src="./assets/灰色圆领开衫.png" alt="灰色圆领开衫" loading="lazy" />
            <figcaption>灰色圆领开衫</figcaption>
          </figure>
          <figure class="silhouette-item" data-delay="400">
            <img src="./assets/驼色高领开衫.png" alt="驼色高领开衫" loading="lazy" />
            <figcaption>驼色高领开衫</figcaption>
          </figure>
        </div>

        <p class="module-description">
          强调贴合身体但不过度紧绷的舒适状态，短款比例显著增加，以适配高腰下装的当代穿搭逻辑。在结构设计上，开衫形式占据主导，圆领与V领成为基础核心版型，体现出更强的穿搭灵活性与场景适应能力。
        </p>
      </div>

      <!-- 分隔线 -->
      <div class="module-divider"></div>

      <!-- 模块二：色彩趋势 -->
      <div class="trend-module trend-colors" data-animate>
        <div class="module-header">
          <span class="module-number">02</span>
          <h3 class="module-title-cn">色彩趋势</h3>
          <p class="module-title-en">COLOR PALETTE</p>
        </div>

        <div class="color-palette">
          <div class="color-chip" style="background-color: #F5F2ED;" data-color="#F5F2ED" data-name="暖白色" data-delay="0">
            <span class="color-tooltip">暖白色<br>#F5F2ED</span>
          </div>
          <div class="color-chip" style="background-color: #D3B998;" data-color="#D3B998" data-name="燕麦米色" data-delay="80">
            <span class="color-tooltip">燕麦米色<br>#D3B998</span>
          </div>
          <div class="color-chip" style="background-color: #9A8074;" data-color="#9A8074" data-name="灰棕色" data-delay="160">
            <span class="color-tooltip">灰棕色<br>#9A8074</span>
          </div>
          <div class="color-chip" style="background-color: #553A2B;" data-color="#553A2B" data-name="深咖啡色" data-delay="240">
            <span class="color-tooltip">深咖啡色<br>#553A2B</span>
          </div>
          <div class="color-chip" style="background-color: #969195;" data-color="#969195" data-name="灰紫色" data-delay="320">
            <span class="color-tooltip">灰紫色<br>#969195</span>
          </div>
          <div class="color-chip" style="background-color: #2F4028;" data-color="#2F4028" data-name="墨绿色" data-delay="400">
            <span class="color-tooltip">墨绿色<br>#2F4028</span>
          </div>
          <div class="color-chip" style="background-color: #111638;" data-color="#111638" data-name="藏青色" data-delay="480">
            <span class="color-tooltip">藏青色<br>#111638</span>
          </div>
        </div>

        <p class="module-description">
          色彩体系以低饱和中性色为主，如燕麦色、米色、灰色及黑色，通过克制的色彩语言强化产品的高级感与长期可穿性。同时，局部点缀的深蓝与柔和冷色调，为整体系列提供层次变化。
        </p>
      </div>

      <!-- 分隔线 -->
      <div class="module-divider"></div>

      <!-- 模块三：市场反馈 -->
      <div class="trend-module trend-market" data-animate>
        <div class="module-header">
          <span class="module-number">03</span>
          <h3 class="module-title-cn">市场反馈</h3>
          <p class="module-title-en">MARKET FEEDBACK</p>
        </div>

        <div class="market-cards">
          <div class="market-card" data-delay="0">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              </svg>
            </div>
            <h4 class="card-label">需求增长</h4>
            <p class="card-value" data-target="28">+<span class="counter">0</span>%</p>
            <p class="card-desc">针织品类在25秋冬显著增长</p>
          </div>

          <div class="market-divider"></div>

          <div class="market-card" data-delay="150">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 01-8 0"></path>
              </svg>
            </div>
            <h4 class="card-label">消费偏好</h4>
            <p class="card-value card-badge">TOP<span class="counter-top">1</span></p>
            <p class="card-desc">舒适度、质感、百搭是消费者青睐的关键</p>
          </div>

          <div class="market-divider"></div>

          <div class="market-card" data-delay="300">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </div>
            <h4 class="card-label">热销品类</h4>
            <p class="card-value card-badge">TOP<span class="counter-top">3</span></p>
            <p class="card-desc">羊毛针织品类持续领跑秋冬市场</p>
          </div>
        </div>
      </div>

              </section>
            </article>
            <article class="chill-report-slide" data-chill-slide="3">
              <!-- 针织纱线与面料分析板块 -->
              <section class="knit-analysis-section" id="knitAnalysis" data-animate>
      <!-- 顶部标题区 -->
      <div class="knit-analysis-header">
        <h2 class="knit-main-title">针织纱线与面料分析一</h2>
        <p class="knit-sub-title">基于市场主流款式提炼的秋冬针织开发方向</p>
      </div>

      <!-- 四模块网格布局 -->
      <div class="knit-modules-grid">

        <!-- 模块一：核心款式方向 -->
        <div class="knit-module knit-module-core" data-animate data-delay="0">
          <div class="module-title-bar">
            <span class="module-num">01</span>
            <h3>核心款式方向（基础通勤款）</h3>
          </div>
          <div class="core-looks-grid">
            <figure class="core-look-item" data-delay="0">
              <img src="./assets/hexin (1).png" alt="基础通勤款1" loading="lazy" />
              <figcaption>通勤百搭</figcaption>
            </figure>
            <figure class="core-look-item" data-delay="80">
              <img src="./assets/hexin (2).png" alt="基础通勤款2" loading="lazy" />
              <figcaption>叠穿友好</figcaption>
            </figure>
            <figure class="core-look-item" data-delay="160">
              <img src="./assets/hexin (3).png" alt="基础通勤款3" loading="lazy" />
              <figcaption>秋冬氛围</figcaption>
            </figure>
            <figure class="core-look-item" data-delay="240">
              <img src="./assets/hexin (4).png" alt="基础通勤款4" loading="lazy" />
              <figcaption>廓形利落</figcaption>
            </figure>
            <figure class="core-look-item" data-delay="320">
              <img src="./assets/hexin (5).png" alt="基础通勤款5" loading="lazy" />
              <figcaption>简约质感</figcaption>
            </figure>
            <figure class="core-look-item" data-delay="400">
              <img src="./assets/hexin (6).png" alt="基础通勤款6" loading="lazy" />
              <figcaption>经典百搭</figcaption>
            </figure>
          </div>
        </div>

        <!-- 模块二：纱线方向 -->
        <div class="knit-module knit-module-yarn" data-animate data-delay="200">
          <div class="module-title-bar">
            <span class="module-num">02</span>
            <h3>纱线方向</h3>
          </div>
          <div class="yarn-samples-grid">
            <figure class="yarn-sample-card" data-delay="0">
              <img src="./assets/yangmao (1).png" alt="精纺美丽诺羊毛纱线肌理" loading="lazy" />
              <figcaption>
                <strong>精纺美丽诺羊毛</strong>
                <span>细腻平滑，轻暖舒适</span>
              </figcaption>
            </figure>
            <figure class="yarn-sample-card" data-delay="100">
              <img src="./assets/yangmao (2).png" alt="羊毛羊绒混纺纱线肌理" loading="lazy" />
              <figcaption>
                <strong>羊毛/羊绒混纺</strong>
                <span>手感柔糯，质感升级</span>
              </figcaption>
            </figure>
            <figure class="yarn-sample-card" data-delay="200">
              <img src="./assets/yangmao (3).png" alt="羊毛黏胶尼龙混纺纱线肌理" loading="lazy" />
              <figcaption>
                <strong>羊毛/黏胶/尼龙混纺</strong>
                <span>垂顺成型，不易变形</span>
              </figcaption>
            </figure>
            <figure class="yarn-sample-card" data-delay="300">
              <img src="./assets/yangmao (4).png" alt="棉羊毛功能纤维混纺纱线肌理" loading="lazy" />
              <figcaption>
                <strong>棉羊毛/功能纤维混纺</strong>
                <span>亲肤易打理</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <!-- 模块三：纱织方向 -->
        <div class="knit-module knit-module-weave" data-animate data-delay="400">
          <div class="module-title-bar">
            <span class="module-num">03</span>
            <h3>纱织方向</h3>
          </div>
          <div class="weave-patterns-grid">
            <div class="weave-card" data-delay="0">
              <div class="weave-img-placeholder">
                <span class="weave-icon">平针</span>
              </div>
              <h4>平针方向</h4>
              <p class="weave-desc">表面平整 / 简洁高级</p>
            </div>
            <div class="weave-card" data-delay="80">
              <div class="weave-img-placeholder">
                <span class="weave-icon">弹性</span>
              </div>
              <h4>平针方向</h4>
              <p class="weave-desc">弹性佳 / 收口清晰</p>
            </div>
            <div class="weave-card" data-delay="160">
              <div class="weave-img-placeholder">
                <span class="weave-icon">绞花</span>
              </div>
              <h4>绞花组织</h4>
              <p class="weave-desc">纹理立体 / 肌理感强</p>
            </div>
            <div class="weave-card" data-delay="240">
              <div class="weave-img-placeholder">
                <span class="weave-icon">双面</span>
              </div>
              <h4>双面组织</h4>
              <p class="weave-desc">挺阔有型 / 适合廓形款</p>
            </div>
            <div class="weave-card" data-delay="320">
              <div class="weave-img-placeholder">
                <span class="weave-icon">提花</span>
              </div>
              <h4>提花组织</h4>
              <p class="weave-desc">图案丰富 / 细节精致</p>
            </div>
          </div>
        </div>

        <!-- 模块四：搭配方向 -->
        <div class="knit-module knit-module-style" data-animate data-delay="600">
          <div class="module-title-bar">
            <span class="module-num">04</span>
            <h3>搭配方向</h3>
          </div>
          <div class="style-looks-grid">
            <figure class="style-look-item" data-delay="0">
              <img src="./assets/look (1).png" alt="针织衫搭配西装外套" loading="lazy" />
              <figcaption>针织+西装</figcaption>
            </figure>
            <figure class="style-look-item" data-delay="70">
              <img src="./assets/look (2).png" alt="针织开衫搭配衬衫" loading="lazy" />
              <figcaption>开衫+衬衫</figcaption>
            </figure>
            <figure class="style-look-item" data-delay="140">
              <img src="./assets/look (3).png" alt="V领针织搭配高腰裤" loading="lazy" />
              <figcaption>V领+高腰裤</figcaption>
            </figure>
            <figure class="style-look-item" data-delay="210">
              <img src="./assets/look (4).png" alt="黑色针织搭配宽松西裤" loading="lazy" />
              <figcaption>黑色+西裤</figcaption>
            </figure>
            <figure class="style-look-item" data-delay="280">
              <img src="./assets/look (5).png" alt="针织衫搭配大衣或皮衣" loading="lazy" />
              <figcaption>针织+大衣</figcaption>
            </figure>
            <figure class="style-look-item" data-delay="350">
              <img src="./assets/look (6).png" alt="基础针织搭配配饰" loading="lazy" />
              <figcaption>基础+配饰</figcaption>
            </figure>
          </div>
        </div>

      </div>

      <!-- 底部关键词总结栏 -->
      <div class="keywords-summary-bar" data-animate data-delay="800">
        <svg class="yarn-ball-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 2"></path>
        </svg>
        <span class="keywords-label">开发关键词：</span>
        <span class="keyword-tag">轻暖感</span>
        <span class="keyword-tag">层次叠穿</span>
        <span class="keyword-tag">高智感</span>
        <span class="keyword-tag">休闲感</span>
      </div>
              </section>
            </article>
          </div>
        </div>
        <div class="chill-report-dots" aria-label="报告分页">
          <button class="chill-report-dot is-active" type="button" data-chill-carousel-dot="0" aria-label="市场趋势一"></button>
          <button class="chill-report-dot" type="button" data-chill-carousel-dot="1" aria-label="市场趋势二"></button>
          <button class="chill-report-dot" type="button" data-chill-carousel-dot="2" aria-label="版形与市场"></button>
          <button class="chill-report-dot" type="button" data-chill-carousel-dot="3" aria-label="纱线与面料"></button>
        </div>
      </div>
    </section>
  `;
}

function createRipple(target, event) {
  const rect = target.getBoundingClientRect();
  const ripple = document.createElement("span");
  const size = Math.max(rect.width, rect.height);
  ripple.className = "ripple";
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
  target.appendChild(ripple);
  window.setTimeout(() => ripple.remove(), 620);
}

function coverMarkup(project, large = false) {
  if (project.heroVideo && !large) {
    return `
      <div class="image-cover video-cover">
        <video class="cover-video" autoplay loop muted playsinline poster="${project.hero}">
          <source src="${project.heroVideo}" type="video/mp4" />
        </video>
      </div>
    `;
  }

  if (project.cover) {
    return `
      <div class="${large ? "image-cover image-cover-large" : "image-cover"}">
        <img src="${project.cover}" alt="${project.title} mood board" />
      </div>
    `;
  }

  const className = large ? "project-cover project-cover-large" : "project-cover";
  return `
    <div class="${className}" aria-hidden="true">
      <span class="shape-blue"></span>
      <span class="shape-gray"></span>
      <span class="shape-line-a"></span>
      <span class="cover-title">${project.englishTitle.split(" ")[0]}</span>
    </div>
  `;
}

function renderWorks() {
  const grid = document.querySelector("#worksGrid");
  if (!grid) return;
  grid.innerHTML = projects.map((project, index) => `
    <a id="work-${project.id}" class="work-card ripple-target ${index === 1 ? "work-card-featured" : ""}" href="./project.html?id=${project.id}" data-reveal style="--delay:${index * 45}ms">
      <div class="work-card-visual">
        ${coverMarkup(project)}
        <div class="work-capability-title" aria-hidden="true">
          <span>${project.capabilityTitle}</span>
          <em>${project.capabilityEnglish}</em>
        </div>
      </div>
      <div class="work-card-meta">
        <span>${project.number}</span>
        <h3>${project.title}</h3>
        <p>${project.category}</p>
        <em>${project.englishTitle}</em>
      </div>
    </a>
  `).join("");
}

function looks(project) {
  return project.looks.map((src, index) => `
    <figure class="look-card look-card-fill look-card-clickable ripple-target" role="button" tabindex="0" data-look-index="${index}" data-reveal style="--delay:${index * 50}ms">
      <img src="${src}" alt="都市游牧款式延展 ${index + 1}" />
      <figcaption><span>LOOK 0${index + 1}</span><em>查看细节 / View Details</em></figcaption>
    </figure>
  `).join("");
}

function sketches(project) {
  return project.sketches.map((item, index) => `
    <figure class="sketch-card" data-reveal style="--delay:${index * 55}ms">
      <div class="sketch-frame">
        <img class="sketch-line" src="${item.sketch}" alt="${item.title} 草图" />
        <img class="sketch-color" src="${item.color}" alt="${item.title} 色稿" />
      </div>
    </figure>
  `).join("");
}

function outcomes(project) {
  return project.outcomes.map((item, index) => `
    <figure class="outcome-card" data-reveal style="--delay:${index * 35}ms">
      <div class="outcome-image">
        <img src="${item.src}" alt="${item.title}" />
      </div>
      <figcaption>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${item.title}</strong>
        <em>${item.titleEn || "Garment Outcome"}</em>
      </figcaption>
    </figure>
  `).join("");
}

function lookViewer(project) {
  return `
    <div class="look-modal" id="lookModal" aria-hidden="true">
      <div class="look-modal-backdrop" data-look-close></div>
      <section class="look-modal-panel" role="dialog" aria-modal="true" aria-label="LOOK 三视图">
        <header class="look-modal-header">
          <div>
            <span id="lookModalTitle">LOOK 01</span>
            <strong id="lookViewLabel">${project.lookViews[0][0].label}</strong>
          </div>
          <button class="look-modal-close ripple-target" type="button" data-look-close aria-label="CLOSE">CLOSE</button>
        </header>
        <button class="look-view-button ripple-target" type="button" id="lookViewButton" aria-label="切换 LOOK 视图">
          <img id="lookViewImage" src="${project.lookViews[0][0].src}" alt="LOOK 01 ${project.lookViews[0][0].label}" />
        </button>
      </section>
    </div>
  `;
}

const chillCarouselImages = Array.from({ length: 42 }, (_, index) => ({
  src: `./assets/outcome-carousel-${String(index + 1).padStart(2, "0")}.png`,
  alt: `CHILL都市成果转化 ${String(index + 1).padStart(2, "0")}`
}));

function carouselImageSet(images) {
  return `
    <div class="carousel-set">
      ${images.map((image, index) => `
        <figure class="carousel-card carousel-card-${(index % 4) + 1}">
          <img src="${image.src}" alt="${image.alt}" loading="lazy" />
        </figure>
      `).join("")}
    </div>
  `;
}

function renderChillImageFlow() {
  const topImages = chillCarouselImages.filter((_, index) => index % 2 === 0);
  const bottomImages = chillCarouselImages.filter((_, index) => index % 2 === 1);

  return `
    <section class="chill-image-flow-section" aria-label="CHILL都市双行图片轮播" data-reveal>
      <div class="chill-image-flow-heading">
        <p class="section-code">VISUAL FLOW</p>
        <h2>${bilingualHeading("成果转化", "Outcome Translation")}</h2>
      </div>
      <div class="two-row-carousel-viewport">
        <div class="carousel-row row-top">
          <div class="carousel-track">
            ${carouselImageSet(topImages)}
            ${carouselImageSet(topImages)}
          </div>
        </div>
        <div class="carousel-row row-bottom">
          <div class="carousel-track reverse">
            ${carouselImageSet(bottomImages)}
            ${carouselImageSet(bottomImages)}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBulkSalesVolume() {
  const salesImages = [
    { src: "./assets/大货销量1.png", alt: "CHILL都市大货销量表 01" },
    { src: "./assets/大货销量2.png", alt: "CHILL都市大货销量表 02" }
  ];

  return `
    <section class="bulk-sales-section" aria-label="CHILL都市大货销量" data-reveal>
      <div class="bulk-sales-heading">
        <p class="section-code">SALES DATA</p>
        <h2>${bilingualHeading("大货销量", "Bulk Sales Volume")}</h2>
      </div>
      <div class="bulk-sales-board">
        ${salesImages.map((image, index) => `
          <figure class="bulk-sales-card" data-reveal style="--delay:${index * 80}ms">
            <img src="${image.src}" alt="${image.alt}" loading="lazy" />
          </figure>
        `).join("")}
      </div>
    </section>
  `;
}

function renderUrbanNomad(detail, project) {
  detail.innerHTML = `
    <section class="nomad-hero">
      <video class="nomad-hero-video" autoplay loop muted playsinline poster="${project.hero}">
        <source src="${project.heroVideo}" type="video/mp4" />
      </video>
      <div class="nomad-title" data-reveal>
        ${backToWorksLink()}
        <p class="index-number">${project.number}</p>
        <h1>${project.title}</h1>
        <span>${project.englishTitle}</span>
        <p class="nomad-idea detail-idea">${bilingualCopy(`设计理念：${project.concept}`, `Concept: ${project.conceptEn}`)}</p>
      </div>
    </section>

    <section class="nomad-concept color-system-section">
      <div class="color-system-heading" data-reveal>
        <h2>${bilingualHeading("主色", "Primary Colors")}</h2>
      </div>
      <figure class="color-system-image" data-reveal>
        <img src="./assets/urban-nomad-color-system.png" alt="都市游牧主色与面料灵感" />
      </figure>
    </section>

    <section class="keyword-strip" data-reveal>
      ${project.keywords.map((word) => `<span>${word.zh}<em>${word.en}</em></span>`).join("")}
    </section>

    <section class="reference-section">
      <div data-reveal>
        <p class="section-code">MOOD BOARD</p>
        <h2>${bilingualHeading("色彩灵感与面料质感", "Color & Material Inspiration")}</h2>
      </div>
      <div class="reference-board-stack">
        <figure class="concept-image" data-reveal>
          <img src="./assets/urban-nomad-material-guide.png" alt="都市游牧色彩应用指南" />
        </figure>
        <figure class="concept-image" data-reveal>
          <img src="./assets/urban-nomad-style-extension-board.png" alt="都市游牧款式延展设计板" />
        </figure>
      </div>
    </section>

    <section class="looks-section" id="looks">
      <div class="section-heading" data-reveal>
        <p class="index-number">STYLE EXTENSION</p>
        <h2>${bilingualHeading("款式延展", "Style Extension")}</h2>
      </div>
      <div class="sketch-showcase">
        <div class="sketch-copy" data-reveal>
          <h3>${bilingualHeading("草图展示", "Sketch Development")}</h3>
        </div>
        <div class="sketch-grid">${sketches(project)}</div>
      </div>
      <div class="looks-subheading" data-reveal>
        <h3>${bilingualHeading("效果图展示", "Rendered Looks")}</h3>
      </div>
      <div class="looks-grid">${looks(project)}</div>
    </section>

    <section class="outcome-section" id="outcomes">
      <div class="outcome-heading" data-reveal>
        <p class="section-code">REAL GARMENTS</p>
        <h2>${bilingualHeading("成果转化", "Real Garment Translation")}</h2>
        <button class="outcome-toggle ripple-target" type="button" data-outcome-toggle aria-expanded="false">
          <span>查看全部</span><em>View All</em>
        </button>
      </div>
      <div class="outcome-grid">
        ${outcomes(project)}
      </div>
    </section>
    ${lookViewer(project)}

    <section class="detail-info nomad-info">
      ${detailArticle("intro", project.intro, project.introEn)}
      ${detailArticle("concept", project.concept, project.conceptEn)}
      ${detailArticle("time", project.time, project.time)}
    </section>
    ${projectPager(project)}
  `;
}

function renderSandSystem(detail, project) {
  detail.innerHTML = `
    <section class="sand-hero">
      <video class="sand-hero-video" autoplay loop muted playsinline poster="${project.cover}">
        <source src="${project.heroVideo}" type="video/mp4" />
      </video>
      <div class="sand-title" data-reveal>
        ${backToWorksLink()}
        <p class="index-number">${project.number} / ${project.category}</p>
        <h1>${project.title}</h1>
        <span class="detail-english">${project.englishTitle}</span>
        <p class="detail-idea">${bilingualCopy(`设计理念：${project.concept}`, `Concept: ${project.conceptEn}`)}</p>
      </div>
    </section>
    <section class="nomad-concept color-system-section chill-color-section">
      <div class="color-system-heading" data-reveal>
        <h2>${bilingualHeading("主色", "Primary Colors")}</h2>
      </div>
      <figure class="color-system-image chill-color-image" data-reveal>
        <img src="./assets/chill-city-color-palette.png" alt="CHILL都市主色与关键词色彩搭配" />
      </figure>
    </section>
    ${renderChillTrendSection()}
    ${renderChillImageFlow()}
    ${renderBulkSalesVolume()}
    <section class="detail-info">
      ${detailArticle("intro", project.intro, project.introEn)}
      ${detailArticle("concept", project.concept, project.conceptEn)}
      ${detailArticle("time", project.time, project.time)}
    </section>
    ${projectPager(project)}
  `;
}

function renderDetail() {
  const detail = document.querySelector("#projectDetail");
  if (!detail) return;
  const params = new URLSearchParams(window.location.search);
  const project = projects.find((item) => item.id === params.get("id")) || projects[0];
  document.title = `MYI | ${project.number} ${project.title}`;

  if (project.id === "urban-nomad") {
    renderUrbanNomad(detail, project);
    return;
  }

  if (project.id === "sand-system") {
    renderSandSystem(detail, project);
    return;
  }

  detail.innerHTML = `
    <section class="detail-hero section-grid">
      <div class="detail-title" data-reveal>
        ${backToWorksLink()}
        <p class="index-number">${project.number} / ${project.category}</p>
        <h1>${project.title}</h1>
        <span class="detail-english">${project.englishTitle}</span>
        <p class="detail-idea">${bilingualCopy(`设计理念：${project.concept}`, `Concept: ${project.conceptEn}`)}</p>
      </div>
      <div class="detail-visual" data-reveal>${coverMarkup(project, true)}</div>
    </section>
    <section class="detail-info">
      ${detailArticle("intro", project.intro, project.introEn)}
      ${detailArticle("concept", project.concept, project.conceptEn)}
      ${detailArticle("time", project.time, project.time)}
    </section>
    ${projectPager(project)}
  `;
}

function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function initHeaderMotion() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const sync = () => header.classList.toggle("is-scrolled", window.scrollY > 16);
  sync();
  window.addEventListener("scroll", sync, { passive: true });
}


function initProjectNavPeek() {
  if (!document.body.classList.contains("project-page")) return;
  const header = document.querySelector(".site-header");
  if (!header) return;

  let isInsideHeader = false;
  let hideTimer = 0;
  const isCoarsePointer = () => window.matchMedia("(pointer: coarse)").matches;
  const reveal = () => {
    window.clearTimeout(hideTimer);
    document.body.classList.add("is-nav-peeking");
    if (isCoarsePointer()) {
      hideTimer = window.setTimeout(() => {
        if (!isInsideHeader) document.body.classList.remove("is-nav-peeking");
      }, 2600);
    }
  };
  const conceal = () => {
    if (!isInsideHeader && document.activeElement && !header.contains(document.activeElement)) {
      document.body.classList.remove("is-nav-peeking");
    }
  };

  document.body.classList.remove("is-nav-peeking");
  window.addEventListener("pointermove", (event) => {
    if (event.clientY <= 76) reveal();
    else if (!isCoarsePointer()) conceal();
  }, { passive: true });
  window.addEventListener("pointerdown", (event) => {
    if (event.clientY <= 96) reveal();
  }, { passive: true });
  header.addEventListener("mouseenter", () => {
    isInsideHeader = true;
    reveal();
  });
  header.addEventListener("mouseleave", () => {
    isInsideHeader = false;
    conceal();
  });
  header.addEventListener("focusin", reveal);
  header.addEventListener("focusout", () => window.setTimeout(conceal, 0));
}
function initLookViewer() {
  const project = projects[0];
  const modal = document.querySelector("#lookModal");
  const triggers = document.querySelectorAll("[data-look-index]");
  const image = document.querySelector("#lookViewImage");
  const label = document.querySelector("#lookViewLabel");
  const title = document.querySelector("#lookModalTitle");
  const switcher = document.querySelector("#lookViewButton");
  if (!modal || !triggers.length || !image || !label || !title || !switcher) return;

  let views = project.lookViews[0];
  let lookIndex = 0;
  let current = 0;

  const setView = (index) => {
    current = index % views.length;
    image.src = views[current].src;
    image.alt = `LOOK 0${lookIndex + 1} ${views[current].label}`;
    label.textContent = views[current].label;
  };

  const open = (index) => {
    lookIndex = index;
    views = project.lookViews[lookIndex];
    title.textContent = `LOOK 0${lookIndex + 1}`;
    setView(0);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  };

  const close = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => open(Number(trigger.dataset.lookIndex)));
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(Number(trigger.dataset.lookIndex));
      }
    });
  });
  switcher.addEventListener("click", () => setView(current + 1));
  modal.querySelectorAll("[data-look-close]").forEach((item) => item.addEventListener("click", close));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) close();
  });
  window.addEventListener("hashchange", close);
  document.addEventListener("click", (event) => {
    const anchor = event.target.closest("a[href]");
    if (anchor && modal.classList.contains("is-open")) close();
  }, true);
}

function initOutcomeToggle() {
  const section = document.querySelector(".outcome-section");
  const button = document.querySelector("[data-outcome-toggle]");
  if (!section || !button) return;

  button.addEventListener("click", () => {
    const isOpen = section.classList.toggle("is-open");
    button.innerHTML = isOpen ? "<span>收起</span><em>Collapse</em>" : "<span>查看全部</span><em>View All</em>";
    button.setAttribute("aria-expanded", String(isOpen));
  });
}

function scrollToInitialHash() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (!target) return;
  window.setTimeout(() => target.scrollIntoView({ block: "start" }), 80);
}

renderWorks();
renderDetail();
initReveal();
initHeaderMotion();
initProjectNavPeek();
initLookViewer();
initOutcomeToggle();
initChillReportCarousel();
initTrendAnalysisModules();
scrollToInitialHash();
document.addEventListener("click", (event) => {
  const target = event.target.closest(".ripple-target");
  if (target) createRipple(target, event);
});

function initChillReportCarousel() {
  const carousel = document.querySelector('.chill-report-carousel');
  if (!carousel) return;

  const viewport = carousel.querySelector('.chill-report-viewport');
  const slides = Array.from(carousel.querySelectorAll('.chill-report-slide'));
  const shell = carousel.querySelector('.chill-report-shell');
  const dots = Array.from(carousel.querySelectorAll('.chill-report-dot'));
  const prevButton = carousel.querySelector('[data-chill-carousel-prev]');
  const nextButton = carousel.querySelector('[data-chill-carousel-next]');
  if (!viewport || !slides.length) return;

  let activeIndex = 0;

  const activateSlide = (index, shouldScroll = true) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === activeIndex);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === activeIndex);
      dot.setAttribute('aria-current', dotIndex === activeIndex ? 'true' : 'false');
    });
    slides[activeIndex].scrollTop = 0;
    if (shouldScroll) {
      viewport.scrollTo({ left: slides[activeIndex].offsetLeft, behavior: 'smooth' });
      const topOffset = shell ? shell.getBoundingClientRect().top : carousel.getBoundingClientRect().top;
      if (Math.abs(topOffset) > 18) {
        carousel.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }
    revealChillReportSlide(slides[activeIndex]);
  };

  const syncFromScroll = () => {
    const nextIndex = Math.round(viewport.scrollLeft / Math.max(1, viewport.clientWidth));
    if (nextIndex !== activeIndex && slides[nextIndex]) {
      activateSlide(nextIndex, false);
    }
  };

  prevButton?.addEventListener('click', () => activateSlide(activeIndex - 1));
  nextButton?.addEventListener('click', () => activateSlide(activeIndex + 1));
  dots.forEach((dot) => {
    dot.addEventListener('click', () => activateSlide(Number(dot.dataset.chillCarouselDot) || 0));
  });
  viewport.addEventListener('scroll', () => window.requestAnimationFrame(syncFromScroll), { passive: true });
  viewport.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') activateSlide(activeIndex - 1);
    if (event.key === 'ArrowRight') activateSlide(activeIndex + 1);
  });

  activateSlide(0, false);
}

function revealChillReportSlide(slide) {
  if (!slide) return;
  slide.querySelectorAll('[data-reveal], [data-animate], .trend-module, .knit-module, .silhouette-item, .color-chip, .market-card, .core-look-item, .yarn-sample-card, .weave-card, .style-look-item, .keywords-summary-bar').forEach((item) => {
    item.classList.add('is-visible', 'visible');
  });
}

function initTrendAnalysisModules() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        entry.target.querySelectorAll('.silhouette-item').forEach((item, i) => {
          setTimeout(() => item.classList.add('visible'), i * 120 + 200);
        });

        entry.target.querySelectorAll('.color-chip').forEach((chip, i) => {
          setTimeout(() => chip.classList.add('visible'), i * 80 + 250);
        });

        entry.target.querySelectorAll('.market-card').forEach((card, i) => {
          setTimeout(() => card.classList.add('visible'), i * 180 + 280);
        });

        const counters = entry.target.querySelectorAll('.counter');
        counters.forEach(counter => {
          animateCounter(counter, parseInt(counter.parentElement.dataset.target));
        });

        const tops = entry.target.querySelectorAll('.counter-top');
        tops.forEach((top, i) => {
          setTimeout(() => top.classList.add('show'), 800 + i * 200);
        });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.trend-module').forEach(el => observer.observe(el));

  // 针织纱线分析板块动画
  initKnitAnalysisAnimation();

  function animateCounter(el, target) {
    let current = 0;
    const step = Math.ceil(target / 25);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = current;
    }, 35);
  }
}

function initKnitAnalysisAnimation() {
  const knitSection = document.querySelector('.knit-analysis-section');
  if (!knitSection) return;

  const knitObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 四个模块依次淡入
        const modules = entry.target.querySelectorAll('.knit-module');
        modules.forEach((module, index) => {
          const delay = parseInt(module.dataset.delay) || index * 200;
          setTimeout(() => {
            module.classList.add('visible');

            // 模块内部元素动画
            const coreItems = module.querySelectorAll('.core-look-item');
            coreItems.forEach((item, i) => {
              setTimeout(() => item.classList.add('visible'), i * 100 + 150);
            });

            const yarnCards = module.querySelectorAll('.yarn-sample-card');
            yarnCards.forEach((card, i) => {
              setTimeout(() => card.classList.add('visible'), i * 120 + 200);
            });

            const weaveCards = module.querySelectorAll('.weave-card');
            weaveCards.forEach((card, i) => {
              setTimeout(() => card.classList.add('visible'), i * 90 + 180);
            });

            const styleItems = module.querySelectorAll('.style-look-item');
            styleItems.forEach((item, i) => {
              setTimeout(() => item.classList.add('visible'), i * 85 + 160);
            });
          }, delay);
        });

        // 底部关键词栏最后淡入
        const keywordsBar = entry.target.querySelector('.keywords-summary-bar');
        if (keywordsBar) {
          const delay = parseInt(keywordsBar.dataset.delay) || 900;
          setTimeout(() => {
            keywordsBar.classList.add('visible');
          }, delay);
        }

        knitObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  knitObserver.observe(knitSection);
}
