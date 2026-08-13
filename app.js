const loaderScreen = document.querySelector(".loader-screen");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const heroPrevButton = document.querySelector(".hero-arrow-left");
const heroNextButton = document.querySelector(".hero-arrow-right");
const heroDots = Array.from(document.querySelectorAll(".hero-dot"));
const heroKicker = document.querySelector("[data-hero-kicker]");
const heroTitle = document.querySelector("[data-hero-title]");
const heroDescription = document.querySelector("[data-hero-description]");
const heroButton = document.querySelector("[data-hero-button]");
const heroBadgeTopTitle = document.querySelector("[data-hero-badge-top-title]");
const heroBadgeTopText = document.querySelector("[data-hero-badge-top-text]");
const heroBadgeBottomTitle = document.querySelector("[data-hero-badge-bottom-title]");
const heroBadgeBottomText = document.querySelector("[data-hero-badge-bottom-text]");
const courseSlider = document.querySelector("[data-course-slider]");
const coursePrevButton = document.querySelector(".course-arrow-left");
const courseNextButton = document.querySelector(".course-arrow-right");
const motionCanvas = document.querySelector(".motion-canvas");
const packageCatalog = {
  "recording": {
    category: "Studio Session",
    title: "სიმღერის ჩაწერა",
    summary: "პროფესიონალურ სტუდიაში ვოკალის ჩაწერა სუფთა სიგნალით, რამდენიმე take-ით და არტისტზე მორგებული სამუშაო პროცესით.",
    price: "80 ₾-დან / სესია",
    format: "სტუდიაში, ადგილზე",
    duration: "1-3 საათი",
    badge: "REC",
    sideTitle: "Recording Session",
    sideText: "ვოკალი, დუბლები, ad-lib და საბოლოო მასალის მომზადება.",
    coverClass: "cover-recording",
    outcomesTitle: "რას მიიღებ",
    includes: [
      "სტუდიური მიკროფონი და პროფესიონალური აუდიო ინტერფეისი",
      "ვოკალის ჩაწერა რამდენიმე take-ით და საუკეთესო დუბლირების შერჩევა",
      "ჩაწერილი მასალის მოწესრიგება და პროექტის შენახვა",
      "არტისტის კომფორტზე მორგებული სამუშაო სივრცე"
    ],
    outcomes: [
      "სუფთა, ხარისხიანი ჩაწერილი ვოკალი",
      "მზად მასალა შემდგომი mix/master ეტაპისთვის",
      "დუბლირებული ვერსიები და საჭირო რეზერვები",
      "პროფესიონალურ სტუდიურ გარემოში მუშაობის გამოცდილება"
    ],
    videos: [
      { title: "სტუდიის გარემო", tag: "Facebook Video", text: "ნახე როგორ მიმდინარეობს რეალური recording session სტუდიაში.", href: "https://www.facebook.com/share/17hhNJJbfT/?mibextid=wwXIfr" },
      { title: "Reel Preview", tag: "Instagram Reel", text: "მოკლე კადრები ჩაწერის პროცესიდან და აპარატურიდან.", href: "https://www.instagram.com/artproductionkutaisi?igsh=MTNzOHFnZ2F6d2ltbg==" },
      { title: "YouTube Preview", tag: "YouTube", text: "გრძელი ვიდეოები და პროცესის ფრაგმენტები არხზე.", href: "https://youtube.com/@artproductionkutaisi?si=7Dmht4TUdUkB4oiP" }
    ]
  },
  "mix-mastering": {
    category: "Audio Finish",
    title: "Mix Mastering",
    summary: "ტრეკის გაწმენდა, ბალანსი, სივრცე და საბოლოო loudness ისე, რომ შენი მუსიკა მზად იყოს გამოშვებისთვის.",
    price: "120 ₾-დან / ტრეკი",
    format: "სტუდია ან online ფაილით",
    duration: "1-4 დღე",
    badge: "MX",
    sideTitle: "Studio Sound Polish",
    sideText: "EQ, compression, space, loudness და final export ერთ workflow-ში.",
    coverClass: "cover-mix",
    outcomesTitle: "რას მიიღებ",
    includes: [
      "mix-ის სრული ბალანსი და სიხშირეების გასწორება",
      "ვოკალის და ინსტრუმენტალის ერთმანეთთან სწორად დაჯენა",
      "mastering სტანდარტებზე მიყვანილი საბოლოო ვერსია",
      "WAV/MP3 export მოსასმენად და გამოსაშვებად"
    ],
    outcomes: [
      "უფრო ძლიერი, სუფთა და პროფესიონალური ჟღერადობა",
      "ტრეკი მზად Spotify/YouTube/Facebook-ისთვის",
      "ბასის, ვოკალის და საერთო დინამიკის კონტროლი",
      "საბოლოო მასალა გამოსაშვებად ან კლიპზე დასადებად"
    ],
    videos: [
      { title: "Before / After Mood", tag: "Studio Demo", text: "მიქსის და mastering-ის შედეგების სტილიზებული პრევიუ.", href: "https://youtube.com/@artproductionkutaisi?si=7Dmht4TUdUkB4oiP" },
      { title: "Mix Workflow", tag: "Instagram", text: "მოკლე workflow კადრები მონიტორინგიდან და პროექტიდან.", href: "https://www.instagram.com/artproductionkutaisi?igsh=MTNzOHFnZ2F6d2ltbg==" },
      { title: "Client Delivery", tag: "Facebook", text: "საბოლოო შედეგების და სტუდიური პროცესის ფრაგმენტები.", href: "https://www.facebook.com/share/17hhNJJbfT/?mibextid=wwXIfr" }
    ]
  },
  "video-production": {
    category: "Video Production",
    title: "ვიდეო გადაღება",
    summary: "ქორწილი, დაბადების დღე, ბრენდის კონტენტი, სარეკლამო ვიდეო ან social media reel პროფესიონალური გადაღებით და მონტაჟით.",
    price: "300 ₾-დან",
    format: "on location / studio",
    duration: "პროექტის მიხედვით",
    badge: "VID",
    sideTitle: "Events / Promo / Reel",
    sideText: "გადაღება, შერჩეული კადრები და მონტაჟი ერთ სერვისში.",
    coverClass: "cover-video",
    outcomesTitle: "რას მიიღებ",
    includes: [
      "გადაღება პროფესიონალური კამერით და შესაბამისი განათებით",
      "კადრების შერჩევა, ფერთა კორექცია და მონტაჟი",
      "Reel / promo / სრული ვიდეო ფორმატზე მორგება",
      "საბოლოო export სოციალური ქსელებისთვის ან არქივისთვის"
    ],
    outcomes: [
      "მზად ვიდეო კონტენტი ბრენდისთვის ან ივენთისთვის",
      "მაღალი ხარისხის ვიზუალი და აკურატული მონტაჟი",
      "ვერტიკალური და ჰორიზონტალური ვერსიების მომზადება",
      "გამოსაყენებელი მასალა რეკლამისთვის და სოციალური ქსელებისთვის"
    ],
    videos: [
      { title: "Event Highlights", tag: "YouTube", text: "სრული ვიდეოები და highlight montage-ები არხზე.", href: "https://youtube.com/@artproductionkutaisi?si=7Dmht4TUdUkB4oiP" },
      { title: "Reels / Shorts", tag: "Instagram", text: "მოკლე, სწრაფი და დინამიკური სოციალური ვიდეოები.", href: "https://www.instagram.com/artproductionkutaisi?igsh=MTNzOHFnZ2F6d2ltbg==" },
      { title: "Client Showcase", tag: "Facebook", text: "რეალური გადაღებების და finished video-ს პრევიუ.", href: "https://www.facebook.com/share/17hhNJJbfT/?mibextid=wwXIfr" }
    ]
  },
  "podcast-space": {
    category: "Podcast Studio",
    title: "პოდკასტ სივრცე",
    summary: "მზა audio + video setup სტუმრებით პოდკასტისთვის, ინტერვიუსთვის, live ჩანაწერისთვის ან პერსონალური კონტენტისთვის.",
    price: "250 ₾-დან / სესია",
    format: "სტუდიაში, ადგილზე",
    duration: "1-2 საათი",
    badge: "P",
    sideTitle: "Audio / Video Podcast",
    sideText: "მიკროფონები, კამერა, სივრცე და მზად setup ჩაწერისთვის.",
    coverClass: "cover-podcast",
    outcomesTitle: "რას მიიღებ",
    includes: [
      "მზა podcast სივრცე audio/video ჩაწერისთვის",
      "მიკროფონები, მონიტორინგი და ჩასაწერი გარემო",
      "სტუმრებთან ინტერვიუსთვის ან solo episode-ისთვის მზად setup",
      "საბოლოო მასალის მომზადება შენახვისთვის"
    ],
    outcomes: [
      "პროფესიონალური podcast ჩაწერის გარემო",
      "უფრო სუფთა ხმა და ვიზუალურად მოწესრიგებული კადრი",
      "მასალა სოციალური ქსელებისთვის ან YouTube-ისთვის",
      "მარტივი პროცესი ყოველგვარი საკუთარი ტექნიკის გარეშე"
    ],
    videos: [
      { title: "Podcast Setup", tag: "Facebook", text: "სივრცის, განათების და აუდიოს setup-ის ვიდეო მასალა.", href: "https://www.facebook.com/share/17hhNJJbfT/?mibextid=wwXIfr" },
      { title: "Studio Reel", tag: "Instagram", text: "მოკლე პოდკასტ-კუთხის და სტუდიური გარემოს პრევიუ.", href: "https://www.instagram.com/artproductionkutaisi?igsh=MTNzOHFnZ2F6d2ltbg==" },
      { title: "Long Form Preview", tag: "YouTube", text: "გრძელი ფორმატის კონტენტი და მაგალითები არხზე.", href: "https://youtube.com/@artproductionkutaisi?si=7Dmht4TUdUkB4oiP" }
    ]
  },
  "premiere-pro": {
    category: "Creative Course",
    title: "Adobe Premiere Pro",
    summary: "ვიდეო მონტაჟის პრაქტიკული კურსი ნულიდან: timeline, cuts, sound sync, titles, export და workflow რეალური მასალით.",
    price: "500 ₾",
    format: "ინდივიდუალური / მცირე ჯგუფი",
    duration: "10 შეხვედრა",
    badge: "Pr",
    sideTitle: "Video Editing Course",
    sideText: "Premiere Pro-ს პრაქტიკული კურსი რეალურ პროექტებზე მუშაობით.",
    coverClass: "cover-premiere",
    outcomesTitle: "რას შეისწავლი",
    includes: [
      "ინტერფეისი, project structure და media management",
      "basic და advanced cuts, transitions და sound sync",
      "ტექსტები, subtitles, color basics და export",
      "რეალურ ვიდეო პროექტზე მუშაობა"
    ],
    outcomes: [
      "თავიდან ბოლომდე ვიდეოს აწყობა Premiere Pro-ში",
      "social media ვიდეოს export სწორ ზომებში",
      "workflow, რომელიც რეალურ freelance/project სამუშაოში გამოგადგება",
      "პორტფოლიოსთვის ერთი დასრულებული ნამუშევარი"
    ],
    videos: [
      { title: "Course Preview", tag: "YouTube", text: "კურსის სტილი, გარემო და სტუდიური სწავლის ატმოსფერო.", href: "https://youtube.com/@artproductionkutaisi?si=7Dmht4TUdUkB4oiP" },
      { title: "Editing Reel", tag: "Instagram", text: "მოკლე მონტაჟის კადრები და შედეგები.", href: "https://www.instagram.com/artproductionkutaisi?igsh=MTNzOHFnZ2F6d2ltbg==" },
      { title: "Student Vibe", tag: "Facebook", text: "კურსის და creative environment-ის პრევიუ.", href: "https://www.facebook.com/share/17hhNJJbfT/?mibextid=wwXIfr" }
    ]
  },
  "after-effects": {
    category: "Motion Design Course",
    title: "After Effects",
    summary: "motion graphics, compositing, keyframes და animated visuals პრაქტიკულად, რომ დამოუკიდებლად ააწყო თანამედროვე ვიდეო ვიზუალები.",
    price: "650 ₾",
    format: "ინდივიდუალური / მცირე ჯგუფი",
    duration: "12 შეხვედრა",
    badge: "Ae",
    sideTitle: "Motion Design Course",
    sideText: "შეისწავლი ანიმაციებს, ტექსტის ეფექტებს და motion visuals-ს.",
    coverClass: "cover-after",
    outcomesTitle: "რას შეისწავლი",
    includes: [
      "interface, layers, keyframes და graph editor",
      "text animation, shape animation და transitions",
      "compositing basics, masks და effects workflow",
      "საკუთარი motion პროექტის აწყობა"
    ],
    outcomes: [
      "სოციალური ვიდეოებისთვის დინამიკური motion visuals",
      "ტექსტების და ელემენტების პროფესიონალური ანიმაცია",
      "After Effects-ში დამოუკიდებლად მუშაობის ბაზა",
      "რეალური motion showcase პორტფოლიოსთვის"
    ],
    videos: [
      { title: "Motion Preview", tag: "YouTube", text: "After Effects სტილის კონტენტი და სტუდიის ვიზუალური workflow.", href: "https://youtube.com/@artproductionkutaisi?si=7Dmht4TUdUkB4oiP" },
      { title: "Animation Reel", tag: "Instagram", text: "მოკლე animated reel და dynamic visuals.", href: "https://www.instagram.com/artproductionkutaisi?igsh=MTNzOHFnZ2F6d2ltbg==" },
      { title: "Creative Showcase", tag: "Facebook", text: "motion design-ის და creative class-ის გარემო.", href: "https://www.facebook.com/share/17hhNJJbfT/?mibextid=wwXIfr" }
    ]
  },
  "cubase": {
    category: "Music Production Course",
    title: "Cubase",
    summary: "მუსიკის პროდაქშენის პრაქტიკული კურსი: recording, arrangement, editing, routing, VST-ები და პროექტის აწყობა Cubase-ში.",
    price: "500 ₾",
    format: "ინდივიდუალური / მცირე ჯგუფი",
    duration: "10 შეხვედრა",
    badge: "C",
    sideTitle: "Cubase Studio Flow",
    sideText: "მუსიკის შექმნა იდეიდან final session-მდე.",
    coverClass: "cover-cubase",
    outcomesTitle: "რას შეისწავლი",
    includes: [
      "Cubase interface, routing, channel strip და basic mixing",
      "MIDI, audio recording და arrangement workflow",
      "VST-ების, instruments-ის და automation-ის გამოყენება",
      "პროექტის აწყობა და export სხვადასხვა ფორმატში"
    ],
    outcomes: [
      "ნულიდან საკუთარი მუსიკალური პროექტის აწყობა",
      "ჩაწერის, editing-ის და basic mix-ის დამოუკიდებლად გაკეთება",
      "სწორი studio workflow Cubase-ში",
      "final demo ან beat, რომელიც თან წაიღებ"
    ],
    videos: [
      { title: "Studio Workflow", tag: "YouTube", text: "მუსიკის შექმნის პროცესი და სტუდიური გარემო.", href: "https://youtube.com/@artproductionkutaisi?si=7Dmht4TUdUkB4oiP" },
      { title: "Beat / Session Reel", tag: "Instagram", text: "მოკლე მუსიკალური session-ები და setup კადრები.", href: "https://www.instagram.com/artproductionkutaisi?igsh=MTNzOHFnZ2F6d2ltbg==" },
      { title: "Production Preview", tag: "Facebook", text: "სტუდიის და პროდაქშენის ატმოსფეროს ვიდეოები.", href: "https://www.facebook.com/share/17hhNJJbfT/?mibextid=wwXIfr" }
    ]
  }
};

