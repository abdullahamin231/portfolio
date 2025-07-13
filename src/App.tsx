import { useState, useRef } from 'react';
import "./index.css"

function App() {
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1); // -1 means not navigating history

  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission if input was in a form
      if (inputValue.trim() !== '') {
        setCommandHistory(prevHistory => [...prevHistory, inputValue]);
        setInputValue('');
        setHistoryIndex(-1); // Reset history index
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[newIndex]);
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
        if (newIndex === commandHistory.length - 1 && historyIndex === commandHistory.length - 1) {
          // If already at the last command and pressing down again, clear input
          setHistoryIndex(-1);
          setInputValue('');
        } else if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex);
          setInputValue(commandHistory[newIndex]);
        }
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    // If user starts typing after navigating history, reset index
    if (historyIndex !== -1) {
      setHistoryIndex(-1);
    }
  };

  return (
    <div className="bg-background font-jetbrains h-screen w-screen overflow-hidden p-4">
      {/* Terminal window frame */}
      <div className="bg-black border border-gray-700 rounded-lg shadow-2xl h-full flex flex-col">
        {/* Terminal title bar */}
        <div className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center justify-between rounded-t-lg">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-gray-400 text-sm font-mono">Terminal</div>
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>

        {/* Terminal content */}
        <div className="flex-1 p-4 overflow-y-auto">
          {/* Command history display */}
          <div className="mb-2">
            {commandHistory.map((command, index) => (
              <div key={index} className="mb-1">
                <div className="flex items-center text-base font-mono">
                  <span className="bg-brightBlack text-foreground px-2 py-1 mr-1 rounded">abdullah@main</span>
                  <div className="bg-brightBlue text-brightBlack px-3 py-1 flex items-center mr-2 rounded">~</div>
                  <span className="text-green">{command}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Current input line */}
          <div className="flex items-center text-base font-mono">
            <span className="bg-brightBlack text-foreground px-2 py-1 mr-1 rounded">abdullah@main</span>
            <div className="bg-brightBlue text-brightBlack px-3 py-1 flex items-center mr-2 rounded">~</div>
            <input
              ref={inputRef}
              type="text"
              className="flex-1 bg-transparent border-none outline-none text-green caret-green"
              autoFocus
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="help"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
