import { useState } from 'react';

const COMMANDS = ["help", "clear", "ls", "whoami", "contact"];
type Command = typeof COMMANDS[number];

interface CommandHistoryEntry {
  command: string;
  dir: string;
  output: string;
}

interface UseTerminalReturn {
  inputValue: string;
  commandHistory: CommandHistoryEntry[];
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  dir: string;
}

export function useTerminal(): UseTerminalReturn {
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState<CommandHistoryEntry[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [dir, setDir] = useState<string>('~'); // Current directory, default to home

  const handleCommand = (command: string) => {
    let output = '';

    switch (command as Command) {
      case "help":
        output = `Available commands:\n${COMMANDS.join(', ')}`;
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
      case "contact":
        output = `You can reach me at:\nEmail: your.email@example.com\nLinkedIn: linkedin.com/in/yourprofile\nGitHub: github.com/yourusername`; // Placeholder, replace with actual contact info
        break;
      default:
        output = `Command not found: ${command}`;
    }

    setCommandHistory(prev => [...prev, { command, dir: dir, output }]);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (inputValue.trim() !== '') {
        const command = inputValue.trim();
        setInputValue('');
        setHistoryIndex(-1);
        handleCommand(command);
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

  return {
    inputValue,
    commandHistory,
    handleInputChange,
    handleKeyPress,
    dir, // Expose current directory if needed
  };
}
