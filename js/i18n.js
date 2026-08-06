/**
 * @file i18n.js
 * @description Dual-language translation dictionary (EN Primary, DE Secondary)
 * Tailored for David Sommerer (Systems & Electrical Engineer).
 */

export const translations = {
  en: {
    // Navigation
    nav_about: "About",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_experience: "Education",

    // Hero Section
    hero_greeting: "Hi, I'm",
    hero_name: "David Sommerer!",
    hero_role_prefix: "I'm an",
    hero_role: "Electrical & Systems Engineer",
    hero_specializing: "specializing in",
    hero_focus: "Embedded C++, Autonomous Flight & Controls.",
    hero_cta_book: "Erasmus+ 2027",
    hero_cta_sub: "Open for 4-week EU Mobility Internships in Aerospace & Systems Engineering.",

    // Terminal Hero Widget
    term_title: "david@htl-salzburg:~/systems",
    term_cmd_whoami: "whoami",
    term_whoami_desc: "17-year-old Systems Engineer at HTL Elektrotechnik Salzburg specializing in embedded flight controllers, ROS2 robotics, and MPC algorithms.",
    term_cmd_sysctl: "sysctl -a flight_control",
    term_cmd_grep: "grep -r \"expertise\" /var/log/systems.log",
    term_expertise: "C++17/20 · STM32H7 · ROS2 Humble · MATLAB/Simulink · MPC · AustroControl SORA",
    term_cmd_conf: "cat /etc/tech-ecosystem.conf",
    term_conf_val: "embedded_cpp=true  ros2_swarm=true  sora_safety=true  simulink=true",
    term_cmd_products: "./projects --list",
    term_p1: "Tri-Tilt-Rotor SAR VTOL - Heavy-lift drone with 80-page SORA TDD.",
    term_p2: "C++ Custom Physics Engine - Deterministic 6DoF simulator with RK4 integration.",
    term_p3: "DIN A4 Ground Effect Vehicle - STM32H7 MPC vehicle with 1:6.5 power-to-weight.",
    term_p4: "EDI-to-JSONL Streaming Parser - High-throughput zero-copy C++20 engine.",

    // System Architecture & Flight Specs Card (Replacing GitHub card)
    arch_card_title: "system architecture & specs",
    arch_card_sub: "hardware registers & real-time control parameters",
    arch_tag: "nominal system state",
    arch_mcu_lbl: "MCU Clock Speed",
    arch_mcu_val: "480 MHz (Dual Cortex-M7)",
    arch_loop_lbl: "Control Loop Latency",
    arch_loop_val: "< 12 ms Execution",
    arch_solver_lbl: "MPC QP Solver",
    arch_solver_val: "1,000 Hz Deterministic",
    arch_safety_lbl: "Aerospace Safety",
    arch_safety_val: "AustroControl SORA SAIL II",
    arch_bus_lbl: "Bus Bandwidth",
    arch_bus_val: "1 Mbps CANopen / Eth IP",
    arch_status_line: "flight control active · dual LiPo failover ready · 0 packet drops",

    // 3 Quick Cards Below Hero
    card1_title: "Education & Milestones",
    card1_role1: "HTL Elektrotechnik Salzburg",
    card1_date1: "Higher Technical Institute • 2022 - 2027",
    card1_role2: "AustroControl SORA SAIL II R&D",
    card1_date2: "Diplomarbeit Aerospace Safety • 2025 - 2026",
    card1_role3: "EU Erasmus+ Applicant",
    card1_date3: "Summer Mobility Program • 2027",
    card1_link: "View full roadmap →",

    card2_title: "Currently Engineering",
    card2_topic1: "Model Predictive Control",
    card2_desc1: "Real-time quad-programming on STM32H7 dual Cortex-M7 at 480 MHz.",
    card2_topic2: "ROS2 Swarm VTOL",
    card2_desc2: "Vector transition algorithms for 90° tilt-rotor actuation.",
    card2_topic3: "Deterministic Physics",
    card2_desc3: "C++20 RK4 6DoF simulator with NACA 0012 aerofoil models.",

    card3_handle: "hardware & cad lab",
    card3_topic1: "SolidEdge 3D CAD",
    card3_topic2: "Ansys FEA Stress Analysis",
    card3_topic3: "High-Speed PCB Layout",
    card3_topic4: "Opto-Isolated EMI Board",

    // Technical Skills Section
    skills_title: "technical skills & stack",
    skills_sub: "My engineering toolkit spans low-level microcontrollers, flight control simulation, robotics middleware, and aerospace safety standards.",
    skills_cat1: "Embedded & Languages",
    skills_cat2: "Control & Simulation",
    skills_cat3: "Hardware, CAD & Safety",

    // Projects Section
    projects_title: "featured engineering projects",
    projects_sub: "Fully documented deep-tech engineering projects with concrete performance metrics, schematics, and design documents.",

    filter_all: "All Systems",
    filter_flight: "Flight & Autonomy",
    filter_lowlevel: "Low-Level C++",
    filter_hardware: "Hardware & Control",

    // Project 1
    proj1_title: "Tri-Tilt-Rotor SAR VTOL Platform",
    proj1_desc: "Heavy-lift Search and Rescue tilt-rotor vehicle featuring failsafe ROS2 swarm nodes, custom dual-battery redundancy, and an AustroControl SORA TDD.",
    proj1_b1: "Authored an 80-page AustroControl SORA SAIL II Technical Design Document detailing failure mode risk mitigation.",
    proj1_b2: "Designed dual-redundant battery failover circuitry with zero voltage drop switching (<5µs MOS-FET latching).",
    proj1_b3: "Developed custom ROS2 C++ flight node calculating real-time vector transition matrices for 90° tilt-rotors.",

    // Project 2
    proj2_title: "Deterministic 6DoF C++ Physics Engine",
    proj2_desc: "Zero-dependency rigid body flight simulator built from scratch in C++20 with RK4 integration and NACA 0012 aerofoil aerodynamics.",
    proj2_b1: "Programmed 4th-Order Runge-Kutta (RK4) numerical integrator running at a deterministic 1,000 Hz simulation step.",
    proj2_b2: "Implemented quaternion attitude math preventing gimbal lock during high-angle tilt maneuvers.",
    proj2_b3: "Integrated UDP streaming telemetry pipe connecting physics states to Ground Control Station visualizers.",

    // Project 3
    proj3_title: "DIN A4 Ground Effect Autonomous Vehicle",
    proj3_desc: "Ultra-compact high-speed vehicle utilizing aerodynamic ground effect cushions driven by STM32H7 dual-core controllers.",
    proj3_b1: "Achieved a 1:6.5 power-to-weight ratio with custom carbon fiber aero-chassis and ground-seal skirts.",
    proj3_b2: "Programmed Model Predictive Controller (MPC) on Cortex-M7 maintaining 3.5mm ground clearance at speed.",
    proj3_b3: "Designed 4-layer custom PCB integrating optical distance sensors, dual BLDC drivers, and CAN telemetry.",

    // Project 4
    proj4_title: "EDI-to-JSONL High-Performance Parser",
    proj4_desc: "Zero-allocation C++20 streaming engine parsing multi-gigabyte industrial EDI files into structured JSONL data.",
    proj4_b1: "Achieved 2.4 GB/s streaming throughput via POSIX memory mapping (mmap) and string_view token evaluation.",
    proj4_b2: "Eliminated dynamic heap allocation in hot processing loops, bounding memory overhead to O(1).",
    proj4_b3: "Engineered lock-free ring buffer queue for SIMD-accelerated multi-threaded batch output.",

    // Project 5
    proj5_title: "6DoF Industrial Robotic Arm Restoration",
    proj5_desc: "Complete hardware overhaul of a 6-axis manipulator, featuring custom opto-isolated drive PCBs and kinematics.",
    proj5_b1: "Eliminated severe motor encoder glitching by designing optocoupler differential signal interface PCBs.",
    proj5_b2: "Wrote real-time forward and inverse kinematics solvers in C++ with Denavit-Hartenberg (D-H) algorithms.",
    proj5_b3: "Implemented smooth S-curve trajectory acceleration profiling over high-speed CANopen bus.",

    // Action Links
    link_github: "GitHub Repo",
    link_spec: "Design Spec (PDF)",
    link_deepdive: "Technical Deep-Dive →",

    // Footer
    footer_copy: "© 2026 David Sommerer — HTL Elektrotechnik Salzburg.",
    footer_erasmus: "Applicant for 4-week EU Erasmus+ Mobility Program in Aerospace Systems Engineering (Summer 2027)."
  },
  de: {
    // Navigation
    nav_about: "Über Mich",
    nav_projects: "Projekte",
    nav_skills: "Skillset",
    nav_experience: "Ausbildung",

    // Hero Section
    hero_greeting: "Hallo, ich bin",
    hero_name: "David Sommerer!",
    hero_role_prefix: "Ich bin ein",
    hero_role: "Elektrotechnik & Systems Engineer",
    hero_specializing: "spezialisiert auf",
    hero_focus: "Embedded C++, Autonomen Flug & Regelungen.",
    hero_cta_book: "Erasmus+ 2027",
    hero_cta_sub: "Verfügbar für 4-wöchige EU-Praktika im Bereich Aerospace & Systems Engineering.",

    // Terminal Hero Widget
    term_title: "david@htl-salzburg:~/systeme",
    term_cmd_whoami: "whoami",
    term_whoami_desc: "17-jähriger Systems Engineer an der HTL Elektrotechnik Salzburg mit Fokus auf Bare-Metal Flight Controller, ROS2 und MPC-Regelungen.",
    term_cmd_sysctl: "sysctl -a flight_control",
    term_cmd_grep: "grep -r \"expertise\" /var/log/systems.log",
    term_expertise: "C++17/20 · STM32H7 · ROS2 Humble · MATLAB/Simulink · MPC · AustroControl SORA",
    term_cmd_conf: "cat /etc/tech-ecosystem.conf",
    term_conf_val: "embedded_cpp=true  ros2_swarm=true  sora_safety=true  simulink=true",
    term_cmd_products: "./projects --list",
    term_p1: "Tri-Tilt-Rotor SAR VTOL - Schwerlastdrohne mit 80-seitigem SORA TDD.",
    term_p2: "Custom C++ Physik-Engine - Deterministischer 6DoF Simulator mit RK4-Integration.",
    term_p3: "DIN A4 Bodeneffekt-Fahrzeug - STM32H7 MPC Fahrzeug mit 1:6,5 Leistungsgewicht.",
    term_p4: "EDI-zu-JSONL Streaming Parser - Hochdurchsatz C++20 Zero-Copy Engine.",

    // System Architecture & Flight Specs Card
    arch_card_title: "systemarchitektur & specs",
    arch_card_sub: "hardware register & echtzeit-regelungskreise",
    arch_tag: "nominaler systemstatus",
    arch_mcu_lbl: "MCU Taktfrequenz",
    arch_mcu_val: "480 MHz (Dual Cortex-M7)",
    arch_loop_lbl: "Regelschleifen-Latenz",
    arch_loop_val: "< 12 ms Ausführung",
    arch_solver_lbl: "MPC QP Solver",
    arch_solver_val: "1.000 Hz Deterministisch",
    arch_safety_lbl: "Luftfahrtsicherheit",
    arch_safety_val: "AustroControl SORA SAIL II",
    arch_bus_lbl: "Bus Bandbreite",
    arch_bus_val: "1 Mbps CANopen / Eth IP",
    arch_status_line: "flugregelung aktiv · doppel-lipo redundanz bereit · 0 paketverluste",

    // 3 Quick Cards Below Hero
    card1_title: "Ausbildung & Meilensteine",
    card1_role1: "HTL Elektrotechnik Salzburg",
    card1_date1: "Höhere Technische Lehranstalt • 2022 - 2027",
    card1_role2: "AustroControl SORA SAIL II F&E",
    card1_date2: "Diplomarbeit Luftfahrtsicherheit • 2025 - 2026",
    card1_role3: "EU Erasmus+ Bewerber",
    card1_date3: "Sommer-Mobilitätsprogramm • 2027",
    card1_link: "Vollständigen Lebenslauf anzeigen →",

    card2_title: "Aktuelle Entwicklung",
    card2_topic1: "Model Predictive Control",
    card2_desc1: "Echtzeit Quad-Programming auf STM32H7 Dual Cortex-M7 bei 480 MHz.",
    card2_topic2: "ROS2 Swarm VTOL",
    card2_desc2: "Vektor-Umschaltalgorithmen für 90°-Kipprotoren.",
    card2_topic3: "Deterministische Physik",
    card2_desc3: "C++20 RK4 6DoF Simulator mit NACA 0012 Profilen.",

    card3_handle: "hardware & cad labor",
    card3_topic1: "SolidEdge 3D CAD",
    card3_topic2: "Ansys FEA Festigkeitsanalyse",
    card3_topic3: "High-Speed PCB Layout",
    card3_topic4: "Optokoppler EMV-Treiberkarte",

    // Technical Skills Section
    skills_title: "technische skills & stack",
    skills_sub: "Mein Ingenieur-Toolkit umfasst Bare-Metal Mikrocontroller, Flugregelung, Roboter-Middleware und Flugsicherheitsstandards.",
    skills_cat1: "Embedded & Sprachen",
    skills_cat2: "Regelung & Simulation",
    skills_cat3: "Hardware, CAD & Sicherheit",

    // Projects Section
    projects_title: "ausgewählte ingenieurprojekte",
    projects_sub: "Vollständig dokumentierte Deep-Tech Projekte mit konkreten Performancedaten, Schaltplänen und Design-Dokumenten.",

    filter_all: "Alle Systeme",
    filter_flight: "Flug & Autonomie",
    filter_lowlevel: "Low-Level C++",
    filter_hardware: "Hardware & Regelung",

    // Project 1
    proj1_title: "Tri-Tilt-Rotor SAR VTOL Plattform",
    proj1_desc: "Schwerlast-Such- und Rettungs-Kipprotorfahrzeug mit ausfallsicheren ROS2-Knoten, Doppelbatterie-Redundanz und SORA TDD.",
    proj1_b1: "Erstellung eines 80-seitigen AustroControl SORA SAIL II TDDs zur Ausfallrisiko-Minimierung.",
    proj1_b2: "Entwurf redundanter Akku-Umschaltlogik ohne Spannungsabfall (<5µs MOS-FET Latching).",
    proj1_b3: "Entwicklung eines ROS2 C++ Flugknotens zur Echtzeit-Vektorberechnung der 90°-Kipprotoren.",

    // Project 2
    proj2_title: "Deterministische 6DoF C++ Physik-Engine",
    proj2_desc: "Abhängigkeitsfreier 6DoF Flugsimulator von Grund auf in C++20 entwickelt mit RK4-Integration und NACA 0012 Profilen.",
    proj2_b1: "Implementierung eines Runge-Kutta Integrators 4. Ordnung (RK4) bei festem 1.000 Hz Simulationsschritt.",
    proj2_b2: "Quaternionen-Lageregelung verhindert Gimbal-Lock bei steilen Kippmanövern.",
    proj2_b3: "Integration einer UDP-Telemetrie-Pipe zur Übertragung an Ground Control Station Tools.",

    // Project 3
    proj3_title: "DIN A4 Autonomes Bodeneffekt-Fahrzeug",
    proj3_desc: "Ultrakompaktes Fahrzeug zur Maximierung des Bodeneffekts gesteuert von STM32H7 Dual-Core Mikrocontrollern.",
    proj3_b1: "Erreichte ein Leistungsgewicht von 1:6,5 mit Karbon-Aerodynamikchassis.",
    proj3_b2: "Model Predictive Controller (MPC) auf Cortex-M7 hält 3,5mm Luftpolster bei hoher Geschwindigkeit.",
    proj3_b3: "Entwicklung eines 4-Lagen-PCBs mit optischen Distanzsensoren, BLDC-Treibern und CAN-Telemetrie.",

    // Project 4
    proj4_title: "EDI-zu-JSONL High-Performance Parser",
    proj4_desc: "Allokationsfreie C++20 Streaming-Engine zur Umwandlung riesiger EDI-Dateien in JSONL-Daten.",
    proj4_b1: "Erreichte 2,4 GB/s Durchsatz durch POSIX Memory Mapping (mmap) und string_view Auswertung.",
    proj4_b2: "Vermeidung dynamischer Heap-Allokation in der Hauptschleife mit O(1) Speicherbedarf.",
    proj4_b3: "Entwicklung lock-freier Ringpuffer-Warteschlangen für SIMD-beschleunigte Batch-Ausgabe.",

    // Project 5
    proj5_title: "6DoF Industrieroboter-Restaurierung",
    proj5_desc: "Komplette Hardware-Überholung eines 6-Achsen-Manipulators mit optokoppler-isolierten Treiberkarten und Kinematik.",
    proj5_b1: "EMV-Entstörung durch Design differenzieller Optokoppler-Signalinterface-Karten.",
    proj5_b2: "Entwicklung von Vorwärts- und Inverskinematik-Algorithmen in C++ mit Denavit-Hartenberg (D-H) Solvern.",
    proj5_b3: "Implementierung glatter S-Kurven-Beschleunigungsprofile über High-Speed CANopen Bus.",

    // Action Links
    link_github: "GitHub Repo",
    link_spec: "Design Spec (PDF)",
    link_deepdive: "Technische Details →",

    // Footer
    footer_copy: "© 2026 David Sommerer — HTL Elektrotechnik Salzburg.",
    footer_erasmus: "Bewerber für 4-wöchiges EU Erasmus+ Mobilitätsprogramm im Bereich Systems Engineering (Sommer 2027)."
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
