/**
 * PacketCare Product Configuration & Content Data
 * Streamlined, high-visual data tailored for Parents & RHU Staff.
 */

export const PACKETCARE_CONFIG = {
  appName: "PacketCare",
  appSubtitle: "Child Immunization Tracking System",
  tagline: "Never Miss a Dose. Protecting Every Child's Health.",
  description: "Automated SMS reminders and digital Bakuna cards for Parents and Rural Health Unit (RHU) workers. Always on time, even offline.",
  version: "v1.0.0",
  buildNumber: "1",
  fileSize: "56.2 MB",
  rawFileSizeBytes: 58956713,
  releaseDate: "October 2026",
  minAndroid: "Android 8.0+",
  targetPlatform: "Android (ARM64 & ARMv7)",
  fileFormat: "APK Installer",
  packageId: "com.paketcare.paket_care",
  downloadUrl: "/downloads/packetcare.apk",
  fileName: "packetcare.apk",
  checksum: "SHA-256 Verified Official Build",
  supportEmail: "support@packetcare.gov.ph",
  demoAccounts: [
    {
      role: "Parent View",
      email: "maria@email.com",
      password: "password123",
      description: "Digital Bakuna card, countdowns, and automated SMS alerts."
    },
    {
      role: "RHU Staff View",
      email: "ana.bhw@email.com",
      password: "password123",
      description: "Child registry, overdue defaulters, and 1-click SMS dispatch."
    }
  ]
};

export const LIVE_STATS = [
  {
    value: "100%",
    label: "DOH EPI Standard",
    subtext: "13 Routine doses from birth to 1 yr",
    pill: "Birth to 12 Mos",
    pillColor: "text-care-400 bg-care-950/80 border-care-800"
  },
  {
    value: "Direct SMS",
    label: "Automated Alerts",
    subtext: "Reaches parents with zero mobile data",
    pill: "Semaphore SMS",
    pillColor: "text-amber-400 bg-amber-950/80 border-amber-800"
  },
  {
    value: "28-Day",
    label: "Interval Safety",
    subtext: "Multi-dose interval enforcement",
    pill: "WHO / DOH Rule",
    pillColor: "text-indigo-400 bg-indigo-950/80 border-indigo-800"
  },
  {
    value: "100% Offline",
    label: "Field Recording",
    subtext: "Zero lost data in off-grid sitios",
    pill: "No Signal Needed",
    pillColor: "text-emerald-400 bg-emerald-950/80 border-emerald-800"
  }
];

export const KEY_FEATURES = [
  {
    id: "digital_bakuna",
    title: "Digital Bakuna Card",
    shortDesc: "Permanent electronic immunization card on mobile with verified dose stamps.",
    category: "Parent View",
    badge: "Parent Portal",
    iconName: "FileCheck2",
    visualType: "card_badge",
    preview: {
      name: "Baby Lucas Santos",
      status: "Verified",
      dosesCompleted: 6,
      totalDoses: 13
    }
  },
  {
    id: "sms_alerts",
    title: "Automated SMS Reminders",
    shortDesc: "Dispatched 7 days and 1 day before clinic day. Requires zero data or Wi-Fi.",
    category: "Parent View",
    badge: "Parent Portal",
    iconName: "MessageSquare",
    visualType: "sms_bubble",
    preview: {
      from: "PacketCare SMS",
      text: "Reminder: Pentavalent 3 due on Oct 19 at Poblacion Health Center.",
      time: "9:00 AM"
    }
  },
  {
    id: "dose_timeline",
    title: "Milestone Timeline",
    shortDesc: "Visual progress categorized into Completed, Due in 7 Days, and Upcoming.",
    category: "Parent View",
    badge: "Parent Portal",
    iconName: "Baby",
    visualType: "timeline_bars",
    preview: {
      completed: 6,
      due: 1,
      upcoming: 6
    }
  },
  {
    id: "child_switcher",
    title: "Multi-Child Profiles",
    shortDesc: "Switch between registered children in a single tap for families with toddlers.",
    category: "Parent View",
    badge: "Parent Portal",
    iconName: "Users",
    visualType: "child_pills",
    preview: {
      active: "Lucas (3m)",
      sibling: "Chloe (9m)"
    }
  },
  {
    id: "rhu_registry",
    title: "Child Masterlist",
    shortDesc: "Filter community infants by Barangay and Purok. No fragile paper ledgers.",
    category: "RHU View",
    badge: "RHU Healthcare View",
    iconName: "ClipboardList",
    visualType: "registry_table",
    preview: {
      purok: "Purok 3",
      registered: 148,
      onTrack: 141
    }
  },
  {
    id: "defaulter_tracking",
    title: "Defaulter Detection",
    shortDesc: "Instantly flags missed appointment windows for immediate follow-up.",
    category: "RHU View",
    badge: "RHU Healthcare View",
    iconName: "AlertTriangle",
    visualType: "overdue_pill",
    preview: {
      overdueChild: "Sofia Ramos",
      overdueDays: "9 Days Overdue",
      vaccine: "PCV Dose 2"
    }
  },
  {
    id: "one_click_sms",
    title: "1-Click SMS Follow-Up",
    shortDesc: "Dispatch pre-filled reminders directly to guardians with one tap.",
    category: "RHU View",
    badge: "RHU Healthcare View",
    iconName: "Send",
    visualType: "dispatch_btn",
    preview: {
      action: "Send SMS Alert",
      target: "+63 917 842 1993"
    }
  },
  {
    id: "offline_visits",
    title: "Offline Field Mode",
    shortDesc: "Record administered doses in mountain and coastal sitios without signal.",
    category: "RHU View",
    badge: "RHU Healthcare View",
    iconName: "WifiOff",
    visualType: "offline_badge",
    preview: {
      status: "Offline Ready",
      queueCount: "0 pending"
    }
  }
];

