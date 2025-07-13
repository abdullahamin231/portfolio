import { useRef, useEffect } from 'react';
import { useTerminal } from './hooks/useTerminal'; // Import the custom hook

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    inputValue,
    commandHistory,
    handleInputChange,
    handleKeyPress,
  } = useTerminal();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [commandHistory]);

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
