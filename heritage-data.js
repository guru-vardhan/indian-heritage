/**
 * Indian Heritage & Culture - Comprehensive States & Heritage Sites Database
 * Pan-India 36 States & Union Territories Database
 * Multi-Image Galleries, 360Â° Virtual Tour Panoramas & Living Cultural Traditions
 */

const STATES_DATA = [
  { id: "AndhraPradesh", name: "Andhra Pradesh", capital: "Amaravati", region: "South India", icon: "&#127963;", tourismUrl: "https://tourism.ap.gov.in", touristHelpline: "1800-425-4545", emergencyHelpline: "112 / 108", classicalDance: "Kuchipudi", giCrafts: "Kondapalli Toys, Machilipatnam Kalamkari, Dharmavaram Silk", cuisine: "Gongura Pachadi, Pulihora, Pootharekulu", dynasties: "Satavahanas, Eastern Chalukyas, Vijayanagara, Kakatiyas" },
  { id: "Telangana", name: "Telangana", capital: "Hyderabad", region: "South India", icon: "&#127984;", tourismUrl: "https://tourism.telangana.gov.in", touristHelpline: "1800-425-46464", emergencyHelpline: "112 / 108", classicalDance: "Perini Sivatandavam", giCrafts: "Pochampally Ikat, Bidriware, Cheriyal Scroll Painting, Nirmal Toys", cuisine: "Hyderabadi Dum Biryani, Haleem, Sarva Pindi", dynasties: "Kakatiya Dynasty, Qutb Shahi, Asaf Jahi (Nizams)" },
  { id: "TamilNadu", name: "Tamil Nadu", capital: "Chennai", region: "South India", icon: "&#127989;", tourismUrl: "https://www.tamilnadutourism.tn.gov.in", touristHelpline: "1800-4253-1111", emergencyHelpline: "112 / 108", classicalDance: "Bharatanatyam", giCrafts: "Kanchipuram Silk, Thanjavur Paintings, Swamimalai Bronze Icons", cuisine: "Chettinad Chicken, Dosa, Idli-Sambar, Pongal", dynasties: "Cholas, Pandyas, Pallavas, Cheras, Nayakas" },
  { id: "Karnataka", name: "Karnataka", capital: "Bengaluru", region: "South India", icon: "&#128024;", tourismUrl: "https://karnatakatourism.org", touristHelpline: "080-22352828", emergencyHelpline: "112 / 108", classicalDance: "Yakshagana, Dollu Kunitha", giCrafts: "Mysore Silk, Bidriware, Channapatna Toys, Sandalwood Carvings", cuisine: "Bisi Bele Bath, Mysore Pak, Neer Dosa, Dharwad Peda", dynasties: "Kadambas, Chalukyas, Rashtrakutas, Hoysalas, Vijayanagara, Wadiyars" },
  { id: "Maharashtra", name: "Maharashtra", capital: "Mumbai", region: "West India", icon: "&#128511;", tourismUrl: "https://www.maharashtratourism.gov.in", touristHelpline: "1800-229-930", emergencyHelpline: "112 / 108", classicalDance: "Lavani, Koli, Dhangari Gaja", giCrafts: "Paithani Sarees, Warli Paintings, Kolhapuri Chappals", cuisine: "Puran Poli, Misal Pav, Vada Pav, Modak", dynasties: "Satavahanas, Vakatakas, Rashtrakutas, Yadavas, Maratha Empire" },
  { id: "Rajasthan", name: "Rajasthan", capital: "Jaipur", region: "North India", icon: "&#128081;", tourismUrl: "https://tourism.rajasthan.gov.in", touristHelpline: "0141-2822863", emergencyHelpline: "112 / 108", classicalDance: "Ghoomar, Kalbelia, Bhavai", giCrafts: "Blue Pottery, Sanganeri Block Print, Thewa Jewellery, Kathputli", cuisine: "Dal Baati Churma, Ker Sangri, Ghevar, Laal Maas", dynasties: "Rajput Dynasties (Guhilas, Kachhwahas, Rathores, Bhattis)" },
  { id: "UttarPradesh", name: "Uttar Pradesh", capital: "Lucknow", region: "North India", icon: "&#128332;", tourismUrl: "https://uptourism.gov.in", touristHelpline: "1800-180-5013", emergencyHelpline: "112 / 108", classicalDance: "Kathak, Raslila, Charkula", giCrafts: "Banarasi Silk, Chikankari Embroidery, Moradabad Brassware, Zardozi", cuisine: "Awadhi Biryani, Galawati Kebab, Peda, Bedmi Puri", dynasties: "Mauryas, Guptas, Harshavardhana, Mughal Empire, Nawabs of Awadh" },
  { id: "MadhyaPradesh", name: "Madhya Pradesh", capital: "Bhopal", region: "Central India", icon: "&#128005;", tourismUrl: "https://www.mptourism.com", touristHelpline: "1800-233-7777", emergencyHelpline: "112 / 108", classicalDance: "Maanch, Matki, Karma Dance", giCrafts: "Chanderi Fabric, Maheshwari Sarees, Gond Paintings, Bagh Prints", cuisine: "Poha-Jalebi, Bhutte Ka Kees, Dal Bafla, Mawa Bati", dynasties: "Mauryas, Guptas, Chandela Dynasty, Paramaras, Holkars, Scindias" },
  { id: "Gujarat", name: "Gujarat", capital: "Gandhinagar", region: "West India", icon: "&#129409;", tourismUrl: "https://www.gujarattourism.com", touristHelpline: "1800-200-5080", emergencyHelpline: "112 / 108", classicalDance: "Garba, Dandiya Raas, Tippani", giCrafts: "Patan Patola, Bandhani Tie-Dye, Rogan Art, Kutch Embroidery", cuisine: "Dhokla, Thepla, Undhiyu, Khandvi, Fafda-Jalebi", dynasties: "Maitrakas, Solankis (Chalukyas of Gujarat), Gujarat Sultanate" },
  { id: "Odisha", name: "Odisha", capital: "Bhubaneswar", region: "East India", icon: "&#9728;&#65039;", tourismUrl: "https://odishatourism.gov.in", touristHelpline: "1800-208-1414", emergencyHelpline: "112 / 108", classicalDance: "Odissi, Gotipua, Chhau", giCrafts: "Pattachitra Paintings, Pipili Applique, Sambalpuri Ikat, Silver Filigree", cuisine: "Chhena Poda, Dalma, Rasagola, Pakhala Bhata", dynasties: "Kalingas, Mahameghavahanas, Somavamshis, Eastern Gangas, Gajapatis" },
  { id: "Kerala", name: "Kerala", capital: "Thiruvananthapuram", region: "South India", icon: "&#127796;", tourismUrl: "https://www.keralatourism.org", touristHelpline: "1800-425-4747", emergencyHelpline: "112 / 108", classicalDance: "Kathakali, Mohiniyattam, Theyyam, Koodiyattam", giCrafts: "Aranmula Kannadi, Kasavu Sarees, Coir Crafts, Nettur Petti", cuisine: "Appam with Stew, Sadya on Plantain Leaf, Karimeen Pollichathu", dynasties: "Cheras, Kingdom of Calicut (Zamorins), Kingdom of Travancore, Cochin" },
  { id: "WestBengal", name: "West Bengal", capital: "Kolkata", region: "East India", icon: "&#128047;", tourismUrl: "https://wbtourism.gov.in", touristHelpline: "1800-212-1655", emergencyHelpline: "112 / 108", classicalDance: "Gaudiya Nritya, Chhau, Baul Singing", giCrafts: "Baluchari Sarees, Dokra Metal Craft, Terracotta of Bankura, Kalighat Pat", cuisine: "Machher Jhol, Kosha Mangsho, Rasgulla, Mishti Doi, Shorshe Ilish", dynasties: "Palas, Senas, Bengal Sultanate, Nawabs of Bengal, British Raj" },
  { id: "Bihar", name: "Bihar", capital: "Patna", region: "East India", icon: "&#127963;&#65039;", tourismUrl: "https://tourism.bihar.gov.in", touristHelpline: "1800-345-6112", emergencyHelpline: "112 / 108", classicalDance: "Bidesia, Jat-Jatin, Jhijhiya", giCrafts: "Madhubani (Mithila) Paintings, Sikki Grass Craft, Bhagalpur Silk, Tikuli Art", cuisine: "Litti Chokha, Sattu Paratha, Thekua, Khaja", dynasties: "Magadha, Haryankas, Mauryas, Guptas, Palas" },
  { id: "Punjab", name: "Punjab", capital: "Chandigarh", region: "North India", icon: "&#127961;&#65039;", tourismUrl: "https://punjabtourism.punjab.gov.in", touristHelpline: "1800-180-0008", emergencyHelpline: "112 / 108", classicalDance: "Bhangra, Giddha, Jhumar, Sammi", giCrafts: "Phulkari Embroidery, Jutti of Muktsar, Inlaid Woodwork", cuisine: "Makki di Roti & Sarson da Saag, Butter Chicken, Dal Makhani, Amritsari Kulcha", dynasties: "Indus Valley, Maurya, Sikh Empire (Maharaja Ranjit Singh)" },
  { id: "Delhi", name: "Delhi", capital: "New Delhi", region: "North India", icon: "&#127983;", tourismUrl: "https://delhitourism.gov.in", touristHelpline: "1800-11-1363", emergencyHelpline: "112 / 100", classicalDance: "Kathak, Qawwali, Sufi Tradition", giCrafts: "Zari and Zardozi, Meenakari, Bone Carving", cuisine: "Butter Chicken, Chaat, Chole Bhature, Nihari, Parathas of Chandni Chowk", dynasties: "Tomaras, Chauhan Rajputs, Delhi Sultanate, Mughal Empire, British Imperial Capital" },
  { id: "Goa", name: "Goa", capital: "Panaji", region: "West India", icon: "&#127958;&#65039;", tourismUrl: "https://goatourism.gov.in", touristHelpline: "0832-2438750", emergencyHelpline: "112 / 108", classicalDance: "Fugdi, Dhalo, Dekhnni, Corridinho", giCrafts: "Goan Azulejos Tiles, Brass Crafts, Coconut Shell Sculpting", cuisine: "Goan Fish Curry, Vindaloo, Bebinca, Feni, Xacuti", dynasties: "Kadambas of Goa, Bahmani Sultanate, Vijayanagara, Portuguese India" },
  { id: "Assam", name: "Assam", capital: "Dispur", region: "Northeast India", icon: "&#129423;", tourismUrl: "https://assamtourism.gov.in", touristHelpline: "1800-345-3850", emergencyHelpline: "112 / 108", classicalDance: "Sattriya, Bihu, Bagurumba", giCrafts: "Muga Golden Silk, Eri Silk, Jaapi Sun Hats, Majuli Masks, Brass Bell Metal", cuisine: "Khaar, Masor Tenga, Duck Roast, Pitha, Assam CTC Tea", dynasties: "Varman Dynasty, Kamarupa, Ahom Kingdom (600 years rule), Koch Dynasty" },
  { id: "JammuAndKashmir", name: "Jammu and Kashmir", capital: "Srinagar / Jammu", region: "North India", icon: "&#127956;&#65039;", tourismUrl: "https://jktourism.jk.gov.in", touristHelpline: "1800-103-1060", emergencyHelpline: "112 / 108", classicalDance: "Rouf, Hafiza, Kud Dance, Dogri Folk", giCrafts: "Pashmina Shawls, Kani Weave, Paper Mache, Walnut Wood Carvings, Khatamband", cuisine: "Kashmiri Wazwan (Rogan Josh, Rista, Gushtaba), Kahwa, Dum Aloo", dynasties: "Gonandiya, Karkota Dynasty, Utpalas, Shah Mir Dynasty, Dogra Dynasty" },
  { id: "Ladakh", name: "Ladakh", capital: "Leh", region: "North India", icon: "&#127956;&#65039;", tourismUrl: "https://ladakhtourism.org", touristHelpline: "01982-252297", emergencyHelpline: "112 / 108", classicalDance: "Chams (Lama Mask Dance), Jabro, Shondol", giCrafts: "Ladakhi Pashmina, Thangka Paintings, Wood Carved Tables (Choktse)", cuisine: "Thukpa, Momos, Butter Tea (Gur Gur Chai), Skyu, Tingmo", dynasties: "Maryul Kingdom, Namgyal Dynasty of Ladakh" },
  { id: "HimachalPradesh", name: "Himachal Pradesh", capital: "Shimla", region: "North India", icon: "&#127956;&#65039;", tourismUrl: "https://himachaltourism.gov.in", touristHelpline: "0177-2658302", emergencyHelpline: "112 / 108", classicalDance: "Nati Dance, Chham, Demon (Rakshasa) Dance", giCrafts: "Kullu Shawls, Chamba Rumal, Kangra Miniature Paintings, Kinnauri Shawls", cuisine: "Dham Feast, Siddu, Madra, Babru, Trout Fish", dynasties: "Katoch Dynasty of Kangra, Kulinda Kingdom, Gorkhas, Hill Princely States" },
  { id: "Uttarakhand", name: "Uttarakhand", capital: "Dehradun", region: "North India", icon: "&#127956;&#65039;", tourismUrl: "https://uttarakhandtourism.gov.in", touristHelpline: "1800-180-4145", emergencyHelpline: "112 / 108", classicalDance: "Chholiya Sword Dance, Jhora, Baradanati", giCrafts: "Aipan Ritual Art, Ringal Bamboo Craft, Almora Tweed, Copperware", cuisine: "Kafuli, Chainsoo, Bal Mithai, Singori, Jhangore ki Kheer", dynasties: "Katyuri Dynasty, Chand Kings of Kumaon, Panwar Kings of Garhwal" },
  { id: "Chhattisgarh", name: "Chhattisgarh", capital: "Raipur", region: "Central India", icon: "&#127795;", tourismUrl: "https://chhattisgarhtourism.cg.gov.in", touristHelpline: "1800-102-6415", emergencyHelpline: "112 / 108", classicalDance: "Panthi, Pandwani (Teejan Bai), Raut Nacha", giCrafts: "Bastar Dhokra Bell Metal, Wrought Iron (Loha Shilp), Terracotta, Kosa Silk", cuisine: "Chila, Faraa, Muthia, Angakar Roti, Dubki Kadi", dynasties: "Nagas, Sarabhapuriyas, Somavamshis, Kalachuris of Ratanpur, Kakatiyas of Bastar" },
  { id: "Jharkhand", name: "Jharkhand", capital: "Ranchi", region: "East India", icon: "&#127795;", tourismUrl: "https://tourism.jharkhand.gov.in", touristHelpline: "1800-345-6571", emergencyHelpline: "112 / 108", classicalDance: "Seraikela Chhau, Paika, Santhali Dance", giCrafts: "Sohrai & Khovar Mural Paintings, Wood Crafts, Bamboo Art, Tussar Silk", cuisine: "Dhuska with Ghugni, Pittha, Chilka Roti, Rugra Curry", dynasties: "Nagvanshis of Chotanagpur, Chero Dynasty, Ramgarh Raj" },
  { id: "Haryana", name: "Haryana", capital: "Chandigarh", region: "North India", icon: "&#128668;", tourismUrl: "https://haryanatourism.gov.in", touristHelpline: "1800-180-2111", emergencyHelpline: "112 / 108", classicalDance: "Dhamal, Khoria, Phag, Saang Folk Theatre", giCrafts: "Panipat Handlooms & Durries, Terracotta Pottery, Jutti Crafts", cuisine: "Bajra Khichdi, Kachri ki Sabzi, Kadhi Pakora, Churma, Lassi", dynasties: "Indus Valley (Rakhigarhi), Kuru Kingdom, Tomaras, Harshavardhana" },
  { id: "Sikkim", name: "Sikkim", capital: "Gangtok", region: "Northeast India", icon: "&#127956;&#65039;", tourismUrl: "https://sikkimtourism.gov.in", touristHelpline: "03592-209090", emergencyHelpline: "112 / 108", classicalDance: "Singhi Chham (Snow Lion Dance), Maruni, Yak Chaam", giCrafts: "Tibetan Carpets, Lepcha Weaves, Thangka Scroll Paintings, Choktse Tables", cuisine: "Phagshapa, Gundruk, Sinki, Thukpa, Sha Phaley, Chhurpi", dynasties: "Namgyal Chogyal Dynasty of Sikkim (1642â€“1975)" },
  { id: "ArunachalPradesh", name: "Arunachal Pradesh", capital: "Itanagar", region: "Northeast India", icon: "&#127956;&#65039;", tourismUrl: "https://arunachaltourism.com", touristHelpline: "0360-2214745", emergencyHelpline: "112 / 108", classicalDance: "Aji Lamu, Wancho Dance, Buiya, Ponung", giCrafts: "Apatani Textiles, Monpa Wood Carvings, Wancho Beadwork, Cane & Bamboo", cuisine: "Thukpa, Lukter, Bamboo Shoot Pork, Zan, Apong Rice Brew", dynasties: "Chutiya Kingdom, Ahom Protectorate, Monpa Kingdom" },
  { id: "Meghalaya", name: "Meghalaya", capital: "Shillong", region: "Northeast India", icon: "&#9729;&#65039;", tourismUrl: "https://www.meghalayatourism.in", touristHelpline: "1800-345-3755", emergencyHelpline: "112 / 108", classicalDance: "Nongkrem Dance, Shad Suk Mynsiem, Wangala (100 Drums Festival)", giCrafts: "Living Root Bridges, Cane & Bamboo Mats (Tlieng), Khasi Endi Silk", cuisine: "Jadoh with Pork, Dohneiiong, Tungrymbai, Pumaloi", dynasties: "Khasi Syiems, Jaintia Kingdom (Sutnga Dynasty), Garo Nokmas" },
  { id: "Nagaland", name: "Nagaland", capital: "Kohima", region: "Northeast India", icon: "&#128101;", tourismUrl: "https://tourism.nagaland.gov.in", touristHelpline: "0370-2270107", emergencyHelpline: "112 / 108", classicalDance: "War Dance, Zeliang Dance, Hornbill Cultural Dances", giCrafts: "Naga Warrior Shawls (Tsungkotepsu), Wood Carvings, Bamboo Baskets, Spear Crafts", cuisine: "Smoked Pork with Axone, Anishi, Bamboo Shoot Curry, Raja Mircha Chutney", dynasties: "Autonomous Naga Clan Confederacies, Dimasa Kachari Kingdom" },
  { id: "Manipur", name: "Manipur", capital: "Imphal", region: "Northeast India", icon: "&#127802;", tourismUrl: "https://manipurtourism.gov.in", touristHelpline: "0385-2450033", emergencyHelpline: "112 / 108", classicalDance: "Manipuri Raas Leela, Pung Cholom (Drum Dance), Thang-Ta Martial Art", giCrafts: "Shaphee Lanphee Shawls, Kauna Reed Mats, Longpi Black Stone Pottery", cuisine: "Kangshoi, Eromba, Singju Salad, Chak-hao Kheer (Black Rice)", dynasties: "Ningthouja (Meitei) Royal Dynasty (33 CE â€“ 1949 CE)" },
  { id: "Mizoram", name: "Mizoram", capital: "Aizawl", region: "Northeast India", icon: "&#127956;&#65039;", tourismUrl: "https://tourism.mizoram.gov.in", touristHelpline: "0389-2333475", emergencyHelpline: "112 / 108", classicalDance: "Cheraw (Bamboo Dance), Khuallam, Chheihlam, Sarlamkai", giCrafts: "Puan Handloom Weaves, Bamboo & Cane Baskets, Mizo Pipes", cuisine: "Bai, Vawksa Rep (Smoked Pork), Sawhchiar Rice Stew, Chhangban", dynasties: "Mizo Chieftainships (Lals)" },
  { id: "Tripura", name: "Tripura", capital: "Agartala", region: "Northeast India", icon: "&#127963;", tourismUrl: "https://tripuratourism.gov.in", touristHelpline: "0381-2325924", emergencyHelpline: "112 / 108", classicalDance: "Hojagiri (Reang Tribe Balance Dance), Garia, Lebang Boomani", giCrafts: "Tripura Bamboo Crafts, Risa & Rikutu Handlooms, Cane Furniture", cuisine: "Mui Borok, Berma Fermented Fish, Chakhwi, Mosdeng Serma", dynasties: "Manikya Dynasty of Tripura (Unbroken 500+ year reign)" },
  { id: "Puducherry", name: "Puducherry", capital: "Pondicherry", region: "South India", icon: "&#127958;&#65039;", tourismUrl: "https://pondytourism.in", touristHelpline: "0413-2339497", emergencyHelpline: "112 / 108", classicalDance: "Bharatanatyam, French-Tamil Fusion Arts", giCrafts: "Villiyanur Terracotta, Puducherry Handmade Paper, Aromatherapy Incense", cuisine: "Franco-Tamil Creole Cuisine, Prawn Masala, Bouillabaisse, Ratatouille", dynasties: "Pallavas, Cholas, Vijayanagara, French East India Company" },
  { id: "Chandigarh", name: "Chandigarh", capital: "Chandigarh", region: "North India", icon: "&#127961;&#65039;", tourismUrl: "https://chandigarhtourism.gov.in", touristHelpline: "0172-2740420", emergencyHelpline: "112 / 108", classicalDance: "Bhangra, Giddha, Classical Concerts at Tagore Theatre", giCrafts: "Nek Chand Folk Mosaics, Modernist Furniture by Pierre Jeanneret", cuisine: "Amritsari Kulcha, Butter Chicken, Chole Bhature, Lassi", dynasties: "Harappan Outpost (Kotla Nihang Khan), Post-Independence Modernist Capital" },
  { id: "AndamanAndNicobar", name: "Andaman and Nicobar Islands", capital: "Port Blair", region: "Islands", icon: "ðŸï¸", tourismUrl: "https://www.andamantourism.gov.in", touristHelpline: "03192-232694", emergencyHelpline: "112 / 108", classicalDance: "Nicobari Folk Dance, Island Tribal Rhythms", giCrafts: "Shell Crafts, Mother-of-Pearl Art, Coconut Shell Sculptures, Cane Work", cuisine: "Seafood Curries, Grilled Lobster, Coconut Prawn Curry, Fish Fry", dynasties: "Chola Naval Outpost (Rajendra Chola I), British Colonial Penal Settlement" },
  { id: "DadraAndNagarHaveli", name: "Dadra and Nagar Haveli & Daman and Diu", capital: "Daman", region: "West India", icon: "ðŸ°", tourismUrl: "https://ddd.gov.in/tourism", touristHelpline: "0260-2255104", emergencyHelpline: "112 / 108", classicalDance: "Tarpa Dance, Mando, Verdigao", giCrafts: "Warli Paintings, Mat Weaving, Bamboo Baskets, Portuguese Lace", cuisine: "Daman Fish Koliwada, Dhansak, Bebinca, Ubadiyu", dynasties: "Koli Chieftains, Dharampur Kings, Portuguese Enclave (1531â€“1961)" },
  { id: "Lakshadweep", name: "Lakshadweep", capital: "Kavaratti", region: "Islands", icon: "&#127965;&#65039;", tourismUrl: "https://lakshadweeptourism.nic.in", touristHelpline: "04896-262105", emergencyHelpline: "112 / 108", classicalDance: "Kolkali, Parichakali (Shield Dance), Lava Dance of Minicoy", giCrafts: "Coir Mats, Tortoiseshell & Coral Replicas, Coconut Shell Engraving", cuisine: "Mus Kavaab (Tuna Kebab), Rayereha (Red Tuna Curry), Batla Appam, Coconut Milk Rice", dynasties: "Chera Realm, Arakkal Kingdom of Cannanore, Tipu Sultan, British Raj" }
];

