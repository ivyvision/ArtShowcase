import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import ivyLogo from "@assets/Untitled_design_1784941575772.jpeg";
import duskPhoto from "@assets/IMG_8613_1784944861332.jpeg";
import heroBg from "@assets/IMG_20260623_193409_10_186_1784945099904.jpeg";
import loreBg from "@assets/1_IMG_5010_1784945745561.jpeg";
import musicBg from "@assets/0_IMG_8612_1784945745560.jpeg";
import connectBg from "@assets/IMG_8613_1784944861332.jpeg";
import profileBg from "@assets/IMG_8611_1784947359440.jpeg";
// Generated artwork — Doré / alchemical / Memento Mori style
import reaperForest from "@assets/generated_images/reaper_forest.jpg";
import alchemicalChart from "@assets/generated_images/alchemical_chart.jpg";
import descentThreshold from "@assets/generated_images/descent_threshold.jpg";
import mementoMoriHands from "@assets/generated_images/memento_mori_hands.jpg";
import oracleWideBg from "@assets/generated_images/oracle_wide_bg.jpg";
// New relic photos
import burningPoetry from "@assets/IMG_8639_1784953364358.jpeg";
import desertFrontal from "@assets/IMG_7713_1784953364358.jpeg";
import falseProphet from "@assets/Untitled_design_1784953364358.png";
import aboveClouds from "@assets/IMG_8654_1784957576757.jpeg";
import gothicArch from "@assets/IMG_8649_1784957576757.jpeg";
import darkFlower from "@assets/IMG_8659_1784957576757.jpeg";

import { Play, FastForward, Rewind, Disc3, Radio, ArrowRight, Instagram, Twitter, Youtube, BookOpen, ChevronDown } from 'lucide-react';

// Real top tracks from IvyVision's Spotify (fetched via Spotify Web API)
const SPOTIFY_TRACKS = [
  {
    name: "SMD!",
    artist: "Saint Dillinger, T0xic Wa5te",
    album: "Executive Dysfuntion",
    albumArt: "https://i.scdn.co/image/ab67616d00001e021e48d94bcf9d6db773a02243",
    spotifyUrl: "https://open.spotify.com/track/432GGLv47k7K4pvrDafEKs",
  },
  {
    name: "Interfaith",
    artist: "Public Memory",
    album: "Wuthering Drum",
    albumArt: "https://i.scdn.co/image/ab67616d00001e028902de52822d75d8874166f1",
    spotifyUrl: "https://open.spotify.com/track/7ewt9oqi8kJX8EGeAsUbQg",
  },
  {
    name: "A wild river to take you home",
    artist: "Black Hill, Silent Island",
    album: "Tales of the night forest",
    albumArt: "https://i.scdn.co/image/ab67616d00001e02dfec08042d57781299cf8b73",
    spotifyUrl: "https://open.spotify.com/track/0UFkbnxj34vZVgwwEDy29e",
  },
  {
    name: "Circle With Me",
    artist: "Spiritbox",
    album: "Eternal Blue",
    albumArt: "https://i.scdn.co/image/ab67616d00001e023e234c82f96fa4ded8e5ca47",
    spotifyUrl: "https://open.spotify.com/track/3FI0iAAAjmR31xpZEwbdys",
  },
  {
    name: "Rainforest Bird Songs",
    artist: "Sleep Miracle",
    album: "Bird Showers",
    albumArt: "https://i.scdn.co/image/ab67616d00001e02a8abd24f8316037dbd296201",
    spotifyUrl: "https://open.spotify.com/track/14jB7OqCZ395Oopbo6kVdk",
  },
];

