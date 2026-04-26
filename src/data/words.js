// To add a new level:
//   1. Add an entry to WORD_LISTS (key becomes the level id, order determines display order)
//   2. Add a matching entry to LEVEL_INFO with label and stars (1–5)
//   3. Add a sentence for each new word to SENTENCES
export const WORD_LISTS = {
	level_1_general: ['antler','bang','barn','basket','black','broad','cabin','chess','chin','dawn','fair','fate','fleet','front','goat','holy','left','letter','mail','marble','monster','mood','pain','path','rare','rash','real','reap','royal','sale','scar','shake','sheep','shine','shoe','since','skim','smile','snore','snow','spider','spine','spoon','stamp','start','steel','swag','tact','tail','tide','total','tower','track','trust','vase','vine','wait','weak','yelp','young','zest'],
	level_1_food: ['damper','dine','fork','jelly','lemon','lime','meat','mince','mint','plate','salad','wash','wok','creek'],


	level_1_arts: ['dance', 'paint', 'part', 'plotsetting', 'sharp', 'skill', 'solo', 'songstage', 'story', 'strum', 'talent', 'titletone'],

	level_1_geography: ['France','inlet','Norway','Peru','sky','soil','storm','thunder','wild'],

	level_1_science: ['data','orbit','power','prove','record','ruler','scale','space','unit','volt','wire','worm'],

	level_1_sports: ['golf','match','netball','party','point','puck','race','sumo','team','throw','yoga'],

	level_2_arts: ['author','casting','clef','coda','creative','kiln','Lawson','movement','myth','opera','picture','puppet','saga','scene','semitone','stanza','statue','style','tango','tempo','topic','translate','viola','woodwind'],

	level_2_food: ['apricot','cherry','famine','flour','fruit','galley','kettle','miso','onion','pepper','pickle','ramen','rissole','sugar','tangy','thirsty','yeast'],

	level_2_general: ['absent','afford','afraid','ahead','aide','aircraft','alien','allow','already','amaze','another','appeal','approval','argue','astound','astray','awful','balance','bamboo','barren','bashful','beneath','bilby','bombard','brolga','burrow','cadet','canal','cardboard','cotton','coupon','curfew','custom','deduce','depth','describe','downscale','dual','duchess','elude','emerald','engulf','ferret','firebreak','fireworks','fluent','fourteen','frantic','funnel','furtive','garbage','garment','growth','harness','heyday','highlight','history','human','inferno','intersect','janitor','kneel','landfill','landscape','leech','leeway','lethal','limestone','loyal','mammal','mania','marine','massive','missile','moat','motion','mulga','navigate','nickname','nostril','nuzzle','peevish','pillow','practical','promise','prompt','propel','quickly','quirk','quiver','raincoat','relief','require','ritual','rudder','scandal','scarlet','sermon','serum','service','slather','sneeze','sonar','source','squirt','stifling','stork','strange','sublime','suggest','sullen','survey','suture','tadpole','talon','tangle','tantrum','tardy','tendon','tepid','thicket','thought','thousand','tiara','torment','trapdoor','trek','trinket','trite','underdog','unite','unseemly','untidy','upset','useless','vacate','vampire','vessel','victor','villa','virtue','vital','voice','wardrobe','weapon','wetsuit','whale','wheel','whine','wily','windmill','windpipe','wingspan','wishful','wonderful','wrist'],

	level_2_geography: ['Asia','atoll','Brazil','bushfire','canyon','cavern','delta','desert','Greece','India','island','landslide','magma','nature','Samoa','sleet','Sweden','Tonga','tundra'],

	level_2_science: ['Aldrin','compass','concave','cosmos','database','gradient','litre','measure','Newton','oblong','password','planet','refresh','Saturn','terminal','volume','Venus','width'],

	level_2_sports: ['arrow','backstroke','baseball','billycart','canoe','cosplay','enjoy','hobby','picnic','pontoon','rugby','sailor','skiff','sprint','stadium','swimming','tennis','travel','windsurf'],

	level_3_arts: ['antihero','ballad','Brahms','cameo','genre','handicraft','harmonica','italics','journal','language','lyrics','melody','minim','museum','octave','pianist','quill','rehearse','replica','satire','serenade','serial','simulcast','texture','tragedy','trilogy','Vivaldi'],

	level_3_food: ['appetite','artichoke','casserole','cereal','chocolate','chopsticks','congeal','coriander','crockery','delicious','gourmet','ingredient','kitchen','lamington','legume','margarine','porridge','punnet','quaff','salmon','vanilla','vegetable','vitamin','watermelon'],

	level_3_general: ['ability','abolish','absolute','absolve','accept','access','accomplish','ache','acre','address','adept','adverse','agitated','ailment','alibi','alley','alphabet','ambition','animated','announce','antelope','apology','appoint','arduous','argument','arrange','ashen','assign','astonish','astute','attempt','attire','auburn','auditor','aversion','axle','badger','bandicoot','beacon','beautiful','befuddle','belated','benign','blustery','bothersome','bounty','breathe','buffalo','buoy','cabana','callus','canopy','carriage','casual','caution','ceiling','certainty','certificate','chaos','chariot','chlorine','chortle','cockatoo','cocoon','coincide','colleague','comparable','compelling','complaint','composure','compulsive','concept','condemn','curtail','decipher','deluge','destitute','dilemma','diligent','docile','economical','emporium','faculty','feud','forgery','fortify','gaiety','gaudy','genial','ignorant','impediment','incongruous','infectious','infinite','influenza','innocent','insincere','insipid','integrity','intercept','intrigue','jaguar','jasmine','jocular','knight','knoll','languish','lattice','lectern','levitate','liberal','lightning','loathsome','logical','lorikeet','luggage','magazine','magistrate','mannerism','maritime','maximum','meagre','merciless','merriment','mischief','mobility','mosquito','naughty','negligent','negotiate','nocturnal','noticeable','notional','oblivion','obsolete','occupant','ogre','operator','ordinary','ostrich','pagoda','pancreas','pandemic','paradise','parasite','pathetic','patience','penguin','persuade','pertinent','perturbed','petition','photograph','pilgrim','platoon','plausible','podiatry','poison','political','pollinate','polyester','pompous','precede','premature','premier','presume','probable','problematic','promotion','propagate','proportion','protocol','provision','proximity','pungent','pursuit','qualified','quell','quibble','rampant','ramshackle','receive','reconcile','recuperate','reference','reindeer','resonate','responsible','reunion','rummage','scorpion','semester','shroud','signature','skeleton','sluggish','squawk','squelch','squirrel','sumptuous','sympathy','tangent','tangible','tedious','tuition','uninspired'],

	level_3_geography: ['abyss','atmosphere','Austria','billabong','Cairo','continent','Daintree','drought','Europe','floe','geology','glacier','horizon','isle','Kakadu','loch','Mexico','monsoon','Nepal','ozone','rainforest','universe','volcano'],

	level_3_science: ['abacus','altitude','antivirus','astronaut','Curie','current','decimal','divisible','Einstein','formula','galaxy','hertz','microscope','nucleus','polygon','prototype','quadrant','quadruple','ratio','research','rhombus','specimen'],

	level_3_sports: ['acrobat','activity','arena','ballet','baton','celebrate','charades','competitor','cycling','exercise','festival','forfeit','frolic','hammock','hopscotch','karate','lycra','meditate','medley','regatta','skateboard','snorkel','soccer','tranquil'],

	level_4_arts: ['annotate','antonym','character','critique','dialogue','documentary','elegy','exposition','falsetto','glossary','heroine','illustration','memoir','monochrome','musician','orator','playwright','rhythm','semibreve','simile','Spielberg','symphony','theatre'],

	level_4_food: ['anchovy','biscotti','boysenberry','brioche','cafeteria','celery','cuisine','delectable','digestion','frittata','guava','luncheon','nougat','quiche','recipe','sucrose','sustenance','vegetarian','wholegrain'],

	level_4_general: ['alteration','ambulance','anticipate','application','apprehend','architect','arguable','artery','arthritis','ascent','askew','assertion','associate','attraction','audible','authentic','automobile','aviator','bacteria','barrage','beneficial','besiege','biased','bilateral','bilious','biodiverse','blackcurrant','botanical','camellia','cartridge','catalogue','cathedral','census','centaur','centenary','ceremony','circumvent','compassion','competent','conclusion','congregation','consecutive','constrictor','continuous','controversy','convulsive','corporation','corral','courteous','cubicle','cumbersome','curiosity','dandelion','deceptive','decorative','decrepit','demonstration','deplorable','dermatology','deteriorate','diplomacy','discussion','dystopia','ecstasy','edifice','electricity','embarrass','eventual','experience','fastidious','ferocity','finicky','flagrant','generation','graffiti','guttural','helium','hilarious','immediate','imperial','impromptu','incision','infirmary','innuendo','instalment','intermittent','inundate','involuntary','jamboree','knuckle','luxuriant','mackerel','malady','malicious','medication','mercurial','meteorite','miniature','monarch','multicultural','mythical','niche','officious','ominous','optician','perceptible','philosophy','piteous','pleasurable','plethora','porcupine','promulgate','quandary','quokka','rehabilitate','reimburse','resilient','retrospective','righteous','salamander','sanitary','scaffolding','scenario','scoundrel','souvenir','stegosaurus','stethoscope','strategic','supervisor','surmount','symptom','synthetic','tenacious','territorial','tertiary','tomfoolery','treasurer','trepidation','triceratops','unanimous','unique','unruffled','upheaval','visibility','waratah'],

	level_4_geography: ['Belgium','caldera','cartography','fissure','Hillary','Himalayas','hurricane','Jamaica','Malaysia','monolith','oasis','Paraguay','plateau','precipice','squall','Switzerland','vegetation','Yosemite'],

	level_4_science: ['barometer','bisector','Celsius','circumference','combustion','contraption','decibel','diameter','evaporate','experiment','frequency','horizontal','observation','oxygen','parallel','programming','theorem','triangulate'],

	level_4_sports: ['adventurous','agility','amateur','billiards','bocce','breaststroke','challenger','deodorant','dexterity','dressage','entertainment','exhaustion','heavyweight','regimen','rejuvenate','semifinalist','stoppage','tournament','tricycle','wrestling','yacht'],

	level_5_arts: ['acronym','allegretto','anecdote','cinematography','conservatorium','fictitious','haiku','manuscript','melodramatic','orchestra','oxymoron','portraiture','synonym','vaudeville'],

	level_5_food: ['arancini','camembert','confectionery','delicatessen','focaccia','gnocchi','meringue','mortadella','pistachio','tortilla'],

	level_5_general: ['amphibious','analgesic','anecdotal','antecedent','archetype','aspersion','autonomous','bankruptcy','barrister','boisterous','cachet','capricious','catastrophe','celestial','cerebral','commissioner','conurbation','curriculum','cyclamen','cynicism','ebullient','egotistical','euphemism','foible','fortuitous','gargoyle','geriatric','gesticulate','gratuitous','inauguration','innocuous','interrogation','irreversible','linoleum','liquidambar','monastery','naturopathy','necessity','pandemonium','peripheral','perpendicular','precocious','preferential','prejudice','privilege','prodigious','psychology','superannuation','superstitious','warranty','wildebeest','wrasse','zoological'],

	level_5_geography: ['Caribbean','crevasse','Indonesia','Nullarbor','precipitation','seismology','sirocco','stalactite','Vanuatu','Zimbabwe'],

	level_5_science: ['algebra','alkali','alphanumeric','ampere','chromosome','equilateral','Galileo','laboratory','mathematician','millimetre','temperature'],

	level_5_sports: ['abseiling','aikido','carbohydrate','catapult','commentator','nemesis','physiotherapy','quadriceps','solitaire','strenuous'],

};


