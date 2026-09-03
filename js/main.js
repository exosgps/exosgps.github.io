document.addEventListener('DOMContentLoaded', () => {
  // Dynamic GNSS Live Coordinates in Telemetry Bar
  const coordElement = document.getElementById('live-coord');
  const satElement = document.getElementById('live-sats');
  const fixElement = document.getElementById('live-fix');

  if (coordElement) {
    let lat = 34.0522;
    let lon = -118.2437;
    let sats = 28;

    setInterval(() => {
      lat += (Math.random() - 0.5) * 0.0002;
      lon += (Math.random() - 0.5) * 0.0002;
      sats = Math.floor(26 + Math.random() * 5);

      const latDir = lat >= 0 ? 'N' : 'S';
      const lonDir = lon >= 0 ? 'E' : 'W';
      coordElement.textContent = `${Math.abs(lat).toFixed(4)}°${latDir} ${Math.abs(lon).toFixed(4)}°${lonDir}`;
      if (satElement) satElement.textContent = `${sats} SATS`;
    }, 2500);
  }

  // Copy Link Helper
  window.copyText = (text, elementId) => {
    navigator.clipboard.writeText(text).then(() => {
      const el = document.getElementById(elementId);
      if (el) {
        const original = el.innerText;
        el.innerText = 'COPIED!';
        el.style.color = '#00FF88';
        setTimeout(() => {
          el.innerText = original;
          el.style.color = '';
        }, 2000);
      }
    });
  };
});
