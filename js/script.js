document.addEventListener("DOMContentLoaded", () => {

    // =============================================
    // DATA: Edit these to update your site content
    // =============================================

    // "What I'm Doing Right Now" — edit this to update your status
    const NOW_DATA = {
        status: "Working on computer vision models for drone imagery classification at the ML Lab.",
        lastUpdated: "March 30, 2025",
        activities: [
            { icon: "🤖", title: "ML Research", description: "Training YOLOv8 models on aerial datasets" },
            { icon: "🛠️", title: "Makerspace", description: "Setting up new 3D printing stations" },
            { icon: "📚", title: "Studying", description: "Data Structures & Algorithms" },
            { icon: "🎯", title: "Goal", description: "Land a summer ML internship" }
        ]
    };

    // Blog Posts — add new objects to this array to create new blog posts
    const BLOG_POSTS = [
        {
            title: "Building Computer Vision Pipelines for Drone Imagery",
            excerpt: "How I designed and tested a classification system to differentiate humans from dogs using aerial footage from our lab's drones.",
            date: "Mar 2025",
            tags: ["AI", "Computer Vision", "Python"],
            link: "#"
        },
        {
            title: "My First Semester as an ML Intern",
            excerpt: "Reflections on diving into machine learning research, working with sensor systems, and the challenges of real-world data.",
            date: "Feb 2025",
            tags: ["ML", "Career", "Reflection"],
            link: "#"
        },
        {
            title: "Leading a Robotics Club: Lessons in Team Management",
            excerpt: "What I learned about leadership, project coordination, and winning a science expo by guiding a team from concept to completion.",
            date: "May 2024",
            tags: ["Leadership", "Robotics"],
            link: "#"
        }
    ];

    // Weekly Schedule — edit to match your actual schedule
    const SCHEDULE_DATA = {
        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        timeSlots: ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"],
        events: {
            // Format: "day-timeIndex": { name, detail }
            "0-0": { name: "CS 2420", detail: "Data Structures" },
            "0-1": { name: "CS 2420", detail: "Data Structures" },
            "0-2": { name: "ML Lab", detail: "Research" },
            "0-3": { name: "ML Lab", detail: "Research" },
            "0-4": { name: "ML Lab", detail: "Research" },
            "0-6": { name: "Makerspace", detail: "Lab Shift" },
            "0-7": { name: "Makerspace", detail: "Lab Shift" },
            "0-8": { name: "Makerspace", detail: "Lab Shift" },
            "1-0": { name: "MATH 2210", detail: "Calculus III" },
            "1-1": { name: "MATH 2210", detail: "Calculus III" },
            "1-2": { name: "Study", detail: "Library" },
            "1-3": { name: "Study", detail: "Library" },
            "1-6": { name: "ML Lab", detail: "Research" },
            "1-7": { name: "ML Lab", detail: "Research" },
            "2-0": { name: "CS 2420", detail: "Data Structures" },
            "2-1": { name: "CS 2420", detail: "Data Structures" },
            "2-2": { name: "ML Lab", detail: "Research" },
            "2-3": { name: "ML Lab", detail: "Research" },
            "2-4": { name: "ML Lab", detail: "Research" },
            "2-6": { name: "Makerspace", detail: "Lab Shift" },
            "2-7": { name: "Makerspace", detail: "Lab Shift" },
            "2-8": { name: "Makerspace", detail: "Lab Shift" },
            "3-0": { name: "MATH 2210", detail: "Calculus III" },
            "3-1": { name: "MATH 2210", detail: "Calculus III" },
            "3-2": { name: "Study", detail: "Library" },
            "3-3": { name: "Study", detail: "Library" },
            "3-6": { name: "ML Lab", detail: "Research" },
            "3-7": { name: "ML Lab", detail: "Research" },
            "4-0": { name: "CS 2420", detail: "Data Structures" },
            "4-1": { name: "CS 2420", detail: "Data Structures" },
            "4-2": { name: "ML Lab", detail: "Research" },
            "4-3": { name: "ML Lab", detail: "Research" },
            "5-2": { name: "Personal", detail: "Projects" },
            "5-3": { name: "Personal", detail: "Projects" },
            "5-4": { name: "Personal", detail: "Projects" },
        }
    };

    // Text scramble phrases for the hero subtitle
    const SCRAMBLE_PHRASES = [
        "Computer Science & AI Enthusiast",
        "Machine Learning Intern",
        "Building Intelligent Systems",
        "Bridging Software & Hardware"
    ];

    // =============================================
    // 1. CUSTOM CURSOR
    // =============================================
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    });

    function animateRing() {
        ringX += (mouseX - 20 - ringX) * 0.15;
        ringY += (mouseY - 20 - ringY) * 0.15;
        ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover effect on interactive elements
    const hoverTargets = document.querySelectorAll('a, button, [data-tilt], .blog-card, .now-activity-item');
    hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('hover'));
        el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });

    // =============================================
    // 2. MAGNETIC BUTTONS
    // =============================================
    document.querySelectorAll('[data-magnetic]').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });

    // =============================================
    // 3. TEXT SCRAMBLE EFFECT
    // =============================================
    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
        }
        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => this.resolve = resolve);
            this.queue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({ from, to, start, end });
            }
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
        update() {
            let output = '';
            let complete = 0;
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.chars[Math.floor(Math.random() * this.chars.length)];
                        this.queue[i].char = char;
                    }
                    output += `<span style="color:#555">${char}</span>`;
                } else {
                    output += from;
                }
            }
            this.el.innerHTML = output;
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
    }

    const scrambleEl = document.getElementById('scrambleText');
    if (scrambleEl) {
        const fx = new TextScramble(scrambleEl);
        let counter = 0;
        const next = () => {
            fx.setText(SCRAMBLE_PHRASES[counter]).then(() => {
                setTimeout(next, 3000);
            });
            counter = (counter + 1) % SCRAMBLE_PHRASES.length;
        };
        setTimeout(next, 1500);
    }

    // =============================================
    // 4. SCROLL REVEAL
    // =============================================
    const revealItems = document.querySelectorAll('.reveal-item');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    revealItems.forEach(item => revealObserver.observe(item));

    // =============================================
    // 5. NAVBAR
    // =============================================
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // =============================================
    // 6. CARD 3D TILT EFFECT
    // =============================================
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const rotateX = (y - 0.5) * -8;
            const rotateY = (x - 0.5) * 8;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)';
        });
    });

    // =============================================
    // 7. PARTICLE DOT GRID
    // =============================================
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_SPACING = 30;
    const MOUSE_RADIUS = 120;
    let canvasMouseX = -1000, canvasMouseY = -1000;

    function initParticles() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
        for (let x = 0; x < canvas.width; x += PARTICLE_SPACING) {
            for (let y = 0; y < canvas.height; y += PARTICLE_SPACING) {
                particles.push({ x, y, baseX: x, baseY: y });
            }
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            const dx = canvasMouseX - p.baseX;
            const dy = canvasMouseY - p.baseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const force = Math.max(0, (MOUSE_RADIUS - dist) / MOUSE_RADIUS);

            p.x += (p.baseX - dx * force * 0.4 - p.x) * 0.1;
            p.y += (p.baseY - dy * force * 0.4 - p.y) * 0.1;

            const size = 1 + force * 2;
            const alpha = 0.15 + force * 0.6;

            ctx.beginPath();
            ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${alpha})`;
            ctx.fill();
        });
        requestAnimationFrame(drawParticles);
    }

    document.addEventListener('mousemove', (e) => {
        canvasMouseX = e.clientX;
        canvasMouseY = e.clientY;
    });

    window.addEventListener('resize', initParticles);
    initParticles();
    drawParticles();

    // =============================================
    // 8. RENDER: "WHAT I'M DOING NOW" SECTION
    // =============================================
    const nowStatus = document.getElementById('nowStatus');
    const nowTimestamp = document.getElementById('nowTimestamp');
    const lastUpdated = document.getElementById('lastUpdated');
    const nowActivities = document.getElementById('nowActivities');

    if (nowStatus) {
        nowStatus.innerHTML = `
            <h3>Currently...</h3>
            <p>${NOW_DATA.status}<span class="typing-cursor"></span></p>
        `;
    }
    if (nowTimestamp) {
        const updateClock = () => {
            nowTimestamp.textContent = new Date().toLocaleTimeString('en-US', {
                hour: '2-digit', minute: '2-digit', second: '2-digit'
            });
        };
        updateClock();
        setInterval(updateClock, 1000);
    }
    if (lastUpdated) {
        lastUpdated.textContent = NOW_DATA.lastUpdated;
    }
    if (nowActivities) {
        nowActivities.innerHTML = NOW_DATA.activities.map(a => `
            <div class="now-activity-item">
                <div class="activity-icon">${a.icon}</div>
                <h4>${a.title}</h4>
                <p>${a.description}</p>
            </div>
        `).join('');
    }

    // =============================================
    // 9. RENDER: BLOG SECTION
    // =============================================
    const blogGrid = document.getElementById('blogGrid');
    if (blogGrid) {
        blogGrid.innerHTML = BLOG_POSTS.map(post => `
            <article class="blog-card reveal-item" data-tilt>
                <span class="blog-date mono-text">${post.date}</span>
                <h3>${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags.map(t => `<span class="blog-tag">${t}</span>`).join('')}
                </div>
                <a href="${post.link}" class="blog-read-more">Read more →</a>
            </article>
        `).join('');

        // Observe newly created blog cards
        blogGrid.querySelectorAll('.reveal-item').forEach(item => revealObserver.observe(item));

        // Add tilt to blog cards
        blogGrid.querySelectorAll('[data-tilt]').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                const rotateX = (y - 0.5) * -6;
                const rotateY = (x - 0.5) * 6;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)';
            });
        });

        // Cursor hover for blog cards
        blogGrid.querySelectorAll('.blog-card').forEach(el => {
            el.addEventListener('mouseenter', () => ring.classList.add('hover'));
            el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
        });
    }

    // =============================================
    // 10. RENDER: SCHEDULE SECTION
    // =============================================
    const scheduleGrid = document.getElementById('scheduleGrid');
    if (scheduleGrid) {
        let html = '<div class="schedule-header"></div>';
        SCHEDULE_DATA.days.forEach(day => {
            html += `<div class="schedule-header">${day}</div>`;
        });

        SCHEDULE_DATA.timeSlots.forEach((time, timeIdx) => {
            html += `<div class="schedule-time">${time}</div>`;
            SCHEDULE_DATA.days.forEach((_, dayIdx) => {
                const key = `${dayIdx}-${timeIdx}`;
                const event = SCHEDULE_DATA.events[key];
                if (event) {
                    html += `<div class="schedule-cell has-event">
                        <div class="schedule-event">
                            <span class="event-name">${event.name}</span>
                            <span class="event-detail">${event.detail}</span>
                        </div>
                    </div>`;
                } else {
                    html += `<div class="schedule-cell"></div>`;
                }
            });
        });
        scheduleGrid.innerHTML = html;
    }

    // =============================================
    // 11. STAT COUNTER ANIMATION
    // =============================================
    const statNumbers = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.dataset.count);
                const isFloat = target % 1 !== 0;
                const duration = 2000;
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    // ease out cubic
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = eased * target;
                    el.textContent = isFloat ? current.toFixed(1) : Math.floor(current);
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    }
                }
                requestAnimationFrame(updateCounter);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));

});
