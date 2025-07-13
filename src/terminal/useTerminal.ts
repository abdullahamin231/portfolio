import { useState, useMemo } from 'react';
import { AVAILABLE_COMMANDS, findNode, type Command, type CommandHistoryEntry, type Directory } from './types';
import { fileSystem } from './fileSystem';

interface UseTerminalReturn {
  inputValue: string;
  commandHistory: CommandHistoryEntry[];
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  directory: Directory; // Return the current directory object
}

export function useTerminal(): UseTerminalReturn {
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState<CommandHistoryEntry[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [currentPath, setCurrentPath] = useState<string[]>(['~']); // State to track current path

  // Derived state for the current directory object
  const directory = useMemo(() => {
    // findNode should always return a Directory for a valid path ending in a directory
    return findNode(currentPath, fileSystem) as Directory;
  }, [currentPath]); // Recalculate when currentPath changes


  // Command Handlers
  const handleHelp = (): string => {
    return `
      <div>
        <h2>Available Commands:</h2>
        <ul class="list-disc pl-5">
          <li><strong>help:</strong> Displays this help message.</li>
          <li><strong>clear:</strong> Clears the terminal screen.</li>
          <li><strong>ls:</strong> Lists files and directories in the current directory.</li>
          <li><strong>whoami:</strong> Displays information about the user.</li>
          <li><strong>cd [directory]:</strong> Changes the current directory. Use <code>cd ..</code> to go up one level.</li>
          <li><strong>cat [file]:</strong> Displays the contents of the specified file.</li>
          <li><strong>download_resume:</strong> Downloads my resume.</li>
        </ul>
      </div>
    `;
  };

  const handleClear = (): void => {
    setCommandHistory([]);
  };

  const handleLs = (): string => {
    if (directory && directory.type === 'directory') {
      return `<div class="flex flex-row items-center gap-4 flex-wrap">${Object.values(directory.children).map(child => {
        return `<p class=${child.type === 'directory' ? 'text-brightBlue' : ''}>${child.name}</p>`;
      }).join('')}</div>`;
    } else {
      return "Error: Could not access current directory.";
    }
  };

  const handleWhoami = (): string => {
    return `
      <div>
        <h2 class="text-brightBlue">Abdullah A.</h2>
        <p>Currently pursuing a Bachelor's degree in Computer Science (Junior Year) at FAST Islamabad.</p>
        <p>Type <code>ls</code> to see available files and directories.</p>
        <p>To contact me, type <code>cat contact.md</code>.</p>
      </div>
    `;
  };

  const handleCd = (arg?: string): string => {
    if (!arg || arg === '~') {
      setCurrentPath(['~']);
      return '';
    } else if (arg === '..') {
      if (currentPath.length > 1) {
        setCurrentPath(prevPath => prevPath.slice(0, -1));
        return '';
      } else {
        return "Already at root directory.";
      }
    } else {
      if (directory && directory.type === 'directory') {
        const targetNode = directory.children[arg];
        if (targetNode) {
          if (targetNode.type === 'directory') {
            setCurrentPath(prevPath => [...prevPath, arg]);
            return '';
          } else {
            return `cd: ${arg}: Not a directory`;
          }
        } else {
          return `cd: ${arg}: No such file or directory`;
        }
      } else {
        return "Error: Could not access current directory."; // Should not happen
      }
    }
  };

  const handleCat = (arg?: string): string => {
    if (!arg) {
      return "cat: missing operand -- try 'cat contact.md' or 'cat technical_skills.md'";
    } else {
      // Use the derived 'directory' object to find the target
      if (directory && directory.type === 'directory') {
        const targetNode = directory.children[arg];
        if (targetNode) {
          if (targetNode.type === 'file') {
            return targetNode.content;
          } else {
            return `cat: ${arg}: Is a directory`;
          }
        } else {
          return `cat: ${arg}: No such file or directory`;
        }
      } else {
        return "Error: Could not access current directory."; // Should not happen
      }
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/portfolio/Abdullah_Amin_Resume.pdf'; // path relative to public/
    link.setAttribute('download', 'Abdullah_Amin_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return `<p>Downloading resume...</p>`;
  };


  const handleCommand = (command: string) => {
    const parts = command.trim().split(' ');
    const cmd = parts[0] as Command;
    const arg = parts[1]; // For cd, cat, etc.

    let output = '';
    let shouldAddToHistory = true;

    switch (cmd) {
      case "help":
        output = handleHelp();
        break;
      case "clear":
        handleClear();
        shouldAddToHistory = false; // Clear doesn't add output to history
        break;
      case "ls":
        output = handleLs();
        break;
      case "whoami":
        output = handleWhoami();
        break;
      case "cd":
        output = handleCd(arg);
        break;
      case "cat":
        output = handleCat(arg);
        break;
      case "download_resume":
        output = handleDownloadResume();
        break;
      default:
        output = `Command not found: ${cmd}`;
    }

    if (shouldAddToHistory) {
      setCommandHistory(prev => [...prev, { command, dir_name: directory.name, output }]);
    }
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
      const trimmedInput = inputValue.trim();
      if (!trimmedInput) {
        return;
      }

      const parts = trimmedInput.split(' ');
      const commandPart = parts[0];
      const argPart = parts.length > 1 ? parts[parts.length - 1] : '';
      const prefix = parts.length > 1 ? parts.slice(0, -1).join(' ') + ' ' : '';

      if (parts.length === 1) {
        const matchingCommands = AVAILABLE_COMMANDS.filter(cmd => cmd.startsWith(commandPart));

        if (matchingCommands.length === 1) {
          setInputValue(matchingCommands[0] + ' ');
        } else if (matchingCommands.length > 1) {
          const output = matchingCommands.join('   ');
          setCommandHistory(prev => [...prev, { command: trimmedInput, dir_name: directory.name, output }]);
        }
      } else {
        let matching: string[] = [];
        if (commandPart === 'cd') {
          matching = Object.keys(directory.children).filter(name => name.startsWith(argPart) && directory.children[name].type === 'directory');
        } else if (commandPart === 'cat') {
          matching = Object.keys(directory.children).filter(name => name.startsWith(argPart) && directory.children[name].type === 'file');
        }
        if (matching.length === 1) {
          setInputValue(prefix + matching[0]);
        } else if (matching.length > 1) {
          const output = matching.join('   ');
          setCommandHistory(prev => [...prev, { command: trimmedInput, dir_name: directory.name, output }]);
        }
      }
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
    directory,
  };
}