const heroSlides = [
  {
    kicker: "ART PRODUCTION | KUTAISI",
    title: "მოუსმინე, გადაიღე, ჩაწერე და ისწავლე ერთ პროფესიონალურ სივრცეში",
    description: "ვიდეო გადაღება, მუსიკალური პროდაქშენი, ხმის ჩამწერი სტუდია, პოდკასტ სივრცე და პრაქტიკული კურსები ერთ გუნდთან.",
    buttonLabel: "გაიგე მეტი",
    buttonHref: "#services",
    topTitle: "Podcast Space",
    topText: "audio + video setup",
    bottomTitle: "Mix / Master",
    bottomText: "clean studio output"
  },
  {
    kicker: "VIDEO & EVENT PRODUCTION",
    title: "შექმენი ძლიერი ვიზუალი შენი ღონისძიებისთვის, ბრენდისთვის ან სოციალური მედიისთვის",
    description: "ვიღებთ, ვამონტაჟებთ და ვამზადებთ კონტენტს Facebook, Instagram, TikTok და YouTube პლატფორმებისთვის.",
    buttonLabel: "ვიდეო სერვისები",
    buttonHref: "#services",
    topTitle: "4K Shooting",
    topText: "events + branded content",
    bottomTitle: "Fast Delivery",
    bottomText: "ready for social media"
  },
  {
    kicker: "ACADEMY & COURSES",
    title: "ისწავლე Premiere Pro, After Effects და Cubase პრაქტიკული მაგალითებით",
    description: "კურსები მორგებულია დამწყებებზე და მათზე, ვისაც სწორი workflow სჭირდება რეალურ გარემოში.",
    buttonLabel: "კურსების ნახვა",
    buttonHref: "#featured-courses",
    topTitle: "Creative Classes",
    topText: "editing + motion + audio",
    bottomTitle: "Start Learning",
    bottomText: "practical course format"
  }
];

