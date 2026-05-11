"use strict";

(() => {

const { projects } = window.PortfolioData;

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

  // 确保按钮可交互：移除可能的遮挡
  button.style.position = "relative";
  button.style.zIndex = "10";

  button.addEventListener("click", () => {
    const isOpen = section.classList.toggle("is-open");

    // 切换按钮文案
    if (isOpen) {
      button.innerHTML = "<span>收起</span><em>Collapse</em>";
      // 展开后平滑滚动到成果区顶部，让用户看到新内容
      requestAnimationFrame(() => {
        section.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    } else {
      button.innerHTML = "<span>查看全部</span><em>View All</em>";
    }
    button.setAttribute("aria-expanded", String(isOpen));
  });
}

function scrollToInitialHash() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (!target) return;
  window.setTimeout(() => target.scrollIntoView({ block: "start" }), 80);
}

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
  // 进度条动画：进入第五页时依次触发
  initFeedbackProgressBars(slide);
}

function initFeedbackProgressBars(container) {
  const cards = Array.from(container.querySelectorAll('.feedback-card[data-progress]'));
  if (!cards.length) return;

  cards.forEach((card) => {
    // 重置状态（防止重复触发）
    const fill = card.querySelector('.progress-fill');
    const numEl = card.querySelector('.progress-number');
    if (fill) { fill.style.width = '0%'; fill.classList.remove('fb-animated'); }
    if (numEl) numEl.textContent = '0';
  });

  cards.forEach((card, i) => {
    const target = parseInt(card.dataset.progress, 10) || 0;
    const fill = card.querySelector('.progress-fill');
    const numEl = card.querySelector('.progress-number');
    // 每张卡片依次延迟启动：0 / 320 / 640 / 960ms
    const startDelay = i * 320 + 180;

    setTimeout(() => {
      // 进度条扩展
      if (fill) {
        fill.style.transition = 'width 1.1s cubic-bezier(.2,.75,.2,1)';
        fill.style.width = target + '%';
        fill.classList.add('fb-animated');
      }
      // 数字滚动
      if (numEl) {
        const duration = 1000;
        const step = 16;
        const steps = Math.ceil(duration / step);
        let current = 0;
        const inc = target / steps;
        const timer = setInterval(() => {
          current += inc;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          numEl.textContent = Math.round(current);
        }, step);
      }
    }, startDelay);
  });
}

function initFeedbackProgressObserver() {
  const grids = document.querySelectorAll('.market-feedback-grid');
  if (!grids.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        initFeedbackProgressBars(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  grids.forEach((grid) => observer.observe(grid));
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

function initOriginalDesignShowcase() {
  var section = document.getElementById('originalDesignShowcase');
  if (!section) return;

  var viewport = section.querySelector('[data-apple-viewport]');
  var track = section.querySelector('[data-apple-track]');
  var slides = Array.from(section.querySelectorAll('.apple-showcase-slide'));
  var prevBtn = section.querySelector('[data-apple-prev]');
  var nextBtn = section.querySelector('[data-apple-next]');
  var dots = Array.from(section.querySelectorAll('[data-apple-dot]'));

  if (!viewport || !track || !slides.length) return;

  var activeIndex = 0;
  var autoplayTimer = null;
  var AUTOPLAY_INTERVAL = 6000;
  var isHovered = false;
  var isDragging = false;
  var startX = 0;
  var currentTranslate = 0;
  var prevTranslate = 0;
  var animationFrameId = null;

  function getSlideOffset(index) {
    var vw = viewport.clientWidth;
    var sw = slides[0].offsetWidth || vw * .78;
    var gap = parseFloat(getComputedStyle(track).gap) || 24;
    return -(index * (sw + gap)) + (vw - sw) / 2;
  }

  function goToSlide(idx, animate) {
    activeIndex = ((idx % slides.length) + slides.length) % slides.length;

    if (!animate) track.style.transition = 'none';
    else track.style.transition = 'transform .7s cubic-bezier(.22,.61,.36,1)';

    track.style.transform = 'translateX(' + getSlideOffset(activeIndex) + 'px)';

    slides.forEach(function(slide, i) { slide.classList.toggle('is-active', i === activeIndex); });
    dots.forEach(function(dot, i) {
      dot.classList.toggle('is-active', i === activeIndex);
      dot.setAttribute('aria-current', String(i === activeIndex));
    });

    if (!animate) {
      requestAnimationFrame(function() { track.style.transition = ''; });
    }
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = window.setInterval(function() {
      if (!isHovered && !isDragging) goToSlide(activeIndex + 1);
    }, AUTOPLAY_INTERVAL);
  }
  function stopAutoplay() {
    if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; }
  }
  function resetAutoplay() { stopAutoplay(); startAutoplay(); }

  prevBtn && prevBtn.addEventListener('click', function() { goToSlide(activeIndex - 1); resetAutoplay(); });
  nextBtn && nextBtn.addEventListener('click', function() { goToSlide(activeIndex + 1); resetAutoplay(); });
  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      var ti = parseInt(dot.dataset.appleDot, 10);
      if (!isNaN(ti)) { goToSlide(ti); resetAutoplay(); }
    });
  });

  viewport.addEventListener('mouseenter', function() { isHovered = true; });
  viewport.addEventListener('mouseleave', function() { isHovered = false; });
  viewport.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') { goToSlide(activeIndex - 1); resetAutoplay(); }
    if (e.key === 'ArrowRight') { goToSlide(activeIndex + 1); resetAutoplay(); }
  });

  /* ---- 拖拽 / 触摸 ---- */
  function getPosX(e) { return e.type.includes('mouse') ? e.clientX : e.touches[0].clientX; }

  function dragStart(e) {
    if (e.type === 'mousedown' && e.button !== 0) return;
    isDragging = true;
    startX = getPosX(e);
    currentTranslate = prevTranslate;
    track.classList.add('is-dragging');
    viewport.classList.add('is-grabbing');

    document.addEventListener('mousemove', dragMove, { passive: true });
    document.addEventListener('mouseup', dragEnd, { passive: true });
    document.addEventListener('touchmove', dragMove, { passive: false });
    document.addEventListener('touchend', dragEnd, { passive: true });
    e.preventDefault();
  }

  function dragMove(e) {
    if (!isDragging) return;
    var diff = getPosX(e) - startX;
    currentTranslate = prevTranslate + diff * .55;
    animationFrameId = requestAnimationFrame(function() {
      track.style.transition = 'none';
      track.style.transform = 'translateX(' + currentTranslate + 'px)';
      updateSlidesFromPosition(currentTranslate);
    });
  }

  function dragEnd() {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('is-dragging');
    viewport.classList.remove('is-grabbing');
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', dragEnd);
    document.removeEventListener('touchmove', dragMove);
    document.removeEventListener('touchend', dragEnd);

    if (animationFrameId) { cancelAnimationFrame(animationFrameId); animationFrameId = null; }

    var moved = currentTranslate - prevTranslate;
    var thr = slides[0].offsetWidth * .18;
    if (moved < -thr) goToSlide(activeIndex + 1);
    else if (moved > thr) goToSlide(activeIndex - 1);
    else goToSlide(activeIndex);

    prevTranslate = getSlideOffset(activeIndex);
    resetAutoplay();
  }

  function updateSlidesFromPosition(tx) {
    var sw = slides[0].offsetWidth;
    var gap = parseFloat(getComputedStyle(track).gap) || 24;
    var vc = viewport.clientWidth / 2;
    slides.forEach(function(slide, i) {
      var sl = i * (sw + gap) + tx;
      var dist = Math.abs(sl + sw / 2 - vc);
      var maxD = sw * .8;
      var prox = Math.max(0, 1 - dist / maxD);
      slide.style.transform = 'scale(' + (.94 + prox * .06) + ')';
      slide.style.opacity = (.55 + prox * .45);
    });
  }

  /* 点击左右露出区域切换 */
  viewport.addEventListener('click', function(e) {
    if (isDragging) return;
    var rect = viewport.getBoundingClientRect();
    var cx = e.clientX - rect.left;
    var th = rect.width * .15;
    if (cx < th) { goToSlide(activeIndex - 1); resetAutoplay(); }
    else if (cx > rect.width - th) { goToSlide(activeIndex + 1); resetAutoplay(); }
  });

  viewport.addEventListener('mousedown', dragStart, { passive: false });
  viewport.addEventListener('touchstart', dragStart, { passive: false });

  /* resize */
  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      prevTranslate = getSlideOffset(activeIndex);
      goToSlide(activeIndex, false);
    }, 150);
  }, { passive: true });

  requestAnimationFrame(function() {
    prevTranslate = getSlideOffset(0);
    goToSlide(0, false);
    startAutoplay();
  });
}

