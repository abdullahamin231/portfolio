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
    }
  },
};