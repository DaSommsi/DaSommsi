# David Sommerer — Personal Engineering Portfolio Website

> **Electrical & Systems Engineering Student** at **HTL Elektrotechnik Salzburg** specializing in **Avionics, Embedded Systems, Electronics & Software Engineering**.

---

## ⚡ Overview

This repository contains the official personal engineering portfolio of **David Sommerer**. The website showcases documented real-world projects spanning autonomous vehicle reinforcement learning, 6DoF motion simulator restoration, zero-allocation C++ data streaming engines, and tri-tilt-rotor search & rescue VTOL drone development.

- 🌐 **Live Website**: [https://dasommsi.github.io](https://github.com/DaSommsi/DaSommsi)
- 👤 **LinkedIn**: [david-sommerer-131535405](https://www.linkedin.com/in/david-sommerer-131535405)
- 🐙 **GitHub**: [@DaSommsi](https://github.com/DaSommsi)
- 📧 **Contact**: [david.sommerer.200811@gmail.com](mailto:david.sommerer.200811@gmail.com)

---

## 🚀 Featured Engineering Projects

### 1. 🏎️ [Crazy Car: Autonomous AI/RL RC Car](projects/crazy-car.html)
- **Timeframe**: Aug 2025 – Feb 2026 (Graz Competition)
- **Overview**: Amazon 30€ RC car rebuilt with ESP32 microcontrollers, steering micro-servos, custom PCB hardware, and AI trained in Unity ML-Agents.
- **Key Takeaways**: Vital experiment documenting direct AI motor control latency, PCB routing EMI fixes, and version control discipline.

### 2. 🏎️ [6DoF Dynamic Motion Simulator Rig](projects/6dof-driving-sim.html)
- **Timeframe**: May 2025 – Jan 2026 (HTL Open Door Day Highlight)
- **Overview**: Full restoration of a broken legacy 6DoF Stewart platform motion rig at HTL Salzburg. Features physical signal/power EMI cable separation, custom distribution fuse box, modular C++ inverse kinematics control software, and €5,500 in department sponsorships.
- **Press Coverage**: Featured in Austria's *Kronen Zeitung* newspaper and official HTL Instagram media.

### 3. ⚡ [OBXID Engine: High-Performance Inbound Data Gateway](projects/edi-jsonl-parser.html)
- **Timeframe**: Started April 2026 (Active Stealth Project)
- **Overview**: C++20 zero-allocation streaming parser functioning as an air-gapped inbound security gateway for enterprise IT boundaries. Converts raw industrial EDIFACT streams to structured, AI-ready JSON Lines (JSONL).
- **Performance**: Processing speeds exceeding **+40 MB/s per core** end-to-end in under **35 MB RAM** ($O(1)$ memory complexity).

### 4. 🛸 [Tri-Tilt-Rotor SAR VTOL Drone](projects/tri-tilt-vtol.html)
- **Timeframe**: Started June 2026 • Target 2028 (HTL Diploma Thesis)
- **Overview**: 3-rotor tilt-mechanism VTOL drone engineered for alpine Search & Rescue (SAR). Features thermal IR person detection and live GPS coordinate broadcasting to emergency rescue teams.

---

## 🛠️ Technology Stack & Architecture

- **Frontend**: Vanilla HTML5, Vanilla CSS3, Tailwind CSS CDN with custom design tokens.
- **Typography**: `Space Grotesk` (Headings), `Inter` (Prose), `JetBrains Mono` (Code & Technical Metrics).
- **Internationalization (i18n)**: Native dual-language engine (`js/i18n.js`) providing instant **English (EN)** and **German (DE)** translation toggles without page reloads.
- **Media & Lightbox**: Custom full-screen click-to-zoom Lightbox modal (`js/lightbox.js`) supporting 1.5x magnification, high-resolution technical schematics, CAD assembly renders, and 9:16 portrait video streaming.

---

## 💻 Local Development

To run the portfolio website locally:

```bash
# Clone the repository
git clone https://github.com/DaSommsi/DaSommsi.git

# Navigate into project directory
cd DaSommsi

# Start local web server
python -m http.server 8000
```

Open `http://localhost:8000` in your web browser.

---

## 📜 License & Copyright

© 2026 **David Sommerer**. All rights reserved. Registered student at HTL Elektrotechnik Salzburg.
