/**
 * @file i18n.js
 * @description Comprehensive Dual-Language Translation Dictionary (EN Primary, DE Secondary)
 * Tailored for David Sommerer — Electrical Engineering Student & Systems Engineer.
 */

export const translations = {
  en: {
    // Navigation & General
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience & Education",
    back_overview: "← Back to Projects",
    timeline_title: "Project Timeline & Milestones",
    problems_title: "Engineering Challenges & Root Cause Failures",
    learnings_title: "Key Lessons & What We Learned",
    gallery_title: "Project Media, Code & CAD Assets",

    // Hero Section
    hero_greeting: "Hi, I'm",
    hero_name: "David Sommerer.",
    hero_role_prefix: "I'm an",
    hero_role: "Electrical Engineering Student & Systems Engineer",
    hero_specializing: "specializing in",
    hero_focus: "Avionics, Embedded Systems, Electronics & Software Engineering.",
    hero_subtitle: "Student at the Higher Technical Institute for Electrical Engineering Salzburg (HTL). Engineering avionics systems, embedded firmware, electronics, autonomous vehicles and software architecture.",
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
    term_whoami_desc: "17-year-old Electrical Engineering Student & Systems Engineer at the Higher Technical Institute for Electrical Engineering Salzburg (HTL) specializing in avionics, embedded firmware, electronics planning and software engineering.",
    term_cmd_grep: 'grep -r "expertise" /var/log/systems.log',
    term_expertise: "Avionics · Embedded C/C++ · Electronics · Software Engineering",
    term_cmd_conf: "cat /etc/tech-ecosystem.conf",
    term_conf_val: "avionics=true  embedded_cpp=true  electronics=true  software_eng=true",
    term_cmd_products: "./projects --list",
    term_p1: "> Crazy Car Autonomous RL - €30 RC car with ESP32 & Unity ML-Agents.",
    term_p2: "> 6DoF Driving Simulator - Fully restored & repaired HTL 6DoF motion simulator.",
    term_p3: "> EDI-to-JSONL Parser - Zero-allocation +40 MB/s end-to-end C++20 streaming engine.",
    term_p4: "> Tri-Tilt-Rotor SAR VTOL - Search & rescue VTOL drone for person location & GPS telemetry broadcasting.",

    // 3 Quick Cards Below Hero
    card1_title: "Education & Schooling",
    card1_role1: "Higher Technical Institute for Electrical Engineering Salzburg (HTL)",
    card1_date1: "5-Year Engineering Program • 2023 - 2028",
    card1_role2: "Diploma Thesis R&D Project",
    card1_date2: "SAR VTOL Drone & SORA • 2026 - 2028",
    card1_role3: "Specialization",
    card1_date3: "Avionics, Embedded Systems, Electronics & Software",

    card2_title: "Featured Projects",
    card2_topic1: "Crazy Car Autonomous RL",
    card2_desc1: "€30 RC car rebuilt with ESP32, AI trained in Unity ML-Agents.",
    card2_topic2: "6DoF Driving Simulator",
    card2_desc2: "Fully restored school motion rig, physical signal/power wiring & control.",
    card2_topic3: "Tri-Tilt-Rotor SAR VTOL",
    card2_desc3: "Search & rescue VTOL drone transmitting live GPS position data.",

    card3_handle: "currently learning",
    card3_topic1: "Linux / Ubuntu",
    card3_topic2: "ROS2 & Gazebo",
    card3_topic3: "STM32H7 & PX4",
    card3_topic4: "Simulink & DroneCAN",

    // Experience & Education Section
    exp_heading: "work experience & education",
    exp_sub: "Industrial engineering internships, municipal power grid calculations, custom switchgear manufacturing and hands-on workshop fabrication.",
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
    intern_2_b1: "Independently built and wired large-scale industrial fuse boxes, main distribution switchgear and control cabinets.",
    intern_2_b2: "Constructed high-power electrical distribution assemblies tailored for major industrial companies across Austria.",

    edu_heading: "Education & Workshop Fabrication Skills",
    edu_1_title: "Higher Technical Institute for Electrical Engineering Salzburg (HTL)",
    edu_1_subtitle: "5-Year Higher Engineering Program • 2023 - 2028",
    edu_1_desc: "5-year intensive engineering program covering power systems, control engineering, embedded C/C++, CAD design, electronics and software development.",

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
    // Technical Skills Section
    skills_title: "technical skills & stack",
    skills_sub: "Structured engineering competencies across software, microcontrollers, CAD automation, media production, AI technologies and active learning.",

    skills_cat1: "Languages, Web & Version Control",
    skills_cat2: "CAD, Automation & PLC Engineering",
    skills_cat3: "Media, 3D & Office Production",
    skills_cat4: "AI Tools & Machine Learning",
    skills_cat5: "Currently Learning for Projects",

    // Projects Section
    projects_title: "featured engineering projects",
    projects_sub: "Documented engineering projects featuring AI reinforcement learning, 6DoF motion simulation, high-performance parsers and custom hardware.",

    filter_all: "All Systems",
    filter_ai: "AI & Autonomie",
    filter_lowlevel: "Embedded C/C++",
    filter_hardware: "Hardware & Sim",

    // Project 1: Crazy Car
    proj1_title: "Crazy Car: Autonomous AI/RL RC Car",
    proj1_date: "Aug 2025 - Feb 2026 (Graz Competition)",
    proj1_desc: "Our very first real engineering project besides the 6DoF simulator. We bought a cheap 30€ Amazon RC car, rebuilt it with a microcontroller and servo and trained an AI model in Unity to drive autonomously. A vital experiment built to test boundaries, learn from failures and succeed in future competitions.",
    proj1_b1: "Trained RL agent in Unity ML-Agents (Aug-Dec 2025) taking velocity, IMU and 3 ToF sensors to directly output motor speed & servo steering angle (no intermediate PID).",
    proj1_b2: "Faced PCB hardware flaws: IMU trace routing was accidentally omitted during CAD layout and high motor current noise interrupted sensor signals under load.",
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
    cc_time2_desc: "The main mistake was waiting too long to finish the physical build. The car was assembled only a few days before the Graz competition. Last-minute bench testing revealed critical issues: PCB trace routing errors omitted the IMU sensor connection and high motor current draw generated EMI noise that corrupted sensor signals.",

    cc_time3_title: "Feb 2026: Competition in Graz & On-Site Debugging",
    cc_time3_desc: "Even though the car wasn't running properly at home, we still went to Graz determined to compete. At the venue, nothing worked—the vehicle failed to respond to control commands. We spent 2 intense days troubleshooting power lines and noise on-site, but couldn't resolve the hardware flaws before our run. Though we didn't score points, this failure motivated us to start our 2027 Ground Effect vehicle 8 months early!",

    cc_prob1_title: "1. Direct AI End-to-End Motor Control (No PID Buffer)",
    cc_prob1_desc: "In our initial design, the trained neural network directly controlled the motor speed percentage and steering servo angle based on velocity, IMU values and 3 Time-of-Flight (ToF) distance sensors. There was no PID controller or safety filter in between. While this end-to-end approach worked seamlessly in the Unity simulation, real-world motor latency and unbuffered sensor spikes caused erratic responses on the physical track.",

    cc_prob2_title: "2. PCB Routing Flaws & Motor Current Noise",
    cc_prob2_desc: "Designing the custom PCB during the Aug–Dec window was a huge learning curve. During board routing, traces for the IMU sensor were accidentally omitted from the layout. Furthermore, powering the drive motor from the same rail as the sensors caused severe voltage sags and electromagnetic interference (EMI) whenever the motor accelerated, causing sensor readings to drop.",

    cc_prob3_title: "Why Version Control (Git) Matters & Key Takeaways",
    cc_prob3_desc: "Stupidly, we didn't use Git for source control on this project. When code edits were made late at night before Graz, tracking working states became impossible. We learned these lessons the hard way: all future projects now enforce strict Git commits, decoupled power isolation, PID control buffers and early hardware integration!",

    cc_pdf_heading: "PCB Engineering Schematics & Gerber Files",
    cc_pdf_sub: "Official CAD schematic diagrams, PCB layout board drawings and manufacturing Gerber files designed between Aug–Dec 2025.",
    cc_pdf1_title: "PCB Circuit Schematic",
    cc_pdf1_sub: "ESP32 & ToF Circuitry",
    cc_pdf2_title: "PCB Layout Drawing",
    cc_pdf2_sub: "Board Layer Routing",
    cc_gerber_title: "Gerber Production Files",
    cc_gerber_sub: "Manufacturing Archive",

    cc_gallery_sub: "Click any image to view in full-screen zoom mode. Captions document the build evolution and Graz competition venue.",
    cc_fig1: "Figure 1: Modified 30€ Amazon Lamborghini RC car body and chassis.",
    cc_fig2: "Figure 2: Interior electronics layout with ESP32, steering micro-servo and custom PCB.",
    cc_fig3: "Figure 3: On-site hardware assembly and diagnostic session at the Graz competition venue.",
    cc_fig4: "Figure 4: Open chassis power & sensor wiring troubleshooting taken at the Graz competition.",
    cc_fig5: "Figure 5: 3D CAD layout of the custom microcontroller PCB designed in late 2025.",
    cc_fig6: "Figure 6: The official competition racetrack in Graz.",

    // Project 2: 6DoF Sim
    proj2_title: "6DoF Dynamic Motion Simulator Rig",
    proj2_date: "May 2025 - Jan 2026 (Finished for HTL Open Door Day)",
    proj2_desc: "Fully restored and repaired a broken, legacy 6DoF motion rig at HTL Salzburg by diagnosing electrical/mechanical faults and building custom C++ control software.",
    proj2_b1: "Diagnosed root cause EMI interference and mechanical faults; separated signal & power wiring and built a custom electrical distribution fuse box.",
    proj2_b2: "Wrote modular C++ control software and secured €2,000 monitors & €3.5k gaming PC sponsorships from department leadership.",
    proj2_b3: "Featured as the main highlight at HTL Salzburg Open Door Day 2026.",

    // 6DoF Subpage Specific EN Translations
    sim_title: "6DoF Dynamic Motion Simulator Rig",
    sim_date: "May 2025 - Jan 2026 (HTL Open Door Day Highlight)",
    sim_desc: "In 2nd grade at HTL Salzburg, we took on a non-functional legacy 6DoF Stewart platform motion rig. Through comprehensive electrical troubleshooting, physical cable rewiring, custom fuse box construction and C++ software development, we fully restored the rig to live operation.",
    sim_stat1_title: "Actuation Platform",
    sim_stat1_val: "6-Axis Stewart Platform",
    sim_stat2_title: "Sponsorship Acquired",
    sim_stat2_val: "€5,500 (Monitors & PC)",
    sim_stat3_title: "Software Engine",
    sim_stat3_val: "Custom C++ Kinematics",
    sim_stat4_title: "Press Coverage",
    sim_stat4_val: "Kronen Zeitung & HTL IG",

    sim_time1_title: "May 2025: Discovery & Comprehensive Diagnosis",
    sim_time1_title: "May 2025: Discovery & Comprehensive Diagnosis",
    sim_time1_desc: "During our 2nd grade at HTL Salzburg, we discovered a non-functional legacy 6DoF motion rig sitting forgotten in the workshop. We initiated a systemic tear-down, tracing every electrical connection, motor controller and power line to diagnose root cause failures.",
    
    sim_time2_title: "Summer – Autumn 2025: Rewiring & Custom Fuse Box Construction",
    sim_time2_desc: "We solved severe signal jitter and random cut-outs by completely rewiring the platform. Teammate designed a custom power distribution fuse box while we physically isolated high-current AC/DC motor power cables away from delicate sensor & control telemetry lines.",

    sim_time3_title: "Nov – Dec 2025: C++ Software Engine & Department Sponsorship",
    sim_time3_desc: "I engineered the C++ control software connecting telemetry stream data to the motor actuator controllers over serial/CAN bus. To complete the simulator, I presented a professional proposal to department heads, successfully securing €2,000 in triple monitors and a €3,500 high-performance gaming PC.",

    sim_time4_title: "Jan 2026: Public Feature at HTL Open Door Day & Media Coverage",
    sim_time4_desc: "The restored simulator debuted as the absolute flagship exhibit at HTL Salzburg Open Door Day 2026. Hundreds of visitors drove realistic laps, earning the project coverage in Austria's Kronen Zeitung newspaper and an official HTL Instagram Reel spotlight!",

    sim_sec1_title: "1. Systemic Electrical Repair & Physical Cable Isolation",
    sim_sec1_desc: "The primary challenge was resolving severe electromagnetic interference (EMI) and power sags that caused the linear actuators to stall randomly. By completely separating high-voltage power feeds from micro-level signal cables and building a custom fuse box, we restored 100% electrical stability.",

    sim_sec2_title: "2. Custom C++ Control Engine & Kinematics",
    sim_sec2_desc: "I developed the modular C++ telemetry reader and control engine. The software receives live telemetry physics data from racing simulators (Assetto Corsa / F1), calculates inverse kinematics for the 6 linear actuators and outputs synchronized PWM/CAN position targets in real time.",

    sim_sec3_title: "Key Lessons & Impact on Career Focus",
    sim_sec3_b1: "Hands-on mastery of EMC isolation, high-voltage wiring and power distribution fuse boxes.",
    sim_sec3_b2: "Practical C++ software engineering experience interfacing real-time telemetry to physical actuators.",
    sim_sec3_b3: "This successful restoration solidified my determination to pursue Avionics, Flight Control Systems and Embedded Hardware.",

    sim_media_sub: "Real video of the 6DoF motion rig operating live during racing simulation, CAD 3D assembly models and MATLAB kinematic simulation plots.",
    sim_fig1: "Figure 1: CAD 3D concept model of the 6DoF Stewart platform motion chassis.",
    sim_fig2: "Figure 2: MATLAB kinematic simulation trajectory plot for actuator displacement.",
    sim_fig3: "Video 1: Live demonstration video of the restored 6DoF simulator operating during a high-speed racing run.",

    sim_press_heading: "Press Articles, Instagram Reel & GitHub Source Code",
    sim_press_sub: "Featured in Kronen Zeitung, official HTL Salzburg Instagram media and complete C++ source code on GitHub.",
    sim_link_krone: "Kronen Zeitung Article",
    sim_link_insta: "HTL Instagram Reel Video",
    sim_link_repo: "GitHub Repository (C++ Code)",

    // Project 3: EDI Parser
    proj3_title: "OBXID Engine: High-Performance Data Gateway",
    proj3_date: "Started April 2026 (Active Stealth Project)",
    proj3_desc: "High-throughput O(1) EDI streaming engine processing +40 MB/s end-to-end (from file transmission to final reception) in <35 MB RAM.",
    proj3_b1: "Binds memory footprint to strictly O(1) (~35 MB RAM) while maintaining +40 MB/s end-to-end processing speeds.",
    proj3_b2: "Engineered zero-code parsing logic driven dynamically by external JSON mapping configurations (V3/V4 standards).",
    proj3_b3: "Fully Dockerized, microservices-ready architecture currently under commercial evaluation for industrial partnerships.",

    // EDI Subpage Specific EN Translations
    edi_title: "OBXID Engine: High-Performance Data Gateway",
    edi_date: "Started April 2026 (Active Stealth Project)",
    edi_desc: "Autonomous inbound gateway engineered in C++20 for enterprise IT perimeters. Filters, validates and streams industrial EDIFACT data directly into structured, AI-ready JSON Lines (JSONL) format at +40 MB/s end-to-end speed in under 35 MB RAM.",
    edi_tag1: "C++20 High-Throughput Engine",
    edi_tag2: "O(1) Bounded Memory",
    edi_tag3: "Air-Gapped Kubernetes / Helm",
    edi_stealth_badge: "STEALTH ENTERPRISE GATEWAY",
    edi_card_heading: "Inbound Perimeter Security & Real-Time AI Readiness",
    edi_card_desc: "The OBXID Engine functions as an ultra-fast, self-contained inbound security shield directly in front of enterprise ERP and SAP boundaries. It intercepts raw EDIFACT streams, validates segment integrity and converts data on the fly into AI-ready JSON Lines (JSONL).",
    edi_stat1_title: "End-to-End Speed",
    edi_stat1_val: "+40 MB/s per Core",
    edi_stat2_title: "RAM Footprint",
    edi_stat2_val: "<35 MB (O(1) Bounded)",
    edi_stat3_title: "Deployment Security",
    edi_stat3_val: "100% Air-Gapped / Helm",
    edi_stat4_title: "Mapping Logic",
    edi_stat4_val: "No-Code JSON Rules",

    edi_sec1_title: "1. System Architectural Role & Perimeter Protection",
    edi_sec1_desc: "The OBXID Engine is designed as a high-speed, self-contained inbound security gateway positioned right before the enterprise IT boundary. It does not replace existing ERP or SAP environments; instead, it intercepts raw EDIFACT streams, catches corrupted segments or syntax mismatches in real time and converts incoming data into clean, structured JSON Lines (JSONL) before downstream systems process it.",

    edi_sec2_title: "2. Core Performance Parameters & Hardware Efficiency",
    edi_sec2_desc: "Built in modern C++20, the engine eliminates heavy monolithic converter overhead through maximum hardware efficiency:",
    edi_sec2_b1: "<strong>High-Throughput Parsing:</strong> Achieves over 35 to 40 MB/s processing speed per CPU core end-to-end from initial file transmission to complete reception.",
    edi_sec2_b2: "<strong>Lean Memory Footprint:</strong> Bounded to strictly O(1) memory complexity (~24 MB to 35 MB RAM per instance), eliminating the need for expensive server upgrades or inflated cloud instances.",
    edi_sec2_b3: "<strong>Air-Gapped Cloud-Native Deployment:</strong> 100% self-contained air-gapped architecture provided with a customized Helm Chart for rapid, standardized Kubernetes cluster deployment in minutes.",
    edi_sec2_b4: "<strong>Guaranteed Data Sovereignty:</strong> Sensitive supplier and enterprise business data never leaves the protected internal infrastructure.",

    edi_sec3_title: "3. No-Code Mapping, Express Debugging & AI Readiness",
    edi_sec3_desc: "Transformation rules are managed dynamically through a single central configuration file without requiring recompilation:",
    edi_sec3_b1: "<strong>No-Code JSON Rules:</strong> Business rules, compliance checks and field assignments are stored as human-readable JSON.",
    edi_sec3_b2: "<strong>Express-Debugging Diagnostics:</strong> Generates structured, machine-readable error logs on anomaly detection, eliminating manual string searches and saving hundreds of developer hours.",
    edi_sec3_b3: "<strong>AI & RAG Pipeline Readiness:</strong> Native output in JSON Lines (JSONL) allows direct streaming into vector databases, LLM Retrieval-Augmented Generation (RAG) pipelines and real-time supplier dashboards.",

    edi_roadmap_title: "Project Status & Technological Roadmap",
    edi_rm1_title: "Phase 1 (Current) — Core Hardening & Verification",
    edi_rm1_desc: "Focus on parser core hardening, zero-copy optimization and building an automated test suite for regression-free performance.",
    edi_rm2_title: "Phase 2 — Enterprise Licensing & Kubernetes Orchestration",
    edi_rm2_desc: "Development of the enterprise licensing module and high-availability Air-Gapped Kubernetes cluster orchestration.",
    edi_rm3_title: "Phase 3 — Visual Drag-&-Drop Editor & EDIFACT Wiki",
    edi_rm3_desc: "Deployment of an intuitive web mapping editor and interactive EDIFACT directory wiki with pre-built downloadable mappings.",

    edi_stealth_note: "Stealth Commercial Project — Core source code and proprietary enterprise partner mappings remain confidential.",

    // Project 4: Tri-Tilt SAR VTOL
    proj4_title: "Tri-Tilt-Rotor SAR VTOL Drone (Diploma Thesis)",
    proj4_date: "Started June 2026 • Target 2028 (Diploma Thesis)",
    proj4_desc: "Search & rescue 3-rotor VTOL drone engineered to locate missing persons and broadcast live GPS coordinates to emergency ground teams.",
    proj4_b1: "Engineered for Alpine Search & Rescue with thermal IR AI person detection and live GPS coordinate broadcasting to rescue teams.",
    proj4_b2: "Specs: 15-20 kg mass, 3m wingspan, 130 km/h top speed, 85 km/h cruise speed, 120-400m operational altitude (up to 4000m travel mode).",
    proj4_b3: "In active sponsorship & testing site talks with the Austrian Armed Forces (Österreichisches Bundesheer).",

    // VTOL Subpage Specific EN Translations
    vtol_title: "Tri-Tilt-Rotor SAR VTOL Drone (Diploma Thesis)",
    vtol_date: "Started June 2026 • Target 2028 (Diploma Thesis)",
    vtol_desc: "BVLOS Search & Rescue 3-rotor VTOL drone built under AustroControl SORA SAIL II safety guidelines. Dual Pixhawk FMU + Nvidia Jetson ROS2 swarm architecture with thermal IR AI person detection and live GPS coordinate broadcasting.",
    vtol_hero_tag1: "Started June 2026 • Target 2028 (Diploma Thesis)",
    vtol_hero_tag2: "AustroControl SORA SAIL II",
    vtol_hero_tag3: "Dual Pixhawk + Nvidia Jetson ROS2",
    vtol_hero_tag4: "BVLOS Swarm Architecture",

    vtol_stat1_title: "Mass & Wingspan",
    vtol_stat1_val: "15 - 20 kg | 3.0m Span",
    vtol_stat2_title: "Top / Cruise Speed",
    vtol_stat2_val: "130 km/h | 85 km/h",
    vtol_stat3_title: "Operational Ceiling",
    vtol_stat3_val: "120-400m (Up to 4000m)",
    vtol_stat4_title: "Cooperation Target",
    vtol_stat4_val: "Austrian Armed Forces",

    vtol_time1_title: "June 2026: Project Inception & Team Alignment",
    vtol_time1_title: "June 2026: Project Inception & Team Alignment",
    vtol_time1_desc: "Formed 2-person team for HTL Diploma Thesis (Diplomarbeit). David selected as team lead for avionics, software, SORA safety, GCS ground control station and military partner contacts.",
    vtol_time2_title: "July 2026: SORA SAIL II Certification Drafting",
    vtol_time2_desc: "Authored Technical Design Document (TDD) adhering to AustroControl SORA SAIL II guidelines for BVLOS operations in Alpine search & rescue terrain.",
    vtol_time3_title: "2026 - 2028: Development, ROS2 Swarm & Military Contact",
    vtol_time3_desc: "Developing decentralized ROS2 companion computer architecture on Nvidia Jetson towards 2028 graduation. In active talks with the Austrian Armed Forces (Österreichisches Bundesheer) for testing sites and sponsorship.",

    vtol_sec1_title: "1. System Division & Team Responsibilities",
    vtol_sec1_desc: "Our team split responsibilities cleanly: my teammate focuses on carbon composite chassis mechanics, propulsion sizing, power distribution and the 90° tilt mechanism. As team lead, I engineer all avionics, electronic redundancy, SORA safety compliance, ROS2 companion software, PID mixers, GCS ground control station and military partner contacts.",

    vtol_sec2_title: "2. Vehicle Specifications & Operational Profile",
    vtol_sec2_desc: "The Tri-Tilt-Rotor SAR VTOL drone is engineered for extreme Alpine conditions where traditional multirotors lack range and fixed-wing aircraft cannot land:",
    vtol_sec2_b1: "<strong>Mass & Airframe:</strong> 15 to 20 kg total takeoff mass with a 3.0-meter wingspan for efficient long-range gliding.",
    vtol_sec2_b2: "<strong>Flight Speeds:</strong> Top speed of 130 km/h with an efficient cruise speed of 85 km/h.",
    vtol_sec2_b3: "<strong>Operational Ceiling:</strong> Operational search altitude between 120m and 400m AGL, with a maximum travel altitude capability up to 4,000m MSL for mountain ridge crossings.",

    vtol_sec3_title: "3. Thermal IR AI Person Detection & Jamming-Safe Navigation",
    vtol_sec3_desc: "Designed for harsh Alpine search & rescue operations, the drone carries a thermal IR camera streaming to an onboard AI vision pipeline executing on the Nvidia Jetson companion computer. When a missing person is recognized, real-time GPS coordinates are broadcast back to ground emergency rescue teams. To counter Electronic Warfare (EW) and GPS jamming in remote mountains, an optical flow camera algorithm maps terrain features to bound position drift within ±2m without satellite signal.",

    vtol_sec4_title: "4. SORA SAIL II Compliance & Military Partnership",
    vtol_sec4_desc: "Operating Beyond Visual Line of Sight (BVLOS) in Austria requires strict adherence to AustroControl SORA SAIL II safety guidelines. Our Technical Design Document (TDD) outlines dual-redundant flight control units (Pixhawk FMU), fail-safe parachute recovery systems and encrypted telecommunications links. We are currently in active talks with the Austrian Armed Forces (Österreichisches Bundesheer) regarding specialized flight testing grounds and tactical sponsorship.",

    vtol_media_sub: "CAD 3D concept renders, structural technical design document (TDD) and flight architecture schematics.",
    vtol_fig1: "Figure 1: CAD 3D Concept Render of the Tri-Tilt-Rotor SAR VTOL Drone.",
    vtol_pdf_title: "Technical Design Document (TDD)",
    vtol_pdf_sub: "AustroControl SORA SAIL II Draft Spec (PDF)",

    // Project 5: C++ Physics Engine
    proj5_title: "AeroPhysicsEngine: C++ Physics Experiment",
    proj5_date: "Personal Learning Project",
    proj5_desc: "A small C++ sandbox experiment built to learn C++ at a deeper level and understand rigid-body physics mechanics and vector dynamics from first principles.",
    proj5_b1: "Built as a personal coding sandbox to master modern C++ memory management and language features.",
    proj5_b2: "Explored 3D vector dynamics and rigid-body mechanics algorithms from first principles.",
    proj5_b3: "Served as an educational testbed to strengthen software engineering skills for future robotics projects.",

    // C++ Physics Engine Subpage Specific EN Translations
    pe_hero_tag1: "Personal C++ Learning Project",
    pe_hero_tag2: "C++20 Language Practice",
    pe_hero_tag3: "Vector Dynamics",
    pe_hero_tag4: "Open Source Sandbox",
    pe_title: "AeroPhysicsEngine: C++ Physics Experiment",
    pe_desc: "A small C++ sandbox experiment built to learn C++ at a deeper level and understand rigid-body physics mechanics and vector dynamics from first principles.",
    pe_stat1_title: "Language",
    pe_stat1_val: "Modern C++20",
    pe_stat2_title: "Focus Area",
    pe_stat2_val: "Vector & Physics Math",
    pe_stat3_title: "Primary Purpose",
    pe_stat3_val: "C++ Language Mastery",
    pe_stat4_title: "Repository",
    pe_stat4_val: "GitHub Open Source",
    pe_intent_title: "Project Goal & Learning Purpose",
    pe_intent_desc1: "This project is not meant to compete with commercial physics engines like PhysX or Bullet. Instead, it was built as a focused coding sandbox to learn C++ at a deeper level—exploring modern C++ features, memory layout, object lifetimes and template mechanics while understanding physics calculation algorithms from first principles.",
    pe_intent_desc2: "By practicing vector dynamics and basic rigid-body motion calculations in code, I built a solid foundation in C++ programming and spatial mathematics that directly supported my engineering work on microcontrollers, avionics and autonomous systems.",
    pe_diag_lbl: "// 6DoF KINEMATICS & VECTOR SCHEMATIC",
    pe_repo_heading: "GitHub Source Code Repository",
    pe_repo_sub: "Explore the C++ physics engine repository on GitHub.",


    // Project 6: Ground Effect Car
    proj6_title: "DIN A4 Ground Effect Autonomous Vehicle",
    proj6_date: "Started April 2026 (Comp 2027)",
    proj6_desc: "Direct successor to Crazy Car started 8 months ahead! Features 13 kg ground-effect downforce cushion on 2 kg chassis, Bugatti-like acceleration and STM32H7 MPC.",
    proj6_b1: "Designed CAD chassis in SolidEdge achieving 1:6.5 power-to-weight ratio; secured €400 component sponsorship.",
    proj6_b2: "Developing Model Predictive Control (MPC) in MATLAB/Simulink deployed to STM32H7 for track position estimation.",
    proj6_b3: "Engineered optimal racing line solver with ToF sensor obstacle avoidance to secure victory at 2027 competition.",

    // Ground Effect Vehicle Subpage Specific EN Translations
    ge_hero_tag1: "Started April 2026 (Comp 2027)",
    ge_hero_tag2: "STM32H7 Dual-Core @ 480 MHz",
    ge_hero_tag3: "13 kg Downforce Air Cushion",
    ge_hero_tag4: "€400 Component Sponsorship",
    ge_title: "DIN A4 Ground Effect Autonomous Vehicle",
    ge_desc: "Direct successor to Crazy Car started 8 months ahead! Features 13 kg ground-effect downforce cushion on a 2 kg chassis, Bugatti-like launch acceleration and STM32H7 Model Predictive Control (MPC).",
    ge_stat1_title: "Downforce Cushion",
    ge_stat1_val: "13 kg Suction Seal",
    ge_stat2_title: "Power Ratio",
    ge_stat2_val: "1 : 6.5 kW/kg",
    ge_stat3_title: "Sponsorship Acquired",
    ge_stat3_val: "€400 Components",
    ge_stat4_title: "Control Hardware",
    ge_stat4_val: "STM32H7 @ 480 MHz",
    ge_time1_title: "April 2026: Concept Inception & Early Sponsorship",
    ge_time1_desc: "Directly applying lessons from our Graz Crazy Car experience, we started the 2027 competition vehicle 8 months ahead. Pitching our technical concept secured €400 in component sponsorship for high-torque motors, sensors and power electronics.",
    ge_time2_title: "May – June 2026: SolidEdge 3D CAD & Ground-Effect Aerodynamics",
    ge_time2_desc: "Engineered the complete CAD chassis and ground-effect skirt sealed layout in SolidEdge. Designed a vacuum suction fan generating 13 kg downforce cushion on a 2 kg vehicle mass enabling extreme cornering G-forces without tire slippage.",
    ge_time3_title: "July 2026 – Present: MATLAB/Simulink MPC & STM32H7 Integration",
    ge_time3_desc: "Developing Model Predictive Control (MPC) in MATLAB/Simulink deployed to an STM32H7 dual-core MCU @ 480 MHz. Time-of-Flight (ToF) sensors detect opponents dynamically to adjust racing lines and secure victory in 2027.",
    ge_sec1_title: "1. Aerodynamic Ground Cushion & Explosive Acceleration",
    ge_sec1_desc: "Because competition tracks feature technical, tight turns where acceleration is far more critical than raw top speed, we optimized the vehicle for explosive launch acceleration (capped at 18 km/h). An active ground-effect fan creates a 13 kg downward suction cushion against the track surface, preventing wheelspin and allowing maximum torque delivery.",
    ge_sec2_title: "2. Model Predictive Control (MPC) & ToF Opponent Avoidance",
    ge_sec2_desc: "Using MATLAB/Simulink code generation, a Model Predictive Controller runs on the STM32H7 microcontroller to estimate vehicle trajectory along the circuit. Integrated Time-of-Flight (ToF) distance sensors detect opponent vehicles in real time, calculating evasive racing line offsets while preserving optimal speed.",
    ge_media_sub: "SolidEdge 3D CAD concept models, aerodynamic skirt layouts and component packaging schematics.",
    ge_fig1: "Figure 1: 3D CAD Concept Model of the DIN A4 Ground Effect Autonomous Vehicle designed in SolidEdge.",

    // Action Links
    link_github: "GitHub Repo",
    link_spec: "Design Spec (PDF)",
    link_deepdive: "Explore Project Story →",

    // Footer
    footer_copy: "© 2026 David Sommerer — Higher Technical Institute for Electrical Engineering Salzburg (HTL)."
  },
  de: {
    // Navigation & General
    nav_about: "Über Mich",
    nav_skills: "Skillset",
    nav_projects: "Projekte",
    nav_experience: "Erfahrung & Ausbildung",
    back_overview: "← Zurück zu den Projekten",
    timeline_title: "Projekt-Timeline & Meilensteine",
    problems_title: "Technische Herausforderungen & Fehleranalyse",
    learnings_title: "Key Learnings & Erkenntnisse",
    gallery_title: "Medien, Code & CAD-Assets",

    // Hero Section
    hero_greeting: "Hallo, ich bin",
    hero_name: "David Sommerer.",
    hero_role_prefix: "Ich bin ein",
    hero_role: "Elektrotechnik-Schüler & Systemtechnik-Ingenieur",
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
    term_whoami_desc: "17-jähriger Elektrotechnik-Schüler & Systemtechnik-Ingenieur an der HTL Elektrotechnik Salzburg spezialisiert auf Avionik, Embedded Firmware, Elektronikplanung und Software Engineering.",
    term_cmd_grep: 'grep -r "expertise" /var/log/systems.log',
    term_expertise: "Avionik · Embedded C/C++ · Elektronik · Software Engineering",
    term_cmd_conf: "cat /etc/tech-ecosystem.conf",
    term_conf_val: "avionik=true  embedded_cpp=true  elektronik=true  software_eng=true",
    term_cmd_products: "./projects --list",
    term_p1: "> Crazy Car Autonomes RL - 30€ RC Car mit ESP32 & Unity ML-Agents.",
    term_p2: "> 6DoF Fahr-Simulator - Vollständig restaurierter & reparierter HTL 6DoF Bewegungssimulator.",
    term_p3: "> EDI-to-JSONL Parser - Zero-Allocation +40 MB/s End-to-End C++20 Streaming Engine.",
    term_p4: "> Tri-Tilt-Rotor SAR VTOL - Such- & Rettungs-VTOL-Drohne zur Personensuche & GPS-Telemetrieübertragung.",

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
    card2_desc2: "Vollständig restaurierter HTL Simulator, verkabelt & neu gesteuert.",
    card2_topic3: "Tri-Tilt-Rotor SAR VTOL",
    card2_desc3: "Such- & Rettungs-VTOL-Drohne mit Live-GPS-Telemetrieübertragung.",

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
    proj1_b2: "Hardware-Probleme auf der Platine: Leiterbahnen zum IMU-Sensor wurden beim CAD-Routing vergessen und hohe Motorströme störten die Sensorsignale.",
    proj1_b3: "Fertigstellung erst wenige Tage vor dem Bewerb in Graz (Feb 2026); trotz 2 Tagen intensiver Fehlersuche vor Ort reagierte das Auto nicht, was uns wertvolle Lektionen für Folgeprojekte lehrte.",

    // Crazy Car Subpage Specific DE Translations
    cc_base_platform: "Basis Platform",
    cc_mcu: "Mikrocontroller",
    cc_control_approach: "Regelungsansatz",
    cc_version_control: "Versionskontrolle",
    cc_no_vc_note: "Keine (Wertvolle Lektion)",

    cc_time1_title: "Aug 2025 – Dez 2025: KI-Training & Hardware-Design",
    cc_time1_desc: "Als Projektleiter habe ich unzählige Stunden in Unity ML-Agents verbracht, um die Reinforcement Learning Agenten zu programmieren und zu trainieren. Ich nutzte Curriculum Learning—zuerst auf einer einfachen Teststrecke, bevor es auf die echte Rennstrecke ging. Parallel dazu bauten wir das 30€ RC-Car um und entwarfen unsere Platine im CAD.",

    cc_time2_title: "Jan 2026 – Feb 2026: Verzögerter Aufbau & Entdeckte Hardwarefehler",
    cc_time2_desc: "Unser größter Fehler war, zu lange mit der Fertigstellung des physischen Autos zu warten. Der Zusammenbau wurde erst wenige Tage vor dem Wettbewerb in Graz fertig. Letzte Prüfstandstests zeigten kritische Mängel: Beim PCB-Routing wurden die IMU-Leiterbahnen vergessen und hohe Motorströme erzeugten EMV-Störungen.",

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
    proj2_desc: "Vollständige Restaurierung und Reparatur des defekten 6DoF-Simulators der HTL Salzburg durch Behebung elektrischer/mechanischer Fehler und eigener C++ Software.",
    proj2_b1: "Diagnose der Ursachen von EMV-Störungen & Mechanikfehlern; Trennung von Signal- und Leistungskabeln sowie Bau eines Verteilerschranks.",
    proj2_b2: "Entwicklung modularer C++ Steuerungsoftware und Sponsoring-Akquise für 2.000€ Monitore & 3,5k€ Gaming-PC beim Abteilungsvorstand.",
    proj2_b3: "Hauptattraktion beim Tag der offenen Tür 2026; Bestätigung für Davids Leidenschaft für Avionik, Hardware-Coding und Elektronikplanung.",

    // 6DoF Subpage Specific DE Translations
    sim_title: "6DoF Dynamischer Fahr-Simulator",
    sim_date: "Mai 2025 - Jan 2026 (Highlights beim Tag der offenen Tür)",
    sim_desc: "In der 2. Klasse an der HTL Salzburg übernahmen wir einen defekten 6DoF Bewegungssimulator. Durch systemische Fehlersuche, physikalische Neuverdrahtung, Bau eines Verteilerschranks und C++ Softwareentwicklung bauten wir den Simulator komplett neu auf.",
    sim_stat1_title: "Bewegungs-Plattform",
    sim_stat1_val: "6-Achsen Stewart-Plattform",
    sim_stat2_title: "Sponsoring Akquiriert",
    sim_stat2_val: "5.500€ (Monitore & Gaming-PC)",
    sim_stat3_title: "Software Engine",
    sim_stat3_val: "Eigene C++ Kinematik",
    sim_stat4_title: "Presse & Medien",
    sim_stat4_val: "Kronen Zeitung & HTL IG",

    sim_time1_title: "Mai 2025: Entdeckung & Systemische Fehlerdiagnose",
    sim_time1_desc: "In der 2. Klasse an der HTL Salzburg entdeckten wir einen defekten, ungenutzten 6DoF Simulator in der Werkstatt. Wir starteten eine vollständige Zerlegung und verfolgten alle Kabel, Motorsteuerung und Stromleitungen zurück.",

    sim_time2_title: "Sommer – Herbst 2025: Neuverkabelung & eigener Verteilerschrank",
    sim_time2_desc: "Wir behoben Motorstörungen und Not-Aus-Fehler durch komplette Neuverkabelung. Mein Teamkollege entwarf einen Verteilerschrank, während wir Starkstromkabel physisch getrennt von empfindlichen Datenleitungen verlegten.",

    sim_time3_title: "Nov – Dez 2025: C++ Software & Abteilungssponsoring",
    sim_time3_desc: "Ich entwickelte die C++ Steuerungssoftware zur Übertragung von Telemetriedaten an die Aktuatoren. Mit einer professionellen Präsentation beim Abteilungsvorstand akquirierten wir 2.000€ für 3 Monitore und 3.500€ für einen High-End Gaming-PC.",

    sim_time4_title: "Jan 2026: Premiere beim Tag der offenen Tür & Zeitungsbericht",
    sim_time4_desc: "Der restaurierte Simulator war das absolute Highlight beim Tag der offenen Tür 2026 der HTL Salzburg. Hunderte Besucher fuhren Testrunden, was dem Projekt Berichte in der Kronen Zeitung und auf dem HTL Instagram-Kanal einbrachte!",

    sim_sec1_title: "1. Systemische Reparatur & Physische Kabeltrennung",
    sim_sec1_desc: "Die Hauptaufgabe war die Behebung von EMV-Störungen und Spannungseinbrüchen, die zum zufälligen Blockieren der Aktuatoren führten. Durch die Trennung von Leistungskabeln und Steuerleitungen sowie den Bau eines Verteilerschranks erreichten wir 100% elektrische Stabilität.",

    sim_sec2_title: "2. Eigene C++ Steuerungs-Engine & Inverse Kinematik",
    sim_sec2_desc: "Ich entwickelte das modulare C++ Programm. Die Software liest Telemetriedaten aus Rennsimulationen (Assetto Corsa / F1), berechnet die inverse Kinematik für die 6 Zylinder und sendet synchrone Positionssignale an die Motorsteuerung.",

    sim_sec3_title: "Key Learnings & Einfluss auf Berufswunsch",
    sim_sec3_b1: "Praktische Erfahrung in EMV-Kabeltrennung, Starkstromverdrahtung und Verteilerschrankbau.",
    sim_sec3_b2: "Software-Engineering in C++ zur Ansteuerung physischer Aktuatoren in Echtzeit.",
    sim_sec3_b3: "Diese erfolgreiche Restaurierung festigte meinen Wunsch, in der Avionik, Flugregelung und Embedded Hardware zu arbeiten.",

    sim_media_sub: "Echtes Demonstration-Video des 6DoF Simulators im Live-Rennbetrieb, CAD 3D-Modell der Stewart-Plattform und MATLAB-Kinematik-Plot.",
    sim_fig1: "Abbildung 1: CAD 3D-Konstruktionsmodell des 6DoF Stewart-Plattform Fahrsimulators.",
    sim_fig2: "Abbildung 2: MATLAB-Kinematik-Simulationsplot der Zylinder-Auslenkungen.",
    sim_fig3: "Video 1: Demonstration des restaurierten 6DoF Simulators im Live-Rennbetrieb.",

    sim_press_heading: "Zeitungsbericht, Instagram Reel & GitHub Code",
    sim_press_sub: "Berichtet in der Kronen Zeitung, im offiziellen HTL Salzburg Instagram-Kanal und auf GitHub.",
    sim_link_krone: "Kronen Zeitung Bericht",
    sim_link_insta: "HTL Instagram Reel Video",
    sim_link_repo: "GitHub Repository (C++ Code)",

    // Project 3: EDI Parser
    proj3_title: "OBXID Engine: High-Performance Data Gateway",
    proj3_date: "Gestartet April 2026 (Aktives Stealth-Projekt)",
    proj3_desc: "High-Throughput O(1) EDI-Streaming-Engine mit +40 MB/s End-to-End Verarbeitungsgeschwindigkeit (vom Senden bis zum Empfang) in <35 MB RAM.",
    proj3_b1: "Speicherbedarf strikt auf O(1) (~35 MB RAM) begrenzt bei +40 MB/s End-to-End Durchsatz.",
    proj3_b2: "Zero-Code Parsing-Logik gesteuert über externe JSON-Mapping-Regelwerke (V3/V4 Standards).",
    proj3_b3: "Vollständig Dockerisiert, Microservices-ready und aktuell in kommerzieller Evaluierung für Industriepartner.",

    // EDI Subpage Specific DE Translations
    edi_title: "OBXID Engine: High-Performance Daten-Gateway",
    edi_date: "Gestartet April 2026 (Aktives Stealth-Projekt)",
    edi_desc: "Autarkes Inbound-Gateway in C++20 für die Enterprise-IT Systemgrenze. Validiert und streamt industrielle EDIFACT-Daten direkt in strukturiertes, KI-fähiges JSON Lines (JSONL) Format mit +40 MB/s End-to-End Geschwindigkeit in unter 35 MB RAM.",
    edi_tag1: "C++20 High-Throughput Engine",
    edi_tag2: "O(1) Begrenzter Speicher",
    edi_tag3: "Air-Gapped Kubernetes / Helm",
    edi_stealth_badge: "STEALTH ENTERPRISE GATEWAY",
    edi_card_heading: "Inbound-Sicherheit & Echtzeit KI-Bereitschaft",
    edi_card_desc: "Die OBXID-Engine agiert als ultraschnelles, autarkes Inbound-Gateway direkt vor der Systemgrenze bestehender ERP- und SAP-Systeme. Sie fängt fehlerhafte EDIFACT-Strukturen ab und wandelt Daten in Echtzeit in KI-fähiges JSON Lines (JSONL) um.",
    edi_stat1_title: "End-to-End Durchsatz",
    edi_stat1_val: "+40 MB/s pro Core",
    edi_stat2_title: "RAM Verbrauch",
    edi_stat2_val: "<35 MB (O(1) Begrenzt)",
    edi_stat3_title: "Deployment Sicherheit",
    edi_stat3_val: "100% Air-Gapped / Helm",
    edi_stat4_title: "Mapping Logik",
    edi_stat4_val: "No-Code JSON Regeln",

    edi_sec1_title: "1. Systemarchitektonische Einordnung & Infrastruktur-Schutz",
    edi_sec1_desc: "Die OBXID-Engine versteht sich als ultraschnelles, autarkes Inbound-Gateway direkt an der Systemgrenze vor bestehenden ERP- oder SAP-Systemen. Ihre Kernaufgabe ist es, Datenströme zu validieren, syntaktische Fehlstrukturen in Echtzeit abzufangen und Daten lesbar sowie datenbank- und KI-fähig zu machen.",

    edi_sec2_title: "2. Architektur, Leistungsparameter & Hardware-Effizienz",
    edi_sec2_desc: "Um Risiken an der Systemgrenze zu eliminieren, bricht die in hochoptimiertem C++ geschriebene Engine mit monolithischen Strukturen:",
    edi_sec2_b1: "<strong>Hohe Parsing-Geschwindigkeit:</strong> Erreicht eine Verarbeitungsgeschwindigkeit von über 35 bis 40 MB/s pro CPU-Kern End-to-End vom Dateiversand bis zum vollständigen Empfang.",
    edi_sec2_b2: "<strong>Ressourcen- & Kosteneffizienz:</strong> Strikter Speicherbedarf von O(1) (~24 MB bis 35 MB RAM pro Instanz) verhindert teure Hardware-Upgrades oder überdimensionierte Cloud-Instanzen.",
    edi_sec2_b3: "<strong>Nahtlose Cloud-Native Integration:</strong> Über ein maßgeschneidertes Helm Chart lässt sich die Software extrem flexibel in Kubernetes-Cluster minutenschnell deployen.",
    edi_sec2_b4: "<strong>Garantierte Datensouveränität:</strong> Als 100% autarke Air-Gapped-Lösung verlassen sensible Unternehmens- und Lieferantendaten zu keinem Zeitpunkt das interne Netz.",

    edi_sec3_title: "3. No-Code Konfiguration, Express-Debugging & KI-Readiness",
    edi_sec3_desc: "Die Transformation erfolgt über eine zentrale Konfigurationsdatei ohne operative Softwareentwicklung:",
    edi_sec3_b1: "<strong>No-Code JSON Regeln:</strong> Geschäftsregeln und Prüfungen werden ohne Programmieraufwand direkt im klaren JSON-Format hinterlegt.",
    edi_sec3_b2: "<strong>Kostenreduktion durch Express-Debugging:</strong> Erzeugt bei Anomalien strukturierte maschinenlesbare Protokolle, die manuelle Suchen in kryptischen Zeichenketten ersetzen und Entwicklerstunden sparen.",
    edi_sec3_b3: "<strong>KI- & RAG-Readiness:</strong> Generiert direkt das Industriestandard-Format JSON Lines (JSONL), das ohne komplexe Zwischenschritte direkt in Vector-Datenbanken und LLM RAG-Pipelines fließt.",

    edi_roadmap_title: "Projektstatus & Technologische Roadmap",
    edi_rm1_title: "Phase 1 (Aktuell) — Kernhärtung & Testsuite",
    edi_rm1_desc: "Fokus auf Optimierung und Absicherung des Parser-Kerns sowie Aufbau einer automatisierten Testsuite für dauerhafte Regressionsfreiheit.",
    edi_rm2_title: "Phase 2 — Skalierbarkeit & Kubernetes Orchestrierung",
    edi_rm2_desc: "Entwicklung des Enterprise-Lizenzsystems und Orchestrierung für hochverfügbare, lokale Air-Gapped Kubernetes-Infrastrukturen.",
    edi_rm3_title: "Phase 3 — Drag-&-Drop Editor & EDIFACT-Wiki",
    edi_rm3_desc: "Bereitstellung des visuellen Online-Editors und Aufbereitung der EDIFACT-Verzeichnisse zu einem interaktiven Wiki inkl. Vorlagen.",

    edi_stealth_note: "Vertrauliches Business-Projekt — Quellcode und spezifische Partner-Mappings bleiben geschützt.",

    // Project 4: Tri-Tilt SAR VTOL
    proj4_title: "Tri-Tilt-Rotor SAR VTOL Drohne (Diplomarbeit)",
    proj4_date: "Gestartet Juni 2026 • Ziel 2028 (Diplomarbeit)",
    proj4_desc: "Such- & Rettungs-VTOL-Drohne mit 3 Schwenk-Rotoren zur Lokalisierung vermisster Personen und Live-Übertragung von GPS-Koordinaten an Rettungsteams.",
    proj4_b1: "Entwickelt für alpine Rettungseinsätze mit Wärmebild-KI Personenerkennung und Live-GPS-Koordinatenübertragung an Einsatzkräfte.",
    proj4_b2: "Specs: 15-20 kg Masse, 3m Spannweite, 130 km/h Höchstgeschwindigkeit, 85 km/h Reiseflug, 120-400m Einsatzhöhe (bis 4000m im Reisemodus).",
    proj4_b3: "In aktiven Sponsoring- und Testgelände-Gesprächen mit dem Österreichischen Bundesheer.",

    // VTOL Subpage Specific DE Translations
    vtol_title: "Tri-Tilt-Rotor SAR VTOL Drohne (Diplomarbeit)",
    vtol_date: "Gestartet Juni 2026 • Ziel 2028 (Diplomarbeit)",
    vtol_desc: "BVLOS Such- & Rettungs-VTOL-Drohne entwickelt nach AustroControl SORA SAIL II Richtlinien. Dual Pixhawk FMU + Nvidia Jetson ROS2 Schwarm-Architektur mit Wärmebild-KI Personenerkennung und Live-GPS-Koordinatenübertragung.",
    vtol_hero_tag1: "Gestartet Juni 2026 • Ziel 2028 (Diplomarbeit)",
    vtol_hero_tag2: "AustroControl SORA SAIL II",
    vtol_hero_tag3: "Dual Pixhawk + Nvidia Jetson ROS2",
    vtol_hero_tag4: "BVLOS Schwarm-Architektur",

    vtol_stat1_title: "Masse & Spannweite",
    vtol_stat1_val: "15 - 20 kg | 3,0m Spannweite",
    vtol_stat2_title: "Max- / Reise-Geschwindigkeit",
    vtol_stat2_val: "130 km/h | 85 km/h",
    vtol_stat3_title: "Einsatzhöhe",
    vtol_stat3_val: "120-400m (Bis zu 4000m)",
    vtol_stat4_title: "Kooperationspartner",
    vtol_stat4_val: "Österreichisches Bundesheer",

    vtol_time1_title: "Juni 2026: Projektstart & Team-Aufteilung",
    vtol_time1_desc: "Team-Bildung für die HTL Diplomarbeit. David übernimmt die Rolle des Teamleiters für Avionik, Software, SORA-Sicherheitsanalysen, Bodenstation und Bundesheer-Kontakte.",
    vtol_time2_title: "Juli 2026: SORA SAIL II Zertifizierungs-Entwurf",
    vtol_time2_desc: "Erstellung des Technical Design Documents (TDD) nach AustroControl SORA SAIL II Richtlinien für BVLOS-Flüge im alpinen Such- und Rettungsgelände.",
    vtol_time3_title: "2026 - 2028: Entwicklung, ROS2 Schwarm & Bundesheer-Kontakt",
    vtol_time3_desc: "Entwicklung der dezentralen ROS2 Companion Computer Architektur auf Nvidia Jetson bis zum Abschluss 2028. In aktiven Gesprächen mit dem Österreichischen Bundesheer für Testgelände und Sponsoring.",

    vtol_sec1_title: "1. Systemaufteilung & Team-Verantwortung",
    vtol_sec1_desc: "Klare Aufgabenverteilung im Team: Mein Teamkollege konzentriert sich auf Mechanik, Carbon-Chassis, Antriebsauslegung, Stromverteilung und den 90°-Schwenkmechanismus. Als Teamleiter entwickle ich die gesamte Avionik, redundante Elektronik, SORA-Sicherheitseinhaltung, ROS2 Companion Software, PID-Mischer, die Bodenstation (GCS) und führe die Bundesheer-Kontakte.",

    vtol_sec2_title: "2. Fahrzeugspezifikationen & Einsatzprofil",
    vtol_sec2_desc: "Die Tri-Tilt-Rotor SAR VTOL Drohne ist für extreme alpine Bedingungen konzipiert, wo herkömmliche Multirotoren an Reichweite verlieren und Flächenflugzeuge nicht landen können:",
    vtol_sec2_b1: "<strong>Masse & Zelle:</strong> 15 bis 20 kg Abflugmasse bei 3,0 Metern Spannweite für effizienten Langstrecken-Gleitflug.",
    vtol_sec2_b2: "<strong>Fluggeschwindigkeiten:</strong> 130 km/h Höchstgeschwindigkeit bei 85 km/h effizienter Reisegeschwindigkeit.",
    vtol_sec2_b3: "<strong>Einsatzhöhe:</strong> Operationssuchhöhe zwischen 120m und 400m über Grund, mit einer Reiseflughöhe von bis zu 4.000m über Meeresspiegel für Bergkammüberquerungen.",

    vtol_sec3_title: "3. Wärmebild-KI Personenerkennung & Störungssichere Navigation",
    vtol_sec3_desc: "Entwickelt für alpine Such- und Rettungseinsätze, trägt die Drohne eine Wärmebildkamera, die einen KI-Vision-Stream auf dem Nvidia Jetson Companion Computer auswertet. Wird eine vermisste Person erkannt, werden Live-GPS-Koordinaten an Rettungsteams übertragen. Um GPS-Störungen im Gebirge auszugleichen, hält ein Optischer-Fluss-Kamera-Algorithmus das Abdriften ohne Satellitensignal unter ±2m.",

    vtol_sec4_title: "4. SORA SAIL II Zertifizierung & Bundesheer-Kooperation",
    vtol_sec4_desc: "Flüge außerhalb der Sichtweite (BVLOS) in Österreich erfordern die strikte Einhaltung der AustroControl SORA SAIL II Sicherheitsrichtlinien. Unser Technical Design Document (TDD) spezifiziert dual-redundante Flugsteuerungen (Pixhawk FMU), Fallschirm-Rettungssysteme und verschlüsselte Telemetrielinks. Wir stehen in aktiven Gesprächen mit dem Österreichischen Bundesheer bezüglich Erprobungsgeländen und Sponsoring.",

    vtol_media_sub: "CAD 3D-Konzept-Renders, technisches Design-Dokument (TDD) und Flugarchitektur-Schaltpläne.",
    vtol_fig1: "Abbildung 1: CAD 3D-Konzept-Render der Tri-Tilt-Rotor SAR VTOL Drohne.",
    vtol_pdf_title: "Technical Design Document (TDD)",
    vtol_pdf_sub: "AustroControl SORA SAIL II Entwurf (PDF)",

    // Project 5: C++ Physics Engine
    proj5_title: "AeroPhysicsEngine: C++ Physik-Experiment",
    proj5_date: "Persönliches C++ Lernprojekt",
    proj5_desc: "Ein einfaches C++ Experiment, entwickelt um C++ auf einer tieferen Ebene zu lernen und die Funktionsweise von Starrkörper-Physik-Engines und Vektordynamik von Grund auf zu verstehen.",
    proj5_b1: "Entwickelt als persönliches Programmier-Sandbox-Projekt zur Vertiefung von C++ Speicherverwaltung und Sprachfeatures.",
    proj5_b2: "Erforschung von 3D-Vektordynamik und Starrkörper-Mechanik-Algorithmen.",
    proj5_b3: "Diente als Lern-Testbed zur Festigung von Software-Engineering-Fähigkeiten für zukünftige Robotik-Projekte.",

    // C++ Physics Engine Subpage Specific DE Translations
    pe_hero_tag1: "Persönliches C++ Lernprojekt",
    pe_hero_tag2: "C++20 Sprachpraxis",
    pe_hero_tag3: "Vektordynamik",
    pe_hero_tag4: "Open-Source Sandbox",
    pe_title: "AeroPhysicsEngine: C++ Physik-Experiment",
    pe_desc: "Ein einfaches C++ Experiment, entwickelt um C++ auf einer tieferen Ebene zu lernen und die Funktionsweise von Starrkörper-Physik-Engines und Vektordynamik von Grund auf zu verstehen.",
    pe_stat1_title: "Sprache",
    pe_stat1_val: "Modernes C++20",
    pe_stat2_title: "Fokusbereich",
    pe_stat2_val: "Vektor- & Physikmathe",
    pe_stat3_title: "Hauptziel",
    pe_stat3_val: "C++ Sprachpraxis",
    pe_stat4_title: "Repository",
    pe_stat4_val: "GitHub Open Source",
    pe_intent_title: "Projektziel & Lernhintergrund",
    pe_intent_desc1: "Dieses Projekt soll nicht mit kommerziellen Physik-Engines wie PhysX oder Bullet konkurrieren. Stattdessen entstand es als gezielte Programmier-Sandbox, um C++ auf einer tieferen Ebene zu lernen—indem moderne C++ Features, Speicherlayouts, Objekt-Lebenszyklen und Templates in der Praxis angewendet wurden.",
    pe_intent_desc2: "Durch das Vertiefen von Vektordynamik und grundlegenden Starrkörper-Bewegungsberechnungen im Code habe ich ein solides Fundament in C++ Programmierung und Raumgeometrie entwickelt, das meinen Arbeiten an Mikrocontrollern, Avionik und autonomen Systemen direkt zugute kam.",
    pe_diag_lbl: "// 6DoF KINEMATIK & VEKTOR-SCHALTPLAN",
    pe_repo_heading: "GitHub Quellcode Repository",
    pe_repo_sub: "Erkunde das C++ Physik-Engine Repository auf GitHub.",


    // Project 6: Ground Effect Car
    proj6_title: "DIN A4 Autonomes Bodeneffekt-Fahrzeug",
    proj6_date: "Gestartet April 2026 (Bewerb 2027)",
    proj6_desc: "Direkter Nachfolger des Crazy Cars 8 Monate früher gestartet! 13 kg Bodeneffekt-Unterdruck auf 2 kg Fahrzeugmasse, Bugatti-artige Beschleunigung & STM32H7 MPC.",
    proj6_b1: "SolidEdge CAD-Chassis mit 1:6,5 Leistungsgewicht; 400€ Bauteil-Sponsoring akquiriert.",
    proj6_b2: "Entwicklung eines Model Predictive Controllers (MPC) in MATLAB/Simulink auf STM32H7 zur Positionsschätzung.",
    proj6_b3: "Berechnung der optimalen Rennlinie mit ToF-Sensoren zur Hindernisumfahrung für den Gesamtsieg 2027.",

    // Ground Effect Vehicle Subpage Specific DE Translations
    ge_hero_tag1: "Gestartet April 2026 (Bewerb 2027)",
    ge_hero_tag2: "STM32H7 Dual-Core @ 480 MHz",
    ge_hero_tag3: "13 kg Bodeneffekt-Luftkissen",
    ge_hero_tag4: "400€ Bauteil-Sponsoring",
    ge_title: "DIN A4 Autonomes Bodeneffekt-Fahrzeug",
    ge_desc: "Direkter Nachfolger des Crazy Cars 8 Monate früher gestartet! 13 kg Bodeneffekt-Unterdruck auf 2 kg Fahrzeugmasse, Bugatti-artige Startbeschleunigung & STM32H7 Model Predictive Control (MPC).",
    ge_stat1_title: "Bodeneffekt-Unterdruck",
    ge_stat1_val: "13 kg Anpress-Kissen",
    ge_stat2_title: "Leistungsgewicht",
    ge_stat2_val: "1 : 6,5 kW/kg",
    ge_stat3_title: "Sponsoring Akquiriert",
    ge_stat3_val: "400€ Bauteile",
    ge_stat4_title: "Steuerungs-Hardware",
    ge_stat4_val: "STM32H7 @ 480 MHz",
    ge_time1_title: "April 2026: Konzept-Entwurf & Frühzeitiges Sponsoring",
    ge_time1_desc: "Direkt aus den Lektionen unserer Crazy-Car-Erfahrung in Graz haben wir das Wettbewerbsfahrzeug 2027 ganze 8 Monate früher gestartet. Das technische Konzept überzeugte Sponsoren und brachte 400€ für leistungsstarke Motoren, Sensoren und Leistungselektronik.",
    ge_time2_title: "Mai – Juni 2026: SolidEdge 3D-CAD & Bodeneffekt-Aerodynamik",
    ge_time2_desc: "Konstruktion des kompletten CAD-Chassis und der abgedichteten Bodeneffekt-Schürzen in SolidEdge. Der Unterdruck-Lüfter erzeugt 13 kg Anpresskraft bei 2 kg Fahrzeugmasse, was extreme Kurvengeschwindigkeiten ohne Reifenschlupf ermöglicht.",
    ge_time3_title: "Juli 2026 – Heute: MATLAB/Simulink MPC & STM32H7 Integration",
    ge_time3_desc: "Entwicklung eines Model Predictive Controllers (MPC) in MATLAB/Simulink für den STM32H7 Dual-Core Mikrocontroller @ 480 MHz. Time-of-Flight (ToF) Sensoren erkennen gegnerische Fahrzeuge dynamisch, um Ideallinien anzupassen und den Gesamtsieg 2027 zu sichern.",
    ge_sec1_title: "1. Aerodynamisches Luftkissen & Explosive Beschleunigung",
    ge_sec1_desc: "Da Wettbewerbsstrecken enge, technische Kurven aufweisen, bei denen Beschleunigung wichtiger ist als Endgeschwindigkeit, haben wir das Fahrzeug auf explosive Startbeschleunigung optimiert (begrenzt auf 18 km/h). Ein aktiver Lüfter erzeugt 13 kg Unterdruck gegen die Fahrbahn, was Radschlupf verhindert und maximale Drehmomentübertragung erlaubt.",
    ge_sec2_title: "2. Model Predictive Control (MPC) & ToF Hindernisumfahrung",
    ge_sec2_desc: "Mithilfe von MATLAB/Simulink C-Code-Generierung rechnet der MPC-Regler auf dem STM32H7 Mikrocontroller die optimale Trajektorie entlang der Rennstrecke voraus. Integrierte Time-of-Flight (ToF) Abstandssensoren erkennen andere Fahrzeuge in Echtzeit und berechnen Ausweichkurven unter Beibehaltung maximaler Geschwindigkeit.",
    ge_media_sub: "SolidEdge 3D-CAD-Konzeptmodelle, aerodynamische Schürzen-Layouts und Bauteil-Anordnungen.",
    ge_fig1: "Abbildung 1: 3D-CAD-Konzeptmodell des DIN A4 Autonomen Bodeneffekt-Fahrzeugs konstruiert in SolidEdge.",

    // Action Links
    link_github: "GitHub Repo",
    link_spec: "Design Spec (PDF)",
    link_deepdive: "Projektstory & Post-Mortem →",

    // Footer
    footer_copy: "© 2026 David Sommerer — Höhere Technische Lehranstalt für Elektrotechnik Salzburg (HTL)."
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
        if (dict[key].includes("<") && dict[key].includes(">")) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
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
