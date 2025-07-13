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
        "backtesting_engine.md": {
          type: 'file',
          name: 'backtesting_engine.md',
          content: `Developed a backtesting engine for trading strategies using Python and PostgreSQL.`
        },
        "c++_simulation.md": {
          type: 'file',
          name: 'c++_simulation.md',
          content: `Implemented a C++ simulation for financial models, enhancing performance and accuracy.`
        }
      }
    },
    "experience": {
      type: 'directory',
      name: 'experience',
      children: {
        "software_engineer.md": {
          type: 'file',
          name: 'software_engineer.md',
          content: `
          <div class="rounded-2xl p-6 shadow-xl">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
      <div class="text-lg font-semibold text-blue">Software Engineer -- Algozen</div>
      <div class="text-base text-foreground">Remote, United States · Aug 2024 – Present</div>
    </div>
    <ul class="list-disc list-inside space-y-2 text-zinc-300">
      <li><span class="font-semibold text-brightWhite">High-Performance Backtesting System:</span> Designed and maintained a high-performance computing system for financial strategy evaluation using Julia, handling large datasets with efficiency.</li>
      <li><span class="font-semibold text-brightWhite">Performance Optimization:</span> Optimized backtesting logic, cutting run time by over 60% to boost efficiency.</li>
      <li><span class="font-semibold text-brightWhite">End-to-End Ownership:</span> Led the full-stack lifecycle of features, integrating front-end, back-end, and tests for smooth deployments.</li>
      <li><span class="font-semibold text-brightWhite">Testing & QA:</span> Developed Cypress E2E tests for front-end apps, improving reliability and UX.</li>
      <li><span class="font-semibold text-brightWhite">CI/CD Automation:</span> Added pre-commit/push hooks for test automation, reducing regressions.</li>
      <li><span class="font-semibold text-brightWhite">Agile Collaboration:</span> Contributed to daily standups and collaborated across teams to ensure consistent delivery.</li>
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
    <ul class="list-disc list-inside space-y-2 text-zinc-300">
      <li><span class="font-semibold text-brightWhite">Strategy Visualization Tool:</span> Built an interactive tool for visualizing decision logic in trading strategies, improving clarity in market evaluations.</li>
      <li><span class="font-semibold text-brightWhite">Testing & Reliability:</span> Wrote Jest unit tests for frontend components, ensuring robustness and preventing regressions.</li>
    </ul>
  </div>`
        }
      }
    }
  },
};