let heroIndex = 0;

const setupMotionCanvas = () => {
  if (!motionCanvas) {
    return;
  }

  const context = motionCanvas.getContext("2d");
  if (!context) {
    return;
  }

  const pointer = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.4,
    active: false
  };

  const particleCount = window.innerWidth < 768 ? 40 : 78;
  const particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    r: 1 + Math.random() * 2.6,
    hue: Math.random() > 0.65 ? 44 : 260 + Math.random() * 30
  }));

  const resizeCanvas = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    motionCanvas.width = Math.floor(window.innerWidth * ratio);
    motionCanvas.height = Math.floor(window.innerHeight * ratio);
    motionCanvas.style.width = `${window.innerWidth}px`;
    motionCanvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const drawGrid = (time) => {
    context.save();
    context.strokeStyle = "rgba(167, 173, 255, 0.22)";
    context.lineWidth = 1;
    const gap = window.innerWidth < 768 ? 34 : 48;
    const offset = (time * 0.012) % gap;

    for (let x = -gap; x < window.innerWidth + gap; x += gap) {
      context.beginPath();
      context.moveTo(x + offset, 0);
      context.lineTo(x + offset, window.innerHeight);
      context.stroke();
    }

    for (let y = -gap; y < window.innerHeight + gap; y += gap) {
      context.beginPath();
      context.moveTo(0, y + offset * 0.35);
      context.lineTo(window.innerWidth, y + offset * 0.35);
      context.stroke();
    }
    context.restore();
  };

  const drawWaves = (time) => {
    const waves = [
      { y: window.innerHeight * 0.22, amp: 18, width: 0.014, color: "rgba(143, 98, 255, 0.48)" },
      { y: window.innerHeight * 0.56, amp: 24, width: 0.012, color: "rgba(255, 191, 50, 0.34)" },
      { y: window.innerHeight * 0.78, amp: 16, width: 0.018, color: "rgba(255, 99, 184, 0.28)" }
    ];

    waves.forEach((wave, index) => {
      context.beginPath();
      context.strokeStyle = wave.color;
        context.lineWidth = 2;
      for (let x = 0; x <= window.innerWidth; x += 8) {
        const y = wave.y + Math.sin(x * wave.width + time * 0.0012 + index) * wave.amp;
        if (x === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      }
      context.stroke();
    });
  };

  const drawPointerGlow = () => {
    const radius = pointer.active ? 220 : 160;
    const gradient = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, radius);
    gradient.addColorStop(0, "rgba(141, 111, 255, 0.42)");
    gradient.addColorStop(0.35, "rgba(255, 99, 184, 0.18)");
    gradient.addColorStop(0.55, "rgba(141, 111, 255, 0.14)");
    gradient.addColorStop(1, "rgba(141, 111, 255, 0)");
    context.fillStyle = gradient;
    context.beginPath();
    context.arc(pointer.x, pointer.y, radius, 0, Math.PI * 2);
    context.fill();
  };

  const drawParticles = () => {
    particles.forEach((particle, index) => {
      const dx = pointer.x - particle.x;
      const dy = pointer.y - particle.y;
      const distance = Math.hypot(dx, dy);
      const influence = pointer.active ? 140 : 80;

      if (distance < influence) {
        const force = (influence - distance) / influence;
        particle.vx -= (dx / (distance || 1)) * force * 0.018;
        particle.vy -= (dy / (distance || 1)) * force * 0.018;
      }

      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= 0.992;
      particle.vy *= 0.992;

      if (particle.x < -40) particle.x = window.innerWidth + 40;
      if (particle.x > window.innerWidth + 40) particle.x = -40;
      if (particle.y < -40) particle.y = window.innerHeight + 40;
      if (particle.y > window.innerHeight + 40) particle.y = -40;

      context.fillStyle = particle.hue < 100
        ? "rgba(255, 191, 50, 0.95)"
        : "rgba(145, 107, 255, 0.9)";
      context.beginPath();
      context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      context.fill();

      for (let next = index + 1; next < particles.length; next += 1) {
        const other = particles[next];
        const linkDistance = Math.hypot(particle.x - other.x, particle.y - other.y);
        if (linkDistance < 120) {
          context.strokeStyle = `rgba(164, 134, 255, ${0.24 * (1 - linkDistance / 120)})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }
    });
  };

  const drawEqualizer = (time) => {
    const bars = 20;
    const baseX = window.innerWidth - (window.innerWidth < 768 ? 150 : 230);
    const baseY = window.innerHeight - 36;
    for (let i = 0; i < bars; i += 1) {
      const height = 18 + Math.abs(Math.sin(time * 0.003 + i * 0.55)) * (window.innerWidth < 768 ? 34 : 70);
        context.fillStyle = i % 3 === 0 ? "rgba(255, 191, 50, 0.8)" : "rgba(143, 98, 255, 0.7)";
        context.fillRect(baseX + i * 9, baseY - height, 5, height);
      }
    };

  const render = (time) => {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    drawGrid(time);
    drawWaves(time);
    drawPointerGlow();
    drawParticles();
    drawEqualizer(time);
    window.requestAnimationFrame(render);
  };

  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  });

  window.addEventListener("pointerleave", () => {
    pointer.active = false;
  });

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  window.requestAnimationFrame(render);
};

document.body.classList.add("loading");

window.addEventListener("load", () => {
  window.setTimeout(() => {
    loaderScreen?.classList.add("hidden");
    document.body.classList.remove("loading");
  }, 420);
});

window.setTimeout(() => {
  loaderScreen?.classList.add("hidden");
  document.body.classList.remove("loading");
}, 2200);

setupMotionCanvas();

const renderHeroSlide = (index) => {
  const slide = heroSlides[index];
  if (!slide) {
    return;
  }

  if (heroKicker) heroKicker.textContent = slide.kicker;
  if (heroTitle) heroTitle.textContent = slide.title;
  if (heroDescription) heroDescription.textContent = slide.description;
  if (heroButton) {
    heroButton.textContent = slide.buttonLabel;
    heroButton.setAttribute("href", slide.buttonHref);
  }
  if (heroBadgeTopTitle) heroBadgeTopTitle.textContent = slide.topTitle;
  if (heroBadgeTopText) heroBadgeTopText.textContent = slide.topText;
  if (heroBadgeBottomTitle) heroBadgeBottomTitle.textContent = slide.bottomTitle;
  if (heroBadgeBottomText) heroBadgeBottomText.textContent = slide.bottomText;

  heroDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === index);
  });
};

const getPackageUrl = (slug) => `./package-detail.html?item=${slug}`;

const setupPackageLinks = () => {
  document.querySelectorAll("[data-package-link]").forEach((card) => {
    const slug = card.getAttribute("data-package-link");
    if (!slug) {
      return;
    }

    card.style.cursor = "pointer";

    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) {
        return;
      }
      window.location.href = getPackageUrl(slug);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = getPackageUrl(slug);
      }
    });
  });
};

const renderPackageDetail = () => {
  const titleNode = document.querySelector("[data-package-title]");
  if (!titleNode) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const activeKey = packageCatalog[params.get("item")] ? params.get("item") : "recording";
  const pkg = packageCatalog[activeKey];

  document.title = `Art Production | ${pkg.title}`;

  const categoryNode = document.querySelector("[data-package-category]");
  const summaryNode = document.querySelector("[data-package-summary]");
  const priceNode = document.querySelector("[data-package-price]");
  const formatNode = document.querySelector("[data-package-format]");
  const durationNode = document.querySelector("[data-package-duration]");
  const badgeNode = document.querySelector("[data-package-badge]");
  const sideTitleNode = document.querySelector("[data-package-side-title]");
  const sideTextNode = document.querySelector("[data-package-side-text]");
  const coverNode = document.querySelector("[data-package-cover]");
  const includesNode = document.querySelector("[data-package-includes]");
  const outcomesNode = document.querySelector("[data-package-outcomes]");
  const outcomesTitleNode = document.querySelector("[data-package-outcomes-title]");
  const videosNode = document.querySelector("[data-package-videos]");
  const ctaNode = document.querySelector("[data-package-cta]");

  if (categoryNode) categoryNode.textContent = pkg.category;
  titleNode.textContent = pkg.title;
  if (summaryNode) summaryNode.textContent = pkg.summary;
  if (priceNode) priceNode.textContent = pkg.price;
  if (formatNode) formatNode.textContent = pkg.format;
  if (durationNode) durationNode.textContent = pkg.duration;
  if (badgeNode) badgeNode.textContent = pkg.badge;
  if (sideTitleNode) sideTitleNode.textContent = pkg.sideTitle;
  if (sideTextNode) sideTextNode.textContent = pkg.sideText;
  if (outcomesTitleNode) outcomesTitleNode.textContent = pkg.outcomesTitle;
  if (ctaNode) ctaNode.textContent = pkg.outcomesTitle === "რას შეისწავლი" ? "ჩაწერა კურსზე" : "შეკვეთა / ჩაწერა";

  if (coverNode) {
    coverNode.className = `detail-side-media ${pkg.coverClass}`;
    const embedQuery = encodeURIComponent(`${pkg.title} Art Production Kutaisi`);
    coverNode.innerHTML = `
<iframe width="560" height="315" src="https://www.youtube.com/embed/6Myljc0Mzkw?si=HccaNrCfL_eV6Blr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div class="detail-side-badge">${pkg.badge}</div>
    `;
  }

  if (includesNode) {
    includesNode.innerHTML = pkg.includes.map((item) => `<li>${item}</li>`).join("");
  }

  if (outcomesNode) {
    outcomesNode.innerHTML = pkg.outcomes.map((item) => `<li>${item}</li>`).join("");
  }

  if (videosNode) {
    videosNode.innerHTML = pkg.videos.map((video, index) => `
      <a class="detail-video-card" href="${video.href}" target="_blank" rel="noreferrer">
        <div class="detail-video-cover ${pkg.coverClass}">
          <span class="detail-video-tag">${video.tag}</span>
          <span class="detail-video-play">${index + 1}</span>
        </div>
        <div class="detail-video-body">
          <h3>${video.title}</h3>
          <p>${video.text}</p>
        </div>
      </a>
    `).join("");
  }
};

setupPackageLinks();
renderPackageDetail();

const moveHeroSlide = (direction) => {
  heroIndex = (heroIndex + direction + heroSlides.length) % heroSlides.length;
  renderHeroSlide(heroIndex);
};

renderHeroSlide(heroIndex);

heroPrevButton?.addEventListener("click", () => moveHeroSlide(-1));
heroNextButton?.addEventListener("click", () => moveHeroSlide(1));

heroDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    heroIndex = index;
    renderHeroSlide(heroIndex);
  });
});

window.setInterval(() => {
  moveHeroSlide(1);
}, 5500);

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav?.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

const scrollCourses = (direction) => {
  if (!courseSlider) {
    return;
  }

  const firstCard = courseSlider.querySelector(".course-showcase-card");
  const cardWidth = firstCard ? firstCard.getBoundingClientRect().width + 24 : 340;

  courseSlider.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth"
  });
};

coursePrevButton?.addEventListener("click", () => scrollCourses(-1));
courseNextButton?.addEventListener("click", () => scrollCourses(1));

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");
    const target = hash && document.querySelector(hash);
    if (!target) {
      return;
    }
    event.preventDefault();
    mainNav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
