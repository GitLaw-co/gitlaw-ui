// Zest Illustrations Manifest
// Source: https://www.figma.com/design/ESVXNLwUE88l7lz8xK6st8/Zest-Illustrations
// All illustrations are 1000x1000px
// Files are stored in: public/illustrations/

export interface IllustrationMeta {
  id: string;
  filename: string;
  name: string;
  keywords: string[];
  category: string;
}

export const illustrations: IllustrationMeta[] = [
  // Accounts
  { id: 'profile-account', filename: 'accounts _ profile, account, user, dating, employee, woman, hiring, casting.svg', name: 'Profile Account', keywords: ['accounts', 'profile', 'account', 'user', 'dating', 'employee', 'woman', 'hiring', 'casting'], category: 'Accounts' },

  // Achievements
  { id: 'trophy-award', filename: 'achievements _ trophy, award, reward, accomplishment, hand gesture, sports, winner.svg', name: 'Trophy Award', keywords: ['achievements', 'trophy', 'award', 'reward', 'accomplishment', 'sports', 'winner'], category: 'Achievements' },

  // Agriculture
  { id: 'gardening-plants', filename: 'agriculture _ woman, gardening, plants, plant, pots, house plants.svg', name: 'Gardening Plants', keywords: ['agriculture', 'woman', 'gardening', 'plants', 'plant', 'pots', 'house plants'], category: 'Agriculture' },

  // Animals
  { id: 'bird-nature', filename: 'animals, character builder _ man, person, bird, nature, ecology, preservation, kindness.svg', name: 'Bird Nature', keywords: ['animals', 'man', 'person', 'bird', 'nature', 'ecology', 'preservation', 'kindness'], category: 'Animals' },
  { id: 'walking-dog', filename: 'animals, pets _ walking dog, dog, animal, pet, struggle, woman.svg', name: 'Walking Dog', keywords: ['animals', 'pets', 'walking dog', 'dog', 'animal', 'pet', 'struggle', 'woman'], category: 'Animals' },

  // Business
  { id: 'presentation', filename: 'business _ graph, chart, presentation, profit, dashboard, performance.svg', name: 'Presentation', keywords: ['business', 'graph', 'chart', 'presentation', 'profit', 'dashboard', 'performance'], category: 'Business' },
  { id: 'idea-lightbulb', filename: 'business _ idea, thought, innovation, innovative, lightbulb, light, energy, power.svg', name: 'Idea Lightbulb', keywords: ['business', 'idea', 'thought', 'innovation', 'innovative', 'lightbulb', 'energy', 'power'], category: 'Business' },
  { id: 'promotion-level', filename: 'business _ promotion, employee, level up, status, opportunity, increase.svg', name: 'Promotion Level', keywords: ['business', 'promotion', 'employee', 'level up', 'status', 'opportunity', 'increase'], category: 'Business' },
  { id: 'chess-piece', filename: 'business _ strategy, chess, gameplan, man, chess piece, person.svg', name: 'Chess Piece', keywords: ['business', 'strategy', 'chess', 'gameplan', 'man', 'chess piece', 'person'], category: 'Business' },
  { id: 'presentation-woman', filename: 'business, education _ presentation, project, dashboard, performance, woman, profit margin.svg', name: 'Presentation Woman', keywords: ['business', 'education', 'presentation', 'project', 'dashboard', 'performance', 'woman'], category: 'Business' },
  { id: 'profit-chart', filename: 'food, business _ profit, graph, chart, dashboard, performance, hand gesture.svg', name: 'Profit Chart', keywords: ['business', 'profit', 'graph', 'chart', 'dashboard', 'performance'], category: 'Business' },

  // Communication
  { id: 'paper-airplane', filename: 'communication _ paper airplane, message, memo, activity, hobby, man, throw.svg', name: 'Paper Airplane', keywords: ['communication', 'paper airplane', 'message', 'memo', 'activity', 'hobby', 'man', 'throw'], category: 'Communication' },
  { id: 'telephone-call', filename: 'communication _ telephone, phone, communicate, call, conversation, woman.svg', name: 'Telephone Call', keywords: ['communication', 'telephone', 'phone', 'communicate', 'call', 'conversation', 'woman'], category: 'Communication' },
  { id: 'mailbox-full', filename: 'communication, emails _ mail, full, mailbox, inbox, alert, warning, notification, woman.svg', name: 'Mailbox Full', keywords: ['communication', 'emails', 'mail', 'full', 'mailbox', 'inbox', 'alert', 'warning', 'notification', 'woman'], category: 'Communication' },

  // Construction
  { id: 'build-shapes', filename: 'construction _ hand gesture, build, composition, shapes, design, building.svg', name: 'Build Shapes', keywords: ['construction', 'build', 'composition', 'shapes', 'design', 'building'], category: 'Construction' },
  { id: 'wall-building', filename: 'construction _ wall, building, security, home, house, worker, job, occupation.svg', name: 'Wall Building', keywords: ['construction', 'wall', 'building', 'security', 'home', 'house', 'worker', 'job'], category: 'Construction' },

  // Delete
  { id: 'trash-recycle', filename: 'delete _ trash, bin, remove, empty, woman, recycle.svg', name: 'Trash Recycle', keywords: ['delete', 'trash', 'bin', 'remove', 'empty', 'woman', 'recycle'], category: 'Delete' },

  // Delivery
  { id: 'multiple-packages', filename: 'delivery _ box, logistic, delivery man, package, multiple, distribution.svg', name: 'Multiple Packages', keywords: ['delivery', 'box', 'logistic', 'delivery man', 'package', 'multiple', 'distribution'], category: 'Delivery' },
  { id: 'gift-present', filename: 'delivery _ gift, present, holiday, box, package, woman, person, build, ladder.svg', name: 'Gift Present', keywords: ['delivery', 'gift', 'present', 'holiday', 'box', 'package', 'woman'], category: 'Delivery' },
  { id: 'empty-box', filename: 'delivery _ logistic, empty, order, box, package, lost, tracking, not delivered.svg', name: 'Empty Box', keywords: ['delivery', 'logistic', 'empty', 'order', 'box', 'package', 'lost', 'tracking', 'not delivered'], category: 'Delivery' },
  { id: 'delivery-man', filename: 'delivery _ package, box, delivery man, warehouse, storage, logistic.svg', name: 'Delivery Man', keywords: ['delivery', 'package', 'box', 'delivery man', 'warehouse', 'storage', 'logistic'], category: 'Delivery' },

  // Design
  { id: 'art-painting', filename: 'design _ art, hobby, activity, painting, paint, graphic design, painter.svg', name: 'Art Painting', keywords: ['design', 'art', 'hobby', 'activity', 'painting', 'paint', 'graphic design', 'painter'], category: 'Design' },
  { id: 'draw-edit', filename: 'design _ draw, edit, graphic design, pencil, illustration, sketch.svg', name: 'Draw Edit', keywords: ['design', 'draw', 'edit', 'graphic design', 'pencil', 'illustration', 'sketch'], category: 'Design' },

  // Downloads
  { id: 'cloud-upload', filename: 'download _ upload, cloud, transfer, archive, data, database, backup.svg', name: 'Cloud Upload', keywords: ['download', 'upload', 'cloud', 'transfer', 'archive', 'data', 'database', 'backup'], category: 'Downloads' },
  { id: 'laptop-upload', filename: 'download _ upload, data, database, archive, cloud, backup, laptop, transfer.svg', name: 'Laptop Upload', keywords: ['download', 'upload', 'data', 'database', 'archive', 'cloud', 'backup', 'laptop', 'transfer'], category: 'Downloads' },

  // E-commerce / Shopping
  { id: 'shopping-bags', filename: 'e-commerce, shopping _ shop, purchase, store, check out, shopping bags, woman.svg', name: 'Shopping Bags', keywords: ['e-commerce', 'shopping', 'shop', 'purchase', 'store', 'check out', 'shopping bags', 'woman'], category: 'Shopping' },
  { id: 'shopping-cart', filename: 'shopping _ groceries, shop, store, shopping cart, purchase, buy.svg', name: 'Shopping Cart', keywords: ['shopping', 'groceries', 'shop', 'store', 'shopping cart', 'purchase', 'buy'], category: 'Shopping' },

  // Education
  { id: 'reading-woman', filename: 'education _ woman, reading, read, library, drink, beverage, research, study.svg', name: 'Reading Woman', keywords: ['education', 'woman', 'reading', 'read', 'library', 'drink', 'research', 'study'], category: 'Education' },

  // Emails & Messages
  { id: 'inbox-hand', filename: 'emails _ inbox, mail, envelope, email, hand gesture, message.svg', name: 'Inbox Hand', keywords: ['emails', 'inbox', 'mail', 'envelope', 'email', 'message'], category: 'Messages' },
  { id: 'inbox-unread', filename: 'emails, messages _ message, envelope, email, mail, inbox, unread, read.svg', name: 'Inbox Unread', keywords: ['emails', 'messages', 'message', 'envelope', 'email', 'mail', 'inbox', 'unread', 'read'], category: 'Messages' },
  { id: 'email-confirm', filename: 'emaisl, messages _ email, mail, message, envelope, confirm, complete.svg', name: 'Email Confirm', keywords: ['emails', 'messages', 'email', 'mail', 'message', 'envelope', 'confirm', 'complete'], category: 'Messages' },
  { id: 'email-message', filename: 'messages, emails _ message, email, mail, envelope, communication, person.svg', name: 'Email Message', keywords: ['messages', 'emails', 'message', 'email', 'mail', 'envelope', 'communication', 'person'], category: 'Messages' },

  // Energy
  { id: 'unplug-power', filename: 'energy, ecology _ power, electricity, unplug, cable, socket, hand gesture.svg', name: 'Unplug Power', keywords: ['energy', 'ecology', 'power', 'electricity', 'unplug', 'cable', 'socket'], category: 'Energy' },

  // Files & Office
  { id: 'bookmark-folder', filename: 'files and folders _ bookmark, folder, woman, file, rating, review, employee.svg', name: 'Bookmark Folder', keywords: ['files', 'folders', 'bookmark', 'folder', 'woman', 'file', 'rating', 'review'], category: 'Office' },
  { id: 'filing-archive', filename: 'office _ filing, archive, storage, sort, folder, file, woman.svg', name: 'Filing Archive', keywords: ['office', 'filing', 'archive', 'storage', 'sort', 'folder', 'file', 'woman'], category: 'Office' },

  // Finance
  { id: 'credit-card', filename: 'finance _ credit card, debit card, banking, financial, payment, bank.svg', name: 'Credit Card', keywords: ['finance', 'credit card', 'debit card', 'banking', 'financial', 'payment', 'bank'], category: 'Finance' },
  { id: 'cryptocurrency', filename: 'finance _ cryptocurrency, mining, money, dollar, currency, struck gold.svg', name: 'Cryptocurrency', keywords: ['finance', 'cryptocurrency', 'mining', 'money', 'dollar', 'currency'], category: 'Finance' },
  { id: 'debt-payment', filename: 'finance _ debt, payment, mortgage, money, banking, loan.svg', name: 'Debt Payment', keywords: ['finance', 'debt', 'payment', 'mortgage', 'money', 'banking', 'loan'], category: 'Finance' },
  { id: 'investment-growth', filename: 'finance _ investment, profit, watering, garden, savings, banking, money.svg', name: 'Investment Growth', keywords: ['finance', 'investment', 'profit', 'watering', 'garden', 'savings', 'banking', 'money'], category: 'Finance' },
  { id: 'money-balance', filename: 'finance _ money, balance, dollar, savings, banking, investment, profit.svg', name: 'Money Balance', keywords: ['finance', 'money', 'balance', 'dollar', 'savings', 'banking', 'investment', 'profit'], category: 'Finance' },
  { id: 'piggy-bank', filename: 'finance _ savings, piggy bank, home, investment, dollar, money.svg', name: 'Piggy Bank', keywords: ['finance', 'savings', 'piggy bank', 'home', 'investment', 'dollar', 'money'], category: 'Finance' },

  // Food
  { id: 'ice-cream', filename: 'food _ ice cream, dessert, snack, cone, melting, summer.svg', name: 'Ice Cream', keywords: ['food', 'ice cream', 'dessert', 'snack', 'cone', 'melting', 'summer'], category: 'Food' },
  { id: 'garden-fruit', filename: 'food, agriculture _ garden, fruit, organic, ecology, farming, woman.svg', name: 'Garden Fruit', keywords: ['food', 'agriculture', 'garden', 'fruit', 'organic', 'ecology', 'farming', 'woman'], category: 'Food' },

  // Hobbies
  { id: 'fishing', filename: 'hobby _ activity, fishing, fishing pole, man, person.svg', name: 'Fishing', keywords: ['hobby', 'activity', 'fishing', 'fishing pole', 'man', 'person'], category: 'Hobbies' },
  { id: 'kite-flying', filename: 'hobby _ kite, flying a kite, activity, hobbies, outdoors.svg', name: 'Kite Flying', keywords: ['hobby', 'kite', 'flying a kite', 'activity', 'hobbies', 'outdoors'], category: 'Hobbies' },

  // Holidays
  { id: 'birthday-cake', filename: 'holidays _ birthday, celebration, cake, party, occasion, event.svg', name: 'Birthday Cake', keywords: ['holidays', 'birthday', 'celebration', 'cake', 'party', 'occasion', 'event'], category: 'Holidays' },

  // Lifestyle
  { id: 'meditation', filename: 'lifestyle _ meditation, meditate, man, zen, yoga, yogi, activity.svg', name: 'Meditation', keywords: ['lifestyle', 'meditation', 'meditate', 'man', 'zen', 'yoga', 'yogi', 'activity'], category: 'Lifestyle' },

  // Location & Travel
  { id: 'luggage-destination', filename: 'location, travel _ travelling, luggage, baggage, suitcase, destination, navigation.svg', name: 'Luggage Destination', keywords: ['location', 'travel', 'travelling', 'luggage', 'baggage', 'suitcase', 'destination', 'navigation'], category: 'Travel' },

  // Marketing
  { id: 'megaphone', filename: 'marketing _ announcement, megaphone, promotion, sale, protest.svg', name: 'Megaphone', keywords: ['marketing', 'announcement', 'megaphone', 'promotion', 'sale', 'protest'], category: 'Marketing' },
  { id: 'magnet-attract', filename: 'marketing _ magnet, attract, target, audience, click bait, promotion.svg', name: 'Magnet Attract', keywords: ['marketing', 'magnet', 'attract', 'target', 'audience', 'click bait', 'promotion'], category: 'Marketing' },
  { id: 'trumpet-announcement', filename: 'music, marketing _ promotion, newsletter, announcement, trumpet, musician.svg', name: 'Trumpet Announcement', keywords: ['music', 'marketing', 'promotion', 'newsletter', 'announcement', 'trumpet', 'musician'], category: 'Marketing' },

  // Media
  { id: 'movie-camera', filename: 'media _ movie, multimedia, camera, director, man.svg', name: 'Movie Camera', keywords: ['media', 'movie', 'multimedia', 'camera', 'director', 'man'], category: 'Media' },
  { id: 'video-play', filename: 'media _ video, clip, multimedia, man, play, ad, advertisement.svg', name: 'Video Play', keywords: ['media', 'video', 'clip', 'multimedia', 'man', 'play', 'ad', 'advertisement'], category: 'Media' },
  { id: 'photo-gallery', filename: 'photography, media _ picture, photo, woman, gallery, multimedia, explore.svg', name: 'Photo Gallery', keywords: ['photography', 'media', 'picture', 'photo', 'woman', 'gallery', 'multimedia', 'explore'], category: 'Media' },

  // Navigation
  { id: 'boat-sail', filename: 'navigation _ boat, sail, search, find, telescope, discover, explore.svg', name: 'Boat Sail', keywords: ['navigation', 'boat', 'sail', 'search', 'find', 'telescope', 'discover', 'explore'], category: 'Navigation' },
  { id: 'lighthouse', filename: 'navigation _ explore, discover, lighthouse, island, travel, sea, ocean.svg', name: 'Lighthouse', keywords: ['navigation', 'explore', 'discover', 'lighthouse', 'island', 'travel', 'sea', 'ocean'], category: 'Navigation' },
  { id: 'telescope-explore', filename: 'navigation _ explore, search, find, telescope, discover, navigate, woman.svg', name: 'Telescope Explore', keywords: ['navigation', 'explore', 'search', 'find', 'telescope', 'discover', 'navigate', 'woman'], category: 'Navigation' },
  { id: 'location-lost', filename: 'navigation _ location, map, destination, direction, question, lost, need help.svg', name: 'Location Lost', keywords: ['navigation', 'location', 'map', 'destination', 'direction', 'question', 'lost', 'need help'], category: 'Navigation' },
  { id: 'globe-search', filename: 'navigation, travel _ global, international, geography, search, magnifier, explore, discover.svg', name: 'Globe Search', keywords: ['navigation', 'travel', 'global', 'international', 'geography', 'search', 'magnifier', 'explore', 'discover'], category: 'Navigation' },

  // Rating & Feedback
  { id: 'thumbs-up', filename: 'rating _ ratings, review, feedback, like, thumbs up, woman, approve, complete.svg', name: 'Thumbs Up', keywords: ['rating', 'ratings', 'review', 'feedback', 'like', 'thumbs up', 'woman', 'approve', 'complete'], category: 'Feedback' },
  { id: 'star-rating', filename: 'rating _ star, review, ratings, stars, man, feedback.svg', name: 'Star Rating', keywords: ['rating', 'star', 'review', 'ratings', 'stars', 'man', 'feedback'], category: 'Feedback' },

  // Real Estate
  { id: 'door-entrance', filename: 'real estate _ entrance, exit, door, man, knocking, front door, guests, neighbour.svg', name: 'Door Entrance', keywords: ['real estate', 'entrance', 'exit', 'door', 'man', 'knocking', 'front door'], category: 'Real Estate' },
  { id: 'house-home', filename: 'real estate _ house, home, hand gesture, building, property.svg', name: 'House Home', keywords: ['real estate', 'house', 'home', 'building', 'property'], category: 'Real Estate' },

  // Relationships
  { id: 'bouquet-flowers', filename: 'relationships _ bouquet, flowers, flower, man, person, romance, valentine.svg', name: 'Bouquet Flowers', keywords: ['relationships', 'bouquet', 'flowers', 'flower', 'man', 'person', 'romance', 'valentine'], category: 'Relationships' },

  // Search
  { id: 'document-search', filename: 'search _ find, research, scan, article, document, file, magnifier.svg', name: 'Document Search', keywords: ['search', 'find', 'research', 'scan', 'article', 'document', 'file', 'magnifier'], category: 'Search' },

  // Security
  { id: 'lock-protection', filename: 'security _ lock, padlock, man, protection, safety, privacy.svg', name: 'Lock Protection', keywords: ['security', 'lock', 'padlock', 'man', 'protection', 'safety', 'privacy'], category: 'Security' },
  { id: 'password-vault', filename: 'security _ password, safe, vault, hand gesture, pincode, privacy.svg', name: 'Password Vault', keywords: ['security', 'password', 'safe', 'vault', 'pincode', 'privacy'], category: 'Security' },
  { id: 'antivirus-complete', filename: 'security _ protection, safety, antivirus, up to date, confirm, complete.svg', name: 'Antivirus Complete', keywords: ['security', 'protection', 'safety', 'antivirus', 'up to date', 'confirm', 'complete'], category: 'Security' },
  { id: 'shield-sword', filename: 'security _ protection, safety, shield, sword, weapon, warrior, insurance.svg', name: 'Shield Sword', keywords: ['security', 'protection', 'safety', 'shield', 'sword', 'weapon', 'warrior', 'insurance'], category: 'Security' },

  // Settings
  { id: 'dial-configuration', filename: 'settings _ dial, configuration, options, preferences, man, on, off.svg', name: 'Dial Configuration', keywords: ['settings', 'dial', 'configuration', 'options', 'preferences', 'man', 'on', 'off'], category: 'Settings' },
  { id: 'gear-tools', filename: 'settings _ options, preferences, maintenance, configuration, gear, tools, wrench, repair.svg', name: 'Gear Tools', keywords: ['settings', 'options', 'preferences', 'maintenance', 'configuration', 'gear', 'tools', 'wrench', 'repair'], category: 'Settings' },

  // Sports
  { id: 'flags-direction', filename: 'sports _ flags, flag, woman, person, direction, navigation.svg', name: 'Flags Direction', keywords: ['sports', 'flags', 'flag', 'woman', 'person', 'direction', 'navigation'], category: 'Sports' },
  { id: 'archery', filename: 'sports _ man, arrow, archery, bow and arrow, olympics, athletes.svg', name: 'Archery', keywords: ['sports', 'man', 'arrow', 'archery', 'bow and arrow', 'olympics', 'athletes'], category: 'Sports' },
  { id: 'winner-trophy', filename: 'sports _ winner, winning, competition, first, celebration, sport, olympics, race.svg', name: 'Winner Trophy', keywords: ['sports', 'winner', 'winning', 'competition', 'first', 'celebration', 'sport', 'olympics', 'race'], category: 'Sports' },
  { id: 'chess-strategy', filename: 'sports, business _ chess, strategy, gameplan, winning, winner.svg', name: 'Chess Strategy', keywords: ['sports', 'business', 'chess', 'strategy', 'gameplan', 'winning', 'winner'], category: 'Sports' },
  { id: 'running', filename: 'sports, character builder _ running, run, jog, man, person, active, speed.svg', name: 'Running', keywords: ['sports', 'running', 'run', 'jog', 'man', 'person', 'active', 'speed'], category: 'Sports' },

  // Support
  { id: 'superhero', filename: 'support _ hero, superhero, fly, rescue, emergency, man.svg', name: 'Superhero', keywords: ['support', 'hero', 'superhero', 'fly', 'rescue', 'emergency', 'man'], category: 'Support' },

  // Technology
  { id: 'satellite', filename: 'technology _ satellite, communication, signal, satellite dish, broadcast.svg', name: 'Satellite', keywords: ['technology', 'satellite', 'communication', 'signal', 'satellite dish', 'broadcast'], category: 'Technology' },
  { id: 'wifi-disconnect', filename: 'technology, mobile device _ wifi, wireless, internet, connection, no, disconnect, smartphone.svg', name: 'WiFi Disconnect', keywords: ['technology', 'mobile', 'wifi', 'wireless', 'internet', 'connection', 'no', 'disconnect', 'smartphone'], category: 'Technology' },

  // Tools
  { id: 'bell-notification', filename: 'tools _ alert, bell, notification, alarm, sound, audio, announcement, reminder.svg', name: 'Bell Notification', keywords: ['tools', 'alert', 'bell', 'notification', 'alarm', 'sound', 'audio', 'announcement', 'reminder'], category: 'Tools' },
  { id: 'flashlight-search', filename: 'tools _ flashlight, torch, search, find, discover, navigation, explore.svg', name: 'Flashlight Search', keywords: ['tools', 'flashlight', 'torch', 'search', 'find', 'discover', 'navigation', 'explore'], category: 'Tools' },
  { id: 'notes-reminder', filename: 'tools _ notes, reminder, pinned, pin, document, paper, to do list, tasks.svg', name: 'Notes Reminder', keywords: ['tools', 'notes', 'reminder', 'pinned', 'pin', 'document', 'paper', 'to do list', 'tasks'], category: 'Tools' },
  { id: 'clock-warning', filename: 'tools _ time, clock, alarm, alert, reminder, warning, notification.svg', name: 'Clock Warning', keywords: ['tools', 'time', 'clock', 'alarm', 'alert', 'reminder', 'warning', 'notification'], category: 'Tools' },
  { id: 'clock-alarm', filename: 'tools _ time, deadline, clock, timer, countdown, reminder, alarm.svg', name: 'Clock Alarm', keywords: ['tools', 'time', 'deadline', 'clock', 'timer', 'countdown', 'reminder', 'alarm'], category: 'Tools' },

  // Travel & Transportation
  { id: 'scooter', filename: 'transportation _ scooter, woman, transport, vehicle, travel, backpack.svg', name: 'Scooter', keywords: ['transportation', 'scooter', 'woman', 'transport', 'vehicle', 'travel', 'backpack'], category: 'Travel' },
  { id: 'submarine', filename: 'transportation, travel _ submarine, travelling, water, sea, ocean, privacy, secret, spy.svg', name: 'Submarine', keywords: ['transportation', 'travel', 'submarine', 'travelling', 'water', 'sea', 'ocean', 'privacy', 'secret', 'spy'], category: 'Travel' },
  { id: 'airplane', filename: 'travel _ airplane, plane, travelling, air, aeroplane, transportation, transport.svg', name: 'Airplane', keywords: ['travel', 'airplane', 'plane', 'travelling', 'air', 'aeroplane', 'transportation', 'transport'], category: 'Travel' },
  { id: 'direction-arrow', filename: 'travel _ increase, arrow, woman, travelling, direction, navigation, promotion.svg', name: 'Direction Arrow', keywords: ['travel', 'increase', 'arrow', 'woman', 'travelling', 'direction', 'navigation', 'promotion'], category: 'Travel' },
  { id: 'ufo-city', filename: 'travel _ transport, transportation, abduction, alien, spaceship, ufo, city.svg', name: 'UFO City', keywords: ['travel', 'transport', 'transportation', 'abduction', 'alien', 'spaceship', 'ufo', 'city'], category: 'Travel' },
  { id: 'backpack-travel', filename: 'travel _ travelling, backpack, luggage, baggage, map, navigation.svg', name: 'Backpack Travel', keywords: ['travel', 'travelling', 'backpack', 'luggage', 'baggage', 'map', 'navigation'], category: 'Travel' },
  { id: 'vacation-car', filename: 'travel, transportation _ vacation, holiday, moving, box, package, car, vehicle, automobile.svg', name: 'Vacation Car', keywords: ['travel', 'transportation', 'vacation', 'holiday', 'moving', 'box', 'package', 'car', 'vehicle', 'automobile'], category: 'Travel' },

  // Weather
  { id: 'snow-umbrella', filename: 'weather _ snow, umbrella, winter, cold, snowing, man, woman, person.svg', name: 'Snow Umbrella', keywords: ['weather', 'snow', 'umbrella', 'winter', 'cold', 'snowing', 'man', 'woman', 'person'], category: 'Weather' },

  // Web Development & Design
  { id: 'plugin-puzzle', filename: 'web development _ plug in, puzzle, piece, hand gesture, break.svg', name: 'Plugin Puzzle', keywords: ['web development', 'plug in', 'puzzle', 'piece', 'break'], category: 'Web & Design' },
  { id: 'customize-website', filename: 'web development, design _ customize, website, webpage, browser, graphic design, web design.svg', name: 'Customize Website', keywords: ['web development', 'design', 'customize', 'website', 'webpage', 'browser', 'graphic design', 'web design'], category: 'Web & Design' },

  // Workflow
  { id: 'multitasking', filename: 'workflow _ multitasking, stress, work, woman, desk, office, tasks, to do.svg', name: 'Multitasking', keywords: ['workflow', 'multitasking', 'stress', 'work', 'woman', 'desk', 'office', 'tasks', 'to do'], category: 'Workflow' },
  { id: 'to-do-list', filename: 'workflow _ to do list, checklist, list, tasks, woman, chores, requirements.svg', name: 'To Do List', keywords: ['workflow', 'to do list', 'checklist', 'list', 'tasks', 'woman', 'chores', 'requirements'], category: 'Workflow' },
  { id: 'cutting-time', filename: 'workflow, hand gestures _ time, cutting time, scissor, cut cost, time is money.svg', name: 'Cutting Time', keywords: ['workflow', 'time', 'cutting time', 'scissor', 'cut cost', 'time is money'], category: 'Workflow' },
  { id: 'work-from-home', filename: 'workflow, office _ work from home, home, stress, computer, desk, conversation, call.svg', name: 'Work From Home', keywords: ['workflow', 'office', 'work from home', 'home', 'stress', 'computer', 'desk', 'conversation', 'call'], category: 'Workflow' },
  { id: 'deadline-hourglass', filename: 'workflow, tools _ time, deadline, confirm, hourglass, timer, man.svg', name: 'Deadline Hourglass', keywords: ['workflow', 'tools', 'time', 'deadline', 'confirm', 'hourglass', 'timer', 'man'], category: 'Workflow' },
  { id: 'countdown-calendar', filename: 'toosl, workflow _ countdown, event, calendar, deadline, date, reminder.svg', name: 'Countdown Calendar', keywords: ['tools', 'workflow', 'countdown', 'event', 'calendar', 'deadline', 'date', 'reminder'], category: 'Workflow' },
];

// Group illustrations by category
export const illustrationsByCategory = illustrations.reduce((acc, illustration) => {
  if (!acc[illustration.category]) {
    acc[illustration.category] = [];
  }
  acc[illustration.category].push(illustration);
  return acc;
}, {} as Record<string, IllustrationMeta[]>);

// Get all categories sorted
export const categories = Object.keys(illustrationsByCategory).sort();

// Get illustration by ID
export const getIllustration = (id: string): IllustrationMeta | undefined => {
  return illustrations.find((i) => i.id === id);
};

// Search illustrations by query
export const searchIllustrations = (query: string): IllustrationMeta[] => {
  const lowerQuery = query.toLowerCase();
  return illustrations.filter(
    (i) =>
      i.name.toLowerCase().includes(lowerQuery) ||
      i.keywords.some((k) => k.toLowerCase().includes(lowerQuery))
  );
};
