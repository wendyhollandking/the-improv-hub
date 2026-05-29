/* ============================================================
   games-data.js
   The master list of all improv games.
   Used by the library page (library.html) and the random game feature.

   Each game object has:
   - id:          unique slug used in URLs (?game=yes-and)
   - title:       display name
   - description: one-sentence summary shown on cards
   - goodFor:     comma-separated skills this game builds
   - energyLevel: "High", "Medium", or "Low"
   - timeEstimate: "Short", "Medium", or "Long"
   - example:     a narrative example showing the game in action
   - rules:       array of step-by-step instructions
   - variations:  array of variation descriptions (optional)
   - prompts:     array of suggested prompts/topics (optional)
   - players:     e.g. "2+", "4+", "1"
   - categories:  array — any of:
                    "warm-ups", "yes-and", "characters", "scenes",
                    "comedy", "musical", "solo-friendly"
   - aiPlayable:  true/false
   - videoId:     YouTube video ID to embed on the game detail page (optional)
   - format:      'short' for YouTube Shorts (9:16 embed), omit for regular (16:9)
   - module:      which module introduces this game (1–6), or null
============================================================ */

var GAMES_DATA = [

  /* ================================================================
     MODULE 1: GETTING COMFORTABLE BEING SILLY
  ================================================================ */

  {
    id: 'name-plus-action',
    title: 'Name + Action',
    description: 'Say your name and do a big physical action at the same time.',
    goodFor: 'Introductions, physicality, breaking the ice, group energy',
    energyLevel: 'High',
    timeEstimate: 'Short',
    example: 'The group stands in a circle. Priya jumps in the air with both arms up and shouts her name: "PRIYA!" Everyone mirrors her exactly — arms up, jumping, "PRIYA!" Then Marcus drops to a squat and bellows "MARCUS!" and the whole circle follows. By the time everyone has gone, the room is already loose and laughing.',
    rules: [
      'Stand in a circle.',
      'One person says their name while doing a physical action (jump, spin, wave, etc.).',
      'Everyone else repeats the name and action together.',
      'Go around the circle — every person introduces themselves this way.',
      'Challenge: make your action as big and committed as possible.'
    ],
    variations: [],
    prompts: [],
    players: '4+',
    categories: ['warm-ups'],
    aiPlayable: false,
    module: 1
  },

  {
    id: 'repeat-after-me',
    title: 'Repeat After Me',
    description: 'Mirror everything your partner says and does — exactly.',
    goodFor: 'Listening, mirroring, presence, partner connection',
    energyLevel: 'Low',
    timeEstimate: 'Short',
    example: 'Jess is the leader. She says in a flat voice, "I had the strangest dream last night." Her partner repeats it back — same words, same flat tone. Jess slowly raises one arm; her partner raises theirs at exactly the same pace. Then they switch. Now the partner leads, and Jess has to listen hard enough to stay in sync.',
    rules: [
      'Pair up. One person is the leader, one is the mirror.',
      'The leader says a sentence. The mirror repeats it exactly — same words, same tone.',
      'The leader does a movement. The mirror copies it.',
      'Keep going for 2 minutes, then switch roles.',
      'Focus: listen completely and reflect back without judgment.'
    ],
    variations: [],
    prompts: [],
    players: '2',
    categories: ['warm-ups', 'solo-friendly'],
    aiPlayable: false,
    module: 1
  },

  {
    id: 'sound-ball',
    title: 'Sound Ball',
    description: 'Throw an imaginary ball around a circle — each throw comes with a sound.',
    goodFor: 'Listening, acceptance, commitment, breaking self-consciousness',
    energyLevel: 'Medium',
    timeEstimate: 'Short',
    example: 'Tyler makes eye contact with Sofia, yells "BOING BOING BOING!" while bouncing up and down, and mimes throwing a ball to her. Sofia catches it by also saying "BOING BOING BOING!" and bouncing. Then she turns to Marcus, makes a slow "shhhhhhhhwwww" sound while sliding her hands sideways, and sends it to him. Marcus catches with "shhhhhhhhwwww" and the slide, then invents something new for the next person.',
    rules: [
      'Everyone stands in a circle.',
      'One person starts by making eye contact with someone, creating a sound and a physical motion (like a swooping "whooooop!" with a big arm wave), and "throwing" it to that person.',
      'The catcher must first repeat the exact sound and motion they received (the "catch").',
      'Then they create a completely new sound and motion and throw it to someone else.',
      'There\'s no wrong sound or motion. The only rule is to commit fully to whatever you do.',
      'Keep the energy moving — don\'t overthink it.'
    ],
    variations: [
      'Emotion Sound Ball: Each throw has to convey a specific emotion through the sound and motion.',
      'Slow-motion Sound Ball: Everything happens in exaggerated slow motion, including the sounds.',
      'Two balls at once: Add a second ball into the circle so two are flying around simultaneously.',
      'Sound Ball Story: The sounds and motions have to gradually connect to tell a story.',
      'Musical Sound Ball: Each throw has to be a melodic phrase instead of just a sound.'
    ],
    prompts: [
      'Start with big, loud sounds to set the tone that being ridiculous is encouraged',
      'Try animal sounds and the motions that go with them',
      'Machine sounds — what does a printer, a rocket, a dishwasher sound like?',
      'Sounds that start quiet and get louder (or vice versa)',
      'Use only vowel sounds: "AAAAAAAH," "OOOOOOOH," "EEEEEEE"',
      'Weather sounds — thunder, rain, wind, a tornado',
      'Video game sounds — power-ups, level completions, game overs',
      'Make the sound of a food you love',
      'Sounds from a kitchen — sizzling, chopping, a microwave beeping',
      'Try sounds that are as tiny and quiet as possible',
      'Alien communication — what would an alien greeting sound like?',
      'Emotional transitions: throw a happy sound, catcher transforms it into a sad sound before throwing a new one'
    ],
    players: '5+',
    categories: ['warm-ups'],
    aiPlayable: false,
    module: 1
  },

  {
    id: 'back-in-my-day',
    title: 'Back in My Day',
    description: 'Play a grumpy old-timer whose nostalgic stories get increasingly absurd.',
    goodFor: 'Commitment, escalation, comedic timing',
    energyLevel: 'Medium',
    timeEstimate: 'Short',
    example: 'Player A: "Back in my day, we didn\'t have backpacks. We carried our books in our teeth."\nPlayer B: "Back in my day, we didn\'t have books. We carved our homework into rocks and rolled them to school."\nPlayer A: "Back in my day, we didn\'t have school. We learned everything from a wise owl who charged us three mice per lesson."\nPlayer B: "Back in my day, we didn\'t have owls. We had to figure out gravity by jumping off things and keeping notes."',
    rules: [
      'Two or more players take turns.',
      'Each player starts their line with "Back in my day..." and finishes with something absurd.',
      'The next player has to top it — their "back in my day" has to be even more ridiculous.',
      'Keep escalating until the group can\'t hold it together anymore.',
      'There\'s no winning or losing. The goal is to commit to the absurdity and keep building.'
    ],
    variations: [
      'Back in My Day: The Future: Players are old people living in the year 3000, complaining about things we do now. "Back in my day, people used to DRIVE their own cars. With their HANDS."',
      'Back in My Day: Specific Topic: Pick a topic (school, sports, food, technology) and all complaints must relate to it.',
      'Physical Back in My Day: Each complaint has to be accompanied by a physical demonstration of how things were done.',
      'Musical Back in My Day: Sing your complaint to a melody. The next person has to sing theirs to a different melody.'
    ],
    prompts: [
      'Topic: School — what was school like back in the day?',
      'Topic: Technology — what did you do before phones, computers, TV?',
      'Topic: Food — what did you eat and how did you get it?',
      'Topic: Transportation — how did you get around?',
      'Topic: Entertainment — what did you do for fun?',
      'Topic: Weather — how tough were the conditions?',
      'Topic: Pets — what kind of animals did you have?',
      'Topic: Sports — what were sports like?',
      'Topic: Chores — what did your parents make you do?',
      'Topic: Fashion — what did people wear?',
      'Free-for-all: anything goes, just keep escalating',
      'Start with something only mildly absurd and see how far it goes in 10 rounds'
    ],
    players: '2+',
    categories: ['characters', 'solo-friendly'],
    aiPlayable: false,
    module: 1
  },


  /* ================================================================
     MODULE 2: YES, AND
  ================================================================ */

  {
    id: 'yes-and',
    title: 'Yes, And Scenes',
    description: 'Build a scene one line at a time — every response must accept and add.',
    goodFor: 'Acceptance, building, collaboration, scene work fundamentals',
    energyLevel: 'Medium',
    timeEstimate: 'Medium',
    example: 'Player A: "I can\'t believe we\'ve been hiking for six hours and we\'re still not at the top."\nPlayer B: "I know, and I think we passed that same tree three times. We might be going in circles."\nPlayer A: "That explains why the squirrel on that branch keeps giving us a look. He\'s judging us."\nPlayer B: "He definitely is. And I think he just took a photo of us with a tiny acorn camera."\n\nEach line accepted what came before and added something new, and the scene got progressively more absurd in a fun, natural way.',
    rules: [
      'Two players face each other (or stand side by side facing the audience).',
      'Player A starts with a line that establishes something — a location, a relationship, an activity, or a feeling.',
      'Player B responds by accepting what Player A said ("Yes") and adding new information ("And").',
      'Player A does the same with Player B\'s addition.',
      'Continue building the scene together, accepting and adding with each line.',
      'Avoid questions (they put the burden on your partner to invent), negations ("No, that\'s not..."), and ignoring what was just established.'
    ],
    variations: [
      'Yes, And with a twist: Every third line, one player has to physicalize something — mime an action or interact with an imaginary object.',
      'Expert Yes, And: One player is an "expert" on a made-up topic, and the other is interviewing them. The interviewer has to Yes, And whatever nonsense the expert says.',
      'Yes, And Chain: In a group, each person adds one sentence to a growing scene, going around the circle.',
      'Silent Yes, And: Do the same exercise but with no words — only physical actions that you accept and build on.'
    ],
    prompts: [
      '"We\'re astronauts and we just landed on a planet made entirely of cheese."',
      '"Welcome to your first day as my assistant. I\'m a very famous inventor."',
      '"I think this garage sale item might be haunted."',
      '"We\'re the last two people at this party and neither of us knows the host."',
      '"I\'ve been your neighbor for ten years and I\'m just now noticing your front yard is a jungle."',
      '"We\'re both trying to return the same item at a very confusing store."',
      '"We\'re two pigeons watching humans in a park and we have strong opinions."',
      '"I think our substitute teacher might actually be a spy."',
      '"We\'re taste-testing the world\'s worst restaurant and trying to be polite about it."',
      '"We\'ve been stuck in this elevator for an hour and you just pulled a ukulele out of your bag."',
      '"We\'re two fish in an aquarium commentating on the humans staring at us."',
      '"You\'re my new roommate and you\'ve brought some very unusual furniture."'
    ],
    players: '2',
    categories: ['yes-and', 'solo-friendly'],
    aiPlayable: true,
    module: 2
  },

  {
    id: '5-things',
    title: '5 Things',
    description: 'Name five things in a category as fast as you can — no hesitation, no judgment.',
    goodFor: 'Quick thinking, getting out of your head, not self-editing',
    energyLevel: 'High',
    timeEstimate: 'Short',
    example: '"Five things you\'d find in a wizard\'s pocket!" — "A wand! Some lint! A tiny frog! A receipt from Wendy\'s! Uh... another smaller pocket! FIVE!"\n\nHalf of those don\'t make sense, and that\'s completely fine. The group cheers anyway.',
    rules: [
      'Players stand in a circle (or face each other if just two people).',
      'One player points at another and says "Five things that are [category]!"',
      'The chosen player must rattle off five things as fast as possible. They don\'t have to be good or even correct — speed is what matters.',
      'The rest of the group counts along enthusiastically: "One! Two! Three! Four! Five!"',
      'After five, the group cheers, and the person who just went points to someone else with a new category.'
    ],
    variations: [
      'Ten Things: Raise the stakes. Ten is where things get truly unhinged.',
      'Five Things Chain: The fifth thing you name becomes the category for the next person.',
      'Themed Five Things: All categories have to relate to one theme (movies, food, school, animals).',
      'Emotional Five Things: You have to deliver your five things in a specific emotion — name five types of pizza, but you\'re furious about it.'
    ],
    prompts: [
      'Five things you\'d find in a haunted house',
      'Five things a dog is thinking about right now',
      'Five terrible excuses for being late to class',
      'Five things you should never say to a pirate',
      'Five rejected ice cream flavors',
      'Five things a superhero keeps in their locker',
      'Five sounds you hear at a zoo at midnight',
      'Five things your grandma is secretly great at',
      'Five bad names for a rock band',
      'Five things a penguin would put on a dating profile',
      'Five reasons not to go to space',
      'Five things you\'d find at the bottom of a school backpack in June'
    ],
    players: '2+',
    categories: ['warm-ups', 'yes-and'],
    aiPlayable: false,
    module: 2
  },

  {
    id: 'what-are-you-doing',
    title: 'What Are You Doing?',
    description: 'Someone mimes an action, gets asked what they\'re doing, and answers with something completely different.',
    goodFor: 'Disconnecting brain from body, quick thinking, silliness',
    energyLevel: 'High',
    timeEstimate: 'Short',
    example: 'Mia is miming swimming. Leo asks, "What are you doing?" Mia says, "I\'m delivering a pizza on a motorcycle." Leo starts miming riding a motorcycle and holding a pizza box. Aisha asks Leo, "What are you doing?" Leo says, "I\'m teaching a cat to play piano." Aisha starts miming that, and so on.',
    rules: [
      'Everyone stands in a circle.',
      'Player A starts miming an action (brushing their teeth, for example).',
      'Player B (next to them) asks, "What are you doing?"',
      'Player A says something that has nothing to do with what they\'re miming. (They\'re brushing teeth but they say, "I\'m wrestling an alligator.")',
      'Player B now has to mime wrestling an alligator.',
      'Player C asks Player B, "What are you doing?"',
      'Player B (still miming the alligator) says something completely different, like "I\'m knitting a sweater."',
      'Player C mimes knitting. And so on around the circle.'
    ],
    variations: [
      'Speed round: You have three seconds to answer or you\'re out.',
      'Emotional What Are You Doing: You have to say what you\'re doing in a specific emotion — so you\'re miming swimming but saying "I\'m cutting onions" while sobbing.',
      'What Are You Doing: Scenes: Instead of a circle, two players do it as a mini-scene where every action is prompted by the other\'s lie.',
      'Add a song: When someone says what they\'re doing, they have to sing it. The next person mimes while humming along.'
    ],
    prompts: [
      'Start by miming: brushing a giant\'s hair',
      'Start by miming: juggling flaming torches',
      'Start by miming: eating the world\'s longest strand of spaghetti',
      'Start by miming: trying to catch a butterfly with chopsticks',
      'Start by miming: doing surgery on a teddy bear',
      'Start by miming: painting the ceiling of a very short room',
      'Start by miming: walking twelve dogs at once',
      'Start by miming: playing drums on a stranger\'s head',
      'Start by miming: reading a book that\'s scaring you',
      'Start by miming: trying to parallel park a bus',
      'Start by miming: teaching a fish to walk',
      'Start by miming: frosting a cake in a windstorm'
    ],
    players: '2+',
    categories: ['yes-and', 'warm-ups'],
    aiPlayable: false,
    module: 2
  },

  {
    id: 'fortunately-unfortunately',
    title: 'Fortunately/Unfortunately',
    description: 'Build a story by alternating between good news and bad news.',
    goodFor: 'Storytelling, accepting offers, thinking on your feet, tonal shifts',
    energyLevel: 'Medium',
    timeEstimate: 'Short',
    example: 'Setup: "Sam decided to bake a cake for the school talent show."\nUnfortunately, he accidentally used salt instead of sugar.\nFortunately, the judges that year were all competitive salt lick enthusiasts.\nUnfortunately, they had just been banned from all salt-related activities by the school board.\nFortunately, Sam\'s cake was so salty it formed a crystal sculpture, and he won the art category instead.',
    rules: [
      'One player starts a story with a simple setup sentence.',
      'The next player continues with a sentence starting with "Unfortunately..."',
      'The next player (or same player, if just two) follows with "Fortunately..."',
      'Continue alternating Unfortunately and Fortunately.',
      'Each sentence should logically connect to what came before, even as things get increasingly wild.',
      'The story ends when it reaches a natural conclusion, the group decides to stop, or everyone is laughing too hard to continue.'
    ],
    variations: [
      'Speed round: Each player only gets 5 seconds to deliver their line.',
      'Group circle: Go around a circle so everyone contributes, alternating fortunately and unfortunately.',
      'Double down: Use "Fortunately... and even more fortunately..." or "Unfortunately... and even worse..." for extra escalation.',
      'Pick a genre: The story has to stay within a genre — horror, romance, sci-fi, fairy tale.'
    ],
    prompts: [
      '"Alex was about to give the most important presentation of their life."',
      '"The class pet escaped from its cage overnight."',
      '"Jordan won a free trip to anywhere in the world."',
      '"A mysterious package arrived at school with no return address."',
      '"The school cafeteria started serving a brand new, never-before-tasted food."',
      '"It was the morning of the big game and the star player woke up with hiccups that wouldn\'t stop."',
      '"A student discovered they could talk to squirrels."',
      '"The entire school was accidentally transported to the year 1776."',
      '"Someone found a treasure map in the library book return."',
      '"The principal announced that all classes would be taught by students for a week."',
      '"A family road trip took a wrong turn and ended up at the edge of a very active volcano."',
      '"The school play was going perfectly until the stage started sinking."'
    ],
    players: '2+',
    categories: ['yes-and', 'solo-friendly'],
    aiPlayable: true,
    module: 1
  },

  {
    id: 'two-letters',
    title: 'Two Letters Game',
    description: 'Have a scene where every word must start with one of two specific letters.',
    goodFor: 'Word play, listening, creative thinking under constraint',
    energyLevel: 'Medium',
    timeEstimate: 'Medium',
    example: 'Letters chosen: S and P. Player A says, "So... perhaps purchasing something special?" Player B responds, "Surely. Possibly some soup?" Player A: "Precisely! Savory, steaming soup!" The scene moves slowly but both players are visibly concentrating and grinning, and the audience gets the satisfaction of watching them thread the needle.',
    rules: [
      'Choose two letters (e.g., S and P).',
      'Two players have a normal scene, but every word must start with S or P.',
      'Players can be slow and thoughtful — this is about word play, not speed.',
      'Try to make the scene make actual sense despite the constraint.',
      'Variation: choose near-impossible letters like X and Q for extra chaos.'
    ],
    variations: [
      'Easy letters: S and P, T and R, B and M.',
      'Hard mode: X and Q, Z and W.',
      'Three letters: add a third letter for a bigger pool but more complexity.'
    ],
    prompts: [],
    players: '2',
    categories: ['yes-and', 'comedy'],
    aiPlayable: false,
    module: 2
  },

  {
    id: 'thank-you-mom-and-dad',
    title: 'Thank You Mom and Dad',
    description: 'Accept an award for something absurd and deliver a heartfelt, over-the-top acceptance speech.',
    goodFor: 'Commitment, character, escalation, comedic sincerity',
    energyLevel: 'Medium',
    timeEstimate: 'Short',
    example: '"The award for Most Dramatic Sneeze goes to..." The winner staggers to the stage, tears in their eyes. "I... I can\'t believe this. I want to thank my sinuses, obviously. My allergist, Dr. Patel, who told me I\'d never sneeze this big — well, Dr. Patel, look at me now. And my mom, who always said: if you\'re going to sneeze, sneeze with your whole heart."',
    rules: [
      'One player announces an award: "The award for Most Dramatic Sneeze goes to…"',
      'The winner accepts, dramatically thanking everyone who helped them achieve this.',
      'The speech should be sincere, emotional, and totally ridiculous.',
      'Aim for at least five thank-yous, each more absurd than the last.',
      'Rotate so everyone gets to accept an award.'
    ],
    variations: [],
    prompts: [
      'Award for Most Dramatic Sneeze',
      'Award for Tripping the Most Gracefully',
      'Award for Best Performance of Pretending to Be Busy',
      'Award for Most Creative Excuse for Being Late',
      'Award for Longest Time Avoiding Eye Contact'
    ],
    players: '2+',
    categories: ['characters', 'comedy'],
    aiPlayable: false,
    module: 2
  },

  {
    id: 'two-headed-expert',
    title: 'Two-Headed Expert',
    description: 'Two players become one person, speaking one word at a time to answer questions.',
    goodFor: 'Listening, patience, shared control, group mind',
    energyLevel: 'Medium',
    timeEstimate: 'Short',
    example: 'Topic: Expert on the history of sandwiches.\nQuestion: "When was the first sandwich invented?"\n- Player A: "The"\n- Player B: "first"\n- Player A: "sandwich"\n- Player B: "was"\n- Player A: "invented"\n- Player B: "by"\n- Player A: "a"\n- Player B: "very"\n- Player A: "hungry"\n- Player B: "king"\n- Player A: "who"\n- Player B: "didn\'t"\n- Player A: "own"\n- Player B: "a"\n- Player A: "plate."',
    rules: [
      'Two players stand shoulder to shoulder facing the audience.',
      'They are introduced as a single expert on a topic chosen by the audience.',
      'A host or audience member asks them a question.',
      'The two-headed expert answers by alternating one word at a time: Player A says one word, Player B says the next, Player A says the next, and so on.',
      'They should try to form complete, grammatical sentences, but the real goal is to stay connected to each other and not force it.',
      'They can use gestures and hand movements together to reinforce that they\'re one person.',
      'When they land a sentence that actually makes sense, the audience will react — lean into those moments.'
    ],
    variations: [
      'Two-Headed Poet: Instead of answering questions, the two-headed expert recites an improvised poem on the topic.',
      'Two-Headed Singer: They sing a song one word at a time.',
      'Four-Headed Expert: Four players, one word at a time. Absolute chaos.',
      'Two-Headed Debate: Two pairs of two-headed experts debate each other on a topic, each pair speaking one word at a time.'
    ],
    prompts: [
      'Expert on: the secret lives of house cats',
      'Expert on: what really happens inside a vending machine',
      'Expert on: the correct way to eat cereal',
      'Expert on: why Mondays feel longer than other days',
      'Expert on: the mating habits of school buses',
      'Expert on: advanced pillow fort engineering',
      'Expert on: the history of the high-five',
      'Expert on: why homework exists (the true conspiracy)',
      'Expert on: the proper etiquette for a food fight',
      'Expert on: what dogs are actually saying when they bark',
      'Expert on: the science behind brain freeze',
      'Expert on: why one sock always disappears in the laundry'
    ],
    players: '2',
    categories: ['yes-and', 'characters'],
    aiPlayable: false,
    module: null
  },

  {
    id: 'abc-scene',
    title: 'ABC Scene',
    description: 'Each line of the scene must start with the next letter of the alphabet.',
    goodFor: 'Listening, alphabet awareness, quick thinking, scene building under constraint',
    energyLevel: 'Medium',
    timeEstimate: 'Short',
    example: 'A: "Apparently, this restaurant has a three-hour wait."\nB: "But I called ahead and made a reservation!"\nC: "Can I see the reservation? I don\'t have anything under your name."\nD: "Don\'t tell me you lost it. I spoke to a man named Gerald."\nE: "Everyone claims they spoke to Gerald. Gerald doesn\'t work here."\nF: "Fine, then who DID I speak to?"\nG: "Gerald is a raccoon who lives behind the building. He answers the phone sometimes."',
    rules: [
      'Two players get a scene suggestion.',
      'Player A starts with a line beginning with the letter A.',
      'Player B responds with a line beginning with B.',
      'They continue alternating, each line starting with the next letter of the alphabet.',
      'The scene must make sense as a story — it\'s not just random sentences.',
      'Continue through the full alphabet (A to Z) or until the host ends it.',
      'If a player starts with the wrong letter, they can self-correct or the audience can call it out.'
    ],
    variations: [
      'Reverse ABC: Start at Z and work backward to A. Significantly harder.',
      'Random Letter Start: The audience picks a random letter and the scene starts there, cycling through the alphabet back around to the letter before it.',
      'Speed ABC: You have 60 seconds to get through the entire alphabet.',
      'ABC with Three Players: Three players cycle through the alphabet, so each person has to track not just the next letter but when it\'s their turn.'
    ],
    prompts: [
      'Scene: At a pet shop trying to buy an unusual animal',
      'Scene: At a hair salon where the stylist has a very bold vision',
      'Scene: Two people at a bus stop in the rain',
      'Scene: At a food truck with a very confusing menu',
      'Scene: In detention',
      'Scene: At a magic show where the tricks keep going wrong',
      'Scene: Two rivals at a science fair',
      'Scene: At a laundromat at midnight',
      'Scene: On a road trip with terrible GPS directions',
      'Scene: At a yard sale where everything has a bizarre backstory',
      'Scene: Two people painting a room and disagreeing on the color',
      'Start at the letter M instead of A (it changes which letters are hardest)'
    ],
    players: '2',
    categories: ['yes-and', 'comedy'],
    aiPlayable: false,
    module: null
  },

  {
    id: 'questions-only',
    title: 'Questions Only',
    description: 'A scene where every single line must be a question — statements are out.',
    goodFor: 'Listening, quick thinking, scene work, staying present',
    energyLevel: 'Medium',
    timeEstimate: 'Short',
    example: 'Player A: "Why are you wearing a snorkel in the middle of the desert?"\nPlayer B: "Haven\'t you heard about the flash floods they\'ve been predicting?"\nPlayer A: "Do you really trust a weatherman who also sells used cars?"\nPlayer B: "Isn\'t he the same guy who predicted it would rain cats last Tuesday?"\nPlayer A: "Didn\'t it actually rain cats, though?"\nPlayer B: "Wait, were those YOUR cats?"',
    rules: [
      'Two players start a scene based on a suggestion.',
      'Every line must be a question. Statements, exclamations, and commands are not allowed.',
      'Questions must be genuine and move the scene forward — not just "Really?" or "What?" over and over.',
      'If a player makes a statement (even accidentally), they step out and a new player rotates in from the sideline.',
      'The new player starts a new scene with the remaining player, or continues the existing one.',
      'Play continues until time is called or everyone has rotated through.'
    ],
    variations: [
      'Questions Only: Emotional Edition: Each player is assigned a secret emotion, and their questions have to reflect that emotion.',
      'Speed Questions: A timer counts down from 30 seconds. Both players try to survive the full 30 without making a statement.',
      'Three-Way Questions: Three players do a scene, all in questions. The mental load triples.',
      'Competitive Questions: Two teams. Each team sends one player. The player who lasts longer wins the point.'
    ],
    prompts: [
      'Scene: At a restaurant',
      'Scene: In a principal\'s office',
      'Scene: On a spaceship',
      'Scene: At the vet with a very unusual animal',
      'Scene: In a haunted house',
      'Scene: At a job interview',
      'Scene: At a surprise party that nobody seems surprised by',
      'Scene: In a getaway car after a heist',
      'Scene: At a bus stop at 3 AM',
      'Scene: On the first day at a new school',
      'Scene: In a grocery store at closing time',
      'Scene: In a time machine that just landed somewhere unexpected'
    ],
    players: '2+',
    categories: ['yes-and', 'scenes'],
    aiPlayable: false,
    module: null
  },


  /* ================================================================
     MODULE 3: CHARACTERS & COMEDY
  ================================================================ */

  {
    id: 'character-switch',
    title: 'Character Switch',
    description: 'Play the same scene, but with a completely different character personality on command.',
    goodFor: 'Flexibility, character work, listening, range',
    energyLevel: 'Medium',
    timeEstimate: 'Medium',
    example: 'Two players are in a scene buying groceries. The caller yells "You\'re both toddlers!" Immediately both players start clutching items and whining about wanting candy. "You\'re both medieval knights!" Now they\'re inspecting the produce with great solemnity, debating the honor of the apple selection. Same scene, completely different world.',
    rules: [
      'Two players start a simple scene (buying groceries, waiting for a bus).',
      'A caller yells out a character type: "You\'re both supervillains!" or "You\'re both toddlers!"',
      'The players continue the SAME scene but as those characters.',
      'The caller can switch the character type at any time.',
      'Challenge: keep the original scene\'s logic even as the characters change.'
    ],
    variations: [],
    prompts: [],
    players: '3+',
    categories: ['characters'],
    aiPlayable: false,
    module: 3
  },

  {
    id: 'character-interview',
    title: 'Character Interview',
    description: 'One player commits to a fully invented character; another interviews them.',
    goodFor: 'Character building, commitment, listening, quick thinking',
    energyLevel: 'Medium',
    timeEstimate: 'Medium',
    example: 'The interviewer says, "Please welcome our next guest, who I understand has just published a cookbook. Tell us about it." The character (who had no idea they\'d be a cookbook author) jumps in: "Yes, thank you for having me. The book is called \'Meals I\'ve Eaten in Dreams\' and it\'s all recipes that came to me while I was sleeping. Chapter one is a lasagna that tastes like the color blue." The interviewer follows up: "That\'s fascinating. How do your dream recipes translate to real ingredients?" And the character keeps building.',
    rules: [
      'Decide who is the interviewer and who is the character.',
      'The character player decides on a character — this can be based on a suggestion from the group or made up on the spot. They should commit to a voice, a physicality, and a point of view.',
      'The interviewer introduces the character and begins asking them questions as if it\'s a talk show or podcast.',
      'The character answers in character, making things up as they go. The key is consistency — build on what you\'ve already established.',
      'The interviewer should listen carefully and ask follow-up questions based on what the character says (not just a pre-planned list of questions).',
      'After a few minutes, wrap up the interview and swap roles.'
    ],
    variations: [
      'Hot Seat: The character sits in a chair and multiple people take turns asking one question each, rapid-fire.',
      'Expert Interview: The character is a world-renowned expert in something absurd (competitive napping, extreme bird watching, underwater basket weaving).',
      'Press Conference: The character has just done something newsworthy and faces a room full of reporters.',
      'Musical Guest: The character is also a musician and has to perform a short song about their specialty during the interview.',
      'Reverse Interview: The character interviews the interviewer about something mundane, but treats it like it\'s the most important topic in the world.'
    ],
    prompts: [
      'Your guest invented a new sport and it\'s about to be in the Olympics',
      'Your guest is the world\'s oldest teenager',
      'Your guest is a retired villain who now teaches kindergarten',
      'Your guest is a chef who only cooks food from fictional planets',
      'Your guest is an archaeologist who only finds embarrassing artifacts',
      'Your guest is a motivational speaker for houseplants',
      'Your guest runs a hotel for imaginary friends',
      'Your guest is a professional apologizer — people hire them to say sorry on their behalf',
      'Your guest is a translator who specializes in translating between animals and humans',
      'Your guest claims to have visited every country in the world in one weekend',
      'Your guest is a fashion designer who only uses office supplies',
      'Your guest just won the world championship of something that doesn\'t exist yet'
    ],
    players: '2',
    categories: ['characters', 'solo-friendly'],
    aiPlayable: true,
    module: 3
  },

  {
    id: 'emotion-walk',
    title: 'Emotion Walk',
    description: 'Walk through a space and let your emotion take over your entire body.',
    goodFor: 'Physicality, emotional range, body awareness, presence',
    energyLevel: 'Medium',
    timeEstimate: 'Short',
    example: 'The facilitator calls "Suspicious!" and the whole group shifts — shoulders hunch, eyes narrow, everyone side-eyes each other while walking. Then "Ecstatic!" and the room explodes into bouncing, grinning, arms-wide-open movement. When two people pass each other, they have a brief exchange: "Beautiful day, isn\'t it?" "BEAUTIFUL?! It\'s INCREDIBLE! I can\'t BELIEVE how beautiful it is!"',
    rules: [
      'Players walk around the space.',
      'A facilitator calls out an emotion: "Nervous!" "Ecstatic!" "Suspicious!"',
      'Players immediately embody that emotion in their walk, posture, face, and movement.',
      'Hold each emotion for 30 seconds before switching.',
      'Then: players pass each other and have a brief conversation while maintaining their emotion.'
    ],
    variations: [],
    prompts: [],
    players: '4+',
    categories: ['warm-ups', 'characters'],
    aiPlayable: false,
    module: 3
  },

  {
    id: 'pop-up-storybook',
    title: 'Pop-Up Storybook',
    description: 'Narrate a children\'s story while the other players act it out in real time.',
    goodFor: 'Physicality, ensemble work, listening, group mind',
    energyLevel: 'Medium',
    timeEstimate: 'Medium',
    example: 'Narrator: "Once upon a time, in a tiny village..." — three performers hunch together to form little houses — "there lived a baker who made the most enormous loaves of bread." One performer mimes kneading and two others become a giant loaf, puffing out their cheeks. "One day, a storm rolled in." — two players become the wind, one becomes rain. "The baker\'s bread was so large that it floated away like a hot air balloon!" The performers shift — the "bread" players now rise up slowly while the "baker" grabs onto them and floats away.',
    rules: [
      'Choose one narrator. Everyone else is a performer.',
      'The narrator begins telling a story — either from a suggestion or from scratch.',
      'The performers must physically represent everything the narrator describes. This includes characters, animals, furniture, vehicles, weather, emotions — literally anything mentioned.',
      'Performers should jump in quickly without being assigned. If the narrator says "a bridge," someone should immediately become a bridge.',
      'The narrator should pause briefly after introducing new elements to give performers time to form them.',
      'The narrator is encouraged to notice what the performers are doing and build on it.',
      'The story should have a clear beginning, middle, and end.'
    ],
    variations: [
      'Audience Narrator: Different audience members take turns narrating one sentence each, keeping the performers on their toes.',
      'Competitive Storybook: Two teams each get a narrator. Both tell a story on the same theme and the audience votes on the best living illustration.',
      'Musical Storybook: At key emotional moments, the narrator says "and they sang about it" and the performers break into an improvised song.',
      'Reverse Storybook: The performers create tableaux (frozen pictures) and the narrator has to figure out what story they\'re telling.'
    ],
    prompts: [
      '"Once upon a time, in a kitchen that had a mind of its own..."',
      '"Deep beneath the ocean, there was a school for fish..."',
      '"On the hottest day of the year, in the busiest airport in the world..."',
      '"There was a wizard, but not a very good one..."',
      '"In a world where animals ran the government..."',
      '"At the edge of town, there was a treehouse that nobody was allowed inside..."',
      '"Two best friends decided to build a rocket ship out of things they found in the garage..."',
      '"It was the night of the big dance, and nothing was going according to plan..."',
      '"A family of raccoons moved into the school over summer break..."',
      '"The world\'s most boring museum had one secret room that no one had ever entered..."',
      '"A chef opened a restaurant on the moon..."',
      '"On the first snow day of the year, the snowmen came to life..."'
    ],
    players: '4+',
    categories: ['characters', 'scenes'],
    aiPlayable: false,
    module: 3
  },

  {
    id: 'hitchhiker',
    title: 'Hitchhiker',
    description: 'A car picks up hitchhikers, and each one\'s character trait infects everyone in the car.',
    goodFor: 'Character adoption, adaptability, energy matching, group mind',
    energyLevel: 'High',
    timeEstimate: 'Medium',
    example: 'The car is driving along casually. A hitchhiker gets in who is extremely excited about everything: "OH WOW, A CAR! This is the BEST car I\'ve EVER been in! Are those SEATS?!" Gradually, everyone in the car starts getting excited about mundane things too. The energy builds until everyone is screaming with joy about the turn signal. Then someone exits, a new hitchhiker gets in who is incredibly sleepy, and the whole car slowly transforms into drowsy, yawning, nodding-off versions of themselves.',
    rules: [
      'Four chairs are set up in a row (two front, two back) to represent a car.',
      'Four players sit in the car. The driver starts a simple conversation.',
      'The driver mimes pulling over. A new player (the hitchhiker) enters with a very strong, obvious character trait — an emotion, a physicality, or a quirk.',
      'Everyone in the car gradually takes on that same trait. If the hitchhiker is paranoid, everyone slowly becomes paranoid.',
      'Once all four have fully adopted the trait, the person who has been in the car the longest gets out.',
      'Everyone shifts seats (the passenger moves to driver, etc.) and a new hitchhiker enters with a completely different trait.',
      'The car transforms again.',
      'Continue for 4-5 hitchhikers.'
    ],
    variations: [
      'Double Trait: The hitchhiker has two traits the car has to absorb.',
      'Slow Shift: Instead of gradually adopting the trait, everyone has to adopt it all at once the moment the hitchhiker gets in.',
      'Musical Hitchhiker: One hitchhiker is a singer — they can only communicate through song, and so must everyone else while they\'re in the car.',
      'Emotion Spectrum: Each hitchhiker represents a different point on an emotion spectrum (slightly annoyed, moderately frustrated, furious, volcanic rage).'
    ],
    prompts: [
      'Hitchhiker trait: can\'t stop laughing',
      'Hitchhiker trait: terrified of everything',
      'Hitchhiker trait: speaks in slow motion',
      'Hitchhiker trait: incredibly suspicious of everyone',
      'Hitchhiker trait: obsessed with cleanliness',
      'Hitchhiker trait: thinks they\'re a celebrity',
      'Hitchhiker trait: narrates everything they do in third person',
      'Hitchhiker trait: has a new conspiracy theory about everything',
      'Hitchhiker trait: aggressively optimistic',
      'Hitchhiker trait: falling asleep every five seconds',
      'Hitchhiker trait: does everything as if it\'s a workout',
      'Hitchhiker trait: communicates only through sound effects'
    ],
    players: '5+',
    categories: ['characters', 'scenes'],
    aiPlayable: false,
    videoId: 'ck_bzb-t-r4',
    module: null
  },

  {
    id: 'late-for-work',
    title: 'Late for Work',
    description: 'One player guesses what happened to them while coworkers mime clues behind the boss\'s back.',
    goodFor: 'Physical clues, guessing, teamwork, audience engagement',
    energyLevel: 'High',
    timeEstimate: 'Medium',
    example: 'The audience decides: the guesser was late because they got stuck in a giant bubble, they got to work by pogo stick, and their job is professional wrestler.\n\nThe coworkers mime enormous round shapes around themselves (bubble). The guesser says "I was... trapped somehow? In something round?". A coworker bounces up and down enthusiastically. "I got here by... jumping? A pogo stick?" The remaining coworker flexes and pretends to grapple with someone. "And my job... I\'m a... wrestler?" The group cheers.',
    rules: [
      'One player (the Guesser) leaves the room.',
      'The audience decides three things: why they were late for work, how they got to work, and what their job is.',
      'The Guesser returns and stands facing the Boss (another player).',
      '3-4 Coworkers stand behind the Boss where the Guesser can see them but the Boss cannot.',
      'The Guesser starts "apologizing" and making conversation with the Boss while watching the Coworkers\' mimed clues.',
      'The Coworkers silently act out clues for all three things (they can take turns focusing on each one).',
      'As the Guesser starts to figure things out, they can incorporate their guesses into the conversation.',
      'The Boss plays along but doesn\'t give direct help.',
      'The game ends when all three are guessed, or when time runs out.'
    ],
    variations: [
      'Double Guesser: Two people leave the room and have to figure it out together, both watching the same clues.',
      'Boss Knows Nothing: The Boss also doesn\'t know the answers and has to piece things together from what the Guesser says.',
      'Silent Version: The Guesser can\'t speak either — they have to mime their guesses, and the Coworkers give thumbs up or thumbs down.',
      'Competitive Teams: Two teams each send one guesser. Both teams get the same three things to guess. The team whose guesser figures it out fastest wins.'
    ],
    prompts: [
      'Late because: abducted by friendly aliens / Got here by: riding an ostrich / Job: ice cream taste tester',
      'Late because: got stuck in a giant bubble / Got here by: pogo stick / Job: professional wrestler',
      'Late because: had to rescue a cat from a tree (the cat rescued them) / Got here by: skateboard / Job: opera singer',
      'Late because: their house was invaded by penguins / Got here by: hot air balloon / Job: brain surgeon',
      'Late because: accidentally time-traveled to the dinosaur era / Got here by: roller skates / Job: librarian',
      'Late because: got challenged to a dance-off / Got here by: surfing / Job: astronaut',
      'Late because: woke up on the wrong continent / Got here by: zip line / Job: kindergarten teacher',
      'Late because: their alarm clock came to life and ran away / Got here by: unicycle / Job: firefighter',
      'Late because: got lost in a corn maze / Got here by: swimming / Job: fashion model',
      'Late because: had to negotiate with a talking squirrel / Got here by: jet pack / Job: pizza delivery',
      'Late because: accidentally shrunk themselves / Got here by: being carried by birds / Job: news anchor',
      'Late because: their breakfast exploded / Got here by: crawling / Job: karate instructor'
    ],
    players: '5+',
    categories: ['characters', 'scenes'],
    aiPlayable: false,
    module: null
  },


  /* ================================================================
     MODULE 4: SCENES & STORYTELLING
  ================================================================ */

  {
    id: 'freeze-tag',
    title: 'Freeze Tag',
    description: 'A scene freezes mid-action; a new player tags in and starts a completely different scene.',
    goodFor: 'Quick thinking, physicality, scene initiation, boldness',
    energyLevel: 'High',
    timeEstimate: 'Medium',
    example: 'Two players are in a scene where they\'re fishing. Player A is leaning back holding an imaginary rod, Player B is reaching forward with a net. Someone yells "Freeze!" and taps Player B. The new player takes B\'s reaching-forward position and says, "Okay, I\'m going to pull this sword from the stone on the count of three." Now it\'s an Arthurian legend scene instead of a fishing scene, all because of the physical position.',
    rules: [
      'Two players start a scene based on a suggestion.',
      'They play the scene, moving naturally and using their bodies.',
      'At any point, someone from the sideline yells "Freeze!"',
      'Both players freeze exactly where they are — mid-gesture, mid-step, whatever.',
      'The person who called freeze taps one of the frozen players on the shoulder. That player sits down.',
      'The new player takes the exact physical position of the person they tapped out.',
      'The new player starts a completely different scene, using the physical position as inspiration for what they\'re doing.',
      'The remaining player adapts to the new scene.',
      'Play continues with new people freezing in.'
    ],
    variations: [
      'Blind Freeze: Players close their eyes when they call freeze, so they don\'t know what position they\'re stepping into until they open their eyes.',
      'Genre Freeze: Each new scene has to be a different genre (action movie, romantic comedy, horror, cooking show).',
      'Musical Freeze: When you freeze in, you have to start singing and the scene becomes a musical for a few lines before returning to dialogue.',
      'Everyone Freeze: The whole group is on stage doing a group scene. When someone yells freeze, everyone freezes and the caller has to restart the entire group in a new scenario.'
    ],
    prompts: [
      'Opening scene: two people at a bus stop',
      'Opening scene: cooking a complicated meal together',
      'Opening scene: building a sandcastle',
      'Opening scene: practicing a dance routine',
      'Opening scene: moving heavy furniture',
      'Opening scene: two people in a canoe',
      'Opening scene: painting a mural',
      'Opening scene: playing an intense board game',
      'Opening scene: two surgeons in an operating room',
      'Opening scene: doing yoga',
      'Opening scene: fighting off a swarm of bees',
      'Opening scene: training a very stubborn dog'
    ],
    players: '4+',
    categories: ['scenes'],
    aiPlayable: false,
    videoId: 'aUtfvHq1_VI',
    format: 'short',
    module: null
  },

  {
    id: 'columns',
    title: 'Columns',
    description: 'A scene where the style or genre changes on command.',
    goodFor: 'Quick transitions, scene initiation, listening across scenes, ensemble work',
    energyLevel: 'Medium',
    timeEstimate: 'Medium',
    example: 'Column 1: Two people planning a surprise party. Column 2: Two people lost in the woods. The host switches back and forth. In Column 1, someone says "We need to hide!" and in Column 2, someone says "We need to find shelter!" — the audience catches the parallel and it gets a huge laugh. Eventually the party planners end up in the woods and the lost hikers stumble into the party.',
    rules: [
      'Divide players into 2-3 groups. Each group occupies a "column" (a space on stage or a designated area).',
      'Get a separate suggestion for each column\'s scene.',
      'The host points to Column 1, and that group begins their scene.',
      'After 30-60 seconds, the host calls "Switch!" and points to Column 2. Column 1 freezes mid-scene.',
      'Column 2 begins (or resumes) their scene.',
      'The host keeps switching. Each time a column is activated, they continue right where they left off.',
      'Bonus: if players notice a theme, word, or situation that connects the scenes, they can lean into it.'
    ],
    variations: [
      'Three Columns: More chaotic, more connections to find, more fun.',
      'Merging Columns: In the final round, all the scenes merge into one. The players have to figure out how their separate scenes connect.',
      'Themed Columns: All columns get the same single-word theme but interpret it differently.',
      'Musical Columns: One column is a musical — every time the host switches to that column, the scene is sung.'
    ],
    prompts: [
      'Column 1: a kitchen / Column 2: a spaceship',
      'Column 1: a first date / Column 2: a job interview',
      'Column 1: a library / Column 2: a rock concert',
      'Column 1: a doctor\'s office / Column 2: an auto repair shop',
      'Column 1: a school hallway / Column 2: a royal palace',
      'Column 1: a pet store / Column 2: a courtroom',
      'Theme for all columns: "waiting"',
      'Theme for all columns: "secrets"',
      'Theme for all columns: "competition"',
      'Column 1: morning / Column 2: midnight (same location)',
      'Column 1: the planning / Column 2: the aftermath',
      'Three columns: a restaurant kitchen, a table in the restaurant, and a competing restaurant across the street'
    ],
    players: '3+',
    categories: ['scenes', 'comedy'],
    aiPlayable: false,
    module: 4
  },

  {
    id: 'story-director',
    title: 'Story Director',
    description: 'One player directs a scene in real time, narrating action and emotion as it happens.',
    goodFor: 'Listening, group storytelling, ensemble awareness, adaptability',
    energyLevel: 'Medium',
    timeEstimate: 'Medium',
    example: 'The Director says, "We\'re watching a nature documentary about two squirrels preparing for winter." Two performers start miming gathering acorns and chattering. The Director says, "Fast forward — it\'s now the middle of winter and they\'ve run out of food." The performers shift to shivering and looking panicked. "Now it\'s a heist movie. They\'re going to rob the bird feeder." The performers immediately switch to heist-movie mode, whispering plans and doing commando rolls.',
    rules: [
      'Choose one person to be the Director. Everyone else is a performer.',
      'Get a suggestion for a simple scene or story (a location, a situation, or a title).',
      'The Director begins narrating the scene, and the performers act out what the Director describes.',
      'At any time, the Director can interrupt with commands like: "Fast forward 10 years!", "Rewind to the beginning!", "Now this is a horror movie.", "Suddenly, a third character enters — it\'s a talking dog.", "Freeze. Switch characters."',
      'The performers must instantly adapt without breaking.',
      'The scene ends when the Director says so, or when the story reaches a natural ending.'
    ],
    variations: [
      'Audience Director: The audience (or the rest of the group) shouts commands instead of one Director.',
      'Remote Control: The Director has a "remote" with specific buttons — play, pause, rewind, fast forward, mute, slow motion.',
      'Genre Roulette: Write genres on slips of paper. The Director pulls a new one every 30 seconds and the performers have to switch instantly.',
      'Musical Director: The Director can also yell "Musical!" at any point and the scene shifts into a song. When they yell "Scene!" it goes back to dialogue.'
    ],
    prompts: [
      'A family dinner where the food is fighting back',
      'A first day at a very unusual new job',
      'Two explorers discovering a new island',
      'A day in the life of the last bookstore on earth',
      'A cooking competition where nobody knows how to cook',
      'A nature documentary about middle schoolers in their natural habitat',
      'Two best friends opening a time capsule they buried ten years ago',
      'A road trip that keeps getting more and more lost',
      'The grand opening of the world\'s worst theme park',
      'A group of superheroes whose powers are all completely useless',
      'A news broadcast covering the most boring event in history',
      'A love story between two rival lemonade stand owners'
    ],
    players: '3',
    categories: ['scenes'],
    aiPlayable: true,
    module: 4
  },

  {
    id: 'experts-panel',
    title: 'Experts Panel',
    description: 'Answer interview questions as a confident "expert" on completely invented topics.',
    goodFor: 'Character work, quick thinking, world-building, supporting teammates',
    energyLevel: 'Medium',
    timeEstimate: 'Medium',
    example: 'Topic: "The science of sneezing."\n- Dr. Pamela Windrush, Professor of Nasal Dynamics: "Thank you for having us. I\'ve studied sneezes for thirty years, and I can tell you that every sneeze contains a tiny burst of creative energy. Some of humanity\'s greatest ideas happened mid-sneeze."\n- Dr. Kevin Blast, Sneeze Historian: "That\'s absolutely right. In fact, we have evidence that the wheel was invented during a particularly violent sneeze."\n- Dr. Luna Torres, Sneeze Psychologist: "And what people don\'t realize is that the way you sneeze reveals your deepest personality traits. A loud sneezer is a natural leader."',
    rules: [
      'Get a topic from the audience — the more specific or absurd, the better.',
      '3-4 players sit as the expert panel. Each one quickly gives themselves a name and title (made up on the spot).',
      'A host moderates by asking the panel questions.',
      'Experts answer in character, stating everything with complete confidence regardless of how absurd it is.',
      'Experts should reference and build on what the other experts say — "As Dr. Rodriguez just mentioned..." — to create the illusion of a shared, legitimate field.',
      'The host can also take "audience questions" from the rest of the group.',
      'The panel runs for about 5-7 minutes.'
    ],
    variations: [
      'Competing Experts: The experts disagree with each other and get into academic arguments about their fake field.',
      'Real-ish Topics: Pick topics that sound real but are slightly off — "The history of sandwiches," "The psychology of waiting in line," "Advanced pillow technology."',
      'Expert Showdown: Two teams each present their own expert panel on the same topic. The audience decides which panel was more convincing.',
      'Musical Expert: One expert can only communicate their findings through song.'
    ],
    prompts: [
      'The history and science of the high-five',
      'Why cats stare at walls (an interdisciplinary investigation)',
      'Advanced strategies for avoiding homework',
      'The secret language of cafeteria food',
      'Why humans need to sleep (but shouldn\'t)',
      'The future of competitive napping',
      'Underwater basket weaving: is it finally getting the respect it deserves?',
      'The psychology of people who stand too close to you',
      'Why Mondays exist (and who is responsible)',
      'The hidden ecosystem inside a school locker',
      'Time travel for beginners: what could go wrong?',
      'The emerging field of professional pillow fort architecture'
    ],
    players: '3+',
    categories: ['characters', 'comedy'],
    aiPlayable: false,
    module: 4
  },

  {
    id: 'press-conference',
    title: 'Press Conference',
    description: 'One player is at a podium — but they don\'t know why. Reporters\' questions are the clues.',
    goodFor: 'Listening, deduction, character clues, group support',
    energyLevel: 'Medium',
    timeEstimate: 'Medium',
    example: 'Secret: The Speaker accidentally taught a flock of pigeons to speak French.\n\nReporter 1: "How long have you been working with birds?"\nSpeaker: "Oh, uh, I\'ve always been passionate about birds. Since childhood."\nReporter 2: "Did you expect them to pick up the language so quickly?"\nSpeaker: "Language? I... yes, the language of... bird communication is something I\'ve studied."\nReporter 3: "Bonjour! Do the pigeons prefer Parisian French or Quebecois?"\nSpeaker: "Wait — I taught pigeons to speak French?!"',
    rules: [
      'One player volunteers to be the Speaker. They leave the room or cover their ears.',
      'The group decides what the press conference is about — what the Speaker just did, invented, discovered, or is being accused of.',
      'The Speaker returns and stands at the "podium."',
      'The reporters raise their hands and ask questions that contain clues about the secret, without being too obvious.',
      'The Speaker answers the questions as best they can, and as they gather more clues, they can start guessing.',
      'When the Speaker correctly identifies what the press conference is about, everyone cheers.',
      'If they\'re struggling, the reporters can make their clues more obvious.'
    ],
    variations: [
      'Double Secret: The Speaker has done two things and has to guess both.',
      'Denial Press Conference: The Speaker knows the secret but has to deny everything while the reporters try to get them to slip up.',
      'Team Press Conference: Two people are at the podium and neither knows the secret. They have to collaborate on answers.',
      'Celebrity Press Conference: The Speaker is also a specific famous person and has to guess both who they are and what they did.'
    ],
    prompts: [
      'You invented a machine that translates baby talk into English',
      'You accidentally launched your school into outer space',
      'You discovered that your principal is actually three kids in a trench coat',
      'You won the world championship of competitive sleeping',
      'You\'re a squirrel who has successfully infiltrated human society',
      'You replaced all the water in the city pool with Jell-O',
      'You trained your cat to do your homework and it got straight A\'s',
      'You discovered a new planet and it\'s shaped exactly like a taco',
      'You are the world\'s youngest retired person (you\'re 14 and you\'re done)',
      'You invented shoes that let you walk on the ceiling',
      'You accidentally switched brains with your teacher for a day',
      'You are opening the world\'s first restaurant where the food orders you'
    ],
    players: '4+',
    categories: ['characters', 'scenes'],
    aiPlayable: false,
    module: 4
  },

  {
    id: 'dubbing',
    title: 'Dubbing',
    description: 'Two players perform silently while two others provide all their dialogue.',
    goodFor: 'Listening, physicality, vocal variety, teamwork',
    energyLevel: 'Medium',
    timeEstimate: 'Medium',
    example: 'The Bodies are in a scene at a restaurant. Body 1 gestures grandly at a menu and mouths something. Voice 1 says, "Welcome to my restaurant. Everything on the menu is made from things I found in my garden this morning." Body 2 looks horrified and mouths a response. Voice 2 says, "Is that... is that why there\'s a worm on page three?" Body 1 shrugs proudly.',
    rules: [
      'Four players split into two pairs: the Bodies (who perform physically on stage) and the Voices (who stand to the side and provide dialogue).',
      'Get a scene suggestion.',
      'The Bodies begin the scene using exaggerated physical movements and mouth movements, but they make no sound.',
      'The Voices watch the Bodies and provide dialogue that matches the physical actions and mouth movements they see.',
      'The Bodies should react to the dialogue they hear — even though they didn\'t create it — and adjust their physicality accordingly.',
      'The Voices should try to match the timing of the mouth movements and the emotional energy of the physical actions.',
      'The scene runs for 2-3 minutes.'
    ],
    variations: [
      'Rotating Voices: The voice performers swap which body they\'re dubbing mid-scene.',
      'Foreign Film: The Bodies speak in gibberish or a made-up language, and the Voices "translate" for the audience.',
      'Nature Documentary: Instead of dialogue, the Voices narrate the Bodies\' actions as if they\'re animals in a nature documentary.',
      'Audience Voices: Audience members provide the voice while performers act on stage.'
    ],
    prompts: [
      'Scene: Two people on a cooking show',
      'Scene: A teacher and student in a parent-teacher conference',
      'Scene: Two people meeting at a dog park',
      'Scene: A tour guide showing someone a very strange museum',
      'Scene: Two athletes trash-talking before a big game',
      'Scene: A hair stylist giving someone a bold new look',
      'Scene: Two people on opposite sides of a fence, arguing about something',
      'Scene: A real estate agent showing a haunted house',
      'Scene: Two royals meeting for an arranged marriage',
      'Scene: A dentist and a very nervous patient',
      'Scene: Two spies exchanging a secret message in public',
      'Scene: A flight attendant and a very demanding passenger'
    ],
    players: '4',
    categories: ['scenes', 'characters'],
    aiPlayable: false,
    module: null
  },

  {
    id: 'conducted-story',
    title: 'Conducted Story',
    description: 'A Conductor switches between storytellers mid-sentence — sometimes mid-word.',
    goodFor: 'Listening, staying present, mid-sentence thinking, group storytelling',
    energyLevel: 'Medium',
    timeEstimate: 'Medium',
    example: 'Conductor points to Player A: "Once upon a time, there was a princess who—" switches to Player B: "—who really, really hated—" switches to Player C: "—mornings. Every morning she would wake up and—" switches to Player A: "—throw her alarm clock out the window. The kingdom below was littered with—" switches to Player D: "—broken alarm clocks and the villagers had started using them as—" switches to Player B: "—currency. Three alarm clocks could buy you a loaf of bread."',
    rules: [
      'One person stands in front as the Conductor.',
      'The Conductor gets a story title or topic from the audience.',
      'The Conductor points at one player, who begins telling the story.',
      'When the Conductor switches to another player (by pointing), the new player continues the story immediately from where it was left off — mid-sentence, mid-word if necessary.',
      'The Conductor controls the pacing: rapid switching creates comedy, letting someone talk builds the story.',
      'Players who are not active should be listening, ready to pick up at any moment.',
      'The story should have a beginning, middle, and end. The Conductor guides it toward a conclusion.'
    ],
    variations: [
      'Audience Conductor: An audience member conducts, giving them control over the chaos.',
      'Emotional Conducting: The Conductor not only switches speakers but also calls out emotions that the next speaker has to adopt.',
      'Genre Conducting: Each time the Conductor switches, they also call out a genre, and the next speaker shifts the story accordingly.',
      'Musical Conducting: The Conductor can switch between speaking and singing — when they make a musical gesture, the current speaker has to sing their part of the story.'
    ],
    prompts: [
      'Story title: "The Day the Cafeteria Fought Back"',
      'Story title: "My Grandma\'s Secret Mission"',
      'Story title: "The World\'s Most Dangerous Sleepover"',
      'Story title: "The Dog Who Ran for President"',
      'Story title: "Lost in a Grocery Store for 1,000 Years"',
      'Story title: "The Teacher Who Could Read Minds"',
      'Story title: "A Pirate\'s Guide to Modern Living"',
      'Story title: "The Last Snow Day on Earth"',
      'Story title: "Two Robots Learn About Feelings"',
      'Story title: "The Great Cafeteria Heist"',
      'Story title: "An Alien\'s First Day of School"',
      'Story title: "The Monster Under the Bed Gets a Roommate"'
    ],
    players: '5+',
    categories: ['scenes', 'yes-and'],
    aiPlayable: false,
    module: null
  },

  {
    id: 'sound-effects',
    title: 'Sound Effects',
    description: 'Two players perform a scene; two others provide every single sound effect.',
    goodFor: 'Listening, teamwork, physicality, timing',
    energyLevel: 'Medium',
    timeEstimate: 'Medium',
    example: 'The Actors are on a camping trip. One mimes unzipping a tent — the Sound Effects team makes a long "zzzzzzip" sound. The other mimes starting a campfire — Sound Effects team makes crackling fire sounds. An owl hoots in the background (Sound Effects team). One Actor mimes opening a can of beans, but the Sound Effects team makes an explosion sound. The Actors look at each other, look at the "can," and react to their exploding beans.',
    rules: [
      'Two players are the Actors. Two players are the Sound Effects team.',
      'Get a scene suggestion.',
      'The Actors begin the scene, performing physical actions with full commitment.',
      'The Sound Effects team provides every sound: doors, phones, footsteps, eating, weather, vehicles, animals — everything.',
      'The Actors should set up clear physical actions and pause slightly to give the Sound Effects team time to respond.',
      'The Sound Effects team should watch the Actors closely and also feel free to add ambient sounds that set the scene.',
      'If the Actors hear an unexpected sound, they should react to it and incorporate it into the scene.'
    ],
    variations: [
      'Audience Sound Effects: Instead of designated players, audience members provide the sounds.',
      'Musical Score: The Sound Effects team also provides a musical score — dramatic music for tense moments, romantic music for tender moments.',
      'Wrong Sound Effects: The Sound Effects team deliberately provides wrong sounds and the Actors have to justify them.',
      'Solo Sound Effects: One person does ALL the sound effects for two Actors.'
    ],
    prompts: [
      'Scene: Making breakfast on a busy morning',
      'Scene: Exploring a cave',
      'Scene: A day at an amusement park',
      'Scene: Trying to fix a car on the side of the road',
      'Scene: Building a treehouse',
      'Scene: A chase scene through a shopping mall',
      'Scene: A day at the beach that keeps getting interrupted',
      'Scene: Sneaking through a museum at night',
      'Scene: A thunderstorm knocks out the power during a dinner party',
      'Scene: Two people moving into a creaky old house',
      'Scene: A rocket launch (from countdown to landing)',
      'Scene: A cooking show where everything in the kitchen is malfunctioning'
    ],
    players: '4',
    categories: ['scenes', 'characters'],
    aiPlayable: false,
    module: null
  },

  {
    id: 'new-choice',
    title: 'New Choice',
    description: 'The caller can yell "New choice!" at any moment, forcing a player to immediately replace their last line.',
    goodFor: 'Quick thinking, flexibility, not getting attached to ideas, variety',
    energyLevel: 'High',
    timeEstimate: 'Medium',
    example: 'Player A: "I\'d like to order a pizza."\nCaller: "New choice!"\nPlayer A: "I\'d like to order a small horse."\nCaller: "New choice!"\nPlayer A: "I\'d like to order... revenge."\nCaller lets it continue.\nPlayer B: "Ma\'am, this is a library."\nCaller: "New choice!"\nPlayer B: "Ma\'am, this is a volcano."\nScene continues from there.',
    rules: [
      'Two players begin a scene based on a suggestion.',
      'A designated caller watches the scene.',
      'At any point, the caller can yell "New choice!"',
      'The last person who spoke must immediately say a new, different line — replacing what they just said.',
      'The caller can say "New choice!" again, and the player has to come up with yet another alternative.',
      'This can happen multiple times in a row. The player keeps replacing their line until the caller is satisfied (or the audience is dying laughing).',
      'Once the caller lets it go, the scene continues with whatever the last line was.',
      'The caller can also target physical actions — "New choice!" when someone makes a gesture, and they have to do a different gesture.'
    ],
    variations: [
      'New Choice Everything: The caller can target actions, emotions, entrances, and exits — not just dialogue.',
      'Audience New Choice: The audience yells "New choice!" whenever they want, so the players never know when it\'s coming.',
      'New Choice Monologue: One player delivers a speech and the caller keeps interrupting.',
      'Competitive New Choice: Two teams perform scenes, and the opposing team gets to call "New choice!" on the other team\'s players.'
    ],
    prompts: [
      'Scene: A couple deciding where to go for dinner',
      'Scene: A student explaining to a teacher why their homework is late',
      'Scene: Two friends planning what to do this weekend',
      'Scene: A parent catching their kid sneaking out',
      'Scene: Someone returning a very unusual item to a store',
      'Scene: A boss giving an employee their annual review',
      'Scene: Two strangers stuck next to each other on a long flight',
      'Scene: A coach giving a halftime pep talk',
      'Scene: Someone confessing a secret to their best friend',
      'Scene: A waiter describing the specials at a very weird restaurant',
      'Scene: Two people meeting their new roommate for the first time',
      'Scene: A detective interrogating a suspect who is clearly lying'
    ],
    players: '3+',
    categories: ['scenes', 'comedy'],
    aiPlayable: false,
    videoId: '1Y72O2Kdcds',
    format: 'short',
    module: null
  },

  {
    id: 'scenes-from-a-hat',
    title: 'Scenes from a Hat',
    description: 'The host draws audience suggestions from a hat; players jump up and act each one out in seconds.',
    goodFor: 'Quick thinking, one-liners, boldness, stage presence',
    energyLevel: 'High',
    timeEstimate: 'Medium',
    example: 'Host reads: "Things you shouldn\'t say at a job interview."\n\nPlayer 1 jumps up: "So... is napping at my desk a fireable offense, or more of a gray area?"\n\nPlayer 2 jumps up: "I don\'t have a resume, but I brought a drawing of myself giving a thumbs up."\n\nPlayer 3 jumps up, sits down in a chair, immediately puts feet on the desk: "So when\'s lunch?"\n\nHost pulls a new slip.',
    rules: [
      'Before the game, the audience writes scene suggestions on slips of paper. These should be short situations: "Things you shouldn\'t say to your teacher," "Unlikely things to hear on a first date," "Bad times to break into song."',
      'The host collects the slips in a hat.',
      'The host reads a suggestion.',
      'Players jump up (individually or in pairs) and act out a quick response — one line, a brief exchange, or a physical bit.',
      'Multiple players can respond to the same suggestion, one after another.',
      'When the responses dry up, the host pulls a new suggestion.',
      'Keep the pace fast. Don\'t let anyone set up a full scene — this is about quick hits.'
    ],
    variations: [
      'Team Scenes from a Hat: Two teams compete. After each prompt, one person from each team responds and the audience decides which was funnier.',
      'Physical Only: No talking. Every response has to be acted out silently.',
      'Musical Scenes from a Hat: Some prompts require a sung response instead of a spoken one.',
      'Audience Shout-Out: Instead of pre-written prompts, the audience just shouts suggestions in real time.'
    ],
    prompts: [
      '"Things you shouldn\'t say on a roller coaster"',
      '"Rejected school mascots"',
      '"Bad ways to start a speech"',
      '"Things a pet would say if it could talk for 10 seconds"',
      '"The worst thing to find in your lunchbox"',
      '"Unlikely lines from a fairy tale"',
      '"Things you shouldn\'t yell in a library"',
      '"Bad advice from a fortune cookie"',
      '"Rejected flavors of ice cream"',
      '"Things overheard at a superhero support group"',
      '"The worst way to wake someone up"',
      '"Things you shouldn\'t do during a fire drill"'
    ],
    players: '4+',
    categories: ['comedy', 'scenes'],
    aiPlayable: false,
    module: null
  },


  /* ================================================================
     MODULE 5: COMEDY PATTERNS & TIPS FROM THE PROS
  ================================================================ */

  {
    id: 'half-life',
    title: 'Half-Life',
    description: 'Replay a scene in half the time, then half again, until it\'s pure chaos.',
    goodFor: 'Pacing, comedic timing, physicality, escalation through speed',
    energyLevel: 'High',
    timeEstimate: 'Medium',
    example: 'Original scene: Two friends go fishing, one catches a boot, they argue about whether to keep it, a fish jumps out of the water and steals the boot.\n\nAt half speed, the argument is compressed but recognizable. At quarter speed, they\'re pantomiming casting and catching in fast-forward. By the final round, it\'s basically: cast — "BOOT!" — "MINE!" — "NO!" — fish steals boot — end. The audience is already laughing because they know what\'s coming and the joy is in watching it collapse.',
    rules: [
      'Two players get a scene suggestion and perform a short scene (about 2 minutes). It should have a few clear, memorable moments and lines.',
      'When the scene ends, the host says "Half-life!" and the players replay the scene in about 1 minute — hitting the same key beats but faster.',
      '"Half-life!" again — now 30 seconds.',
      '"Half-life!" — 15 seconds.',
      '"Half-life!" — 7 seconds. This is usually just the biggest moments crammed into a few seconds of chaos.',
      'Optional final round: 3 seconds, or "one word each," or a single frozen tableau.'
    ],
    variations: [
      'Triple Life: Instead of halving the time, triple it — start with a 30-second scene and each replay is three times longer.',
      'Reverse Half-Life: Start at 5 seconds and work your way up to the full scene.',
      'Genre Half-Life: Each replay is in a different genre AND half the time.',
      'Team Half-Life: One team performs the original scene and the other team has to replay it in half the time, having only watched it once.'
    ],
    prompts: [
      'Two people assembling furniture with terrible instructions',
      'A surprise birthday party that goes horribly wrong',
      'Two chefs competing in a cooking show',
      'A job interview where the interviewer keeps falling asleep',
      'Two people on the world\'s worst first date',
      'A magician whose tricks keep actually working (and terrifying the audience)',
      'Two siblings arguing over the TV remote',
      'A bank robbery where the robber is extremely polite',
      'A doctor delivering news that keeps changing from good to bad',
      'Two people meeting their new neighbor who is very, very strange',
      'A superhero and villain who keep running into each other at the grocery store',
      'A student presenting a book report on a book they clearly didn\'t read'
    ],
    players: '2+',
    categories: ['comedy', 'scenes'],
    aiPlayable: false,
    module: 5
  },

  {
    id: 'good-bad-worse',
    title: 'Good/Bad/Worse',
    description: 'The AI gives you a scenario and three choices: one good, one bad, one somehow worse.',
    goodFor: 'Escalation, comedic contrast, quick thinking, crowd work',
    energyLevel: 'Medium',
    timeEstimate: 'Short',
    example: 'Question: "How do I ask someone to the school dance?"\n- Good Advice: "Just be honest. Walk up to them, tell them you think they\'re cool, and ask if they\'d want to go together."\n- Bad Advice: "Write it in frosting on a cake and leave it on their desk. Don\'t sign it. Mystery is romantic."\n- Worse Advice: "Hire a skywriter. But spell their name wrong so they know you did it under pressure."',
    rules: [
      'Three players sit or stand facing the group.',
      'Assign each one a role: Good Advice, Bad Advice, Worse Advice.',
      'Someone from the group asks a question — something they\'d plausibly want advice on.',
      'The Good Advice person answers first with genuinely decent advice.',
      'The Bad Advice person follows with notably poor advice.',
      'The Worse Advice person finishes with spectacularly awful advice.',
      'The group asks another question and the cycle repeats.',
      'Encourage the advisors to develop characters — the Worse Advice person especially should commit to being confidently wrong.'
    ],
    variations: [
      'Rotating roles: After each question, the players rotate — so the Good Advice person becomes Bad, Bad becomes Worse, and Worse becomes Good.',
      'Team competition: Two teams each provide their own Good/Bad/Worse panel. The audience votes on which team\'s responses were funnier.',
      'Audience pick: After hearing all three, the audience votes on which advice the asker should actually follow.',
      'Escalating panel: Start with four people — Good, Bad, Worse, and Absolutely Do Not Do This Under Any Circumstances.'
    ],
    prompts: [
      '"How do I get my parents to let me stay up later?"',
      '"How should I study for a test I forgot about until tonight?"',
      '"What should I do if my best friend is mad at me?"',
      '"How do I make friends at a new school?"',
      '"What\'s the best way to train my dog to stop barking?"',
      '"How do I stop procrastinating?"',
      '"How should I decorate my room?"',
      '"What should I cook when I have no idea how to cook?"',
      '"How do I get picked first in gym class?"',
      '"What should I do with my summer?"',
      '"How do I become famous on the internet?"',
      '"What\'s the best way to survive a zombie apocalypse?"'
    ],
    players: '1',
    categories: ['comedy', 'solo-friendly'],
    aiPlayable: true,
    module: 5
  },

  {
    id: 'mega-replay',
    title: 'Mega Replay',
    description: 'Replay the same scene multiple times, each time in a wildly different genre or style.',
    goodFor: 'Genre awareness, ensemble work, scene memory, versatility',
    energyLevel: 'High',
    timeEstimate: 'Long',
    example: 'Original scene: Two roommates argue about whose turn it is to do the dishes.\n- Soap Opera: Dramatic pauses, gasps, a secret is revealed about one roommate\'s past involving dishes.\n- Horror Movie: The dishes start moving on their own. The lights flicker. One roommate slowly opens the dishwasher and screams.\n- Musical: They sing a power ballad about the dishes, complete with choreography.\n- Nature Documentary: A narrator describes the two roommates as rare species in their natural habitat, circling the sink.',
    rules: [
      'A group of players performs an original scene (2-3 minutes) based on a suggestion. Keep it simple with clear moments.',
      'After the scene ends, the host or audience calls out a genre, style, or constraint.',
      'The group replays the entire scene in that genre — same basic plot points, but everything else shifts to match the new style.',
      'After each replay, a new genre is called.',
      'Do 3-5 replays total.',
      'Players should exaggerate the genre conventions — if it\'s a horror movie, there should be jump scares and creepy music; if it\'s a soap opera, every line should be dramatic and someone should probably faint.'
    ],
    variations: [
      'Audience Genre Menu: Write genres on a board and let the audience vote on which ones to see.',
      'Speed Genre: Each replay has to be done in half the time AND a different genre.',
      'Player\'s Choice: Each replay, one of the performers picks the genre secretly and the rest have to figure it out on the fly.',
      'Team Challenge: Two teams watch the same original scene, then each replays it in a genre. The audience votes on who nailed it better.'
    ],
    prompts: [
      'Original scene: Ordering coffee at a very slow coffee shop',
      'Original scene: A teacher handing back test results',
      'Original scene: Two friends trying to hang a picture frame',
      'Original scene: Waiting in line at an amusement park',
      'Original scene: A family dinner where one person has big news',
      'Genres to try: soap opera, horror, action movie, nature documentary, musical, film noir, Western, romantic comedy, silent film, anime',
      'Constraints to try: slow motion, reverse order, in rhyme, everyone whispers, only one person can talk at a time',
      'Original scene: Moving into a new apartment',
      'Original scene: A birthday party where everything goes wrong',
      'Original scene: Two people stuck in traffic',
      'Original scene: The last five minutes before school ends on a Friday',
      'Original scene: A group project meeting where nobody has done the work'
    ],
    players: '6+',
    categories: ['comedy', 'scenes'],
    aiPlayable: false,
    module: 5
  },

  {
    id: 'slogans',
    title: 'Slogans',
    description: 'Create terrible (or brilliant) advertising slogans for products that should not exist.',
    goodFor: 'One-liners, quick thinking, wordplay, team energy',
    energyLevel: 'High',
    timeEstimate: 'Short',
    example: 'Product: "A pencil that\'s always dull."\n- "Dull Pencil: for when your writing should match your personality."\n- "Dull Pencil: because sharp things are dangerous and we care about you."\n- "Dull Pencil: now with 100% more erasing than actual writing."\n- "Dull Pencil: the official pencil of students who didn\'t study."\n- sung: "Dull Pencilll... it won\'t write but it feels niiiiice!"',
    rules: [
      'Get a product suggestion from the audience. It can be a real product, a made-up product, or a normal object that nobody would normally advertise.',
      'Players step forward one at a time and deliver a slogan — a tagline, jingle, or pitch for the product.',
      'After each slogan, the group (or audience) reacts.',
      'Keep going until the ideas run out or the host calls it.',
      'Speed and confidence matter more than polish.'
    ],
    variations: [
      'Jingle Battle: Instead of spoken slogans, each player (or team) has to sing a short jingle.',
      'Infomercial: One player does a full 30-second infomercial for the product, complete with "but wait, there\'s more!"',
      'Competing Brands: Two teams are rival companies selling the same product. They alternate slogans trying to out-pitch each other.',
      'Evolving Product: After every few slogans, the host adds a feature to the product ("Now it\'s also a phone!"), and the slogans have to adapt.'
    ],
    prompts: [
      'Product: shoes made out of bread',
      'Product: an alarm clock that insults you',
      'Product: invisible sunglasses',
      'Product: a backpack that gives unsolicited advice',
      'Product: a pillow that records your dreams',
      'Product: edible homework',
      'Product: a toilet that gives motivational speeches',
      'Product: a door that only opens if you compliment it',
      'Product: glow-in-the-dark socks',
      'Product: a textbook that reads itself to you (badly)',
      'Product: a subscription service for random hats',
      'Product: a mirror that shows you as a cartoon character'
    ],
    players: '3+',
    categories: ['comedy'],
    aiPlayable: false,
    module: 5
  },

  {
    id: 'rap-battle',
    title: 'Rap Battle',
    description: 'Trade improvised rap verses. Rhyming optional. Confidence required.',
    goodFor: 'Rhyming, confidence, quick thinking, crowd energy',
    energyLevel: 'High',
    timeEstimate: 'Short',
    example: 'Topic: "Why my backpack is better than yours."\n\nPlayer 1: "My backpack\'s got zippers, pockets galore, I got snacks in the front and pencils and more, your bag\'s falling apart held together with tape, mine\'s got so much storage it needs its own landscape—"\n\nPlayer 2: "Please, your backpack\'s heavy, you walk with a lean, mine\'s ultralight, aerodynamic, clean, I got a water bottle holder AND a secret slot, you got a bag full of crumbs and homework you forgot—"',
    rules: [
      'Two players face each other. The rest of the group forms a circle around them (the cipher).',
      'Someone provides a beat — beatboxing, clapping, stomping, or a beat from a phone.',
      'Get a topic or let the rappers choose their own angle.',
      'Player 1 raps for about 15-30 seconds.',
      'Player 2 responds with their own verse.',
      'Go back and forth for 2-3 rounds each.',
      'The group cheers, and they can vote on a winner if it\'s competitive.',
      'Keep it fun and friendly. Roast the topic, not the person.'
    ],
    variations: [
      'Character Rap Battle: Each rapper takes on a character (a pirate vs. a ninja, a teacher vs. a student) and raps from that perspective.',
      'Compliment Battle: Instead of roasting, each rapper tries to out-compliment the other. Surprisingly hard and very funny.',
      'Tag Team: Two teams of two. Teammates can tag in and out mid-verse.',
      'Topic Roulette: After each verse, the audience shouts a new topic that has to be incorporated into the next verse.'
    ],
    prompts: [
      'Topic: Why my pet is the greatest animal alive',
      'Topic: Why this pizza topping is superior to all others',
      'Topic: My morning routine is more impressive than yours',
      'Topic: I\'m a better friend than you (compliment battle)',
      'Topic: Why my sport is the best sport',
      'Character battle: Pirate vs. Astronaut',
      'Character battle: Librarian vs. Rock Star',
      'Character battle: Chef vs. Mad Scientist',
      'Topic: Why I deserve the last slice of cake',
      'Topic: My hidden talent is better than your hidden talent',
      'Topic: I\'m the real class president and here\'s why',
      'Topic: Things I found in my locker and why they make me powerful'
    ],
    players: '3+',
    categories: ['comedy', 'musical'],
    aiPlayable: false,
    module: 5
  },

  {
    id: 'irish-drinking-song',
    title: 'Irish Drinking Song',
    description: 'Four players take turns singing one line each of an improvised song — the last person has to land a rhyme.',
    goodFor: 'Group musicality, rhyming under pressure, ensemble timing, boldness',
    energyLevel: 'High',
    timeEstimate: 'Medium',
    example: 'Topic: "Losing your homework."\n- Player 1: "I sat down at my desk, my homework was due—"\n- Player 2: "I looked inside my bag but it wasn\'t there—"\n- Player 3: "I checked under my bed and behind the shelf—"\n- Player 4: "My dog looked guilty, licking his lips without a care!"\n- ALL: "Oh I lost my homework, lost it agaaain..."',
    rules: [
      'Four players stand in a line facing the audience.',
      'Get a topic from the audience.',
      'Everyone sings together on a simple, repetitive melody.',
      'Each player sings one line, going down the line. The fourth player\'s line needs to rhyme with the second player\'s line.',
      'After the verse, everyone sings a chorus together (usually repeating the topic or a key phrase).',
      'Repeat for 3-4 verses.',
      'If someone stumbles or blanks, the group keeps the melody going and carries them through. Nobody gets left behind.'
    ],
    variations: [
      'Speed round: After a normal-speed verse, sing the next verse twice as fast.',
      'Audience lines: The audience shouts out a line and the players have to incorporate it into the next verse.',
      'Changing genres: Each verse is sung in a different musical style — verse 1 is folk, verse 2 is opera, verse 3 is country, verse 4 is hip-hop.',
      'Eight-person version: Two groups of four alternate verses, competing to be funnier while staying on the same topic.'
    ],
    prompts: [
      'Topic: Burning dinner',
      'Topic: Getting a bad haircut',
      'Topic: Your phone dying at the worst possible moment',
      'Topic: Being the last one picked for a team',
      'Topic: Trying to stay awake in class',
      'Topic: Forgetting someone\'s name',
      'Topic: Stepping in something gross',
      'Topic: Getting lost at the mall',
      'Topic: Your embarrassing hidden talent',
      'Topic: Accidentally sending a text to the wrong person',
      'Topic: Waking up late on the most important day',
      'Topic: Your best friend\'s terrible cooking'
    ],
    players: '4+',
    categories: ['musical', 'comedy'],
    aiPlayable: false,
    module: null
  },


  /* ================================================================
     MODULE 6: SKETCH COMEDY
  ================================================================ */

  {
    id: 'sketch-formula',
    title: 'Sketch Formula',
    description: 'Write a short sketch using the classic setup: funny situation + strong character + escalation.',
    goodFor: 'Writing, structure, comedic escalation, character development',
    energyLevel: 'Low',
    timeEstimate: 'Long',
    example: 'Situation: a robot trying to learn how to apologize. Beat 1 — the robot delivers a technically correct but completely emotionless apology; the human is baffled. Beat 2 — the robot overcorrects with excessive weeping and dramatic gestures; the human is more baffled. Beat 3 — the robot synthesizes both approaches and delivers an apology so perfectly calibrated it is somehow more unsettling than the original offense.',
    rules: [
      'Agree on a funny situation (e.g., a robot trying to learn how to apologize).',
      'Define the main character\'s specific flaw or desire.',
      'Write the scene in three beats: establish the situation, complicate it, escalate to absurdity.',
      'Keep it under 3 minutes when performed.',
      'Perform it — or just read it out loud.'
    ],
    variations: [],
    prompts: [],
    players: '2+',
    categories: ['comedy', 'scenes'],
    aiPlayable: false,
    module: 6
  },

  {
    id: 'snl-cold-open',
    title: 'SNL Cold Open',
    description: 'Start a sketch in the middle of a scene — no setup, no explanation. Just go.',
    goodFor: 'Scene initiation, specificity, twists, comic timing',
    energyLevel: 'Medium',
    timeEstimate: 'Medium',
    example: 'Two players begin mid-conversation. Player A: "No, I said I\'d meet you at the OTHER invisible bridge." Player B: "There are two invisible bridges now?!" Player A: "There have always been two invisible bridges, Kevin. This is literally why we\'re in couples therapy." The audience has no idea what\'s happening and is fully invested.',
    rules: [
      'Two players start mid-scene, mid-conversation. No context.',
      'The audience figures out what\'s happening from clues in the scene.',
      'Somewhere in the middle: a twist or reveal.',
      'End with a strong button — a final joke that wraps it up.',
      'Tip: start specific. "No, I said I\'d meet you at the OTHER invisible bridge!"'
    ],
    variations: [],
    prompts: [],
    players: '2+',
    categories: ['scenes', 'comedy'],
    aiPlayable: false,
    module: 6
  },

  {
    id: 'recurring-characters',
    title: 'Recurring Characters',
    description: 'Develop a character so specific they could come back week after week.',
    goodFor: 'Character depth, consistency, comedic specificity, scene variety',
    energyLevel: 'Medium',
    timeEstimate: 'Long',
    example: 'Character: a person who is aggressively convinced that everything is "fine." At work: their desk is on fire and they\'re still typing. "Fine." At home: they\'re eating cereal with a fork because there are no clean spoons. "Fine." On a date: their chair just collapsed. They are now sitting on the floor. "This is fine." The trait stays exactly the same; the escalating situations are what make it funny.',
    rules: [
      'Invent a character with one very specific, very committed personality trait.',
      'Perform them in three different scenarios: at work, at home, on a date.',
      'The character\'s trait stays constant — the situations change.',
      'After three scenes, discuss: what\'s funny about this character? What makes them work?',
      'Bonus: put two characters together and see what happens.'
    ],
    variations: [],
    prompts: [],
    players: '2+',
    categories: ['characters', 'comedy'],
    aiPlayable: false,
    module: 6
  },

  {
    id: 'sketch-builder',
    title: 'Sketch Builder',
    description: 'Build a full sketch outline with an AI co-writer — find the game, develop three heightens, and land the button.',
    goodFor: 'Sketch structure, finding the game of a scene, writing collaboration',
    energyLevel: 'Medium',
    timeEstimate: 'Medium',
    example: '',
    rules: [
      'Pick a "what if" premise or write your own.',
      'Work with the AI to identify the game — the one funny thing that keeps escalating.',
      'Build through setup, three heightens, and a button together.',
      'By the end, you\'ll have a complete sketch outline.'
    ],
    variations: [],
    prompts: [],
    players: '1',
    categories: ['comedy'],
    aiPlayable: true,
    module: 6
  },

  /* ================================================================
     ADDITIONAL GAMES (no module)
  ================================================================ */

  {
    id: 'mafia',
    title: 'Mafia',
    description: 'A group guessing game where the "mafia" secretly eliminates players while the town tries to figure out who they are.',
    goodFor: 'Observation, deception, persuasion, group dynamics, dramatic tension',
    energyLevel: 'Medium',
    timeEstimate: 'Long',
    example: 'Everyone closes their eyes. The narrator says "Mafia, open your eyes. Choose someone to eliminate." Two players silently point at Marcus. "Mafia, close your eyes. Town, wake up. Bad news — Marcus didn\'t make it through the night." Marcus dramatically clutches his chest and collapses. Now the town has to debate: who looks suspicious? Priya says she noticed someone fidgeting during the night phase. Jordan says Priya is deflecting. The accusations fly until someone gets voted out — and the town finds out if they caught a mafia member or lost one of their own.',
    rules: [
      'One person is the narrator and does not play.',
      'The narrator secretly assigns roles: 2–3 mafia members, 1 detective (optional), 1 doctor (optional), and the rest are townspeople.',
      'Night phase: Everyone closes their eyes. The narrator calls on the mafia to silently choose someone to eliminate. If there\'s a detective, they silently point at someone to investigate (narrator nods yes or no). If there\'s a doctor, they point at someone to save.',
      'Day phase: Everyone opens their eyes. The narrator announces who was eliminated (unless the doctor saved them). That player is out and cannot speak.',
      'The town discusses and debates who they think the mafia is. Players can accuse, defend, and argue.',
      'The town votes to eliminate one suspect. That player reveals their role and is out.',
      'Repeat night and day phases until either all mafia members are caught (town wins) or mafia members equal or outnumber townspeople (mafia wins).'
    ],
    variations: [
      'Silent Mafia: Eliminated players can\'t reveal their role — adds more mystery.',
      'Speed Mafia: Set a 2-minute timer for the day phase discussion to keep the pace fast.',
      'Add a "Jester" role — a player who wins if they get voted out by the town. Adds chaos.',
      'Narrated Mafia: The narrator tells a dramatic story each night ("It was a dark and stormy evening in the village...") to set the mood.'
    ],
    prompts: [],
    players: '7+',
    categories: ['characters', 'scenes'],
    aiPlayable: false,
    module: null
  },

  {
    id: 'wax-museum',
    title: 'Wax Museum',
    description: 'Players freeze as wax statues that secretly come alive when the museum curator isn\'t looking.',
    goodFor: 'Physicality, body control, stealth, awareness, ensemble play',
    energyLevel: 'Medium',
    timeEstimate: 'Medium',
    example: 'The curator (teacher) announces "Welcome to my beautiful wax museum!" and gestures proudly at the frozen statues. Each player has chosen a pose — one is mid-sneeze, one is flexing, one is reaching for something on a high shelf. The curator turns away to "polish a display case" and suddenly the statues come alive: sneaking around, switching spots, making faces. The curator spins back — everyone freezes. The curator squints suspiciously: "I could have SWORN that statue was over there..." She turns away again and chaos resumes.',
    rules: [
      'One person is the museum curator (usually the teacher or leader for the first round).',
      'Everyone else is a wax statue. Each player chooses a frozen pose and holds it.',
      'When the curator is watching, all statues must be completely still and silent.',
      'When the curator turns away or leaves the "room," statues come alive — they can move, talk, switch places, and interact.',
      'When the curator turns back, everyone must freeze instantly in whatever position they\'re in.',
      'If the curator catches anyone moving, that player is "melted" and is out.',
      'The curator can react to changes they notice ("Wait — wasn\'t there a statue here before?").',
      'Last statue standing becomes the next curator.'
    ],
    variations: [
      'Themed Museum: All statues must be from a category — sports figures, historical characters, animals, etc.',
      'Talking Statues: When alive, statues must stay in character based on their pose (the flexing statue talks like a bodybuilder, etc.).',
      'Musical Museum: Play music — statues can only move when the music plays. Curator controls the music.',
      'Guided Tour: The curator gives a "tour" describing each statue while players try not to laugh or break character.'
    ],
    prompts: [],
    players: '5+',
    categories: ['warm-ups', 'characters'],
    aiPlayable: false,
    module: null
  },

  {
    id: 'bus-driver',
    title: 'Bus Driver',
    description: 'Passengers board a bus one at a time, each with an over-the-top character — and everyone on the bus catches their personality.',
    goodFor: 'Character adoption, exaggeration, adaptability, ensemble energy, physicality',
    energyLevel: 'High',
    timeEstimate: 'Medium',
    example: 'The bus driver is cheerfully driving along. First passenger gets on: they\'re an extremely paranoid conspiracy theorist who thinks the bus is being followed. Slowly, the driver starts checking the mirrors nervously. Second passenger boards: an opera singer who communicates entirely in dramatic singing. Now the driver and the paranoid passenger are both singing about government surveillance. By the time the fourth passenger arrives — a robot — everyone on the bus is a singing, paranoid robot. Pure chaos.',
    rules: [
      'Set up chairs in two rows to represent a bus. One player starts as the bus driver.',
      'The first passenger boards the bus with a strong, exaggerated character trait (a voice, a physicality, an attitude, an obsession).',
      'The bus driver and all other passengers gradually take on that character trait.',
      'Once everyone has fully adopted the trait, a new passenger boards with a completely different character trait.',
      'Everyone on the bus — including the driver — now takes on the new trait (dropping the old one).',
      'Continue until all players have boarded the bus.',
      'Optional: after the last passenger boards, the driver announces "Last stop!" and everyone exits in character.'
    ],
    variations: [
      'Layering Version: Instead of replacing traits, each new trait adds to the previous ones. By the end, everyone has 4–5 traits stacked on top of each other.',
      'Destination Version: The driver announces a destination and everyone must act like they\'re going there ("Next stop: the moon!" or "Next stop: a haunted house!").',
      'Emotion Bus: Instead of full characters, each passenger brings a single extreme emotion.',
      'Silent Bus: Players can only use physicality and sounds — no words allowed.'
    ],
    prompts: [
      'An extremely clumsy person who keeps dropping things',
      'Someone who thinks they\'re a celebrity and everyone should recognize them',
      'A person who is terrified of speed and screams at every bump',
      'Someone who narrates everything happening around them like a nature documentary',
      'A person who can\'t stop laughing at absolutely nothing',
      'Someone who moves in slow motion and speaks very... slowly...',
      'A passenger who thinks the bus is a spaceship',
      'A very dramatic person who treats every moment like a soap opera'
    ],
    players: '5+',
    categories: ['characters', 'warm-ups'],
    aiPlayable: false,
    module: null
  }

];


/* ================================================================
   HELPER FUNCTIONS
   Used by library.html and other pages via games.js
================================================================ */

/* Filter games by category slug */
function getGamesByCategory(category) {
  if (category === 'all') return GAMES_DATA;
  if (category === 'ai') return GAMES_DATA.filter(function (g) { return g.aiPlayable; });
  return GAMES_DATA.filter(function (g) { return g.categories.includes(category); });
}

/* Get only AI-playable games */
function getAIGames() {
  return GAMES_DATA.filter(function (g) { return g.aiPlayable; });
}

/* Get a game by its id */
function getGameById(id) {
  return GAMES_DATA.find(function (g) { return g.id === id; }) || null;
}

/* Get a random AI-playable game */
function getRandomAIGame() {
  var aiGames = getAIGames();
  return aiGames[Math.floor(Math.random() * aiGames.length)];
}

/* Search games by title or description */
function searchGames(query) {
  var q = query.toLowerCase().trim();
  if (!q) return GAMES_DATA;
  return GAMES_DATA.filter(function (g) {
    return g.title.toLowerCase().includes(q) || g.description.toLowerCase().includes(q);
  });
}
