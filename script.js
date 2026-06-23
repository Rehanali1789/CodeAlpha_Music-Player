/**
 * VibeFlow Music Player
 * Pure Vanilla JS — HTML5 Audio API
 */

/* ============================================================
   SONG LIBRARY — 15 Songs
   11 × Aashiqui 2 (2013) full album  +  4 all-time Hindi classics
   Streamed freely from Internet Archive (archive.org)
   ============================================================ */
const A2 = "https://archive.org/download/Aashiqui2_2013_Soundtrack/";
const OLD = "https://archive.org/download/HindiOldSongs/";

const songs = [
  /* ── AASHIQUI 2 (2013) ── */
  {
    title:    "Tum Hi Ho",
    artist:   "Arijit Singh",
    src:      A2 + "Arijit%20Singh%20-%20Tum%20Hi%20Ho.mp3",
    cover:    "assets/images/cover1.svg",
    duration: "4:22",
    gradient: ["#6366F1", "#EC4899"]
  },
  {
    title:    "Sunn Raha Hai (Male)",
    artist:   "Ankit Tiwari",
    src:      A2 + "Ankit%20Tiwari%20-%20Sunn%20Raha%20Hai%20(Male%20Version).mp3",
    cover:    "assets/images/cover2.svg",
    duration: "6:30",
    gradient: ["#06B6D4", "#8B5CF6"]
  },
  {
    title:    "Chahun Main Ya Naa",
    artist:   "Arijit Singh & Palak Muchhal",
    src:      A2 + "Arijit%20Singh%20%26%20Palak%20Muchhal%20%20-%20Chahun%20Main%20Ya%20Naa.mp3",
    cover:    "assets/images/cover3.svg",
    duration: "5:04",
    gradient: ["#F59E0B", "#EC4899"]
  },
  {
    title:    "Hum Mar Jayenge",
    artist:   "Arijit Singh & Tulsi Kumar",
    src:      A2 + "Arijit%20Singh%20%26%20Tulsi%20Kumar%20-%20Hum%20Mar%20Jayenge.mp3",
    cover:    "assets/images/cover4.svg",
    duration: "5:07",
    gradient: ["#10B981", "#6366F1"]
  },
  {
    title:    "Meri Aashiqui",
    artist:   "Palak Muchhal & Arijit Singh",
    src:      A2 + "Arijit%20Singh%20%26%20Palak%20Muchhal%20-%20Meri%20Aashiqui.mp3",
    cover:    "assets/images/cover5.svg",
    duration: "4:26",
    gradient: ["#EC4899", "#8B5CF6"]
  },
  {
    title:    "Aasan Nahin Yahan",
    artist:   "Arijit Singh",
    src:      A2 + "Arijit%20Singh%20-%20Aasan%20Nahi%20Yahan.mp3",
    cover:    "assets/images/cover6.svg",
    duration: "3:34",
    gradient: ["#EF4444", "#F59E0B"]
  },
  {
    title:    "Sunn Raha Hai (Female)",
    artist:   "Shreya Ghoshal",
    src:      A2 + "Shreya%20Ghoshal%20-%20Sunn%20Raha%20Hai%20(Female%20Version).mp3",
    cover:    "assets/images/cover7.svg",
    duration: "5:14",
    gradient: ["#F97316", "#EC4899"]
  },
  {
    title:    "Bhula Dena",
    artist:   "Mustafa Zahid",
    src:      "https://archive.org/download/SunnRahaHaiNaTu/Aashiqui%202%20-%2004%20-%20Bhula%20Dena.mp3",
    cover:    "assets/images/cover8.svg",
    duration: "4:00",
    gradient: ["#8B5CF6", "#0EA5E9"]
  },
  {
    title:    "Piya Aaye Na",
    artist:   "K.K & Tulsi Kumar",
    src:      "https://archive.org/download/SunnRahaHaiNaTu/Aashiqui%202%20-%2006%20-%20Piya%20Aaye%20Na.mp3",
    cover:    "assets/images/cover9.svg",
    duration: "4:46",
    gradient: ["#EC4899", "#F59E0B"]
  },
  {
    title:    "Milne Hai Mujhse Aayi",
    artist:   "Arijit Singh",
    src:      "https://archive.org/download/SunnRahaHaiNaTu/Aashiqui%202%20-%2010%20-%20Milne%20Hai%20Mujhse%20Aayi.mp3",
    cover:    "assets/images/cover10.svg",
    duration: "4:55",
    gradient: ["#6366F1", "#10B981"]
  },
  {
    title:    "Tum Hi Ho (Reprise)",
    artist:   "Arijit Singh",
    src:      "https://archive.org/download/tum-hi-ho-aashiqui-2/Tum%20Hi%20Ho_%20Aashiqui%202.mp3",
    cover:    "assets/images/cover11.svg",
    duration: "4:22",
    gradient: ["#9333EA", "#EC4899"]
  },
  /* ── 4 ALL-TIME HINDI CLASSICS (kept) ── */
  {
    title:    "Pehla Nasha",
    artist:   "Udit Narayan & Sadhana Sargam",
    src:      OLD + "Pehla%20Nasha.mp3",
    cover:    "assets/images/cover12.svg",
    duration: "4:44",
    gradient: ["#F59E0B", "#6366F1"]
  },
  {
    title:    "Jaadhu Teri Nazar",
    artist:   "Udit Narayan",
    src:      OLD + "Jaadhu%20Teri%20Nazar.mp3",
    cover:    "assets/images/cover13.svg",
    duration: "4:18",
    gradient: ["#10B981", "#EC4899"]
  },
  {
    title:    "Tip Tip Barsa Paani",
    artist:   "Udit Narayan & Alka Yagnik",
    src:      OLD + "Tip%20Tip%20Barsa%20Paani.mp3",
    cover:    "assets/images/cover14.svg",
    duration: "5:30",
    gradient: ["#8B5CF6", "#F97316"]
  },
  {
    title:    "Yeh Kaali Kaali Aankhen",
    artist:   "Kumar Sanu",
    src:      OLD + "Yeh%20Kaali%20Kaali%20Aankhen.mp3",
    cover:    "assets/images/cover15.svg",
    duration: "7:12",
    gradient: ["#1E293B", "#6366F1"]
  }
];

