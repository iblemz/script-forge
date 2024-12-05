export const formatHints = {
  hollywood: {
    elements: [
      { prefix: 'INT./EXT.', description: 'Scene headers in CAPS' },
      { prefix: 'CHARACTER:', description: 'Character names in CAPS' },
      { prefix: '(parenthetical)', description: 'Actor directions in parentheses' },
      { prefix: 'Action:', description: 'Scene description in regular case' },
      { prefix: 'TRANSITION:', description: 'Transitions in CAPS, right-aligned' }
    ],
    spacing: {
      sceneHeading: 0,
      action: 8,
      character: 20,
      parenthetical: 4,
      dialogue: 8,
      transition: 24
    }
  },
  tv: {
    elements: [
      { prefix: 'TEASER/COLD OPEN', description: 'Opening hook before credits' },
      { prefix: 'ACT ONE/TWO/THREE', description: 'Main story segments' },
      { prefix: 'INT./EXT.', description: 'Scene headers in CAPS' },
      { prefix: 'CHARACTER:', description: 'Character names in CAPS' },
      { prefix: '(parenthetical)', description: 'Actor directions in parentheses' }
    ],
    spacing: {
      actBreak: 0,
      sceneHeading: 0,
      action: 6,
      character: 16,
      parenthetical: 2,
      dialogue: 6
    }
  },
  stage: {
    elements: [
      { prefix: 'ACT/SCENE', description: 'Act and scene numbers' },
      { prefix: '[Stage Direction]', description: 'Staging instructions in brackets' },
      { prefix: 'CHARACTER:', description: 'Character names in CAPS' },
      { prefix: '[Action]', description: 'Character movements in brackets' }
    ],
    spacing: {
      actScene: 0,
      stageDirection: 4,
      character: 8,
      dialogue: 4,
      action: 4
    }
  },
  comic: {
    elements: [
      { prefix: 'PAGE X', description: 'Page number and description' },
      { prefix: 'PANEL X', description: 'Panel number and description' },
      { prefix: 'CAPTION:', description: 'Narrative text or voice over' },
      { prefix: 'CHARACTER:', description: 'Character dialogue' },
      { prefix: '(SFX)', description: 'Sound effects in parentheses' }
    ],
    spacing: {
      page: 0,
      panel: 2,
      description: 4,
      caption: 4,
      dialogue: 4,
      sfx: 4
    }
  },
  novel: {
    elements: [
      { prefix: 'Chapter X:', description: 'Chapter number and title' },
      { prefix: 'Scene Break', description: '*** or ### for scene breaks' },
      { prefix: 'Dialogue:', description: 'Use quotation marks for dialogue' },
      { prefix: 'Thoughts:', description: 'Italics for internal thoughts' }
    ],
    spacing: {
      chapter: 0,
      paragraph: 4,
      sceneBreak: 8
    }
  }
};