const HERITAGE_SITES = [  // ================= ANDHRA PRADESH =================
  {
    id: "tirupati-temple",
    name: "Sri Venkateswara Swamy Temple, Tirupati",
    stateId: "AndhraPradesh",
    stateName: "Andhra Pradesh",
    district: "Tirupati / Chittoor",
    category: "Sacred Temple",
    isUnesco: false,
    rating: 4.9,
    builtIn: "300 CE onwards (Pallavas, Cholas & Vijayanagara Empire)",
    architecturalStyle: "Dravidian Architecture with Golden Vimana (Ananda Nilayam)",
    description: "Perched atop the sacred Seshachalam Hills across seven peaks (Sapthagiri), the Tirumala Venkateswara Temple is one of the most visited and venerated pilgrimage sites in the world. Revered as Kaliyuga Vaikuntham, the presiding deity Lord Venkateswara stands majestic in the sanctum adorned with gold, diamonds, and fragrant camphor.",
    culturalSignificance: "Major spiritual center for Vaishnavite traditions with unbroken centuries-old temple rituals, sacred Laddu Prasadam (GI tagged), and massive philanthropic endeavors.",
    festival: {
      name: "Sri Venkateswara Swami Brahmotsavam & Vaikunta Ekadasi",
      period: "September â€“ October & December â€“ January",
      description: "A grand 9-day annual festival featuring celestial chariot processions (Garuda Vahanam, Rathotsavam) witnessed by millions of devotees."
    },
    bestTime: "September to February (Pleasant hill weather)",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Tirumala+Venkateswara+Temple+Andhra+Pradesh",
    wikiUrl: "https://en.wikipedia.org/wiki/Venkateswara_Temple,_Tirumala",
    imageUrl: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80", caption: "Ananda Nilayam Golden Gopuram & Holy Sanctum" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Seshachalam Hills Panoramic Viewpoint" },
      { url: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80", caption: "Outer Prakaram & Dravidian Stone Pillars" },
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", caption: "Evening Illumination & Deepotsavam" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Tirumala Temple Courtyard",
      hotspots: [
        { x: 30, y: 40, title: "Golden Ananda Nilayam", desc: "Pure gold-plated Vimana tower directly over Lord Venkateswara's sanctum." },
        { x: 75, y: 55, title: "Dhvajastambha (Flagpole)", desc: "Gilded temple mast where holy garuda flag is hoisted during Brahmotsavams." },
        { x: 50, y: 70, title: "Seshachalam Hill Ridge", desc: "Sacred seven hills embodying the serpent Adisesha." }
      ]
    },
    tags: ["Pilgrimage", "Dravidian", "Sacred Hills", "Vedic Rituals", "South India", "Temple"]
  },
  {
    id: "lepakshi-temple",
    name: "Veerabhadra Temple & Hanging Pillar, Lepakshi",
    stateId: "AndhraPradesh",
    stateName: "Andhra Pradesh",
    district: "Sri Sathya Sai / Anantapur",
    category: "Ancient Monument & Temple",
    isUnesco: false,
    rating: 4.8,
    builtIn: "1530 CE (Built by Virupanna Nayaka & Viranna under King Achyuta Deva Raya)",
    architecturalStyle: "Vijayanagara Style Rock Architecture with Frescoes",
    description: "Lepakshi is world-famous for its architectural marvel â€” the legendary 'Hanging Pillar' that defies gravity without touching the floor. The temple complex features the magnificent monolithic Nagalinga (hooded seven-headed serpent) and the world's largest monolithic granite Nandi statue carved out of a single boulder.",
    culturalSignificance: "Associated with the Ramayana epic where the wounded bird Jatayu fell after battling Ravana ('Le Pakshi' translates to 'Rise, Bird' in Telugu). Houses some of the finest surviving Vijayanagara ceiling mural paintings.",
    festival: {
      name: "Maha Shivaratri & Lepakshi Cultural Utsav",
      period: "February â€“ March",
      description: "Night-long devotional vigils, classical Kuchipudi dances in the Natya Mandapa, and Vedic fire rituals."
    },
    bestTime: "October to March (Pleasant dry winter)",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Lepakshi+Veerabhadra+Temple+Andhra+Pradesh",
    wikiUrl: "https://en.wikipedia.org/wiki/Lepakshi",
    imageUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", caption: "Monolithic Seven-Headed Nagalinga & Shivalinga" },
      { url: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80", caption: "Natya Mandapa Intricately Carved Pillars" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Colossal Monolithic Granite Nandi Bull" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Lepakshi Natya Mandapa",
      hotspots: [
        { x: 42, y: 38, title: "Gravity-Defying Hanging Pillar", desc: "Corner pillar that rests without touching the ground; cloth can pass underneath." },
        { x: 80, y: 60, title: "Monolithic Nagalinga", desc: "Massive 15-foot granite sculpture carved out of a single boulder in one afternoon." },
        { x: 20, y: 75, title: "Vijayanagara Ceiling Murals", desc: "Vegetable-dye fresco masterpieces depicting Virabhadra and Shiva's cosmic lore." }
      ]
    },
    tags: ["Vijayanagara", "Hanging Pillar", "Rock Architecture", "Monolithic Nandi", "Mural Art"]
  },
  {
    id: "amaravati-stupa",
    name: "Mahachaitya & Buddhist Heritage Site, Amaravati",
    stateId: "AndhraPradesh",
    stateName: "Andhra Pradesh",
    district: "Guntur / Palnadu",
    category: "Ancient Buddhist Stupa",
    isUnesco: false,
    rating: 4.7,
    builtIn: "3rd Century BCE â€“ 2nd Century CE (Satavahana Dynasty)",
    architecturalStyle: "Amaravati School of Buddhist Art & Limestone Carvings",
    description: "Amaravati was the ancient seat of the Satavahana Empire and one of India's greatest Buddhist monastic metropolises. The Great Stupa (Mahachaitya) was decorated with world-renowned Palnad marble and limestone reliefs depicting Jataka tales, Ashoka's edicts, and the life of Buddha.",
    culturalSignificance: "Foundational cradle of Mahayana Buddhism where Acharya Nagarjuna taught Madhyamaka philosophy. The Kalachakra initiation was conducted here by His Holiness the Dalai Lama.",
    festival: {
      name: "Buddha Purnima & Amaravati Heritage Festival",
      period: "May",
      description: "International Buddhist monks gather for peaceful chanting, meditation circles, and lamp lighting ceremonies on the banks of River Krishna."
    },
    bestTime: "November to February",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Amaravati+Buddhist+Stupa+Andhra+Pradesh",
    wikiUrl: "https://en.wikipedia.org/wiki/Amaravati_Stupa",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", caption: "Amaravati Dhyana Buddha 125-foot Statue" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Archaeological Excavations of Mahachaitya" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Amaravati Dhyana Buddha Enclave",
      hotspots: [
        { x: 50, y: 35, title: "125-ft Dhyana Buddha", desc: "Majestic seated Buddha in meditative posture overlooking the Krishna River." },
        { x: 25, y: 65, title: "Limestone Ayaka Pillars", desc: "Satavahana era sculptured panels representing the five stages of Buddha's life." }
      ]
    },
    tags: ["Buddhism", "Satavahana", "Ashokan Heritage", "Ancient Monastic", "Archaeology"]
  },

  // ================= TELANGANA =================
  {
    id: "ramappa-temple",
    name: "Kakatiya Rudreshwara (Ramappa) Temple",
    stateId: "Telangana",
    stateName: "Telangana",
    district: "Mulugu",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "1213 CE (Built by General Recharla Rudra under Kakatiya King Ganapati Deva)",
    architecturalStyle: "Kakatiya Style Star-Shaped Sandstone with Floating Bricks",
    description: "The Ramappa Temple stands on a 6-foot high star-shaped platform, named after its master sculptor Ramappa. Famous for its anti-seismic sandbox technology, lightweight floating bricks used in the Shikhara, and lustrous black basalt bracket figures (Madanikas) that produce musical resonance when tapped.",
    culturalSignificance: "Epitome of medieval Deccan temple engineering that withstood multiple earthquakes. Dedicated to Rudreswara Shiva and praised by Italian traveler Marco Polo as the 'brightest star in the galaxy of medieval temples'.",
    festival: {
      name: "Maha Shivaratri & Ramappa National Dance Festival",
      period: "February â€“ March",
      description: "Classical Perini Sivatandavam and Kuchipudi recitals performed in the temple courtyard under moonlit skies."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ramappa+Temple+Mulugu+Telangana",
    wikiUrl: "https://en.wikipedia.org/wiki/Ramappa_Temple",
    imageUrl: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80", caption: "Kakatiya Star-Shaped Platform & Sanctum" },
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", caption: "Polished Black Basalt Madanika Bracket Figures" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Ramappa Temple Sanctum",
      hotspots: [
        { x: 35, y: 45, title: "Floating Brick Shikhara", desc: "Spongy clay bricks with low density that float on water to reduce superstructure weight." },
        { x: 70, y: 55, title: "Madanika Bracket Carvings", desc: "Flawlessly polished black dolerite bracket figures displaying classical dance poses." }
      ]
    },
    tags: ["UNESCO", "Kakatiya", "Floating Bricks", "Sandbox Technology", "Perini Dance"]
  },
  {
    id: "golconda-fort",
    name: "Golconda Fort & Acoustic Citadel",
    stateId: "Telangana",
    stateName: "Telangana",
    district: "Hyderabad",
    category: "Medieval Fort & Citadel",
    isUnesco: false,
    rating: 4.8,
    builtIn: "1143 CE â€“ 16th Century (Kakatiyas & Qutb Shahi Dynasty)",
    architecturalStyle: "Indo-Islamic Military & Acoustic Citadel",
    description: "Rising 400 feet above the Hyderabad plains, Golconda was the legendary capital of the Qutb Shahi Sultanate and the world's epicenter for diamond trade, where the Koh-i-Noor and Hope Diamonds were traded. Famous for its acoustic engineering â€” a hand clap at the entrance portico (Fateh Darwaza) is clearly audible at the Bala Hissar pavilion at the highest point 1 km away.",
    culturalSignificance: "Symbol of Hyderabad's Syncretic Ganga-Jamuni Tehzeeb, patron of Deccani Urdu literature, Kuchipudi dancers, and diamonds of international royalty.",
    festival: {
      name: "Golconda Sound & Light Show & Bonalu Festival",
      period: "July â€“ August & Year-Round",
      description: "Grand historic sound and light show narrated by Amitabh Bachchan; sacred Mahankali Bonalu festivities at the hilltop temple."
    },
    bestTime: "September to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Golconda+Fort+Hyderabad",
    wikiUrl: "https://en.wikipedia.org/wiki/Golconda_Fort",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Bala Hissar Pavilion & 360-degree City View" },
      { url: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80", caption: "Massive Iron-Spiked Fateh Darwaza Fort Gate" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Golconda Bala Hissar Summit",
      hotspots: [
        { x: 50, y: 30, title: "Bala Hissar Throne Hall", desc: "Summit pavilion with 360-degree views over Hyderabad and the Qutb Shahi Tombs." },
        { x: 80, y: 70, title: "Fateh Darwaza Acoustic Dome", desc: "Clapping dome transmitting security signals across the fort in seconds." }
      ]
    },
    tags: ["Citadel", "Qutb Shahi", "Acoustics", "Koh-i-Noor", "Military Engineering"]
  },

  // ================= TAMIL NADU =================
  {
    id: "brihadeeswara-temple",
    name: "Brihadisvara Temple (Big Temple), Thanjavur",
    stateId: "TamilNadu",
    stateName: "Tamil Nadu",
    district: "Thanjavur",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "1010 CE (Emperor Raja Raja Chola I)",
    architecturalStyle: "Pure Dravidian Granite Architecture with 216-ft Vimana",
    description: "A pinnacle of Chola architectural genius, the Brihadisvara Temple celebrated its millennial anniversary in 2010. Built entirely of 130,000 tonnes of granite transported over 50 kilometers, its 216-foot soaring Vimana is crowned by a monolithic 80-tonne granite Kumbam cupola hoisted via a 6-kilometer earthen ramp.",
    culturalSignificance: "Centerpiece of classical Bharatanatyam dance and Carnatic music, patronized with 400 temple dancers and musicians recorded in detailed Tamil inscriptions on the outer prakaram walls.",
    festival: {
      name: "Chithirai Brahamotsavam & Maha Shivaratri Natyanjali",
      period: "February â€“ March & April",
      description: "World-class classical dance festival featuring Bharatanatyam exponents from across India performing in front of the colossal Nandi."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Brihadisvara+Temple+Thanjavur",
    wikiUrl: "https://en.wikipedia.org/wiki/Brihadisvara_Temple,_Thanjavur",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "216-foot Soaring Granite Raja Gopuram" },
      { url: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80", caption: "Monolithic 25-Tonne Granite Nandi Mandapa" },
      { url: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80", caption: "Chola Frescoes & Inscriptional Corridors" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Brihadisvara Temple Grand Courtyard",
      hotspots: [
        { x: 50, y: 35, title: "80-Tonne Monolithic Kumbam", desc: "Granite capstone carved from a single boulder hoisted 216 feet into the sky." },
        { x: 20, y: 65, title: "Chola Tamil Epigraphy", desc: "Thousands of lines of stone inscriptions recording treasury gifts, dancers, and military campaigns." },
        { x: 80, y: 70, title: "Monolithic Nandi", desc: "Single-stone granite bull measuring 12 feet high and 20 feet long." }
      ]
    },
    tags: ["UNESCO", "Chola Dynasty", "Dravidian", "Granite Marvel", "Bharatanatyam"]
  },
  {
    id: "meenakshi-temple",
    name: "Meenakshi Sundareswarar Temple, Madurai",
    stateId: "TamilNadu",
    stateName: "Tamil Nadu",
    district: "Madurai",
    category: "Living Heritage & Ancient Temple",
    isUnesco: false,
    rating: 4.9,
    builtIn: "6th Century BCE origins, expanded 1623â€“1655 CE (King Thirumalai Nayak)",
    architecturalStyle: "Dravidian Architecture with 14 Multi-Tiered Sculpted Gopurams",
    description: "Located in the historic lotus-shaped city of Madurai on the Vaigai River, this colossal 14-acre temple complex is dedicated to Goddess Meenakshi (Parvati) and Lord Sundareswarar (Shiva). Features 14 towering Gopurams covered in thousands of vibrant stucco sculptures and the world-famous Hall of 1000 Pillars with musical pillars.",
    culturalSignificance: "Heart of ancient Tamil Sangam literature and maternal deity worship. Famous for the Golden Lotus Pond (Potramarai Kulam) where Tamil poets tested their literary works.",
    festival: {
      name: "Chithirai Festival (Meenakshi Thirukalyanam)",
      period: "April â€“ May (12 Days)",
      description: "Celestial wedding of Goddess Meenakshi attended by over a million devotees with the grand car festival (Therthiruvizha)."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Meenakshi+Amman+Temple+Madurai",
    wikiUrl: "https://en.wikipedia.org/wiki/Meenakshi_Temple",
    imageUrl: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80", caption: "Towering Southern Gopuram Stucco Sculptures" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Golden Lotus Sacred Temple Tank" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Meenakshi Temple Golden Lotus Pond",
      hotspots: [
        { x: 30, y: 40, title: "South Gopuram (170 ft)", desc: "Tallest gateway tower containing over 1,500 intricately painted mythological sculptures." },
        { x: 70, y: 65, title: "Hall of 1000 Pillars", desc: "Aayiram Kaal Mandapam displaying 985 carved stone columns aligned in precise perspective." }
      ]
    },
    tags: ["Dravidian", "Sangam Era", "Gopuram", "Nayaka Dynasty", "Pilgrimage"]
  },

  // ================= KARNATAKA =================
  {
    id: "hampi-monuments",
    name: "Group of Monuments at Hampi",
    stateId: "Karnataka",
    stateName: "Karnataka",
    district: "Vijayanagara / Ballari",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "1336â€“1565 CE (Vijayanagara Empire, Emperor Krishnadevaraya)",
    architecturalStyle: "Dravidian & Vijayanagara Rock Architecture with Monolithic Carvings",
    description: "Spread over 41 square kilometers amidst a surreal boulder-strewn landscape along the Tungabhadra River, Hampi was the fabulously wealthy capital of the Vijayanagara Empire. Highlights include the iconic Stone Chariot at the Vijaya Vittala Temple with musical pillars, Virupaksha Temple, Queen's Bath, and the Elephant Stables.",
    culturalSignificance: "Capital of one of the greatest empires in Indian history, documented by Persian ambassador Abdur Razzaq and Portuguese traveler Domingo Paes as comparable to Rome in splendor.",
    festival: {
      name: "Hampi Utsav (Vijaya Utsava)",
      period: "November / January",
      description: "A 3-day cultural festival illuminating the ancient ruins with classical Hindustani and Carnatic concerts, fireworks, and heritage walks."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hampi+Vijayanagara+Karnataka",
    wikiUrl: "https://en.wikipedia.org/wiki/Hampi",
    imageUrl: "https://images.unsplash.com/photo-1600100397608-f010e47c5031?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1600100397608-f010e47c5031?auto=format&fit=crop&w=1200&q=80", caption: "World-Famous Monolithic Stone Chariot at Vittala Temple" },
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", caption: "Virupaksha Temple Gopuram & Boulder Landscape" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Royal Enclosure & Elephant Stables" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1600100397608-f010e47c5031?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Vittala Temple Courtyard, Hampi",
      hotspots: [
        { x: 50, y: 50, title: "Monolithic Stone Chariot", desc: "Shrine dedicated to Garuda designed as a temple chariot with rotating stone wheels." },
        { x: 20, y: 40, title: "Musical Pillars (SaReGaMa Pillars)", desc: "56 carved resonant granite pillars emitting musical notes when gently tapped." },
        { x: 80, y: 65, title: "Matanga Hill Vista", desc: "Holy hill where Sugriva took refuge in the Ramayana, offering 360Â° sunset panoramas." }
      ]
    },
    tags: ["UNESCO", "Vijayanagara", "Stone Chariot", "Musical Pillars", "Boulders"]
  },
  {
    id: "hoysala-temples",
    name: "Sacred Ensembles of the Hoysalas, Belur & Halebidu",
    stateId: "Karnataka",
    stateName: "Karnataka",
    district: "Hassan",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "1117â€“1268 CE (Hoysala Empire Kings Vishnuvardhana & Narasimha I)",
    architecturalStyle: "Hoysala Chloritic Schist (Soapstone) Star-Shaped Architecture",
    description: "Inscribed as a UNESCO World Heritage site in 2023, the Hoysala temples of Belur (Chennakeshava) and Halebidu (Hoysaleswara) are celebrated as the pinnacle of Indian soapstone sculpture. The micro-carvings feature intricate jewelry, lace-like filigree stone windows, and friezes depicting thousands of elephants, horses, lions, and scenes from the Mahabharata.",
    culturalSignificance: "Masterpieces signed by medieval sculptors (such as Ruvari Mallitamma and Dasoja). The star-shaped platforms allowed multi-dimensional bas-reliefs with play of light and shadow.",
    festival: {
      name: "Belur Chennakeshava Rathotsavam & Hoysala Mahotsava",
      period: "March â€“ April",
      description: "Grand temple car festival accompanied by classical Yakshagana performances and Vedic rituals."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Belur+Halebidu+Hoysala+Temples+Karnataka",
    wikiUrl: "https://en.wikipedia.org/wiki/Sacred_Ensembles_of_the_Hoysalas",
    imageUrl: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80", caption: "Chennakeshava Temple Star-Shaped Outer Wall Sculptures" },
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", caption: "Intricate Filigree Soapstone Carvings & Bracket Figures" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Hoysaleswara Temple Outer Friezes",
      hotspots: [
        { x: 45, y: 50, title: "Layered Narrative Friezes", desc: "Continuous 8-tiered stone friezes with over 2,000 uniquely posed carved elephants." },
        { x: 80, y: 40, title: "Shilabalika Bracket Figures", desc: "Soapstone maidens displaying 64 ancient Indian arts, cosmetics, and music." }
      ]
    },
    tags: ["UNESCO", "Hoysala", "Soapstone", "Micro-Carving", "Star Platform"]
  },

  // ================= KERALA =================
  {
    id: "padmanabhaswamy-temple",
    name: "Sree Padmanabhaswamy Temple, Thiruvananthapuram",
    stateId: "Kerala",
    stateName: "Kerala",
    district: "Thiruvananthapuram",
    category: "Ancient Royal Temple & Vaults",
    isUnesco: false,
    rating: 4.9,
    builtIn: "8th Century CE onwards (Travancore Royal Dynasty & King Marthanda Varma)",
    architecturalStyle: "Fusion of Kerala Indigenous Timber & Tamil Dravidian Gopuram",
    description: "Revered as one of the 108 Divya Desams, Sree Padmanabhaswamy Temple is famous for its 18-foot monolithic idol of Lord Vishnu reclining on the cosmic serpent Anantha (Anantasayana posture), viewed through three separate doors. It is recognized as the world's wealthiest religious institution due to its legendary subterranean treasure vaults.",
    culturalSignificance: "The Travancore Maharajas ruled as 'Padmanabha Dasa' (servants of the deity). Houses the 365-pillar sculpted corridor (Ottakkal Mandapam) and the sacred Padma Theertham tank.",
    festival: {
      name: "Alpashi & Panguni Utsavam (Arattu Procession)",
      period: "October â€“ November & March â€“ April",
      description: "Grand 10-day festival culminating in the royal Arattu procession where the royal family escorts the deity on foot to Shanghumukham Beach."
    },
    bestTime: "September to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Padmanabhaswamy+Temple+Trivandrum",
    wikiUrl: "https://en.wikipedia.org/wiki/Padmanabhaswamy_Temple",
    imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80", caption: "100-Foot 7-Tiered Dravidian Gopuram & Sacred Tank" },
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", caption: "365 Sculpted Granite Pillars of the Corridor" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Padma Theertham & Padmanabhaswamy Gopuram",
      hotspots: [
        { x: 50, y: 35, title: "7-Tiered Raja Gopuram", desc: "Built in 1565 CE with granite foundation and 100-foot brick superstructure with clockwork bells." },
        { x: 25, y: 65, title: "Padma Theertham Sacred Pond", desc: "Holy temple tank reflecting the illuminated golden spires during Deeparadhana." }
      ]
    },
    tags: ["Travancore", "Anantasayana", "Sacred Vaults", "Kerala Heritage", "Pilgrimage"]
  },

  // ================= PUDUCHERRY =================
  {
    id: "auroville-matrimandir",
    name: "Matrimandir & Peace Sanctuary, Auroville",
    stateId: "Puducherry",
    stateName: "Puducherry",
    district: "Puducherry / Villupuram",
    category: "Universal Heritage & Modern Sanctuary",
    isUnesco: false,
    rating: 4.8,
    builtIn: "1971â€“2008 CE (Designed by Roger Anger under Mirra Alfassa 'The Mother')",
    architecturalStyle: "Modernist Geodesic Gold-Plated Sphere with Heliostat",
    description: "The Matrimandir ('Soul of the City') is a golden geodesic sphere surrounded by 12 tranquil green gardens and a massive amphitheater with an urn of soil from 124 nations. Inside, the pristine white marble Inner Chamber features the world's largest optically-pure glass crystal globe illuminated by a single solar heliostat beam.",
    culturalSignificance: "Conceived as an international township dedicated to human unity, spiritual evolution, and sustainable living according to Sri Aurobindo's integral yoga.",
    festival: {
      name: "Auroville Foundation Day & Bonfire Gathering",
      period: "February 28",
      description: "Dawn meditation gathering around the amphitheater with sacred music celebrating international human unity."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Matrimandir+Auroville+Pondicherry",
    wikiUrl: "https://en.wikipedia.org/wiki/Matrimandir",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Golden Matrimandir Sphere & Lotus Amphitheatre" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Matrimandir Peace Garden",
      hotspots: [
        { x: 50, y: 45, title: "Gold Disc Facade", desc: "1,415 stainless steel discs clad in genuine gold leaf reflecting sunlight." },
        { x: 20, y: 65, title: "Centennial Banyan Tree", desc: "Geographic center of Auroville with aerial roots spreading over 50 meters." }
      ]
    },
    tags: ["Auroville", "Peace Sanctuary", "Geodesic Sphere", "Spiritual", "Pondicherry"]
  },

  // ================= LAKSHADWEEP =================
  {
    id: "minicoy-lighthouse",
    name: "Historic British Lighthouse, Minicoy Island",
    stateId: "Lakshadweep",
    stateName: "Lakshadweep",
    district: "Minicoy",
    category: "Maritime Heritage & Lighthouse",
    isUnesco: false,
    rating: 4.8,
    builtIn: "1885 CE (British Imperial Lighthouse Service)",
    architecturalStyle: "Victorian Masonry Maritime Architecture",
    description: "Standing 49 meters tall at the southern tip of Minicoy Island, this majestic red-and-white brick lighthouse was built in 1885 to guide ships navigating the crucial Nine Degree Channel between India and the Maldives. Climbing the 216 steps offers panoramic 360-degree views of the turquoise lagoon, coconut canopies, and coral atolls.",
    culturalSignificance: "Minicoy (Maliku) has a unique matrilineal Mahl-speaking culture famous for traditional boat races (Jahadhoni) and Lava folk dances.",
    festival: {
      name: "Minicoy Jahadhoni Boat Festival & Eid Utsav",
      period: "Post-Monsoon & Eid Celebrations",
      description: "Thrilling traditional longboat racing across the lagoon with rhythmic drumming and festive community feasts."
    },
    bestTime: "October to April (Calm sea waters)",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Minicoy+Lighthouse+Lakshadweep",
    wikiUrl: "https://en.wikipedia.org/wiki/Minicoy_Island_Lighthouse",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", caption: "49-Meter Historic Minicoy Lighthouse & Coral Lagoon" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Minicoy Coral Reef & Lagoon Vista",
      hotspots: [
        { x: 50, y: 30, title: "Lighthouse Lantern Room", desc: "Original 1885 Fresnel lens with a range of 26 nautical miles." },
        { x: 80, y: 60, title: "Nine Degree Channel", desc: "Vital global shipping lane connecting the Arabian Sea to the Indian Ocean." }
      ]
    },
    tags: ["Lighthouse", "Maritime", "Coral Atoll", "Island Heritage", "Lakshadweep"]
  },  // ================= MAHARASHTRA =================
  {
    id: "ajanta-caves",
    name: "Ajanta Cave Murals & Monolithic Sanctuaries",
    stateId: "Maharashtra",
    stateName: "Maharashtra",
    district: "Chhatrapati Sambhajinagar (Aurangabad)",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "2nd Century BCE â€“ 5th Century CE (Satavahanas & Vakataka Emperor Harishena)",
    architecturalStyle: "Rock-Cut Buddhist Chaityas & Viharas with Tempera Frescoes",
    description: "Carved into a 75-meter crescent-shaped gorge along the Waghur River, Ajanta's 30 rock-cut caves preserve the greatest masterpiece of ancient Indian classical art. The tempera mural frescoes depicting the Bodhisattvas Padmapani and Vajrapani, Jataka tales, and courtly life showcase unparalleled grace, expressive eyes, and natural mineral pigments.",
    culturalSignificance: "The fountainhead of Asian Buddhist art that directly influenced frescoes across Dunhuang in China and Sigiriya in Sri Lanka. Rediscovered in 1819 by British officer John Smith during a tiger hunt.",
    festival: {
      name: "Ajanta-Ellora International Dance & Music Festival",
      period: "January â€“ February",
      description: "Classical Kathak, Odissi, and sitar virtuosos perform against the dramatic backdrop of illuminated ancient cave facades."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ajanta+Caves+Maharashtra",
    wikiUrl: "https://en.wikipedia.org/wiki/Ajanta_Caves",
    imageUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", caption: "Cave 19 Chaitya Hall with Ribbed Vault & Stupa" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Bodhisattva Padmapani Immortal Fresco" },
      { url: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80", caption: "Horseshoe-Shaped Waghur River Gorge Vista" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Ajanta Cave 26 Reclining Buddha",
      hotspots: [
        { x: 35, y: 45, title: "29-Foot Reclining Buddha", desc: "Monolithic sculpture of Buddha entering Mahaparinirvana carved from the basalt cliff." },
        { x: 75, y: 55, title: "Chaitya Vault Pillars", desc: "Monolithic columns with carved meditating Buddhas and floral medallions." }
      ]
    },
    tags: ["UNESCO", "Buddhist Art", "Rock-Cut Caves", "Frescoes", "Vakataka Dynasty"]
  },
  {
    id: "ellora-caves",
    name: "Kailasa Temple & Ellora Rock-Cut Caves",
    stateId: "Maharashtra",
    stateName: "Maharashtra",
    district: "Chhatrapati Sambhajinagar (Aurangabad)",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 5.0,
    builtIn: "8th Century CE (King Krishna I of the Rashtrakuta Dynasty)",
    architecturalStyle: "Top-Down Monolithic Basalt Rock Megalith Excavation (Dravidian)",
    description: "Cave 16 (The Kailasa Temple) is the largest monolithic rock-cut monument in human history. Sculptors excavated 200,000 tonnes of basalt rock from the top of the cliff downward without scaffolding. The multi-story temple complex features life-sized sculpted elephants, the Ravana Shaking Mount Kailash relief, and monolithic victory pillars (Dhvajastambhas).",
    culturalSignificance: "A supreme testimony to Indian religious pluralism, featuring 34 monasteries and temples dedicated to Hinduism, Buddhism, and Jainism excavated side-by-side.",
    festival: {
      name: "Ellora Cultural Festival & Maha Shivaratri",
      period: "February â€“ March",
      description: "Mesmerizing evening illuminations and classical dance recitals at the base of the colossal rock-cut sanctum."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ellora+Kailasa+Temple+Maharashtra",
    wikiUrl: "https://en.wikipedia.org/wiki/Kailash_Temple,_Ellora",
    imageUrl: "https://images.unsplash.com/photo-1600100397608-f010e47c5031?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1600100397608-f010e47c5031?auto=format&fit=crop&w=1200&q=80", caption: "Kailasa Cave 16 Monolithic Megalith Courtyard" },
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", caption: "Ravana Shaking Mount Kailash Bas-Relief" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1600100397608-f010e47c5031?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Kailasa Temple Courtyard, Ellora",
      hotspots: [
        { x: 50, y: 40, title: "Monolithic Main Vimana", desc: "Two-story temple carved from a single cliff rock standing 100 feet tall." },
        { x: 20, y: 70, title: "Monolithic Elephant Statues", desc: "Life-sized elephants carved from the native basalt forming the temple base." },
        { x: 80, y: 55, title: "Dhvajastambha Victory Column", desc: "Free-standing 45-foot monolithic pillar with intricate Trishula carvings." }
      ]
    },
    tags: ["UNESCO", "Monolithic Megalith", "Rashtrakuta", "Kailasa", "Rock Architecture"]
  },

  // ================= GUJARAT =================
  {
    id: "rani-ki-vav",
    name: "Rani ki Vav (The Queen's Stepwell), Patan",
    stateId: "Gujarat",
    stateName: "Gujarat",
    district: "Patan",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "1063 CE (Commissioned by Queen Udayamati in memory of King Bhima I)",
    architecturalStyle: "Maru-Gurjara Inverted Temple Subterranean Architecture",
    description: "Designed as an inverted temple highlighting the sanctity of water, Rani ki Vav descends seven stepped levels into the earth across 64 meters of length and 27 meters of depth. Over 500 principal sculptures and 1,000 minor religious reliefs adorn the stepped corridors, featuring the Dashavatara (ten incarnations of Vishnu), celestial Apsaras, and intricate geometrical motifs.",
    culturalSignificance: "Represented on the Indian 100-rupee currency note. It remained silted under the Saraswati River for centuries, preserving its pristine sharp carvings until archaeological excavation in the 1980s.",
    festival: {
      name: "Rani ki Vav Utsav & Patan Patola Heritage Fair",
      period: "December â€“ January",
      description: "Winter cultural festival celebrating subterranean architecture, classical Garba dance, and double-ikat Patola weaving demonstrations."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rani+ki+Vav+Patan+Gujarat",
    wikiUrl: "https://en.wikipedia.org/wiki/Rani_ki_Vav",
    imageUrl: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80", caption: "Seven-Tiered Subterranean Stepped Gallery" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Sheshashayi Vishnu & Dashavatara Carvings" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Rani ki Vav Fourth Tier Pavilions",
      hotspots: [
        { x: 50, y: 55, title: "Sheshashayi Vishnu Relief", desc: "Exquisite carving of Vishnu reclining on thousand-headed serpent Sheshanaga." },
        { x: 25, y: 40, title: "Stepped Well Shaft", desc: "Circular 28-meter deep water reservoir flanked by pillared galleries." }
      ]
    },
    tags: ["UNESCO", "Stepwell", "Solanki Dynasty", "Maru-Gurjara", "Water Heritage"]
  },
  {
    id: "sun-temple-modhera",
    name: "Sun Temple & Surya Kund Stepwell, Modhera",
    stateId: "Gujarat",
    stateName: "Gujarat",
    district: "Mehsana",
    category: "Ancient Solar Observatory & Temple",
    isUnesco: false,
    rating: 4.8,
    builtIn: "1026 CE (King Bhimdev I of the Solanki Dynasty)",
    architecturalStyle: "Maru-Gurjara Architecture with Solar Equinox Alignment",
    description: "Built on the Tropic of Cancer along the Pushpavati River, the Sun Temple was engineered so that during the spring and autumn equinoxes, the first rays of the rising sun illuminated the golden idol of Surya in the innermost sanctum. The complex consists of the Guda Mandapa (Sanctum), Sabha Mandapa (Assembly Hall of 52 carved pillars), and the majestic Surya Kund with 108 miniature shrines.",
    culturalSignificance: "One of the grandest sun temples in Asia, celebrated for its geometric stepped water tank and astronomical precision.",
    festival: {
      name: "Modhera Dance Festival (Uttarardh Mahotsav)",
      period: "Third Week of January (Post-Makar Sankranti)",
      description: "A premier 3-day Indian classical dance festival illuminating the Sun Temple steps with performances by national maestros."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sun+Temple+Modhera+Gujarat",
    wikiUrl: "https://en.wikipedia.org/wiki/Sun_Temple,_Modhera",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Surya Kund Stepped Tank with 108 Miniature Shrines" },
      { url: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80", caption: "Sabha Mandapa 52 Pillars Representing Weeks of the Year" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Surya Kund Steps & Modhera Mandapa",
      hotspots: [
        { x: 50, y: 50, title: "Surya Kund Water Mirror", desc: "Rectangular reservoir with geometric steps reflecting the illuminated temple at night." },
        { x: 80, y: 40, title: "Kirti Torana Archway", desc: "Free-standing ornamental gateway leading into the grand assembly hall." }
      ]
    },
    tags: ["Solar Alignment", "Solanki", "Surya Kund", "Modhera Dance", "Stepwell"]
  },

  // ================= RAJASTHAN =================
  {
    id: "amer-fort",
    name: "Amer Palace & Amber Fort Complex, Jaipur",
    stateId: "Rajasthan",
    stateName: "Rajasthan",
    district: "Jaipur",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "1592 CE (Raja Man Singh I, expanded by Mirza Raja Jai Singh)",
    architecturalStyle: "Rajput-Mughal Fusion Architecture with Yellow Sandstone & Marble",
    description: "Perched majestically on the rugged Cheel ka Teela (Hill of Eagles) overlooking Maota Lake, Amer Fort is celebrated for its opulent royal courtyards, marble lattice windows, and the world-famous Sheesh Mahal (Hall of Mirrors) inlaid with concave Belgian glass that illuminates the entire hall with a single candle.",
    culturalSignificance: "Inscribed as part of the UNESCO Hill Forts of Rajasthan. Connected via subterranean tunnels to Jaigarh Fort, home to the Jaivana cannon â€” the world's largest cannon on wheels.",
    festival: {
      name: "Jaipur Literature Festival & Elephant Festival at Amer",
      period: "January â€“ March & Gangaur Festival",
      description: "Spectacular royal processions with decorated horses, traditional Ghoomar dance, and illuminated musical sound and light shows."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Amber+Fort+Jaipur+Rajasthan",
    wikiUrl: "https://en.wikipedia.org/wiki/Amer_Fort",
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80", caption: "Amer Fort Ramparts & Maota Lake Reflection" },
      { url: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80", caption: "Sheesh Mahal (Glass Mirror Palace) Intricate Mosaics" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Ganesh Pol Grand Gateway Frescoes" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Amer Fort Jaleb Chowk Courtyard",
      hotspots: [
        { x: 30, y: 45, title: "Sheesh Mahal Mirror Hall", desc: "Thousands of convex glass mirrors creating a star-lit night sky effect." },
        { x: 70, y: 35, title: "Ganesh Pol Gateway", desc: "Three-tiered royal entrance gate adorned with delicate miniature paintings." },
        { x: 50, y: 75, title: "Maota Lake Kesar Kyari Garden", desc: "Saffron garden floating in the lake designed in geometric star patterns." }
      ]
    },
    tags: ["UNESCO", "Hill Forts", "Rajput Royalty", "Sheesh Mahal", "Jaipur"]
  },
  {
    id: "hawa-mahal",
    name: "Hawa Mahal (Palace of Winds), Jaipur",
    stateId: "Rajasthan",
    stateName: "Rajasthan",
    district: "Jaipur",
    category: "Royal Heritage & Palace",
    isUnesco: false,
    rating: 4.8,
    builtIn: "1799 CE (Maharaja Sawai Pratap Singh, Designed by Lal Chand Ustad)",
    architecturalStyle: "Rajput Architecture shaped like Lord Krishna's Crown",
    description: "Built of red and pink sandstone, Hawa Mahal is a five-story pyramidal monument with a unique honeycombed exterior containing 953 delicately carved latticework windows (Jharokhas). The airflow through the small casements creates a natural air conditioning effect (Venturi effect), giving the palace its name.",
    culturalSignificance: "Designed to allow royal ladies of the court to observe daily street life, royal processions, and markets in the Pink City below without being seen from outside (Puradash system).",
    festival: {
      name: "Teej & Gangaur Royal Processions",
      period: "July â€“ August & March â€“ April",
      description: "Grand traditional processions passing directly beneath Hawa Mahal with caparisoned elephants, folk musicians, and palanquins."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hawa+Mahal+Jaipur",
    wikiUrl: "https://en.wikipedia.org/wiki/Hawa_Mahal",
    imageUrl: "https://images.unsplash.com/photo-1600100397608-f010e47c5031?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1600100397608-f010e47c5031?auto=format&fit=crop&w=1200&q=80", caption: "953 Pink Sandstone Jharokha Facade" },
      { url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80", caption: "Interior Colored Stained Glass Windows & Courtyard" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1600100397608-f010e47c5031?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Hawa Mahal Top Tier View over Pink City",
      hotspots: [
        { x: 50, y: 40, title: "Krishna Crown Apex", desc: "Top floor offering vistas of Jantar Mantar and City Palace." },
        { x: 25, y: 60, title: "Stained Glass Jharokhas", desc: "Multi-colored glass casting kaleidoscopic hues across the marble floors." }
      ]
    },
    tags: ["Pink City", "Jharokhas", "Palace of Winds", "Rajput", "Architecture"]
  },

  // ================= GOA =================
  {
    id: "basilica-bom-jesus",
    name: "Basilica of Bom Jesus & Old Goa Churches",
    stateId: "Goa",
    stateName: "Goa",
    district: "North Goa (Velha Goa)",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.8,
    builtIn: "1594â€“1605 CE (Portuguese Jesuits)",
    architecturalStyle: "Manueline & Baroque Architecture in Exposed Basalt",
    description: "The Basilica of Bom Jesus ('Good Infant Jesus') is one of the oldest churches in India and a supreme example of Baroque architecture. Its unplastered black granite facade and gilded wood-carved altars house the sacred, incorrupt relics of St. Francis Xavier, enshrined in a multi-tiered silver casket crafted by 17th-century Florentine jewelers.",
    culturalSignificance: "Inscribed as Churches and Convents of Goa under UNESCO. Landmark of Indo-Portuguese Christian heritage and pilgrimage epicenter.",
    festival: {
      name: "Feast of St. Francis Xavier & Holy Decennial Exposition",
      period: "December 3 (Annual) & Every 10 Years",
      description: "Solemn Catholic masses, choral hymns, and public veneration attended by pilgrims from around the world."
    },
    bestTime: "November to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Basilica+of+Bom+Jesus+Old+Goa",
    wikiUrl: "https://en.wikipedia.org/wiki/Basilica_of_Bom_Jesus",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", caption: "Exposed Basalt Baroque Facade & Bell Tower" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Gilded Baroque High Altar of Saint Ignatius" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Basilica of Bom Jesus Nave",
      hotspots: [
        { x: 50, y: 40, title: "Golden High Altar", desc: "Towering carved wooden reredos coated in gold leaf honoring Saint Ignatius of Loyola." },
        { x: 80, y: 60, title: "Silver Casket of St. Francis", desc: "Florentine marble mausoleum with silver panels depicting 32 miracles." }
      ]
    },
    tags: ["UNESCO", "Baroque", "Portuguese Era", "Old Goa", "Pilgrimage"]
  },

  // ================= DADRA & NAGAR HAVELI & DAMAN & DIU =================
  {
    id: "diu-fort",
    name: "Diu Portuguese Fort & Sea Fortress",
    stateId: "DadraAndNagarHaveli",
    stateName: "Dadra and Nagar Haveli & Daman and Diu",
    district: "Diu",
    category: "Colonial Coastal Citadel",
    isUnesco: false,
    rating: 4.7,
    builtIn: "1535â€“1541 CE (Portuguese Governor Nuno da Cunha)",
    architecturalStyle: "Renaissance Sea Fortress with Moat and Bastions",
    description: "Surrounded on three sides by the crashing waves of the Arabian Sea, Diu Fort is an imposing stone fortress built following a defense pact between the Sultan of Gujarat (Bahadur Shah) and the Portuguese. The fort features deep sea moats, bronze cannons along the battlements, a lighthouse with 360-degree marine views, and three baroque churches.",
    culturalSignificance: "Site of the historic 1509 Battle of Diu that established European naval dominance in the Indian Ocean. A living showcase of Indo-Portuguese coastal history.",
    festival: {
      name: "Festa De Diu (Asia's Longest Beach Festival)",
      period: "December â€“ February",
      description: "Music concerts, water sports, Portuguese folk dances, and seaside heritage food festivals."
    },
    bestTime: "October to April",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Diu+Fort+Daman+and+Diu",
    wikiUrl: "https://en.wikipedia.org/wiki/Diu_Fort",
    imageUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", caption: "Sea-Facing Stone Ramparts with Vintage Cannons" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Diu Fort Sea Bastion",
      hotspots: [
        { x: 50, y: 35, title: "Lighthouse Watchpoint", desc: "Highest point overlooking the Gulf of Khambhat and Arabian Sea." },
        { x: 20, y: 65, title: "Stone Moat & Drawbridge", desc: "Tidal moat filled with seawater separating the citadel from Diu Island." }
      ]
    },
    tags: ["Portuguese", "Sea Fort", "Cannons", "Maritime History", "Diu"]
  },  // ================= UTTAR PRADESH =================
  {
    id: "taj-mahal",
    name: "Taj Mahal Mausoleum & Charbagh Gardens, Agra",
    stateId: "UttarPradesh",
    stateName: "Uttar Pradesh",
    district: "Agra",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 5.0,
    builtIn: "1632â€“1653 CE (Mughal Emperor Shah Jahan, Ustad Ahmad Lahori)",
    architecturalStyle: "Indo-Islamic Mughal Architecture in Pure Makrana Marble",
    description: "An internationally acclaimed Wonder of the World and UNESCO World Heritage site, the Taj Mahal was commissioned by Shah Jahan as a mausoleum for his beloved wife Mumtaz Mahal. Built of translucent white Makrana marble from Rajasthan inlaid with 28 types of precious gemstones (Pietra Dura), the complex features perfect bilateral symmetry, four minarets tilted slightly outward, and reflecting lotus pools.",
    culturalSignificance: "Described by Nobel laureate Rabindranath Tagore as 'a teardrop on the cheek of time', it stands as the zenith of Mughal architectural symmetry and poetic craftsmanship.",
    festival: {
      name: "Taj Mahotsav Cultural Festival & Full Moon Viewing",
      period: "February 18â€“27 (10 Days) & Sharad Purnima",
      description: "Grand annual artisan craft fair with classical Kathak dancers, Awadhi food stalls, and special night viewing under the full moon."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Taj+Mahal+Agra",
    wikiUrl: "https://en.wikipedia.org/wiki/Taj_Mahal",
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80", caption: "Iconic White Marble Dome & Reflecting Charbagh Pool" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Pietra Dura Gemstone Floral Inlay Detail" },
      { url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80", caption: "Mehtab Bagh Sunset Reflection across Yamuna River" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Taj Mahal Central Garden Promenade",
      hotspots: [
        { x: 50, y: 35, title: "Central Onion Dome", desc: "Soaring 73-meter double dome surrounded by four smaller domed chattris." },
        { x: 20, y: 55, title: "Pietra Dura Parchin Kari", desc: "Semi-precious stones (lapis lazuli, jade, turquoise) embedded in pure white marble." },
        { x: 80, y: 65, title: "Yamuna River Bank", desc: "Northern overlook facing the Moonlight Garden (Mehtab Bagh)." }
      ]
    },
    tags: ["UNESCO", "Wonder of the World", "Mughal", "White Marble", "Pietra Dura"]
  },
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath Temple & Ganga Ghats, Varanasi",
    stateId: "UttarPradesh",
    stateName: "Uttar Pradesh",
    district: "Varanasi",
    category: "Living Sacred Heritage & Ancient Jyotirlinga",
    isUnesco: false,
    rating: 4.9,
    builtIn: "Ancient origins, rebuilt 1780 CE by Queen Ahilyabai Holkar of Indore",
    architecturalStyle: "Nagara Style Temple with Gold-Plated Shikhara & River Ghats",
    description: "Varanasi (Kashi) is one of the world's oldest continuously inhabited cities, situated along the sacred crescent of the River Ganga. The Kashi Vishwanath Temple is one of the 12 Jyotirlingas, capped by an 800-kilogram gold-plated spire gifted by Maharaja Ranjit Singh. Connected to 84 historic Ghats including Dashashwamedh, Manikarnika, and Assi.",
    culturalSignificance: "Spiritual heart of India, where Adi Shankaracharya, Kabir, Tulsidas (who composed Ramcharitmanas), and Munshi Premchand lived. Cradle of the Banaras Gharana in classical Indian music and Banarasi silk weaving.",
    festival: {
      name: "Dev Deepawali & Maha Shivaratri",
      period: "Kartik Purnima (November) & February â€“ March",
      description: "The entire 7-kilometer riverfront is illuminated by over one million earthen clay lamps (diyas) accompanied by the grand Maha Ganga Aarti."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kashi+Vishwanath+Temple+Varanasi",
    wikiUrl: "https://en.wikipedia.org/wiki/Kashi_Vishwanath_Temple",
    imageUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80", caption: "Dashashwamedh Ghat Evening Ganga Aarti" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Kashi Vishwanath Golden Shikhara & Corridor" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Dashashwamedh Ghat Ganga Aarti",
      hotspots: [
        { x: 50, y: 45, title: "Maha Ganga Aarti Priests", desc: "Seven synchronized priests performing multi-tiered brass lamp rituals facing the Ganga." },
        { x: 20, y: 65, title: "Kashi Corridor", desc: "Direct sacred promenade connecting the river ghats to Lord Vishwanath's sanctum." }
      ]
    },
    tags: ["Jyotirlinga", "Ganga Aarti", "Varanasi", "Banaras", "Ancient City"]
  },

  // ================= PUNJAB =================
  {
    id: "golden-temple",
    name: "Sri Harmandir Sahib (The Golden Temple), Amritsar",
    stateId: "Punjab",
    stateName: "Punjab",
    district: "Amritsar",
    category: "Sacred Sikh Sanctuary & Golden Shrine",
    isUnesco: false,
    rating: 5.0,
    builtIn: "1581â€“1604 CE (Guru Ram Das, Guru Arjan Dev & Maharaja Ranjit Singh)",
    architecturalStyle: "Sikh Architecture clad in Gilded Copper & Marble Inlay",
    description: "Surrounded by the holy Amrit Sarovar (Pool of Nectar), Sri Harmandir Sahib is the holiest Gurdwara of Sikhism. Built with four open entrances symbolizing universal welcoming for all castes and creeds, its upper floors are covered in 500 kilograms of pure gold leaf. The complex houses the world's largest free community kitchen (Guru Ram Das Langar), feeding up to 100,000 people daily regardless of background.",
    culturalSignificance: "Repository of the original Adi Granth installed by Guru Arjan Dev in 1604. Adjacent to the Akal Takht, the highest seat of temporal authority for the Sikh Khalsa.",
    festival: {
      name: "Baisakhi & Guru Nanak Gurpurab",
      period: "April 13â€“14 & November (Kartik Purnima)",
      description: "Magnificent nighttime illumination with thousands of floating lamps, continuous 48-hour Akhand Path recitation, and classical Gurbani Kirtan."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Golden+Temple+Amritsar",
    wikiUrl: "https://en.wikipedia.org/wiki/Golden_Temple",
    imageUrl: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80", caption: "Golden Temple Sanctum Illuminated over the Amrit Sarovar" },
      { url: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80", caption: "Guru Ram Das Langar Hall Community Service" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Akal Takht Historical Edifice & Causeways" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Amrit Sarovar Parikrama Causeway",
      hotspots: [
        { x: 50, y: 45, title: "Golden Sanctum (Darbar Sahib)", desc: "Two-story gold-plated shrine where holy Guru Granth Sahib is continuously recited." },
        { x: 25, y: 65, title: "Amrit Sarovar Holy Waters", desc: "Man-made holy pool excavated by Guru Ram Das in 1577 CE." },
        { x: 80, y: 40, title: "Akal Takht (Throne of the Timeless)", desc: "Founded by Guru Hargobind in 1606 representing Sikh spiritual sovereignty." }
      ]
    },
    tags: ["Sikhism", "Golden Temple", "Langar", "Amritsar", "Spiritual Unity"]
  },

  // ================= DELHI =================
  {
    id: "qutub-minar",
    name: "Qutb Minar & Iron Pillar Complex, Mehrauli",
    stateId: "Delhi",
    stateName: "Delhi",
    district: "South Delhi (Mehrauli)",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.8,
    builtIn: "1192â€“1220 CE (Qutb-ud-din Aibak, Iltutmish, Feroz Shah Tughlaq)",
    architecturalStyle: "Indo-Islamic Fluted Minaret with Calligraphy & Hindu-Jain Spolia",
    description: "Rising 72.5 meters high with five distinct tapering tiers, Qutb Minar is the world's tallest brick minaret. It features delicate fluting, Quranic calligraphy, and intricate stalactite honeycomb balconies. The complex includes the 4th-century CE Gupta Iron Pillar that has resisted rust for over 1,600 years, and the soaring Alai Darwaza gateway.",
    culturalSignificance: "Marks the establishment of the Delhi Sultanate. The rustless metallurgy of the Ashoka/Chandra Iron Pillar remains a world-renowned ancient Indian engineering marvel.",
    festival: {
      name: "Qutub Festival of Classical Music & Dance",
      period: "November â€“ December",
      description: "A 3-day twilight festival featuring national classical vocalists and dancers set against the illuminated 800-year-old sandstone minaret."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Qutub+Minar+Delhi",
    wikiUrl: "https://en.wikipedia.org/wiki/Qutb_Minar_complex",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", caption: "72.5-Meter Fluted Red Sandstone Minaret" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "1600-Year-Old Rustless Gupta Iron Pillar & Quwwat-ul-Islam" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Qutb Complex Courtyard",
      hotspots: [
        { x: 50, y: 30, title: "Qutb Minar Tower", desc: "Tapering from 14.3 meters diameter at base to 2.7 meters at the summit." },
        { x: 75, y: 65, title: "Gupta Rustless Iron Pillar", desc: "Forged wrought iron with high phosphorus and passive iron oxide film resisting corrosion since 400 CE." }
      ]
    },
    tags: ["UNESCO", "Delhi Sultanate", "Iron Pillar", "Minaret", "Architecture"]
  },

  // ================= JAMMU & KASHMIR =================
  {
    id: "martand-sun-temple",
    name: "Martand Sun Temple Ruins, Anantnag",
    stateId: "JammuAndKashmir",
    stateName: "Jammu and Kashmir",
    district: "Anantnag",
    category: "Ancient Kashmiri Stone Temple",
    isUnesco: false,
    rating: 4.8,
    builtIn: "8th Century CE (King Lalitaditya Muktapida of the Karkota Dynasty)",
    architecturalStyle: "Kashmiri Classical Architecture blending Gandharan, Roman & Gupta Styles",
    description: "Perched atop a plateau overlooking the entire Kashmir Valley with snow-capped Pir Panjal peaks, Martand Sun Temple was the crowning jewel of King Lalitaditya Muktapida. Constructed of massive limestone blocks with trefoil arches, Greek-influenced fluted pillars, and 84 secondary shrines around a grand colonnaded courtyard.",
    culturalSignificance: "Represented the pinnacle of ancient Kashmiri stone masonry and astronomical sun worship, celebrated in Kalhana's Sanskrit historical chronicle Rajatarangini.",
    festival: {
      name: "Martand Surya Mahotsav & Kashmiri Cultural Mela",
      period: "May â€“ June",
      description: "Revival rituals, Kashmiri Sufiyana music, and traditional Rouf dance performances in the ancient courtyard."
    },
    bestTime: "April to October",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Martand+Sun+Temple+Anantnag+Kashmir",
    wikiUrl: "https://en.wikipedia.org/wiki/Martand_Sun_Temple",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Trefoil Arches & Colonnaded Courtyard of Martand" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Martand Temple & Kashmir Valley Vista",
      hotspots: [
        { x: 50, y: 45, title: "Central Sanctum (Garbhagriha)", desc: "Ancient sanctum positioned to catch morning sunrise rays across the valley." },
        { x: 20, y: 60, title: "Trefoil Fluted Colonnade", desc: "84 pillared peristyle reflecting Greek-Gandharan classical aesthetics." }
      ]
    },
    tags: ["Karkota Dynasty", "Sun Temple", "Kashmir Heritage", "Lalitaditya", "Rajatarangini"]
  },

  // ================= LADAKH =================
  {
    id: "thiksey-monastery",
    name: "Thiksey Monastery (Mini Potala), Leh Valley",
    stateId: "Ladakh",
    stateName: "Ladakh",
    district: "Leh",
    category: "Tibetan Buddhist Gompa & Living Monastery",
    isUnesco: false,
    rating: 4.9,
    builtIn: "1430 CE (Founded by Changsem Sherab Zangpo of the Gelugpa Order)",
    architecturalStyle: "Tibetan Gompa 12-Story Hillside Fortified Architecture",
    description: "Affiliated with the Gelugpa (Yellow Hat) order, Thiksey Monastery cascades dramatically down a 12-tiered hill in the Indus Valley, bearing a striking resemblance to the Potala Palace in Lhasa. It houses the famed 49-foot Maitreya (Future) Buddha statue, consecrated by the 14th Dalai Lama, and rare centuries-old Thangka scroll paintings, Buddhist stupas, and ancient scriptures.",
    culturalSignificance: "Living sanctuary of Mahayana Tibetan Buddhism where 80 monks perform daily dawn pujas with conch shells, giant trumpets (dungchen), and butter lamp rituals.",
    festival: {
      name: "Thiksey Gustor Festival (Sacred Mask Dance)",
      period: "October â€“ November (2 Days)",
      description: "Monks in elaborate brocade costumes and terrifying deity masks perform the Cham sacred dance symbolizing the victory of wisdom over ignorance."
    },
    bestTime: "May to October (Clear mountain passes)",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Thiksey+Monastery+Leh+Ladakh",
    wikiUrl: "https://en.wikipedia.org/wiki/Thiksey_Monastery",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", caption: "12-Tiered Monastery Cascade against Himalayan Peaks" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "49-Foot Gilded Maitreya Future Buddha" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Thiksey Monastery Rooftop & Indus Valley",
      hotspots: [
        { x: 50, y: 40, title: "Maitreya Buddha Temple", desc: "49-foot statue spanning two floors with lotus crown and intricate jewels." },
        { x: 80, y: 55, title: "Indus River Floodplain", desc: "Panoramic view of green oasis fields surrounded by cold desert peaks." }
      ]
    },
    tags: ["Gelugpa", "Maitreya Buddha", "Cham Dance", "Ladakh", "Tibetan Gompa"]
  },

  // ================= HIMACHAL PRADESH =================
  {
    id: "hadimba-temple",
    name: "Hadimba Devi Pagoda Temple, Manali",
    stateId: "HimachalPradesh",
    stateName: "Himachal Pradesh",
    district: "Kullu",
    category: "Indigenous Wooden Pagoda Temple",
    isUnesco: false,
    rating: 4.8,
    builtIn: "1553 CE (Maharaja Bahadur Singh of Kullu)",
    architecturalStyle: "Kathkuni Style 4-Tiered Himalayan Cedar Wood Architecture",
    description: "Nestled amidst an ancient sacred cedar (Deodar) forest (Dhungri Van Vihar), Hadimba Temple is built around an ancient natural rock cave consecrated to Hadimba Devi, wife of Bhima from the Mahabharata epic. Its 24-meter wooden pagoda tower has three square timber roofs covered in wooden tiles and a fourth conical brass top roof decorated with carved animal motifs.",
    culturalSignificance: "Unique temple in India where the presiding deity is not a Vedic goddess but a forest demigod with roots in tribal Kullu folklore and animal sacrifice lore.",
    festival: {
      name: "Dhungri Mela & Kullu Dussehra",
      period: "May (Hadimba Birthday) & October",
      description: "Three-day folk fair celebrating local village deities with trumpet processions, Nati folk dances, and traditional Himachali food."
    },
    bestTime: "Year-round (Summer greenery or winter snowfall)",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hadimba+Temple+Manali",
    wikiUrl: "https://en.wikipedia.org/wiki/Hidimba_Devi_Temple",
    imageUrl: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80", caption: "4-Tiered Cedar Wood Pagoda in Snow-Covered Deodar Forest" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Hadimba Temple Forest Glade",
      hotspots: [
        { x: 50, y: 40, title: "Pagoda Timber Roofs", desc: "Hand-carved cedar wood reliefs depicting mythological beasts and floral rosettes." },
        { x: 25, y: 65, title: "Natural Rock Sanctum", desc: "Natural cavern housing Hadimba's sacred footprint (Charan Paduka)." }
      ]
    },
    tags: ["Kathkuni", "Cedar Wood", "Pagoda", "Mahabharata", "Manali"]
  },

  // ================= UTTARAKHAND =================
  {
    id: "kedarnath-temple",
    name: "Kedarnath Jyotirlinga, Garhwal Himalayas",
    stateId: "Uttarakhand",
    stateName: "Uttarakhand",
    district: "Rudraprayag",
    category: "Sacred High-Altitude Jyotirlinga & Char Dham",
    isUnesco: false,
    rating: 5.0,
    builtIn: "Ancient origins (8th Century CE rebuilt by Adi Shankaracharya)",
    architecturalStyle: "Katyuri Style Interlocking Grey Granite Mountain Temple",
    description: "Standing at an altitude of 3,583 meters near the Mandakini River and flanked by the snow-clad Kedarnath peak (6,940m), Kedarnath is the highest of the 12 sacred Jyotirlingas and the foremost of the Panch Kedar. Constructed from massive interlocking grey granite slabs without mortar, it miraculously survived the catastrophic 2013 Himalayan deluge.",
    culturalSignificance: "Associated with the Pandavas seeking absolution from Lord Shiva after the Kurukshetra war. The samadhi of Adi Shankaracharya lies directly behind the temple.",
    festival: {
      name: "Kedarnath Kapat Opening Ceremony & Maha Shivaratri",
      period: "Akshaya Tritiya (April/May) to Diwali (November)",
      description: "Sacred doli palanquin procession carrying Lord Kedarnath's Utsav Murti from Ukhimath winter seat to Kedarnath with military band salutes."
    },
    bestTime: "May to June & September to October (Closed in harsh winter)",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kedarnath+Temple+Uttarakhand",
    wikiUrl: "https://en.wikipedia.org/wiki/Kedarnath_Temple",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", caption: "Kedarnath Temple with Snow-Clad Kedarnath Peak Background" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Bhim Shila Miraculous Protective Boulder" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Kedarnath Valley & Himalayan Glaciers",
      hotspots: [
        { x: 50, y: 40, title: "Granite Shikhara", desc: "Interlocking stone construction that withstood glacial pressure and floods for 1,200 years." },
        { x: 80, y: 55, title: "Bhim Shila Boulder", desc: "Gigantic rock that diverted floodwaters away from the sanctum during the 2013 deluge." }
      ]
    },
    tags: ["Jyotirlinga", "Char Dham", "Himalayas", "Adi Shankaracharya", "Shiva"]
  },

  // ================= HARYANA =================
  {
    id: "kurukshetra-brahma-sarovar",
    name: "Brahma Sarovar & Jyotisar, Kurukshetra",
    stateId: "Haryana",
    stateName: "Haryana",
    district: "Kurukshetra",
    category: "Sacred Vedic Pilgrimage & Birthplace of Gita",
    isUnesco: false,
    rating: 4.8,
    builtIn: "Ancient Vedic Era (Mentioned in Rigveda & Mahabharata)",
    architecturalStyle: "Vedic Sacred Water Enclosure & Stepped Ghats",
    description: "Brahma Sarovar is a massive holy water reservoir measuring 1,800 feet by 1,400 feet, revered as the cradle of civilization where Lord Brahma performed the universe's creation yajna. Nearby Jyotisar is the hallowed site where Lord Krishna delivered the immortal 700-verse philosophy of the Bhagavad Gita to Arjuna under an ancient banyan tree.",
    culturalSignificance: "Mentioned in Al-Biruni's 11th-century memoirs Kitab-ul-Hind. Taking a holy dip here during a solar eclipse is considered equal to performing a thousand Ashwamedha sacrifices.",
    festival: {
      name: "International Gita Mahotsav & Solar Eclipse Fair",
      period: "November â€“ December (Gita Jayanti)",
      description: "Global philosophical conclave, Maha Aarti on the waters of Brahma Sarovar with 500,000 lamps, and national craft exhibitions."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Brahma+Sarovar+Kurukshetra",
    wikiUrl: "https://en.wikipedia.org/wiki/Brahma_Sarovar",
    imageUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", caption: "Brahma Sarovar Ghats & Bronze Chariot of Krishna-Arjuna" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Brahma Sarovar Central Island Shrine",
      hotspots: [
        { x: 50, y: 50, title: "Bronze Krishna-Arjuna Chariot", desc: "Colossal bronze sculpture depicting Lord Krishna imparting the Gita to warrior Arjuna." },
        { x: 25, y: 65, title: "Sarveshwar Mahadev Shrine", desc: "Ancient island temple linked by a bridge in the center of the lake." }
      ]
    },
    tags: ["Bhagavad Gita", "Mahabharata", "Vedic Heritage", "Kurukshetra", "Brahma Sarovar"]
  },

  // ================= CHANDIGARH =================
  {
    id: "nek-chand-rock-garden",
    name: "Nek Chand's Rock Garden, Chandigarh",
    stateId: "Chandigarh",
    stateName: "Chandigarh",
    district: "Chandigarh",
    category: "Visionary Folk Art Sanctuary",
    isUnesco: false,
    rating: 4.8,
    builtIn: "1957â€“1976 CE (Created secretly by self-taught artist Nek Chand Saini)",
    architecturalStyle: "Visionary Mosaic Sculpture using Industrial & Domestic Recycled Waste",
    description: "Spread over 40 acres near Sukhna Lake, the Rock Garden is an iconic global masterpiece of eco-art created entirely out of urban and industrial waste â€” broken ceramic crockery, colorful glass bangles, electrical porcelain insulators, discarded bathroom sinks, and foundry slag. Features maze-like interlinked courtyards with thousands of dancing figurines, soldiers, monkeys, and cascading artificial waterfalls.",
    culturalSignificance: "Created in total secrecy for 18 years in a government forest reserve before being discovered and officially recognized as a civic treasure. Celebrated internationally as a triumph of folk outsider art and recycling.",
    festival: {
      name: "Teej Festival at Rock Garden & Chandigarh Rose Festival",
      period: "August & February",
      description: "Colorful swings, folk music, traditional Giddha dance, and street food stalls celebrating monsoon and floral heritage."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rock+Garden+Chandigarh",
    wikiUrl: "https://en.wikipedia.org/wiki/Rock_Garden_of_Chandigarh",
    imageUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", caption: "Mosaic Sculpted Dancers of Broken Bangles and Ceramic Tiles" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Rock Garden Waterfall Amphitheatre",
      hotspots: [
        { x: 50, y: 40, title: "Waterfall Courtyard", desc: "Cascading rock waterfalls built from recycled concrete and stone slabs." },
        { x: 20, y: 65, title: "Bangle Mosaic Figurines", desc: "Hundreds of life-size figures clad in thousands of discarded glass bangles." }
      ]
    },
    tags: ["Folk Art", "Recycling", "Nek Chand", "Mosaic", "Chandigarh"]
  },  // ================= MADHYA PRADESH =================
  {
    id: "khajuraho-monuments",
    name: "Khajuraho Group of Temples, Chhatarpur",
    stateId: "MadhyaPradesh",
    stateName: "Madhya Pradesh",
    district: "Chhatarpur",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "950â€“1050 CE (Chandela Dynasty Kings Dhanga & Vidyadhara)",
    architecturalStyle: "Nagara Style Sandstone Superstructures with Erotic Sculptures",
    description: "The 25 surviving temples of Khajuraho represent the zenith of medieval Indian temple architecture and stone sculpture. The Kandariya Mahadeva Temple features a soaring 31-meter Shikhara simulating Mount Kailash, surrounded by 84 miniature spires (Urushringas). The intricate stone carvings depict spiritual transcendence alongside the celebration of human love, celestial dancers (Surasundaris), and daily medieval life.",
    culturalSignificance: "Celebrates the four Purusharthas (Dharma, Artha, Kama, Moksha) in Hindu philosophy. Inscribed as a UNESCO World Heritage site for its architectural harmony and artistic craftsmanship.",
    festival: {
      name: "Khajuraho Dance Festival",
      period: "February 20â€“26 (Annual)",
      description: "One of India's most prestigious open-air classical dance festivals, featuring Kathak, Bharatanatyam, Odissi, and Kuchipudi dancers set against illuminated temples."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Khajuraho+Temples+Madhya+Pradesh",
    wikiUrl: "https://en.wikipedia.org/wiki/Khajuraho_Group_of_Monuments",
    imageUrl: "https://images.unsplash.com/photo-1600100397608-f010e47c5031?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1600100397608-f010e47c5031?auto=format&fit=crop&w=1200&q=80", caption: "Kandariya Mahadeva Temple Soaring Shikhara & Platform" },
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", caption: "Intricate Stone Friezes & Celestial Surasundaris" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1600100397608-f010e47c5031?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Western Group of Temples, Khajuraho",
      hotspots: [
        { x: 50, y: 35, title: "Kandariya Mahadeva Shikhara", desc: "31-meter spire composed of 84 graded subsidiary peaks imitating the Himalayas." },
        { x: 25, y: 65, title: "Lakshmana Temple Platform", desc: "One of the best preserved temples with a continuous narrative base frieze of royal hunts and battles." }
      ]
    },
    tags: ["UNESCO", "Chandela", "Nagara", "Kandariya Mahadeva", "Classical Dance"]
  },
  {
    id: "sanchi-stupa",
    name: "Great Stupa at Sanchi, Raisen",
    stateId: "MadhyaPradesh",
    stateName: "Madhya Pradesh",
    district: "Raisen",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "3rd Century BCE â€“ 1st Century CE (Emperor Ashoka, Satavahanas & Sungas)",
    architecturalStyle: "Buddhist Hemispherical Dome with Carved Torana Gateways",
    description: "The Great Stupa at Sanchi is the oldest stone structure in India, commissioned by Emperor Ashoka over the holy relics of Lord Buddha. It is world-famous for its four elaborately carved stone gateways (Toranas) facing the four cardinal directions, depicting the Jataka tales, Buddha's miracles, Ashoka's pilgrimage, and symbolic representations of Buddha (bodhi tree, footprints, dharma wheel).",
    culturalSignificance: "Ashoka's queen Devi was from nearby Vidisha. The Ashokan Lion Capital at Sanchi served as a model for the national emblem of India alongside the Sarnath pillar.",
    festival: {
      name: "Chethiyagiri Vihara International Buddhist Festival",
      period: "Last Sunday of November",
      description: "Thousands of international Buddhist pilgrims gather for the public exposition of the sacred relics of Sariputta and Maha Moggallana (Buddha's chief disciples)."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sanchi+Stupa+Madhya+Pradesh",
    wikiUrl: "https://en.wikipedia.org/wiki/Sanchi",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", caption: "Great Stupa Hemispherical Dome & South Torana Gateway" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Sanchi Stupa Circumambulatory Path",
      hotspots: [
        { x: 50, y: 40, title: "Torana Gateway Reliefs", desc: "Ivory-carver precision stone bas-reliefs illustrating the life of Buddha without human form." },
        { x: 20, y: 65, title: "Hemispherical Anda", desc: "Massive solid dome symbolizing the cosmic vault of heaven enclosing holy relics." }
      ]
    },
    tags: ["UNESCO", "Ashoka", "Buddhism", "Torana", "Ancient Architecture"]
  },

  // ================= CHHATTISGARH =================
  {
    id: "bhoramdeo-temple",
    name: "Bhoramdeo Temple (Khajuraho of Chhattisgarh)",
    stateId: "Chhattisgarh",
    stateName: "Chhattisgarh",
    district: "Kabirdham (Kawardha)",
    category: "Ancient Nagar Temple Sanctuary",
    isUnesco: false,
    rating: 4.8,
    builtIn: "11th Century CE (King Gopaldev of the Nagavanshi Dynasty)",
    architecturalStyle: "Nagara Style Sandstone Temple nestled in Maikal Hills",
    description: "Nestled in the picturesque Maikal mountain range amidst lush Sal forests, Bhoramdeo Temple is dedicated to Lord Shiva. Built on a 5-foot platform with ochre-colored sandstone, its exterior walls are decorated with intricate stone friezes depicting the Dashavatara, dancing Apsaras, royal processions, and erotic sculptures reminiscent of Khajuraho and Konark.",
    culturalSignificance: "Named after Bhoramdeo, a deity of the indigenous Gond tribal community who merged their worship with the classical Shiva tradition. A bridge between tribal and Vedic heritage.",
    festival: {
      name: "Bhoramdeo Mahotsav & Maha Shivaratri",
      period: "March (Last Week)",
      description: "Grand cultural gathering featuring indigenous tribal dance troupes (Karma, Raut Nacha, Panthi) performing alongside classical artistes."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bhoramdeo+Temple+Kawardha+Chhattisgarh",
    wikiUrl: "https://en.wikipedia.org/wiki/Bhoramdeo_Temple",
    imageUrl: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80", caption: "Nagara Shikhara & Intricate Carved Mandapa" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Bhoramdeo Temple Courtyard & Maikal Hills",
      hotspots: [
        { x: 50, y: 45, title: "Main Sanctum Shikhara", desc: "Multi-tiered sandstone spire adorned with celestial dancers and lion motifs." },
        { x: 20, y: 65, title: "Mandapa Interlocking Pillars", desc: "16 carved stone columns supporting a pyramidal stepped roof." }
      ]
    },
    tags: ["Nagavanshi", "Nagara", "Gond Heritage", "Maikal Hills", "Shiva"]
  },

  // ================= ODISHA =================
  {
    id: "konark-sun-temple",
    name: "Sun Temple of Konark (The Black Pagoda), Puri",
    stateId: "Odisha",
    stateName: "Odisha",
    district: "Puri",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 4.9,
    builtIn: "1250 CE (King Narasimhadeva I of the Eastern Ganga Dynasty)",
    architecturalStyle: "Kalinga Rekha Deula Architecture as a Colossal Solar Chariot",
    description: "Conceived as a cosmic solar chariot driven by seven galloping horses across the heavens, the Konark Sun Temple features 24 colossal stone wheels carved with mathematical precision to function as accurate sundials, telling time down to the minute via shadow angles. Carved of Khondalite and chlorite stone on the shores of the Bay of Bengal.",
    culturalSignificance: "Described by Rabindranath Tagore: 'Here the language of stone surpasses the language of human.' Masterpiece of classical Odissi dance postures carved in the Natya Mandapa.",
    festival: {
      name: "Konark Dance Festival & Chandrabhaga Mela",
      period: "December 1â€“5 (Annual) & Magha Saptami",
      description: "International classical dance festival on an open-air stage against the floodlit backdrop of the monumental sun chariot."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Konark+Sun+Temple+Odisha",
    wikiUrl: "https://en.wikipedia.org/wiki/Konark_Sun_Temple",
    imageUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", caption: "Colossal Sun Chariot Wheel (Sundial) Carvings" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Jagamohana (Assembly Hall) & Natya Mandapa" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Konark Sun Chariot Wheels & Courtyard",
      hotspots: [
        { x: 50, y: 50, title: "Sun Chariot Wheel", desc: "9.9-foot diameter wheel with 8 major spokes and 8 minor spokes acting as a precision sundial." },
        { x: 20, y: 40, title: "Natya Mandapa", desc: "Pillared dance hall carved with musicians playing mridangam, cymbals, and flutes in Odissi poses." }
      ]
    },
    tags: ["UNESCO", "Kalinga", "Sun Temple", "Sundial", "Odissi Dance"]
  },

  // ================= WEST BENGAL =================
  {
    id: "bishnupur-temples",
    name: "Terracotta Temples of Bishnupur, Bankura",
    stateId: "WestBengal",
    stateName: "West Bengal",
    district: "Bankura",
    category: "Ancient Terracotta Temple Enclave",
    isUnesco: false,
    rating: 4.8,
    builtIn: "17thâ€“18th Century CE (Malla Dynasty Kings Raghunath Singha & Bir Hambir)",
    architecturalStyle: "Bengal Chala & Ratna Style Baked Terracotta Brick Architecture",
    description: "Bishnupur was the glorious capital of the Malla Kingdom. Because of the scarcity of stone in the alluvial Bengal delta, master artisans built these temples from burnt baked terracotta bricks covered in exquisite carved panels depicting the Ramayana, Mahabharata, Raas Leela, and contemporary maritime trade.",
    culturalSignificance: "Cradle of the Bishnupur Gharana in Hindustani classical music and home to the GI-tagged Baluchari Silk Sarees that feature woven mythological scenes on their pallus.",
    festival: {
      name: "Bishnupur Mela & Raas Utsav",
      period: "December 23â€“27 & Kartik Purnima",
      description: "Grand cultural fair featuring classical dhrupad music concerts, Baul folk singers, and terracotta craft workshops."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bishnupur+Terracotta+Temples+West+Bengal",
    wikiUrl: "https://en.wikipedia.org/wiki/Bishnupur,_Bankura",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Rasmancha Pyramidal Terracotta Pavilion" },
      { url: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80", caption: "Jor Bangla (Twin Chala) Terracotta Bas-Relief Panels" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Rasmancha Terracotta Gallery, Bishnupur",
      hotspots: [
        { x: 50, y: 40, title: "Pyramidal Rasmancha Tower", desc: "Unique 1600 CE brick pavilion with 108 arched openings used during Raas festival." },
        { x: 80, y: 60, title: "Terracotta Mural Panels", desc: "Baked red clay tiles depicting Krishna Raas Leela and Portuguese merchant galleons." }
      ]
    },
    tags: ["Terracotta", "Malla Dynasty", "Baluchari", "Chala Style", "Bengal Heritage"]
  },

  // ================= BIHAR =================
  {
    id: "mahabodhi-temple",
    name: "Mahabodhi Temple & Sacred Bodhi Tree, Bodh Gaya",
    stateId: "Bihar",
    stateName: "Bihar",
    district: "Gaya",
    category: "UNESCO World Heritage Site",
    isUnesco: true,
    rating: 5.0,
    builtIn: "260 BCE (Emperor Ashoka, rebuilt 5thâ€“6th Century CE Gupta Era)",
    architecturalStyle: "Ancient Brick Temple with 55-Meter Pyramidal Shikhara",
    description: "The Mahabodhi Temple marks the exact sacred spot where Siddhartha Gautama attained supreme enlightenment under the Bodhi Tree (Ficus religiosa) in 531 BCE to become the Buddha. The 55-meter grand pyramidal temple is one of the earliest brick structures surviving in India, housing the golden Buddha in the earth-touching gesture (Bhumisparsha mudra) and the Vajrasana (Diamond Throne) erected by Ashoka.",
    culturalSignificance: "The holiest pilgrimage site in the Buddhist world, visited by Chinese travelers Faxian and Xuanzang. The Bodhi tree is a direct descendant of the original tree via a sapling brought from Sri Lanka.",
    festival: {
      name: "Buddha Purnima & International Tipitaka Chanting",
      period: "Vaisakha (May) & December",
      description: "Monks from Thailand, Sri Lanka, Myanmar, Tibet, Japan, and Vietnam chant ancient Pali suttas in unison under the illuminated Bodhi Tree."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Mahabodhi+Temple+Bodh+Gaya+Bihar",
    wikiUrl: "https://en.wikipedia.org/wiki/Mahabodhi_Temple",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", caption: "55-Meter Pyramidal Brick Temple Spire & Stupas" },
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Sacred Bodhi Tree & Ashokan Diamond Throne (Vajrasana)" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Sacred Bodhi Tree Enclosure, Bodh Gaya",
      hotspots: [
        { x: 50, y: 40, title: "Sacred Bodhi Tree", desc: "Spiritual epicenter of Buddhism under whose canopy Siddhartha Gautama achieved enlightenment." },
        { x: 20, y: 65, title: "Ashokan Vajrasana (Diamond Throne)", desc: "Carved polished sandstone slab placed by Emperor Ashoka in 260 BCE." }
      ]
    },
    tags: ["UNESCO", "Buddhism", "Bodhi Tree", "Enlightenment", "Ashoka"]
  },

  // ================= JHARKHAND =================
  {
    id: "baidyanath-dham",
    name: "Baba Baidyanath Jyotirlinga Temple, Deoghar",
    stateId: "Jharkhand",
    stateName: "Jharkhand",
    district: "Deoghar",
    category: "Sacred Jyotirlinga & Pilgrimage Complex",
    isUnesco: false,
    rating: 4.8,
    builtIn: "1596 CE (Rebuilt by Puran Mal of the Gidhaur Dynasty)",
    architecturalStyle: "Nagara Style Stone Spire with 21 Subsidiary Shrines",
    description: "One of the 12 sacred Jyotirlingas, Baba Baidyanath (Vaidyanatha â€” 'the Divine Healer') is situated in Deoghar ('Abode of the Gods'). The 72-foot stone temple is crowned with a rare Panchashula (five-pronged trident) and is joined by red sacred ribbons to the facing temple of Goddess Parvati.",
    culturalSignificance: "Associated with the legend of Ravana carrying the Shivalinga from Mount Kailash to Lanka. Host to the world's longest unorganized religious trek â€” the 105-kilometer barefoot Kanwar Yatra from Sultanganj to Deoghar.",
    festival: {
      name: "Shravani Mela & Kanwar Yatra",
      period: "Shravan Month (July â€“ August, 30 Days)",
      description: "Over 5 million saffron-clad pilgrims (Kanwariyas) carry holy Ganga water on foot over 105 km to offer to Lord Baidyanath."
    },
    bestTime: "October to March",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Baidyanath+Temple+Deoghar+Jharkhand",
    wikiUrl: "https://en.wikipedia.org/wiki/Baidyanath_Temple",
    imageUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80", caption: "Baidyanath Temple Complex & Sacred Panchashula Trident" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Baidyanath Temple Courtyard",
      hotspots: [
        { x: 50, y: 40, title: "72-Foot Jyotirlinga Spire", desc: "Main sanctum crowned with the rare protective five-pronged brass Panchashula." },
        { x: 75, y: 65, title: "Shiva-Parvati Sacred Ribbon", desc: "Red holy silk thread connecting the spires of Shiva and Parvati temples." }
      ]
    },
    tags: ["Jyotirlinga", "Kanwar Yatra", "Shravani Mela", "Shiva", "Deoghar"]
  },  // ================= ASSAM =================
  {
    id: "kamakhya-temple",
    name: "Maa Kamakhya Devalaya, Nilachal Hill, Guwahati",
    stateId: "Assam",
    stateName: "Assam",
    district: "Kamrup Metropolitan (Guwahati)",
    category: "Ancient Tantric Shakti Peetha",
    isUnesco: false,
    rating: 4.9,
    builtIn: "8thâ€“17th Century CE (Mlechchha Dynasty, rebuilt 1565 CE by King Nara Narayana)",
    architecturalStyle: "Nilachal Style Beehive Dome Architecture with Stone Carvings",
    description: "Perched atop the sacred Nilachal Hill overlooking the Brahmaputra River, Kamakhya is the foremost among the 51 Shakti Peethas. The unique Nilachal style features a cruciform base, a hemispherical beehive-like ribbed dome, and an inner subterranean rock sanctum (Garbagriha) with a natural spring-fed rock fissure embodying the Yoni (divine feminine creative force).",
    culturalSignificance: "Epicenter of ancient Tantricism and the veneration of divine feminine energy. Mentioned in the Kalika Purana and Yogini Tantra.",
    festival: {
      name: "Ambubachi Mela (Festival of Divine Fertility)",
      period: "June (Monsoon Aahar Month, 4 Days)",
      description: "Eastern India's largest religious gathering celebrating the annual menstruation of Mother Earth with red cloth (Raktavastra) blessings."
    },
    bestTime: "October to April",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kamakhya+Temple+Guwahati+Assam",
    wikiUrl: "https://en.wikipedia.org/wiki/Kamakhya_Temple",
    imageUrl: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80", caption: "Beehive Ribbed Shikhara & Nilachal Hill Temples" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Kamakhya Temple Complex & Brahmaputra Vista",
      hotspots: [
        { x: 50, y: 40, title: "Nilachal Style Shikhara", desc: "Bulbous beehive dome with sunken relief panels of Chamunda and Ganesha." },
        { x: 25, y: 65, title: "Brahmaputra River Overlook", desc: "Expansive view of the mighty red river flowing past Guwahati." }
      ]
    },
    tags: ["Shakti Peetha", "Nilachal Architecture", "Ambubachi Mela", "Tantric Heritage", "Assam"]
  },

  // ================= SIKKIM =================
  {
    id: "rumtek-monastery",
    name: "Rumtek Dharma Chakra Centre, Gangtok",
    stateId: "Sikkim",
    stateName: "Sikkim",
    district: "East Sikkim (Gangtok)",
    category: "Tibetan Buddhist Kagyu Seat",
    isUnesco: false,
    rating: 4.8,
    builtIn: "1730s CE, rebuilt 1966 CE by the 16th Gyalwa Karmapa",
    architecturalStyle: "Tibetan Kagyu Monastery Architecture with Golden Stupa",
    description: "Perched on a hill 24 km from Gangtok facing the Himalayan peaks, Rumtek is the seat of the Karma Kagyu lineage in exile. The main shrine hall contains vibrant murals, silk Thangkas, and a 13-foot golden stupa containing the sacred relics of the 16th Karmapa, embellished with turquoise, coral, and amber.",
    culturalSignificance: "Repository of sacred Buddhist artifacts including the historic 15th-century Black Hat (Vajra Mukut) said to be woven from the hair of dakinis.",
    festival: {
      name: "Tibetan New Year (Losar) & Tsechu Mask Dance",
      period: "February â€“ March & May",
      description: "Sacred Cham lama dances reenacting Guru Padmasambhava's eight manifestations with cymbal music and ritual horn fanfares."
    },
    bestTime: "March to May & October to December",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rumtek+Monastery+Sikkim",
    wikiUrl: "https://en.wikipedia.org/wiki/Rumtek_Monastery",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", caption: "Rumtek Main Shrine Hall & Monastic Courtyard" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Rumtek Monastery Main Courtyard",
      hotspots: [
        { x: 50, y: 40, title: "Main Shrine (Lhakhang)", desc: "Four-story monastic university adorned with traditional Tibetan Buddhist frescoes." },
        { x: 75, y: 55, title: "Golden Reliquary Stupa", desc: "Enshrines the bone relics of the 16th Gyalwa Karmapa." }
      ]
    },
    tags: ["Kagyu", "Tibetan Buddhism", "Karmapa", "Himalayas", "Sikkim"]
  },

  // ================= ARUNACHAL PRADESH =================
  {
    id: "tawang-monastery",
    name: "Tawang Gompa (Gaden Namgyal Lhatse)",
    stateId: "ArunachalPradesh",
    stateName: "Arunachal Pradesh",
    district: "Tawang",
    category: "Sacred Himalayan Monastic Citadel",
    isUnesco: false,
    rating: 4.9,
    builtIn: "1680â€“1681 CE (Founded by Merak Lama Lodre Gyatso)",
    architecturalStyle: "Tibetan Gelugpa Fortress Gompa at 10,000 Feet",
    description: "Perched like a fortress at an altitude of 3,048 meters in the Eastern Himalayas, Tawang Monastery is the second-largest Buddhist monastery in the world after the Potala Palace. Its 3-story Dukhang (assembly hall) houses an imposing 28-foot gilded statue of Lord Buddha, a library of rare gold-lettered Kangyur scriptures, and 65 residential quarters for 450 monks.",
    culturalSignificance: "Birthplace of the 6th Dalai Lama (Tsangyang Gyatso). Serves as the spiritual beacon for the indigenous Monpa tribe of Arunachal Pradesh.",
    festival: {
      name: "Torgya Festival & Losar",
      period: "January (28th of 11th Monpa Month)",
      description: "A 3-day monastic festival with energetic Cham mask dances aimed at driving away evil spirits and ushering in peace and prosperity."
    },
    bestTime: "March to October",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Tawang+Monastery+Arunachal+Pradesh",
    wikiUrl: "https://en.wikipedia.org/wiki/Tawang_Monastery",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", caption: "Tawang Fortified Monastery Overlooking Snow-Capped Ridge" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Tawang Monastery Courtyard & Himalayas",
      hotspots: [
        { x: 50, y: 40, title: "28-Foot Gilded Buddha", desc: "Towering seated Buddha statue rising through the second story of the Dukhang." },
        { x: 20, y: 65, title: "Monpa Village Vista", desc: "Terraced mountain valleys of the Monpa tribe extending towards Bhutan." }
      ]
    },
    tags: ["Monastery", "Gelugpa", "Monpa", "Himalayas", "Tawang"]
  },

  // ================= MEGHALAYA =================
  {
    id: "living-root-bridges",
    name: "Double Decker Living Root Bridges, Cherrapunji",
    stateId: "Meghalaya",
    stateName: "Meghalaya",
    district: "East Khasi Hills (Nongriat / Sohra)",
    category: "Indigenous Bio-Engineering Heritage",
    isUnesco: false,
    rating: 4.9,
    builtIn: "Centuries-old living tradition (Indigenous Khasi & Jaintia Tribes)",
    architecturalStyle: "Living Botanical Engineering using Ficus Elastica Aerial Roots",
    description: "Trained across torrential mountain rivers over generations, the Living Root Bridges of Meghalaya are living bio-structures woven from the secondary aerial roots of the Indian Rubber Tree (Ficus elastica). The famed Umshiang Double Decker Bridge in Nongriat stands as a testament to sustainable indigenous architecture, growing stronger over centuries as the living roots thicken.",
    culturalSignificance: "Included in India's UNESCO World Heritage Tentative List. Demonstrates ancient Khasi symbiotic harmony between human survival and rainforest ecology.",
    festival: {
      name: "Nongkrem Dance & Shad Suk Mynsiem",
      period: "November & April",
      description: "Thanksgiving harvest festival with traditional Khasi maidens dancing in gold crowns and silk jainsems to celebrate earth's abundance."
    },
    bestTime: "October to April (Crystal-clear rainforest pools)",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Double+Decker+Living+Root+Bridge+Nongriat+Meghalaya",
    wikiUrl: "https://en.wikipedia.org/wiki/Living_root_bridge",
    imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80", caption: "Umshiang Double Decker Living Root Bridge over Emerald River" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Nongriat Living Root Bridge Rainforest Canopy",
      hotspots: [
        { x: 50, y: 50, title: "Double Decker Span", desc: "Two parallel living root walkways built one over the other across the river gorge." },
        { x: 20, y: 70, title: "Emerald River Pool", desc: "Crystal clear natural spring pool beneath the living botanical bridge." }
      ]
    },
    tags: ["Living Root Bridge", "Bio-Engineering", "Khasi Heritage", "Cherrapunji", "Rainforest"]
  },

  // ================= NAGALAND =================
  {
    id: "kisama-heritage-village",
    name: "Naga Heritage Village & Hornbill Arena, Kisama",
    stateId: "Nagaland",
    stateName: "Nagaland",
    district: "Kohima",
    category: "Living Tribal Heritage & Cultural Arena",
    isUnesco: false,
    rating: 4.8,
    builtIn: "Traditional tribal architecture (Showcasing all 16 major Naga tribes)",
    architecturalStyle: "Indigenous Naga Morung (Youth Dormitory) Timber & Thatch Architecture",
    description: "Situated 12 km from Kohima on the slopes of the Barail Range, Kisama Heritage Village is an open-air cultural sanctuary preserving the distinct architecture, wood-carved Morungs (communal warrior dormitories), and totem poles of all 16 major Naga indigenous tribes (Angami, Ao, Konyak, Sumi, Lotha, Chakhesang, etc.).",
    culturalSignificance: "Permanent venue of the world-famous Hornbill Festival ('Festival of Festivals'), celebrating Naga warrior courage, folk music, log-drum beats, and rich oral folklore.",
    festival: {
      name: "Hornbill Festival (Festival of Festivals)",
      period: "December 1â€“10 (Annual)",
      description: "India's most vibrant tribal festival with all 16 Naga tribes performing traditional war dances, archery contests, and indigenous rock concerts."
    },
    bestTime: "October to April (Peak in December for Hornbill)",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kisama+Heritage+Village+Kohima+Nagaland",
    wikiUrl: "https://en.wikipedia.org/wiki/Hornbill_Festival",
    imageUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", caption: "Naga Morung Wooden Totem Facades and Hornbill Arena" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Kisama Hornbill Festival Main Arena",
      hotspots: [
        { x: 50, y: 40, title: "Central Amphitheatre", desc: "Main stage where thousands gather for warrior chants, indigenous games, and folk dances." },
        { x: 80, y: 60, title: "Konyak Tribe Morung", desc: "Traditional timber hall with carved hornbill birds and ceremonial log drums." }
      ]
    },
    tags: ["Hornbill Festival", "Naga Tribes", "Morung Architecture", "Kohima", "Tribal Lore"]
  },

  // ================= MANIPUR =================
  {
    id: "kangla-fort",
    name: "Kangla Palace & Citadel, Imphal",
    stateId: "Manipur",
    stateName: "Manipur",
    district: "Imphal West",
    category: "Ancient Royal Citadel & Sanamahi Seat",
    isUnesco: false,
    rating: 4.8,
    builtIn: "33 CE origins, fortified 1604 CE (Meitei Kings Nongda Lairen Pakhangba & Khagemba)",
    architecturalStyle: "Meitei Royal Architecture with Moat & Dragon Kangla-Sha Monoliths",
    description: "Located on the banks of the Imphal River, Kangla ('Dry Land') was the ancient imperial capital of Manipur for nearly two millennia. The complex houses sacred Sanamahi shrines, the Govindaji Temple, royal coronation sites, and the colossal stone statues of the mythical dragon lions (Kangla-Sha) that symbolize royal authority and protection.",
    culturalSignificance: "Spiritual and political nerve center of Meitei civilization and cradle of classical Manipuri Raas Leela dance and the ancient martial art of Thang-Ta.",
    festival: {
      name: "Sajibu Cheiraoba & Yaoshang Festival",
      period: "March â€“ April",
      description: "Traditional Meitei New Year with hill climbing offerings and 5-day Yaoshang celebrations featuring the Thabal Chongba moonlight folk dance."
    },
    bestTime: "October to April",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kangla+Fort+Imphal+Manipur",
    wikiUrl: "https://en.wikipedia.org/wiki/Kangla_Fort",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", caption: "Kangla-Sha Monolithic Dragon Lions & Royal Gateway" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Kangla Fort Inner Citadel",
      hotspots: [
        { x: 50, y: 45, title: "Kangla-Sha Dragon Guardians", desc: "Mythical half-lion half-dragon beasts guarding the royal coronation pavilion." },
        { x: 20, y: 65, title: "Sacred Nungjeng Pukhri Pond", desc: "Holy water tank where royal coronation ablution rituals were performed." }
      ]
    },
    tags: ["Meitei", "Kangla", "Dragon Lion", "Thang-Ta", "Imphal"]
  },

  // ================= MIZORAM =================
  {
    id: "reiek-heritage-village",
    name: "Reiek Folk Heritage & Cultural Village, Mamit",
    stateId: "Mizoram",
    stateName: "Mizoram",
    district: "Mamit",
    category: "Living Folk Heritage & Eco-Sanctuary",
    isUnesco: false,
    rating: 4.8,
    builtIn: "Traditional Mizo construction preserved on Reiek Mountain (1,548m)",
    architecturalStyle: "Indigenous Mizo Thatch, Bamboo & Timber Chieftain Architecture",
    description: "Set against the dramatic backdrop of the 1,548-meter high Reiek Mountain ridge with panoramic views of neighboring Bangladesh plains, this model heritage village preserves the traditional lifestyle of 19th-century Mizo clans. Features authentic houses of the Mizo Chief (Lal In), the village bachelor dormitory (Zawlbuk), and traditional blacksmith quarters.",
    culturalSignificance: "Living classroom of Mizo customary laws (Tlawmngaihna â€” selflessness), traditional bamboo dance (Cheraw), and weaving of colorful Puan shawls.",
    festival: {
      name: "Anthill Festival & Chapchar Kut",
      period: "March & September",
      description: "Mizoram's grandest festival celebrating spring with the rhythmic Cheraw bamboo dance and traditional community feasts."
    },
    bestTime: "October to April",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Reiek+Heritage+Village+Mizoram",
    wikiUrl: "https://en.wikipedia.org/wiki/Reiek",
    imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80", caption: "Traditional Mizo Chief Huts against Reiek Mountain Cliff" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Reiek Mountain Peak Vista",
      hotspots: [
        { x: 50, y: 40, title: "Lal In (Chief's House)", desc: "Spacious wooden house with trophy animal skulls demonstrating tribal valor." },
        { x: 80, y: 60, title: "Reiek Cliff Edge View", desc: "360Â° panorama extending across the rolling green hills of Mizoram." }
      ]
    },
    tags: ["Mizo Heritage", "Cheraw Dance", "Reiek Peak", "Bamboo Architecture", "Chapchar Kut"]
  },

  // ================= TRIPURA =================
  {
    id: "unakoti-rock-carvings",
    name: "Unakoti Monolithic Rock-Cut Bas-Reliefs, Kailashahar",
    stateId: "Tripura",
    stateName: "Tripura",
    district: "Unakoti (Kailashahar)",
    category: "Ancient Rock-Cut Shaivite Sanctuary",
    isUnesco: false,
    rating: 4.8,
    builtIn: "7thâ€“9th Century CE (Pala Era & Manikya Precursors)",
    architecturalStyle: "Monolithic Rock-Cut Bas-Reliefs carved directly on Jungle Cliffs",
    description: "Hidden in the dense subtropical forests of Tripura, Unakoti ('One Less than a Crore' / 9,999,999) is an ancient open-air Shaivite pilgrimage site. Gigantic rock carvings cover the hillside, dominated by the 30-foot central relief of Lord Shiva (Unakotiswara Kal Bhairava) with an embroidered 10-foot headdress, flanked by Goddess Ganga and Goddess Durga on a lion.",
    culturalSignificance: "Included in India's UNESCO Tentative List. Associated with the legend of Shiva resting here with one crore gods on his way to Varanasi.",
    festival: {
      name: "Ashokastami Mela (Unakoti Fair)",
      period: "April (Ashoka Ashtami)",
      description: "Thousands of tribal and regional devotees take holy dips in the sacred Kund spring and offer prayers to the colossal rock-cut deities."
    },
    bestTime: "October to April",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Unakoti+Tripura",
    wikiUrl: "https://en.wikipedia.org/wiki/Unakoti",
    imageUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", caption: "30-Foot Colossal Rock-Cut Head of Lord Shiva (Unakotiswara)" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Unakoti Rock Carvings Waterfall Gorge",
      hotspots: [
        { x: 50, y: 40, title: "Unakotiswara Shiva Head", desc: "30-foot relief with ornate beaded earrings and third eye carved into natural bedrock." },
        { x: 20, y: 65, title: "Sacred Sita Kund Waterfall", desc: "Natural mountain stream flowing over the carved rock faces." }
      ]
    },
    tags: ["Unakoti", "Rock-Cut", "Shiva", "Shaivite", "Tripura Heritage"]
  },

  // ================= ANDAMAN & NICOBAR ISLANDS =================
  {
    id: "cellular-jail",
    name: "Cellular Jail (Kala Pani) National Memorial, Port Blair",
    stateId: "AndamanAndNicobar",
    stateName: "Andaman and Nicobar Islands",
    district: "South Andaman (Port Blair)",
    category: "National Memorial & Freedom Heritage",
    isUnesco: false,
    rating: 4.9,
    builtIn: "1896â€“1906 CE (British Colonial Administration)",
    architecturalStyle: "Panopticon Radial Brick Prison Architecture with 7 Wings",
    description: "Constructed by the British using 20,000 tonnes of red bricks shipped from Burma, Cellular Jail was designed on Jeremy Bentham's Panopticon concept with seven wings radiating from a central watchtower. Known as 'Kala Pani' (Black Waters), thousands of Indian freedom fighters (including Veer Savarkar, Batukeshwar Dutt, and Yogendra Shukla) were imprisoned in solitary confinement here.",
    culturalSignificance: "National Pilgrimage Shrine honoring the martyrs of the Indian Freedom Movement. Today preserved with an eternal flame (Swatantrya Jyot) and museum galleries.",
    festival: {
      name: "Island Tourism Festival & Martyrdom Commemoration",
      period: "January & March",
      description: "Moving Sound and Light show narrated by Om Puri, patriotic cultural tributes, and classical island tribal dance performances."
    },
    bestTime: "October to May",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Cellular+Jail+Port+Blair",
    wikiUrl: "https://en.wikipedia.org/wiki/Cellular_Jail",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    images: [
      { url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", caption: "Red Brick Radial Wings & Central Watchtower of Cellular Jail" }
    ],
    virtualTour: {
      panoramaUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=90",
      title: "360Â° Panorama - Cellular Jail Central Watchtower Courtyard",
      hotspots: [
        { x: 50, y: 35, title: "Central Watchtower", desc: "Command hub with two-way signaling providing guards 360Â° observation of all cell corridors." },
        { x: 80, y: 65, title: "Veer Savarkar Solitary Cell", desc: "Top-floor corner cell overlooking the gallows where Veer Savarkar was imprisoned." }
      ]
    },
    tags: ["Freedom Movement", "National Memorial", "Kala Pani", "Port Blair", "History"]
  }
];

// Module export for Node.js / Web
if (typeof module !== "undefined" && module.exports) {
  module.exports = { STATES_DATA, HERITAGE_SITES };
}
