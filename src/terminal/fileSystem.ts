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
          content: `Developed a Plants vs Zombies clone in C++.`
        },
        "c_backtesting_engine": {
          type: 'file',
          name: 'c_backtesting_engine',
          content: `Developed a backtesting engine for trading strategies using C and PostgreSQL.`
        },
        "real_time_chat_app.md": {
          type: 'file',
          name: 'real_time_chat_app.md',
          content: `Created a real-time chat application using React, Next.js, and Socket.IO.`
        },

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