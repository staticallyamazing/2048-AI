var GM;

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  GM = new GameManager(8, AIInputManager, HTMLActuator, LocalStorageManager);
});