export const WORKFLOW_STEPS = [
  {
    step: 1,
    title: "Register Child",
    tagline: "Instant DOH Schedule",
    description: "Enter birth date to auto-compute all 13 routine vaccine milestones.",
    metric: "< 60s",
    metricLabel: "Auto-generated",
    iconName: "UserPlus"
  },
  {
    step: 2,
    title: "Receive SMS",
    tagline: "Automated Reminders",
    description: "SMS sent 7 days and 1 day prior to clinic day—no internet needed.",
    metric: "0 Data",
    metricLabel: "Cellular SMS",
    iconName: "BellRing"
  },
  {
    step: 3,
    title: "Administer & Log",
    tagline: "Field Recording",
    description: "Health worker logs vaccine on the spot, even in off-grid sitios.",
    metric: "100%",
    metricLabel: "Offline Capture",
    iconName: "Syringe"
  },
  {
    step: 4,
    title: "Track Defaulters",
    tagline: "1-Click Follow-Up",
    description: "Missed doses are flagged immediately for quick 1-click SMS outreach.",
    metric: "Instant",
    metricLabel: "Alert Trigger",
    iconName: "ShieldAlert"
  }
];

export const DOH_EPI_MILESTONES = [
  {
    id: "birth",
    age: "At Birth",
    ageLabel: "Day 0",
    description: "Crucial first-line defense against tuberculosis and vertical hepatitis B transmission.",
    vaccines: [
      {
        name: "BCG Vaccine",
        dose: "Single Dose",
        disease: "Tuberculosis (TB Meningitis)",
        route: "Intradermal (Right Arm)",
        tag: "Essential Newborn Care"
      },
      {
        name: "Hepatitis B",
        dose: "Birth Dose (< 24h)",
        disease: "Hepatitis B Liver Infection",
        route: "Intramuscular (Thigh)",
        tag: "Immediate Protection"
      }
    ]
  },
  {
    id: "6weeks",
    age: "6 Weeks",
    ageLabel: "1.5 Months",
    description: "First multi-antigen series building essential pediatric immunity.",
    vaccines: [
      {
        name: "Pentavalent (DPT-HepB-Hib)",
        dose: "Dose 1 of 3",
        disease: "Diphtheria, Pertussis, Tetanus, Hep B, Hib",
        route: "Intramuscular (Thigh)",
        tag: "5-in-1 Combo"
      },
      {
        name: "OPV (Oral Polio)",
        dose: "Dose 1 of 3",
        disease: "Poliomyelitis (Paralysis)",
        route: "Oral Drops",
        tag: "2 Drops"
      },
      {
        name: "PCV (Pneumococcal)",
        dose: "Dose 1 of 3",
        disease: "Pneumonia & Meningitis",
        route: "Intramuscular (Thigh)",
        tag: "Respiratory Guard"
      }
    ]
  },
  {
    id: "10weeks",
    age: "10 Weeks",
    ageLabel: "2.5 Months",
    description: "Second series booster administered at least 28 days after first doses.",
    vaccines: [
      {
        name: "Pentavalent (DPT-HepB-Hib)",
        dose: "Dose 2 of 3",
        disease: "Diphtheria, Pertussis, Tetanus, Hep B, Hib",
        route: "Intramuscular (Thigh)",
        tag: "28-Day Interval Passed"
      },
      {
        name: "OPV (Oral Polio)",
        dose: "Dose 2 of 3",
        disease: "Poliomyelitis",
        route: "Oral Drops",
        tag: "2 Drops"
      },
      {
        name: "PCV (Pneumococcal)",
        dose: "Dose 2 of 3",
        disease: "Pneumonia & Bacteremia",
        route: "Intramuscular (Thigh)",
        tag: "Booster Dose"
      }
    ]
  },
  {
    id: "14weeks",
    age: "14 Weeks",
    ageLabel: "3.5 Months",
    description: "Completes primary polio & pentavalent series including injectable polio (IPV).",
    vaccines: [
      {
        name: "Pentavalent (DPT-HepB-Hib)",
        dose: "Dose 3 of 3",
        disease: "Diphtheria, Pertussis, Tetanus, Hep B, Hib",
        route: "Intramuscular (Thigh)",
        tag: "Primary Series Complete"
      },
      {
        name: "OPV (Oral Polio)",
        dose: "Dose 3 of 3",
        disease: "Poliomyelitis",
        route: "Oral Drops",
        tag: "2 Drops"
      },
      {
        name: "IPV (Inactivated Polio)",
        dose: "Single Dose",
        disease: "Polio Systemic Immunity",
        route: "Intramuscular (Thigh)",
        tag: "Injectable Booster"
      },
      {
        name: "PCV (Pneumococcal)",
        dose: "Dose 3 of 3",
        disease: "Pneumonia Protection",
        route: "Intramuscular (Thigh)",
        tag: "Primary Series Complete"
      }
    ]
  },
  {
    id: "9months",
    age: "9 Months",
    ageLabel: "36 Weeks",
    description: "First dose of measles, mumps, and rubella to complete infancy immunization.",
    vaccines: [
      {
        name: "MMR (Measles-Mumps-Rubella)",
        dose: "Dose 1 of 2",
        disease: "Measles, Mumps & Rubella",
        route: "Subcutaneous (Upper Arm)",
        tag: "Measles Defense"
      }
    ]
  }
];