window.PortfolioInteractions = {
  createRipple,
  initReveal,
  initHeaderMotion,
  initProjectNavPeek,
  initLookViewer,
  initOutcomeToggle,
  initChillReportCarousel,
  initOriginalDesignShowcase,
  initTrendAnalysisModules,
  initKnitAnalysisAnimation,
  initFeedbackProgressBars,
  initFeedbackProgressObserver,
  scrollToInitialHash,
  initCapabilityAnchors,
  initCapabilityLightbox,
  initGraphicGallery,
  initReportImageLightbox
};

/* ---- Capabilities 页面锚点平滑滚动 ---- */
function initCapabilityAnchors() {
  var cards = document.querySelectorAll('.cap-overview-card[href^="#"]');
  if (!cards.length) return;

  cards.forEach(function(card) {
    card.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ================================================================
   Lightbox — 能力档案页图片点击放大预览（原生实现）
   ================================================================ */
function initCapabilityLightbox() {
  var triggers = document.querySelectorAll('[data-lightbox]');
  if (!triggers.length) return;

  /* 创建 DOM 结构 */
  var lb = document.createElement('div');
  lb.className = 'cap-lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.innerHTML =
    '<div class="cap-lightbox__backdrop"></div>' +
    '<div class="cap-lightbox__inner">' +
      '<button class="cap-lightbox__close" aria-label="关闭预览" type="button">&times;</button>' +
      '<img class="cap-lightbox__img" alt="" />' +
      '<p class="cap-lightbox__title"></p>' +
    '</div>';
  document.body.appendChild(lb);

  var backdrop = lb.querySelector('.cap-lightbox__backdrop');
  var img = lb.querySelector('.cap-lightbox__img');
  var title = lb.querySelector('.cap-lightbox__title');
  var closeBtn = lb.querySelector('.cap-lightbox__close');

  function openLb(src, label) {
    img.src = src;
    img.alt = label || '';
    title.textContent = label || '';
    lb.classList.add('is-open');
    document.body.classList.add('modal-open');
    closeBtn.focus();
  }

  function closeLb() {
    lb.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    img.src = '';
    title.textContent = '';
  }

  triggers.forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.stopPropagation();
      var src = this.dataset.lbSrc;
      var label = this.dataset.lbTitle || this.querySelector('.ph-name-overlay')?.textContent || '';
      if (src) openLb(src, label);
    });

    el.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  closeBtn.addEventListener('click', closeLb);
  backdrop.addEventListener('click', closeLb);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lb.classList.contains('is-open')) closeLb();
  });
}

