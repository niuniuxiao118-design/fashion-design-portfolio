/**
 * 图片资源映射 — OSS 云端加载
 *
 * 所有本地 ./assets/xxx 路径统一从此文件获取云端 URL。
 * 部署时只需修改 IMAGE_BASE 即可切换 CDN/OSS 源。
 *
 * 使用方式：
 *   ossImg("./assets/photo.png")
 *   // → "https://dykzuopinji.oss-cn-chengdu.aliyuncs.com/assets/photo.png"
 */

/* ===== 可配置：OSS 基础路径 ===== */
var IMAGE_BASE = "https://dykzuopinji.oss-cn-chengdu.aliyuncs.com/assets";

/**
 * 将本地 assets 路径转为 OSS 完整 URL
 * @param {string} localPath — 例如 "./assets/photo.png" 或 "assets/photo.png"
 * @returns {string} OSS 完整 URL
 */
function ossImg(localPath) {
  if (!localPath) return "";
  /* 去掉前缀，只保留 assets/ 后面的文件名部分 */
  var key = localPath.replace(/^\.\//, "").replace(/^assets\//, "");
  return IMAGE_BASE + "/" + key;
}

/* 全局暴露 */
window.IMAGE_BASE = IMAGE_BASE;
window.ossImg = ossImg;

/* ===== 自动替换：页面加载后扫描 HTML 中的本地路径 ===== */
(function autoRewriteAssetUrls() {
  /* 注入 CSS 变量供 background-image 使用 */
  document.documentElement.style.setProperty('--hero-bg-image', 'url(' + ossImg('./assets/urban-nomad-hero-bg.png') + ')');

  function rewrite() {
    /* 替换所有 <img src="./assets/..."> */
    var imgs = document.querySelectorAll('img[src*="./assets/"], img[src*="assets/"]');
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].setAttribute('src', ossImg(imgs[i].getAttribute('src')));
    }
    /* 替换所有 <source src="./assets/..."> */
    var sources = document.querySelectorAll('source[src*="./assets/"], source[src*="assets/"]');
    for (var j = 0; j < sources.length; j++) {
      sources[j].setAttribute('src', ossImg(sources[j].getAttribute('src')));
    }
    /* 替换所有 <video poster="./assets/..."> */
    var videos = document.querySelectorAll('video[poster*="./assets/"], video[poster*="assets/"]');
    for (var k = 0; k < videos.length; k++) {
      videos[k].setAttribute('poster', ossImg(videos[k].getAttribute('poster')));
    }
  }
  /* DOM 就绪后执行，早于 main.js 渲染 */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', rewrite);
  } else {
    rewrite();
  }
})();
