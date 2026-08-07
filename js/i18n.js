/**
 * @file i18n.js
 * @description Dual-language translation dictionary (EN Primary, DE Secondary)
 * Tailored for David Sommerer (Electrical & Systems Engineer).
 */

export const translations = {
  en: {
    // Navigation & General
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience & Education",
    back_overview: "← Back to Overview",

    // Hero Section
    hero_greeting: "Hi, I'm",
    hero_name: "David Sommerer!",
    hero_role_prefix: "I'm an",
    hero_role: "Electrical & Systems Engineer",
    hero_specializing: "specializing in",
    hero_focus: "Embedded C++, Controls & Autonomous Systems.",
    hero_subtitle: "Student at HTL Elektrotechnik Salzburg. Building embedded micro-architecture, AI-driven autonomous RC cars, 6DoF simulators, and control systems.",
    hero_cta_projects: "Explore Projects",
    hero_cta_contact: "Direct Contact",

    // Oscilloscope Hero Card (Right)
    sig_card_title: "oscilloscope & signal monitor",
    sig_card_sub: "ch1: pwm_actuator_out",
    sig_mode_hover: "ACTIVE",
    sig_mode_transition: "PWM SYNC",
    sig_ch1_lbl: "CH1 Servo Out",
    sig_ch1_val: "1500 µs (0.0°)",
    sig_ch2_lbl: "CH2 Motor PWM",
    sig_ch2_val: "1620 µs (42%)",
    sig_ch3_lbl: "MCU Clock Rate",
    sig_ch3_val: "480 MHz FPU",
    sig_ch4_lbl: "Bus Topology",
    sig_ch4_val: "CAN / DroneCAN",
    sig_status: "pwm output synced · 10 kHz hardware timer · zero jitter",

    // 3 Quick Cards Below Hero
    card1_title: "Education & Schooling",
    card1_role1: "HTL Elektrotechnik Salzburg",
    card1_date1: "Higher Technical Institute • 2022 - 2027",
    card1_role2: "Diplomarbeit R&D Project",
    card1_date2: "Electrical Engineering Systems • 2025 - 2026",
    card1_role3: "Specialization",
    card1_date3: "Embedded Software, CAD & Automation",

    card2_title: "Featured Projects",
    card2_topic1: "Crazy Car Autonomous RL",
    card2_desc1: "RC car rebuilt with MCU & servos, AI trained in Unity ML-Agents.",
    card2_topic2: "6DoF Driving Simulator",
    card2_desc2: "6 Degrees-of-Freedom motion platform with real-time inverse kinematics.",
    card2_topic3: "Tri-Tilt-Rotor SAR VTOL",
    card2_desc3: "Heavy-lift Search & Rescue tilt-rotor vehicle concept.",

    card3_handle: "currently learning",
    card3_topic1: "ROS2 & Gazebo",
    card3_topic2: "STM32H7 & PX4",
    card3_topic3: "Simulink & DroneCAN",
    card3_topic4: "Nvidia Jetson",

    // Experience & Education Section (SPLIT LAYOUT)
    exp_heading: "work experience & education",
    exp_sub: "Industrial engineering internships, municipal power grid calculations, custom switchgear manufacturing, and hands-on workshop fabrication.",

    // Work Experience Split
    work_heading: "Practical Work Experience",

    intern_1_title: "Electrical Grid Planning & Calculation Intern",
    intern_1_company: "Salzburg AG (Municipal Power Grid Operator)",
    intern_1_date: "Summer 2026 • 4 Weeks",
    intern_1_b1: "Utilized NEPlan power analytics software to perform complex power flow & grid capacity calculations across the city distribution network.",
    intern_1_b2: "Planned new electrical switching states and executed short-circuit (Ik'') and earth-fault current calculations for network safety.",
    intern_1_b3: "Assisted senior grid engineers in optimizing municipal transformer substation configurations.",

    intern_2_title: "Industrial Switchgear & Fuse Box Engineering Intern",
    intern_2_company: "ERA - Elektrotechnik Ramsauer GmbH",
    intern_2_date: "Summer 2025 • 4 Weeks",
    intern_2_b1: "Independently built and wired large-scale industrial fuse boxes, main distribution switchgear, and control cabinets.",
    intern_2_b2: "Constructed high-power electrical distribution assemblies tailored for major industrial companies across Austria.",
    intern_2_b3: "Performed busbar bending, DIN rail component assembly, thermal load planning, and rigorous continuity testing.",

    // Education & Workshop Split
    edu_heading: "Education & Workshop Fabrication Skills",

    edu_1_title: "HTL Elektrotechnik Salzburg",
    edu_1_subtitle: "Higher Technical Institute for Electrical Engineering • 2022 - 2027",
    edu_1_desc: "5-year intensive engineering program covering power systems, control engineering, embedded C/C++, CAD design, and automation technology.",

    workshop_title: "Hands-on Workshop & Manufacturing Competencies",
    ws_1: "Welding (MIG/MAG/TIG)",
    ws_2: "TNC 640 CNC Machining",
    ws_3: "Precision Drilling & Milling",
    ws_4: "Polishing & Metalworking",
    ws_5: "3D Printing & FDM Prototyping",
    ws_6: "High-Voltage Electrical Wiring",
    ws_7: "SMD & Through-Hole Soldering",
    ws_8: "Custom PCB Design (KiCad)",
    ws_9: "Systemic Troubleshooting",

    // Technical Skills Section
    skills_title: "technical skills & stack",
    skills_sub: "Software, embedded microcontrollers, CAD tools, and AI technologies I work with daily alongside active learning for upcoming projects.",

    skills_cat1: "Languages & Microcontrollers",
    skills_cat2: "CAD, Simulation & Software",
    skills_cat3: "AI Tools & Workflow",
    skills_cat4: "Currently Learning for Projects",

    // Projects Section
    projects_title: "featured engineering projects",
    projects_sub: "Fully documented engineering projects featuring AI reinforcement learning, 6DoF motion simulation, high-performance parsers, and custom embedded hardware.",

    filter_all: "All Systems",
    filter_ai: "AI & Autonomy",
    filter_lowlevel: "Embedded C/C++",
    filter_hardware: "Hardware & Sim",

    // Project 1
    proj1_title: "Crazy Car: Autonomous AI/RL RC Car",
    proj1_desc: "Rebuilt an RC car with microcontrollers and custom servo steering. Trained a Reinforcement Learning (RL) AI agent in Unity ML-Agents to navigate complex tracks autonomously.",
    proj1_b1: "Overhauled stock RC vehicle chassis with custom microcontroller hardware and precision steering servo feedback.",
    proj1_b2: "Constructed 3D track simulation environment in Unity using ML-Agents for neural network reward optimization.",
    proj1_b3: "Deployed trained AI policy models onto onboard hardware for real-world autonomous obstacle avoidance.",

    // Project 2
    proj2_title: "6DoF Dynamic Driving Simulator",
    proj2_desc: "Custom 6 Degrees-of-Freedom motion platform designed for immersive driving simulation with real-time kinematic calculations and multi-axis motor actuation.",
    proj2_b1: "Calculated Denavit-Hartenberg inverse kinematics for 6 linear actuators running in real time.",
    proj2_b2: "Designed CAD mechanical frame assembly in SolidEdge with Ansys stress analysis.",
    proj2_b3: "Wrote high-speed motor control firmware over CAN bus interface with smooth motion profiling.",

    // Project 3
    proj3_title: "EDI-to-JSONL High-Performance Parser",
    proj3_desc: "Zero-allocation C++20 streaming engine parsing multi-gigabyte industrial EDI files into structured JSONL data.",
    proj3_b1: "Achieved 2.4 GB/s streaming throughput via POSIX memory mapping (mmap) and string_view token evaluation.",
    proj3_b2: "Eliminated dynamic heap allocation in hot processing loops, bounding memory overhead to O(1).",
    proj3_b3: "Engineered lock-free ring buffer queue for SIMD-accelerated multi-threaded batch output.",

    // Project 4
    proj4_title: "Tri-Tilt-Rotor SAR VTOL Platform",
    proj4_desc: "Heavy-lift Search and Rescue tilt-rotor vehicle concept featuring failsafe ROS2 swarm nodes and custom dual-battery redundancy.",
    proj4_b1: "Designed dual-redundant battery failover circuitry with zero voltage drop switching (<5µs MOS-FET latching).",
    proj4_b2: "Developed C++ flight node calculating real-time vector transition matrices for 90° tilt-rotors.",
    proj4_b3: "Structured SORA SAIL II safety documentation for AustroControl compliance.",

    // Project 5
    proj5_title: "Deterministic 6DoF C++ Physics Engine",
    proj5_desc: "Zero-dependency rigid body flight simulator built from scratch in C++20 with RK4 integration and NACA 0012 aerofoil aerodynamics.",
    proj5_b1: "Programmed 4th-Order Runge-Kutta (RK4) numerical integrator running at a deterministic 1,000 Hz simulation step.",
    proj5_b2: "Implemented quaternion attitude math preventing gimbal lock during high-angle tilt maneuvers.",
    proj5_b3: "Integrated UDP streaming telemetry pipe connecting physics states to Ground Control Station visualizers.",

    // Project 6
    proj6_title: "DIN A4 Ground Effect Autonomous Vehicle",
    proj6_desc: "Ultra-compact high-speed vehicle utilizing aerodynamic ground effect cushions driven by STM32H7 dual-core controllers.",
    proj6_b1: "Achieved a 1:6.5 power-to-weight ratio with custom carbon fiber aero-chassis and ground-seal skirts.",
    proj6_b2: "Programmed Model Predictive Controller (MPC) maintaining 3.5mm ground clearance at speed.",
    proj6_b3: "Designed 4-layer custom PCB integrating optical distance sensors, dual BLDC drivers, and CAN telemetry.",

    // Action Links
    link_github: "GitHub Repo",
    link_spec: "Design Spec (PDF)",
    link_deepdive: "Technical Deep-Dive →",

    // Footer
    footer_copy: "© 2026 David Sommerer — HTL Elektrotechnik Salzburg."
  },
  de: {
    // Navigation & General
    nav_about: "Über Mich",
    nav_skills: "Skillset",
    nav_projects: "Projekte",
    nav_experience: "Erfahrung & Ausbildung",
    back_overview: "← Zurück zur Übersicht",

    // Hero Section
    hero_greeting: "Hallo, ich bin",
    hero_name: "David Sommerer!",
    hero_role_prefix: "Ich bin ein",
    hero_role: "Elektrotechnik & Systems Engineer",
    hero_specializing: "spezialisiert auf",
    hero_focus: "Embedded C++, Regelungen & Autonome Systeme.",
    hero_subtitle: "Schüler an der HTL Elektrotechnik Salzburg. Entwicklung von Bare-Metal Mikrocontrollern, KI-gesteuerten autonomen RC-Cars, 6DoF Simulatoren und Regelungstechnik.",
    hero_cta_projects: "Projekte Erkunden",
    hero_cta_contact: "Direktkontakt",

    // Oscilloscope Hero Card (Right)
    sig_card_title: "oszilloskop & signal monitor",
    sig_card_sub: "ch1: pwm_aktuator_ausgang",
    sig_mode_hover: "AKTIV",
    sig_mode_transition: "PWM SYNC",
    sig_ch1_lbl: "CH1 Servo Ausgang",
    sig_ch1_val: "1500 µs (0.0°)",
    sig_ch2_lbl: "CH2 Motor PWM",
    sig_ch2_val: "1620 µs (42%)",
    sig_ch3_lbl: "MCU Taktfrequenz",
    sig_ch3_val: "480 MHz FPU",
    sig_ch4_lbl: "Bus Topologie",
    sig_ch4_val: "CAN / DroneCAN",
    sig_status: "pwm ausgang synchronisiert · 10 kHz hardware timer · zero jitter",

    // 3 Quick Cards Below Hero
    card1_title: "Ausbildung & Schule",
    card1_role1: "HTL Elektrotechnik Salzburg",
    card1_date1: "Höhere Technische Lehranstalt • 2022 - 2027",
    card1_role2: "Diplomarbeit F&E Projekt",
    card1_date2: "Elektrotechnik Systeme • 2025 - 2026",
    card1_role3: "Schwerpunkte",
    card1_date3: "Embedded Software, CAD & Automation",

    card2_title: "Ausgewählte Projekte",
    card2_topic1: "Crazy Car Autonomes RL",
    card2_desc1: "RC Car Umbau mit MCU & Servos, KI-Training in Unity ML-Agents.",
    card2_topic2: "6DoF Fahr-Simulator",
    card2_desc2: "6-Achsen Bewegungsplattform mit Inverskinematik in Echtzeit.",
    card2_topic3: "Tri-Tilt-Rotor SAR VTOL",
    card2_desc3: "Kipprotor-Drohnenkonzept für Such- und Rettungseinsätze.",

    card3_handle: "currently learning",
    card3_topic1: "ROS2 & Gazebo",
    card3_topic2: "STM32H7 & PX4",
    card3_topic3: "Simulink & DroneCAN",
    card3_topic4: "Nvidia Jetson",

    // Experience & Education Section (SPLIT LAYOUT)
    exp_heading: "berufserfahrung & ausbildung",
    exp_sub: "Industrielle Ingenieur-Praktika, Stromnetzberechnungen, Verteilerbau und praktische Werkstattausbildung.",

    // Work Experience Split
    work_heading: "Berufserfahrung & Praktika",

    intern_1_title: "Praktikant Netzplanung & Stromnetzberechnung",
    intern_1_company: "Salzburg AG (Regionaler Stromnetzbetreiber)",
    intern_1_date: "Sommer 2026 • 4 Wochen",
    intern_1_b1: "Einsatz von NEPlan zur Berechnung komplexer Lastflüsse und Netzkapazitäten im städtischen Verteilernetz.",
    intern_1_b2: "Planung neuer Schaltzustände sowie Durchführung von Kurzschluss- (Ik'') und Erdschlussberechnungen.",
    intern_1_b3: "Unterstützung der Netzingenieure bei der Optimierung städtischer Umspannwerke.",

    intern_2_title: "Praktikant Schaltanlagenbau & Verteilerbau",
    intern_2_company: "ERA - Elektrotechnik Ramsauer GmbH",
    intern_2_date: "Sommer 2025 • 4 Wochen",
    intern_2_b1: "Eigenständiger Aufbau und Verdrahtung großer industrieller Sicherungs- und Verteilerschränke.",
    intern_2_b2: "Fertigung hochstromfester Schaltanlagen für namhafte österreichische Industrieunternehmen.",
    intern_2_b3: "Durchführung von Kupferschienenbiegung, DIN-Schienen-Bestückung und thermischen Prüfungen.",

    // Education & Workshop Split
    edu_heading: "Ausbildung & Werkstattkompetenzen",

    edu_1_title: "HTL Elektrotechnik Salzburg",
    edu_1_subtitle: "Höhere Technische Lehranstalt für Elektrotechnik • 2022 - 2027",
    edu_1_desc: "5-jährige fundierte Ingenieurausbildung in Energietechnik, Regelungstechnik, Embedded C/C++, CAD-Konstruktion und Automatisierung.",

    workshop_title: "Praktische Werkstatt- & Fertigungsskills",
    ws_1: "Schweißen (MIG/MAG/WIG)",
    ws_2: "TNC 640 CNC-Bearbeitung",
    ws_3: "Präzisionsbohren & Fräsen",
    ws_4: "Polieren & Metallbearbeitung",
    ws_5: "3D-Druck & FDM Prototyping",
    ws_6: "Elektro-Verdrahtung & Starkstrom",
    ws_7: "SMD & THT Löten",
    ws_8: "Eigenes PCB Layout (KiCad)",
    ws_9: "Systemische Fehlersuche",

    // Technical Skills Section
    skills_title: "technische skills & stack",
    skills_sub: "Software, Bare-Metal Mikrocontroller, CAD-Tools und KI-Technologien, mit denen ich arbeite.",

    skills_cat1: "Sprachen & Mikrocontroller",
    skills_cat2: "CAD, Simulation & Software",
    skills_cat3: "KI-Tools & Workflow",
    skills_cat4: "Aktuell am Lernen für Projekte",

    // Projects Section
    projects_title: "ausgewählte ingenieurprojekte",
    projects_sub: "Dokumentierte Projekte mit KI Reinforcement Learning, 6DoF Bewegungssimulation, High-Performance Parsern und eigener Hardware.",

    filter_all: "Alle Systeme",
    filter_ai: "KI & Autonomie",
    filter_lowlevel: "Embedded C/C++",
    filter_hardware: "Hardware & Sim",

    // Project 1
    proj1_title: "Crazy Car: Autonomes KI/RL RC-Car",
    proj1_desc: "Umbau eines RC-Cars mit Mikrocontroller und Servo-Steuerung. Training eines Reinforcement Learning (RL) KI-Agenten in Unity ML-Agents zur autonomen Streckenfahrt.",
    proj1_b1: "Überholung des RC-Chassis mit eigener Mikrocontroller-Hardware und Präzisions-Servorückmeldung.",
    proj1_b2: "Aufbau einer 3D-Simulationsumgebung in Unity mit ML-Agents für neuronale Netzwerke.",
    proj1_b3: "Deployen des trainierten KI-Modells auf das Fahrzeug zur autonomen Hindernisumfahrung.",

    // Project 2
    proj2_title: "6DoF Dynamischer Fahr-Simulator",
    proj2_desc: "Eigene 6 Degrees-of-Freedom Bewegungsplattform für Fahrsimulationen mit Inverskinematik-Berechnung in Echtzeit.",
    proj2_b1: "Berechnung von Denavit-Hartenberg Inverskinematik für 6 Linearaktuatoren in Echtzeit.",
    proj2_b2: "Konstruktion des CAD-Mechanikrahmens in SolidEdge mit Ansys Festigkeitsanalyse.",
    proj2_b3: "Programmierung der High-Speed Motoransteuerung über CAN-Bus Schnittstelle.",

    // Project 3
    proj3_title: "EDI-zu-JSONL High-Performance Parser",
    proj3_desc: "Allokationsfreie C++20 Streaming-Engine zur Umwandlung riesiger EDI-Dateien in JSONL-Daten.",
    proj3_b1: "Erreichte 2,4 GB/s Durchsatz durch POSIX Memory Mapping (mmap) und string_view Auswertung.",
    proj3_b2: "Vermeidung dynamischer Heap-Allokation in der Hauptschleife mit O(1) Speicherbedarf.",
    proj3_b3: "Entwicklung lock-freier Ringpuffer-Warteschlangen für SIMD-beschleunigte Batch-Ausgabe.",

    // Project 4
    proj4_title: "Tri-Tilt-Rotor SAR VTOL Plattform",
    proj4_desc: "Schwerlast-Such- und Rettungs-Kipprotorfahrzeug mit ausfallsicheren ROS2-Knoten und Akku-Redundanz.",
    proj4_b1: "Entwurf redundanter Akku-Umschaltlogik ohne Spannungsabfall (<5µs MOS-FET Latching).",
    proj4_b2: "Entwicklung eines C++ Flugknotens zur Echtzeit-Vektorberechnung der 90°-Kipprotoren.",
    proj4_b3: "Strukturierte SORA SAIL II Sicherheitsdokumentation für AustroControl.",

    // Project 5
    proj5_title: "Deterministische 6DoF C++ Physik-Engine",
    proj5_desc: "Abhängigkeitsfreier 6DoF Flugsimulator von Grund auf in C++20 entwickelt mit RK4-Integration und NACA 0012 Profilen.",
    proj5_b1: "Implementierung eines Runge-Kutta Integrators 4. Ordnung (RK4) bei festem 1.000 Hz Simulationsschritt.",
    proj5_b2: "Quaternionen-Lageregelung verhindert Gimbal-Lock bei steilen Manövern.",
    proj5_b3: "Integration einer UDP-Telemetrie-Pipe zur Übertragung an Ground Control Station Tools.",

    // Project 6
    proj6_title: "DIN A4 Autonomes Bodeneffekt-Fahrzeug",
    proj6_desc: "Ultrakompaktes Fahrzeug zur Maximierung des Bodeneffekts gesteuert von STM32H7 Dual-Core Mikrocontrollern.",
    proj6_b1: "Erreichte ein Leistungsgewicht von 1:6,5 mit Karbon-Aerodynamikchassis.",
    proj6_b2: "Model Predictive Controller (MPC) hält 3,5mm Luftpolster bei hoher Geschwindigkeit.",
    proj6_b3: "Entwicklung eines 4-Lagen-PCBs mit optischen Distanzsensoren, BLDC-Treibern und CAN-Telemetrie.",

    // Action Links
    link_github: "GitHub Repo",
    link_spec: "Design Spec (PDF)",
    link_deepdive: "Technische Details →",

    // Footer
    footer_copy: "© 2026 David Sommerer — HTL Elektrotechnik Salzburg."
  }
};

/**
 * Internationalization Manager class.
 */
export class I18nManager {
  constructor(defaultLang = "en") {
    this.currentLang = localStorage.getItem("app_lang") || defaultLang;
    this.init();
  }

  init() {
    this.updateUI();
    this.setupListeners();
  }

  setupListeners() {
    const langButtons = document.querySelectorAll("[data-lang-btn]");
    langButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang-btn");
        if (lang && lang !== this.currentLang) {
          this.setLanguage(lang);
        }
      });
    });
  }

  setLanguage(lang) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem("app_lang", lang);
    this.updateUI();
  }

  updateUI() {
    const elements = document.querySelectorAll("[data-i18n]");
    const dict = translations[this.currentLang];

    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    const langButtons = document.querySelectorAll("[data-lang-btn]");
    langButtons.forEach((btn) => {
      const bLang = btn.getAttribute("data-lang-btn");
      if (bLang === this.currentLang) {
        btn.classList.add("text-sky-400", "font-bold");
        btn.classList.remove("text-muted-foreground");
      } else {
        btn.classList.remove("text-sky-400", "font-bold");
        btn.classList.add("text-muted-foreground");
      }
    });
  }
}
