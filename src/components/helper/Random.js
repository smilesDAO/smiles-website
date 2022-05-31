class Random {
  static background() {
    return getRandom([
      "blue_clouds",
      "dawn",
    ]);
  }

  static eye() {
    return getRandom([
      "closed",
      "blue",
      "dizzy",
      "eyelashes",
      "eyes",
      "fire",
      "glamor",
      "hearts",
      "peace_glasses",
      "pink",
      "sparkling",
      "sunglasses_2",
      "sunglasses",
      "tearing_up",
      "unibrow",
      "wink",
    ]);
  }

  static smile() {
    return getRandom([
      "blunt",
      "braces",
      "cigarette",
      "gold_tooth",
      "missing_tooth",
      "piano_teeth",
      "pipe",
      "rose",
      "smile",
      "snake_tongue",
      "tongue",
    ]);
  }

  static head() {
    return getRandom([
      "8-ball",
      "amoeba",
      "banana_peel",
      "bandaid",
      "baseball",
      "basketball",
      "beach_ball",
      "book",
      "boot",
      "brick_wall",
      "bubble",
      "burnt_toast",
      "car_freshener",
      "carton",
      "cat",
      "cheese",
      "cherries",
      "chicken",
      "cloudy",
      "clover",
      "disco_ball",
      "droopy_plant",
      "egg",
      "fishbowl",
      "fish",
      "flame",
      "flower",
      "hat",
      "heart",
      "heeled_boot",
      "house",
      "ice_cream",
      "jell-o",
      "jug",
      "lava_lamp",
      "lightning",
      "macaroni",
      "mostly_sunny",
      "mountain",
      "mushroom",
      "music_note",
      "paddle_ball",
      "peach",
      "pencil",
      "pizza",
      "rainbow",
      "raindrop",
      "rain",
      "sandwich",
      "shrimp_cocktail",
      "snake",
      "sneaker",
      "strawberry",
      "sunflower",
      "sun",
      "sushi",
      "tennis_ball",
      "thought_bubble",
      "tighty_whities",
      "toaster",
      "toilet_paper",
      "toothpaste",
      "tornado",
      "traffic_cone",
      "trash_bag",
      "tree",
      "turtle",
      "ufo",
      "volcano",
      "water_dispenser",
      "wave",
      "whale",
    ]);
  }

  static shoe() {
    return getRandom([
      "brown_boots",
      "bunny_slippers",
      "chelsea",
      "crocs",
      "duck",
      "ghost_legs",
      "green_boots",
      "green_sneakers",
      "heels",
      "matched_socks",
      "mismatched_socks",
      "oxfords",
      "pink_boots",
      "pink_shoes",
      "pointed_toe_boots",
      "red_boots",
      "roller_skates",
      "sandals",
      "snake_legs",
      "troll_feet",
      "wiggle_legs",
      "yellow_boots",
      "yellow_sneakers",
    ]);
  }
}

export default Random;

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