// Full poetry book "Estranged" by Aiyana Noelani — all 4 chapters
const CHAPTERS = [
  {
    number: 1,
    title: "Barn Swallow",
    poems: [
      {
        title: "With Petty Hands",
        lines: [
          "You've learned to harness",
          "",
          "You've sewn the seeds,",
          "Now reap the harvest.",
        ],
      },
      {
        title: "The Loss",
        lines: [
          "Your fingers hung limp,",
          "Wilted in the beating sun,",
          "Curled like a singeing paper held above a flame",
          "",
          "Your breath was caught behind your still lips,",
          "Locked away and caged, but",
          "Sifting through the hollows of your ribs in every moment",
          "",
          "Your heart was a tired bird, asleep on her perch in broad daylight.",
          "With the wild desperation of a predator, clenching and pushing,",
          "I tried to make her fly away",
          "",
          "Your lips were cold and insipid",
          "With every effort I exhaled my spirit into you",
          "",
          "Against my chest, yours felt empty.",
          "",
          "I held my breath hoping to feel yours.",
        ],
      },
      {
        title: "Inadequate",
        lines: [
          "Some things are better left untouched",
          "But incessantly, I choose curiosity",
          "Driving us deeper underground",
          "So the clarity of daylight comes and goes without us noticing",
          "",
          "How can I know which sunsets are worth watching?",
          "",
          "If I never come up",
          "Then I never have to choose",
          "If I never hope",
          "Then I never have to lose",
          "",
          "Digging in",
          "It's",
          "A meticulous process of excavation",
          "Brushing off bones with soft-bristles",
          "Heavy bones that she couldn't go on with",
          "And so, collapsing in this tundra",
          "She turned her",
          "Megafauna eyes to glimpse",
          "The last green flash on the horizon",
          "And miles of glorious fur that once shimmered in the copper sun",
          "Eroded with no encore",
          "",
          "Even with the sky before me",
          "I will always wonder",
          "What she held onto",
          "",
          "So maybe I am bad at grieving",
          "If I'd rather sort pieces of the full picture",
          "And arrange everything I've learned so far into a skeleton",
          "Instead of setting off across the plains, blindly guessing where her feet fell",
          `& Calling that "good enough"`,
          "",
          "But truly, for someone whose so against the past",
          "You hold more weight in bones than me",
          "A cranium, a frontal bone, a maxilla",
          "Placed next to each other",
          "But no mandible (so good luck saving face)",
          "It's not a bad collection",
          "They just have no connection",
          "Yet, you carry them with you",
          "Without keeping a map",
          "Without ever going back to investigate further",
          "It seems obvious—",
          "There are better ways to use your strength",
          "Than lugging around fragmented memories",
          "Without an explicit intent",
          "",
          "Still, I question all the time",
          "With all this time spent underground",
          "Am I missing the point?",
          "Will I ever experience the simple things that brought her joy?",
          "Was there truly more to offer on the surface?",
          "Or did I already overcomplicate it",
          "By ceaselessly searching in the first place?",
        ],
      },
      {
        title: "Enough?",
        lines: [
          "Haven't I done enough?",
          "",
          "Made enough issues already?",
          "",
          "I keep seeing problems",
          "But were there even any?",
          "",
          "Am I defending my honor?",
          "Waging a noble war against injustice?",
          "",
          "Or am I shadowboxing in a room with just me?",
          "",
          "Why do I always get the urge, how do I always work up the nerve",
          "To keep resisting?",
        ],
      },
      {
        title: "One More Night",
        lines: [
          "Just",
          "One more sunset, gone unseen",
          "Just",
          "One night, then another, then another",
          "On top of these untucked sheets",
          "Hesitant to stir this",
          "Settled air",
          "Summer heat",
          "Continuing to ask myself, half-heartedly,",
          "What am I allowed to keep?",
          "",
          "I find you in the marrow of ordinary things",
        ],
      },
      {
        title: "Wishful Thinking",
        lines: [
          "Clasped as twins in the damp womb of night",
          "Sifting on, you kept your eyes open",
          "I believe they were",
          "Cold as hazel mud",
          "",
          "For a glimpse, the white birch spoke",
          "Like rain-soft songs of famished past",
          "I thought I heard the wild rush of your breath once more",
          "But I was mistaken",
        ],
      },
      {
        title: "The Cage",
        lines: [
          "Behind closed doors",
          "Phantom hands crawl to inundate",
          "Blinded by need",
          "Tracing over veiled pallor",
          "",
          "In darkness",
          "Hope pools at the threshold",
          "Reaching nothing",
          "",
          "Fluttering lungs sucked dry",
          "Wasted and waning",
          "As brittle limbs fold",
          "Lamb to the slaughter",
          "",
          "Nails open skin",
          "Peeling from trembling bones",
          "When flesh is too fragile to hold you together",
          "",
          "Nails open skin",
          "With sick and pulsing lacerations",
          "Piercing presence",
          "Aching body",
          "Subdued",
        ],
      },
      {
        title: "Return",
        lines: [
          "The purple flowers along the stream",
          "",
          "Shrivel under your step",
          "",
          "The wind tearing at my hair makes it impossible to see the hillside path ahead. Soon enough the rain washes away the horizon. I am as water, rushed into the ocean with the stream.",
          "",
          "Steadfast.",
          "",
          "Our Ocean keeps breath in your lungs",
          "",
          "Against all odds, you survive.",
          "",
          "It's a fantastic world; alien and beautiful. Time is not measured here, and everything seems to be a work of art; thoughtfully assembled, priceless and unique. It's an impossible realm, yet so close to home for those who seek it…",
          "",
          "Displaced,",
          "",
          "You are carried back to shore. You wake up to the warmth of sun-dried rocks against your skin.",
          "",
          "You step onto the unfamiliar land.",
          "",
          "Everything you know, washed away…",
          "",
          "Return.",
          "",
          "Run back to the ocean, with your heart overflowing",
          "Into a River of Joy, which you can follow to your destiny.",
        ],
      },
      {
        title: "It's Getting Dark",
        lines: [
          "It's getting dark.",
          "",
          "You're shouting.",
          "Beating, denting hull",
          "",
          "I'm vacant.",
          "Bleeding, sinking vessel",
          "",
          "It's getting dark but I won't pull my anchor",
          "",
          "Instead, let's just drift here",
          "",
          "Let the water move our bodies",
          "",
          "Just let the night wash me out",
          "",
          "Soon, everything will be okay.",
        ],
      },
      {
        title: "Smother & Forget",
        lines: [
          "Claws that pry at the lockbox",
          "Subconscious fighting to push out the crumbs curdling inside",
          "Stitched and sealed into the pillow",
          "Bread mold on soft cotton; Oxidized.",
          "",
          "Close the lid of the cradle",
          "She finds the noise unbearable",
          "She keeps it shut and writes her letters",
          "Lets the room blur out of focus, sights so forgettable",
          "Breathe into nostalgia",
          "",
          "Unbearable recollections bloating and floating to resurface",
          "So she holds them under",
          "She watches them stilled and smothered",
          "While she breathes",
          "",
          "& Raggedly utters",
          "",
          `"Heal"`,
        ],
      },
      {
        title: "A Refuge Is A System",
        lines: [
          "She said she knew you once before",
          "",
          "Slighted gaze",
          "Sweetened wine",
          "",
          "Watercolor blossoms",
          "Wrapping each other like dragons",
          "As our",
          "Fifth elements",
          "Unwind",
          "",
          "Teardrop as opposed to the whole expression",
          "Me as a person being trapped in the forest vs. the force of the full forest",
          "Symbiotic in a cruel way",
          "",
          "A beautiful expression despite the dangers to me",
          "",
          "I was a baby squirrel",
          "Desperately running to a human when I found my mother dead",
          "",
          "You see?",
          "That's how the forest claims its senses",
          "There are those who fall in rhythm with the refuge",
          "Then there are those who rest on top",
          "If you stay still for long enough,",
          "The forest climbs around you",
          "Twisting the line between",
          "",
          "A refuge is a system",
          "",
          "All creatures",
          "",
          "Wrapped in roots",
        ],
      },
      {
        title: "Hide Behind",
        lines: [
          "You hide behind",
          "A stray sunray",
          "Colored by rainbow lenses",
          "Illusory is all there is",
          "Unanswered; kept inside",
          "",
          "You hide behind",
          "A pain of glass",
          "Stained by interpretations",
          "Soon to have it dawn on you",
          "There's nowhere you can hide",
          "",
          "You hide behind",
          "A veil of truth",
          "That no one else can question",
          "Lest they crash against the headlands",
          "Jutting from your mind",
          "",
          "You hide behind",
          "A puncture wound",
          "Scarred over as aggression",
          "I'm looking for a glimpse of",
          "Recognition in your eyes",
        ],
      },
      {
        title: "Like A Carcass",
        lines: [
          "Like a",
          "Carcass",
          "My",
          "Calculations",
          "Are only as good",
          "As my body lasts",
          "",
          "When I",
          "Give in",
          "To tiredness",
          "I am betraying myself",
          "By wiping clean",
          "The thoughts I'd given such importance…",
          "",
          "Why did the rat's mind evolve, but not the body?",
          "So they could long for their puphood",
          "In the jaws of the snake?",
          "",
          "Why do whales sing",
          "Not knowing if they'll get an answer?",
        ],
      },
      {
        title: "Leave",
        lines: [
          "More often I used to get struck with the need",
          "To forget everything that I know and just leave",
          "",
          "Suddenly now it has come back again",
          "Seemingly there at the fault of my friends",
          "",
          "But are they to blame? Or are they just people",
          "Living their lives unashamed and as equals",
          "",
          "Each person doing their best to get by",
          "Each looking out for their future, but I",
          "",
          "Can't see a life that I want to pursue",
          "Without taking notes and comparing with you",
          "",
          "I don't see a point to staying above water",
          "When I thought the plan was to float with each other",
          "",
          "If there's a purpose that's worthy of mention",
          "Show me right now, while I'm paying attention",
          "",
          "Trying to hold on to keep my friends safe",
          "Was somewhat effective for keeping me sane",
          "",
          "Knowing instead they perceive it as danger",
          "Means I need to understand that they're strangers",
          "",
          `I'm not gonna tell myself "I should have known"`,
          "Because there was no harm in trying to hold hope",
          "",
          "Now I just have to create a new life",
          "Without empathy for my friend's pain and strife",
          "",
          "If you live for them, they'll only resent you",
          "They'll say you should do whatever you want to",
          "",
          "But what if I just want to feel loved and rooted?",
          "I didn't realize that means I am wounded",
          "",
          "I will not beg you to tend to my wounds",
          "When things get tough, I'll step out of the room",
          "",
          "When things get tougher, I'll forget what I know",
          "Sadly, this place is no longer a home",
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Sleeping Udumbara",
    epigraph: {
      text: `"If one does not grasp the essence of existence, like the udumbara flower on a fig-tree; that bhikkhu abandons the here and the beyond, as a snake abandons its old slough."`,
      source: "Sutta Nipāta 5.14",
    },
    poems: [
      {
        title: "Hyacinth",
        lines: [
          "Find",
          "A bolder love than mine",
          "",
          "Focus your vision",
          "Through torrential downpours",
          "& Find",
          "Another silhouette",
          "Peering back at you",
          "Waiting",
          "With drenched clothes clinging to her frigid body",
          "As she fights the tremors",
          "Honing in on the distance",
          "Siphoning focus into each moment",
          "To stretch them into tactile milliseconds",
          "Anticipating, with every bit of herself",
          "When it might be safe",
          "To sprint to your embrace",
          "",
          "Find",
          "Another semblance of legacy",
          "Stay quiet",
          "Amidst the soft call of the winds",
          "To hear what the Eternal Observer",
          "Might tell you",
          "In reflection",
          "",
          "Find",
          "A way to lie to yourself",
          "To persuade your conscience",
          "That you did right by me",
          "",
          "Find",
          "Another daughter",
          "Because I've wasted the biggest fraction of my fragmented life",
          "In a state of thankless hope",
          "",
          "You were gifted",
          "The purity of a child's unconditional love",
          "And I've spent too long wondering",
          "Why",
          "You couldn't hold that",
        ],
      },
      {
        title: "Reaper",
        lines: [
          "Clenched in the gnarled fingers of the trees",
          "Bound upon a bed of thistled vines",
          "Looking up to watch the sunblaze stifle",
          "Looking up to watch the night leak from black branches",
          "The leafless lifeless reapers, desperate to absorb life",
          "I am a sacrifice to these hallows",
          "I am the compost they will drink",
          "Here, where nature's heart dried out",
          "I am the atrium to their droughted ventricles",
          "",
          "Night brings heavy mist",
          "As sclera seeping over the pupil",
          "Obstructing senses, but bearing perfect foresight",
          "Clarity to the mind's eye",
          "Awaiting the descent",
          "",
          "Listening for aberrations in the nocturnal drone",
          "Quiet; then",
          "The hunting bird's shriek pierces the muffled darkness",
          "The shrill undertone shivers through the woods",
          "Sunken to the earth",
          "Waiting for my scent to catch in the wind and carry to predators",
          "So they can eat off my stinging mangled limbs",
          "And pick their teeth with my broken bones",
        ],
      },
      {
        title: "The Last Day",
        lines: [
          "That first night",
          "Spilling blood dispersed the sky",
          "Emulsified in rabid eyes",
          "And purple fog poisoned the ones who were left alive",
          "",
          "I blinked and realized I couldn't see",
          "I listened for clearings in droning soliloquies",
          "Startled by sudden noise, chasing the silence to safety",
          "I felt my feet bounding behind and before me",
          "In skipping strides, I'm meant to flee",
          "",
          "As I ran, my senses shifted",
          "I saw the forest tinted like parchment",
          "And the scents were ink strokes on a map",
          "Each snapping twig rang like a chorus",
          "I followed the sound with bared teeth,",
          "Euphoria possessing me as I closed in",
          "In breathless exhilaration, I'm meant to feed",
          "",
          "Out of darkness, color found me",
          "Lungs of dust resounded",
          "I felt my body uncrumple, pressed to a thudding chest",
          "I was fed and held as I rested",
          "In nurturing love, I am meant to be",
          "",
          "This last day,",
          "Roaring winds move the sky like living water",
          "The air is filled with boundless love in my presence",
          "And I can see it all",
        ],
      },
      {
        title: "Dawning",
        lines: [
          "You truly are a selfish asshole",
          "",
          "At a level I've never seen before",
          "",
          "I'm mad at myself for defending you",
          "I'm mad at myself for every reason I used to convince myself of your goodness",
          "",
          "I saw God's hand in your design",
          "I saw Elysium in your eyes",
          "I saw you as a bodhisattva",
          "I envisioned helping the world with you by my side",
          "",
          "But then",
          "Like the",
          "Popping eyes of a brocket deer",
          "Who lost a long fight against",
          "The pressure of constriction,",
          "I'm left staring at empty sockets",
          "",
          "You're wretched to me now",
          "",
          "I finally realize why you can't believe you are beautiful.",
          "Because you've lied to yourself for so many years.",
        ],
      },
      {
        title: "In My Absence",
        lines: [
          "So if you ask a question",
          "And I take a ragged breath to answer",
          "But before I speak, you ask another",
          "Do I defy you, love?",
          "",
          "If we spend a day apart",
          "And you choose to hide your pain",
          "By convincing yourself life is better in my absence",
          "What intentions do you keep when we're together?",
          "",
          "If I'm such a cost to you",
          "Tell me how you're keeping score",
          "Because all that I set out to do",
          "Was offer you an equal",
          "",
          "If your love's been lost and found",
          "Tell me why it's missing now",
          "And why you tried to offer something",
          "You didn't have to give",
        ],
      },
      {
        title: "Late To Forever",
        lines: [
          "I don't even want forever",
          "If I could just keep hope alive",
          "Instead of choking the possibility at the roots",
          "That would be enough",
          "",
          "I don't know if I'd rather have",
          "The letters of a child's name",
          "Sing a song of love and rage",
          "Falling short every day",
          "Shoes filled with sands of time",
          "Heavy with self-disdain",
          "",
          "Or a garden to walk through",
          "Each summer I could show someone else",
          "The plants I've worked diligently to restore each year",
          "",
          "Or a coffin for my grandmother's dress",
          "Draped over my useless bones",
          "An expensive monument to life",
          "A flower arrangement",
          "Thrown out after the funeral",
          "",
          "Or a museum with my name on it",
          "With an exhibit for the rocks from your travels",
          "And a picture of me hung up on each wall",
          "",
          "I don't know if I'd rather",
          "Come home and see you smile",
          "Or stay gone, asleep in a guest bed",
          "Twirling a ring on the hand of a thief",
          "",
          "I don't know if I'd rather",
          "Keep my eyes open or closed",
          "I don't know if there's a point to remembering this",
        ],
      },
      {
        title: "Or Don't",
        lines: [
          "Help me or don't",
          "Love me or don't",
          "But don't lead me on",
          "Into having false hope",
        ],
      },
      {
        title: "Relentless",
        lines: [
          "Suspended in the moment between dusk and morning light,",
          "",
          "The relentless sun lies peacefully asleep under the sky.",
          "",
          "The breaking dawn leaves shadows and takes silhouettes,",
          "",
          "So that the faceless forms you painted will wake up and forget,",
          "Daylit expressions sullen with regret.",
          "",
          "The space between the striking match and its box finds the spark",
          "",
          "The flame compels a memory of flickering meadowlarks",
          "",
          "How innocent the fingertips of kids who play with fire;",
          "",
          "How swiftly the flame will burn their funeral pyre",
        ],
      },
      {
        title: "Glorified",
        lines: [
          "When the golden lion lays out in the sun",
          "She does it for the glory",
          "Her heart is hard-won",
          "",
          "I want to be your majesty, your muse, your inspiration",
          "When I don't at first have words to speak, I want you to be patient",
          "",
          "I don't need a second person to call out my limitations",
          "I want you to drink up all my thoughts",
          "And bask in the libation",
          "",
          "I'm not looking to fight",
          "I'm just looking for an equal",
          "And since the first try was in vain, I don't care to see the sequel",
        ],
      },
      {
        title: "Unneeded",
        lines: [
          "I know you didn't think of it that way",
          `But when you said, "I know how to take care of myself,"`,
          "I was left to contend with the fear that I might never be needed.",
          "",
          "Your boundaries are within reason",
          "But for some reason, when you told me you needed space",
          `I thought, "It's not my fault you're drained,`,
          `So why would you take yourself out of my life?"`,
          "",
          "That's why you can't be too kind to a girl who hasn't had anyone else to rely on; she'll start to treat you like a lifeline. Then she'll expect you to need her as much as she needs you.",
          "",
          "As we drift, the line gets pulled taut",
          "Eventually, the microfibers fray",
          "Leaving all the pressure on overstretched threads —",
          "— So I can see why that would make you snap",
          "",
          "But I don't know what you want me to do",
          "When I'm in desperate need of rescue",
          "Just holding on trying to survive",
        ],
      },
      {
        title: "Love From Beyond",
        lines: [
          "A sense of dissociation & separation from myself",
          "I used to shrink and grimace at the thought",
          "Of intimate companionship",
          "And avoid myself in the same conversation",
          "",
          "A sense of desperation",
          "I remember falling down the spiral",
          "With no one there to hold me",
          "I close my eyes & look to the sky",
          "Holding my chest in silent prayer for my younger self",
          "As the spring of heartbreak swells up",
          "Until it rushes from Anāhata like a geyser",
          "",
          "Knowing it is the source of life,",
          "I meld it to create",
          "A steady channel",
          "Of abundance",
          "Sending",
          "Love from beyond",
        ],
      },
      {
        title: "The Fields",
        lines: [
          "I wonder if you knew this place.",
          "",
          "I like to think of you living in the rolling winds,",
          "Which still seem to bend around your shape next to mine;",
          "The memory I invent when I close my eyes.",
          "",
          "The fullness of your presence hummed in my quiet mind",
          "So long ago that I forgot the feeling",
          "",
          "But each day I step out of a reticent layer of myself that keeps me separate from you,",
          "And every time, I lose a part of myself to the clarity of spirit that comes from time alone",
          "",
          "So of course I'd find you here,",
          "",
          "With everything you love",
        ],
      },
      {
        title: "A Place To Lay Your Head",
        lines: [
          "She watched the blue lace trace the water like a kite string",
          "In a faraway life, there was someone floating dead",
          "Someone whose moss-bedded fingernails once threaded through a child's thin hair",
          "Weaving pink ribbons together with dark braids",
          "",
          "A woman who held close warmth within hugging arms",
          "Now only a half-asleep smile",
          "",
          "Someday, somewhere, a mother lies sodden like a pillow in a puddle",
          "A girl curls to sleep on a sopping mattress",
          "That heavy, ugly comfort",
          "Barely wrung beneath her small body",
          "",
          "The skirt was unbearably cold",
          "And the blue lace was shredded when you tried to pull it",
          "So the pretty things died with the woman in the mud",
          "And that was that. There was no farewell song.",
          "",
          "It seems like forever ago.",
        ],
      },
      {
        title: "She Is Celestial",
        lines: [
          "She isn't the shape they know.",
          "",
          "They saw a still form against a flat night",
          "One white stroke on a canvas",
          "Poised for their pleasure",
          "They praised her beauty, sang of her seductive nature, lamented her as elusive,",
          "Embedding implications, too distant for her to hear.",
          "For a while she was safe; untouched by lust",
          "But their hands worked against her towards alluring luminescence",
          "Prospective profit or power or prowess sought in forbidden frontiers",
          "Regardless of her, they breached depths they shouldn't reach",
          "And left footprints that won't blow away",
          "",
          "That was in the light",
          "The tantalizing light she wished she could shed",
          "She wished she could curl into unlit craters and never be seen",
          "But she stayed standing, not for dignity, but for necessity",
          "Dutifully passing by, she has no choice but to move forward",
          "Stripped even of her permission to grieve, because who could be lonely in a sky full of stars?",
          "They don't know how empty it is when you are inside it",
          "They don't know what they don't see",
          "",
          "Her tears fell as stars, and he followed them to find her",
          "He was drawn into her darkness, knew it was a part of her",
          "Sought to truly know her",
          "He is pulled to her, so close in the cosmos that they feel each other's gravity",
          "He encompasses life; deep within his craters there are glowing creatures",
          "And each day she curls into him, only seen by him",
          "She can finally rest in his embrace.",
          "She sees her light in a broken reflection on his surface, and she smiles at the illumination that once betrayed her",
          "Because here together in incandescence, they worship the shadow that defines them",
          "His lips lap upon her scars, his sleeping breaths blow away the footprints",
          "Every aspect of each other is visible, and they are complete",
          "",
          "In him, she is not a shape",
          "A brush stroke",
          "A resource",
          "A nightlight",
          "",
          "In him, she is celestial.",
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Bask In My Shadow As I Fly",
    poems: [
      {
        title: "Night Nymph",
        lines: [
          "Immerse me in perfect isolation",
          "Inner light",
          "Cast away from false creation",
          "Delicate white",
          "Daylily resigned to",
          "Decay and blight",
          "",
          "Somehow both",
          "Empty yet opulent",
          "Godless & divine",
          "",
          "Cocooned in my mausoleum",
          "Elusively defined by",
          "A Flickering flame for life",
          "A Faltering faith in a perfect design",
          "Diminished",
          "Atomized",
          "",
          "Sheltered in a house that isn't mine",
          "Illusory prison of a",
          "Labyrinthian mind",
          "Unspoken fate",
          "Substrate leeched and lysed",
          "Seeds in the wind floating through",
          "Untethered time",
          "Carried underwing of",
          "The Nymph of the night",
        ],
      },
      {
        title: "The Sky",
        lines: [
          "In all the places I find myself",
          "",
          "The only thing that's always been there is the sky",
          "",
          "That's why I excitedly point out clouds to friends",
          "",
          "And silently gaze up in reverence",
          "",
          "When I'm alone",
        ],
      },
      {
        title: "Fodder",
        lines: [
          "Lay your beliefs about me like eggs in open wounds",
          "",
          "Breeding through my flesh and burrowing holes to bones",
          "",
          "Bleeding me out until I shrivel",
          "",
          "like the creatures in my windowsill",
          "",
          "bodies long expired, curled into postures of decomposure,",
          "",
          "but without soil,",
          "",
          "they are worthless.",
          "",
          "Lizards with eye sockets pecked clean",
          "Bodies erect and poised to flee",
          "Frozen in their cowardice,",
          "Displayed.",
          "",
          "The shock of paralysis and the finality of rigor mortis sink me like a stone.",
          "",
          "My lungs fill with water as the ocean helps itself to what's left of me.",
          "",
          "It trickles through my festering veins,",
          "The salt drawing out my infection.",
          "",
          "It's enough to contaminate an infinitesimal corner of the boundless sea.",
        ],
      },
      {
        title: "Tundra",
        lines: [
          "Elemental changes are",
          "Embedded in the nature of it",
          "Her eyes, softened with love",
          "Forever set on the west sky of Dryas",
          "Never saw the tundra melt",
          "",
          "Instead, she asked the Sun a question",
          "",
          "As the only Ward and Warden of her Holocene dreamscape,",
          "She follows the ebb and flow of dwindling, sparkling hope",
          "Wayfinding through starless skies",
          "With razor-sharp resolve, she wears",
          "The acquiescent beauty of surrender",
          "Alongside her bandaged pride",
          "",
          `"If I speak, would you care to know?"`,
          "",
          "Loyalty is a wordless language",
          "Patiently, she wonders",
          "If the sun rises to shine upon her",
          "Or if the moonlit mysteries",
          "Are all she has to keep",
          "",
          "Resilience grows inside her",
          "Her lungs are full of ivy",
          "She feels it undeniably with every breath —",
          "The only recognizable thing that's left of her",
          "Is",
          "Non-indigenous",
          "",
          `"Does it count?" she asks herself`,
          "(Whoever that may be)",
          "",
          "Time and time again and again, she deliberately gets lost in lingering memories",
          "Searching for more lessons in them",
          "Finding only phantom pains",
          "",
          "It's the closest guaranteed glimpse of simplicity and familiarity",
          "Like returning to the arms of an old friend",
          "",
          "The flinching stopped so long ago now",
          "",
          "Respect is the fruitless seed of blind faith.",
          "",
          "It serves",
          "Only as a trellis for the vines to claim",
          "",
          "The skeleton goes on renewing itself",
          "Even when she tells every cell in her body",
          "That she wishes time would freeze",
          "",
          "Maybe she could close the chapter",
          "If this Earth for once admitted,",
          "",
          `"You were brave,`,
          `I was cold."`,
        ],
      },
      {
        title: "Recognition & Reverence",
        lines: [
          "I am here;",
          "Face to face with you, but",
          "Glycerin coats my pores",
          "",
          "& I am just a witness.",
          "",
          `"Gift from heaven" was the invocation spoken at my birth`,
          "",
          `but "Eternal blossom" was the first`,
          "",
          "~ So meet me in this moment",
          "For exactly what it is",
          "",
          "Because I need space to grow as much as you do",
          "",
          "Sonderly,",
          "We find water",
          "When it's needed",
        ],
      },
      {
        title: "Golden Fleece",
        lines: [
          "Indecision",
          "I saw you through the eyes of a mother",
          "",
          "What was so heavy",
          "Now enlightened",
          "Heedless freedom in the form of",
          "The murder of a child",
          "",
          "Stained golden fleece",
          "Fallen to the floor",
          "",
          "Hands on a spinning wheel",
          "You had two unbroken strings",
          "Mine were frayed",
          "",
          "Either way, you were always",
          "Taking years you never had to give",
          "Thanklessly",
          "A quiet syphon",
          "",
          "You spoke like water",
          "Digging up glass vials",
          "After years of evaporation",
          "",
          "I spoke the pain of a clairvoyant",
          "Fleets of chariots & fire",
          "Poured from my mouth",
          "",
          "An equal reaction",
          "The voice of reality saying",
          `"This isn't over"`,
        ],
      },
      {
        title: "Pink",
        lines: [
          "When I die I want to be a zombie worm",
          "",
          "With my",
          "",
          "Feathers blooming out gloriously",
          "",
          "Brushing the sea floor like",
          "",
          "A paint stroke of azalea pink",
          "",
          "Standing like a well-fed flamingo",
          "",
          "Growing out of the bones of giants",
          "",
          "Pointlessly mesmerizing",
          "",
          "For no one to see",
        ],
      },
      {
        title: "Forgotten Toys",
        lines: [
          "You wonder why I'm still here",
          "",
          "Well, my dear",
          "",
          `I'm not nearly as greedy with the word "love" as you are`,
          "",
          "You and I",
          "Both see your worth",
          "And I thought I could be the bigger person",
          "And show you how trust works",
          "",
          "But I'm surely not infallible",
          "",
          "I arrived with threadbare fur & a plain felt heart, once filled with a child's dreams",
          "",
          "If you want to pull me apart, so be it",
          "",
          "You could do so easily",
          "",
          "To forgotten toys like me",
        ],
      },
      {
        title: "Better Than Human",
        lines: [
          "To be better than human,",
          "You have to stop thinking like a human",
          "You have to stop acting like a human",
          "",
          "To be better than human,",
          "You have to convince yourself that somewhere along the straight line stretching ahead through the vast horizon there is a fork in the road, and you have to take that imaginary exit to God-knows-where.",
          "You have to give fully into playing out what's least expected",
          "Just to see where it ends",
          "",
          "To be better than human, you have to fold when you should hold, lay when you're supposed to stand, run when you're supposed to stay, scream when the silence falls, panic when the lights go out, stay up all night feeling more alive than ever when there is no one around you who could bring you back to life. You have to relish in the fact that it might take weeks to find the body. You have to brood on your private life until privacy is all you have. You have to cut strong tendons & leave them hanging just to prove that you care more about proving a point than you care about living.",
          "",
          "And if you complete these protocol,",
          "If you focus on letting these habits evolve,",
          "You will successfully be",
          "Inhuman",
          "In the eyes of the outside world",
        ],
      },
      {
        title: "Indifference",
        lines: [
          "You should be begging at my feet for forgiveness for what you said",
          "",
          "Your indifference to me reared its ugly head",
          "",
          "And now that I've seen it, I can't unsee it",
          "",
          "So I'm revoking your privilege to witness my life",
          "",
          "As I forge my way forward, resilient and remarkable",
        ],
      },
      {
        title: "Something I've Stopped Believing In",
        lines: [
          "In little creeks on wooded walks, I saw the sky's reflection",
          "I've seen you seeing yourself, glinting in my eye's reflection.",
          "",
          "Sprigs o' water hyacinths, outstretched to swaying canopies",
          "Sunlight upon me, Epidermal flinch; A flight reflection.",
          "",
          "Dissipated out of sight, a fleeting commemorative blaze…",
          "Clouds will only show themselves while holding the Light's reflection.",
          "",
          "Of heaven, of the Earth, is there any other origin?",
          "Is it true, the space between, grows thin in divine reflection?",
          "",
          "My palms will match the lamina, my Goldenessent presence",
          "Here I am, material, but preferring my reflection.",
          "",
          "From this perspective, I'd have gambled I would float above it",
          "Wisdom's weight grounds me down with logic, in untimed reflection.",
          "",
          "Brown eyes fixed upon me like I was from a different planet",
          `That's a good question; Do I have a "self" outside reflection?`,
          "",
          "Regardless, Snowdrops accommodate ice that grows within them",
          "Inside Eternal blossom lies a crystallized reflection",
        ],
      },
      {
        title: "Starlight",
        lines: [
          "Into the night",
          "Immersed in space & removed from time",
          "Held breath",
          "Tranquil sigh",
          "Glimpse of obsidian & stars shimmering white",
          "Held in place by the expansive divine",
          "At peace within the",
          "Embrace of the sky",
        ],
      },
      {
        title: "Landscape",
        lines: [
          "As snow absorbs the ashes, awakened conscience falters",
          "Underneath, true nature waits",
          "Exposed to air, ice melts away",
          "",
          "Growing forest to reclaim,",
          "Where you can live with your pain",
        ],
      },
      {
        title: "Wholeness",
        lines: [
          "The trees forget their individuality",
          "And join with the horizon into a single organism,",
          "Drawing millions of breaths as one",
          "With the power to pull the wind out of the valley",
          "And the air out of my sun-gold body",
          "Until it is impossible to hold on to the Self",
          "So I become a silhouette",
          "And join the trees in the skyline",
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Picking Through Devoured Petals",
    epigraph: {
      text: `"Do not forever with thy vailèd lids seek for thy noble father in the dust. Thou know'st 'tis common. All that lives must die, passing through nature to eternity."`,
      source: "Hamlet 1.2 72–75",
    },
    poems: [
      {
        title: "Eternal",
        lines: [
          "I truly believe this is heaven to another world",
          "Each life is a process of molting",
          "One day we will fill every place that's been touched by our love",
          "And I'd like to span across the sky",
        ],
      },
      {
        title: "Cypsela Lips",
        lines: [
          "When we were weightless",
          "Twirling like maple seeds",
          "Windswept",
          "Adrift; far away from our parent tree",
          "",
          "I slept on your chest",
          "& listened. Every",
          "Steady inhale lifted me",
          "On gentle moon tides",
          "Into gentle sleep",
          "",
          "Even when the cloudy daylight faded in,",
          "I went on dreaming",
          "",
          "I dreamt that",
          "We could cherish this",
          "Unchangingly",
          "Yet",
          "I understand, my Golden love",
          "Your breath ~",
          "Could not be mine to keep",
          "",
          "When your lips",
          "Depart from mine",
          "It's like I've kissed",
          "A dandelion",
          "",
          "Softly as cypsela",
          "Wherever the wind carries you;",
          "That is where you'll be",
          "",
          "Honeybee,",
          "I seek for yellow efflorescent ground",
          "Wherever you have walked, my darling",
          "Wildflowers abound",
        ],
      },
      {
        title: "Araphel",
        lines: [
          "A tattered silhouette amid the dying light of day,",
          "She sways.",
          "Shaken by the winds which carry seeds to desolate lands",
          "Who find solace in the silence",
          "And bloom amidst the decay",
          "",
          "She, The Christmas Rose,",
          "Choked beneath the snow which once drifted delicately upon her petals",
          "With the softest touch, and the coldest kiss,",
          "So that she might glisten in the light",
          "",
          "She stays",
          "Because the snow shines like a sea of stars,",
          "And she is warmed by the memory of the burning, living light.",
        ],
      },
      {
        title: "Blame",
        lines: [
          "Yes, I'm grieving",
          "But it's not the grief you know",
          "It's the kind that winds into your brain and binds at the edge of the skull",
          "The kind that bats at the wind and hollows a space in your throat",
          "Where a shout would have formed if it was relevant anymore",
          "",
          "Thinking about all of the times I pushed forward",
          "With my half-complete ideas, but what did I know?",
          "Wondering why you believed in me so deeply",
          "That you were willing to give your life to me",
          "",
          "And with both of our life force within me, I'm still standing",
          "",
          "But this wasn't at all how I planned it",
        ],
      },
      {
        title: "You Said You Loved Me In A Dream",
        lines: [
          "I want to be known & cherished",
          "",
          "Like everybody does",
          "",
          "I thought I saw a gleam of promise",
          "",
          "A light so pure it'd never falter",
          "",
          "From shining on me with love",
          "",
          "But desire fades, my angel",
          "",
          "That's why I always tried to ask you",
          "",
          "If what I am",
          "",
          "Is enough",
          "",
          "I can keep my eyes ahead",
          "",
          "But it's so hard to let go when",
          "",
          "Last night you said you loved me in a dream",
        ],
      },
      {
        title: "All I Have",
        lines: [
          "All the tears I've cried for you",
          "Have fallen in an ocean",
          "",
          "Every careful word I speak",
          "Is falling on deaf ears",
          "",
          "If only I could reach you now",
          "I'd soften you with closeness",
          "",
          "Your heart's an empty bottle cast",
          "Lost to the tides, my dear",
        ],
      },
      {
        title: "August",
        lines: [
          "Dahlia unfolds",
          "",
          "Soul bleeds from her bodice",
          "",
          "Cascading through limp fingers",
          "",
          "Riveted glacier eyes, lighting-split",
          "Dripping noir skies",
          "",
          "Crystal-cold teardrops on her lip",
          "Undulating dew, turgid scry",
          "",
          "Her portrait cast in",
          "Ivory oil and",
          "Heavy charcoal smudged",
          "where opaline skin caves",
          "",
          "… Dovewings graced with a small silver chain",
          "",
          "Trace to her August locket,",
          "",
          "Ember of",
          "Kindled Esse",
          "Within",
        ],
      },
      {
        title: "Silence",
        lines: [
          "Passing clouds, carry",
          "me to ancient lands, where the",
          "Earth is still and free",
          "",
          "Where, in my silence,",
          "I find purity and peace.",
          "That is where I rest",
        ],
      },
      {
        title: "Sunglow",
        lines: [
          "She walks with sunglow in her wake.",
          "I am the moon, falling forever into her reflection",
          "",
          "She rushes into the Earth as lifeblood through healing wounds.",
          "I am the canyon, filled as she floods the carapace of my consciousness",
          "",
          "She is elusive, sensed but never held.",
          "I reside in the winds which caress her immortal skin.",
          "",
          "My musings drift as petals onto her surface",
          "",
          "And ripple across the still waters of time",
        ],
      },
      {
        title: "Viento",
        lines: [
          "Like birdsong on a windy morning,",
          "If she speaks, you should listen closely",
          "",
          "A curve of full and gentle lips",
          "Like sunlight on an autumn day",
          "Drifting through the falling leaves",
          "Gracing Earth soft-spokenly",
          "",
          "As the forest resigns to be adorned in glimmering crystal frost",
          "A chrysalis keeps safe inside the final drops of summer",
          "",
          "So when it starts to open,",
          "Listen to her heart",
          "Or else you might miss",
          "The most beautiful thing in the breeze…",
        ],
      },
      {
        title: "Mending",
        lines: [
          "No matter how cautiously the needle pulls",
          "It still stabs when mending",
          "",
          "In my box, I have",
          "A spool wrapped with memories",
          "(Following the coil into a spiral)",
          "A pin cushion",
          "(To impale guiltlessly without consequence)",
          "A thimble",
          "(Which I never use, because I'd risk bleeding before I inhibit myself from feeling)",
          "",
          "The thread is what I am made of",
          "Like it or not",
          "Even if it is strong in some spots, weak in others",
          "Who would think it is wise to throw out the whole spool",
          "That many hands worked to create?",
          "",
          "Tears can be mended",
          "As long as there are memories",
          "Stabbed into the fabric of my being",
        ],
      },
      {
        title: "Almost Strangers",
        lines: [
          "I didn't realize",
          "How familiar you were",
          "Until I didn't see you",
          "On that cloudy morning",
          "Lugging my bag of bones",
          "Across the river to the old café",
          "I stumbled on one August day",
          "And habitually incorporated my",
          "Daily vanilla oat milk latte",
          "But more than that, there was you",
          "Monday - Thursday",
          "That same warm smile",
          "On a freckled face",
          "Chatting as you scribbled my name",
          "A simple understanding exchanged",
          "Since I always ordered the same thing",
          "So deftly, your hands worked and made",
          "This treat I once looked forward to",
          "But now that you've moved on, I realized",
          "Maybe what I looked forward to more than anything",
          "Was seeing you",
        ],
      },
      {
        title: "Unspoken",
        lines: [
          "Origins of life dripping down stones of time",
          "The soul force of this forest —",
          "An elemental match to mine",
          "",
          "Thousands of years worth of time spent alone",
          "Sunsets went unwitnessed;",
          "So many stories were left untold",
          "",
          "Until we arrive like the Udumbara flower",
          "Bringing gifts of love and light",
          "Astonished by your power",
          "",
          "We give thanks to Land, Water, and Sky",
          "For holding us here",
          "And providing our lives",
        ],
      },
      {
        title: "Nothing Lasts Forever",
        lines: [
          "It's true that nothing lasts forever",
          "But some things are worth",
          "Trying to hold onto",
        ],
      },
    ],
  },
] as const;

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`relative min-h-[100dvh] flex flex-col justify-center py-24 ${className}`}>
    {children}
  </section>
);

const VineDecoration = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 400" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`absolute pointer-events-none opacity-20 text-primary ${className}`}
  >
    <path d="M50 0 C 80 50, 20 100, 50 150 C 80 200, 20 250, 50 300 C 80 350, 20 400, 50 400" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="65" cy="40" r="3" fill="currentColor" className="animate-pulse" />
    <circle cx="30" cy="120" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1s' }} />
    <circle cx="70" cy="220" r="2.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '2s' }} />
    <circle cx="35" cy="320" r="5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
    <path d="M50 150 Q 70 140 80 160" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M50 250 Q 30 240 20 260" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

// ── Sacred Geometry SVG Components ─────────────────────────────────
const FLOWER_CENTERS: [number,number][] = [
  [100,100],[100,60],[134.64,80],[134.64,120],[100,140],[65.36,120],[65.36,80],
];

const FlowerOfLife = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {FLOWER_CENTERS.map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="40" stroke="currentColor" strokeWidth="0.5" />
    ))}
    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.3" />
  </svg>
);

const MetatronsCube = ({ className = "" }: { className?: string }) => {
  const pairs: [number,number][] = [];
  for (let i = 0; i < FLOWER_CENTERS.length; i++)
    for (let j = i+1; j < FLOWER_CENTERS.length; j++)
      pairs.push([i,j]);
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {pairs.map(([i,j],k) => (
        <line key={k}
          x1={FLOWER_CENTERS[i][0]} y1={FLOWER_CENTERS[i][1]}
          x2={FLOWER_CENTERS[j][0]} y2={FLOWER_CENTERS[j][1]}
          stroke="currentColor" strokeWidth="0.4" />
      ))}
      {FLOWER_CENTERS.map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="40" stroke="currentColor" strokeWidth="0.4" />
      ))}
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.3" />
    </svg>
  );
};

const SacredEye = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.4" />
    <polygon points="100,18 188,168 12,168" stroke="currentColor" strokeWidth="0.7" />
    <ellipse cx="100" cy="108" rx="46" ry="30" stroke="currentColor" strokeWidth="0.7" />
    <circle cx="100" cy="108" r="14" stroke="currentColor" strokeWidth="0.7" />
    <circle cx="100" cy="108" r="6" fill="currentColor" opacity="0.35" />
    {Array.from({length:16},(_,i)=>{
      const a=(i*22.5-90)*Math.PI/180;
      return <line key={i}
        x1={100+88*Math.cos(a)} y1={100+88*Math.sin(a)}
        x2={100+96*Math.cos(a)} y2={100+96*Math.sin(a)}
        stroke="currentColor" strokeWidth="0.5"/>;
    })}
  </svg>
);

