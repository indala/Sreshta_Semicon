export const navLinks = [
   { href: "/home", label: "Home" },
   { href: "/about", label: "About Us" },
  ];
  
  export const programLinks = [
    { href: "/corporate-training", label: "Corporate Training" },
   { href: "/courses", label: "Courses & Programs" },
   { href: "/focus-areas", label: "Focus Areas" },
   { href: "/internships", label: "Internships" },
   { href: "/projects", label: "Projects" },
   { href: "/project-assistance", label: "Project Assistance" },
  ];
  
  export const courses = [
    // --- NEW VLSI COURSE: Design Verification ---
    {
      title: "Design Verification",
      slug: "design-verification",
      category: "Hardware Courses",
      description: "A specialized course focusing on the verification aspect of the ASIC flow, covering System Verilog, UVM, and Functional Coverage.",
      modules: [
        { title: "RTL Design - Implementation", overview: "Implementing designs using Verilog/VHDL and understanding hardware description languages." },
        { title: "Advanced RTL Design", overview: "Advanced concepts in RTL design, including performance optimization and complex state machines." },
        { title: "System Verilog for Verification", overview: "Mastering System Verilog syntax, data types, and object-oriented programming for verification." },
        { title: "Functional Coverage", overview: "Defining, implementing, and analyzing functional coverage models to ensure design quality." },
        { title: "SV – Assertions", overview: "Using System Verilog Assertions (SVA) for formal verification and dynamic checking." },
        { title: "UVM", overview: "In-depth training on the Universal Verification Methodology (UVM) for building scalable and reusable testbenches." }
      ]
    },
    // --- NEW VLSI COURSE: Physical Design ---
    {
      title: "Physical Design",
      slug: "physical-design",
      category: "Hardware Courses",
      description: "A focused course on the back-end ASIC flow, covering timing closure, layout, and physical verification.",
      modules: [
        { title: "RTL Design - Implementation", overview: "Reviewing synthesizable RTL coding standards for physical implementation." },
        { title: "Synthesis", overview: "Converting RTL to gate-level netlist using synthesis tools and managing SDC constraints." },
        { title: "CMOS & Technology", overview: "Understanding CMOS logic, fabrication process, and technology library fundamentals." },
        { title: "Static Timing Analysis", overview: "Mastering STA concepts, timing paths, setup/hold checks, and timing closure." },
        { title: "Physical Design Flow", overview: "Overview of the complete Physical Design flow from netlist to GDSII." },
        { title: "Floorplanning", overview: "Defining the chip area, macro placement, and power planning." },
        { title: "Placement", overview: "Standard cell placement, congestion analysis, and design optimization." },
        { title: "Clock Tree Synthesis", overview: "Building a balanced clock tree to meet skew and latency requirements." },
        { title: "Routing", overview: "Global and detailed routing, handling violations, and final routing optimization." },
        { title: "Physical Verification", overview: "Performing Design Rule Check (DRC) and Layout Versus Schematic (LVS) for signoff." },
        { title: "Signal Integrity", overview: "Analyzing and mitigating signal integrity issues like crosstalk and IR drop." }
      ]
    },
    // --- UPDATED FPGA COURSE: Using the new detailed list you provided ---
    {
      title: "FPGA Design and Development",
      slug: "fpga-design-development",
      category: "Hardware Courses",
      description: "A comprehensive course from digital basics to system-level FPGA implementation and real-time projects.",
      modules: [
        { title: "Basics (Start from Zero)", overview: "Review of digital electronics fundamentals, logic gates, and basic circuits." },
        { title: "FPGA Foundations", overview: "Deep dive into FPGA architecture (LUTs, FFs, Block RAMs) and board components." },
        { title: "Verilog HDL Training", overview: "Mastering Verilog for efficient hardware description, coding styles, and FSM implementation." },
        { title: "Industry Exposure", overview: "Understanding industry practices, design methodologies, and project requirements." },
        { title: "Simulation & Testbench", overview: "Creating and running testbenches for functional verification of the RTL design." },
        { title: "FPGA Tool Flow", overview: "Hands-on experience with tools like Vivado/Quartus for synthesis and implementation." },
        { title: "Constraints", overview: "Applying timing constraints (SDC/XDC) and I/O constraints for design closure." },
        { title: "Hardware Programming & Debug", overview: "Programming the FPGA board and using embedded logic analyzers (ILA/VIO) for debugging." },
        { title: "FPGA IP Integration", overview: "Integrating and configuring various IP cores (e.g., FIFO, PLL, BRAM)." },
        { title: "Protocol Implementation", overview: "Implementing standard protocols like UART, SPI, and I2C on the FPGA." },
        { title: "System-Level Design", overview: "Integrating soft-core processors (MicroBlaze/Nios II) and building a complete system." },
        { title: "Real-Time Internship Projects", overview: "Working on complex, real-world projects to apply learned concepts." },
        { title: "Final Evaluation", overview: "Assessment of the project and overall understanding of the FPGA flow." }
      ]
    },
    // --- Original courses remain below ---
    {
      title: "Hardware–Software Co-Design in PCB",
      slug: "hardware-software-co-design",
      category: "Hardware Courses",
      description: "Understand how hardware and software interact within a unified PCB design workflow.",
      modules: [
        { title: "Module 1 — Introduction to Hardware–Software Co-Design", overview: "Understand how hardware and software interact within a unified PCB design workflow." },
        { title: "Module 2 — Electronic Components and Circuit Fundamentals", overview: "Learn essential circuit principles, active and passive components, and signal behavior." },
        { title: "Module 3 — PCB Design Principles and Workflow", overview: "Explore schematic design, layout routing, and industry-standard PCB workflows." },
        { title: "Module 4 — Microcontroller Selection and Integration", overview: "Learn to choose and integrate the right microcontroller for your hardware design." },
        { title: "Module 5 — Embedded Firmware Development", overview: "Write and debug firmware that communicates directly with hardware layers." },
        { title: "Module 6 — Simulation, Testing, and Debugging", overview: "Simulate designs, test PCB logic, and troubleshoot performance bottlenecks." },
        { title: "Module 7 — System-Level Hardware–Software Integration", overview: "Integrate firmware, sensors, and peripherals into a unified system design." },
        { title: "Module 8 — Final Project and Design Documentation", overview: "Apply all learned principles in a full PCB project with complete documentation." }
      ]
    },
    {
      title: "Embedded Systems Design and Development",
      slug: "embedded-systems-design",
      category: "Hardware Courses",
      description: "A comprehensive training program on embedded systems design and development.",
      modules: [
        { title: "Module 1 — Fundamentals of Embedded Systems", overview: "Understand embedded system concepts, components, and design flow." },
        { title: "Module 2 — Basic Electronics and Microprocessor Basics", overview: "Learn digital electronics and microcontroller fundamentals." },
        { title: "Module 3 — Microcontroller Architecture and Programming", overview: "Explore common MCU architectures and learn low-level programming." },
        { title: "Module 4 — Embedded C and Firmware Development", overview: "Master embedded C for device drivers and optimized firmware." },
        { title: "Module 5 — Sensors and Actuators", overview: "Understand interfacing and practical applications of sensors and actuators." },
        { title: "Module 6 — Interfacing and Peripheral Communication", overview: "Interface digital and analog peripherals using UART, SPI, and I2C." },
        { title: "Module 7 — Embedded System Design with RTOS", overview: "Implement multitasking and real-time synchronization using RTOS." },
        { title: "Module 8 — PCB Design for Embedded Systems", overview: "Learn schematic design, grounding, and fabrication principles for embedded PCBs." },
        { title: "Module 9 — Communication and Networking in Embedded Systems", overview: "Explore IoT and wireless communication fundamentals in embedded systems." },
        { title: "Module 10 — Project Design and Development", overview: "Build, integrate, and validate a complete embedded hardware–software system." }
      ]
    },
    {
      title: "Advanced Embedded System Using IoT",
      slug: "advanced-embedded-iot",
      category: "Hardware Courses",
      description: "Learn to build advanced IoT systems using embedded technologies.",
      modules: [
        { title: "Module 1 — Introduction to IoT and Embedded Systems", overview: "Learn IoT architecture, ecosystem, and the role of embedded systems." },
        { title: "Module 2 — Sensors, Actuators, and Data Acquisition", overview: "Interface sensors and actuators for real-world IoT applications." },
        { title: "Module 3 — Microcontroller Platforms for IoT", overview: "Work with IoT boards such as ESP32, NodeMCU, and Raspberry Pi." },
        { title: "Module 4 — Embedded C and IoT Firmware Programming", overview: "Develop firmware to read, process, and transmit sensor data." },
        { title: "Module 5 — Communication Protocols in IoT", overview: "Learn wireless and IoT protocols like MQTT, HTTP, and CoAP." },
        { title: "Module 6 — Cloud and IoT Platforms", overview: "Integrate devices with cloud platforms such as Blynk, ThingSpeak, and AWS IoT." },
        { title: "Module 7 — IoT Networking and Security Basics", overview: "Understand IoT networking concepts, data transfer, and basic security." },
        { title: "Module 8 — IoT System Design and Integration", overview: "Combine sensors, microcontrollers, and cloud systems into a full IoT design." },
        { title: "Module 9 — IoT Applications and Use Cases", overview: "Explore real-world IoT examples such as smart homes, industry, and healthcare." },
        { title: "Module 10 — Final Project and Evaluation", overview: "Design and present a complete IoT prototype with documentation." }
      ]
    },
    {
      title: "Raspberry Pi–Based Embedded Systems",
      slug: "raspberry-pi-embedded-systems",
      category: "Hardware Courses",
      description: "A training program on building embedded systems using Raspberry Pi.",
      modules: [
        { title: "Module 1 — Introduction to Embedded Systems and Raspberry Pi", overview: "Learn Raspberry Pi architecture, GPIO, and system setup." },
        { title: "Module 2 — Keil µVision and Embedded C Basics", overview: "Develop embedded C programs using Keil and simulate I/O operations." },
        { title: "Module 3 — Linux Fundamentals for Embedded Development", overview: "Master Linux basics, SSH, and system maintenance for Pi." },
        { title: "Module 4 — Python Programming for Embedded Applications", overview: "Use Python libraries to control GPIO and interact with sensors." },
        { title: "Module 5 — Sensor and Actuator Interfacing", overview: "Connect sensors, ADCs, and actuators for data acquisition." },
        { title: "Module 6 — Communication Interfaces and Protocols", overview: "Implement UART, SPI, I2C, and USB communication." },
        { title: "Module 7 — Networking and IoT Integration", overview: "Build connected systems using MQTT, ThingSpeak, and Blynk." },
        { title: "Module 8 — Image Processing and Computer Vision", overview: "Apply OpenCV for image capture, motion tracking, and edge AI." },
        { title: "Module 9 — System Design and Optimization", overview: "Optimize power, performance, and integration with controllers." },
        { title: "Module 10 — Final Project and Evaluation", overview: "Build and demonstrate a complete embedded IoT project." }
      ]
    },
    {
      title: "Python Full Stack",
      slug: "python-full-stack",
      category: "Software Courses",
      description: "Become a Python Full Stack Developer from scratch.",
      modules: [
        { title: "Module 1 — Computer basics & learning environment", overview: "How to use Colab/Replit, GitHub basics, and development workflow." },
        { title: "Module 2 — Python fundamentals: types & control flow", overview: "Variables, data types, conditionals, and loops." },
        { title: "Module 3 — Functions, modules & basic OOP", overview: "Defining functions, modules, simple classes and code organization." },
        { title: "Module 4 — File I/O, virtualenv concepts & pip", overview: "Reading/writing files, package management and environment isolation concepts." },
        { title: "Module 5 — Web fundamentals: HTTP & REST", overview: "Requests/responses, JSON, REST principles and API contracts." },
        { title: "Module 6 — HTML fundamentals", overview: "Page structure, semantic tags and building a static page." },
        { title: "Module 7 — CSS basics & layout", overview: "Styling, box model, flexbox and responsive basics." },
        { title: "Module 8 — JavaScript basics & DOM", overview: "Basic JS syntax, DOM manipulation and connecting frontend to backend." },
        { title: "Module 9 — Flask fundamentals: routes & templates", overview: "Building routes, rendering templates and simple app structure." },
        { title: "Module 10 — Forms, validation & sessions", overview: "Handling forms, validation patterns and session-based auth." },
        { title: "Module 11 — Databases: SQLite & SQLAlchemy", overview: "CRUD operations, ORM basics and migrations concept." },
        { title: "Module 12 — Building & consuming REST APIs", overview: "API endpoints, JSON responses, and client consumption patterns." },
        { title: "Module 13 — Async basics & background tasks", overview: "Async IO concepts and simple background worker patterns." },
        { title: "Module 14 — Testing & basic security hygiene", overview: "Unit tests, input validation, and common security checks." },
        { title: "Module 15 — Deployment patterns (free hosting)", overview: "Free deployment options (frontend on GitHub Pages/Netlify, backend via free tiers or instructor-hosted)." },
        { title: "Module 16 — Capstone: Deployed CRUD app", overview: "Final deployable project with auth, README and demo video." }
      ]
    },
    {
      title: "Java Full Stack",
      slug: "java-full-stack",
      category: "Software Courses",
      description: "Become a Java Full Stack Developer from scratch.",
      modules: [
        { title: "Module 1 — Computer basics & Java toolchain", overview: "Install OpenJDK, IDE/VS Code basics and Java dev workflow." },
        { title: "Module 2 — Java syntax & control flow", overview: "Primitives, conditionals and loops." },
        { title: "Module 3 — OOP in Java", overview: "Classes, inheritance, interfaces and encapsulation." },
        { title: "Module 4 — Collections & Streams", overview: "Lists, maps, sets and basic stream operations." },
        { title: "Module 5 — Build tools & project structure", overview: "Maven/Gradle concepts and project organization." },
        { title: "Module 6 — HTTP fundamentals & servlets concept", overview: "Request/response lifecycle and simple servlet idea." },
        { title: "Module 7 — Spring Boot: controllers & endpoints", overview: "Bootstrapping Spring Boot app and building REST controllers." },
        { title: "Module 8 — Services & dependency injection", overview: "Service layer patterns and DI basics." },
        { title: "Module 9 — Persistence: JPA/H2 / in-memory DB", overview: "Entities, repositories and basic persistence." },
        { title: "Module 10 — REST design & DTOs", overview: "API contracts, DTO patterns and error handling." },
        { title: "Module 11 — Frontend integration basics", overview: "Serving static frontends and simple client-server integration." },
        { title: "Module 12 — Testing & debugging (JUnit)", overview: "Unit tests, basic integration tests and debugging techniques." },
        { title: "Module 13 — Security basics (Spring Security intro)", overview: "Authentication/authorization concepts and Spring Security overview." },
        { title: "Module 14 — Packaging & CI basics", overview: "Building jars, running apps and simple GitHub Actions pipeline." },
        { title: "Module 15 — Capstone implementation", overview: "Final Spring Boot app with authentication, REST APIs, and deployment." }
      ]
    },
    {
      title: "Data Science and Machine Learning",
      slug: "data-science-ml",
      category: "Software Courses",
      description: "Master Data Science and Machine Learning concepts from the ground up.",
      modules: [
        { title: "Module 1 — Environment & Python for DS (Colab)", overview: "Colab usage, numpy intro and data basics." },
        { title: "Module 2 — Numpy & array manipulations", overview: "Numpy arrays, broadcasting and vector operations." },
        { title: "Module 3 — Pandas: Series & DataFrame", overview: "Data structures, indexing and basic transformations." },
        { title: "Module 4 — Data cleaning & missing values", overview: "Handling missing data, type conversions and cleaning pipelines." },
        { title: "Module 5 — EDA & visualization basics", overview: "Plotting, summary statistics and exploratory workflows." },
        { title: "Module 6 — Statistics fundamentals", overview: "Mean/median/variance, distributions and practical stats." },
        { title: "Module 7 — Probability & hypothesis testing", overview: "Probability basics and testing hypotheses." },
        { title: "Module 8 — Regression fundamentals", overview: "Linear regression, loss functions and metrics." },
        { title: "Module 9 — Classification basics", overview: "Logistic regression, metrics and model selection." },
        { title: "Module 10 — Trees & ensemble intuition", overview: "Decision trees, random forest and boosting concepts." },
        { title: "Module 11 — Model evaluation & CV", overview: "Cross-validation, overfitting and model comparison." },
        { title: "Module 12 — Feature engineering basics", overview: "Feature transforms, categorical handling and pipelines." },
        { title: "Module 13 — Unsupervised methods (PCA, k-means)", overview: "Clustering, dimensionality reduction and use cases." },
        { title: "Module 14 — scikit-learn workflows & pipelines", overview: "Pipelines, hyperparameter tuning and model persistence." },
        { title: "Module 15 — Intro to deep learning basics", overview: "Neural net intuition and simple Keras examples." },
        { title: "Module 16 — Model deployment basics (Streamlit/Flask)", overview: "Wrapping models for inference and demoing outputs." },
        { title: "Modules 17–20 — Project & presentation", overview: "End-to-end project, reproducible notebooks and final presentation." }
      ]
    },
    {
      title: "Python for AI and Deep Learning",
      slug: "python-ai-deep-learning",
      category: "Software Courses",
      description: "An advanced course on using Python for Artificial Intelligence and Deep Learning.",
      modules: [
        { title: "Module 1 — Python & math refresh", overview: "Python recap and vectors/matrix basics." },
        { title: "Module 2 — Linear algebra & calculus intuition", overview: "Dot products, gradients and intuition for optimization." },
        { title: "Module 3 — Neural network fundamentals", overview: "Perceptrons, activations and forward/backprop intuition." },
        { title: "Module 4 — PyTorch/TensorFlow basics in Colab", overview: "Tensors, auto-diff and basic training loop." },
        { title: "Module 5 — MLP project", overview: "Build/train a simple multilayer perceptron." },
        { title: "Module 6 — CNN fundamentals", overview: "Convolutions, pooling and small vision examples." },
        { title: "Module 7 — Transfer learning & pretrained models", overview: "Fine-tuning pretrained networks for small datasets." },
        { title: "Module 8 — RNN / sequence basics", overview: "RNN intuition and simple sequence tasks." },
        { title: "Module 9 — Transformers intro & Hugging Face basics", overview: "Transformer intuition and using Hugging Face pipelines." },
        { title: "Module 10 — Data pipeline & augmentation", overview: "Loaders, augmentations and batching best practices." },
        { title: "Module 11 — Training practices & debugging", overview: "Loss curves, checkpoints and troubleshooting." },
        { title: "Module 12 — Model optimization & inference basics", overview: "Quantization, export formats and simple inference demos." },
        { title: "Modules 13–16 — Project work & demo", overview: "Image or text classifier end-to-end with notebook + demo." }
      ]
    },
    {
      title: "Automation and Scripting using Python",
      slug: "python-automation-scripting",
      category: "Software Courses",
      description: "Learn to automate and script tasks using Python.",
      modules: [
        { title: "Module 1 — Python recap & environment", overview: "Quick Python fundamentals and scripting workflow." },
        { title: "Module 2 — OS & filesystem automation", overview: "pathlib, subprocess and file manipulation." },
        { title: "Module 3 — CSV/Excel automation & data parsing", overview: "pandas for tabular automation and scheduled reports." },
        { title: "Module 4 — Web requests & APIs", overview: "requests, JSON handling and API automation patterns." },
        { title: "Module 5 — Web scraping basics", overview: "BeautifulSoup, polite scraping and robots.txt awareness." },
        { title: "Module 6 — Browser automation (Playwright/Selenium)", overview: "Headless automation and common automation tasks." },
        { title: "Module 7 — Scheduling & lightweight CI", overview: "cron basics and GitHub Actions for scheduled runs." },
        { title: "Modules 8–10 — Final automation project", overview: "Build, document and demo an end-to-end automation pipeline." }
      ]
    },
    {
      title: "Web Development with Python and Django",
      slug: "python-django-web-dev",
      category: "Software Courses",
      description: "A complete guide to web development with Python and Django.",
      modules: [
        { title: "Module 1 — HTML basics", overview: "Tags, semantics and page structure." },
        { title: "Module 2 — CSS basics & layout", overview: "Styling, box model and responsive layout." },
        { title: "Module 3 — JavaScript basics & DOM", overview: "Client-side scripting and DOM manipulation." },
        { title: "Module 4 — HTTP & REST basics", overview: "Requests, responses and API basics." },
        { title: "Module 5 — Python basics refresher", overview: "Python essentials needed for Django." },
        { title: "Module 6 — Django project & app structure", overview: "Creating projects, apps and routing." },
        { title: "Module 7 — Models, migrations & admin", overview: "Models, ORM and Django admin usage." },
        { title: "Module 8 — Views, templates & forms", overview: "Rendering pages, handling forms and validation." },
        { title: "Module 9 — Authentication & permissions", overview: "User auth flows, login, logout and permission handling." },
        { title: "Module 10 — Django REST Framework basics", overview: "Serializers, viewsets and API endpoints." },
        { title: "Module 11 — Frontend integration (HTMX/React basics)", overview: "Connecting Django APIs to modern frontend patterns." },
        { title: "Modules 12–14 — Deployment & capstone", overview: "Static/media handling, Gunicorn/Nginx concepts or instructor-hosted demo, final deployed app." }
      ]
    },
    {
      title: "Cyber Security",
      slug: "cyber-security",
      category: "Software Courses",
      description: "An in-depth course on Cyber Security principles and practices.",
      modules: [
        { title: "Module 1 — Introduction & Ethical Foundations", overview: "Course orientation, cyber-security mindset, ethics, rules of engagement, and legal boundaries." },
        { title: "Module 2 — Networking Fundamentals", overview: "IP/TCP/UDP/DNS/HTTP basics and simple packet/traffic interpretation." },
        { title: "Module 3 — Operating Systems & Lab Access", overview: "Windows vs Linux fundamentals, safe lab setup, terminal basics, and VM/browser-lab access rules." },
        { title: "Module 4 — Python Scripting for Security", overview: "Basic Python in Colab/Replit for parsing scan outputs, simple automation and helper scripts." },
        { title: "Module 5 — Footprinting & OSINT", overview: "Passive & active reconnaissance, Google dorking, whois, and OSINT tool workflows." },
        { title: "Module 6 — Scanning & Enumeration", overview: "Nmap theory, interpreting scan output, and enumeration techniques (SMB/HTTP/LDAP)." },
        { title: "Module 7 — Vulnerability Assessment & CVE workflow", overview: "Identifying vulnerabilities, CVE lookup, CVSS scoring, and prioritization." },
        { title: "Module 8 — System Hacking Basics (safe, browser labs)", overview: "Password attack concepts, exploitation workflow, and responsible exploitation via TryHackMe." },
        { title: "Module 9 — Web Application Security (OWASP)", overview: "OWASP Top10 overview and hands-on PortSwigger/Juice Shop exercises." },
        { title: "Module 10 — Burp Suite & Web Exploitation Practice", overview: "Burp Community concepts (proxy/repeater) and PortSwigger lab mapping." },
        { title: "Module 11 — Privilege Escalation Fundamentals", overview: "Post-exploit enumeration and privilege escalation theory (Linux & Windows basics)." },
        { title: "Module 12 — Malware, Trojans & Static Analysis Concepts", overview: "Malware types, safe/static analysis methods, detection basics (no live malware execution)." },
        { title: "Module 13 — Wireless & Social Engineering Basics", overview: "Wi-Fi attack surface concepts, phishing basics and awareness design." },
        { title: "Module 14 — Detection, Logging & Defensive Awareness", overview: "Log basics (syslog/Windows event), IDS/AV concepts, and how defenders detect attackers." },
        { title: "Module 15 — Reporting & Career Paths", overview: "Writing professional pentest reports (executive summary, CVSS, remediation) and career guidance." },
        { title: "Module 16 — Capstone CTF & Final Deliverables", overview: "Multi-stage CTF (TryHackMe/hosted) plus final pentest report." }
      ]
    },
    {
      title: "Data Analytics",
      slug: "data-analytics",
      category: "Software Courses",
      description: "Learn Data Analytics from the ground up.",
      modules: [
        { title: "Module 1 — Excel / Google Sheets basics", overview: "Spreadsheets, formulas and pivot basics." },
        { title: "Module 2 — SQL fundamentals (SQLite)", overview: "SELECT, WHERE, JOIN and aggregation." },
        { title: "Module 3 — Python for analytics (pandas)", overview: "DataFrames, grouping and transforms." },
        { title: "Module 4 — Data cleaning & joins", overview: "Cleaning pipelines and merging datasets." },
        { title: "Module 5 — Visualization basics (matplotlib/plotly)", overview: "Charts, dashboards and story-driven visuals." },
        { title: "Module 6 — Exploratory workflows & KPIs", overview: "EDA process, KPIs and business questions." },
        { title: "Module 7 — Dashboarding (Google Data Studio)", overview: "Building interactive dashboards and filters." },
        { title: "Module 8 — Time series & aggregation", overview: "Trends, resampling and rolling metrics." },
        { title: "Module 9 — Basic stats & sampling", overview: "Sampling, significance and basic tests." },
        { title: "Modules 10–12 — Business case project & presentation", overview: "Build a dashboard, SQL notebook and present insights." }
      ]
    },
    {
      title: "Cloud Computing",
      slug: "cloud-computing",
      category: "Software Courses",
      description: "A course on the fundamentals of Cloud Computing.",
      modules: [
        { title: "Module 1 — Cloud fundamentals & models", overview: "IaaS/PaaS/SaaS, regions, availability zones and core services." },
        { title: "Module 2 — Linux & networking refresher", overview: "SSH, ports, basic routing and subnet ideas." },
        { title: "Module 3 — Local emulators (LocalStack) intro", overview: "Simulating S3/Lambda and testing cloud APIs locally." },
        { title: "Module 4 — Containers basics (Docker/Podman)", overview: "Images, containers and basic docker commands." },
        { title: "Module 5 — Container workflows & image building", overview: "Dockerfiles, multi-stage builds and registries (local/demo)." },
        { title: "Module 6 — Orchestration intro (minikube/k3s)", overview: "k8s basics: pods, services and deployments (local demo)." },
        { title: "Module 7 — Storage & database patterns", overview: "Object vs block storage, basic managed DB concepts." },
        { title: "Module 8 — IAM & security fundamentals", overview: "Principle of least privilege, roles, keys and auth flows." },
        { title: "Module 9 — CI/CD fundamentals (GitHub Actions)", overview: "Build/test/deploy pipelines and simple automation." },
        { title: "Module 10 — Monitoring basics (Prometheus/Grafana)", overview: "Metrics, alerts and simple dashboards (local demo)." },
        { title: "Modules 11–12 — Capstone: Containerized app + CI pipeline", overview: "Containerize a small app, run CI pipeline locally/emulator and demo monitoring." }
      ]
    }
  ];
  
  export const socialLinks = {
   instagram: "https://www.instagram.com/sreshta_vlsi?igsh=MWdxdDE5YXoyMm5vcQ==",
   // Corrected protocol for external link
   linkedin: "https://www.linkedin.com/in/sreshta777", 
   x: "https://x.com/sreshta_semicon",
  };
  
  export const contactDetails = {
   phone1: "7801009777",
   phone2: "9618046555", // Assuming this is from the banner text
   email: "sreshtasemicon@gmail.com",
   address: "Visakhapatnam, Andhra Pradesh",
  };