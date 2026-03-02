import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Zeeshan Ajmal",
  initials: "ZA",
  url: "https://xeeshanajmal.vercel.app/",
  location: "Oulu, Finland",
  locationLink: "https://www.google.com/maps/place/Oulu,+Finland",
  description: "Doctoral Researcher: Quantum Cybersecurity & AI",
  summary: `I'm a Doctoral Researcher in Computer Science at the University of Oulu, working with the **Oulu University Secure Programming Group (OUSPG)** at the intersection of AI/ML, quantum computing, and cybersecurity.

My Master's thesis focused on machine learning–based detection of malicious quantum circuits, work that has since grown into a broader doctoral research agenda around AI/ML and agent-based detection of threats in quantum software engineering (QSE).

My academic interests span **quantum cybersecurity**, adversarial machine learning, LLM and agentic AI security, and quantum machine learning (QML). I'm also deeply interested in ethical and trustworthy AI, federated learning, and integrating generative AI into real-time threat detection and exposure management pipelines.

Outside academia, I work as a **Cyber Exposure & Vulnerability Lead at Arctic Security**, where I map internet-facing assets, identify misconfigurations, and drive vulnerability remediation, bringing a practical, operational lens to the theoretical problems I research.

I believe the most important security challenges of the next decade will sit exactly at the boundary of quantum computing and AI, and I'm committed to building the knowledge and tools to meet them.`,
  professional_summary: `
Doctoral Researcher in Computer Science (Quantum Cybersecurity) at the University of Oulu, working with OUSPG on
the intersection of AI/ML, quantum computing, and cybersecurity. Master's thesis focused on machine learning–based
detection of malicious quantum circuits; current research extends this towards AI/ML and agent-based detection of
threats in quantum software engineering (QSE). Industry background includes cyber exposure management, data center
security, and risk analysis across Finland, Saudi Arabia, and Pakistan.
`,
  strengths: `
- Quantum cybersecurity research (AI/ML-based threat detection, Quantum Trojans, QML)
- Agentic AI security and LLM security evaluation
- Penetration testing & cyber exposure management (Nmap, Masscan, Shodan, Burp Suite, Metasploit)
- Machine learning & deep learning (Scikit-learn, PyTorch, QSVM, Random Forest)
- Cloud & DevSecOps (AWS, Azure, GCP, Docker, Kubernetes)
- Empirical research, topic modelling (LDA), and technical writing
`,
  avatarUrl: "/avatar.jpg",
  cartoonAvatarUrl: "/cartoon_avatar.png",
  skills: [
    // Quantum & Research
    "Qiskit",
    "Python",
    "C++",
    "SQL",
    "Shell Scripting",

    // AI/ML
    "PyTorch",
    "Scikit-learn",

    // Cybersecurity
    "Penetration Testing",
    "Nmap",
    "Burp Suite",
    "Wireshark",
    "Shodan",
    "Metasploit",
    "Nessus",
    "Wazuh",

    // Cloud & DevOps
    "AWS",
    "Azure",
    "GCP",
    "Docker",
    "Kubernetes",
    "Git",

    // Data & Analytics
    "Power BI",
    "Tableau",
    "Pandas",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://github.com/xeeshanajmal",
      icon: NotebookIcon,
      label: "GitHub",
    },
  ],
  contact: {
    email: "Zeeshan.ajmal@oulu.fi",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/xeeshanajmal",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/xeeshanajmal",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:Zeeshan.ajmal@oulu.fi",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "University of Oulu",
      href: "https://www.oulu.fi/en/",
      badges: [
        "Quantum Cybersecurity",
        "AI/ML",
        "Agentic AI",
        "Qiskit",
        "Quantum Circuits",
      ],
      industries: ["Research", "Quantum Computing", "Cybersecurity"],
      location: "Oulu, Finland",
      title: "Doctoral Researcher | Quantum Cybersecurity",
      logoUrl: "/oulu-logo.png",
      start: "September 2025",
      end: "Present",
      description: `
- Conducting PhD research on **quantum cybersecurity** using AI/ML and agentic AI for threat detection and mitigation.
- Designing experiments with **Qiskit** and ML/QML models to detect malicious behaviour and quantum Trojans in quantum circuits.
- Collaborating with supervisors and partners to publish results and contribute to **secure-by-design quantum computing**.
`,
    },
    {
      company: "Arctic Security Oy",
      href: "https://arcticsecurity.com/",
      badges: [
        "Cyber Exposure",
        "Vulnerability Management",
        "Nmap",
        "Shodan",
        "MITRE ATT&CK",
      ],
      industries: ["Cybersecurity", "Threat Intelligence"],
      location: "Oulu, Finland",
      title: "Cyber Exposure & Vulnerability Lead",
      logoUrl: "/arctic-security-logo.jpg",
      start: "October 2025",
      end: "Present",
      description: `
- Enhancing **cyber exposure management** by mapping internet-facing assets and identifying misconfigurations and weak points.
- Using **Nmap, Masscan, ProjectDiscovery tools, Shodan, Wireshark** and Metasploit to discover, validate and document vulnerabilities.
- Performing **CVE/CWE analysis**, prioritising remediation with product and engineering teams, and tracking closure of high-risk issues.
`,
    },
    {
      company: "University of Oulu – OUSPG",
      href: "https://ouspg.org/",
      badges: [
        "Python",
        "Qiskit",
        "ML",
        "QML",
        "Quantum Circuits",
        "Quantum Security",
      ],
      industries: ["Research", "Quantum Computing", "Cybersecurity"],
      location: "Oulu, Finland",
      title: "Research Assistant | OUSPG",
      logoUrl: "/oulu-logo.png",
      start: "November 2024",
      end: "August 2025",
      description: `
- Worked on **AI-driven detection of malicious quantum circuits** as part of Master's thesis and ongoing doctoral research.
- Designed quantum circuits using **Qiskit** and trained classical and quantum ML models (e.g. **Random Forest, QSVM**) for malicious/benign classification.
- Integrated deep learning methods to analyse quantum computing threats and propose resilient cybersecurity protocols.
- Developed and released the **[Quantum Trojan Detection Dataset](https://github.com/xeeshanajmal)** for research on malicious quantum circuits.
`,
    },
    {
      company: "University of Oulu – M3S",
      href: "https://www.oulu.fi/en/university/faculties-and-units/faculty-information-technology-and-electrical-engineering/m3s",
      badges: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "MAXQDA",
        "Qualitative Analysis",
        "Quantitative Analysis",
      ],
      industries: ["Research", "Quantum Computing", "Empirical Studies"],
      location: "Oulu, Finland",
      title: "Research Intern | M3S",
      logoUrl: "/oulu-logo.png",
      start: "May 2024",
      end: "August 2024",
      description: `
- Conducted **empirical research** on quantum computing and cybersecurity based on developer discussions.
- Applied **Latent Dirichlet Allocation (LDA) topic modelling** and mixed quantitative–qualitative analysis (Pandas, scikit-learn, MAXQDA) to identify key challenge areas.
- Published findings in: **[Developer discussions on Quantum Cybersecurity](https://github.com/xeeshanajmal)**.
`,
    },
    {
      company: "ENGIE Solutions, MEA",
      href: "https://www.engie.com/",
      badges: [
        "Cloud Security",
        "FMEA",
        "Risk Analysis",
        "Data Analysis",
        "Inspections",
      ],
      industries: ["Data Center Security", "Energy", "Compliance"],
      location: "Saudi Arabia",
      title: "Data Center Security Engineer",
      logoUrl: "/engie-logo.jpg",
      start: "May 2023",
      end: "August 2023",
      description: `
- Implemented safety and security standards for **KACE & KAUST Data Center**, ensuring compliance with NIST, EMEA and local regulations.
- Conducted **risk assessments** and regular security audits to identify and mitigate potential threats, enhancing overall data center security.
`,
    },
    {
      company: "SRACO – Royal Commission Jubail",
      href: "#",
      badges: [
        "Incident Response",
        "Business Continuity Planning",
        "Risk Analysis",
        "Risk Management",
        "Data Analysis",
        "Compliance",
      ],
      industries: ["Risk Management", "Safety", "Industrial"],
      location: "Jubail, Saudi Arabia",
      title: "Risk Analysis Engineer",
      logoUrl: "/sraco-logo.jpg",
      start: "December 2015",
      end: "May 2023",
      description: `
- Conducted comprehensive **risk assessments and data analysis** using Power BI.
- Implemented and enforced **safety management systems**, and trained staff on compliance and global safety programs.
- Performed **FMEA and Root Cause Analysis** to enhance system reliability and security.
`,
    },
    {
      company: "Tier4 Pvt.",
      href: "#",
      badges: [
        "3G/4G RAN Deployment",
        "BSS Configuration",
        "Microwave Link Alignment & Troubleshooting",
        "Telecom Site Acceptance",
      ],
      industries: ["Telecommunications", "Field Engineering"],
      location: "Islamabad, Pakistan",
      title: "Telecom Field & Integration Engineer",
      logoUrl: "/tier4-logo.jpg",
      start: "December 2012",
      end: "April 2015",
      description: `
- Installed and commissioned **3G/4G radio equipment**, including BSS and microwave links, ensuring optimal signal coverage and site integration with operator networks.
- Led **security and risk management** initiatives, ensuring adherence to local regulatory legislation and compliance.
- Performed on-site troubleshooting, hardware configuration and link alignment for **microwave backhaul**, enhancing connectivity and reducing downtime.
`,
    },
    {
      company: "Pakistan Telecommunication Authority (GRC)",
      href: "https://www.pta.gov.pk/",
      badges: [
        "GRC Support",
        "ISO 27001",
        "Information Security",
        "Regulatory Research",
        "Telecom Documentation",
      ],
      industries: ["Telecom Regulation", "Governance", "Compliance"],
      location: "Islamabad, Pakistan",
      title: "Management Trainee Officer",
      logoUrl: "/pta-logo.jpg",
      start: "November 2011",
      end: "November 2012",
      description: `
- Assisted technical teams in reviewing **telecom regulations** and cybersecurity compliance documentation.
- Supported research and reporting on **ISO 27001 and GRC frameworks** for national telecom infrastructure.
`,
    },
  ],
  education: [
    {
      school: "University of Oulu",
      href: "https://www.oulu.fi/en/",
      degree: "Doctoral Studies in Computer Science (Quantum Cybersecurity)",
      location: "Oulu, Finland",
      logoUrl: "/oulu-logo.png",
      start: "September 2025",
      end: "Present",
      description:
        "**Research Focus:** Quantum cybersecurity, AI/ML-based threat detection, agentic AI security, QML.",
    },
    {
      school: "University of Oulu",
      href: "https://www.oulu.fi/en/",
      degree: "Master of Science in Computer Science and Engineering",
      location: "Oulu, Finland",
      logoUrl: "/oulu-logo.png",
      start: "September 2023",
      end: "June 2025",
      description:
        "**Subjects:** Security Engineering, Cryptography, Cloud Security, Ethical Hacking, Deep Learning.\n\n**Thesis:** Using Artificial Intelligence and Machine Learning to Detect Malicious Quantum Circuits",
    },
    {
      school: "COMSATS University Islamabad",
      href: "https://www.comsats.edu.pk/",
      degree: "Bachelor of Science in Electrical (Telecom) Engineering",
      location: "Islamabad, Pakistan",
      logoUrl: "/comsats-logo.jpg",
      start: "September 2007",
      end: "July 2011",
      description:
        "**Subjects:** Data Structures, C++, Digital Communication, Embedded Systems, Computer Networks.",
    },
  ],
  projects: [
    {
      title: "Quantum Trojan Detection Dataset",
      href: "https://github.com/xeeshanajmal",
      dates: "",
      active: true,
      description:
        "A **research dataset** developed for the detection of malicious quantum circuits and Quantum Trojans. Designed to support training and evaluation of classical and quantum ML models (Random Forest, QSVM) for benign/malicious quantum circuit classification. Released openly to advance research in quantum cybersecurity.",
      technologies: [
        "Python",
        "Qiskit",
        "Quantum Circuits",
        "ML",
        "QML",
        "Quantum Security",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/xeeshanajmal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      highlight: "",
      images: [],
      video: "",
    },
    {
      title: "Developer Discussions on Quantum Cybersecurity",
      href: "https://github.com/xeeshanajmal",
      dates: "",
      active: true,
      description:
        "An **empirical study** on quantum computing and cybersecurity based on developer discussions. Applied **Latent Dirichlet Allocation (LDA) topic modelling** and mixed quantitative–qualitative analysis using Pandas, scikit-learn, and MAXQDA to identify key challenge areas in quantum cybersecurity from developer communities.",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "LDA",
        "MAXQDA",
        "Qualitative Analysis",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/xeeshanajmal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      highlight: "",
      images: [],
      video: "",
    },
    {
      title: "AI/ML Detection of Malicious Quantum Circuits",
      href: "#",
      dates: "",
      active: true,
      description:
        "Master's thesis research applying **machine learning and deep learning** to detect malicious quantum circuits and Quantum Trojans. Combines classical ML models (Random Forest) and quantum ML approaches (QSVM) with Qiskit-based circuit simulation to build a robust detection pipeline for quantum software security threats.",
      technologies: [
        "Python",
        "Qiskit",
        "PyTorch",
        "Scikit-learn",
        "QML",
        "Deep Learning",
        "Quantum Security",
      ],
      highlight: "",
      images: [],
      video: "",
    },
  ],
  certifications: [
    {
      title: "CISSP",
      issuer: "Metropolia University, FI",
      status: "On-going",
    },
    {
      title: "(ISC)² Systems Security Certified Practitioner – Training",
      issuer: "Coursera",
      status: "Completed",
    },
    {
      title: "Jr. Penetration Tester",
      issuer: "TryHackMe",
      status: "Completed",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      status: "Completed",
    },
    {
      title: "CompTIA Security+ – Training",
      issuer: "Class Central",
      status: "Completed",
    },
    {
      title: "SQL and Python for Data Science",
      issuer: "Coursera",
      status: "Completed",
    },
  ],
} as const;
