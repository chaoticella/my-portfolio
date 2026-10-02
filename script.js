document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. CUSTOM CIRCLE CURSOR WITH LERP PHYSICS
    // ==========================================
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    // Track posisi mouse
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (cursorDot) {
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        }
    });

    // Loop animasi halus untuk lingkaran
    function animateCursor() {
        ringX += (mouseX - ringX) * 0.2;
        ringY += (mouseY - ringY) * 0.2;

        if (cursorRing) {
            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;
        }

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Efek membesar saat hover tombol & elemen interaktif
    const interactiveSelector = 'a, button, input, textarea, .project-card, .retro-box, .filter-btn';
    
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveSelector)) {
            document.body.classList.add('hovering');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(interactiveSelector)) {
            document.body.classList.remove('hovering');
        }
    });

    // ==========================================
    // 2. THEME SWITCHER (Dark / Light Mode)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.body.removeAttribute('data-theme');
                if (themeIcon) themeIcon.textContent = '🌙';
            } else {
                document.body.setAttribute('data-theme', 'dark');
                if (themeIcon) themeIcon.textContent = '☀️';
            }
        });
    }

    // ==========================================
    // 3. PROJECT FILTER & MODAL
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-[var(--accent-pink)]');
                b.classList.add('bg-[var(--container-bg)]');
            });
            btn.classList.add('active', 'bg-[var(--accent-pink)]');
            btn.classList.remove('bg-[var(--container-bg)]');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ==========================================
// 4. REAL AUDIO MUSIC WIDGET
// ==========================================
const playbtn = document.getElementById('playbtn');
const audioPlayer = document.getElementById('clairo-audio');

if (playbtn && audioPlayer) {
    playbtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playbtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        } else {
            audioPlayer.pause();
            playbtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
    });
}

// Modal Trigger Listeners
const modalTriggers = document.querySelectorAll('.modal-trigger');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');

modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const title = trigger.getAttribute('data-title');
        const desc = trigger.getAttribute('data-desc');
        const link = trigger.getAttribute('data-link');
        
        if (modalTitle) modalTitle.textContent = title;
        if (modalDesc) modalDesc.textContent = desc;
        if (modalLink && link) modalLink.setAttribute('href', link);
        
        if (modal) modal.classList.remove('hidden');
    });
});

    const hideModal = () => {
        if (modal) modal.classList.add('hidden');
    };

    if (closeModalBtn) closeModalBtn.addEventListener('click', hideModal);
    if (modalCloseAction) modalCloseAction.addEventListener('click', hideModal);

    // ==========================================
    // 4. MUSIC WIDGET
    // ==========================================
    const playBtn = document.getElementById('play-btn');
    let isPlaying = false;

    if (playBtn) {
        playBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            playBtn.innerHTML = isPlaying ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
        });
    }
});