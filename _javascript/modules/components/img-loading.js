/**
 * Setting up image lazy loading and LQIP switching
 */



/**
 * Switches the LQIP with the real image URL.
 */
function switchLQIP() {
  const src = this.getAttribute(ATTR_DATA_SRC);
  this.setAttribute('src', encodeURI(src));
  this.removeAttribute(ATTR_DATA_SRC);
}

export function loadImg() {
  const images = document.querySelectorAll('img');

  if (images.length === 0) {
    return;
  }

  images.forEach((img) => {
    img.addEventListener('load', handleImage);
  });

  // Images loaded from the browser cache do not trigger the 'load' event
  document.querySelectorAll('article img[loading="lazy"]').forEach((img) => {
    if (img.complete) {
      removeCover.call(img, cover.SHIMMER);
    }
  });

  // LQIPs set by the data URI or WebP will not trigger the 'load' event,
  // so manually convert the URI to the URL of a high-resolution image.
  const lqips = document.querySelectorAll(
    `article img[${ATTR_DATA_LQIP}="true"]`
  );

  if (lqips.length) {
    lqips.forEach((lqip) => {
      switchLQIP.call(lqip);
    });
  }
}

