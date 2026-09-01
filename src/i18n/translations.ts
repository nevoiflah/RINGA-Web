export type Lang = "he" | "en";

export const STORE_LINKS = {
  appStore: "https://apps.apple.com/il/app/ringa-app/id6757655133",
  googlePlay: "https://play.google.com/store/apps/details?id=com.ringa.app",
  contact: "mailto:ringatestuser@gmail.com",
} as const;

type Feature = { icon: string; title: string; desc: string };
type Step = { title: string; desc: string };
type SceneCopy = { n: string; eyebrow: string; title: string; desc: string };

export type Dict = {
  meta: { title: string };
  nav: { features: string; how: string; download: string };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    accent: string;
    sub: string;
    scroll: string;
  };
  badges: {
    appStoreSub: string;
    appStoreName: string;
    playSub: string;
    playName: string;
    comingSoon: string;
  };
  features: { eyebrow: string; title: string; sub: string; items: Feature[] };
  steps: { eyebrow: string; title: string; sub: string; items: Step[] };
  privacy: { title1: string; title2: string; body: string; link: string };
  cta: { title1: string; title2: string; body: string };
  story: {
    scenes: {
      radar: SceneCopy;
      rooms: SceneCopy;
      delay: SceneCopy;
      chat: SceneCopy;
      ghost: SceneCopy;
    };
    labels: {
      scanning: string;
      nearby: string;
      roomName: string;
      arrivesIn: string;
      firstMessage: string;
      replyThem: string;
      replyMe: string;
      online: string;
      ghostMode: string;
      zoneHome: string;
      zoneWork: string;
      moderated: string;
      you: string;
    };
  };
  footer: { privacy: string; terms: string; contact: string; copy: string };
};

