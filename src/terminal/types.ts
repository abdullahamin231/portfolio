interface File {
    type: 'file';
    name: string;
    content: string;
};

interface Directory {
    type: 'directory';
    name: string;
    children: { [name: string]: FileSystemNode };
}

type FileSystemNode = File | Directory;


const AVAILABLE_COMMANDS = ["help", "clear", "ls", "whoami", "cd", "cat"];
type Command = typeof AVAILABLE_COMMANDS[number];

interface CommandHistoryEntry {
    command: string;
    dir_name: string;
    output: string;
}

const findNode = (path: string[], fs: Directory): FileSystemNode | undefined => {
    let currentNode: FileSystemNode | undefined = fs;
    // Start from the second element because the first is '~', which is the root itself
    for (let i = 1; i < path.length; i++) {
        if (currentNode && currentNode.type === 'directory') {
            currentNode = currentNode.children[path[i]];
        } else {
            return undefined;
        }
    }
    return currentNode;
};

export type { File, Directory, FileSystemNode, Command, CommandHistoryEntry };
export { findNode, AVAILABLE_COMMANDS };