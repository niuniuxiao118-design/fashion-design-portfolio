"use strict";

(() => {

const { projects } = window.PortfolioData;

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
    { src: "./assets/chill-city/market-trend/chill-market-trend-01.png", alt: "松弛中性色V领羊毛针织衫通勤造型" },
    { src: "./assets/chill-city/market-trend/chill-market-trend-02.png", alt: "米色开衫与黑色阔腿裤针织通勤造型" },
    { src: "./assets/chill-city/market-trend/chill-market-trend-03.png", alt: "灰色羊毛开衫与浅色西裤复古通勤造型" },
    { src: "./assets/chill-city/market-trend/chill-market-trend-04.png", alt: "棕色复古羊毛开衫与木质背景造型" },
    { src: "./assets/chill-city/market-trend/chill-market-trend-05.png", alt: "米白拉链罗纹羊毛针织衫极简造型" },
    { src: "./assets/chill-city/market-trend/chill-market-trend-06.png", alt: "柔软米色针织开衫与衬衫层次穿搭" },
    { src: "./assets/chill-city/market-trend/chill-market-trend-07.png", alt: "白色绞花高领羊毛开衫经典复古造型" }
  ];

  const takeaways = [
    "经典中性色持续占据主导，传递低调高级感",
    "舒适松弛的版型成为主流，注重实穿与多场景搭配",
    "材质与工艺升级，强调羊绒、羊毛等天然纤维的质感表达",
    "消费者更关注长期穿着价值与造型多样性"
  ];

  const holidayTrendImages = [
    { src: "./assets/chill-city/market-trend/chill-holiday-trend-01.png", alt: "灰红节日提花羊毛开衫" },
    { src: "./assets/chill-city/market-trend/chill-holiday-trend-02.png", alt: "蓝白复古提花圆领针织衫" },
    { src: "./assets/chill-city/market-trend/chill-holiday-trend-03.png", alt: "深绿蓝灰复古提花针织造型" },
    { src: "./assets/chill-city/market-trend/chill-holiday-trend-04.png", alt: "绿色粉色菱格毛感针织衫" },
    { src: "./assets/chill-city/market-trend/chill-holiday-trend-05.png", alt: "棕色菱格针织开衫节日造型" },
    { src: "./assets/chill-city/market-trend/chill-holiday-trend-06.png", alt: "多色复古提花针织开衫" },
    { src: "./assets/chill-city/market-trend/chill-holiday-trend-07.png", alt: "红蓝节日提花毛衣造型" }
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
              <!-- ========== 第一页：市场趋势一 ========== -->
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
            <article class="chill-report-slide" data-chill-slide="2">
              <!-- ========== 第三页：纱线与面料 ========== -->
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
            <img src="./assets/chill-city/silhouette/chill-silhouette-black-crewneck-01.png" alt="黑色圆领开衫" loading="lazy" />
            <figcaption>黑色圆领开衫</figcaption>
          </figure>
          <figure class="silhouette-item" data-delay="100">
            <img src="./assets/chill-city/silhouette/chill-silhouette-navy-cardigan-01.png" alt="藏青色开衫" loading="lazy" />
            <figcaption>藏青色开衫</figcaption>
          </figure>
          <figure class="silhouette-item" data-delay="200">
            <img src="./assets/chill-city/silhouette/chill-silhouette-grey-vneck-01.png" alt="灰色V领短款开衫" loading="lazy" />
            <figcaption>灰色V领短款开衫</figcaption>
          </figure>
          <figure class="silhouette-item" data-delay="300">
            <img src="./assets/chill-city/silhouette/chill-silhouette-grey-crewneck-01.png" alt="灰色圆领开衫" loading="lazy" />
            <figcaption>灰色圆领开衫</figcaption>
          </figure>
          <figure class="silhouette-item" data-delay="400">
            <img src="./assets/chill-city/silhouette/chill-silhouette-camel-turtleneck-01.png" alt="驼色高领开衫" loading="lazy" />
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
              <!-- ========== 第四页：针织纱线与面料分析 ========== -->
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
              <img src="./assets/chill-city/styling/chill-core-commuter-01.png" alt="基础通勤款1" loading="lazy" />
              <figcaption>通勤百搭</figcaption>
            </figure>
            <figure class="core-look-item" data-delay="80">
              <img src="./assets/chill-city/styling/chill-core-commuter-02.png" alt="基础通勤款2" loading="lazy" />
              <figcaption>叠穿友好</figcaption>
            </figure>
            <figure class="core-look-item" data-delay="160">
              <img src="./assets/chill-city/styling/chill-core-commuter-03.png" alt="基础通勤款3" loading="lazy" />
              <figcaption>秋冬氛围</figcaption>
            </figure>
            <figure class="core-look-item" data-delay="240">
              <img src="./assets/chill-city/styling/chill-core-commuter-04.png" alt="基础通勤款4" loading="lazy" />
              <figcaption>廓形利落</figcaption>
            </figure>
            <figure class="core-look-item" data-delay="320">
              <img src="./assets/chill-city/styling/chill-core-commuter-05.png" alt="基础通勤款5" loading="lazy" />
              <figcaption>简约质感</figcaption>
            </figure>
            <figure class="core-look-item" data-delay="400">
              <img src="./assets/chill-city/styling/chill-core-commuter-06.png" alt="基础通勤款6" loading="lazy" />
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
              <img src="./assets/chill-city/yarn/chill-yarn-merino-wool-01.png" alt="精纺美丽诺羊毛纱线肌理" loading="lazy" />
              <figcaption>
                <strong>精纺美丽诺羊毛</strong>
                <span>细腻平滑，轻暖舒适</span>
              </figcaption>
            </figure>
            <figure class="yarn-sample-card" data-delay="100">
              <img src="./assets/chill-city/yarn/chill-yarn-wool-cashmere-blend-01.png" alt="羊毛羊绒混纺纱线肌理" loading="lazy" />
              <figcaption>
                <strong>羊毛/羊绒混纺</strong>
                <span>手感柔糯，质感升级</span>
              </figcaption>
            </figure>
            <figure class="yarn-sample-card" data-delay="200">
              <img src="./assets/chill-city/yarn/chill-yarn-wool-rayon-nylon-01.png" alt="羊毛黏胶尼龙混纺纱线肌理" loading="lazy" />
              <figcaption>
                <strong>羊毛/黏胶/尼龙混纺</strong>
                <span>垂顺成型，不易变形</span>
              </figcaption>
            </figure>
            <figure class="yarn-sample-card" data-delay="300">
              <img src="./assets/chill-city/yarn/chill-yarn-cotton-wool-functional-01.png" alt="棉羊毛功能纤维混纺纱线肌理" loading="lazy" />
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
              <img src="./assets/chill-city/styling/chill-style-base-blazer-01.png" alt="针织衫搭配西装外套" loading="lazy" />
            </figure>
            <figure class="style-look-item" data-delay="70">
              <img src="./assets/chill-city/styling/chill-style-base-shirt-01.png" alt="针织开衫搭配衬衫" loading="lazy" />
            </figure>
            <figure class="style-look-item" data-delay="140">
              <img src="./assets/chill-city/styling/chill-style-base-pants-01.png" alt="V领针织搭配高腰裤" loading="lazy" />
            </figure>
            <figure class="style-look-item" data-delay="210">
              <img src="./assets/chill-city/styling/chill-style-base-trousers-01.png" alt="黑色针织搭配宽松西裤" loading="lazy" />
            </figure>
            <figure class="style-look-item" data-delay="280">
              <img src="./assets/chill-city/styling/chill-style-base-coat-01.png" alt="针织衫搭配大衣或皮衣" loading="lazy" />
            </figure>
            <figure class="style-look-item" data-delay="350">
              <img src="./assets/chill-city/styling/chill-style-base-accessories-01.png" alt="基础针织搭配配饰" loading="lazy" />
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
            <article class="chill-report-slide" data-chill-slide="1">
              <!-- ========== 第二页：版形与市场 ========== -->
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
            <article class="chill-report-slide" data-chill-slide="4">
              <!-- ========== 第五页：版形与市场（副本） ========== -->
              <!-- 趋势分析详细模块 -->
              <section class="trend-analysis-section trend-analysis-section-copy" id="trendAnalysisCopy">

      <!-- 模块一：版形趋势 -->
            <div class="trend-module trend-silhouette" data-animate>
        <div class="module-header">
          <span class="module-number">01</span>
          <h3 class="module-title-cn">花型纹样</h3>
          <p class="module-title-en">PATTERN MOTIFS</p>
        </div>

        <div class="silhouette-gallery">
          <figure class="silhouette-item" data-delay="0">
            <img src="./assets/chill-city/weave-structure/chill-pattern-circular-intarsia-01.png" alt="经典环形提花纹样" loading="lazy" />
            <figcaption>经典环形提花</figcaption>
          </figure>
          <figure class="silhouette-item" data-delay="100">
            <img src="./assets/chill-city/weave-structure/chill-pattern-fairisle-stripe-01.png" alt="费尔岛条带纹样" loading="lazy" />
            <figcaption>费尔岛条带</figcaption>
          </figure>
          <figure class="silhouette-item" data-delay="200">
            <img src="./assets/chill-city/weave-structure/chill-pattern-argyle-01.png" alt="菱格纹样" loading="lazy" />
            <figcaption>菱格纹样</figcaption>
          </figure>
          <figure class="silhouette-item" data-delay="300">
            <img src="./assets/chill-city/weave-structure/chill-pattern-animal-motif-01.png" alt="动物纹样" loading="lazy" />
            <figcaption>动物纹样</figcaption>
          </figure>
          <figure class="silhouette-item" data-delay="400">
            <img src="./assets/chill-city/weave-structure/chill-pattern-snowflake-01.png" alt="雪花纹样" loading="lazy" />
            <figcaption>雪花纹样</figcaption>
          </figure>
        </div>

        <p class="module-description">
          花型方向聚焦经典冬季提花语汇：环形提花、费尔岛条带、菱格、动物与雪花几何图案。
          通过可识别的纹样节奏建立系列记忆点，同时保持中性色通勤风格的可穿搭性与商业转化效率。
        </p>
      </div>

      <div class="module-divider"></div>

      <!-- 模块二：色彩趋势 -->
            <div class="trend-module trend-colors" data-animate>
        <div class="module-header">
          <span class="module-number">02</span>
          <h3 class="module-title-cn">色彩趋势</h3>
          <p class="module-title-en">COLOR PALETTE</p>
        </div>

        <div class="color-palette">
          <div class="color-chip" style="background-color: #F4F2EE;" data-color="#F4F2EE" data-name="暖白色" data-delay="0">
            <span class="color-tooltip">暖白色<br>#F4F2EE</span>
          </div>
          <div class="color-chip" style="background-color: #CDB497;" data-color="#CDB497" data-name="燕麦米色" data-delay="80">
            <span class="color-tooltip">燕麦米色<br>#CDB497</span>
          </div>
          <div class="color-chip" style="background-color: #967C71;" data-color="#967C71" data-name="灰棕色" data-delay="160">
            <span class="color-tooltip">灰棕色<br>#967C71</span>
          </div>
          <div class="color-chip" style="background-color: #51392B;" data-color="#51392B" data-name="深咖啡色" data-delay="240">
            <span class="color-tooltip">深咖啡色<br>#51392B</span>
          </div>
          <div class="color-chip" style="background-color: #7C0711;" data-color="#7C0711" data-name="酒红色" data-delay="320">
            <span class="color-tooltip">酒红色<br>#7C0711</span>
          </div>
          <div class="color-chip" style="background-color: #34432B;" data-color="#34432B" data-name="墨绿色" data-delay="400">
            <span class="color-tooltip">墨绿色<br>#34432B</span>
          </div>
          <div class="color-chip" style="background-color: #121638;" data-color="#121638" data-name="藏青色" data-delay="480">
            <span class="color-tooltip">藏青色<br>#121638</span>
          </div>
        </div>

        <p class="module-description">
          色彩体系以低饱和中性色为主，如燕麦色、米色、灰色及黑色，通过克制的色彩语言强化产品的高级感与长期可穿性。
          同时，局部点缀的深蓝与柔和冷色调，为整体系列提供层次变化。
        </p>
      </div>
      <!-- 分隔线 -->
      <div class="module-divider"></div>

      <!-- 模块三：市场反馈 -->
            <div class="trend-module trend-market trend-market-copy" data-animate>
        <div class="module-header">
          <span class="module-number">03</span>
          <h3 class="module-title-cn">市场反馈</h3>
          <p class="module-title-en">MARKET FEEDBACK</p>
        </div>

        <div class="market-feedback-grid">
          <article class="feedback-card" data-progress="88">
            <div class="feedback-media">
              <img src="./assets/chill-city/market-trend/chill-feedback-nordic-01.png" alt="基础款北欧套头" loading="lazy" />
              <p class="feedback-name">基础款北欧套头</p>
            </div>
            <div class="feedback-data">
              <p class="feedback-label">趋势指数 <strong class="progress-number" data-target="88">0</strong>%</p>
              <div class="progress-track"><span class="progress-fill"></span></div>
              <p class="feedback-meta">搭配性 <span>高</span></p>
              <p class="feedback-meta">零售接受度 <span>高</span></p>
            </div>
          </article>

          <article class="feedback-card" data-progress="82">
            <div class="feedback-media">
              <img src="./assets/chill-city/market-trend/chill-feedback-young-01.png" alt="年轻客群款" loading="lazy" />
              <p class="feedback-name">年轻客群款</p>
            </div>
            <div class="feedback-data">
              <p class="feedback-label">趋势指数 <strong class="progress-number" data-target="82">0</strong>%</p>
              <div class="progress-track"><span class="progress-fill"></span></div>
              <p class="feedback-meta">年轻客群 <span>高</span></p>
              <p class="feedback-meta">复购潜力 <span>高</span></p>
            </div>
          </article>

          <article class="feedback-card" data-progress="76">
            <div class="feedback-media">
              <img src="./assets/chill-city/market-trend/chill-feedback-story-01.png" alt="故事感图案开衫" loading="lazy" />
              <p class="feedback-name">故事感图案开衫</p>
            </div>
            <div class="feedback-data">
              <p class="feedback-label">趋势指数 <strong class="progress-number" data-target="76">0</strong>%</p>
              <div class="progress-track"><span class="progress-fill"></span></div>
              <p class="feedback-meta">搭配性 <span>高</span></p>
              <p class="feedback-meta">零售接受度 <span>高</span></p>
            </div>
          </article>

          <article class="feedback-card" data-progress="79">
            <div class="feedback-media">
              <img src="./assets/chill-city/market-trend/chill-feedback-stripe-01.png" alt="条纹针织款" loading="lazy" />
              <p class="feedback-name">条纹针织款</p>
            </div>
            <div class="feedback-data">
              <p class="feedback-label">趋势指数 <strong class="progress-number" data-target="79">0</strong>%</p>
              <div class="progress-track"><span class="progress-fill"></span></div>
              <p class="feedback-meta">季节属性 <span>高</span></p>
              <p class="feedback-meta">零售接受度 <span>高</span></p>
            </div>
          </article>
        </div>
      </div>


              </section>
            </article>
            <article class="chill-report-slide" data-chill-slide="5">
              <!-- ========== 第六页：针织纱线与面料分析（副本） ========== -->
              <!-- 针织纱线与面料分析板块 -->
              <section class="knit-analysis-section knit-analysis-section-copy" id="knitAnalysisCopy" data-animate>
      <!-- 顶部标题区 -->
      <div class="knit-analysis-header">
        <h2 class="knit-main-title">针织纱线与面料分析二</h2>
        <p class="knit-sub-title">基于市场主流款式提炼的秋冬针织开发方向</p>
      </div>

      <!-- 四模块网格布局 -->
      <div class="knit-modules-grid">

        <!-- 模块一：核心款式方向 -->
        <div class="knit-module knit-module-core" data-animate data-delay="0">
          <div class="module-title-bar">
            <span class="module-num">01</span>
            <h3>核心款式方向（氛围节日款）</h3>
          </div>
          <div class="core-looks-grid">
            <figure class="core-look-item" data-delay="0">
              <img src="./assets/chill-city/styling/chill-core-holiday-01.png" alt="氛围节日款1" loading="lazy" />
            </figure>
            <figure class="core-look-item" data-delay="80">
              <img src="./assets/chill-city/styling/chill-core-holiday-02.png" alt="氛围节日款2" loading="lazy" />
            </figure>
            <figure class="core-look-item" data-delay="160">
              <img src="./assets/chill-city/styling/chill-core-holiday-03.png" alt="氛围节日款3" loading="lazy" />
            </figure>
            <figure class="core-look-item" data-delay="240">
              <img src="./assets/chill-city/styling/chill-core-holiday-04.png" alt="氛围节日款4" loading="lazy" />
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
              <img src="./assets/chill-city/yarn/chill-yarn-merino-wool-01.png" alt="精纺美丽诺羊毛纱线肌理" loading="lazy" />
              <figcaption>
                <strong>精纺美丽诺羊毛</strong>
                <span>细腻平滑，轻暖舒适</span>
              </figcaption>
            </figure>
            <figure class="yarn-sample-card" data-delay="100">
              <img src="./assets/chill-city/yarn/chill-yarn-wool-cashmere-blend-01.png" alt="羊毛羊绒混纺纱线肌理" loading="lazy" />
              <figcaption>
                <strong>羊毛/羊绒混纺</strong>
                <span>手感柔糯，质感升级</span>
              </figcaption>
            </figure>
            <figure class="yarn-sample-card" data-delay="200">
              <img src="./assets/chill-city/yarn/chill-yarn-wool-rayon-nylon-01.png" alt="羊毛黏胶尼龙混纺纱线肌理" loading="lazy" />
              <figcaption>
                <strong>羊毛/黏胶/尼龙混纺</strong>
                <span>垂顺成型，不易变形</span>
              </figcaption>
            </figure>
            <figure class="yarn-sample-card" data-delay="300">
              <img src="./assets/chill-city/yarn/chill-yarn-cotton-wool-functional-01.png" alt="棉羊毛功能纤维混纺纱线肌理" loading="lazy" />
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
              <img src="./assets/chill-city/styling/chill-style-holiday-blazer-01.png" alt="针织衫搭配西装外套" loading="lazy" />
            </figure>
            <figure class="style-look-item" data-delay="70">
              <img src="./assets/chill-city/styling/chill-style-holiday-shirt-01.png" alt="针织开衫搭配衬衫" loading="lazy" />
            </figure>
            <figure class="style-look-item" data-delay="140">
              <img src="./assets/chill-city/styling/chill-style-holiday-pants-01.png" alt="V领针织搭配高腰裤" loading="lazy" />
            </figure>
            <figure class="style-look-item" data-delay="210">
              <img src="./assets/chill-city/styling/chill-style-holiday-trousers-01.png" alt="黑色针织搭配宽松西裤" loading="lazy" />
            </figure>
            <figure class="style-look-item" data-delay="280">
              <img src="./assets/chill-city/styling/chill-style-holiday-coat-01.png" alt="针织衫搭配大衣或皮衣" loading="lazy" />
            </figure>
            <figure class="style-look-item" data-delay="350">
              <img src="./assets/chill-city/styling/chill-style-holiday-accessories-01.png" alt="基础针织搭配配饰" loading="lazy" />
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
        <span class="keyword-tag">节日提花</span>
        <span class="keyword-tag">北欧费尔岛</span>
        <span class="keyword-tag">复古菱格</span>
        <span class="keyword-tag">毛绒肌理</span>
        <span class="keyword-tag">宽松廓形</span>
        <span class="keyword-tag">学院叠穿</span>
      </div>
              </section>
            </article>
          </div>
        </div>
        <div class="chill-report-dots" aria-label="报告分页">
          <button class="chill-report-dot is-active" type="button" data-chill-carousel-dot="0" aria-label="市场趋势一"></button>
          <button class="chill-report-dot" type="button" data-chill-carousel-dot="1" aria-label="版形与市场"></button>
          <button class="chill-report-dot" type="button" data-chill-carousel-dot="2" aria-label="纱线与面料"></button>
          <button class="chill-report-dot" type="button" data-chill-carousel-dot="3" aria-label="市场趋势二"></button>
          <button class="chill-report-dot" type="button" data-chill-carousel-dot="4" aria-label="版形与市场（第五页）"></button>
          <button class="chill-report-dot" type="button" data-chill-carousel-dot="5" aria-label="纱线与面料（第六页）"></button>
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
  const worksOrder = ["sand-system", "urban-nomad", "relaxed-utility", "stone-blue"];
  const orderedProjects = worksOrder
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean);
  grid.innerHTML = orderedProjects.map((project, index) => `
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
  src: `./assets/chill-city/visual-flow/chill-outcome-carousel-${String(index + 1).padStart(2, "0")}.png`,
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
    { src: "./assets/chill-city/sales-data/chill-sales-data-01.png", alt: "CHILL都市大货销量表 01" },
    { src: "./assets/chill-city/sales-data/chill-sales-data-02.png", alt: "CHILL都市大货销量表 02" }
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
        <p class="index-number">${project.number} / ${project.category}</p>
        <h1>${project.title}</h1>
        <span>${project.englishTitle}</span>
        <p class="nomad-idea detail-idea"><span class="copy-cn">设计理念：在都市与自然之间寻找平衡，以流动剪裁、自然材质与中性色彩建立自由而优雅的生活方式。</span></p>
      </div>
    </section>

    <section class="nomad-concept color-system-section">
      <div class="color-system-heading" data-reveal>
        <h2>${bilingualHeading("主色", "Primary Colors")}</h2>
      </div>
      <figure class="color-system-image" data-reveal>
        <img src="./assets/urban-nomad/color-material/urban-color-system-01.png" alt="都市游牧主色与面料灵感" />
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
          <img src="./assets/urban-nomad/moodboard/urban-moodboard-material-01.png" alt="都市游牧色彩应用指南" />
        </figure>
        <figure class="concept-image" data-reveal>
          <img src="./assets/covers/chill-city/cover-chill-city-01.png" alt="都市游牧款式延展设计板" />
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
      <div class="chill-color-stack" data-reveal>
        <figure class="color-system-image chill-color-image chill-color-card">
          <img src="./assets/chill-city/color-palette/chill-color-palette-01.png" alt="CHILL都市主色与关键词色彩搭配" />
        </figure>
        <figure class="color-system-image chill-color-image chill-color-card">
          <img src="./assets/chill-city/color-palette/chill-fabric-texture-01.png" alt="CHILL都市面料质感与造型细节" />
        </figure>
      </div>
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

  if (project.id === "relaxed-utility") {
    detail.innerHTML = `
    <section class="detail-hero original-design-hero" data-reveal>
      <div class="od-hero-bg" style="background-image: url('${project.cover}')"></div>
      <div class="od-hero-overlay"></div>
      <div class="detail-hero-content">
        <div class="detail-title od-hero-card" data-reveal>
          ${backToWorksLink()}
          <p class="index-number">${project.number} / ${project.category}</p>
          <h1>${project.title}</h1>
          <span class="detail-english">${project.englishTitle}</span>
        </div>
      </div>
    </section>
    <section class="detail-info">
    </section>
    ${renderOriginalDesignShowcase()}
    ${projectPager(project)}
  `;
    return;
  }

  if (project.id === "sand-system") {
    renderSandSystem(detail, project);
    return;
  }

  /* ========== NO.4 — Professional Capabilities 能力档案页 ========== */
  if (project.id === "stone-blue") {
    renderCapabilityArchive(detail, project);
    return;
  }

  detail.innerHTML = `
    <section class="detail-hero section-grid">
      <div class="detail-title" data-reveal>
        ${backToWorksLink()}
        <p class="index-number">${project.number} / ${project.category}</p>
        <h1>${project.title}</h1>
        <span class="detail-english">${project.englishTitle}</span>
        ${project.concept ? `<p class="detail-idea">${bilingualCopy(`设计理念：${project.concept}`, `Concept: ${project.conceptEn}`)}</p>` : ''}
      </div>
      <div class="detail-visual" data-reveal>${coverMarkup(project, true)}</div>
    </section>
    <section class="detail-info">
    </section>
    ${projectPager(project)}
  `;
}

/* ========== NO.4 Professional Capabilities 能力档案页 ========== */
const capabilityCards = [
  { id: "cap-3d",       num: "01", title: "3D建模",      en: "3D MODELING",        desc: "饰品结构 / 配件建模 / 造型辅助" },
  { id: "cap-graphic",  num: "02", title: "图案设计",     en: "GRAPHIC DESIGN",     desc: "印花图形 / 标识贴布 / 视觉符号" },
  { id: "cap-tech",     num: "03", title: "出款能力",     en: "TECHNICAL OUTPUT",   desc: "款式图 / 出款板 / 资料归档" },
  { id: "cap-material", num: "04", title: "面辅料搭配整理", en: "MATERIAL COORDINATION", desc: "面料搭配 / 辅料收纳 / 色彩归类" }
];

/* 模块 01 — 3D建模 图片（主视觉 + 辅助图） */
const placeholder3D = [
  { label: "3D MODELING MAIN IMAGE", role: "featured", size: "lg", image: "./assets/capabilities/three-d-modeling/cap-3d-modeling-main-01.png" },
  { label: "Accessory 01",           role: "aux",     size: "sm", image: "./assets/capabilities/three-d-modeling/cap-3d-modeling-accessory-01.png" },
  { label: "Accessory 02",           role: "aux",     size: "sm", image: "./assets/capabilities/three-d-modeling/cap-3d-modeling-accessory-02.png" },
  { label: "Detail Image",           role: "aux",     size: "sm", image: "./assets/capabilities/three-d-modeling/cap-3d-modeling-detail-01.png" }
];

/* 模块 02 — 图案设计 真实图片（画廊交互数据） */
const graphicDesignItems = [
  { id: "graphic-main", title: "图案设计 主图", subtitle: "GRAPHIC DESIGN MAIN", image: "./assets/capabilities/graphic-design/cap-graphic-design-main-01.png" },
  { id: "graphic-01",   title: "图案设计 01",   subtitle: "GRAPHIC DESIGN 01",    image: "./assets/capabilities/graphic-design/cap-graphic-design-piece-01.png" },
  { id: "graphic-03",   title: "图案设计 03",   subtitle: "GRAPHIC DESIGN 03",    image: "./assets/capabilities/graphic-design/cap-graphic-design-piece-02.png" },
  { id: "graphic-04",   title: "图案设计 04",   subtitle: "GRAPHIC DESIGN 04",    image: "./assets/capabilities/graphic-design/cap-graphic-design-piece-03.png" },
  { id: "graphic-05",   title: "图案设计 05",   subtitle: "GRAPHIC DESIGN 05",    image: "./assets/capabilities/graphic-design/cap-graphic-design-piece-04.png" },
  { id: "graphic-06",   title: "图案设计 06",   subtitle: "GRAPHIC DESIGN 06",    image: "./assets/capabilities/graphic-design/cap-graphic-design-piece-05.png" },
  { id: "graphic-07",   title: "图案设计 07",   subtitle: "GRAPHIC DESIGN 07",    image: "./assets/capabilities/graphic-design/cap-graphic-design-piece-06.png" }
];

/* 模块 03 — 出款能力 真实图片（1主图 + 4辅助图） */
const placeholderTech = [
  { label: "TECHNICAL BOARD MAIN", role: "featured", size: "lg", image: "./assets/capabilities/technical-output/cap-tech-flat-main-01.png" },
  { label: "款式图 01",           role: "aux",     size: "sm", image: "./assets/capabilities/technical-output/cap-tech-flat-sketch-01.png" },
  { label: "款式图 02",           role: "aux",     size: "sm", image: "./assets/capabilities/technical-output/cap-tech-flat-sketch-02.png" },
  { label: "细节图 03",           role: "aux",     size: "sm", image: "./assets/capabilities/technical-output/cap-tech-flat-detail-01.png" },
  { label: "细节图 04",           role: "aux",     size: "sm", image: "./assets/capabilities/technical-output/cap-tech-flat-detail-02.png" }
];

/* 模块 04 — 面辅料搭配整理收纳 真实图片（1主图 + 7辅助图） */
const placeholderMaterial = [
  { label: "MATERIAL BOARD MAIN", role: "featured", size: "lg", image: "./assets/capabilities/material-board/cap-material-main-01.png" },
  { label: "面料搭配 01",         role: "aux",     size: "sm", image: "./assets/capabilities/material-board/cap-material-fabric-01.png" },
  { label: "面料搭配 02",         role: "aux",     size: "sm", image: "./assets/capabilities/material-board/cap-material-fabric-02.png" },
  { label: "辅料整理 03",         role: "aux",     size: "sm", image: "./assets/capabilities/material-board/cap-material-trimming-01.png" },
  { label: "辅料整理 04",         role: "aux",     size: "sm", image: "./assets/capabilities/material-board/cap-material-trimming-02.png" },
  { label: "色彩归类 05",         role: "aux",     size: "sm", image: "./assets/capabilities/material-board/cap-material-color-sort-01.png" },
  { label: "样布收纳 06",         role: "aux",     size: "sm", image: "./assets/capabilities/material-board/cap-material-swatches-01.png" },
  { label: "资料归档 07",         role: "aux",     size: "sm", image: "./assets/capabilities/material-board/cap-material-archive-01.png" }
];

const summaryTags = [
  { cn: "趋势研究", en: "Trend Research" },
  { cn: "图案开发", en: "Graphic Development" },
  { cn: "建模表达", en: "3D Expression" },
  { cn: "出款整理", en: "Technical Output" },
  { cn: "面辅料归档", en: "Material Archive" }
];

function phGrid(items) {
  return items.map(function(item, idx) {
    if (item.image) {
      var roleClass = item.role === "featured" ? "is-featured" : (item.role === "aux" ? "is-aux" : "is-thumb");
      return `<div class="cap-ph-item cap-ph--has-image capability-image-card ${roleClass}" data-reveal
        data-lightbox data-lb-src="${item.image}" data-lb-title="${item.label}">
        <img src="${item.image}" alt="${item.label}" loading="lazy" />
        <span class="ph-name-overlay">${item.label}</span>
      </div>`;
    }
    return `<div class="cap-ph-item cap-ph--${item.size}" data-reveal>
      <div class="cap-ph-inner">
        <span class="ph-icon">+</span>
        <span class="ph-label">PLACEHOLDER</span>
        <span class="ph-name">${item.label}</span>
      </div>
    </div>`;
  }).join('');
}

/* ========== 图案设计画廊渲染（主图 + 缩略图切换）========== */
function renderGraphicGallery() {
  var items = graphicDesignItems;
  var first = items[0];

  var thumbs = items.map(function(item, i) {
    return `<button class="graphic-thumb${i === 0 ? ' is-active' : ''}" data-graphic-index="${i}" data-graphic-src="${item.image}" data-graphic-title="${item.title}" data-graphic-subtitle="${item.subtitle}" type="button" aria-label="查看 ${item.title}">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <span class="graphic-thumb__label">${item.title}</span>
    </button>`;
  }).join('');

  return `
  <div class="graphic-gallery" data-reveal>
    <article class="graphic-main-preview">
      <div class="graphic-main-frame">
        <img id="graphicMainImage" src="${first.image}" alt="${first.title}" />
      </div>
      <div class="graphic-main-caption">
        <span id="graphicMainIndex">MAIN</span>
        <h3 id="graphicMainTitle">${first.title}</h3>
        <p id="graphicMainSubtitle">${first.subtitle}</p>
      </div>
    </article>

    <nav class="graphic-thumbnail-list" aria-label="图案设计缩略图列表">
      ${thumbs}
    </nav>
  </div>`;
}

function renderCapabilityArchive(detail, project) {
  detail.innerHTML = `
  <!-- ====== Hero 首屏 ====== -->
  <section class="cap-hero section-grid" data-reveal>
    <div class="cap-hero-info" data-reveal>
      ${backToWorksLink()}
      <p class="index-number">${project.number} / CAPABILITY ARCHIVE</p>
      <h1>${project.title}</h1>
      <span class="detail-english">${project.englishTitle}</span>
      <p class="cap-hero-desc">
        <span>以服装设计为核心，延展至3D建模、图案开发、款式出图、面辅料整理与搭配，形成从创意表达到方案落地的综合执行能力。</span>
        <em>Centered on fashion design, this section presents additional capabilities in 3D modeling, graphic development, technical output, material organization, and styling support.</em>
      </p>
    </div>
    <nav class="cap-overview-grid" aria-label="能力模块导航">
      ${capabilityCards.map(function(card) {
        return `<a class="cap-overview-card" href="#${card.id}" data-reveal data-cap-card="${card.num}">
          <span class="card-num">${card.num}</span>
          <h3>${card.title}</h3>
          <em>${card.en}</em>
          <small>${card.desc}</small>
        </a>`;
      }).join('')}
    </nav>
  </section>

  <!-- ====== 分割线 ====== -->
  <div class="cap-divider"><span></span></div>

  <!-- ====== 模块 01：3D建模 ====== -->
  <section class="cap-module" id="cap-3d">
    <div class="cap-module-head" data-reveal>
      <span class="cap-module-num">01</span>
      <h2>3D建模 <em>3D MODELING</em></h2>
    </div>
    <p class="cap-module-desc" data-reveal>具备基础3D建模与配件造型表达能力，可用于饰品结构、配件造型和视觉方案辅助呈现。</p>
    <div class="cap-ph-grid cap-ph-grid--3d">${phGrid(placeholder3D)}</div>
  </section>

  <div class="cap-divider"><span></span></div>

  <!-- ====== 模块 02：图案设计 ====== -->
  <section class="cap-module" id="cap-graphic">
    <div class="cap-module-head" data-reveal>
      <span class="cap-module-num">02</span>
      <h2>图案设计 <em>GRAPHIC DESIGN</em></h2>
    </div>
    <p class="cap-module-desc" data-reveal>具备服装图案、印花、标识、贴布与视觉符号开发能力，可根据系列风格完成图形延展。</p>
    <div class="cap-ph-grid cap-ph-grid--graphic">${renderGraphicGallery()}</div>
  </section>

  <div class="cap-divider"><span></span></div>

  <!-- ====== 模块 03：出款能力 ====== -->
  <section class="cap-module" id="cap-tech">
    <div class="cap-module-head" data-reveal>
      <span class="cap-module-num">03</span>
      <h2>出款能力 <em>TECHNICAL OUTPUT</em></h2>
    </div>
    <p class="cap-module-desc" data-reveal>具备款式图整理、设计款式输出、系列方案归档与基础技术表达能力，可支持从设计概念到款式资料的落地。</p>
    <div class="cap-ph-grid cap-ph-grid--tech">${phGrid(placeholderTech)}</div>
  </section>

  <div class="cap-divider"><span></span></div>

  <!-- ====== 模块 04：面辅料搭配整理收纳 ====== -->
  <section class="cap-module" id="cap-material">
    <div class="cap-module-head" data-reveal>
      <span class="cap-module-num">04</span>
      <h2>面辅料搭配、整理、收纳 <em>MATERIAL COORDINATION</em></h2>
    </div>
    <p class="cap-module-desc" data-reveal>具备面辅料搭配、色彩归类、样布整理、辅料收纳与资料归档能力，可辅助系列开发和企划提案。</p>
    <div class="cap-ph-grid cap-ph-grid--material">${phGrid(placeholderMaterial)}</div>
  </section>

  <div class="cap-divider"><span></span></div>

  <!-- ====== 能力总结区 ====== -->
  <section class="cap-summary" data-reveal>
    <div class="cap-summary-head">
      <span>CAPABILITY SUMMARY</span>
      <h2>能力总结</h2>
    </div>
    <div class="cap-tags">
      ${summaryTags.map(function(tag) {
        return `<div class="cap-tag" data-reveal>
          <strong>${tag.cn}</strong>
          <em>${tag.en}</em>
        </div>`;
      }).join('')}
    </div>
  </section>

  ${projectPager(project)}
  `;
}

/* ========== 原创设计作品展示轮播数据与渲染 ========== */
const originalDesignSlides = [
  { index: "01", title: "《彝娘》", subtitle: "YI NIANG", image: "./assets/original-design/yiniang/original-design-work-yiniang-01.png" },
  { index: "02", title: "《新秦制》", subtitle: "NEW QIN SYSTEM", image: "./assets/original-design/xinqinzhi/original-design-work-new-qin-01.png" },
  { index: "03", title: "《墨色江南》", subtitle: "INK JIANGNAN", image: "./assets/original-design/mose-jiangnan/original-design-work-ink-jiangnan-01.png" },
  { index: "04", title: "《与蝶共翼》", subtitle: "WINGS WITH BUTTERFLIES", image: "./assets/original-design/butterfly/original-design-work-butterfly-wings-01.png" },
  { index: "05", title: "《花瓣》", subtitle: "PETAL", image: "./assets/original-design/huaban/original-design-work-petal-01.png" }
];

function renderOriginalDesignShowcase() {
  return `
    <section class="original-showcase-section full-bleed" id="originalDesignShowcase" aria-label="原创设计作品展示" data-reveal>
      <div class="project-section-inner">
        <div class="original-showcase-heading">
          <span>ORIGINAL DESIGN ARCHIVE</span>
          <h2>原创设计作品展示</h2>
        </div>
      </div>

      <div class="apple-style-carousel">
        <button class="apple-carousel-btn apple-prev" type="button" aria-label="上一张" data-apple-prev>&#8249;</button>

        <div class="apple-carousel-viewport" tabindex="0" data-apple-viewport>
          <div class="apple-carousel-track" data-apple-track>
            ${originalDesignSlides.map((slide, i) => `
              <article class="apple-showcase-slide ${i === 0 ? 'is-active' : ''}" data-apple-index="${i}">
                <div class="apple-slide-image-wrapper">
                  <img src="${slide.image}" alt="${slide.title}" loading="${i === 0 ? 'eager' : 'lazy'}" />
                </div>
                <div class="apple-slide-caption">
                  <span class="apple-caption-num">${slide.index}</span>
                  <div class="apple-caption-text">
                    <h3>${slide.title}</h3>
                    <p>${slide.subtitle}</p>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>
        </div>

        <button class="apple-carousel-btn apple-next" type="button" aria-label="下一张" data-apple-next>&#8250;</button>
      </div>

      <div class="apple-progress-bar" data-apple-progress aria-label="图片导航">
        ${originalDesignSlides.map((_, i) =>
          `<button type="button" class="apple-prog-dot ${i === 0 ? 'is-active' : ''}" data-apple-dot="${i}" aria-label="第${i + 1}张：${originalDesignSlides[i].title}"></button>`
        ).join('')}
      </div>
    </section>
  `;
}

window.PortfolioRender = {
  renderWorks,
  renderDetail
};
})();