/* ============================================================
   DOM REFS
   ============================================================ */
const audio         = document.getElementById('audio');
const playBtn       = document.getElementById('play-btn');
const prevBtn       = document.getElementById('prev-btn');
const nextBtn       = document.getElementById('next-btn');
const shuffleBtn    = document.getElementById('shuffle-btn');
const repeatBtn     = document.getElementById('repeat-btn');
const progressBar   = document.getElementById('progress-bar');
const progressFill  = document.getElementById('progress-fill');
const progressThumb = document.getElementById('progress-thumb');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl   = document.getElementById('total-time');
const volSlider     = document.getElementById('vol-slider');
const volLabel      = document.getElementById('vol-label');
const muteBtn       = document.getElementById('mute-btn');
const songTitle     = document.getElementById('song-title');
const songArtist    = document.getElementById('song-artist');
const albumImg      = document.getElementById('album-img');
const albumPlaceholder = document.getElementById('album-placeholder');
const albumCover    = document.getElementById('album-cover');
const albumRing     = document.getElementById('album-ring');
const equalizerEl   = document.getElementById('equalizer');
const playlist      = document.getElementById('playlist');
const trackCount    = document.getElementById('track-count');
const loader        = document.getElementById('loader');
const appEl         = document.getElementById('app');
const notification  = document.getElementById('notification');
const notifTitle    = document.getElementById('notif-title');
const notifArtist   = document.getElementById('notif-artist');
const playlistToggle= document.getElementById('playlist-toggle');
const sidebar       = document.getElementById('sidebar');
const iconPlay      = playBtn.querySelector('.icon-play');
const iconPause     = playBtn.querySelector('.icon-pause');
const iconVol       = muteBtn.querySelector('.icon-vol');
const iconMute      = muteBtn.querySelector('.icon-mute');

/* ============================================================
   STATE
   ============================================================ */
let currentIndex = 0;
let isPlaying    = false;
let isShuffle    = false;
let isRepeat     = false;
let isMuted      = false;
let prevVolume   = 80;
let notifTimer   = null;

/* ============================================================
   LOADER — hide after page ready
   ============================================================ */
window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 1200);
});

/* ============================================================
   BUILD PLAYLIST UI
   ============================================================ */