export const translations: Record<Lang, Dict> = {
  he: {
    meta: { title: "RINGA — פגוש אנשים בקרבתך" },
    nav: { features: "פיצ'רים", how: "איך זה עובד", download: "הורד עכשיו" },
    hero: {
      badge: "בקרוב ב-iOS וב-Android",
      titleLine1: "גלה מי נמצא",
      titleLine2: "סביבך",
      accent: "ממש עכשיו.",
      sub: "RINGA מראה לך אנשים אמיתיים שנמצאים עד 200 מטר ממך — בבית הקפה, בבר, או בכל מקום שאתה נמצא.",
      scroll: "גלול למטה",
    },
    badges: {
      appStoreSub: "הורד מ-",
      appStoreName: "App Store",
      playSub: "הורד מ-",
      playName: "Google Play",
      comingSoon: "בקרוב",
    },
    features: {
      eyebrow: "פיצ'רים",
      title: "הכל כאן. לשם כך בנינו את זה.",
      sub: "פרטיות, ביטחון, וחיבורים אמיתיים — ברגע שבו הם קורים.",
      items: [
        {
          icon: "radar",
          title: 'מכ"ם קרבה חי',
          desc: "ראה מי נמצא בטווח של 75–200 מטר ממך בזמן אמת. אם הם מופיעים — הם באמת שם.",
        },
        {
          icon: "timer",
          title: "עיכוב הודעה ראשונה",
          desc: "בחר כמה זמן ההודעה הראשונה שלך תחכה — עד 8 שעות. מפחית לחץ ומונע הטרדות.",
        },
        {
          icon: "ghost",
          title: "מצב רוח רפאים",
          desc: 'היעלם מהמכ"ם של כולם בלחיצה אחת. המיקום שלך נשאר לגמרי פרטי.',
        },
        {
          icon: "pin",
          title: "אזורי רוח רפאים",
          desc: "סמן מקומות כמו הבית או העבודה שבהם אתה תמיד בלתי נראה — באופן אוטומטי.",
        },
        {
          icon: "chat",
          title: "צ'אט בזמן אמת",
          desc: "לאחר חיבור, הודעות מגיעות מיידית. שיחות לא פעילות נמחקות כדי לשמור על רענון.",
        },
        {
          icon: "shield",
          title: "מודרציה חכמה",
          desc: "הודעות ראשונות לא הולמות מסוננות אוטומטית. הביטחון שלך הוא העדיפות שלנו.",
        },
      ],
    },
    steps: {
      eyebrow: "איך זה עובד",
      title: "שלושה צעדים פשוטים",
      sub: "מהורדה לחיבור — תוך דקות.",
      items: [
        {
          title: 'פתח את המכ"ם שלך',
          desc: 'הפעל את RINGA וראה מי נמצא פיזית בקרבתך על המכ"ם האישי שלך — בזמן אמת.',
        },
        {
          title: "עיין בפרופילים",
          desc: "גלה פרופילים של אנשים שנמצאים ממש סביבך עכשיו — לא קילומטרים רחוק.",
        },
        {
          title: "שלח הודעה",
          desc: "שבור את הקרח. ההודעה הראשונה מגיעה לאחר עיכוב קצר שאתה בוחר — ואז הכל בזמן אמת.",
        },
      ],
    },
    privacy: {
      title1: "הפרטיות שלך,",
      title2: "הכללים שלך",
      body: "המיקום המדויק שלך לא נחשף לאף אחד. רק המרחק המשוער ממך מוצג. מצב רוח רפאים ואזורי רוח רפאים נותנים לך שליטה מוחלטת — תמיד.",
      link: "קרא את מדיניות הפרטיות ←",
    },
    cta: {
      title1: "מוכן לפגוש",
      title2: "מישהו בקרבתך?",
      body: "הורד את RINGA וראה מי נמצא סביבך — עכשיו.",
    },
    story: {
      scenes: {
        radar: {
          n: "01",
          eyebrow: 'מכ"ם חי',
          title: "ראה מי באמת סביבך",
          desc: 'RINGA סורק 75–200 מ׳ ומראה אנשים אמיתיים בקרבתך — ואז מתכווץ אל המסך הראשי כתזכורת חיה.',
        },
        rooms: {
          n: "02",
          eyebrow: "חדרים",
          title: "המעגל הפרטי שלך",
          desc: "צור חדר, שתף קוד, ורק מי שתזמין יופיע על המכ\"ם שלך.",
        },
        delay: {
          n: "03",
          eyebrow: "הודעה ראשונה מושהית",
          title: "ההודעה הראשונה מחכה",
          desc: "אתה בוחר השהיה — עד 8 שעות. בלי לחץ, בלי ספאם, רק כוונה אמיתית.",
        },
        chat: {
          n: "04",
          eyebrow: "צ׳אט בזמן אמת",
          title: "ואז זה פשוט זורם",
          desc: "ברגע שההודעה נוחתת, הכל מיידי. שיחות שקטות נמחקות מעצמן.",
        },
        ghost: {
          n: "05",
          eyebrow: "פרטיות וביטחון",
          title: "היעלם מתי שתרצה",
          desc: "מצב רוח רפאים בלחיצה, אזורים שבהם אתה תמיד בלתי נראה, ומודרציה שמסננת הודעות פוגעניות.",
        },
      },
      labels: {
        scanning: "סורק…",
        nearby: "בקרבתך",
        roomName: "חדר RINGA",
        arrivesIn: "מגיעה בעוד",
        firstMessage: "היי — אתה ממש בקרבת מקום 👀",
        replyThem: "חחח כנראה. קפה?",
        replyMe: "בעניין. 10 דקות?",
        online: "מחובר",
        ghostMode: "מצב רפאים פעיל",
        zoneHome: "בית",
        zoneWork: "עבודה",
        moderated: "סונן",
        you: "אתה",
      },
    },
    footer: {
      privacy: "מדיניות פרטיות",
      terms: "תנאי שימוש",
      contact: "צור קשר",
      copy: "© 2025 Shalev Dabush. כל הזכויות שמורות.",
    },
  },

  en: {
    meta: { title: "RINGA — Meet People Nearby" },
    nav: { features: "Features", how: "How it works", download: "Download" },
    hero: {
      badge: "Coming soon on iOS & Android",
      titleLine1: "Discover who's",
      titleLine2: "around you",
      accent: "right now.",
      sub: "RINGA shows you real people within 200 meters of you — at your café, bar, or wherever you are. No swiping through strangers miles away.",
      scroll: "Scroll down",
    },
    badges: {
      appStoreSub: "Download on the",
      appStoreName: "App Store",
      playSub: "Get it on",
      playName: "Google Play",
      comingSoon: "Coming soon",
    },
    features: {
      eyebrow: "Features",
      title: "Everything you need, nothing you don't.",
      sub: "Privacy, safety, and real connections — at the moment they happen.",
      items: [
        {
          icon: "radar",
          title: "Live Proximity Radar",
          desc: "See who's within 75–200 meters of you in real time. If they appear on your radar, they're actually there.",
        },
        {
          icon: "timer",
          title: "Message Delay",
          desc: "Choose how long your first message waits — up to 8 hours. Reduces pressure and unwanted contact.",
        },
        {
          icon: "ghost",
          title: "Ghost Mode",
          desc: "Instantly disappear from everyone's radar with one tap. Your location stays completely private.",
        },
        {
          icon: "pin",
          title: "Ghost Zones",
          desc: "Mark places like your home or workplace where you're always invisible — automatically.",
        },
        {
          icon: "chat",
          title: "Real-Time Chat",
          desc: "Once connected, messages flow instantly. Inactive chats auto-delete to keep things fresh.",
        },
        {
          icon: "shield",
          title: "Content Moderation",
          desc: "Inappropriate first messages are filtered automatically. Your safety is our priority.",
        },
      ],
    },
    steps: {
      eyebrow: "How it works",
      title: "Three simple steps",
      sub: "From download to connection in minutes.",
      items: [
        {
          title: "Open your radar",
          desc: "Launch RINGA and see who's physically nearby on your personal proximity radar in real time.",
        },
        {
          title: "Browse profiles",
          desc: "Explore profiles of people who are actually around you right now — not miles away.",
        },
        {
          title: "Send a message",
          desc: "Break the ice. Your first message arrives after a short delay you choose — then it's real-time from there.",
        },
      ],
    },
    privacy: {
      title1: "Your privacy,",
      title2: "your rules",
      body: "Your exact location is never shared with anyone. Only your approximate distance is visible. Ghost Mode and Ghost Zones give you full control — always.",
      link: "Read our Privacy Policy →",
    },
    cta: {
      title1: "Ready to meet",
      title2: "someone nearby?",
      body: "Download RINGA and see who's around you right now.",
    },
    story: {
      scenes: {
        radar: {
          n: "01",
          eyebrow: "Live radar",
          title: "See who's actually around you",
          desc: "RINGA scans 75–200m and surfaces real people nearby — then shrinks into your home screen as a Live Activity.",
        },
        rooms: {
          n: "02",
          eyebrow: "Rooms",
          title: "Your own private circle",
          desc: "Spin up a room, share a code, and only the people you invite show up on your radar.",
        },
        delay: {
          n: "03",
          eyebrow: "Delayed first message",
          title: "Your first message waits",
          desc: "You pick the delay — up to 8 hours. No pressure, no spam, just real intention.",
        },
        chat: {
          n: "04",
          eyebrow: "Real-time chat",
          title: "Then it just flows",
          desc: "Once it lands, messages are instant. Quiet chats quietly fade away on their own.",
        },
        ghost: {
          n: "05",
          eyebrow: "Privacy & safety",
          title: "Disappear at will",
          desc: "Vanish in a tap, set zones where you're always invisible, and let moderation screen out anything harmful.",
        },
      },
      labels: {
        scanning: "Scanning…",
        nearby: "nearby",
        roomName: "RINGA Room",
        arrivesIn: "Arrives in",
        firstMessage: "Hey — you're right nearby 👀",
        replyThem: "Ha, looks like it. Coffee?",
        replyMe: "I'm in. 10 min?",
        online: "online",
        ghostMode: "Ghost Mode on",
        zoneHome: "Home",
        zoneWork: "Work",
        moderated: "filtered",
        you: "You",
      },
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      contact: "Contact",
      copy: "© 2025 Shalev Dabush. All rights reserved.",
    },
  },
};
