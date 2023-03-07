let renderFunction;
let renderInterval;
unsafeWindow.requestAnimationFrame = (cb) => {
    if (renderInterval) return;
    renderInterval = setInterval(cb, 1000 / 60);
    renderFunction = cb;
}
function updateFPSLimit(fpsLimit, renderFunction) {
    clearInterval(renderInterval);
    renderInterval = setInterval(renderFunction, 1000 / fpsLimit);
}
// Untouched code to not slow down the rendering because of obfuscated code
