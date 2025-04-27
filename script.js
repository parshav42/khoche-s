function showBlessings() {
    const blessings = document.getElementById('blessings');
    const appicon = document.getElementById('appicon')
    // blessings.classList.toggle('hidden');
  }
  
  window.addEventListener('load', () => {
    const music = document.getElementById('background-music');
    
    music.play().then(() => {
      music.muted = false;
      let volume = 0;
      const fadeIn = setInterval(() => {
        if (volume < 0.5) {
          volume += 0.01;
          music.volume = volume;
        } else {
          clearInterval(fadeIn);
        }
      }, 100);
    }).catch((error) => {
      console.log('Autoplay blocked:', error);
    });
  });
  