export const USER_ROLES = [
  {
    id: "parent",
    roleName: "Parent View",
    badge: "Family Peace of Mind",
    tagline: "Digital Bakuna card & SMS alerts on your phone",
    iconName: "Baby",
    accentColor: "from-care-500 to-indigo-600",
    visualMetrics: [
      { label: "Bakuna Status", val: "100% Digital", color: "text-emerald-400" },
      { label: "Reminder Channel", val: "Direct SMS", color: "text-amber-400" },
      { label: "Child Switcher", val: "Multi-Child", color: "text-care-400" }
    ],
    highlights: [
      "Digital Bakuna Card with verified completion stamps",
      "Automated SMS text alerts 7d & 1d before clinic visits",
      "Color-coded visual timeline (Completed, Due, Upcoming)",
      "Instant multi-child profile switcher"
    ]
  },
  {
    id: "rhu",
    roleName: "RHU Healthcare View",
    badge: "Frontline Health Workers",
    tagline: "Track community infants & contact defaulters",
    iconName: "ShieldPlus",
    accentColor: "from-emerald-500 to-teal-600",
    visualMetrics: [
      { label: "Field Mode", val: "Offline SQLite", color: "text-emerald-400" },
      { label: "Defaulter Detection", val: "Automatic", color: "text-rose-400" },
      { label: "Outreach Tool", val: "1-Click SMS", color: "text-care-400" }
    ],
    highlights: [
      "Offline recording for remote sitios without signal",
      "Automated defaulter list highlighting missed appointments",
      "1-Click SMS reminder dispatch to parents' mobile phones",
      "Child masterlist filterable by Barangay and Purok"
    ]
  }
];

export const FAQS = [
  {
    question: "What does the Parent View show?",
    answer: "A digital Bakuna card showing completed, due, and upcoming vaccines with automatic SMS reminders 7 days and 1 day prior to clinic day. No mobile data or internet is needed to receive SMS."
  },
  {
    question: "What does the RHU View do?",
    answer: "Provides a community child registry by barangay/purok, automatically flags infants with missed appointments as defaulters, and lets health workers dispatch 1-click SMS reminders."
  },
  {
    question: "Does it work without internet or signal in remote sitios?",
    answer: "Yes. RHU health workers can record visits and register infants offline. When parents need reminders, PacketCare uses cellular SMS text messages that reach standard keypad phones."
  },
  {
    question: "How do I install the Android APK?",
    answer: "Tap 'Download APK', open packetcare.apk on your Android phone, allow 'Install Unknown Apps' if prompted, tap 'Install', and sign in with the ready demo accounts."
  }
];
