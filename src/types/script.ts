export type ScriptFormat = 'hollywood' | 'tv' | 'stage' | 'novel' | 'comic';

export interface ScriptElement {
  type: 'scene' | 'action' | 'dialogue' | 'character' | 'parenthetical' | 'transition';
  content: string;
}

export interface Script {
  title: string;
  author: string;
  format: ScriptFormat;
  elements: ScriptElement[];
}