/* ================================================================
   报告资料图 Lightbox — 表格/图表/销量数据点击放大预览
   复用 cap-lightbox DOM，扩展触发源
   ================================================================ */
function initReportImageLightbox() {
  var reportImages = document.querySelectorAll(
    '.bulk-sales-card img, .feedback-media img, .chill-color-image img, .weave-img-placeholder img'
  );
  if (!reportImages.length) return;

  /* 复用已有 lightbox 或创建新实例 */
  var lb = document.querySelector('.cap-lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.className = 'cap-lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.innerHTML =
      '<div class="cap-lightbox__backdrop"></div>' +
      '<div class="cap-lightbox__inner">' +
        '<button class="cap-lightbox__close" aria-label="关闭预览" type="button">&times;</button>' +
        '<img class="cap-lightbox__img" alt="" />' +
        '<p class="cap-lightbox__title"></p>' +
      '</div>';
    document.body.appendChild(lb);
  }

  var backdrop = lb.querySelector('.cap-lightbox__backdrop');
  var img = lb.querySelector('.cap-lightbox__img');
  var title = lb.querySelector('.cap-lightbox__title');
  var closeBtn = lb.querySelector('.cap-lightbox__close');

  function openReportLb(src, label) {
    img.src = src;
    img.alt = label || '';
    title.textContent = label || '资料图片';
    lb.classList.add('is-open');
    document.body.classList.add('modal-open');
    closeBtn.focus();
  }

  function closeReportLb() {
    lb.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    img.src = '';
    title.textContent = '';
  }

  reportImages.forEach(function(el) {
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', function(e) {
      e.stopPropagation();
      var src = this.src;
      var label =
        this.closest('.bulk-sales-card')?.querySelector('h4')?.textContent ||
        this.closest('.feedback-card')?.querySelector('.feedback-name')?.textContent ||
        this.alt || '资料图片';
      if (src) openReportLb(src, label);
    });
  });

  closeBtn.addEventListener('click', closeReportLb);
  backdrop.addEventListener('click', closeReportLb);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lb.classList.contains('is-open')) closeReportLb();
  });
}

