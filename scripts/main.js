"use strict";

(() => {

const { renderWorks, renderDetail } = window.PortfolioRender;
const {
  createRipple,
  initReveal,
  initHeaderMotion,
  initProjectNavPeek,
  initLookViewer,
  initOutcomeToggle,
  initChillReportCarousel,
  initOriginalDesignShowcase,
  initTrendAnalysisModules,
  initFeedbackProgressObserver,
  scrollToInitialHash,
  initCapabilityAnchors,
  initCapabilityLightbox,
  initGraphicGallery
} = window.PortfolioInteractions;

renderWorks();
renderDetail();
initReveal();
initHeaderMotion();
initProjectNavPeek();
initLookViewer();
initOutcomeToggle();
initChillReportCarousel();
initOriginalDesignShowcase();
initTrendAnalysisModules();
initFeedbackProgressObserver();
scrollToInitialHash();
initCapabilityAnchors();
initCapabilityLightbox();
initGraphicGallery();
initReportImageLightbox();

document.addEventListener("click", (event) => {
  const target = event.target.closest(".ripple-target");
  if (target) createRipple(target, event);
});
})();
