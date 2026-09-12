// 81 il: en bilinen simge/landmark + arka plan gradyanı
const CITY_DATA = [
  { name: 'Adana', landmark: 'Aladağ Küp Şelaleleri', icon: '🌉', c1: '#0f9b8e', c2: '#023436', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Adana_%C5%9Eehzade_Kademo%C4%9Flu_Camii_in_2008_01_3073.jpg/1920px-Adana_%C5%9Eehzade_Kademo%C4%9Flu_Camii_in_2008_01_3073.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Dosseman' },
  { name: 'Adıyaman', landmark: 'Nemrut Dağı', icon: '🗿', c1: '#caa356', c2: '#5c3d17', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Kommagene_Kingdom_Mount_Nemrut_Ruins.jpg/1920px-Kommagene_Kingdom_Mount_Nemrut_Ruins.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Theugursevinc' },
  { name: 'Afyonkarahisar', landmark: 'İscehisar Peri Bacaları', icon: '🏯', c1: '#8a94a6', c2: '#333a47', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Afyonkarahisar_Castle%2C_2016.jpg/1920px-Afyonkarahisar_Castle%2C_2016.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Bluetime93' },
  { name: 'Ağrı', landmark: 'Ağrı Dağı', icon: '🏔️', c1: '#7fa8c9', c2: '#243b52', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Khor_Virap_Monastery_and_Mount_Ararat%2C_Armenia.jpg/1920px-Khor_Virap_Monastery_and_Mount_Ararat%2C_Armenia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Andrew Behesnilian (MrAndrew47)' },
  { name: 'Amasya', landmark: 'Kral Kaya Mezarları', icon: '🏞️', c1: '#d99a54', c2: '#5a3c1d', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Amasya%2C_Amasya_Merkez-Amasya_Province%2C_Turkey_-_panoramio.jpg/1920px-Amasya%2C_Amasya_Merkez-Amasya_Province%2C_Turkey_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Alaa Alkabi' },
  { name: 'Ankara', landmark: 'Anıtkabir', icon: '🏛️', c1: '#c9a86a', c2: '#4a3a1c', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Ankara_asv2021-10_img17_Atakule.jpg/1920px-Ankara_asv2021-10_img17_Atakule.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'A.Savin' },
  { name: 'Antalya', landmark: 'Aspendos Tiyatrosu', icon: '🌊', c1: '#22b8cf', c2: '#053e4d', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Antalya_Museum_Diorama_of_Aspendos_-_theatre_6471.jpg/1920px-Antalya_Museum_Diorama_of_Aspendos_-_theatre_6471.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Dosseman' },
  { name: 'Artvin', landmark: 'Karagöl', icon: '🌲', c1: '#2f9e44', c2: '#0d3b1e', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Artvin%2CBor%C3%A7ka_Karag%C3%B6l.jpg/1920px-Artvin%2CBor%C3%A7ka_Karag%C3%B6l.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Der.akb' },
  { name: 'Aydın', landmark: 'Afrodisias Antik Kenti', icon: '🏖️', c1: '#3bc9db', c2: '#0a4a52', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/APHRODISIAS.jpg/1920px-APHRODISIAS.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Feridun F. Alkaya' },
  { name: 'Balıkesir', landmark: 'Ayvalık Kozak Yaylası', icon: '🏝️', c1: '#20c997', c2: '#0b4a3a', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_and_a_yacht_in_Turkey_ayval%C4%B1k%28naked_island_coast%29_-_panoramio.jpg/1920px-Flag_and_a_yacht_in_Turkey_ayval%C4%B1k%28naked_island_coast%29_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'collage bird\'s eye v…' },
  { name: 'Bilecik', landmark: 'Ertuğrul Gazi Türbesi', icon: '🕌', c1: '#b98d4a', c2: '#4a3416', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/11230_Bilecik_Merkez-Bilecik%2C_Turkey_-_panoramio.jpg/1920px-11230_Bilecik_Merkez-Bilecik%2C_Turkey_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Mehmet Cankaya' },
  { name: 'Bingöl', landmark: 'Yüzen Adalar', icon: '🏞️', c1: '#4dabf7', c2: '#173b5c', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bingol%2C_Solhan%2C_The_Floating_Islands.jpg/1920px-Bingol%2C_Solhan%2C_The_Floating_Islands.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'AYDIN ÇAY' },
  { name: 'Bitlis', landmark: 'Nemrut Krater Gölü', icon: '🌋', c1: '#9775fa', c2: '#3a2166', photo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Bitlis-_Nemrut_G%C3%B6l%C3%BC.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', credit: 'Nursena Doğan' },
  { name: 'Bolu', landmark: 'Abant Gölü', icon: '🏞️', c1: '#51cf66', c2: '#175028', photo: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Abant%2C_Bolu_road.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', credit: 'Rehber' },
  { name: 'Burdur', landmark: 'Salda Gölü', icon: '🏖️', c1: '#66d9e8', c2: '#0c4a55', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Lake_Salda_.jpg/1920px-Lake_Salda_.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Iamozlem' },
  { name: 'Bursa', landmark: 'İznik Gölü', icon: '⛷️', c1: '#a5b4c3', c2: '#374357', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Bursa_%C4%B0znik_Lake.jpg/1920px-Bursa_%C4%B0znik_Lake.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Omerograf' },
  { name: 'Çanakkale', landmark: 'Troya Antik Kenti', icon: '🐴', c1: '#c99a52', c2: '#4d3417', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/%C3%87anakkale_trojan_horse.jpg/1920px-%C3%87anakkale_trojan_horse.jpg', credit: 'Wikimedia Commons' },
  { name: 'Çankırı', landmark: 'Ilgaz Dağları', icon: '🧂', c1: '#e0c68f', c2: '#5c4a25', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ilgaz_Mountain_National_Park%2C_%C3%87ank%C4%B1r%C4%B1-Kastamonu%2C_Turkey_-_Murat_%C3%96zsoy_11.jpg/1920px-Ilgaz_Mountain_National_Park%2C_%C3%87ank%C4%B1r%C4%B1-Kastamonu%2C_Turkey_-_Murat_%C3%96zsoy_11.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Murat Özsoy 1958' },
  { name: 'Çorum', landmark: 'Hattuşaş', icon: '🏛️', c1: '#bfa06a', c2: '#463a1f', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Hattusa_Ruins_city_wall.JPG/1920px-Hattusa_Ruins_city_wall.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Rita1234' },
  { name: 'Denizli', landmark: 'Pamukkale', icon: '⛰️', c1: '#cfd8e3', c2: '#4c5a6e', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/TR_Pamukkale_White_Terraces_asv2020-02_img16.jpg/1920px-TR_Pamukkale_White_Terraces_asv2020-02_img16.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'A.Savin' },
  { name: 'Diyarbakır', landmark: 'Diyarbakır Kalesi', icon: '🧱', c1: '#b5793f', c2: '#452c14', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Diyarbakir%2C_Southeastern_Anatolia_Turkey_-_Planet_Labs_satellite_image.jpg/1920px-Diyarbakir%2C_Southeastern_Anatolia_Turkey_-_Planet_Labs_satellite_image.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Planet Labs inc.' },
  { name: 'Edirne', landmark: 'Selimiye Camii', icon: '🕌', c1: '#d7b16a', c2: '#523d1a', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/20120604_Edirne_view_from_the_top_of_the_Minaret_of_Selimiye_Mosque_Edirne_Turkey_Panoramic.jpg/1920px-20120604_Edirne_view_from_the_top_of_the_Minaret_of_Selimiye_Mosque_Edirne_Turkey_Panoramic.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'User:Ggia' },
  { name: 'Elazığ', landmark: 'Harput Kalesi', icon: '🏞️', c1: '#4dabf7', c2: '#153a5c', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Elaz%C4%B1g-Harput_kalesi-acizane-crop.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', credit: 'Elazıg-Harput_kalesi-acizane.jpg: acizane nacizane from Balıkesir, Türkiye derivative work: Stegop (talk)' },
  { name: 'Erzincan', landmark: 'Munzur Vadisi', icon: '🌊', c1: '#22b8cf', c2: '#0a3d47', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/A_mountain_located_in_the_Munzur_Valley_National_Park.jpg/1920px-A_mountain_located_in_the_Munzur_Valley_National_Park.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Eren Mengeş' },
  { name: 'Erzurum', landmark: 'Palandöken', icon: '⛷️', c1: '#9fb3c8', c2: '#2f3f52', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Erzurum%2C_Turkey_-_panoramio_%2822%29.jpg/1920px-Erzurum%2C_Turkey_-_panoramio_%2822%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Ben Bender' },
  { name: 'Eskişehir', landmark: 'Frig Vadisi', icon: '🚤', c1: '#38d9a9', c2: '#0b4a3d', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Eski%C5%9Fehir_saygi_aniti.jpg/1920px-Eski%C5%9Fehir_saygi_aniti.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Honacan' },
  { name: 'Gaziantep', landmark: 'Zeugma Mozaik Müzesi', icon: '🧩', c1: '#caa456', c2: '#503c19', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Antep_1250575b.jpg/1920px-Antep_1250575b.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Antep_1250575.jpg: Nevit Dilmen (talk) derivative work: Durova (talk)' },
  { name: 'Giresun', landmark: 'Giresun Adası', icon: '🌰', c1: '#66bb6a', c2: '#1d4a24', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Giresun_Adasi_%28Amazon_Island%29_Giresun_Turkey.jpg/1920px-Giresun_Adasi_%28Amazon_Island%29_Giresun_Turkey.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Dr. Zeynel Cebeci' },
  { name: 'Gümüşhane', landmark: 'Karaca Mağarası', icon: '🕳️', c1: '#8892a6', c2: '#333a4a', photo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Karaca_Ma%C4%9Faras%C4%B1_%2809%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', credit: 'En Merker' },
  { name: 'Hakkari', landmark: 'Cilo Buzulları', icon: '🏔️', c1: '#7d97b3', c2: '#233a52', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/View_of_the_valley_from_Cilo_glacier%2C_July_2023.jpg/1920px-View_of_the_valley_from_Cilo_glacier%2C_July_2023.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Arcmem' },
  { name: 'Hatay', landmark: 'Harbiye Şelaleleri', icon: '🕌', c1: '#c9a25a', c2: '#4d391b', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Harbiye_waterfalls_-_panoramio.jpg/1920px-Harbiye_waterfalls_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Ahmet KAYNARPUNAR' },
  { name: 'Isparta', landmark: 'Eğirdir Gölü', icon: '🌹', c1: '#f783ac', c2: '#5c1f38', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Isparta%2C_Isparta_Merkez-Isparta_Province%2C_Turkey_-_panoramio.jpg/1920px-Isparta%2C_Isparta_Merkez-Isparta_Province%2C_Turkey_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Ramazan B.' },
  { name: 'Mersin', landmark: 'Mamure Kalesi', icon: '🏰', c1: '#22b8cf', c2: '#063d4a', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Anamur_Castle_Outer_castle_8624b_Panorama.jpg/1920px-Anamur_Castle_Outer_castle_8624b_Panorama.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Dosseman' },
  { name: 'İstanbul', landmark: 'Ayasofya', icon: '🕌', c1: '#4facfe', c2: '#173b5c', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Gaspare_Fossati_-_Louis_Haghe_-_Vue_g%C3%A9n%C3%A9rale_de_la_grande_nef%2C_en_regardant_l%27occident_%28Hagia_Sophia_-_Ayasofya_Mosque_nave%29.jpg/1920px-Gaspare_Fossati_-_Louis_Haghe_-_Vue_g%C3%A9n%C3%A9rale_de_la_grande_nef%2C_en_regardant_l%27occident_%28Hagia_Sophia_-_Ayasofya_Mosque_nave%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Gaspare Fossati (artist, 1809-1883) Louis Haghe (lithographer, 1806-1885) Adam Cuerden (restoration)' },
  { name: 'İzmir', landmark: 'Efes Antik Kenti', icon: '🕰️', c1: '#3bc9db', c2: '#0a4652', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Ephesus_Ancient_City_2.jpg/1920px-Ephesus_Ancient_City_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Erentkdmr' },
  { name: 'Kars', landmark: 'Ani Harabeleri', icon: '🏯', c1: '#9aa7b8', c2: '#333c4a', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Ani_ruins_and_rainbow.jpg/1920px-Ani_ruins_and_rainbow.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Panegyrics of Granovetter' },
  { name: 'Kastamonu', landmark: 'Ilgaz Dağı Millî Parkı', icon: '🏰', c1: '#bb9a5e', c2: '#453419', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ilgaz_Mountain_National_Park%2C_%C3%87ank%C4%B1r%C4%B1-Kastamonu%2C_Turkey_-_Murat_%C3%96zsoy_18.jpg/1920px-Ilgaz_Mountain_National_Park%2C_%C3%87ank%C4%B1r%C4%B1-Kastamonu%2C_Turkey_-_Murat_%C3%96zsoy_18.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Murat Özsoy 1958' },
  { name: 'Kayseri', landmark: 'Erciyes Dağı', icon: '⛷️', c1: '#9fb3c8', c2: '#2f3f52', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Kayseri_B%C3%BCr%C3%BCng%C3%BCz_Camii_ve_Erciyes_Da%C4%9F%C4%B1.jpg/1920px-Kayseri_B%C3%BCr%C3%BCng%C3%BCz_Camii_ve_Erciyes_Da%C4%9F%C4%B1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Abdurrahman Çam' },
  { name: 'Kırklareli', landmark: 'Dupnisa Mağarası', icon: '🌲', c1: '#37b24d', c2: '#0f4020', photo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Dupnisa_Cave%2C_Kirklareli_-_Ahmet_Baris_ISITAN.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', credit: 'Ahmet Baris ISITAN' },
  { name: 'Kırşehir', landmark: 'Cacabey Medresesi', icon: '🕌', c1: '#c2a05c', c2: '#4a381a', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Cacabey.jpg/1920px-Cacabey.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Omur Tanyel' },
  { name: 'Kocaeli', landmark: 'Kartepe', icon: '🏞️', c1: '#4dabf7', c2: '#173b5c', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/1_Kocaeli_Kartepe_Off-Road.jpg/1920px-1_Kocaeli_Kartepe_Off-Road.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Kocaeli Kameraman Şadi Akdoğan' },
  { name: 'Konya', landmark: 'Çatalhöyük', icon: '🌀', c1: '#caa759', c2: '#4d3a1a', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Mevlana_Cultural_Center%2C_Konya.jpg/1920px-Mevlana_Cultural_Center%2C_Konya.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Bernard Gagnon' },
  { name: 'Kütahya', landmark: 'Kütahya Kalesi', icon: '🏺', c1: '#3bc9db', c2: '#0d4650', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kutahya_Castle_Hill_8800_Panorama.jpg/1920px-Kutahya_Castle_Hill_8800_Panorama.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Dosseman' },
  { name: 'Malatya', landmark: 'Aslantepe', icon: '🍑', c1: '#ffa94d', c2: '#5c3312', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Malatya_museum_Arslantepe_wall_paintings_2023.jpg/1920px-Malatya_museum_Arslantepe_wall_paintings_2023.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Dosseman' },
  { name: 'Manisa', landmark: 'Sardes Antik Kenti', icon: '🏛️', c1: '#c2a05c', c2: '#4a381a', photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/RuinsofSardis.jpg', credit: 'Wikimedia Commons' },
  { name: 'Kahramanmaraş', landmark: 'Germanicia Antik Kenti', icon: '🍦', c1: '#f783ac', c2: '#5a1f38', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Monnaie_-_Bronze%2C_Germanicia_Caesareia%2C_Commag%C3%A8ne%2C_Commode_-_btv1b84969720_%282_of_2%29.jpg/1920px-Monnaie_-_Bronze%2C_Germanicia_Caesareia%2C_Commag%C3%A8ne%2C_Commode_-_btv1b84969720_%282_of_2%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: ' Commode (empereur romain ; 0161-0192). Autorité émettrice de monnaie Germanicia Caesareia (Commagène ; atelier monétaire). Atelier monétaire' },
  { name: 'Mardin', landmark: 'Deyrulzafaran Manastırı', icon: '🏘️', c1: '#caa15b', c2: '#4d3a1c', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mor_Hananyo_Monastery_12.jpg/1920px-Mor_Hananyo_Monastery_12.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Izabela Miszczak' },
  { name: 'Muğla', landmark: 'Ölüdeniz', icon: '🏖️', c1: '#22b8cf', c2: '#063d4a', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Paragliding_over_the_Blue_Lagoon_in_%C3%96l%C3%BCdeniz%2C_Turkey_%2849070937152%29.jpg/1920px-Paragliding_over_the_Blue_Lagoon_in_%C3%96l%C3%BCdeniz%2C_Turkey_%2849070937152%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'dronepicr' },
  { name: 'Muş', landmark: 'Hamurpet Gölü', icon: '🌾', c1: '#e0c68f', c2: '#5c4a25', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/PANO_20200614_051012.jpg/1920px-PANO_20200614_051012.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Serkan sezgin' },
  { name: 'Nevşehir', landmark: 'Göreme Açık Hava Müzesi', icon: '🎈', c1: '#ff8787', c2: '#5c1f24', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/G%C3%B6reme%2C_Capadocia%2C_Turqu%C3%ADa%2C_2024-10-01%2C_DD_28.jpg/1920px-G%C3%B6reme%2C_Capadocia%2C_Turqu%C3%ADa%2C_2024-10-01%2C_DD_28.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Diego Delso' },
  { name: 'Niğde', landmark: 'Aladağlar Millî Parkı', icon: '🏔️', c1: '#7fa8c9', c2: '#243b52', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Aladaglar_National_Park.jpg/1920px-Aladaglar_National_Park.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Egalmak' },
  { name: 'Ordu', landmark: 'Boztepe', icon: '🌰', c1: '#51cf66', c2: '#175028', photo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Boztepe%2C_Ordu%2C_Turkey.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', credit: 'Eyimuratcan' },
  { name: 'Rize', landmark: 'Ayder Yaylası', icon: '🍵', c1: '#37b24d', c2: '#0f4020', photo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Ayder-2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', credit: 'The original uploader was chansey at Turkish Wikipedia.' },
  { name: 'Sakarya', landmark: 'Sapanca Gölü', icon: '🌲', c1: '#2f9e44', c2: '#0d3b1e', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Restaurant_on_Sapanca_Lake.jpg/1920px-Restaurant_on_Sapanca_Lake.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Antoloji' },
  { name: 'Samsun', landmark: 'Kızılırmak Deltası', icon: '⚓', c1: '#22b8cf', c2: '#053e4d', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Embankment_in_Samsun%2C_Turkey.jpg/1920px-Embankment_in_Samsun%2C_Turkey.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Vsatinet' },
  { name: 'Siirt', landmark: 'Botan Çayı', icon: '🧵', c1: '#bb9a5e', c2: '#453419', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/A_view_to_Botan_Valley_from_Tillo_which_is_a_town_of_Siirt_Province.jpg/1920px-A_view_to_Botan_Valley_from_Tillo_which_is_a_town_of_Siirt_Province.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Hayırhah' },
  { name: 'Sinop', landmark: 'Erfelek Şelaleleri', icon: '🏰', c1: '#3bc9db', c2: '#0a4652', photo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Landmark_1536154459_85.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', credit: 'BayanPilot' },
  { name: 'Sivas', landmark: 'Divriği Ulu Cami', icon: '🕌', c1: '#c9a25a', c2: '#4d391b', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Esenyurt-Villakent%2C_Sivas_Merkez-Sivas%2C_Turkey_-_panoramio.jpg/1920px-Esenyurt-Villakent%2C_Sivas_Merkez-Sivas%2C_Turkey_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'nevzat demir' },
  { name: 'Tekirdağ', landmark: 'Kastro Gölü', icon: '🍇', c1: '#9775fa', c2: '#3a2166', photo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Dalyan_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', credit: 'Alper eral' },
  { name: 'Tokat', landmark: 'Ballıca Mağarası', icon: '🕳️', c1: '#8892a6', c2: '#333a4a', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tokat_Karl%C4%B1_G%C3%B6r%C3%BCn%C3%BCm%C3%BC_02.jpg/1920px-Tokat_Karl%C4%B1_G%C3%B6r%C3%BCn%C3%BCm%C3%BC_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Aliaslan19' },
  { name: 'Trabzon', landmark: 'Sümela Manastırı', icon: '⛰️', c1: '#40916c', c2: '#123a2b', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Sumela_From_Across_Valley.JPG/1920px-Sumela_From_Across_Valley.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Bjørn Christian Tørrissen' },
  { name: 'Tunceli', landmark: 'Munzur Gözeleri', icon: '🏞️', c1: '#2f9e44', c2: '#0d3b1e', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Munzur_Valley%2C_Dersim%2C_Tunceli.jpg/1920px-Munzur_Valley%2C_Dersim%2C_Tunceli.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Ayseserdar15' },
  { name: 'Şanlıurfa', landmark: 'Göbeklitepe', icon: '🐟', c1: '#4dabf7', c2: '#173b5c', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/G%C3%B6bekli_Tepe%2C_Urfa.jpg/1920px-G%C3%B6bekli_Tepe%2C_Urfa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Teomancimit' },
  { name: 'Uşak', landmark: 'Ulubey Kanyonu', icon: '🧵', c1: '#bb9a5e', c2: '#453419', photo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ulubey_Canyon_Usak_Province_Turkey.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', credit: 'Mr. Arif Solak' },
  { name: 'Van', landmark: 'Akdamar Adası', icon: '🐱', c1: '#4dabf7', c2: '#173b5c', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/00_0390_Lake_Van%2C_church_on_Akdamar_Island.jpg/1920px-00_0390_Lake_Van%2C_church_on_Akdamar_Island.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'W. Bulach' },
  { name: 'Yozgat', landmark: 'Kerkenes', icon: '🌲', c1: '#2f9e44', c2: '#0d3b1e', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Yozgat_%C3%87aml%C4%B1k_Milli_Park%C4%B1.jpg/1920px-Yozgat_%C3%87aml%C4%B1k_Milli_Park%C4%B1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'D.Songül' },
  { name: 'Zonguldak', landmark: 'Sofular Mağarası', icon: '⛏️', c1: '#8892a6', c2: '#333a4a', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Black_Sea%2C_Turkey%2C_%C4%B0%C4%9Fneada%2C_Ere%C4%9Fli%2C_K%C4%B1y%C4%B1k%C3%B6y_and_Amasra_1891_%28agsmap027590%29.jpg/1920px-Black_Sea%2C_Turkey%2C_%C4%B0%C4%9Fneada%2C_Ere%C4%9Fli%2C_K%C4%B1y%C4%B1k%C3%B6y_and_Amasra_1891_%28agsmap027590%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Egor Manganari' },
  { name: 'Aksaray', landmark: 'Ihlara Vadisi', icon: '🏞️', c1: '#ff8787', c2: '#5c1f24', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Fresco_Agacalti_%28Ihlara_Valley%29_Church.JPG/1920px-Fresco_Agacalti_%28Ihlara_Valley%29_Church.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'smus' },
  { name: 'Bayburt', landmark: 'Çoruh Nehri', icon: '⛷️', c1: '#9fb3c8', c2: '#2f3f52', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Bayburt%2C_69000_Bayburt_Merkez-Bayburt%2C_Turkey_-_panoramio.jpg/1920px-Bayburt%2C_69000_Bayburt_Merkez-Bayburt%2C_Turkey_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Ben Bender' },
  { name: 'Karaman', landmark: 'Karadağ', icon: '🏰', c1: '#bb9a5e', c2: '#453419', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Karaman_castle_4868.jpg/1920px-Karaman_castle_4868.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Dosseman' },
  { name: 'Kırıkkale', landmark: 'Büklükale', icon: '🏞️', c1: '#e0c68f', c2: '#5c4a25', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/K%C4%B1z%C4%B1l%C4%B1rmak-Bah%C5%9F%C4%B1l%C4%B1_-_panoramio.jpg/1920px-K%C4%B1z%C4%B1l%C4%B1rmak-Bah%C5%9F%C4%B1l%C4%B1_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'hüseyin yeşil' },
  { name: 'Batman', landmark: 'Hasankeyf', icon: '🏯', c1: '#c2a05c', c2: '#4a381a', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Hasankeyf_%2801%29.jpg/1920px-Hasankeyf_%2801%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Zorka Sojka' },
  { name: 'Şırnak', landmark: 'Nuh Peygamber Türbesi', icon: '🏔️', c1: '#7d97b3', c2: '#233a52', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Cudi-dagh-tr-1829.jpg/1920px-Cudi-dagh-tr-1829.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Timo Roller' },
  { name: 'Bartın', landmark: 'Amasra', icon: '🌲', c1: '#2f9e44', c2: '#0d3b1e', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Bart%C4%B1n_24.JPG/1920px-Bart%C4%B1n_24.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Vikiçizer' },
  { name: 'Ardahan', landmark: 'Çıldır Gölü', icon: '❄️', c1: '#66d9e8', c2: '#0c4a55', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Ardahan_-_panoramio_-_G%C3%BCrsoy_Tokg%C3%B6z_%281%29.jpg', credit: 'Gürsoy Tokgöz' },
  { name: 'Iğdır', landmark: 'Meteor Çukuru', icon: '🌷', c1: '#f783ac', c2: '#5a1f38', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mount_Ararat%2C_Ararat_Plain%2C_Armenia-Turkey_border%2C_Armenia.jpg/1920px-Mount_Ararat%2C_Ararat_Plain%2C_Armenia-Turkey_border%2C_Armenia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Vyacheslav Argenberg' },
  { name: 'Yalova', landmark: 'Termal Kaplıcaları', icon: '♨️', c1: '#22b8cf', c2: '#063d4a', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/77300_%C5%9Eenk%C3%B6y-%C3%87%C4%B1narc%C4%B1k-Yalova%2C_Turkey_-_panoramio.jpg/1920px-77300_%C5%9Eenk%C3%B6y-%C3%87%C4%B1narc%C4%B1k-Yalova%2C_Turkey_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Oğuz Han Erol' },
  { name: 'Karabük', landmark: 'Safranbolu Evleri', icon: '🏘️', c1: '#caa15b', c2: '#4d3a1c', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Safranbolu_Evleri_2014-12.jpg/1920px-Safranbolu_Evleri_2014-12.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Hamdigumus' },
  { name: 'Kilis', landmark: 'Ravanda Kalesi', icon: '🫒', c1: '#66bb6a', c2: '#1d4a24', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Kilis_city_center.jpg/1920px-Kilis_city_center.jpg', credit: 'Wikimedia Commons' },
  { name: 'Osmaniye', landmark: 'Toprakkale', icon: '🦁', c1: '#c9a25a', c2: '#4d391b', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Osmaniye%2C_Osmaniye_Merkez-Osmaniye%2C_Turkey_-_panoramio.jpg/1920px-Osmaniye%2C_Osmaniye_Merkez-Osmaniye%2C_Turkey_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'onbkadir' },
  { name: 'Düzce', landmark: 'Efteni Gölü', icon: '🌲', c1: '#37b24d', c2: '#0f4020', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Lake_G%C3%B6lyaka_Efteni%2C_G%C3%B6lyaka%2C_D%C3%BCzce%2C_Turkey_-_Murat_%C3%96zsoy_01.jpg/1920px-Lake_G%C3%B6lyaka_Efteni%2C_G%C3%B6lyaka%2C_D%C3%BCzce%2C_Turkey_-_Murat_%C3%96zsoy_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', credit: 'Murat Özsoy 1958' },
];

const CONDITIONS = [
  { desc: 'Açık', icon: '☀️' },
  { desc: 'Parçalı Bulutlu', icon: '⛅' },
  { desc: 'Bulutlu', icon: '☁️' },
  { desc: 'Hafif Yağmurlu', icon: '🌦️' },
  { desc: 'Yağmurlu', icon: '🌧️' },
  { desc: 'Karlı', icon: '❄️' },
];

const SHORT_DAYS = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];

function hashCode(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h) || 1;
}

function seededRandom(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return function next() {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function buildWeather(cityName) {
  const rand = seededRandom(hashCode(cityName));
  const base = Math.round(6 + rand() * 30);
  const cond = CONDITIONS[Math.floor(rand() * CONDITIONS.length)];
  const max = base + Math.round(rand() * 4) + 1;
  const min = base - Math.round(rand() * 6) - 2;
  const humidity = Math.round(30 + rand() * 55);
  const wind = Math.round(5 + rand() * 25);
  const feels = base + Math.round((rand() - 0.5) * 4);

  const today = new Date();
  const forecast = [];
  for (let i = 1; i <= 5; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const label = i === 1 ? 'Yarın' : SHORT_DAYS[d.getDay()];
    const fCond = CONDITIONS[Math.floor(rand() * CONDITIONS.length)];
    const fBase = base + Math.round((rand() - 0.5) * 8);
    forecast.push({
      day: label,
      icon: fCond.icon,
      max: fBase + Math.round(rand() * 3) + 1,
      min: fBase - Math.round(rand() * 5) - 1,
    });
  }

  return { temp: base, max, min, desc: cond.desc, icon: cond.icon, humidity: `${humidity}%`, wind: `${wind} km/s`, feels, forecast };
}

const cityNameEl = document.getElementById('cityName');
const landmarkEl = document.getElementById('landmark');
const dateNowEl = document.getElementById('dateNow');
const weatherIconEl = document.getElementById('weatherIcon');
const tempEl = document.getElementById('temp');
const descEl = document.getElementById('desc');
const tempMaxEl = document.getElementById('tempMax');
const tempMinEl = document.getElementById('tempMin');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind');
const feelsEl = document.getElementById('feels');
const forecastListEl = document.getElementById('forecastList');
const photoCreditEl = document.getElementById('photoCredit');
const cityListEl = document.getElementById('cityList');
const citySearchEl = document.getElementById('citySearch');
const drawerEl = document.getElementById('drawer');
const overlayEl = document.getElementById('overlay');
const menuBtn = document.getElementById('menuBtn');
const phoneEl = document.querySelector('.phone');

const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

function formatToday() {
  const now = new Date();
  return `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]}`;
}

function hexToRgba(hex, alpha) {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function renderCity(name) {
  const city = CITY_DATA.find((c) => c.name === name);
  if (!city) return;
  const data = buildWeather(city.name);

  cityNameEl.textContent = city.name;
  landmarkEl.textContent = `📍 ${city.landmark}`;
  dateNowEl.textContent = formatToday();
  weatherIconEl.textContent = data.icon;
  tempEl.textContent = `${data.temp}°`;
  descEl.textContent = data.desc;
  tempMaxEl.textContent = `En yüksek: ${data.max}°`;
  tempMinEl.textContent = `En düşük: ${data.min}°`;
  humidityEl.textContent = data.humidity;
  windEl.textContent = data.wind;
  feelsEl.textContent = `${data.feels}°`;

  if (city.photo) {
    const overlay = `linear-gradient(160deg, ${hexToRgba(city.c1, 0.55)}, ${hexToRgba(city.c2, 0.72)} 55%, rgba(16, 19, 28, 0.92) 100%)`;
    phoneEl.style.backgroundImage = `${overlay}, url('${city.photo}')`;
  } else {
    phoneEl.style.backgroundImage = `linear-gradient(160deg, ${city.c1}, ${city.c2} 55%, #10131c 100%)`;
  }
  photoCreditEl.textContent = city.photo ? `📷 ${city.credit || 'Wikimedia Commons'}` : '';

  forecastListEl.innerHTML = '';
  data.forecast.forEach((f) => {
    const row = document.createElement('div');
    row.className = 'forecast-item';
    row.innerHTML = `
      <span class="day">${f.day}</span>
      <span class="ficon">${f.icon}</span>
      <span class="frange"><span class="high">${f.max}°</span><span class="low">${f.min}°</span></span>
    `;
    forecastListEl.appendChild(row);
  });

  document.querySelectorAll('.city-list li').forEach((li) => {
    li.classList.toggle('active', li.dataset.city === name);
  });
}

function renderCityList() {
  cityListEl.innerHTML = '';
  CITY_DATA.forEach((city) => {
    const quick = buildWeather(city.name);
    const li = document.createElement('li');
    li.dataset.city = city.name;
    li.innerHTML = `
      <span class="cl-name"><span class="ic">${city.icon}</span><span class="nm">${city.name}</span></span>
      <span class="cl-temp">${quick.icon} ${quick.temp}°</span>
    `;
    li.addEventListener('click', () => {
      renderCity(city.name);
      closeDrawer();
    });
    cityListEl.appendChild(li);
  });
}

function filterCityList(query) {
  const q = query.trim().toLocaleLowerCase('tr');
  document.querySelectorAll('.city-list li').forEach((li) => {
    const name = li.dataset.city.toLocaleLowerCase('tr');
    li.classList.toggle('hidden', q.length > 0 && !name.includes(q));
  });
}

function openDrawer() {
  drawerEl.classList.add('open');
  overlayEl.classList.add('open');
}

function closeDrawer() {
  drawerEl.classList.remove('open');
  overlayEl.classList.remove('open');
}

menuBtn.addEventListener('click', openDrawer);
overlayEl.addEventListener('click', closeDrawer);
citySearchEl.addEventListener('input', (e) => filterCityList(e.target.value));

renderCityList();
renderCity('İstanbul');

if ('serviceWorker' in navigator && (location.protocol === 'http:' || location.protocol === 'https:')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').catch(() => {});
  });
}
