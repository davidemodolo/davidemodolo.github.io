const items = [
  { id: 1, name: "The_Sad_Onion", suggestion: "The Sad Onion" },
  { id: 2, name: "The_Inner_Eye", suggestion: "The Inner Eye" },
  { id: 3, name: "Spoon_Bender", suggestion: "Spoon Bender" },
  { id: 4, name: "Cricket_s_Head", suggestion: "Cricket's Head" },
  { id: 5, name: "My_Reflection", suggestion: "My Reflection" },
  { id: 6, name: "Number_One", suggestion: "Number One" },
  { id: 7, name: "Blood_of_the_Martyr", suggestion: "Blood of the Martyr" },
  { id: 8, name: "Brother_Bobby", suggestion: "Brother Bobby" },
  { id: 9, name: "Skatole", suggestion: "Skatole" },
  { id: 10, name: "Halo_of_Flies", suggestion: "Halo of Flies" },
  { id: 11, name: "1up_", suggestion: "1up!" },
  { id: 12, name: "Magic_Mushroom", suggestion: "Magic Mushroom" },
  { id: 13, name: "The_Virus", suggestion: "The Virus" },
  { id: 14, name: "Roid_Rage", suggestion: "Roid Rage" },
  { id: 15, name: "Less_Than_Three", suggestion: "Less Than Three" },
  { id: 16, name: "Raw_Liver", suggestion: "Raw Liver" },
  { id: 17, name: "Skeleton_Key", suggestion: "Skeleton Key" },
  { id: 18, name: "A_Dollar", suggestion: "A Dollar" },
  { id: 19, name: "Boom_", suggestion: "Boom!" },
  { id: 20, name: "Transcendence", suggestion: "Transcendence" },
  { id: 21, name: "The_Compass", suggestion: "The Compass" },
  { id: 22, name: "Lunch", suggestion: "Lunch" },
  { id: 23, name: "Dinner", suggestion: "Dinner" },
  { id: 24, name: "Dessert", suggestion: "Dessert" },
  { id: 25, name: "Breakfast", suggestion: "Breakfast" },
  { id: 26, name: "Rotten_Meat", suggestion: "Rotten Meat" },
  { id: 27, name: "Wooden_Spoon", suggestion: "Wooden Spoon" },
  { id: 28, name: "The_Belt", suggestion: "The Belt" },
  { id: 29, name: "Mom_s_Underwear", suggestion: "Mom's Underwear" },
  { id: 30, name: "Mom_s_Heels", suggestion: "Mom's Heels" },
  { id: 31, name: "Mom_s_Lipstick", suggestion: "Mom's Lipstick" },
  { id: 32, name: "Wire_Coat_Hanger", suggestion: "Wire Coat Hanger" },
  { id: 33, name: "The_Bible", suggestion: "The Bible" },
  { id: 34, name: "The_Book_of_Belial", suggestion: "The Book of Belial" },
  { id: 35, name: "The_Necronomicon", suggestion: "The Necronomicon" },
  { id: 36, name: "The_Poop", suggestion: "The Poop" },
  { id: 37, name: "Mr._Boom", suggestion: "Mr. Boom" },
  { id: 38, name: "Tammy_s_Head", suggestion: "Tammy's Head" },
  { id: 39, name: "Mom_s_Bra", suggestion: "Mom's Bra" },
  { id: 40, name: "Kamikaze_", suggestion: "Kamikaze!" },
  { id: 41, name: "Mom_s_Pad", suggestion: "Mom's Pad" },
  { id: 42, name: "Bob_s_Rotten_Head", suggestion: "Bob's Rotten Head" },
  { id: 43, name: "Teleport_", suggestion: "Teleport!" },
  { id: 44, name: "Yum_Heart", suggestion: "Yum Heart" },
  { id: 45, name: "Lucky_Foot", suggestion: "Lucky Foot" },
  { id: 46, name: "Doctor_s_Remote", suggestion: "Doctor's Remote" },
  { id: 47, name: "Cupid_s_Arrow", suggestion: "Cupid's Arrow" },
  { id: 48, name: "Shoop_Da_Whoop_", suggestion: "Shoop Da Whoop!" },
  { id: 49, name: "Steven", suggestion: "Steven" },
  { id: 50, name: "Pentagram", suggestion: "Pentagram" },
  { id: 51, name: "Dr._Fetus", suggestion: "Dr. Fetus" },
  { id: 52, name: "Magneto", suggestion: "Magneto" },
  { id: 53, name: "Treasure_Map", suggestion: "Treasure Map" },
  { id: 54, name: "Mom_s_Eye", suggestion: "Mom's Eye" },
  { id: 55, name: "Lemon_Mishap", suggestion: "Lemon Mishap" },
  { id: 56, name: "Distant_Admiration", suggestion: "Distant Admiration" },
  { id: 57, name: "Book_of_Shadows", suggestion: "Book of Shadows" },
  { id: 58, name: "The_Ladder", suggestion: "The Ladder" },
  { id: 59, name: "Charm_of_the_Vampire", suggestion: "Charm of the Vampire" },
  { id: 60, name: "The_Battery", suggestion: "The Battery" },
  { id: 61, name: "Steam_Sale", suggestion: "Steam Sale" },
  { id: 62, name: "Anarchist_Cookbook", suggestion: "Anarchist Cookbook" },
  { id: 63, name: "The_Hourglass", suggestion: "The Hourglass" },
  { id: 64, name: "Sister_Maggy", suggestion: "Sister Maggy" },
  { id: 65, name: "Technology", suggestion: "Technology" },
  { id: 66, name: "Chocolate_Milk", suggestion: "Chocolate Milk" },
  { id: 67, name: "Growth_Hormones", suggestion: "Growth Hormones" },
  { id: 68, name: "Mini_Mush", suggestion: "Mini Mush" },
  { id: 69, name: "Rosary", suggestion: "Rosary" },
  { id: 70, name: "Cube_of_Meat", suggestion: "Cube of Meat" },
  { id: 71, name: "A_Quarter", suggestion: "A Quarter" },
  { id: 72, name: "PHD", suggestion: "PHD" },
  { id: 73, name: "X-Ray_Vision", suggestion: "X-Ray Vision" },
  { id: 74, name: "My_Little_Unicorn", suggestion: "My Little Unicorn" },
  { id: 75, name: "Book_of_Revelations", suggestion: "Book of Revelations" },
  { id: 76, name: "The_Mark", suggestion: "The Mark" },
  { id: 77, name: "The_Pact", suggestion: "The Pact" },
  { id: 78, name: "Dead_Cat", suggestion: "Dead Cat" },
  { id: 79, name: "Lord_of_the_Pit", suggestion: "Lord of the Pit" },
  { id: 80, name: "The_Nail", suggestion: "The Nail" },
  {
    id: 81,
    name: "We_Need_to_Go_Deeper_",
    suggestion: "We Need to Go Deeper!",
  },
  { id: 82, name: "Deck_of_Cards", suggestion: "Deck of Cards" },
  { id: 83, name: "Monstro_s_Tooth", suggestion: "Monstro's Tooth" },
  { id: 84, name: "Loki_s_Horns", suggestion: "Loki's Horns" },
  { id: 85, name: "Little_Chubby", suggestion: "Little Chubby" },
  { id: 86, name: "Spider_Bite", suggestion: "Spider Bite" },
  { id: 87, name: "The_Small_Rock", suggestion: "The Small Rock" },
  { id: 88, name: "Spelunker_Hat", suggestion: "Spelunker Hat" },
  { id: 89, name: "Super_Bandage", suggestion: "Super Bandage" },
  { id: 90, name: "The_Gamekid", suggestion: "The Gamekid" },
  { id: 91, name: "Sack_of_Pennies", suggestion: "Sack of Pennies" },
  { id: 92, name: "Robo-Baby", suggestion: "Robo-Baby" },
  { id: 93, name: "Little_C.H.A.D.", suggestion: "Little C.H.A.D." },
  { id: 94, name: "The_Book_of_Sin", suggestion: "The Book of Sin" },
  { id: 95, name: "The_Relic", suggestion: "The Relic" },
  { id: 96, name: "Little_Gish", suggestion: "Little Gish" },
  { id: 97, name: "Little_Steven", suggestion: "Little Steven" },
  { id: 98, name: "The_Halo", suggestion: "The Halo" },
  {
    id: 99,
    name: "Mom_s_Bottle_of_Pills",
    suggestion: "Mom's Bottle of Pills",
  },
  { id: 100, name: "The_Common_Cold", suggestion: "The Common Cold" },
  { id: 101, name: "The_Parasite", suggestion: "The Parasite" },
  { id: 102, name: "The_D6", suggestion: "The D6" },
  { id: 103, name: "Mr._Mega", suggestion: "Mr. Mega" },
  { id: 104, name: "The_Pinking_Shears", suggestion: "The Pinking Shears" },
  { id: 105, name: "The_Wafer", suggestion: "The Wafer" },
  { id: 106, name: "Money_E_Power", suggestion: "Money = Power" },
  { id: 107, name: "Mom_s_Contacts", suggestion: "Mom's Contacts" },
  { id: 108, name: "The_Bean", suggestion: "The Bean" },
  { id: 109, name: "Guardian_Angel", suggestion: "Guardian Angel" },
  { id: 110, name: "Demon_Baby", suggestion: "Demon Baby" },
  { id: 111, name: "Mom_s_Knife", suggestion: "Mom's Knife" },
  { id: 112, name: "Ouija_Board", suggestion: "Ouija Board" },
  { id: 113, name: "9_Volt", suggestion: "9 Volt" },
  { id: 114, name: "Dead_Bird", suggestion: "Dead Bird" },
  { id: 115, name: "Brimstone", suggestion: "Brimstone" },
  { id: 116, name: "Blood_Bag", suggestion: "Blood Bag" },
  { id: 117, name: "Odd_Mushroom__Thin", suggestion: "Odd Mushroom <Thin>" },
  { id: 118, name: "Odd_Mushroom__Large", suggestion: "Odd Mushroom <Large>" },
  { id: 119, name: "Whore_of_Babylon", suggestion: "Whore of Babylon" },
  { id: 120, name: "Monster_Manual", suggestion: "Monster Manual" },
  { id: 121, name: "Dead_Sea_Scrolls", suggestion: "Dead Sea Scrolls" },
  { id: 122, name: "Bobby-Bomb", suggestion: "Bobby-Bomb" },
  { id: 123, name: "Razor_Blade", suggestion: "Razor Blade" },
  { id: 124, name: "Forget_Me_Now", suggestion: "Forget Me Now" },
  { id: 125, name: "Forever_Alone", suggestion: "Forever Alone" },
  { id: 126, name: "Bucket_of_Lard", suggestion: "Bucket of Lard" },
  { id: 127, name: "A_Pony", suggestion: "A Pony" },
  { id: 128, name: "Bomb_Bag", suggestion: "Bomb Bag" },
  { id: 129, name: "A_Lump_of_Coal", suggestion: "A Lump of Coal" },
  { id: 130, name: "Guppy_s_Paw", suggestion: "Guppy's Paw" },
  { id: 131, name: "Guppy_s_Tail", suggestion: "Guppy's Tail" },
  { id: 132, name: "IV_Bag", suggestion: "IV Bag" },
  { id: 133, name: "Best_Friend", suggestion: "Best Friend" },
  { id: 134, name: "Remote_Detonator", suggestion: "Remote Detonator" },
  { id: 135, name: "Stigmata", suggestion: "Stigmata" },
  { id: 136, name: "Mom_s_Purse", suggestion: "Mom's Purse" },
  { id: 137, name: "Bob_s_Curse", suggestion: "Bob's Curse" },
  { id: 138, name: "Pageant_Boy", suggestion: "Pageant Boy" },
  { id: 139, name: "Scapular", suggestion: "Scapular" },
  { id: 140, name: "Speed_Ball", suggestion: "Speed Ball" },
  { id: 141, name: "Bum_Friend", suggestion: "Bum Friend" },
  { id: 142, name: "Guppy_s_Head", suggestion: "Guppy's Head" },
  { id: 143, name: "Prayer_Card", suggestion: "Prayer Card" },
  { id: 144, name: "Notched_Axe", suggestion: "Notched Axe" },
  { id: 145, name: "Infestation", suggestion: "Infestation" },
  { id: 146, name: "Ipecac", suggestion: "Ipecac" },
  { id: 147, name: "Tough_Love", suggestion: "Tough Love" },
  { id: 148, name: "The_Mulligan", suggestion: "The Mulligan" },
  { id: 149, name: "Technology_2", suggestion: "Technology 2" },
  { id: 150, name: "Mutant_Spider", suggestion: "Mutant Spider" },
  { id: 151, name: "Chemical_Peel", suggestion: "Chemical Peel" },
  { id: 152, name: "The_Peeper", suggestion: "The Peeper" },
  { id: 153, name: "Habit", suggestion: "Habit" },
  { id: 154, name: "Bloody_Lust", suggestion: "Bloody Lust" },
  { id: 155, name: "Crystal_Ball", suggestion: "Crystal Ball" },
  { id: 156, name: "Spirit_of_the_Night", suggestion: "Spirit of the Night" },
  { id: 157, name: "Crack_the_Sky", suggestion: "Crack the Sky" },
  { id: 158, name: "Ankh", suggestion: "Ankh" },
  { id: 159, name: "Celtic_Cross", suggestion: "Celtic Cross" },
  { id: 160, name: "Ghost_Baby", suggestion: "Ghost Baby" },
  { id: 161, name: "The_Candle", suggestion: "The Candle" },
  { id: 162, name: "Cat-O-Nine-Tails", suggestion: "Cat-O-Nine-Tails" },
  { id: 163, name: "D20", suggestion: "D20" },
  { id: 164, name: "Harlequin_Baby", suggestion: "Harlequin Baby" },
  { id: 165, name: "Epic_Fetus", suggestion: "Epic Fetus" },
  { id: 166, name: "Polyphemus", suggestion: "Polyphemus" },
  { id: 167, name: "Daddy_Longlegs", suggestion: "Daddy Longlegs" },
  { id: 168, name: "Spider_Butt", suggestion: "Spider Butt" },
  { id: 169, name: "Sacrificial_Dagger", suggestion: "Sacrificial Dagger" },
  { id: 170, name: "Mitre", suggestion: "Mitre" },
  { id: 171, name: "Rainbow_Baby", suggestion: "Rainbow Baby" },
  { id: 172, name: "Dad_s_Key", suggestion: "Dad's Key" },
  { id: 173, name: "Stem_Cells", suggestion: "Stem Cells" },
  { id: 174, name: "Portable_Slot", suggestion: "Portable Slot" },
  { id: 175, name: "Holy_Water", suggestion: "Holy Water" },
  { id: 176, name: "Fate", suggestion: "Fate" },
  { id: 177, name: "The_Black_Bean", suggestion: "The Black Bean" },
  { id: 178, name: "White_Pony", suggestion: "White Pony" },
  { id: 179, name: "Sacred_Heart", suggestion: "Sacred Heart" },
  { id: 180, name: "Tooth_Picks", suggestion: "Tooth Picks" },
  { id: 181, name: "Holy_Grail", suggestion: "Holy Grail" },
  { id: 182, name: "Dead_Dove", suggestion: "Dead Dove" },
  { id: 183, name: "Blood_Rights", suggestion: "Blood Rights" },
  { id: 184, name: "Guppy_s_Hair_Ball", suggestion: "Guppy's Hair Ball" },
  { id: 185, name: "Abel", suggestion: "Abel" },
  { id: 186, name: "SMB_Super_Fan", suggestion: "SMB Super Fan" },
  { id: 187, name: "Pyro", suggestion: "Pyro" },
  { id: 188, name: "3_Dollar_Bill", suggestion: "3 Dollar Bill" },
  {
    id: 189,
    name: "Telepathy_for_Dummies",
    suggestion: "Telepathy for Dummies",
  },
  { id: 190, name: "MEAT_", suggestion: "MEAT!" },
  { id: 191, name: "Magic_8_Ball", suggestion: "Magic 8 Ball" },
  { id: 192, name: "Mom_s_Coin_Purse", suggestion: "Mom's Coin Purse" },
  { id: 193, name: "Squeezy", suggestion: "Squeezy" },
  { id: 194, name: "Jesus_Juice", suggestion: "Jesus Juice" },
  { id: 195, name: "Box", suggestion: "Box" },
  { id: 196, name: "Mom_s_Key", suggestion: "Mom's Key" },
  { id: 197, name: "Mom_s_Eyeshadow", suggestion: "Mom's Eyeshadow" },
  { id: 198, name: "Iron_Bar", suggestion: "Iron Bar" },
  { id: 199, name: "Midas__Touch", suggestion: "Midas' Touch" },
  { id: 200, name: "Humbleing_Bundle", suggestion: "Humbleing Bundle" },
  { id: 201, name: "Fanny_Pack", suggestion: "Fanny Pack" },
  { id: 202, name: "Sharp_Plug", suggestion: "Sharp Plug" },
  { id: 203, name: "Guillotine", suggestion: "Guillotine" },
  { id: 204, name: "Ball_of_Bandages", suggestion: "Ball of Bandages" },
  { id: 205, name: "Champion_Belt", suggestion: "Champion Belt" },
  { id: 206, name: "Butt_Bombs", suggestion: "Butt Bombs" },
  { id: 207, name: "Gnawed_Leaf", suggestion: "Gnawed Leaf" },
  { id: 208, name: "Spiderbaby", suggestion: "Spiderbaby" },
  { id: 209, name: "Guppy_s_Collar", suggestion: "Guppy's Collar" },
  { id: 210, name: "Lost_Contact", suggestion: "Lost Contact" },
  { id: 211, name: "Anemic", suggestion: "Anemic" },
  { id: 212, name: "Goat_Head", suggestion: "Goat Head" },
  { id: 213, name: "Ceremonial_Robes", suggestion: "Ceremonial Robes" },
  { id: 214, name: "Mom_s_Wig", suggestion: "Mom's Wig" },
  { id: 215, name: "Placenta", suggestion: "Placenta" },
  { id: 216, name: "Old_Bandage", suggestion: "Old Bandage" },
  { id: 217, name: "Sad_Bombs", suggestion: "Sad Bombs" },
  { id: 218, name: "Rubber_Cement", suggestion: "Rubber Cement" },
  { id: 219, name: "Anti-Gravity", suggestion: "Anti-Gravity" },
  { id: 220, name: "Pyromaniac", suggestion: "Pyromaniac" },
  { id: 221, name: "Cricket_s_Body", suggestion: "Cricket's Body" },
  { id: 222, name: "Gimpy", suggestion: "Gimpy" },
  { id: 223, name: "Black_Lotus", suggestion: "Black Lotus" },
  { id: 224, name: "Piggy_Bank", suggestion: "Piggy Bank" },
  { id: 225, name: "Mom_s_Perfume", suggestion: "Mom's Perfume" },
  { id: 226, name: "Monstro_s_Lung", suggestion: "Monstro's Lung" },
  { id: 227, name: "Abaddon", suggestion: "Abaddon" },
  { id: 228, name: "Ball_of_Tar", suggestion: "Ball of Tar" },
  { id: 229, name: "Stop_Watch", suggestion: "Stop Watch" },
  { id: 230, name: "Tiny_Planet", suggestion: "Tiny Planet" },
  { id: 231, name: "Infestation_2", suggestion: "Infestation 2" },
  { id: 232, name: "E._Coli", suggestion: "E. Coli" },
  { id: 233, name: "Death_s_Touch", suggestion: "Death's Touch" },
  { id: 234, name: "Key_Piece_1", suggestion: "Key Piece 1" },
  { id: 235, name: "Key_Piece_2", suggestion: "Key Piece 2" },
  {
    id: 236,
    name: "Experimental_Treatment",
    suggestion: "Experimental Treatment",
  },
  { id: 237, name: "Contract_From_Below", suggestion: "Contract From Below" },
  { id: 238, name: "Infamy", suggestion: "Infamy" },
  { id: 239, name: "Trinity_Shield", suggestion: "Trinity Shield" },
  { id: 240, name: "Tech.5", suggestion: "Tech.5" },
  { id: 241, name: "20_20", suggestion: "20 20" },
  { id: 242, name: "Blue_Map", suggestion: "Blue Map" },
  { id: 243, name: "BFFS_", suggestion: "BFFS!" },
  { id: 244, name: "Hive_Mind", suggestion: "Hive Mind" },
  { id: 245, name: "There_s_Options", suggestion: "There's Options" },
  { id: 246, name: "Bogo_Bombs", suggestion: "Bogo Bombs" },
  { id: 247, name: "Starter_Deck", suggestion: "Starter Deck" },
  { id: 248, name: "Little_Baggy", suggestion: "Little Baggy" },
  { id: 249, name: "Magic_Scab", suggestion: "Magic Scab" },
  { id: 250, name: "Blood_Clot", suggestion: "Blood Clot" },
  { id: 251, name: "Screw", suggestion: "Screw" },
  { id: 252, name: "Hot_Bombs", suggestion: "Hot Bombs" },
  { id: 253, name: "Fire_Mind", suggestion: "Fire Mind" },
  { id: 254, name: "Missing_No.", suggestion: "Missing No." },
  { id: 255, name: "Dark_Matter", suggestion: "Dark Matter" },
  { id: 256, name: "Black_Candle", suggestion: "Black Candle" },
  { id: 257, name: "Proptosis", suggestion: "Proptosis" },
  { id: 258, name: "Missing_Page_2", suggestion: "Missing Page 2" },
  { id: 259, name: "Clear_Rune", suggestion: "Clear Rune" },
  { id: 260, name: "Smart_Fly", suggestion: "Smart Fly" },
  { id: 261, name: "Dry_Baby", suggestion: "Dry Baby" },
  { id: 262, name: "Juicy_Sack", suggestion: "Juicy Sack" },
  { id: 263, name: "Robo-Baby_2.0", suggestion: "Robo-Baby 2.0" },
  { id: 264, name: "Rotten_Baby", suggestion: "Rotten Baby" },
  { id: 265, name: "Headless_Baby", suggestion: "Headless Baby" },
  { id: 266, name: "Leech", suggestion: "Leech" },
  { id: 267, name: "Mystery_Sack", suggestion: "Mystery Sack" },
  { id: 268, name: "BBF", suggestion: "BBF" },
  { id: 269, name: "Bob_s_Brain", suggestion: "Bob's Brain" },
  { id: 270, name: "Best_Bud", suggestion: "Best Bud" },
  { id: 271, name: "Lil_Brimstone", suggestion: "Lil Brimstone" },
  { id: 272, name: "Isaac_s_Heart", suggestion: "Isaac's Heart" },
  { id: 273, name: "Lil_Haunt", suggestion: "Lil Haunt" },
  { id: 274, name: "Dark_Bum", suggestion: "Dark Bum" },
  { id: 275, name: "Big_Fan", suggestion: "Big Fan" },
  { id: 276, name: "Sissy_Longlegs", suggestion: "Sissy Longlegs" },
  { id: 277, name: "Punching_Bag", suggestion: "Punching Bag" },
  { id: 278, name: "How_to_Jump", suggestion: "How to Jump" },
  { id: 279, name: "D100", suggestion: "D100" },
  { id: 280, name: "D4", suggestion: "D4" },
  { id: 281, name: "D10", suggestion: "D10" },
  { id: 282, name: "Blank_Card", suggestion: "Blank Card" },
  { id: 283, name: "Book_of_Secrets", suggestion: "Book of Secrets" },
  { id: 284, name: "Box_of_Spiders", suggestion: "Box of Spiders" },
  { id: 285, name: "Red_Candle", suggestion: "Red Candle" },
  { id: 286, name: "The_Jar", suggestion: "The Jar" },
  { id: 287, name: "Flush_", suggestion: "Flush!" },
  { id: 288, name: "Satanic_Bible", suggestion: "Satanic Bible" },
  { id: 289, name: "Head_of_Krampus", suggestion: "Head of Krampus" },
  { id: 290, name: "Butter_Bean", suggestion: "Butter Bean" },
  { id: 291, name: "Magic_Fingers", suggestion: "Magic Fingers" },
  { id: 292, name: "Converter", suggestion: "Converter" },
  { id: 293, name: "Pandora_s_Box", suggestion: "Pandora's Box" },
  { id: 294, name: "Unicorn_Stump", suggestion: "Unicorn Stump" },
  { id: 295, name: "Taurus", suggestion: "Taurus" },
  { id: 296, name: "Aries", suggestion: "Aries" },
  { id: 297, name: "Cancer", suggestion: "Cancer" },
  { id: 298, name: "Leo", suggestion: "Leo" },
  { id: 299, name: "Virgo", suggestion: "Virgo" },
  { id: 300, name: "Libra", suggestion: "Libra" },
  { id: 301, name: "Scorpio", suggestion: "Scorpio" },
  { id: 302, name: "Sagittarius", suggestion: "Sagittarius" },
  { id: 303, name: "Capricorn", suggestion: "Capricorn" },
  { id: 304, name: "Aquarius", suggestion: "Aquarius" },
  { id: 305, name: "Pisces", suggestion: "Pisces" },
  { id: 306, name: "Eve_s_Mascara", suggestion: "Eve's Mascara" },
  { id: 307, name: "Judas__Shadow", suggestion: "Judas' Shadow" },
  { id: 308, name: "Maggy_s_Bow", suggestion: "Maggy's Bow" },
  { id: 309, name: "Holy_Mantle", suggestion: "Holy Mantle" },
  { id: 310, name: "Thunder_Thighs", suggestion: "Thunder Thighs" },
  { id: 311, name: "Strange_Attractor", suggestion: "Strange Attractor" },
  { id: 312, name: "Cursed_Eye", suggestion: "Cursed Eye" },
  { id: 313, name: "Mysterious_Liquid", suggestion: "Mysterious Liquid" },
  { id: 314, name: "Gemini", suggestion: "Gemini" },
  { id: 315, name: "Cain_s_Other_Eye", suggestion: "Cain's Other Eye" },
  {
    id: 316,
    name: "Blue_Baby_s_Only_Friend",
    suggestion: "Blue Baby's Only Friend",
  },
  { id: 317, name: "Samson_s_Chains", suggestion: "Samson's Chains" },
  { id: 318, name: "Mongo_Baby", suggestion: "Mongo Baby" },
  { id: 319, name: "Isaac_s_Tears", suggestion: "Isaac's Tears" },
  { id: 320, name: "Undefined", suggestion: "Undefined" },
  { id: 321, name: "Scissors", suggestion: "Scissors" },
  { id: 322, name: "Breath_of_Life", suggestion: "Breath of Life" },
  { id: 323, name: "The_Polaroid", suggestion: "The Polaroid" },
  { id: 324, name: "The_Negative", suggestion: "The Negative" },
  {
    id: 325,
    name: "The_Ludovico_Technique",
    suggestion: "The Ludovico Technique",
  },
  { id: 326, name: "Soy_Milk", suggestion: "Soy Milk" },
  { id: 327, name: "Godhead", suggestion: "Godhead" },
  { id: 328, name: "Lazarus__Rags", suggestion: "Lazarus' Rags" },
  { id: 329, name: "The_Mind", suggestion: "The Mind" },
  { id: 330, name: "The_Body", suggestion: "The Body" },
  { id: 331, name: "The_Soul", suggestion: "The Soul" },
  { id: 332, name: "Dead_Onion", suggestion: "Dead Onion" },
  { id: 333, name: "Broken_Watch", suggestion: "Broken Watch" },
  { id: 334, name: "The_Boomerang", suggestion: "The Boomerang" },
  { id: 335, name: "Safety_Pin", suggestion: "Safety Pin" },
  { id: 336, name: "Caffeine_Pill", suggestion: "Caffeine Pill" },
  { id: 337, name: "Torn_Photo", suggestion: "Torn Photo" },
  { id: 338, name: "Blue_Cap", suggestion: "Blue Cap" },
  { id: 339, name: "Latch_Key", suggestion: "Latch Key" },
  { id: 340, name: "Match_Book", suggestion: "Match Book" },
  { id: 341, name: "Synthoil", suggestion: "Synthoil" },
  { id: 342, name: "A_Snack", suggestion: "A Snack" },
  { id: 343, name: "Diplopia", suggestion: "Diplopia" },
  { id: 344, name: "Placebo", suggestion: "Placebo" },
  { id: 345, name: "Wooden_Nickel", suggestion: "Wooden Nickel" },
  { id: 346, name: "Toxic_Shock", suggestion: "Toxic Shock" },
  { id: 347, name: "Mega_Bean", suggestion: "Mega Bean" },
  { id: 348, name: "Glass_Cannon", suggestion: "Glass Cannon" },
  { id: 349, name: "Bomber_Boy", suggestion: "Bomber Boy" },
  { id: 350, name: "Crack_Jacks", suggestion: "Crack Jacks" },
  { id: 351, name: "Mom_s_Pearls", suggestion: "Mom's Pearls" },
  { id: 352, name: "Car_Battery", suggestion: "Car Battery" },
  { id: 353, name: "Box_of_Friends", suggestion: "Box of Friends" },
  { id: 354, name: "The_Wiz", suggestion: "The Wiz" },
  { id: 355, name: "8_Inch_Nails", suggestion: "8 Inch Nails" },
  { id: 356, name: "Incubus", suggestion: "Incubus" },
  { id: 357, name: "Fate_s_Reward", suggestion: "Fate's Reward" },
  { id: 358, name: "Lil_Chest", suggestion: "Lil Chest" },
  { id: 359, name: "Sworn_Protector", suggestion: "Sworn Protector" },
  { id: 360, name: "Friend_Zone", suggestion: "Friend Zone" },
  { id: 361, name: "Lost_Fly", suggestion: "Lost Fly" },
  { id: 362, name: "Scatter_Bombs", suggestion: "Scatter Bombs" },
  { id: 363, name: "Sticky_Bombs", suggestion: "Sticky Bombs" },
  { id: 364, name: "Epiphora", suggestion: "Epiphora" },
  { id: 365, name: "Continuum", suggestion: "Continuum" },
  { id: 366, name: "Mr._Dolly", suggestion: "Mr. Dolly" },
  { id: 367, name: "Curse_of_the_Tower", suggestion: "Curse of the Tower" },
  { id: 368, name: "Charged_Baby", suggestion: "Charged Baby" },
  { id: 369, name: "Dead_Eye", suggestion: "Dead Eye" },
  { id: 370, name: "Holy_Light", suggestion: "Holy Light" },
  { id: 371, name: "Host_Hat", suggestion: "Host Hat" },
  { id: 372, name: "Restock", suggestion: "Restock" },
  { id: 373, name: "Bursting_Sack", suggestion: "Bursting Sack" },
  { id: 374, name: "Number_Two", suggestion: "Number Two" },
  { id: 375, name: "Pupula_Duplex", suggestion: "Pupula Duplex" },
  { id: 376, name: "Pay_to_Play", suggestion: "Pay to Play" },
  { id: 377, name: "Eden_s_Blessing", suggestion: "Eden's Blessing" },
  { id: 378, name: "Friendly_Ball", suggestion: "Friendly Ball" },
  { id: 379, name: "Tear_Detonator", suggestion: "Tear Detonator" },
  { id: 380, name: "Lil_Gurdy", suggestion: "Lil Gurdy" },
  { id: 381, name: "Bumbo", suggestion: "Bumbo" },
  { id: 382, name: "D12", suggestion: "D12" },
  { id: 383, name: "Censer", suggestion: "Censer" },
  { id: 384, name: "Key_Bum", suggestion: "Key Bum" },
  { id: 385, name: "Rune_Bag", suggestion: "Rune Bag" },
  { id: 386, name: "Seraphim", suggestion: "Seraphim" },
  { id: 387, name: "Betrayal", suggestion: "Betrayal" },
  { id: 388, name: "Zodiac", suggestion: "Zodiac" },
  { id: 389, name: "Serpent_s_Kiss", suggestion: "Serpent's Kiss" },
  { id: 390, name: "Marked", suggestion: "Marked" },
  { id: 391, name: "Tech_X", suggestion: "Tech X" },
  { id: 392, name: "Ventricle_Razor", suggestion: "Ventricle Razor" },
  { id: 393, name: "Tractor_Beam", suggestion: "Tractor Beam" },
  { id: 394, name: "God_s_Flesh", suggestion: "God's Flesh" },
  { id: 395, name: "Maw_of_the_Void", suggestion: "Maw of the Void" },
  { id: 396, name: "Spear_of_Destiny", suggestion: "Spear of Destiny" },
  { id: 397, name: "Explosivo", suggestion: "Explosivo" },
  { id: 398, name: "Chaos", suggestion: "Chaos" },
  { id: 399, name: "Spider_Mod", suggestion: "Spider Mod" },
  { id: 400, name: "Farting_Baby", suggestion: "Farting Baby" },
  { id: 401, name: "GB_Bug", suggestion: "GB Bug" },
  { id: 402, name: "D8", suggestion: "D8" },
  { id: 403, name: "Purity", suggestion: "Purity" },
  { id: 404, name: "Athame", suggestion: "Athame" },
  { id: 405, name: "Empty_Vessel", suggestion: "Empty Vessel" },
  { id: 406, name: "Evil_Eye", suggestion: "Evil Eye" },
  { id: 407, name: "Lusty_Blood", suggestion: "Lusty Blood" },
  { id: 408, name: "Cambion_Conception", suggestion: "Cambion Conception" },
  {
    id: 409,
    name: "Immaculate_Conception",
    suggestion: "Immaculate Conception",
  },
  { id: 410, name: "More_Options", suggestion: "More Options" },
  { id: 411, name: "Crown_of_Light", suggestion: "Crown of Light" },
  { id: 412, name: "Deep_Pockets", suggestion: "Deep Pockets" },
  { id: 413, name: "Succubus", suggestion: "Succubus" },
  { id: 414, name: "Fruit_Cake", suggestion: "Fruit Cake" },
  { id: 415, name: "Teleport_2.0", suggestion: "Teleport 2.0" },
  { id: 416, name: "Black_Powder", suggestion: "Black Powder" },
  { id: 417, name: "Kidney_Bean", suggestion: "Kidney Bean" },
  { id: 418, name: "Glowing_Hourglass", suggestion: "Glowing Hourglass" },
  { id: 419, name: "Circle_of_Protection", suggestion: "Circle of Protection" },
  { id: 420, name: "Sack_Head", suggestion: "Sack Head" },
  { id: 421, name: "Night_Light", suggestion: "Night Light" },
  { id: 422, name: "Obsessed_Fan", suggestion: "Obsessed Fan" },
  { id: 423, name: "Mine_Crafter", suggestion: "Mine Crafter" },
  { id: 424, name: "PJs", suggestion: "PJs" },
  { id: 425, name: "Head_of_the_Keeper", suggestion: "Head of the Keeper" },
  { id: 426, name: "Papa_Fly", suggestion: "Papa Fly" },
  {
    id: 427,
    name: "Multidimensional_Baby",
    suggestion: "Multidimensional Baby",
  },
  { id: 428, name: "Glitter_Bombs", suggestion: "Glitter Bombs" },
  { id: 429, name: "My_Shadow", suggestion: "My Shadow" },
  { id: 430, name: "Jar_of_Flies", suggestion: "Jar of Flies" },
  { id: 431, name: "Lil_Loki", suggestion: "Lil Loki" },
  { id: 432, name: "Milk_", suggestion: "Milk!" },
  { id: 433, name: "D7", suggestion: "D7" },
  { id: 434, name: "Binky", suggestion: "Binky" },
  { id: 435, name: "Mom_s_Box", suggestion: "Mom's Box" },
  { id: 436, name: "Kidney_Stone", suggestion: "Kidney Stone" },
  { id: 437, name: "Mega_Blast", suggestion: "Mega Blast" },
  { id: 438, name: "Dark_Prince_s_Crown", suggestion: "Dark Prince's Crown" },
  { id: 439, name: "Apple_", suggestion: "Apple!" },
  { id: 440, name: "Lead_Pencil", suggestion: "Lead Pencil" },
  { id: 441, name: "Dog_Tooth", suggestion: "Dog Tooth" },
  { id: 442, name: "Dead_Tooth", suggestion: "Dead Tooth" },
  { id: 443, name: "Linger_Bean", suggestion: "Linger Bean" },
  { id: 444, name: "Shard_of_Glass", suggestion: "Shard of Glass" },
  { id: 445, name: "Metal_Plate", suggestion: "Metal Plate" },
  { id: 446, name: "Eye_of_Greed", suggestion: "Eye of Greed" },
  { id: 447, name: "Tarot_Cloth", suggestion: "Tarot Cloth" },
  { id: 448, name: "Varicose_Veins", suggestion: "Varicose Veins" },
  { id: 449, name: "Compound_Fracture", suggestion: "Compound Fracture" },
  { id: 450, name: "Polydactyly", suggestion: "Polydactyly" },
  { id: 451, name: "Dad_s_Lost_Coin", suggestion: "Dad's Lost Coin" },
  { id: 452, name: "Midnight_Snack", suggestion: "Midnight Snack" },
  { id: 453, name: "Cone_Head", suggestion: "Cone Head" },
  { id: 454, name: "Belly_Button", suggestion: "Belly Button" },
  { id: 455, name: "Sinus_Infection", suggestion: "Sinus Infection" },
  { id: 456, name: "Glaucoma", suggestion: "Glaucoma" },
  { id: 457, name: "Parasitoid", suggestion: "Parasitoid" },
  { id: 458, name: "Eye_of_Belial", suggestion: "Eye of Belial" },
  { id: 459, name: "Sulfuric_Acid", suggestion: "Sulfuric Acid" },
  { id: 460, name: "Glyph_of_Balance", suggestion: "Glyph of Balance" },
  { id: 461, name: "Analog_Stick", suggestion: "Analog Stick" },
  { id: 462, name: "Contagion", suggestion: "Contagion" },
  { id: 463, name: "Finger_", suggestion: "Finger!" },
  { id: 464, name: "Shade", suggestion: "Shade" },
  { id: 465, name: "Depression", suggestion: "Depression" },
  { id: 466, name: "Hushy", suggestion: "Hushy" },
  { id: 467, name: "Lil_Monstro", suggestion: "Lil Monstro" },
  { id: 468, name: "King_Baby", suggestion: "King Baby" },
  { id: 469, name: "Big_Chubby", suggestion: "Big Chubby" },
  { id: 470, name: "Broken_Glass_Cannon", suggestion: "Broken Glass Cannon" },
  { id: 471, name: "Plan_C", suggestion: "Plan C" },
  { id: 472, name: "D1", suggestion: "D1" },
  { id: 473, name: "Void", suggestion: "Void" },
  { id: 474, name: "Pause", suggestion: "Pause" },
  { id: 475, name: "Smelter", suggestion: "Smelter" },
  { id: 476, name: "Compost", suggestion: "Compost" },
  { id: 477, name: "Dataminer", suggestion: "Dataminer" },
  { id: 478, name: "Clicker", suggestion: "Clicker" },
  { id: 479, name: "Mama_Mega_", suggestion: "Mama Mega!" },
  { id: 480, name: "Wait_What", suggestion: "Wait What" },
  { id: 481, name: "Crooked_Penny", suggestion: "Crooked Penny" },
  { id: 482, name: "Dull_Razor", suggestion: "Dull Razor" },
  { id: 483, name: "Potato_Peeler", suggestion: "Potato Peeler" },
  { id: 484, name: "Metronome", suggestion: "Metronome" },
  { id: 485, name: "D_Infinity", suggestion: "D Infinity" },
  { id: 486, name: "Eden_s_Soul", suggestion: "Eden's Soul" },
  { id: 487, name: "Acid_Baby", suggestion: "Acid Baby" },
  { id: 488, name: "YO_LISTEN_", suggestion: "YO LISTEN!" },
  { id: 489, name: "Adrenaline", suggestion: "Adrenaline" },
  { id: 490, name: "Jacob_s_Ladder", suggestion: "Jacob's Ladder" },
  { id: 491, name: "Ghost_Pepper", suggestion: "Ghost Pepper" },
  { id: 492, name: "Euthanasia", suggestion: "Euthanasia" },
  { id: 493, name: "Camo_Undies", suggestion: "Camo Undies" },
  { id: 494, name: "Duality", suggestion: "Duality" },
  { id: 495, name: "Eucharist", suggestion: "Eucharist" },
  { id: 496, name: "Sack_of_Sacks", suggestion: "Sack of Sacks" },
  { id: 497, name: "Greed_s_Gullet", suggestion: "Greed's Gullet" },
  { id: 498, name: "Large_Zit", suggestion: "Large Zit" },
  { id: 499, name: "Little_Horn", suggestion: "Little Horn" },
  { id: 500, name: "Brown_Nugget", suggestion: "Brown Nugget" },
  { id: 501, name: "Poke_Go", suggestion: "Poke Go" },
  { id: 502, name: "Backstabber", suggestion: "Backstabber" },
  { id: 503, name: "Sharp_Straw", suggestion: "Sharp Straw" },
  { id: 504, name: "Mom_s_Razor", suggestion: "Mom's Razor" },
  { id: 505, name: "Bloodshot_Eye", suggestion: "Bloodshot Eye" },
  { id: 506, name: "Delirious", suggestion: "Delirious" },
  { id: 507, name: "Angry_Fly", suggestion: "Angry Fly" },
  { id: 508, name: "Black_Hole", suggestion: "Black Hole" },
  { id: 509, name: "Bozo", suggestion: "Bozo" },
  { id: 510, name: "Broken_Modem", suggestion: "Broken Modem" },
  { id: 511, name: "Mystery_Gift", suggestion: "Mystery Gift" },
  { id: 512, name: "Sprinkler", suggestion: "Sprinkler" },
  { id: 513, name: "Fast_Bombs", suggestion: "Fast Bombs" },
  { id: 514, name: "Buddy_in_a_Box", suggestion: "Buddy in a Box" },
  { id: 515, name: "Lil_Delirium", suggestion: "Lil Delirium" },
  { id: 516, name: "Jumper_Cables", suggestion: "Jumper Cables" },
  { id: 517, name: "Coupon", suggestion: "Coupon" },
  { id: 518, name: "Telekinesis", suggestion: "Telekinesis" },
  { id: 519, name: "Moving_Box", suggestion: "Moving Box" },
  { id: 520, name: "Technology_Zero", suggestion: "Technology Zero" },
  { id: 521, name: "Leprosy", suggestion: "Leprosy" },
  { id: 522, name: "7_Seals", suggestion: "7 Seals" },
  { id: 523, name: "Mr._ME_", suggestion: "Mr. ME!" },
  { id: 524, name: "Angelic_Prism", suggestion: "Angelic Prism" },
  { id: 525, name: "Pop_", suggestion: "Pop!" },
  { id: 526, name: "Death_s_List", suggestion: "Death's List" },
  { id: 527, name: "Haemolacria", suggestion: "Haemolacria" },
  { id: 528, name: "Lachryphagy", suggestion: "Lachryphagy" },
  { id: 529, name: "Trisagion", suggestion: "Trisagion" },
  { id: 530, name: "Schoolbag", suggestion: "Schoolbag" },
  { id: 531, name: "Blanket", suggestion: "Blanket" },
  { id: 532, name: "Sacrificial_Altar", suggestion: "Sacrificial Altar" },
  { id: 533, name: "Lil_Spewer", suggestion: "Lil Spewer" },
  { id: 534, name: "Marbles", suggestion: "Marbles" },
  { id: 535, name: "Mystery_Egg", suggestion: "Mystery Egg" },
  { id: 536, name: "Flat_Stone", suggestion: "Flat Stone" },
  { id: 537, name: "Marrow", suggestion: "Marrow" },
  { id: 538, name: "Slipped_Rib", suggestion: "Slipped Rib" },
  { id: 539, name: "Hallowed_Ground", suggestion: "Hallowed Ground" },
  { id: 540, name: "Pointy_Rib", suggestion: "Pointy Rib" },
  { id: 541, name: "Book_of_the_Dead", suggestion: "Book of the Dead" },
  { id: 542, name: "Dad_s_Ring", suggestion: "Dad's Ring" },
  { id: 543, name: "Divorce_Papers", suggestion: "Divorce Papers" },
  { id: 544, name: "Jaw_Bone", suggestion: "Jaw Bone" },
  { id: 545, name: "Brittle_Bones", suggestion: "Brittle Bones" },
  { id: 546, name: "Broken_Shovel_1", suggestion: "Broken Shovel 1" },
  { id: 547, name: "Broken_Shovel_2", suggestion: "Broken Shovel 2" },
  { id: 548, name: "Mom_s_Shovel", suggestion: "Mom's Shovel" },
  { id: 549, name: "Mucormycosis", suggestion: "Mucormycosis" },
  { id: 550, name: "2Spooky", suggestion: "2Spooky" },
  { id: 551, name: "Golden_Razor", suggestion: "Golden Razor" },
  { id: 552, name: "Sulfur", suggestion: "Sulfur" },
  { id: 553, name: "Fortune_Cookie", suggestion: "Fortune Cookie" },
  { id: 554, name: "Eye_Sore", suggestion: "Eye Sore" },
  { id: 555, name: "120_Volt", suggestion: "120 Volt" },
  { id: 556, name: "It_Hurts", suggestion: "It Hurts" },
  { id: 557, name: "Almond_Milk", suggestion: "Almond Milk" },
  { id: 558, name: "Rock_Bottom", suggestion: "Rock Bottom" },
  { id: 559, name: "Nancy_Bombs", suggestion: "Nancy Bombs" },
  { id: 560, name: "A_Bar_of_Soap", suggestion: "A Bar of Soap" },
  { id: 561, name: "Blood_Puppy", suggestion: "Blood Puppy" },
  { id: 562, name: "Dream_Catcher", suggestion: "Dream Catcher" },
  { id: 563, name: "Paschal_Candle", suggestion: "Paschal Candle" },
  { id: 564, name: "Divine_Intervention", suggestion: "Divine Intervention" },
  { id: 565, name: "Blood_Oath", suggestion: "Blood Oath" },
  { id: 566, name: "Playdough_Cookie", suggestion: "Playdough Cookie" },
  { id: 567, name: "Orphan_Socks", suggestion: "Orphan Socks" },
  { id: 568, name: "Eye_of_the_Occult", suggestion: "Eye of the Occult" },
  { id: 569, name: "Immaculate_Heart", suggestion: "Immaculate Heart" },
  { id: 570, name: "Monstrance", suggestion: "Monstrance" },
  { id: 571, name: "The_Intruder", suggestion: "The Intruder" },
  { id: 572, name: "Dirty_Mind", suggestion: "Dirty Mind" },
  { id: 573, name: "Damocles", suggestion: "Damocles" },
  { id: 574, name: "Free_Lemonade", suggestion: "Free Lemonade" },
  { id: 575, name: "Spirit_Sword", suggestion: "Spirit Sword" },
  { id: 576, name: "Red_Key", suggestion: "Red Key" },
  { id: 577, name: "Psy_Fly", suggestion: "Psy Fly" },
  { id: 578, name: "Wavy_Cap", suggestion: "Wavy Cap" },
  { id: 579, name: "Rocket_in_a_Jar", suggestion: "Rocket in a Jar" },
  { id: 580, name: "Book_of_Virtues", suggestion: "Book of Virtues" },
  { id: 581, name: "Alabaster_Box", suggestion: "Alabaster Box" },
  { id: 582, name: "The_Stairway", suggestion: "The Stairway" },
  { id: 583, name: "Sol", suggestion: "Sol" },
  { id: 584, name: "Luna", suggestion: "Luna" },
  { id: 585, name: "Mercurius", suggestion: "Mercurius" },
  { id: 586, name: "Venus", suggestion: "Venus" },
  { id: 587, name: "Terra", suggestion: "Terra" },
  { id: 588, name: "Mars", suggestion: "Mars" },
  { id: 589, name: "Jupiter", suggestion: "Jupiter" },
  { id: 590, name: "Saturnus", suggestion: "Saturnus" },
  { id: 591, name: "Uranus", suggestion: "Uranus" },
  { id: 592, name: "Neptunus", suggestion: "Neptunus" },
  { id: 593, name: "Pluto", suggestion: "Pluto" },
  { id: 594, name: "Voodoo_Head", suggestion: "Voodoo Head" },
  { id: 595, name: "Eye_Drops", suggestion: "Eye Drops" },
  { id: 596, name: "Act_of_Contrition", suggestion: "Act of Contrition" },
  { id: 597, name: "Member_Card", suggestion: "Member Card" },
  { id: 598, name: "Battery_Pack", suggestion: "Battery Pack" },
  { id: 599, name: "Mom_s_Bracelet", suggestion: "Mom's Bracelet" },
  { id: 600, name: "The_Scooper", suggestion: "The Scooper" },
  { id: 601, name: "Ocular_Rift", suggestion: "Ocular Rift" },
  { id: 602, name: "Boiled_Baby", suggestion: "Boiled Baby" },
  { id: 603, name: "Freezer_Baby", suggestion: "Freezer Baby" },
  { id: 604, name: "Eternal_D6", suggestion: "Eternal D6" },
  { id: 605, name: "Bird_Cage", suggestion: "Bird Cage" },
  { id: 606, name: "Larynx", suggestion: "Larynx" },
  { id: 607, name: "Lost_Soul", suggestion: "Lost Soul" },
  { id: 608, name: "Blood_Bombs", suggestion: "Blood Bombs" },
  { id: 609, name: "Lil_Dumpy", suggestion: "Lil Dumpy" },
  { id: 610, name: "Bird_s_Eye", suggestion: "Bird's Eye" },
  { id: 611, name: "Lodestone", suggestion: "Lodestone" },
  { id: 612, name: "Rotten_Tomato", suggestion: "Rotten Tomato" },
  { id: 613, name: "Birthright", suggestion: "Birthright" },
  { id: 614, name: "Red_Stew", suggestion: "Red Stew" },
  { id: 615, name: "Genesis", suggestion: "Genesis" },
  { id: 616, name: "Sharp_Key", suggestion: "Sharp Key" },
  { id: 617, name: "Booster_Pack", suggestion: "Booster Pack" },
  { id: 618, name: "Mega_Mush", suggestion: "Mega Mush" },
  { id: 619, name: "Knife_Piece_1", suggestion: "Knife Piece 1" },
  { id: 620, name: "Knife_Piece_2", suggestion: "Knife Piece 2" },
  { id: 621, name: "Death_Certificate", suggestion: "Death Certificate" },
  { id: 622, name: "Bot_Fly", suggestion: "Bot Fly" },
  { id: 623, name: "Meat_Cleaver", suggestion: "Meat Cleaver" },
  { id: 624, name: "Evil_Charm", suggestion: "Evil Charm" },
  { id: 625, name: "Dogma", suggestion: "Dogma" },
  { id: 626, name: "Purgatory", suggestion: "Purgatory" },
  { id: 627, name: "Stitches", suggestion: "Stitches" },
  { id: 628, name: "R_Key", suggestion: "R Key" },
  { id: 629, name: "Knockout_Drops", suggestion: "Knockout Drops" },
  { id: 630, name: "Eraser", suggestion: "Eraser" },
  { id: 631, name: "Yuck_Heart", suggestion: "Yuck Heart" },
  { id: 632, name: "Urn_of_Souls", suggestion: "Urn of Souls" },
  { id: 633, name: "Akeldama", suggestion: "Akeldama" },
  { id: 634, name: "Magic_Skin", suggestion: "Magic Skin" },
  { id: 635, name: "Revelation", suggestion: "Revelation" },
  { id: 636, name: "Consolation_Prize", suggestion: "Consolation Prize" },
  { id: 637, name: "Tinytoma", suggestion: "Tinytoma" },
  { id: 638, name: "Brimstone_Bombs", suggestion: "Brimstone Bombs" },
  { id: 639, name: "4.5_Volt", suggestion: "4.5 Volt" },
  { id: 640, name: "Fruity_Plum", suggestion: "Fruity Plum" },
  { id: 641, name: "Plum_Flute", suggestion: "Plum Flute" },
  { id: 642, name: "Star_of_Bethlehem", suggestion: "Star of Bethlehem" },
  { id: 643, name: "Cube_Baby", suggestion: "Cube Baby" },
  { id: 644, name: "Vade_Retro", suggestion: "Vade Retro" },
  { id: 645, name: "False_PHD", suggestion: "False PHD" },
  { id: 646, name: "Spin_to_Win", suggestion: "Spin to Win" },
  { id: 647, name: "Vasculitis", suggestion: "Vasculitis" },
  { id: 648, name: "Giant_Cell", suggestion: "Giant Cell" },
  { id: 649, name: "Tropicamide", suggestion: "Tropicamide" },
  { id: 650, name: "Card_Reading", suggestion: "Card Reading" },
  { id: 651, name: "Quints", suggestion: "Quints" },
  { id: 652, name: "Tooth_and_Nail", suggestion: "Tooth and Nail" },
  { id: 653, name: "Binge_Eater", suggestion: "Binge Eater" },
  { id: 654, name: "Guppy_s_Eye", suggestion: "Guppy's Eye" },
  { id: 655, name: "Strawman", suggestion: "Strawman" },
  { id: 656, name: "Dad_s_Note", suggestion: "Dad's Note" },
  { id: 657, name: "Sausage", suggestion: "Sausage" },
  { id: 658, name: "Options", suggestion: "Options?" },
  { id: 659, name: "Candy_Heart", suggestion: "Candy Heart" },
  { id: 660, name: "A_Pound_of_Flesh", suggestion: "A Pound of Flesh" },
  { id: 661, name: "Redemption", suggestion: "Redemption" },
  { id: 662, name: "Spirit_Shackles", suggestion: "Spirit Shackles" },
  { id: 663, name: "Cracked_Orb", suggestion: "Cracked Orb" },
  { id: 664, name: "Empty_Heart", suggestion: "Empty Heart" },
  { id: 665, name: "Astral_Projection", suggestion: "Astral Projection" },
  { id: 666, name: "C_Section", suggestion: "C Section" },
  { id: 667, name: "Lil_Abaddon", suggestion: "Lil Abaddon" },
  { id: 668, name: "Montezuma_s_Revenge", suggestion: "Montezuma's Revenge" },
  { id: 669, name: "Lil_Portal", suggestion: "Lil Portal" },
  { id: 670, name: "Worm_Friend", suggestion: "Worm Friend" },
  { id: 671, name: "Bone_Spurs", suggestion: "Bone Spurs" },
  { id: 672, name: "Hungry_Soul", suggestion: "Hungry Soul" },
  { id: 673, name: "Jar_of_Wisps", suggestion: "Jar of Wisps" },
  { id: 674, name: "Soul_Locket", suggestion: "Soul Locket" },
  { id: 675, name: "Friend_Finder", suggestion: "Friend Finder" },
  { id: 676, name: "Inner_Child", suggestion: "Inner Child" },
  { id: 677, name: "Glitched_Crown", suggestion: "Glitched Crown" },
  { id: 678, name: "Belly_Jelly", suggestion: "Belly Jelly" },
  { id: 679, name: "Sacred_Orb", suggestion: "Sacred Orb" },
  { id: 680, name: "Sanguine_Bond", suggestion: "Sanguine Bond" },
  { id: 681, name: "The_Swarm", suggestion: "The Swarm" },
  { id: 682, name: "Heartbreak", suggestion: "Heartbreak" },
  { id: 683, name: "Bloody_Gust", suggestion: "Bloody Gust" },
  { id: 684, name: "Salvation", suggestion: "Salvation" },
  { id: 685, name: "Vanishing_Twin", suggestion: "Vanishing Twin" },
  { id: 686, name: "Twisted_Pair", suggestion: "Twisted Pair" },
  { id: 687, name: "Azazel_s_Rage", suggestion: "Azazel's Rage" },
  { id: 688, name: "Echo_Chamber", suggestion: "Echo Chamber" },
  { id: 689, name: "Isaac_s_Tomb", suggestion: "Isaac's Tomb" },
  { id: 690, name: "Vengeful_Spirit", suggestion: "Vengeful Spirit" },
  { id: 691, name: "Esau_Jr.", suggestion: "Esau Jr." },
  { id: 692, name: "Berserk_", suggestion: "Berserk!" },
  { id: 693, name: "Dark_Arts", suggestion: "Dark Arts" },
  { id: 694, name: "Abyss", suggestion: "Abyss" },
  { id: 695, name: "Supper", suggestion: "Supper" },
  { id: 696, name: "Stapler", suggestion: "Stapler" },
  { id: 697, name: "Suplex_", suggestion: "Suplex!" },
  { id: 698, name: "Bag_of_Crafting", suggestion: "Bag of Crafting" },
  { id: 699, name: "Flip", suggestion: "Flip" },
  { id: 700, name: "Lemegeton", suggestion: "Lemegeton" },
  { id: 701, name: "Sumptorium", suggestion: "Sumptorium" },
  { id: 702, name: "Keeper_s_Sack", suggestion: "Keeper's Sack" },
  { id: 703, name: "Keeper_s_Kin", suggestion: "Keeper's Kin" },
  { id: 704, name: "Keeper_s_Box", suggestion: "Keeper's Box" },
  { id: 705, name: "Everything_Jar", suggestion: "Everything Jar" },
  { id: 706, name: "TMTRAINER", suggestion: "TMTRAINER" },
  { id: 707, name: "Anima_Sola", suggestion: "Anima Sola" },
  { id: 708, name: "Spindown_Dice", suggestion: "Spindown Dice" },
  { id: 709, name: "Hypercoagulation", suggestion: "Hypercoagulation" },
  { id: 710, name: "IBS", suggestion: "IBS" },
  { id: 711, name: "Hemoptysis", suggestion: "Hemoptysis" },
  { id: 712, name: "Ghost_Bombs", suggestion: "Ghost Bombs" },
  { id: 713, name: "Gello", suggestion: "Gello" },
  { id: 714, name: "Decap_Attack", suggestion: "Decap Attack" },
  { id: 715, name: "Glass_Eye", suggestion: "Glass Eye" },
  { id: 716, name: "Stye", suggestion: "Stye" },
  { id: 717, name: "Mom_s_Ring", suggestion: "Mom's Ring" },
];