function buildPlaylist() {
  playlist.innerHTML = '';
  trackCount.textContent = `${songs.length} song${songs.length !== 1 ? 's' : ''}`;

  songs.forEach((song, i) => {
    const li = document.createElement('li');
    li.dataset.index = i;
    li.setAttribute('role', 'button');
    li.setAttribute('tabindex', '0');
    li.innerHTML = `
      <div class="pl-bars"><span></span><span></span><span></span></div>
      <span class="pl-num">${i + 1}</span>
      <div class="pl-thumb">
        ${song.cover
          ? `<img src="${song.cover}" alt="${song.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
          : ''}
        <svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
      </div>
      <div class="pl-info">
        <span class="pl-title">${song.title}</span>
        <span class="pl-artist">${song.artist}</span>
      </div>
      <span class="pl-dur">${song.duration}</span>
    `;

    li.addEventListener('click',    () => selectSong(i, true));
    li.addEventListener('keydown',  e => { if (e.key === 'Enter' || e.key === ' ') selectSong(i, true); });
    playlist.appendChild(li);
  });
}

/* ============================================================
   LOAD SONG (without auto-play)
   ============================================================ */
function loadSong(index) {
  const song = songs[index];
  currentIndex = index;

  // Update info
  songTitle.textContent  = song.title;
  songArtist.textContent = song.artist;

  // Album cover
  // Apply song-specific gradient to placeholder background
  if (song.gradient) {
    albumPlaceholder.style.background =
      `linear-gradient(135deg, ${song.gradient[0]}, ${song.gradient[1]})`;
  }

  if (song.cover) {
    albumImg.src = song.cover;
    albumImg.classList.add('visible');
    albumPlaceholder.style.display = 'none';
    albumImg.onerror = () => {
      albumImg.classList.remove('visible');
      albumPlaceholder.style.display = 'flex';
    };
  } else {
    albumImg.classList.remove('visible');
    albumPlaceholder.style.display = 'flex';
  }

  // Audio source
  audio.src = song.src;
  audio.load();

  // Reset progress
  progressFill.style.width = '0%';
  progressThumb.style.left = '-7px';
  currentTimeEl.textContent = '0:00';
  totalTimeEl.textContent   = song.duration || '0:00';

  // Highlight playlist item
  document.querySelectorAll('.playlist li').forEach((li, i) => {
    li.classList.toggle('active', i === index);
    li.classList.remove('playing');
  });

  // Scroll active item into view
  const activeItem = playlist.querySelector('li.active');
  if (activeItem) activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });

  // Save to localStorage
  localStorage.setItem('lastSongIndex', index);
}

/* ============================================================
   SELECT & PLAY
   ============================================================ */
function selectSong(index, autoplay = false) {
  loadSong(index);
  if (autoplay) {
    playSong();
  } else {
    // keep paused state but update UI
    setPlayingUI(false);
  }
}

function playSong() {
  audio.play().catch(() => {
    // Browser may block autoplay — that's fine
    setPlayingUI(false);
  });
}

function pauseSong() {
  audio.pause();
}

/* ============================================================
   PLAYING UI STATE
   ============================================================ */
function setPlayingUI(playing) {
  isPlaying = playing;

  iconPlay.style.display  = playing ? 'none' : 'block';
  iconPause.style.display = playing ? 'block' : 'none';
  playBtn.classList.toggle('playing', playing);

  albumCover.classList.toggle('rotating', playing);
  albumRing.classList.toggle('spinning', playing);
  equalizerEl.classList.toggle('active', playing);

  // Playlist item playing class
  document.querySelectorAll('.playlist li').forEach((li, i) => {
    li.classList.toggle('playing', playing && i === currentIndex);
  });
}

/* ============================================================
   NEXT / PREVIOUS
   ============================================================ */
function nextSong() {
  let next;
  if (isShuffle) {
    do { next = Math.floor(Math.random() * songs.length); }
    while (next === currentIndex && songs.length > 1);
  } else {
    next = (currentIndex + 1) % songs.length;
  }
  selectSong(next, isPlaying);
  showNotification(songs[next]);
}

function prevSong() {
  // If more than 3 seconds in, restart; otherwise go back
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }
  const prev = (currentIndex - 1 + songs.length) % songs.length;
  selectSong(prev, isPlaying);
  showNotification(songs[prev]);
}

/* ============================================================
   NOTIFICATION
   ============================================================ */
function showNotification(song) {
  notifTitle.textContent  = song.title;
  notifArtist.textContent = song.artist;
  notification.classList.add('show');
  clearTimeout(notifTimer);
  notifTimer = setTimeout(() => notification.classList.remove('show'), 3000);
}

/* ============================================================
   AUDIO EVENTS
   ============================================================ */
audio.addEventListener('play',  () => setPlayingUI(true));
audio.addEventListener('pause', () => setPlayingUI(false));

audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = `${pct}%`;

  // Move thumb to match progress
  const barW = progressBar.clientWidth;
  progressThumb.style.left = `${(pct / 100) * barW - 7}px`;

  currentTimeEl.textContent = formatTime(audio.currentTime);
});

audio.addEventListener('loadedmetadata', () => {
  totalTimeEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('ended', () => {
  if (isRepeat) {
    audio.currentTime = 0;
    playSong();
  } else {
    nextSong();
  }
});

audio.addEventListener('error', () => {
  // Song file not found — just show a placeholder state
  setPlayingUI(false);
});

/* ============================================================
   PROGRESS BAR — seek
   ============================================================ */
let isSeeking = false;

function seekTo(e) {
  const rect = progressBar.getBoundingClientRect();
  const x    = (e.clientX ?? e.touches?.[0]?.clientX) - rect.left;
  const pct  = Math.max(0, Math.min(1, x / rect.width));
  if (audio.duration) {
    audio.currentTime = pct * audio.duration;
  }
}

progressBar.addEventListener('mousedown', e => { isSeeking = true; seekTo(e); });
progressBar.addEventListener('touchstart', e => { isSeeking = true; seekTo(e); }, { passive: true });

document.addEventListener('mousemove', e => { if (isSeeking) seekTo(e); });
document.addEventListener('touchmove', e => { if (isSeeking) seekTo(e); }, { passive: true });

document.addEventListener('mouseup',  () => { isSeeking = false; });
document.addEventListener('touchend', () => { isSeeking = false; });

/* ============================================================
   VOLUME
   ============================================================ */
function setVolume(val) {
  const v = Math.max(0, Math.min(100, val));
  audio.volume = v / 100;
  volSlider.value = v;
  volLabel.textContent = `${v}%`;

  // Update slider gradient fill
  volSlider.style.background = `linear-gradient(90deg, #6366F1 ${v}%, rgba(255,255,255,0.12) ${v}%)`;

  // Mute icon logic
  if (v === 0) {
    iconVol.style.display  = 'none';
    iconMute.style.display = 'block';
    isMuted = true;
  } else {
    iconVol.style.display  = 'block';
    iconMute.style.display = 'none';
    isMuted = false;
  }
}

volSlider.addEventListener('input', () => {
  prevVolume = parseInt(volSlider.value);
  setVolume(prevVolume);
});

muteBtn.addEventListener('click', () => {
  if (isMuted) {
    setVolume(prevVolume || 80);
  } else {
    prevVolume = parseInt(volSlider.value) || 80;
    setVolume(0);
  }
});

/* ============================================================
   PLAY / PAUSE BUTTON
   ============================================================ */
playBtn.addEventListener('click', () => {
  if (isPlaying) { pauseSong(); } else { playSong(); }
});

/* ============================================================
   PREV / NEXT BUTTONS
   ============================================================ */
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

/* ============================================================
   SHUFFLE / REPEAT
   ============================================================ */
shuffleBtn.addEventListener('click', () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle('active', isShuffle);
});

repeatBtn.addEventListener('click', () => {
  isRepeat = !isRepeat;
  repeatBtn.classList.toggle('active', isRepeat);
});

/* ============================================================
   KEYBOARD SHORTCUTS
   ============================================================ */
document.addEventListener('keydown', e => {
  // Ignore if user is typing in an input
  if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

  switch (e.code) {
    case 'Space':
      e.preventDefault();
      if (isPlaying) { pauseSong(); } else { playSong(); }
      break;
    case 'ArrowRight':
      e.preventDefault();
      nextSong();
      break;
    case 'ArrowLeft':
      e.preventDefault();
      prevSong();
      break;
    case 'ArrowUp':
      e.preventDefault();
      setVolume(Math.min(100, parseInt(volSlider.value) + 5));
      prevVolume = parseInt(volSlider.value);
      break;
    case 'ArrowDown':
      e.preventDefault();
      setVolume(Math.max(0, parseInt(volSlider.value) - 5));
      prevVolume = parseInt(volSlider.value);
      break;
    case 'KeyM':
      muteBtn.click();
      break;
    case 'KeyS':
      shuffleBtn.click();
      break;
    case 'KeyR':
      repeatBtn.click();
      break;
  }
});

/* ============================================================
   MOBILE SIDEBAR TOGGLE
   ============================================================ */
// Create overlay element
const overlay = document.createElement('div');
overlay.className = 'sidebar-overlay';
document.body.appendChild(overlay);

playlistToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('show');
});
overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
});

/* ============================================================
   HELPERS
   ============================================================ */
function formatTime(secs) {
  if (isNaN(secs) || !isFinite(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  buildPlaylist();

  // Restore last played song from localStorage
  const saved = localStorage.getItem('lastSongIndex');
  const startIndex = saved !== null && songs[parseInt(saved)] ? parseInt(saved) : 0;

  loadSong(startIndex);
  setVolume(80);
}

init();
