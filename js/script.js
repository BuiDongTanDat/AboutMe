const audio = document.getElementById('audio');
const playButton = document.getElementById('play-button');
const footerColor = document.getElementById('footer-mail-color');
let isAudioPlaying = false; 

// Handle play button click
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.muted = false; // Unmute when playing
        audio.play().then(() => {
            playButton.classList.add('spin'); // Add spinning class
        }).catch(error => {
            console.error('Playback failed:', error);
        });
    } else {
        audio.pause();
        playButton.classList.remove('spin'); // Remove spinning class
    }
});

// Automatically play on load (muted)
window.onload = () => {
    audio.play().catch(error => {
        console.error('Autoplay failed:', error);
    });
};

// Change background and play music
let originalBgColor = document.body.style.backgroundColor; 
const colorTitle = document.getElementById('color-title');

document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
        const isSelected = this.classList.contains('selected');
        
        document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
        
        // If click to unselect
        if (isSelected) {
            document.body.style.backgroundColor = originalBgColor; 
            colorTitle.style.color = ''; //set to default
            footerColor.style.color = ''; //set to default
            audio.src = "music/Ocean of Memories.mp3";
            audio.play();
            document.querySelector('.audio-player span').textContent = 'Ocean of Memories';
            playButton.classList.add('spin');
        } else {
            this.classList.add('selected');
            document.body.style.backgroundColor = this.getAttribute('data-color');
            colorTitle.style.color = this.getAttribute('bgw'); 
            footerColor.style.color = this.getAttribute('bgw')
            audio.src = this.getAttribute('data-music');
            audio.play();
            document.querySelector('.audio-player span').textContent = this.getAttribute('txt-music');
            playButton.classList.add('spin');
        }
    });
});

