// To add a new level:
//   1. Add an entry to WORD_LISTS (key becomes the level id, order determines display order)
//   2. Add a matching entry to LEVEL_INFO with label and stars (1–5)
//   3. Add a sentence for each new word to SENTENCES
export const WORD_LISTS = {
  easy: [
    'cat', 'dog', 'sun', 'hat', 'big', 'red', 'cup', 'bed', 'sit', 'run',
    'pig', 'bug', 'hen', 'fox', 'mud', 'lip', 'fin', 'hug', 'jam', 'web',
    'tap', 'log', 'fun', 'kit', 'yam',
  ],
  medium: [
    'frog', 'clap', 'ship', 'chat', 'fish', 'shop', 'chin', 'then', 'when', 'from',
    'drum', 'flag', 'glad', 'snap', 'step', 'swim', 'stop', 'grip', 'flat', 'plan',
    'tree', 'blue', 'jump', 'bump', 'song',
  ],
  hard: [
    'school', 'friend', 'house', 'chair', 'plant', 'clock', 'brush', 'train', 'stone', 'flower',
    'garden', 'people', 'butter', 'castle', 'circle', 'battle', 'gentle', 'little', 'middle', 'purple',
    'simple', 'table', 'bottle', 'candle', 'finger',
  ],
  level_2_general: [
    'whine', 'wily', 'windmill', 'windpipe', 'wingspan', 'wishful', 'wonderful', 'wrist'
  ],
  level_2_arts: [
    'author', 'casting', 'clef', 'coda', 'creative', 'kiln', 'Lawson', 'movement', 'myth',
    'opera', 'picture', 'puppet', 'saga', 'scene', 'tempo', 'topic', 'translate', 'viola', 'woodwind'
  ],
  level_2_food: [
    'apricot', 'cherry', 'famine', 'flower', 'fruit', 'galley', 'kettle', 'miso', 'sugar', 'onion',
    'pepper', 'pickle', 'ramen', 'rissole', 'tangy', 'thirsty', 'yeast'
  ],
  level_2_geography: [
    'Asia', 'atoll', 'Brazil', 'bushfire', 'canyon', 'cavern', 'delta', 'desert', 'Greece', 'India',
    'island', 'landslide', 'magma', 'nature', 'Samoa', 'sleet', 'Sweden', 'Tonga', 'tundra'
  ],
  level_2_science: [
    'Aldrin', 'compass', 'concave', 'cosmos', 'database', 'gradient', 'litre', 'measure', 'Newton',
    'oblong', 'password', 'planet', 'refresh', 'Saturn', 'terminal', 'volume', 'Venus', 'width'
  ],
  level_2_sports: [
    'arrow', 'backstroke', 'baseball', 'billycart', 'canoe', 'cosplay', 'enjoy', 'hobby', 'picnic',
    'pontoon', 'rugby', 'sailor', 'skiff', 'sprint', 'stadium', 'swimming', 'tennis', 'travel', 'windsurf'
  ],
};

