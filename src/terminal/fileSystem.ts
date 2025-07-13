import type { Directory } from "./types";

export const fileSystem: Directory = {
  type: 'directory',
  name: '~',
  children: {
    "contact.md": {
      type: 'file',
      name: 'contact.md',
      content: `
<div>
  <h2>You can reach me at:</h2>
  <ul class="list-disc pl-5">
    <li><strong>Email:</strong> <a target="_blank" href="mailto:abdullahamin231@gmail.com" class="text-blue-500 hover:underline">abdullahamin231@gmail.com</a></li>
    <li><strong>LinkedIn:</strong> <a target="_blank" href="https://www.linkedin.com/in/abdullahamin231/" class="text-blue-500 hover:underline">https://www.linkedin.com/in/abdullahamin231/</a></li>
    <li><strong>GitHub:</strong> <a target="_blank" href="http://github.com/abdullahamin231/" class="text-blue-500 hover:underline">http://github.com/abdullahamin231/</a></li>
  </ul>
</div>
`
    },
    "technical_skills.md": {
      type: 'file',
      name: 'technical_skills.md',
      content: `<div class="flex flex-col items-start gap-2 m-0 p-0">
  <h2 class="m-0 p-0">Technical Skills:</h2>
  <ul class="list-disc pl-5 m-0">
    <li class="m-0 p-0"><strong class="text-brightBlue">Languages:</strong> JavaScript/TypeScript, Julia, C, C++, Python</li>
    <li class="m-0 p-0"><strong class="text-brightBlue">Frameworks/Libraries:</strong> React, Next.js, Socket.IO, Tailwind CSS, Cypress, Node.js, Express.js, Bun</li>
    <li class="m-0 p-0"><strong class="text-brightBlue">Technologies:</strong> Supabase, Docker, GitHub, CI/CD, Linux</li>
    <li class="m-0 p-0"><strong class="text-brightBlue">Databases:</strong> PostgreSQL, MongoDB, SQL Server</li>
  </ul>
</div>
`
    },
    "projects": {
      type: 'directory',
      name: 'projects',
      children: {
        "plants_vs_zombies.md": {
          type: 'file',
          name: 'plants_vs_zombies.md',
          content: `
          <h2>Developed a Plants vs Zombies clone in C++.</h2>
          <ul class="list-disc pl-5">
            <li>Implemented a complete game loop with real-time rendering and event handling.</li>
            <li>Designed and developed various plant and zombie types with unique behaviors.</li>
            <li>Utilized object-oriented programming principles for modular and maintainable code.</li>
            <li>Implemented collision detection and game state management.</li>
            <li>Implemented game state management using binary files for efficient saving and loading of progress.</li>
            </ul>
            <div class="flex flex-col items-start">
              <a target="_blank" href="https://github.com/abdullahamin231/PlantsVsZombies" class="text-blue-500 hover:underline">Download from GitHub</a>
              <a target="_blank" href="https://github.com/abdullahamin231/PlantsVsZombiesCode" class="text-blue-500 hover:underline">Read the Code</a>
            </div>
          `
        },
        "c_backtesting_engine.md": {
          type: 'file',
          name: 'c_backtesting_engine.md',
          content: `
          <h2>Backtesting Engine</h2>
          <p>Developed a backtesting engine for trading strategies using C, json_reader.h and Apache Arrow.</p>
          <ul class="list-disc pl-5">
            <li>Developed a C-based backtesting framework designed to simulate and evaluate trading strategies on historical financial data, enabling traders and developers to assess strategy performance before live deployment.</li>
            <li>Utilized core C programming concepts such as data structures, file I/O, and modular design, ensuring a lightweight, portable, and easily extensible codebase suitable for integration with other trading tools.</li>
          </ul>
          <a target="_blank" href="https://github.com/abdullahamin231/backtesting-c/" class="text-blue-500 hover:underline">View on GitHub</a>
          `
        },
        "real_time_chat_app.md": {
          type: 'file',
          name: 'real_time_chat_app.md',
          content: `Created a real-time chat application using React, Next.js, and Socket.IO.`
        },
        "atc_simulation.md": {
          type: 'file',
          name: 'atc_simulation.md',
          content: `
          <h2>Multi-threaded Air Traffic Control (ATC) Simulation</h2>
          <ul class="list-disc pl-5">
            <li>Built a multi-threaded Air Traffic Control (ATC) simulation in C++ to demonstrate core operating system (OS) concepts and principles.</li>
            <li>Applied thread management and synchronization techniques (mutexes, condition variables) to coordinate concurrent aircraft operations.</li>
            <li>Implemented process scheduling algorithms to model realistic aircraft movement and resource allocation.</li>
            <li>Utilized memory management and inter-process communication (IPC) to facilitate safe data sharing between control tower and aircraft threads.</li>
            <li>Demonstrated practical understanding of OS fundamentals by simulating real-time, concurrent system behavior within the ATC environment.</li>
            <a target="_blank" href="https://github.com/abdullahamin231/atc-simulation" class="text-blue-500 hover:underline">View on GitHub</a>
          </ul>
          `
        }
      }
    },
    "experience": {
      type: 'directory',
      name: 'experience',
      children: {
        "frontend_engineer.md": {
          type: 'file',
          name: 'frontend_engineer.md',
          content: `
          <div class="rounded-2xl p-6 shadow-xl">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
      <div class="text-lg font-semibold text-blue">Frontend Engineer -- Fastrack</div>
      <div class="text-base text-foreground">Islamabad, Pakistan · Jun 2025 – Present</div>
    </div>
    <ul class="list-disc list-inside space-y-2 text-zinc-300">
      <li><span class="font-semibold text-brightWhite">Landing Page Development:</span> Engineered a responsive and visually precise landing page using React, ensuring seamless user experience across devices.</li>
    </ul>
  </div>
          `
        },
        "software_engineer.md": {
          type: 'file',
          name: 'software_engineer.md',
          content: `
          <div class="rounded-2xl p-6 shadow-xl">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
      <div class="text-lg font-semibold text-blue">Software Engineer -- Algozen</div>
      <div class="text-base text-foreground">Remote, United States · Aug 2024 – Present</div>
    </div>
    <ul class="list-disc list-inside space-y-2">
      <li><span class="font-semibold text-brightWhite">High-Performance Backtesting System:</span> Designed and maintained a scalable computing system for financial strategy evaluation using Julia, optimizing data processing for large datasets.</li>
      <li><span class="font-semibold text-brightWhite">Performance Optimization:</span> Enhanced backtesting algorithms, reducing execution time by over 60% for improved efficiency.</li>
      <li><span class="font-semibold text-brightWhite">End-to-End Ownership:</span> Spearheaded the full-stack development lifecycle, integrating front-end, back-end, and testing workflows for streamlined deployments.</li>
      <li><span class="font-semibold text-brightWhite">Testing & QA:</span> Implemented Cypress E2E tests for front-end applications, ensuring reliability and superior user experience.</li>
      <li><span class="font-semibold text-brightWhite">CI/CD Automation:</span> Developed pre-commit/push hooks for automated testing, minimizing regressions and enhancing code quality.</li>
      <li><span class="font-semibold text-brightWhite">Agile Collaboration:</span> Actively contributed to daily standups and cross-team collaboration to ensure consistent and timely delivery of features.</li>
    </ul>
  </div>`
        },
        "software_engineering_intern.md": {
          type: 'file',
          name: 'software_engineering_intern.md',
          content: `
          <div class="rounded-2xl p-6 shadow-xl">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
      <div class="text-lg font-semibold text-blue">Software Engineering Intern -- Algozen</div>
      <div class="text-base text-foreground">Remote, United States · Jun 2024 – Aug 2024</div>
    </div>
    <ul class="list-disc list-inside space-y-2 ">
      <li><span class="font-semibold text-brightWhite">Strategy Visualization Tool:</span> Developed an interactive tool for visualizing decision logic in trading strategies, enhancing clarity in market evaluations.</li>
      <li><span class="font-semibold text-brightWhite">Testing & Reliability:</span> Authored Jest unit tests for frontend components, ensuring robustness and preventing regressions.</li>
    </ul>
  </div>`
        }
      }
    }
  },
};