function clearPageFromTo() {
  document.getElementById("fromInput").value = "";
  document.getElementById("toInput").value = "";
  document.getElementById("resultFromTo").innerHTML = "";
}

function calculateItemFromTo() {
  const from = document.getElementById("fromInput").value;
  var to = document.getElementById("toInput").value;

  const fromID = items.find(
    (item) => item.suggestion.toLowerCase() === from.toLowerCase()
  );
  var toID = items.find(
    (item) => item.suggestion.toLowerCase() === to.toLowerCase()
  );
  // change toID to be a copy and not the same object
  toID = JSON.parse(JSON.stringify(toID));
  const resultDiv = document.getElementById("resultFromTo");
  resultDiv.innerHTML = "";
  if (!(fromID && toID)) {
    resultDiv.innerHTML = '<p class="error">Item not found!</p>';
    return;
  }
  var dn = fromID.id - DADSNOTE_ID;
  if (fromID.id >= DADSNOTE_ID && toID.id <= DADSNOTE_ID && (!carBattery || dn % 2 == 0)) {
    if(carBattery && dn % 2 == 0){
      dn = dn / 2;
    }
    resultDiv.innerHTML = `<p class="error">Dad\'s Note is on the way after ${dn} spins </p>`;
    toID.name = DADSNOTE;
    toID.id = DADSNOTE_ID;
    toID.suggestion = "Dad's Note";
  }
  if (fromID.id < toID.id) {
    resultDiv.innerHTML =
      '<p class="error"><b>From</b> item must be lower than <b>To</b> item</p>';
    return;
  }
  var steps = fromID.id - toID.id;
  if (carBattery && steps % 2 == 1) {
    const cardBatteryNewDiv = document.createElement("div");
    cardBatteryNewDiv.classList.add("item");
    const cardBatteryNewText = document.createElement("p");
    cardBatteryNewText.classList.add("error");
    cardBatteryNewText.textContent = `Due to Car Battery, the item is not achievable`;
    cardBatteryNewDiv.appendChild(cardBatteryNewText);
    const cardBatteryNewImage = document.createElement("img");
    cardBatteryNewImage.src = `imgs/352_Car_Battery.png`;
    cardBatteryNewDiv.appendChild(cardBatteryNewImage);
    resultDiv.appendChild(cardBatteryNewDiv);
    return;
  }
  else if (carBattery && steps % 2 == 0) {
    steps = steps / 2;
  }
  const result = document.createElement("div");
  result.classList.add("item");

  const imgFrom = document.createElement("img");
  imgFrom.src = `imgs/${fromID.id}_${fromID.name}.png`;
  result.appendChild(imgFrom);

  const text = document.createElement("p");
  text.textContent = `${fromID.suggestion}`;
  result.appendChild(text);

  const text2 = document.createElement("p");
  text2.textContent = `→ ${steps} spins → `;
  result.appendChild(text2);

  const imgTo = document.createElement("img");
  imgTo.src = `imgs/${toID.id}_${toID.name}.png`;
  result.appendChild(imgTo);

  const text3 = document.createElement("p");
  text3.textContent = `${toID.suggestion}`;
  result.appendChild(text3);

  resultDiv.appendChild(result);
}