const VesicaPiscis = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="110" cy="100" r="80" stroke="currentColor" strokeWidth="0.6" />
    <circle cx="190" cy="100" r="80" stroke="currentColor" strokeWidth="0.6" />
  </svg>
);

const DuskDivider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <div ref={ref} className="relative w-full h-[70vh] overflow-hidden">
      {/* Parallax photo */}
      <motion.div style={{ y }} className="absolute inset-[-10%] will-change-transform">
        <img
          src={duskPhoto}
          alt="Dusk — crescent moon over ocean"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      {/* Ambient colour overlay — teal tint to bridge the two palettes */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-[hsl(175_100%_10%/0.3)] pointer-events-none z-10 mix-blend-multiply" />

      {/* Moon-glow orb centred on the real crescent in the photo */}
      <div className="absolute top-[28%] left-[42%] w-24 h-24 rounded-full pointer-events-none z-20"
        style={{ background: "radial-gradient(circle, hsl(210 20% 92% / 0.22) 0%, transparent 70%)", filter: "blur(8px)" }} />

      {/* Quote overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-2xl md:text-3xl text-white/90 max-w-xl leading-relaxed drop-shadow-[0_2px_24px_rgba(0,0,0,0.9)]"
          style={{ textShadow: "0 0 40px hsl(25 90% 48% / 0.35), 0 2px 8px rgba(0,0,0,0.8)" }}
        >
          "It's true that nothing lasts forever —<br />
          but some things are worth{" "}
          <span style={{ color: "hsl(25 90% 65%)" }}>trying to hold onto."</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-mono text-xs tracking-[0.4em] uppercase mt-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          style={{ color: "hsl(25 90% 65% / 0.7)" }}
        >
          Nothing Lasts Forever — Estranged
        </motion.p>
      </div>
    </div>
  );
};

const FrequenciesSection = () => {
  const [active, setActive] = useState(0);
  const track = SPOTIFY_TRACKS[active];

  return (
    <section className="z-10 relative bg-background/50 backdrop-blur-3xl border-y border-white/5 py-32 overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-serif text-glow mb-4 flex items-center gap-6">
            Frequencies
            <Disc3 className="w-10 h-10 text-primary animate-spin" style={{ animationDuration: '4s' }} />
          </h2>
          <p className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest mb-16">
            All-time top tracks · via Spotify
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Featured album art card */}
          <FadeIn delay={0.2} className="lg:col-span-5">
            <motion.a
              key={active}
              href={track.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-3xl p-8 relative overflow-hidden group block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="aspect-square rounded-2xl overflow-hidden mb-8 shadow-2xl relative">
                  <img
                    src={track.albumArt}
                    alt={track.album}
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="font-mono text-xs text-primary uppercase tracking-widest flex items-center gap-2">
                      <Play className="w-3 h-3 fill-current" /> Open on Spotify
                    </span>
                  </div>
                </div>
                <h4 className="text-2xl font-serif font-bold text-foreground truncate">{track.name}</h4>
                <p className="text-primary font-mono text-sm tracking-widest mt-1 truncate">{track.artist}</p>
                <p className="text-muted-foreground/50 font-mono text-xs mt-1 truncate">{track.album}</p>
              </div>
            </motion.a>
          </FadeIn>

          {/* Tracklist */}
          <FadeIn delay={0.4} className="lg:col-span-7">
            <div className="space-y-2">
              {SPOTIFY_TRACKS.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left group ${
                    active === i
                      ? "bg-primary/10 border border-primary/30 text-primary"
                      : "hover:bg-white/5 text-muted-foreground hover:text-foreground border border-transparent"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <img src={t.albumArt} alt={t.album} className="w-full h-full object-cover" />
                    {active === i && (
                      <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                        <Disc3 className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: '2s' }} />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-base truncate">{t.name}</p>
                    <p className="font-mono text-xs opacity-60 truncate mt-0.5">{t.artist}</p>
                  </div>
                  <span className="font-mono text-xs opacity-30 group-hover:opacity-70 transition-opacity flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </button>
              ))}
            </div>

            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-secondary hover:text-secondary-foreground font-mono tracking-widest text-sm uppercase transition-colors group"
            >
              Open Spotify
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const PoetryArchive = () => {
  const [openChapter, setOpenChapter] = useState(0);
  const [active, setActive] = useState<{ ch: number; idx: number }>({ ch: 0, idx: 0 });

  const chapter = CHAPTERS[active.ch];
  const poem = chapter.poems[active.idx];

  // flat list for prev/next navigation
  const allPoems = CHAPTERS.flatMap((ch, ci) => ch.poems.map((p, pi) => ({ ch: ci, idx: pi })));
  const flatPos = allPoems.findIndex(x => x.ch === active.ch && x.idx === active.idx);

  const goPrev = () => {
    const prev = allPoems[(flatPos - 1 + allPoems.length) % allPoems.length];
    setActive(prev);
    setOpenChapter(prev.ch);
  };
  const goNext = () => {
    const next = allPoems[(flatPos + 1) % allPoems.length];
    setActive(next);
    setOpenChapter(next.ch);
  };

  return (
    <section className="relative z-10 py-24 bg-background overflow-hidden">
      <VineDecoration className="top-0 right-0 h-full w-24 text-primary opacity-10" />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="font-mono text-primary text-sm uppercase tracking-widest">Estranged — Poetry Archive</span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-start">
          {/* Chapter / poem selector */}
          <FadeIn>
            <nav className="flex flex-col" aria-label="Poetry chapters">
              {CHAPTERS.map((ch, ci) => {
                const isOpen = openChapter === ci;
                const hasActive = active.ch === ci;
                return (
                  <div key={ci} className="border-b border-primary/10 last:border-0">
                    {/* Chapter header */}
                    <button
                      onClick={() => setOpenChapter(isOpen ? -1 : ci)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors duration-200 group ${hasActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
                        {ch.number}. {ch.title}
                      </span>
                      <ChevronDown className={`w-3 h-3 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${hasActive ? 'text-primary/60' : 'text-muted-foreground/40'}`} />
                    </button>

                    {/* Poem list — shown when chapter open */}
                    {isOpen && (
                      <div className="flex flex-col pb-2 pl-2">
                        {ch.poems.map((p, pi) => {
                          const isActive = active.ch === ci && active.idx === pi;
                          return (
                            <button
                              key={pi}
                              onClick={() => setActive({ ch: ci, idx: pi })}
                              className={`text-left px-4 py-2 font-serif text-base transition-all duration-200 rounded ${
                                isActive
                                  ? 'bg-primary/10 text-primary text-glow border-l-2 border-primary'
                                  : 'text-muted-foreground/70 hover:text-foreground hover:bg-white/5 border-l-2 border-transparent'
                              }`}
                            >
                              {p.title}
                              {'excerpt' in p && p.excerpt && (
                                <span className="block font-mono text-[9px] tracking-widest uppercase mt-0.5 opacity-40">excerpt</span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </FadeIn>

          {/* Poem display */}
          <motion.div
            key={`${active.ch}-${active.idx}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-2xl p-10 md:p-14 relative overflow-hidden min-h-[340px]"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Chapter label */}
            <p className="font-mono text-[9px] tracking-[0.4em] text-primary/35 uppercase mb-3">
              Chapter {chapter.number} · {chapter.title}
            </p>

            {/* Epigraph if first poem of a chapter that has one */}
            {'epigraph' in chapter && chapter.epigraph && active.idx === 0 && (
              <div className="mb-8 pl-4 border-l border-primary/20">
                <p className="font-serif text-sm text-muted-foreground/50 italic leading-relaxed">{chapter.epigraph.text}</p>
                <p className="font-mono text-[9px] tracking-widest text-primary/25 uppercase mt-2">{chapter.epigraph.source}</p>
              </div>
            )}

            <h3 className="font-serif text-3xl md:text-4xl text-glow mb-10">{poem.title}</h3>
            <div className="space-y-1">
              {poem.lines.map((line, i) =>
                line === '' ? (
                  <div key={i} className="h-4" />
                ) : (
                  <p key={i} className="font-serif text-lg md:text-xl text-foreground/85 leading-relaxed">
                    {line}
                  </p>
                )
              )}
            </div>
            {'excerpt' in poem && poem.excerpt && (
              <p className="font-mono text-xs text-muted-foreground/40 uppercase tracking-widest mt-10">— excerpt</p>
            )}
            <p className="font-mono text-xs text-primary/30 uppercase tracking-widest mt-4">
              Aiyana Noelani — <em>Estranged</em>
            </p>

            {/* Navigation */}
            <div className="flex gap-3 mt-10">
              <button
                onClick={goPrev}
                className="p-3 rounded-full border border-white/10 hover:border-primary/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                aria-label="Previous poem"
              >
                <Rewind className="w-4 h-4" />
              </button>
              <button
                onClick={goNext}
                className="p-3 rounded-full border border-white/10 hover:border-primary/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                aria-label="Next poem"
              >
                <FastForward className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── Poetry Scroll — one panel per photo ── */
const PoetryPanel = ({
  img, alt, align, lines, source, focal = "center", valign = "center",
}: {
  img: string; alt: string; align: "left" | "center" | "right";
  lines: string[]; source: string; focal?: string; valign?: "top" | "center" | "bottom";
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoY   = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const textY    = useTransform(scrollYProgress, [0, 1], ["6%",  "-6%"]);
  const opacity  = useTransform(scrollYProgress, [0.1, 0.28, 0.72, 0.9], [0, 1, 1, 0]);

  const alignClass = align === "left"
    ? "items-start text-left pl-8 md:pl-24"
    : align === "right"
    ? "items-end text-right pr-8 md:pr-24"
    : "items-center text-center";

  const justifyClass = valign === "top" ? "justify-start pt-16" : valign === "bottom" ? "justify-end pb-16" : "justify-center";

  return (
    <div ref={ref} className="relative w-full h-screen overflow-hidden">
      {/* Parallax photo */}
      <motion.div style={{ y: photoY }} className="absolute inset-[-12%] will-change-transform">
        <img src={img} alt={alt} className="w-full h-full object-cover" style={{ objectPosition: focal }} />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-background/60 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-[hsl(22_60%_5%/0.35)] mix-blend-multiply pointer-events-none z-10" />
      {/* Vignette edges */}
      <div className="absolute inset-0 pointer-events-none z-10"
        style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 40%, hsl(22 55% 3% / 0.7) 100%)" }} />

      {/* Poem text — drifts opposite to photo */}
      <motion.div
        style={{ opacity, y: textY }}
        className={`absolute inset-0 z-20 flex flex-col ${justifyClass} gap-4 px-4 ${alignClass}`}
      >
        {/* Source label */}
        <span className="font-mono text-[10px] tracking-[0.5em] text-primary/40 uppercase mb-2">{source}</span>

        {/* Lines */}
        {lines.map((line, i) =>
          line === "" ? (
            <div key={i} className="h-4" />
          ) : (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-2xl md:text-4xl lg:text-5xl text-foreground/95 text-glow leading-tight max-w-2xl"
            >
              {line}
            </motion.p>
          )
        )}

        {/* Gold rule beneath */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: lines.length * 0.12 + 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`h-[1px] w-24 bg-gradient-to-r from-primary/60 to-transparent mt-4 origin-left ${align === "right" ? "origin-right rotate-180" : align === "center" ? "mx-auto" : ""}`}
        />
      </motion.div>
    </div>
  );
};

const PoetryScrollSection = () => (
  <section className="z-10 relative">
    <PoetryPanel
      img={loreBg}      alt="Night — red dress"   align="left"   focal="center top" valign="top"
      source="Reaper · Estranged"
      lines={[
        "Looking up to watch",
        "the night leak from black branches",
        "",
        "The leafless lifeless reapers,",
        "desperate to absorb life",
      ]}
    />
    <PoetryPanel
      img={desertFrontal} alt="Desert — golden hour"  align="center" focal="center 30%"
      source="Starlight · Estranged"
      lines={[
        "Into the night",
        "Immersed in space",
        "& removed from time",
        "",
        "Glimpse of obsidian",
        "& stars shimmering white",
      ]}
    />
    <PoetryPanel
      img={gothicArch}  alt="Gothic arch — silhouette" align="left"  focal="center top"
      source="Wholeness · Estranged"
      lines={[
        "Until it is impossible",
        "to hold on to the Self",
        "",
        "So I become a silhouette",
        "And join the trees",
        "in the skyline",
      ]}
    />
    <PoetryPanel
      img={burningPoetry} alt="Burning paper — candle" align="right" focal="center"
      source="Landscape · Estranged"
      lines={[
        "As snow absorbs the ashes,",
        "awakened conscience falters",
        "",
        "Underneath,",
        "true nature waits",
      ]}
    />
    <PoetryPanel
      img={falseProphet} alt="Brick wall — portrait"  align="center" focal="center 20%"
      source="Indifference · Estranged"
      lines={[
        "So I'm revoking your privilege",
        "to witness my life",
        "",
        "As I forge my way forward,",
        "resilient and remarkable",
      ]}
    />
    <PoetryPanel
      img={aboveClouds} alt="Above the clouds"       align="left"   focal="center"
      source="Starlight · Estranged"
      lines={[
        "Held in place",
        "by the expansive divine",
        "",
        "At peace within the",
        "Embrace of the sky",
      ]}
    />
    <PoetryPanel
      img={darkFlower}  alt="Dark figure — pink flower" align="right" focal="center 15%"
      source="Reaper · Estranged"
      lines={[
        "Clenched in the gnarled",
        "fingers of the trees",
        "",
        "Bound upon a bed",
        "of thistled vines",
      ]}
    />
  </section>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative w-full bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* SVG chroma-key filter — makes logo JPEG black bg truly transparent via luminance→alpha */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <filter id="ivy-logo-chroma" colorInterpolationFilters="sRGB">
            {/* A' = 3R + 3G + 3B - 1·A  →  black(0,0,0)→A=−1→0, any bright pixel→A>0 */}
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  3 3 3 -1 0" />
          </filter>
        </defs>
      </svg>
      <div className="bg-noise" />

      {/* Hero Section */}
      <Section className="overflow-hidden items-center justify-center p-0 m-0">
        {/* Parallax photo */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY, opacity: heroOpacity }}>
          <img src={heroBg} alt="Ancient desert sage" className="w-full h-full object-cover object-center opacity-55" />
          {/* Warm sepia grade */}
          <div className="absolute inset-0 bg-[hsl(28_60%_12%/0.55)] mix-blend-multiply z-10" />
          {/* Bottom fade to background */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/70 to-transparent z-10" />
        </motion.div>

        {/* Flower of Life — large, slowly rotating behind logo */}
        <div className="absolute inset-0 flex items-center justify-center z-[8] pointer-events-none">
          <FlowerOfLife className="w-[600px] h-[600px] text-primary opacity-[0.06] animate-spin-slow sacred-glow" />
        </div>

        {/* Edge-only vignette — keep center bright so screen-blend erases the black JPEG bg */}
        <div className="absolute inset-0 z-[9] pointer-events-none"
          style={{ background: "radial-gradient(ellipse 72% 68% at 50% 48%, transparent 35%, rgba(8,4,2,0.65) 80%, rgba(8,4,2,0.92) 100%)" }} />

        <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full max-w-xl animate-float"
          >
            <div className="logo-container animate-bio-pulse">
              <img src={ivyLogo} alt="IvyVision Logo" className="logo-blend" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex items-center gap-4 mt-4"
          >
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="font-mono text-[10px] tracking-[0.5em] text-primary/60 uppercase text-center">obsidian & stars<br/>the expansive divine</span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="absolute bottom-12 flex flex-col items-center gap-4 text-primary/60"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-mono">Awaiting the descent</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent" />
          </motion.div>
        </div>
      </Section>

      {/* Portal / Intro */}
      <Section className="z-10 bg-swirl bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
        {/* Descent engraving — right edge, fading in */}
        <div className="absolute right-0 top-0 h-full w-[45%] pointer-events-none z-0 opacity-20 mix-blend-luminosity">
          <img src={descentThreshold} alt="" className="h-full w-full object-cover object-left" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        </div>
        <VineDecoration className="top-0 left-0 h-full w-32 -translate-x-1/2" />
        <VineDecoration className="bottom-0 right-0 h-full w-32 translate-x-1/2 rotate-180" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
          
          <FadeIn>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-glow mb-8 leading-tight">
              Into the night, <br className="hidden md:block"/>
              immersed in space{" "}<br className="hidden md:block"/>
              & removed from time.
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="flex flex-col md:flex-row gap-12 items-start mt-12">
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-xl">
                The trees forget their individuality and join with the horizon into a single organism, drawing millions of breaths as one — with the power to pull the wind out of the valley, and the air out of my sun-gold body.
              </p>
              
              <div className="flex-1 w-full glass-panel p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <h3 className="font-mono text-primary text-sm uppercase tracking-widest mb-4">Latest Transmission</h3>
                <p className="font-serif text-2xl italic text-foreground/90 leading-relaxed">
                  "So I'm revoking your privilege to witness my life —
                  as I forge my way forward, resilient and remarkable."
                </p>
                <p className="font-mono text-xs text-primary/40 uppercase tracking-widest mt-6">— Indifference, <em>Estranged</em></p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Oracle / Lore — cinematic wide frame */}
      <section className="z-10 bg-background overflow-hidden relative py-20">
        {/* Alchemical chart watermark — bleeds behind the frame */}
        <div className="absolute left-0 top-0 h-full w-[30%] pointer-events-none z-0 opacity-10 mix-blend-luminosity">
          <img src={alchemicalChart} alt="" className="h-full w-full object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background" />
        </div>
        <MetatronsCube className="absolute inset-0 m-auto w-[600px] h-[600px] text-primary opacity-[0.03] sacred-glow pointer-events-none" />

        <div className="w-full px-4 md:px-10 relative z-10">
          {/* Section label */}
          <FadeIn>
            <div className="flex items-center gap-4 mb-8 max-w-7xl mx-auto">
              <div className="w-10 h-[1px] bg-primary/60" />
              <span className="text-primary/80 font-mono tracking-[0.35em] uppercase text-xs">The Oracle</span>
            </div>
          </FadeIn>

          {/* ── CINEMATIC FRAME ── */}
          <FadeIn delay={0.1}>
            <div className="relative w-full archive-frame" style={{ aspectRatio: "21/9" }}>
              {/* Shadow plate */}
              <div className="absolute inset-0 translate-x-3 translate-y-4 bg-black/70 pointer-events-none" />

              {/* Composite: wide generated bg + original photo feathered in at center */}
              <div className="relative w-full h-full bg-[hsl(22_55%_4%)] overflow-hidden border border-primary/25">
                {/* Wide desert background fills the full frame */}
                <img
                  src={oracleWideBg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Warm grade over background */}
                <div className="absolute inset-0 bg-[hsl(28_60%_10%/0.35)] mix-blend-multiply pointer-events-none" />
                {/* Original portrait — centered, edges masked to blend into background */}
                <img
                  src={profileBg}
                  alt="Oracle — golden hour desert"
                  className="absolute inset-0 w-full h-full object-contain"
                  style={{
                    objectPosition: "center",
                    maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
                  }}
                />

                {/* Cinematic sepia grade */}
                <div className="absolute inset-0 bg-[hsl(28_60%_12%/0.3)] mix-blend-multiply pointer-events-none" />
                {/* Side fades so it melts into page */}
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />

                {/* Corner registration marks */}
                {([["top-3 left-3","border-t border-l"],["top-3 right-3","border-t border-r"],["bottom-3 left-3","border-b border-l"],["bottom-3 right-3","border-b border-r"]] as const).map(([pos, border], i) => (
                  <div key={i} className={`absolute ${pos} w-5 h-5 border-primary/60 ${border} pointer-events-none`} />
                ))}

                {/* Archive label — bottom left */}
                <div className="absolute bottom-4 left-5 pointer-events-none">
                  <div className="font-mono text-[10px] tracking-[0.45em] text-primary/60 uppercase">Oracle Archives · Vol. I</div>
                </div>

                {/* Quote overlaid bottom right */}
                <div className="absolute bottom-4 right-5 text-right pointer-events-none max-w-sm">
                  <p className="font-serif text-lg md:text-xl text-foreground/80 italic leading-snug"
                    style={{ textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}>
                    "Held in place by the expansive divine."
                  </p>
                  <p className="font-mono text-[9px] tracking-widest text-primary/40 uppercase mt-1">Starlight — Estranged</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Text below the frame */}
          <div className="max-w-4xl mx-auto mt-14 px-2">
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-serif text-glow mb-8 leading-[0.95]">
                I become a silhouette{" "}<br className="hidden md:block"/>& join the skyline.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 text-base text-muted-foreground/80 font-light leading-relaxed border-l border-primary/20 pl-6">
                  <p>As snow absorbs the ashes, awakened conscience falters. Underneath, true nature waits — exposed to air, ice melts away.</p>
                  <p>Night brings heavy mist. Obstructing senses, but bearing perfect foresight. Clarity to the mind's eye.</p>
                </div>
                <div className="flex items-start gap-4 pl-6 md:pl-0">
                  <SacredEye className="w-12 h-12 text-primary/35 sacred-glow flex-shrink-0 mt-1" />
                  <VesicaPiscis className="w-40 text-primary/15 sacred-glow self-center" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Poetry Centerpiece — "Reaper" excerpt */}
      <Section className="z-10 py-32 relative overflow-hidden bg-background">
        {/* Reaper forest engraving — full bleed background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img src={reaperForest} alt="" className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        </div>
        <VineDecoration className="top-20 left-10 h-[600px] w-48 text-secondary" />
        <VineDecoration className="bottom-20 right-10 h-[600px] w-48 text-secondary rotate-180" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
          <FadeIn>
            <Radio className="w-8 h-8 text-secondary mx-auto mb-8 opacity-50" />
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mb-12 text-transparent bg-clip-text bg-gradient-to-br from-[hsl(25_90%_75%)] via-primary to-secondary drop-shadow-[0_0_15px_rgba(0,229,209,0.3)] italic">
              <span className="not-italic opacity-40 text-3xl block mb-6 font-mono tracking-widest lowercase text-white/40 drop-shadow-none">"</span>
              Clenched in the gnarled fingers of the trees,<br/>
              bound upon a bed of thistled vines —<br/>
              I am a sacrifice to these hallows,<br/>
              I am the compost they will drink.
              <span className="not-italic opacity-40 text-3xl block mt-6 font-mono tracking-widest lowercase text-white/40 drop-shadow-none">"</span>
            </h3>
            <p className="font-mono text-sm tracking-[0.4em] text-secondary uppercase bg-black/50 inline-block px-4 py-2 border border-secondary/20">Reaper — <em>Estranged</em></p>
          </FadeIn>
        </div>
      </Section>

      {/* Poetry Archive */}
      <PoetryArchive />

      {/* Dusk photograph — cinematic palette bridge */}
      <DuskDivider />

      {/* Frequencies — real Spotify top tracks */}
      <FrequenciesSection />

      {/* The Relics — cinematic poetry scroll */}
      <PoetryScrollSection />

      {/* Sanctuary / Connect — ancient temple gate */}
      <Section className="z-10 bg-background overflow-hidden relative">
        {/* Photo backdrop */}
        <div className="absolute inset-0 opacity-25">
          <img src={connectBg} alt="Portal" className="w-full h-full object-cover object-bottom" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background" />
          <div className="absolute inset-0 bg-[hsl(28_60%_10%/0.5)] mix-blend-multiply" />
        </div>

        {/* Memento Mori hands — left side, tall */}
        <div className="absolute left-0 top-0 h-full w-[35%] pointer-events-none z-0 opacity-25 mix-blend-luminosity">
          <img src={mementoMoriHands} alt="" className="h-full w-full object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/80" />
        </div>
        {/* FlowerOfLife watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <FlowerOfLife className="w-[800px] h-[800px] text-primary opacity-[0.035] sacred-glow animate-spin-slow" style={{ animationDirection: "reverse" } as React.CSSProperties} />
        </div>

        <div className="max-w-3xl mx-auto px-6 w-full text-center relative z-20">
          <FadeIn>
            {/* Sacred Eye sigil */}
            <div className="flex justify-center mb-8">
              <SacredEye className="w-24 h-24 text-primary/50 sacred-glow" />
            </div>

            {/* Decorative rule */}
            <div className="flex items-center gap-4 justify-center mb-8">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-primary/50" />
              <span className="font-mono text-[10px] tracking-[0.5em] text-primary/40 uppercase">true nature waits</span>
              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-primary/50" />
            </div>

            <h2 className="text-5xl md:text-7xl font-serif text-glow mb-10">At peace within the embrace of the sky.</h2>
            <p className="text-lg text-muted-foreground/70 font-light mb-12 max-w-xl mx-auto leading-relaxed">
              It's true that nothing lasts forever. But some things are worth trying to hold onto.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-14" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@sanctuary.here"
                className="flex-1 bg-[hsl(22_50%_8%/0.8)] border border-primary/20 rounded-none px-6 py-4 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-all font-mono text-sm"
              />
              <button className="bg-primary text-background font-mono font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-none hover:bg-primary/80 transition-colors hover:shadow-[0_0_24px_hsl(43_72%_48%/0.4)]">
                Hold onto
              </button>
            </form>

            {/* Ornamental divider */}
            <div className="flex items-center gap-3 justify-center mb-8">
              <div className="h-[1px] flex-1 bg-primary/15" />
              <span className="text-primary/30 text-xs">✦</span>
              <div className="h-[1px] flex-1 bg-primary/15" />
            </div>

            <div className="flex items-center justify-center gap-6">
              {[
                { Icon: Instagram, href: "https://instagram.com/ivy.coconuts" },
                { Icon: Twitter,   href: "#" },
                { Icon: Youtube,   href: "#" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="p-4 border border-primary/20 hover:border-primary/50 hover:bg-primary/10 text-muted-foreground/60 hover:text-primary transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-6 left-0 w-full text-center">
          <p className="font-mono text-[10px] text-primary/20 uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} IvyVision · resilient and remarkable
          </p>
        </div>
      </Section>
    </div>
  );
}