export const SENTENCES = {
  // easy
  cat:    'The cat sat on the mat.',
  dog:    'My dog loves to play fetch.',
  sun:    'The sun is very bright today.',
  hat:    'She wore a red hat to the party.',
  big:    'That is a very big elephant.',
  red:    'He kicked the red ball across the grass.',
  cup:    'She drank hot chocolate from a cup.',
  bed:    'It is time to go to bed.',
  sit:    'Please sit down on the chair.',
  run:    'The children love to run in the park.',
  pig:    'The pig rolled around in the mud.',
  bug:    'A tiny bug crawled along the leaf.',
  hen:    'The hen laid an egg in the nest.',
  fox:    'A fox ran quickly into the forest.',
  mud:    'His boots were covered in mud.',
  lip:    'She pressed her lip together and thought hard.',
  fin:    'The dolphin flicked its fin as it leapt.',
  hug:    'She gave her mum a big warm hug.',
  jam:    'He spread strawberry jam on his toast.',
  web:    'A spider spun a beautiful web.',
  tap:    'Please turn off the tap when you are done.',
  log:    'We sat on a log beside the campfire.',
  fun:    'Swimming in the ocean is so much fun.',
  kit:    'The first aid kit is kept in the cupboard.',
  yam:    'We had roasted yam for dinner.',
  // medium
  frog:   'The frog jumped from the rock into the pond.',
  clap:   'Everyone started to clap at the end of the show.',
  ship:   'The big ship sailed slowly across the ocean.',
  chat:   'We had a long chat over lunch.',
  fish:   'She caught a shiny fish in the river.',
  shop:   'We went to the shop to buy some milk.',
  chin:   'He rested his chin on his hand while he thought.',
  then:   'First we eat dinner, then we can play outside.',
  when:   'When does the school bus arrive?',
  from:   'She received a letter from her best friend.',
  drum:   'He played the drum loudly in the school band.',
  flag:   'The flag waved in the breeze.',
  glad:   'I am so glad you could come to my party.',
  snap:   'She heard a snap as the twig broke underfoot.',
  step:   'Watch your step on the icy path.',
  swim:   'Can you swim all the way to the other side?',
  stop:   'The car came to a sudden stop at the lights.',
  grip:   'She kept a tight grip on the rope.',
  flat:   'The road stretched out long and flat before us.',
  plan:   'We made a plan for what to do on the weekend.',
  tree:   'A bird built its nest high up in the tree.',
  blue:   'The sky turned a deep shade of blue.',
  jump:   'How high can you jump?',
  bump:   'He got a small bump on his head.',
  song:   'She sang a beautiful song at the concert.',
  // hard
  school:  'I walk to school with my sister every morning.',
  friend:  'My best friend lives just next door.',
  house:   'Their house has a lovely big garden.',
  chair:   'Please pull up a chair and sit with us.',
  plant:   'She watered the plant on the windowsill every day.',
  clock:   'The clock on the wall showed three o\'clock.',
  brush:   'Remember to brush your teeth before bed.',
  train:   'We took the train all the way into the city.',
  stone:   'He skipped a flat stone across the still lake.',
  flower:  'She picked a bright yellow flower from the garden.',
  garden:  'Butterflies and bees flew all around the garden.',
  people:  'Lots of people came to watch the parade.',
  butter:  'She spread butter thickly on her warm bread.',
  castle:  'The old stone castle stood on top of the hill.',
  circle:  'The children sat together in a circle on the mat.',
  battle:  'The knights prepared bravely for battle.',
  gentle:  'Please be gentle with the little baby rabbit.',
  little:  'A little mouse crept quietly across the floor.',
  middle:  'She stood right in the middle of the stage.',
  purple:  'He wore a bright purple jumper to school.',
  simple:  'The answer turned out to be really quite simple.',
  table:   'The whole family gathered around the table for dinner.',
  bottle:  'She filled her water bottle before heading outside.',
  candle:  'The candle flickered and lit up the dark room.',
  finger:  'He pointed his finger up at the stars.',
};

export const LEVEL_INFO = {
  easy:   { label: 'Easy',   stars: 1, description: 'Year 1–2 (ages 5–7)' },
  medium: { label: 'Medium', stars: 2, description: 'Year 3–4 (ages 7–9)' },
  hard:   { label: 'Hard',   stars: 3, description: 'Year 5–6 (ages 9–11)' },
  level_2_general: { label: 'Level 2 General', stars: 2, color: 'pink', icon: 'general', description: 'General Continued' },
  level_2_arts: { label: 'Level 2 Arts', stars: 2, color: 'pink', icon: 'arts', description: '' },
  level_2_food: { label: 'Level 2 Food', stars: 2, color: 'pink', icon: 'food', description: '' },
  level_2_geography: { label: 'Level 2 Geography', stars: 2, color: 'pink', icon: 'geography', description: '' },
  level_2_science: { label: 'Level 2 Science', stars: 2, color: 'pink', icon: 'science', description: '' },
  level_2_sports: { label: 'Level 2 Sports', stars: 2, color: 'pink', icon: 'sports', description: '' },
};

export const WORDS_PER_GAME = 10;