/* ================================================================
   图案设计画廊 — 缩略图点击切换左侧主图
   ================================================================ */
function initGraphicGallery() {
  var gallery = document.querySelector('.graphic-gallery');
  if (!gallery) return;

  var mainImg = document.getElementById('graphicMainImage');
  var mainTitle = document.getElementById('graphicMainTitle');
  var mainSubtitle = document.getElementById('graphicMainSubtitle');
  var mainIndex = document.getElementById('graphicMainIndex');
  var thumbs = gallery.querySelectorAll('.graphic-thumb');

  if (!mainImg || !thumbs.length) return;

  var ANIM_DUR = 380; /* ms — 与 CSS transition 匹配 */

  thumbs.forEach(function(thumb) {
    thumb.addEventListener('click', function() {
      var idx = this.dataset.graphicIndex;
      if (typeof idx === 'undefined') return;

      /* 已选中则跳过 */
      if (this.classList.contains('is-active')) return;

      var src = this.dataset.graphicSrc;
      var title = this.dataset.graphicTitle;
      var subtitle = this.dataset.graphicSubtitle;

      /* 1. 移除所有 active */
      thumbs.forEach(function(t) { t.classList.remove('is-active'); });

      /* 2. 当前缩略图激活 */
      this.classList.add('is-active');

      /* 3. 主图淡出 → 换图 → 淡入 */
      mainImg.classList.add('is-changing');

      window.setTimeout(function() {
        mainImg.src = src;
        mainImg.alt = title || '';
        if (mainTitle) mainTitle.textContent = title || '';
        if (mainSubtitle) mainSubtitle.textContent = subtitle || '';
        if (mainIndex) mainIndex.textContent = String(Number(idx) + 1).padStart(2, '0');

        /* 触发重排后淡入 */
        void mainImg.offsetWidth;
        mainImg.classList.remove('is-changing');
      }, ANIM_DUR * 0.55);
    });

    /* 键盘支持：Enter / Space 触发 */
    thumb.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
}
})();
