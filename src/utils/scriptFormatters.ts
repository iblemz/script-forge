import { ScriptFormat } from '../types/script';

const formatLine = (line: string, prefix: string = ''): string => {
  return line.trim() ? `${prefix}${line}` : line;
};

const formatHollywood = (content: string): string => {
  const lines = content.split('\n');
  return lines.map(line => {
    if (line.startsWith('INT.') || line.startsWith('EXT.')) {
      return formatLine(line.toUpperCase(), '');
    }
    if (line.startsWith('(')) {
      return formatLine(line, '    ');
    }
    if (line.trim().toUpperCase() === line.trim()) {
      return formatLine(line, '                    ');
    }
    return formatLine(line, '        ');
  }).join('\n');
};

const formatTV = (content: string): string => {
  const lines = content.split('\n');
  return lines.map(line => {
    if (line.startsWith('INT.') || line.startsWith('EXT.')) {
      return formatLine(line.toUpperCase(), '');
    }
    if (line.startsWith('(')) {
      return formatLine(line, '  ');
    }
    if (line.trim().toUpperCase() === line.trim()) {
      return formatLine(line, '                ');
    }
    return formatLine(line, '      ');
  }).join('\n');
};

const formatStage = (content: string): string => {
  const lines = content.split('\n');
  return lines.map(line => {
    if (line.startsWith('ACT') || line.startsWith('SCENE')) {
      return formatLine(line.toUpperCase(), '');
    }
    if (line.startsWith('[')) {
      return formatLine(line, '    ');
    }
    if (line.trim().toUpperCase() === line.trim()) {
      return formatLine(line, '        ');
    }
    return formatLine(line, '    ');
  }).join('\n');
};

const formatNovel = (content: string): string => {
  return content;
};

const formatComic = (content: string): string => {
  const lines = content.split('\n');
  return lines.map(line => {
    if (line.startsWith('PAGE') || line.startsWith('PANEL')) {
      return formatLine(line.toUpperCase(), '');
    }
    if (line.startsWith('(')) {
      return formatLine(line, '  ');
    }
    if (line.trim().toUpperCase() === line.trim()) {
      return formatLine(line, '    ');
    }
    return formatLine(line, '      ');
  }).join('\n');
};

export const formatScript = (content: string, format: ScriptFormat): string => {
  switch (format) {
    case 'hollywood':
      return formatHollywood(content);
    case 'tv':
      return formatTV(content);
    case 'stage':
      return formatStage(content);
    case 'novel':
      return formatNovel(content);
    case 'comic':
      return formatComic(content);
    default:
      return content;
  }
};