// Function to filter items based on user input
function filterItems(input) {
  return items.filter((item) =>
    item.suggestion.toLowerCase().includes(input.toLowerCase())
  );
}

const DADSNOTE = "Dad_s_Note";
const DADSNOTE_ID = 656;

function clearPage() {
  document.getElementById("itemInput").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("selected").innerHTML = "";
  document.getElementById("searchResult").innerHTML = "";
}

// Function to display suggestions
function displaySuggestions(input, suggestionsDivId, inputId) {
  const suggestionsDiv = document.getElementById(suggestionsDivId);
  suggestionsDiv.innerHTML = "";

  const filteredItems = filterItems(input);
  filteredItems.forEach((item) => {
    const suggestion = document.createElement("div");
    suggestion.textContent = item.suggestion;
    suggestion.classList.add("suggestion");
    suggestion.addEventListener("click", () => {
      document.getElementById(inputId).value = item.suggestion;
      if (inputId == "itemInput") {
        calculateItem();
      }
      if (inputId == "searchInput") {
        calculateItem(item.suggestion);
      }
      suggestionsDiv.innerHTML = "";
    });
    suggestionsDiv.appendChild(suggestion);
  });
}

function switchLabels() {
  const from = document.getElementById("fromInput").value;
  const to = document.getElementById("toInput").value;
  document.getElementById("fromInput").value = to;
  document.getElementById("toInput").value = from;
  calculateItemFromTo();
}

