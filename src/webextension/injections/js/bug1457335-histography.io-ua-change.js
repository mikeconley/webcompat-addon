"use strict";

/**
 * Bug 1457335 - histography.io - Override UA & navigator.vendor
 * WebCompat issue #1804 - https://webcompat.com/issues/1804
 *
 * This site is using a strict matching of navigator.userAgent and
 * navigator.vendor to allow access for Safari or Chrome. Here, we set the
 * values appropriately so we get recognized as Chrome.
 */

/* globals exportFunction */

const CHROME_UA = navigator.userAgent + " Chrome for WebCompat";

Object.defineProperty(window.wrappedJSObject.navigator, "userAgent", {
  get: exportFunction(function() {
    return CHROME_UA;
  }, window),

  set: exportFunction(function() {}, window)
});

Object.defineProperty(window.wrappedJSObject.navigator, "vendor", {
  get: exportFunction(function() {
    return "Google Inc.";
  }, window),

  set: exportFunction(function() {}, window)
});