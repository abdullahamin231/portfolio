import { useState, useRef } from 'react';

type Command = "help" | "clear" | "ls" | "whoami" | "contact";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState<{ command: string; output: string; }[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (command: string) => {
    let output = '';

    switch (command as Command) {
      case "help":
        output = `Available commands:\nhelp, clear, ls, whoami`;
        break;
      case "clear":
        setCommandHistory([]);
        return;
      case "ls":
        output = `experience    projects    contact\n\nUse 'whoami' to know more about me.`;
        break;
      case "whoami":
        output = `Abdullah A.\nCurrently pursuing a Bachelor's degree in Computer Science (Junior Year) at FAST Islamabad.\nI’ve worked on real-world projects involving backtesting engines, C++ simulations, web development, and infrastructure using tools like DuckDB, Julia, React, and Docker.\nType 'ls experience' to see my work experience or 'ls projects' to see my projects .\nTo contact me, type 'contact'.`;

        break;
      default:
        output = `Command not found: ${command}`;
    }

    setCommandHistory(prev => [...prev, { command, output }]);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (inputValue.trim() !== '') {
        const command = inputValue.trim();
        setInputValue('');
        setHistoryIndex(-1);

        handleCommand(command);

        // Scroll to the bottom
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }
        }, 100);
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[newIndex].command);
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
        if (newIndex === commandHistory.length - 1 && historyIndex === commandHistory.length - 1) {
          setHistoryIndex(-1);
          setInputValue('');
        } else if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex);
          setInputValue(commandHistory[newIndex].command);
        }
      }
    } else if (event.key === 'Tab') {
      event.preventDefault();
      console.log('Implement autocompletion logic here');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (historyIndex !== -1) {
      setHistoryIndex(-1);
    }
  };

  return (
    <div className="bg-background font-jetbrains h-screen w-screen overflow-hidden p-4">
      {/* Terminal window frame */}
      <div className="bg-background border border-gray-700 rounded-lg shadow-2xl h-full flex flex-col">
        {/* Terminal title bar */}
        <div className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center justify-between rounded-t-lg">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-gray-400 text-sm font-firacode">Portfolio</div>
          <div className="w-16"></div>
        </div>

        {/* Terminal content */}
        <div className="flex-1 p-4 overflow-y-auto scrollbar-custom">
          {/* Command history display */}
          <div className="mb-2">
            {commandHistory.map((entry, index) => (
              <div key={index} className="mb-2">
                {/* Command line */}
                <div className="flex items-center text-base font-firacode">
                  <span className="bg-brightBlack text-foreground px-2 py-1 mr-1 rounded">abdullah@main</span>
                  <div className="bg-brightBlue text-brightBlack px-3 py-1 flex items-center mr-2 rounded">~</div>
                  <span className="text-green">{entry.command}</span>
                </div>
                {/* Command output */}
                <div className="text-foreground text-base mt-1 whitespace-pre-wrap font-firacode">
                  {entry.output}
                </div>
              </div>
            ))}
          </div>

          {/* Current input line */}
          <div className="flex items-center text-base font-firacode">
            <span className="bg-brightBlack text-foreground px-2 py-1 mr-1 rounded">abdullah@main</span>
            <div className="bg-brightBlue text-brightBlack px-3 py-1 flex items-center mr-2 rounded">~</div>
            <input
              ref={inputRef}
              type="text"
              className="flex-1 bg-transparent border-none outline-none text-foreground caret-green"
              autoFocus
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              placeholder="help"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;