function loadImage(item, result) {
  const imgSrc = `imgs/${item.id}_${item.name}.png`;

  // Check if the image URL is in localStorage
  const cachedImage = localStorage.getItem(imgSrc);

  if (cachedImage) {
    // If the image URL is in localStorage, create an image element with the cached URL
    const img = document.createElement("img");
    img.src = cachedImage;
    console.log("found cached image");
    result.appendChild(img);
  } else {
    // If the image URL is not in localStorage, create a new image element
    const img = document.createElement("img");
    img.src = imgSrc;

    // Append the image to the result element
    result.appendChild(img);

    // Store the image URL in localStorage for future use
    localStorage.setItem(imgSrc, img.src);
  }
}

function createItem(item, number, up = true) {
  const arrow = up ? "↑" : "↓";
  const result = document.createElement("div");
  result.classList.add("clickableItem");
  loadImage(item, result);
  // const img = document.createElement("img");
  // img.src = `imgs/${item.id}_${item.name}.png`;
  // result.appendChild(img);

  const text = document.createElement("p");
  text.textContent = `${item.suggestion} (Spins: ${number}) ${arrow}`;
  result.appendChild(text);

  // add that when you click on the item it will be added to the input
  result.addEventListener("click", () => {
    document.getElementById("itemInput").value = item.suggestion;
    calculateItem();
  });

  return result;
}

