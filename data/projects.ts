export type Project = {
  title: string;
  blurb: string;      // 1-sentence overview shown on the main page
  details: string;    // longer description shown in the Details modal
  tech: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
 {
  title: "AI Entity Matching Pipeline",
  blurb: "AI-driven account deduplication pipeline using Apollo Studio, combining name and address matching to consolidate large duplicate datasets into clean, validated records. ",
  details:
    "This project demonstrates the design of an AI-assisted data pipeline for large-scale account deduplication. It is inspired by real-world enterprise workflows and focuses on reducing manual review through structured, automated matching logic.",
  tech: ["Python", "SQL", "Apollo Studio", "APIs"],
  github: "https://github.com/madhu1-byte/AI-Powered-Entity-Matching-Deduplication-Pipeline",
},
  {
    title: "CPU Scheduler Console",
    blurb:
      "Developed a CPU scheduling simulator to model and analyze performance tradeoffs across multiple operating-system scheduling algorithms.",
    details:
      "Implemented a CPU scheduling simulator in C# supporting FCFS, SJF, Round Robin, Priority, SRTF, and Multilevel Feedback Queue (MLFQ) algorithms. Engineered scheduling logic to simulate process execution and compute performance metrics including average waiting time, turnaround time, CPU utilization, and throughput. Designed an interactive console interface to configure process parameters and evaluate scheduling behavior under different workloads. Strengthened expertise in operating systems design, algorithm optimization, and performance modeling.",
    tech: ["C#", ".NET", "Operating Systems"],
    github: "https://github.com/madhu1-byte/CPU-Scheduler-Console",
  },
  {
    title: "Multi-Threading + IPC in C#",
    blurb:
      "Built a C multithreading and inter-process communication (IPC) toolkit that demonstrates thread management, synchronization mechanisms, and IPC patterns with performance analysis.",
    details:
      "Engineered a multithreading and IPC framework in C incorporating thread lifecycle management and multiple synchronization techniques. \n\nBuilt IPC patterns using pipes, shared memory, and messaging to enable structured communication between separate processes and threads. Measured and analyzed performance characteristics, highlighting the effects of contention, locking strategies, and context switching. Applied core systems programming principles to design robust, reproducible test harnesses for evaluating concurrency behavior.",
    tech: ["C#", ".NET", "Threads", "Named Pipes", "Concurrency"],
    github:
      "https://github.com/madhu1-byte/Multi-Threading-and-IPC-in-C-Implementation-and-Analysis",
  },
  {
    title: "Sales Performance Dashboard (Power BI)",
    blurb:
      "Developed a console-based sales database application that manages inventory, customers, and transactions with persistent file-based storage and transaction reporting.",
    details:
      "Engineered a sales database system with support for managing products, customers, and sales transactions through an interactive console interface. \n\nDesigned and implemented file-based persistent storage to save and load structured records without relying on external database systems. Built functionality to process and validate sales, update inventory levels, and generate readable reports summarizing transactions and data status. Applied object-oriented design principles to structure data models and business logic, strengthening skills in data management, system state persistence, and user input processing.",
    tech: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    github: "https://github.com/madhu1-byte/Sales-DB",
  },
  {
    title: "CPU Simulator GUI + QR/Barcode Generator",
    blurb:
      "GUI-based CPU scheduler simulator that visually models and compares multiple scheduling algorithms with real-time metrics and interactive controls.",
    details:
      "Engineered a modular C# desktop simulator that transforms theoretical CPU scheduling algorithms into an interactive, visual experience. \n\nDeveloped real-time visualization and configurable process controls that allow users to explore how scheduling decisions influence performance and system behavior. Connected backend scheduling logic with a responsive GUI to support comparative analysis across multiple algorithms. Through this project, I refined my ability to bridge low-level systems concepts with user-friendly application design.",
    tech: ["C#", "Desktop GUI"],
    github: "https://github.com/madhu1-byte/CPU-Simulator-GUI",
  },
];
