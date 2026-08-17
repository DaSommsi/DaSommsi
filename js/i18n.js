/**
 * @file i18n.js
 * @description Comprehensive Dual-Language Translation Dictionary (EN Primary, DE Secondary)
 * Tailored for David Sommerer — Avionics, Embedded Systems, Electronics & Software Engineer.
 */

export const translations = {
  en: {
    // Navigation & General
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience & Education",
    back_overview: "← Back to Main Portfolio",
    timeline_title: "Project Timeline & Milestones",
    problems_title: "Engineering Challenges & Root Cause Failures",
    learnings_title: "Key Lessons & What We Learned",
    gallery_title: "Project Media, Code & CAD Assets",

    // Hero Section
    hero_greeting: "Hi, I'm",
    hero_name: "David Sommerer.",
    hero_role_prefix: "I'm an",
    hero_role: "Electrical & Systems Engineer",
    hero_specializing: "specializing in",
    hero_focus: "Avionics, Embedded Systems, Electronics & Software Engineering.",
    hero_subtitle: "Student at HTL Elektrotechnik Salzburg. Engineering avionics systems, embedded firmware, electronics, autonomous vehicles, and software architecture.",
    hero_cta_projects: "Explore Projects",
    hero_cta_contact: "Direct Contact",

    // Oscilloscope Hero Card
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

    // Terminal Text
    term_title: "david@htl-salzburg:~/systems",
    term_cmd_whoami: "whoami",
    term_whoami_desc: "17-year-old Systems Engineer at HTL Elektrotechnik Salzburg specializing in avionics, embedded firmware, electronics planning, and software engineering.",
    term_cmd_grep: 'grep -r "expertise" /var/log/systems.log',
    term_expertise: "Avionics · Embedded C/C++ · Electronics · Software Engineering",
    term_cmd_conf: "cat /etc/tech-ecosystem.conf",
    term_conf_val: "avionics=true  embedded_cpp=true  electronics=true  software_eng=true",
    term_cmd_products: "./projects --list",
    term_p1: "> Crazy Car Autonomous RL - €30 RC car with ESP32 & Unity ML-Agents.",
    term_p2: "> 6DoF Driving Simulator - Restored HTL motion rig with cable isolation.",
    term_p3: "> EDI-to-JSONL Parser - Zero-allocation 2.4 GB/s C++20 streaming engine.",
    term_p4: "> Tri-Tilt-Rotor SAR VTOL - Heavy-lift BVLOS drone with SORA SAIL II.",

    // 3 Quick Cards Below Hero
    card1_title: "Education & Schooling",
    card1_role1: "HTL Elektrotechnik Salzburg",
    card1_date1: "Higher Technical Institute • 2023 - 2028",
    card1_role2: "Diploma Thesis R&D Project",
    card1_date2: "SAR VTOL Drone & SORA • 2026 - 2028",
    card1_role3: "Specialization",
    card1_date3: "Avionics, Embedded Systems, Electronics & Software",

    card2_title: "Featured Projects",
    card2_topic1: "Crazy Car Autonomous RL",
    card2_desc1: "€30 RC car rebuilt with ESP32, AI trained in Unity ML-Agents.",
    card2_topic2: "6DoF Driving Simulator",
    card2_desc2: "Restored school motion rig, physical signal/power cable isolation.",
    card2_topic3: "Tri-Tilt-Rotor SAR VTOL",
    card2_desc3: "BVLOS search & rescue drone with AustroControl SORA SAIL II.",

    card3_handle: "currently learning",
    card3_topic1: "Linux / Ubuntu",
    card3_topic2: "ROS2 & Gazebo",
    card3_topic3: "STM32H7 & PX4",
    card3_topic4: "Simulink & DroneCAN",

    // Experience & Education Section
    exp_heading: "work experience & education",
    exp_sub: "Industrial engineering internships, municipal power grid calculations, custom switchgear manufacturing, and hands-on workshop fabrication.",
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

    edu_heading: "Education & Workshop Fabrication Skills",
    edu_1_title: "HTL Elektrotechnik Salzburg",
    edu_1_subtitle: "Higher Technical Institute for Electrical Engineering • 2023 - 2028",
    edu_1_desc: "5-year intensive engineering program covering power systems, control engineering, embedded C/C++, CAD design, electronics, and software development.",

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
    skills_sub: "Structured engineering competencies across software, microcontrollers, CAD automation, media production, AI technologies, and active learning.",

    skills_cat1: "Languages, Web & Version Control",
    skills_cat2: "CAD, Automation & PLC Engineering",
    skills_cat3: "Media, 3D & Office Production",
    skills_cat4: "AI Tools & Machine Learning",
    skills_cat5: "Currently Learning for Projects",

    // Projects Section
    projects_title: "featured engineering projects",
    projects_sub: "Documented engineering projects featuring AI reinforcement learning, 6DoF motion simulation, high-performance parsers, and custom hardware.",

    filter_all: "All Systems",
    filter_ai: "AI & Autonomy",
    filter_lowlevel: "Embedded C/C++",
    filter_hardware: "Hardware & Sim",

    // Project 1: Crazy Car
    proj1_title: "Crazy Car: Autonomous AI/RL RC Car",
    proj1_date: "Aug 2025 - Feb 2026 (Graz Competition)",
    proj1_desc: "Our very first real engineering project besides the 6DoF simulator. We bought a cheap 30€ Amazon RC car, rebuilt it with a microcontroller and servo, and trained an AI model in Unity to drive autonomously. A vital experiment built to test boundaries, learn from failures, and succeed in future competitions.",
    proj1_b1: "Trained RL agent in Unity ML-Agents (Aug-Dec 2025) taking velocity, IMU, and 3 ToF sensors to directly output motor speed & servo steering angle (no intermediate PID).",
    proj1_b2: "Faced PCB hardware flaws: IMU trace routing was accidentally omitted during CAD layout, and high motor current noise interrupted sensor signals under load.",
    proj1_b3: "Completed assembly only days before the Graz competition (Feb 2026); despite 2 intense days of on-site debugging, signal noise prevented driving, teaching us crucial engineering discipline for future projects.",

    // Crazy Car Subpage Specific EN Translations
    cc_base_platform: "Base Platform",
    cc_mcu: "Microcontroller",
    cc_control_approach: "Control Approach",
    cc_version_control: "Version Control",
    cc_no_vc_note: "None (A Big Lesson Learned)",

    cc_time1_title: "Aug 2025 – Dec 2025: AI Model Training & Hardware Design",
    cc_time1_desc: "As project lead, I spent countless hours in Unity ML-Agents coding and training the reinforcement learning agents. I used progressive learning—giving the AI an easy track first before transitioning to the full racetrack layout. Simultaneously, we rebuilt the 30€ RC car with a micro-servo and designed our custom PCB in CAD.",
    
    cc_time2_title: "Jan 2026 – Feb 2026: Delayed Hardware Assembly & Uncovered Problems",
    cc_time2_desc: "The main mistake was waiting too long to finish the physical build. The car was assembled only a few days before the Graz competition. Last-minute bench testing revealed critical issues: PCB trace routing errors omitted the IMU sensor connection, and high motor current draw generated EMI noise that corrupted sensor signals.",

    cc_time3_title: "Feb 2026: Competition in Graz & On-Site Debugging",
    cc_time3_desc: "Even though the car wasn't running properly at home, we still went to Graz determined to compete. At the venue, nothing worked—the vehicle failed to respond to control commands. We spent 2 intense days troubleshooting power lines and noise on-site, but couldn't resolve the hardware flaws before our run. Though we didn't score points, this failure motivated us to start our 2027 Ground Effect vehicle 8 months early!",

    cc_prob1_title: "1. Direct AI End-to-End Motor Control (No PID Buffer)",
    cc_prob1_desc: "In our initial design, the trained neural network directly controlled the motor speed percentage and steering servo angle based on velocity, IMU values, and 3 Time-of-Flight (ToF) distance sensors. There was no PID controller or safety filter in between. While this end-to-end approach worked seamlessly in the Unity simulation, real-world motor latency and unbuffered sensor spikes caused erratic responses on the physical track.",

    cc_prob2_title: "2. PCB Routing Flaws & Motor Current Noise",
    cc_prob2_desc: "Designing the custom PCB during the Aug–Dec window was a huge learning curve. During board routing, traces for the IMU sensor were accidentally omitted from the layout. Furthermore, powering the drive motor from the same rail as the sensors caused severe voltage sags and electromagnetic interference (EMI) whenever the motor accelerated, causing sensor readings to drop.",

    cc_prob3_title: "Why Version Control (Git) Matters & Key Takeaways",
    cc_prob3_desc: "Stupidly, we didn't use Git for source control on this project. When code edits were made late at night before Graz, tracking working states became impossible. We learned these lessons the hard way: all future projects now enforce strict Git commits, decoupled power isolation, PID control buffers, and early hardware integration!",

    cc_pdf_heading: "PCB Engineering Schematics & Gerber Files",
    cc_pdf_sub: "Official CAD schematic diagrams, PCB layout board drawings, and manufacturing Gerber files designed between Aug–Dec 2025.",
    cc_pdf1_title: "PCB Circuit Schematic",
    cc_pdf1_sub: "ESP32 & ToF Circuitry",
    cc_pdf2_title: "PCB Layout Drawing",
    cc_pdf2_sub: "Board Layer Routing",
    cc_gerber_title: "Gerber Production Files",
    cc_gerber_sub: "Manufacturing Archive",

    cc_gallery_sub: "Click any image to view in full-screen zoom mode. Captions document the build evolution and Graz competition venue.",
    cc_fig1: "Figure 1: Modified 30€ Amazon Lamborghini RC car body and chassis.",
    cc_fig2: "Figure 2: Interior electronics layout with ESP32, steering micro-servo, and custom PCB.",
    cc_fig3: "Figure 3: On-site hardware assembly and diagnostic session at the Graz competition venue.",
    cc_fig4: "Figure 4: Open chassis power & sensor wiring troubleshooting taken at the Graz competition.",
    cc_fig5: "Figure 5: 3D CAD layout of the custom microcontroller PCB designed in late 2025.",
    cc_fig6: "Figure 6: The official competition racetrack in Graz.",

    // Project 2: 6DoF Sim
    proj2_title: "6DoF Dynamic Motion Simulator Rig",
    proj2_date: "May 2025 - Jan 2026 (Finished for HTL Open Door Day)",
    proj2_desc: "Restored a broken, legacy 6DoF motion rig at HTL Salzburg by solving severe EMI noise via physical signal/power cable isolation and custom C++ control software.",
    proj2_b1: "Diagnosed root cause EMI interference; physically separated signal & power wiring and built a custom electrical distribution fuse box.",
    proj2_b2: "Wrote modular C++ control software and secured €2,000 monitors & €3.5k gaming PC sponsorships from department leadership.",
    proj2_b3: "Featured as the main highlight at HTL Salzburg Open Door Day 2026; proved David's passion for avionics & embedded electronics.",

    // Project 3: EDI Parser
    proj3_title: "High-Performance Zero-Allocation EDI Engine",
    proj3_date: "Started April 2026 (Active Stealth Project)",
    proj3_desc: "High-throughput O(1) EDI streaming engine running in <35 MB RAM. Zero code configuration engine using JSON schema rules (Stealth Commercial Project).",
    proj3_b1: "Binds memory footprint to strictly O(1) (~35 MB RAM) for multi-gigabyte industrial EDI/FACT data streams.",
    proj3_b2: "Engineered zero-code parsing logic driven dynamically by external JSON mapping configurations (V3/V4 standards).",
    proj3_b3: "Fully Dockerized, microservices-ready architecture currently under commercial evaluation for industrial partnerships.",

    // Project 4: Tri-Tilt SAR VTOL
    proj4_title: "Tri-Tilt-Rotor SAR VTOL Drone (Diploma Thesis)",
    proj4_date: "Started June 2026 • Target 2028 (Diploma Thesis)",
    proj4_desc: "BVLOS Search & Rescue 3-rotor VTOL drone built under AustroControl SORA SAIL II safety guidelines. Dual Pixhawk FMU + Nvidia Jetson ROS2 swarm architecture.",
    proj4_b1: "Designed for Alpine Search & Rescue with thermal IR camera AI person detection, GPS-jamming optical flow mapping (±2m precision), and parachute deployment.",
    proj4_b2: "Specs: 15-20 kg mass, 3m wingspan, 130 km/h top speed, 85 km/h cruise speed, 120-400m operational altitude (up to 4000m travel mode).",
    proj4_b3: "In active sponsorship & testing site talks with the Austrian Armed Forces (Österreichisches Bundesheer).",

    // Project 5: C++ Physics Engine
    proj5_title: "Deterministic 6DoF C++ Physics Engine",
    proj5_date: "March 2026 - May 2026",
    proj5_desc: "Zero-dependency rigid body flight simulator built from scratch in C++20 with RK4 integration to master physics mechanics & C++ for the SAR VTOL project.",
    proj5_b1: "Programmed 4th-Order Runge-Kutta (RK4) numerical integrator running at a deterministic 1,000 Hz simulation step.",
    proj5_b2: "Implemented quaternion attitude math preventing gimbal lock during high-angle tilt maneuvers.",
    proj5_b3: "Integrated UDP streaming telemetry pipe connecting physics states to Ground Control Station visualizers.",

    // Project 6: Ground Effect Car
    proj6_title: "DIN A4 Ground Effect Autonomous Vehicle",
    proj6_date: "Started April 2026 (Competition 2027 • Successor)",
    proj6_desc: "Direct successor to Crazy Car started 8 months ahead! Features 13 kg ground-effect downforce cushion on 2 kg chassis, Bugatti-like acceleration, and STM32H7 MPC.",
    proj6_b1: "Designed CAD chassis in SolidEdge achieving 1:6.5 power-to-weight ratio; secured €400 component sponsorship.",
    proj6_b2: "Developing Model Predictive Control (MPC) in MATLAB/Simulink deployed to STM32H7 for track position estimation.",
    proj6_b3: "Engineered optimal racing line solver with ToF sensor obstacle avoidance to secure victory at 2027 competition.",

    // Action Links
    link_github: "GitHub Repo",
    link_spec: "Design Spec (PDF)",
    link_deepdive: "Explore Project Story →",

    // Footer
    footer_copy: "© 2026 David Sommerer — HTL Elektrotechnik Salzburg."
  },
  de: {
    // Navigation & General
    nav_about: "Über Mich",
    nav_skills: "Skillset",
    nav_projects: "Projekte",
    nav_experience: "Erfahrung & Ausbildung",
    back_overview: "← Zurück zur Hauptseite",
    timeline_title: "Projekt-Timeline & Meilensteine",
    problems_title: "Technische Herausforderungen & Fehleranalyse",
    learnings_title: "Key Learnings & Erkenntnisse",
    gallery_title: "Medien, Code & CAD-Assets",

    // Hero Section
    hero_greeting: "Hallo, ich bin",
    hero_name: "David Sommerer.",
    hero_role_prefix: "Ich bin ein",
    hero_role: "Elektrotechnik & Systems Engineer",
    hero_specializing: "spezialisiert auf",
    hero_focus: "Avionik, Embedded Systeme, Elektronik & Software Engineering.",
    hero_subtitle: "Schüler an der HTL Elektrotechnik Salzburg. Entwicklung von Avioniksystemen, Embedded Firmware, Elektronik, autonomen Fahrzeugen und Software-Architektur.",
    hero_cta_projects: "Projekte Erkunden",
    hero_cta_contact: "Direktkontakt",

    // Oscilloscope Hero Card
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

    // Terminal Text
    term_title: "david@htl-salzburg:~/systems",
    term_cmd_whoami: "whoami",
    term_whoami_desc: "17-jähriger Systems Engineer an der HTL Elektrotechnik Salzburg spezialisiert auf Avionik, Embedded Firmware, Elektronikplanung und Software Engineering.",
    term_cmd_grep: 'grep -r "expertise" /var/log/systems.log',
    term_expertise: "Avionik · Embedded C/C++ · Elektronik · Software Engineering",
    term_cmd_conf: "cat /etc/tech-ecosystem.conf",
    term_conf_val: "avionik=true  embedded_cpp=true  elektronik=true  software_eng=true",
    term_cmd_products: "./projects --list",
    term_p1: "> Crazy Car Autonomes RL - 30€ RC Car mit ESP32 & Unity ML-Agents.",
    term_p2: "> 6DoF Fahr-Simulator - Restaurierung des HTL-Simulators mit Kabeltrennung.",
    term_p3: "> EDI-to-JSONL Parser - Zero-Allocation 2.4 GB/s C++20 Streaming Engine.",
    term_p4: "> Tri-Tilt-Rotor SAR VTOL - Schwere BVLOS Drohne nach SORA SAIL II.",

    // 3 Quick Cards Below Hero
    card1_title: "Ausbildung & Schule",
    card1_role1: "HTL Elektrotechnik Salzburg",
    card1_date1: "Höhere Technische Lehranstalt • 2023 - 2028",
    card1_role2: "Diplomarbeit F&E Projekt",
    card1_date2: "SAR VTOL Drohne & SORA • 2026 - 2028",
    card1_role3: "Schwerpunkte",
    card1_date3: "Avionik, Embedded Systeme, Elektronik & Software",

    card2_title: "Ausgewählte Projekte",
    card2_topic1: "Crazy Car Autonomes RL",
    card2_desc1: "30€ RC Car Umbau mit ESP32, KI-Training in Unity ML-Agents.",
    card2_topic2: "6DoF Fahr-Simulator",
    card2_desc2: "Restaurierung des HTL-Simulators, physikalische EMV-Kabeltrennung.",
    card2_topic3: "Tri-Tilt-Rotor SAR VTOL",
    card2_desc3: "BVLOS Rettungsdrohne nach AustroControl SORA SAIL II.",

    card3_handle: "currently learning",
    card3_topic1: "Linux / Ubuntu",
    card3_topic2: "ROS2 & Gazebo",
    card3_topic3: "STM32H7 & PX4",
    card3_topic4: "Simulink & DroneCAN",

    // Experience & Education Section
    exp_heading: "berufserfahrung & ausbildung",
    exp_sub: "Industrielle Ingenieur-Praktika, Stromnetzberechnungen, Verteilerbau und praktische Werkstattausbildung.",
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

    edu_heading: "Ausbildung & Werkstattkompetenzen",
    edu_1_title: "HTL Elektrotechnik Salzburg",
    edu_1_subtitle: "Höhere Technische Lehranstalt für Elektrotechnik • 2023 - 2028",
    edu_1_desc: "5-jährige fundierte Ingenieurausbildung in Energietechnik, Regelungstechnik, Embedded C/C++, CAD-Konstruktion, Elektronik und Softwareentwicklung.",

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
    skills_sub: "Strukturierte Ingenieurkompetenzen in Software, Mikrocontrollern, CAD, Medienproduktion, KI-Technologien und aktiver Weiterbildung.",

    skills_cat1: "Sprachen, Web & Versionskontrolle",
    skills_cat2: "CAD, Automatisierung & PLC",
    skills_cat3: "Medien, 3D & Office-Produktion",
    skills_cat4: "KI-Tools & Machine Learning",
    skills_cat5: "Aktuell am Lernen für Projekte",

    // Projects Section
    projects_title: "ausgewählte ingenieurprojekte",
    projects_sub: "Dokumentierte Ingenieurprojekte mit KI Reinforcement Learning, 6DoF Bewegungssimulation, High-Performance Parsern und eigener Hardware.",

    filter_all: "Alle Systeme",
    filter_ai: "KI & Autonomie",
    filter_lowlevel: "Embedded C/C++",
    filter_hardware: "Hardware & Sim",

    // Project 1: Crazy Car
    proj1_title: "Crazy Car: Autonomes KI/RL RC-Car",
    proj1_date: "Aug 2025 - Feb 2026 (Wettbewerb Graz)",
    proj1_desc: "Unser allererstes echtes Ingenieurprojekt neben dem 6DoF Simulator. Wir kauften ein günstiges 30€ Amazon RC-Car, bauten es mit Mikrocontroller und Servo um und trainierten ein KI-Modell in Unity für autonomes Fahren. Ein wichtiges Experiment, um Grenzen zu testen, aus Fehlern zu lernen und bei zukünftigen Bewerben erfolgreich zu sein.",
    proj1_b1: "Training der KI in Unity ML-Agents (Aug-Dez 2025) mit Eingabe von Geschwindigkeit, IMU & 3 ToF-Sensoren zur direkten Motor- & Servosteuerung (ohne PID-Filter).",
    proj1_b2: "Hardware-Probleme auf der Platine: Leiterbahnen zum IMU-Sensor wurden beim CAD-Routing vergessen, und hohe Motorströme störten die Sensorsignale.",
    proj1_b3: "Fertigstellung erst wenige Tage vor dem Bewerb in Graz (Feb 2026); trotz 2 Tagen intensiver Fehlersuche vor Ort reagierte das Auto nicht, was uns wertvolle Lektionen für Foljeprojekte lehrte.",

    // Crazy Car Subpage Specific DE Translations
    cc_base_platform: "Basis Platform",
    cc_mcu: "Mikrocontroller",
    cc_control_approach: "Regelungsansatz",
    cc_version_control: "Versionskontrolle",
    cc_no_vc_note: "Keine (Wertvolle Lektion)",

    cc_time1_title: "Aug 2025 – Dez 2025: KI-Training & Hardware-Design",
    cc_time1_desc: "Als Projektleiter habe ich unzählige Stunden in Unity ML-Agents verbracht, um die Reinforcement Learning Agenten zu programmieren und zu trainieren. Ich nutzte Curriculum Learning—zuerst auf einer einfachen Teststrecke, bevor es auf die echte Rennstrecke ging. Parallel dazu bauten wir das 30€ RC-Car um und entwarfen unsere Platine im CAD.",

    cc_time2_title: "Jan 2026 – Feb 2026: Verzögerter Aufbau & Entdeckte Hardwarefehler",
    cc_time2_desc: "Unser größter Fehler war, zu lange mit der Fertigstellung des physischen Autos zu warten. Der Zusammenbau wurde erst wenige Tage vor dem Wettbewerb in Graz fertig. Letzte Prüfstandstests zeigten kritische Mängel: Beim PCB-Routing wurden die IMU-Leiterbahnen vergessen, und hohe Motorströme erzeugten EMV-Störungen.",

    cc_time3_title: "Feb 2026: Wettbewerb in Graz & Fehlersuche vor Ort",
    cc_time3_desc: "Obwohl das Auto zu Hause nicht richtig funktionierte, fuhren wir entschlossen nach Graz. Vor Ort funktionierte nichts—das Fahrzeug reagierte nicht auf Steuerbefehle. Wir verbrachten 2 intensive Tage vor Ort mit der Fehlersuche an Stromleitungen und Signalen, konnten die Hardwarefehler aber nicht mehr rechtzeitig beheben. Dieser Misserfolg motivierte uns jedoch, unser Bodeneffekt-Fahrzeug 2027 ganze 8 Monate früher zu starten!",

    cc_prob1_title: "1. Direkte KI-End-to-End Motorsteuerung (Ohne PID-Filter)",
    cc_prob1_desc: "In unserem ursprünglichen Entwurf steuerte das trainierte neuronale Netz die Motordrehzahl und den Lenkservo direkt auf Basis von Geschwindigkeit, IMU-Werten und 3 ToF-Abstandssensoren—ohne PID-Regler oder Sicherheitsfilter dazwischen. Während dieser Ansatz in der Unity-Simulation perfekt funktionierte, führten Latenzen und ungefilterte Sensorspitzen in der Realität zu instabilem Verhalten.",

    cc_prob2_title: "2. Platinen-Routingfehler & Motorstrom-Störungen",
    cc_prob2_desc: "Das Design der eigenen Platine im Zeitraum Aug–Dez war eine große Lernkurve. Beim Layout wurden versehentlich die Leiterbahnen zum IMU-Sensor vergessen. Zudem führte die Stromversorgung des Motors über dieselbe Schiene wie die Sensoren bei Beschleunigung zu Spannungseinbrüchen und EMV-Störungen.",

    cc_prob3_title: "Warum Versionskontrolle (Git) wichtig ist & Fazit",
    cc_prob3_desc: "Leider haben wir für dieses Projekt kein Git verwendet. Bei späten Code-Änderungen kurz vor Graz war es unmöglich, funktionierende Stände nachzuvollziehen. Wir haben diese Lektion gelernt: Alle zukünftigen Projekte nutzen strikte Git-Commits, getrennte Stromversorgungen, PID-Filter und frühzeitige Hardware-Tests!",

    cc_pdf_heading: "Platinen-Schaltpläne & Gerber-Dateien",
    cc_pdf_sub: "Offizielle CAD-Schaltpläne, Layout-Zeichnungen und Fertigungs-Gerberdateien aus der Entwicklungsphase Aug–Dez 2025.",
    cc_pdf1_title: "PCB Schaltplan",
    cc_pdf1_sub: "ESP32 & ToF Schaltung",
    cc_pdf2_title: "PCB Layout Zeichnung",
    cc_pdf2_sub: "Platinen-Routing",
    cc_gerber_title: "Gerber Fertigungsdateien",
    cc_gerber_sub: "Produktions-Archiv",

    cc_gallery_sub: "Klicke auf ein Bild, um es in der Vollbild-Zoomansicht zu öffnen. Die Bildunterschriften dokumentieren die Bauphasen und den Wettbewerb in Graz.",
    cc_fig1: "Abbildung 1: Umgebautes 30€ Amazon Lamborghini RC-Car Karosserie & Chassis.",
    cc_fig2: "Abbildung 2: Innenansicht der Elektronik mit ESP32, Lenkservo und eigener Platine.",
    cc_fig3: "Abbildung 3: Hardware-Montage und Diagnose vor Ort beim Wettbewerb in Graz.",
    cc_fig4: "Abbildung 4: Fehlersuche an Strom- und Sensorverkabelung beim Bewerb in Graz.",
    cc_fig5: "Abbildung 5: 3D-CAD-Layout der eigenen Mikrocontroller-Platine aus Ende 2025.",
    cc_fig6: "Abbildung 6: Die offizielle Wettbewerbs-Rennstrecke in Graz.",

    // Project 2: 6DoF Sim
    proj2_title: "6DoF Dynamischer Fahr-Simulator",
    proj2_date: "Mai 2025 - Jan 2026 (Fertiggestellt für Tag der offenen Tür)",
    proj2_desc: "Restaurierung des defekten 6DoF-Simulators der HTL Salzburg durch Behebung von EMV-Störungen mittels physischer Kabeltrennung und eigener C++ Software.",
    proj2_b1: "Ursachenanalyse der EMV-Störungen; physische Trennung von Signal- und Leistungskabeln sowie Bau eines Verteilerschranks.",
    proj2_b2: "Entwicklung modularer C++ Steuerungsoftware und Sponsoring-Akquise für 2.000€ Monitore & 3,5k€ Gaming-PC beim Abteilungsvorstand.",
    proj2_b3: "Hauptattraktion beim Tag der offenen Tür 2026; Bestätigung für Davids Leidenschaft für Avionik, Hardware-Coding und Elektronikplanung.",

    // Project 3: EDI Parser
    proj3_title: "High-Performance Zero-Allocation EDI Engine",
    proj3_date: "Gestartet April 2026 (Aktives Stealth-Projekt)",
    proj3_desc: "Hochdurchsatz O(1) EDI-Streaming-Engine in <35 MB RAM. Zero-Code Regelwerk über JSON-Konfigurationen (Vertrauliches Business-Projekt).",
    proj3_b1: "Speicherbedarf strikt auf O(1) (~35 MB RAM) begrenzt für Multi-Gigabyte EDI/FACT Datenströme.",
    proj3_b2: "Zero-Code Parsing-Logik gesteuert über externe JSON-Mapping-Regelwerke (V3/V4 Standards).",
    proj3_b3: "Vollständig Dockerisiert, Microservices-ready und aktuell in kommerzieller Evaluierung für Industriepartner.",

    // Project 4: Tri-Tilt SAR VTOL
    proj4_title: "Tri-Tilt-Rotor SAR VTOL Drohne (Diplomarbeit)",
    proj4_date: "Gestartet Juni 2026 • Ziel 2028 (Diplomarbeit)",
    proj4_desc: "BVLOS Rettungsdrohne nach AustroControl SORA SAIL II Richtlinien. Dual Pixhawk FMU + Nvidia Jetson ROS2 Schwarmarchitektur.",
    proj4_b1: "Entwickelt für alpine Rettungseinsätze mit Wärmebild-KI Personenerkennung, GPS-Jamming-sicherem Optical-Flow (±2m Präzision) und Fallschirm-Auslösung.",
    proj4_b2: "Specs: 15-20 kg Masse, 3m Spannweite, 130 km/h Höchstgeschwindigkeit, 85 km/h Reiseflug, 120-400m Einsatzhöhe (bis 4000m im Reisemodus).",
    proj4_b3: "In aktiven Sponsoring- und Testgelände-Gesprächen mit dem Österreichischen Bundesheer.",

    // Project 5: C++ Physics Engine
    proj5_title: "Deterministische 6DoF C++ Physik-Engine",
    proj5_date: "März 2026 - May 2026",
    proj5_desc: "Abhängigkeitsfreier 6DoF Flugsimulator von Grund auf in C++20 entwickelt mit RK4-Integration zur Vertiefung von Physik & C++ für das VTOL-Projekt.",
    proj5_b1: "Implementierung eines Runge-Kutta Integrators 4. Ordnung (RK4) bei festem 1.000 Hz Simulationsschritt.",
    proj5_b2: "Quaternionen-Lageregelung verhindert Gimbal-Lock bei steilen Manövern.",
    proj5_b3: "Integration einer UDP-Telemetrie-Pipe zur Übertragung an Ground Control Station Tools.",

    // Project 6: Ground Effect Car
    proj6_title: "DIN A4 Autonomes Bodeneffekt-Fahrzeug",
    proj6_date: "Gestartet April 2026 (Wettbewerb 2027 • Nachfolger)",
    proj6_desc: "Direkter Nachfolger des Crazy Cars 8 Monate früher gestartet! 13 kg Bodeneffekt-Unterdruck auf 2 kg Fahrzeugmasse, Bugatti-artige Beschleunigung & STM32H7 MPC.",
    proj6_b1: "SolidEdge CAD-Chassis mit 1:6,5 Leistungsgewicht; 400€ Bauteil-Sponsoring akquiriert.",
    proj6_b2: "Entwicklung eines Model Predictive Controllers (MPC) in MATLAB/Simulink auf STM32H7 zur Positionsschätzung.",
    proj6_b3: "Berechnung der optimalen Rennlinie mit ToF-Sensoren zur Hindernisumfahrung für den Gesamtsieg 2027.",

    // Action Links
    link_github: "GitHub Repo",
    link_spec: "Design Spec (PDF)",
    link_deepdive: "Projektstory & Post-Mortem →",

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