// Function to calculate and display the result
function calculateItem(suggestion = undefined) {
  const input = document.getElementById("itemInput").value;
  const resultDiv = document.getElementById("result");
  const selectedDiv = document.getElementById("selected");
  const serchDiv = document.getElementById("searchResult");
  serchDiv.innerHTML = "";
  const sliderValue = document.getElementById("myRange").value;
  const selectedItem = items.find(
    (item) => item.suggestion.toLowerCase() === input.toLowerCase()
  );
  // TODO: I may have used the opposite variables names, check it
  if (selectedItem) {
    selectedDiv.innerHTML = `<p><strong>Selected Item:</strong> ${selectedItem.suggestion}</p>`;
    // add the image inside from imgs/ID_Item_Name.png
    const img = document.createElement("img");
    img.src = `imgs/${selectedItem.id}_${selectedItem.name}.png`;
    selectedDiv.appendChild(img);

    // SHOW THE SEARCH BOX
    const searchText = document.createElement("p");
    searchText.textContent = "Search for an item in the results:";
    serchDiv.appendChild(searchText);
    const input = document.createElement("input");
    input.type = "text";
    input.id = "searchInput";
    input.placeholder = "Search";
    input.addEventListener("input", (event) => {
      const inputValue = event.target.value;
      displaySuggestions(inputValue, "searchSuggestions", "searchInput");
    });
    serchDiv.appendChild(input);

    // START SEARCH OF THE ITEMS
    const previousItemsDiv = document.createElement("div");
    previousItemsDiv.id = "leftDiv";
    previousItemsDiv.innerHTML = `<p><strong>(up to) ${sliderValue} Items generated from spinning down the selected one:</strong></p>`;
    var endI = selectedItem.id <= sliderValue ? selectedItem.id : sliderValue;
    var found;
    endI = carBattery ? endI * 2 : endI;
    for (let i = 1; i <= endI; i++) {
      if (carBattery && i % 2 == 1) {
        continue;
      }
      const previousItem = items.find(
        (item) => item.id === selectedItem.id - i
      );
      if (previousItem) {
        const iValue = carBattery ? i / 2 : i;
        const item = createItem(previousItem, iValue, false);
        if (
          suggestion &&
          previousItem.suggestion.toLowerCase() === suggestion.toLowerCase()
        ) {
          item.classList.add("found");
          found = item;
        }
        previousItemsDiv.appendChild(item);
      }
      if (previousItem && previousItem.name == DADSNOTE) {
        const error = document.createElement("p");
        error.classList.add("error");
        error.textContent = "Dad's Note is on the way!";
        previousItemsDiv.appendChild(error);
        break;
      }
    }

    const nextItemsDiv = document.createElement("div");
    nextItemsDiv.id = "rightDiv";
    nextItemsDiv.innerHTML = `<p><strong>(up to) ${sliderValue} Items that would get you to the selected one:</strong></p>`;

    endI =
      717 - selectedItem.id > sliderValue ? sliderValue : 717 - selectedItem.id;
      endI = carBattery ? endI * 2 : endI;
    for (let i = 1; i <= endI; i++) {
      if (carBattery && i % 2 == 1) {
        continue;
      }
      const nextItem = items.find((item) => item.id === selectedItem.id + i);
      if (nextItem) {
        const iValue = carBattery ? i / 2 : i;
        const item = createItem(nextItem, iValue);
        if (
          suggestion &&
          nextItem.suggestion.toLowerCase() === suggestion.toLowerCase()
        ) {
          item.classList.add("found");
          found = item;
        }
        nextItemsDiv.appendChild(item);
      }
      if (nextItem && nextItem.name == DADSNOTE) {
        const error = document.createElement("p");
        error.classList.add("error");
        error.textContent = "Dad's Note is on the way!";
        nextItemsDiv.appendChild(error);
        break;
      }
    }

    resultDiv.innerHTML = "";
    resultDiv.appendChild(previousItemsDiv);
    resultDiv.appendChild(nextItemsDiv);
    if (suggestion) {
      if (found) {
        found.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        searchText.innerHTML = `<p class="error">Not found in the results</p>`;
      }
    }
  } else {
    resultDiv.innerHTML = '<p class="error">Item not found!</p>';
    document.getElementById("suggestions").innerHTML = "";
    selectedDiv.innerHTML = "";
  }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("stringItems");

slider.oninput = function () {
  output.innerHTML = `Previous and following ${this.value} items:`;
};

// Event listener for input changes
document.getElementById("itemInput").addEventListener("input", (event) => {
  const inputValue = event.target.value;
  displaySuggestions(inputValue, "suggestions", "itemInput");
});

document.getElementById("fromInput").addEventListener("input", (event) => {
  const inputValue = event.target.value;
  displaySuggestions(inputValue, "suggestionsFrom", "fromInput");
});

document.getElementById("toInput").addEventListener("input", (event) => {
  const inputValue = event.target.value;
  displaySuggestions(inputValue, "suggestionsTo", "toInput");
});

var carBattery = false;
const containerBattery = document.getElementById("containerBattery");
containerBattery.addEventListener("click", () => {
  carBattery = !carBattery;
  containerBattery.style.backgroundColor = carBattery ? "#1e3e1e" : "#3e1e1e";
  const label = document.getElementById("carbattery");
  label.textContent = carBattery
    ? "I have Car Battery"
    : "I don't have Car Battery";
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
