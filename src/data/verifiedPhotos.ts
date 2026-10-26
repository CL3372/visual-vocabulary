
// Hand-verified dish photos (each one checked by eye against the dish name).
// Key = word.unsplashQuery lowercased. These win over every device cache and every API.
// An empty string means "no trustworthy photo yet": show the placeholder, never guess.
// Photos come from Wikimedia Commons; PHOTO_CREDITS lists authors and licences.

export const VERIFIED_PHOTOS: Record<string, string> = {
  'bacalhau bras salt cod eggs': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Bacalhau_a_Bras.jpg/960px-Bacalhau_a_Bras.jpg', // Bacalhau à Brás
  'cataplana seafood stew copper': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Seafood_Cataplana_at_World_Heritage_Cuisine_Summit_%26_Food_Festival_2018_%28Day_2%29_-_20.jpg/960px-Seafood_Cataplana_at_World_Heritage_Cuisine_Summit_%26_Food_Festival_2018_%28Day_2%29_-_20.jpg', // Cataplana
  'acorda bread soup portuguese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Acorda09_%28cropped%29.jpg/960px-Acorda09_%28cropped%29.jpg', // Açorda
  'clams garlic coriander portuguese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Ameijoas_%C3%A0_bulh%C3%A3o_Pato.jpg/960px-Ameijoas_%C3%A0_bulh%C3%A3o_Pato.jpg', // Amêijoas à Bulhão Pato
  'grilled sardines portuguese festival': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Grilled_Sardines_5.50%E2%82%AC_Marisqueira_O_Varino_Nazar%C3%A9_%283785526688%29.jpg/960px-Grilled_Sardines_5.50%E2%82%AC_Marisqueira_O_Varino_Nazar%C3%A9_%283785526688%29.jpg', // Sardinhas Assadas
  'alheira smoked sausage portuguese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Alheira_Feira_2010.jpg/960px-Alheira_Feira_2010.jpg', // Alheira
  'arroz de pato duck rice': '', // Arroz de Pato — no trustworthy photo yet
  'bifana pork sandwich portuguese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Porto-style_Bifana_sandwich_with_egg.jpg/960px-Porto-style_Bifana_sandwich_with_egg.jpg', // Bifana
  'polvo lagareiro octopus olive oil': 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Polvo_%C3%A0_lagareiro_%28Alcochete%29.jpg', // Polvo à Lagareiro
  'cozido portuguesa stew meat vegetables': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Cozido_a_portuguesa_1.JPG/960px-Cozido_a_portuguesa_1.JPG', // Cozido à Portuguesa
  'pao de lo sponge cake portuguese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/P%C3%A3o-de-l%C3%B3.jpg/960px-P%C3%A3o-de-l%C3%B3.jpg', // Pão de Ló
  'ginjinha cherry liqueur shot': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Ginjinha_2020.jpg/960px-Ginjinha_2020.jpg', // Ginjinha
  'bacalhau gomes sa salt cod potato olives baked': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Bacalhau_%C3%A0_Gomes_de_S%C3%A1.jpg/960px-Bacalhau_%C3%A0_Gomes_de_S%C3%A1.jpg', // Bacalhau à Gomes de Sá
  'bacalhau com natas creamy salt cod gratin potato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Bacalhau_com_natas.jpg/960px-Bacalhau_com_natas.jpg', // Bacalhau com Natas
  'bacalhau lagareiro salt cod olive oil roasted': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Bacalhau_assado_com_batatas_a_murro.jpg/960px-Bacalhau_assado_com_batatas_a_murro.jpg', // Bacalhau à Lagareiro
  'bacalhau ze pipo mayonnaise cod baked caramelized onion': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Bacalhau_Ze_Do_Pipo.jpg/960px-Bacalhau_Ze_Do_Pipo.jpg', // Bacalhau à Zé do Pipo
  'sopa da pedra bean sausage soup portuguese ribatejo': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Sopa_da_pedra_em_Almeirim.JPG/960px-Sopa_da_pedra_em_Almeirim.JPG', // Sopa da Pedra
  'canja galinha portuguese chicken rice soup': 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Canja_de_galinha.jpg', // Canja de Galinha
  'sopa de grao chickpea spinach portuguese soup': '', // Sopa de Grão — no trustworthy photo yet
  'leitao bairrada roast suckling pig crispy portuguese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Leit%C3%A3o_%C3%A0_Bairrada.JPG/960px-Leit%C3%A3o_%C3%A0_Bairrada.JPG', // Leitão à Bairrada
  'cabrito assado roast kid goat portuguese easter': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Cabrito_Assado_Paredes.jpg/960px-Cabrito_Assado_Paredes.jpg', // Cabrito Assado
  'frango piri piri grilled chicken chili portuguese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/2018-02-03_Chicken_Piri-Piri%2C_Albufeira_%281%29.JPG/960px-2018-02-03_Chicken_Piri-Piri%2C_Albufeira_%281%29.JPG', // Frango à Piri-Piri
  'rojoes minho pork cubes fried portuguese': 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Roj%C3%B5es_%C3%A0_moda_do_minho_com_arroz_de_sarrabulho.jpg', // Rojões
  'tripas porto tripe stew white beans': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Tripas_%288907365960%29.jpg/960px-Tripas_%288907365960%29.jpg', // Tripas à Moda do Porto
  'caldeirada portuguese fish stew mixed layers': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Caldeirada_de_rape_-_juantiagues.jpg/960px-Caldeirada_de_rape_-_juantiagues.jpg', // Caldeirada
  'percebes barnacles seafood atlantic portuguese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Pollicipes_pollicipes.jpg/960px-Pollicipes_pollicipes.jpg', // Percebes
  'linguado grelhado sole fish grilled portuguese lemon': '', // Linguado Grelhado — no trustworthy photo yet
  'choco frito fried cuttlefish setubal portuguese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Tapa_de_Chocos_fritos.jpg/960px-Tapa_de_Chocos_fritos.jpg', // Choco Frito
  'lagosta suada lobster steamed portuguese azores': '', // Lagosta Suada — no trustworthy photo yet
  'ovos mexidos scrambled eggs tuna portuguese': '', // Ovos Mexidos com Atum — no trustworthy photo yet
  'queijo serra estrela soft sheep cheese portuguese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Queijo_Serra_da_Estrela.jpg/960px-Queijo_Serra_da_Estrela.jpg', // Queijo Serra da Estrela
  'migas alentejo bread pork portuguese side dish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Migas-alentejanas-ricardo.jpg/960px-Migas-alentejanas-ricardo.jpg', // Migas à Alentejana
  'grelos turnip greens garlic olive oil portuguese': '', // Grelos Salteados — no trustworthy photo yet
  'chourico portuguese smoked sausage paprika': 'https://upload.wikimedia.org/wikipedia/commons/2/25/Chorizos_P6021974.jpg', // Chouriço
  'paio portuguese cured pork shoulder sausage': 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Paios.jpg', // Paio
  'presunto portuguese cured ham charcuterie': 'https://upload.wikimedia.org/wikipedia/commons/4/40/Presunto_de_Chaves.jpg', // Presunto
  'morcela blood sausage portuguese grilled': '', // Morcela — no trustworthy photo yet
  'broa milho cornbread portuguese dense crusty': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Broa_de_milho_%28Portugal%29%2C_Brona_de_millo_%28Galicia%29.jpg/960px-Broa_de_milho_%28Portugal%29%2C_Brona_de_millo_%28Galicia%29.jpg', // Broa de Milho
  'bola berlim portuguese donut custard beach': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Bola_de_Berlim_1_by_wax115.jpg/960px-Bola_de_Berlim_1_by_wax115.jpg', // Bola de Berlim
  'travesseiro sintra almond pastry pillow puff': 'https://upload.wikimedia.org/wikipedia/commons/7/75/Piriquita_%2814401986732%29.jpg', // Travesseiro de Sintra
  'queijadas sintra cheese tart small portuguese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Queijadinha_SV300005.jpg/960px-Queijadinha_SV300005.jpg', // Queijadas de Sintra
  'arroz doce portuguese rice pudding cinnamon pattern': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Arroz_doce_-_Jul_2008.jpg/960px-Arroz_doce_-_Jul_2008.jpg', // Arroz Doce
  'pudim flan caramel custard portuguese dessert': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Cr%C3%A8me_caramel_at_NB_Steak_JK.jpg/960px-Cr%C3%A8me_caramel_at_NB_Steak_JK.jpg', // Pudim Flan
  'serradura sawdust pudding cream biscuit portuguese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Serradura.JPG/960px-Serradura.JPG', // Serradura
  'tigelada baked egg custard portuguese terracotta': 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Tigelada.JPG', // Tigelada
  'barrigas freira egg yolk sweet portuguese convent': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Barrigadf.jpg/960px-Barrigadf.jpg', // Barrigas de Freira
  'ovos moles aveiro egg yolk sweet portuguese wafer': 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Ovos_moles.jpg', // Ovos Moles de Aveiro
  'vinho verde young green wine portugal glass': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Vinho_Verde_at_Tasca_Tasca_-_Sarah_Stierch.jpg/960px-Vinho_Verde_at_Tasca_Tasca_-_Sarah_Stierch.jpg', // Vinho Verde
  'alentejo red wine portugal vineyard hot plains': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Portuguese_Alentejo_wine.jpg/960px-Portuguese_Alentejo_wine.jpg', // Vinho do Alentejo
  'aguardente portuguese spirit glass brandy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/A_glass_of_tasty_grappa.jpg/960px-A_glass_of_tasty_grappa.jpg', // Aguardente
  'licor beirao portuguese herbal liqueur bottle': 'https://upload.wikimedia.org/wikipedia/commons/9/92/Licor-Beir%C3%A3o-%26-Orus_-_Orus_Clothing_%28cropped%29.png', // Licor Beirão
  'bica portuguese espresso small cup lisbon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Caf%C3%A9_Delta.jpg/960px-Caf%C3%A9_Delta.jpg', // Bica
  'petiscos portuguese bar snacks tapas small plates': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Pinchos_aperitivo.jpg/960px-Pinchos_aperitivo.jpg', // Petiscos
  'pica pau portuguese marinated pork bites pickled': '', // Pica-Pau — no trustworthy photo yet
  'pataniscas bacalhau salt cod fritters fried': 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Pataniscas_de_bacalhau.jpg', // Pataniscas de Bacalhau
  'rissois camarao shrimp pastry fried portuguese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Risole2.jpg/960px-Risole2.jpg', // Rissóis de Camarão
  'black scabbard fish pan fried banana plate madeira restaurant': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Espada_%28black_scabbardfish%29_with_banana_at_Doca_do_Cavacas_%2852892208512%29.jpg/960px-Espada_%28black_scabbardfish%29_with_banana_at_Doca_do_Cavacas_%2852892208512%29.jpg', // Espada com Banana
  'espetada madeiran beef skewer bay laurel hanging char grilled': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Zum_Grill_umgebautes_Fass_mit_Espetada-Spie%C3%9Fen_II.jpg/960px-Zum_Grill_umgebautes_Fass_mit_Espetada-Spie%C3%9Fen_II.jpg', // Espetada
  'cozido stew pot geothermal steam volcanic pork sausage vegetables rustic': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Cozido_das_Furnas_%2850687782641%29.jpg/960px-Cozido_das_Furnas_%2850687782641%29.jpg', // Cozido das Furnas
  'beef stew red wine dark rich sauce braised clay pot rustic slow cooked': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Alcatra_com_massa_sovada_%28Azores%29.jpg', // Alcatra
  'limpets lapas grilled shell garlic butter lemon madeira azores': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Lapas_grelhadas%2C_Rabo_de_Peixe_A%C3%A7ores.jpg/960px-Lapas_grelhadas%2C_Rabo_de_Peixe_A%C3%A7ores.jpg', // Lapas
  'black scabbard fish whole silver dark deep sea atlantic fresh market': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Aphanopus_carbo%2C_pez_sable_negro%2C_peixe-espada-preto%2C_en_el_Mercado_dos_Lavradores%2C_de_Funchal%2C_Madeira%2C_Portugal.jpg/960px-Aphanopus_carbo%2C_pez_sable_negro%2C_peixe-espada-preto%2C_en_el_Mercado_dos_Lavradores%2C_de_Funchal%2C_Madeira%2C_Portugal.jpg', // Peixe Espada
  'bolo de mel dark molasses cake madeiran spiced dense sliced': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Bolo_de_Mel.JPG/960px-Bolo_de_Mel.JPG', // Bolo de Mel
  'bread soup garlic coriander poached egg portuguese rustic bowl': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Acorda.jpg/960px-Acorda.jpg', // Açorda dos Açores
  'caldo verde portuguese soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Caldo_verde.jpg/960px-Caldo_verde.jpg', // Caldo Verde
  'pasteis de nata custard tart': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Pasteis_de_Belem.jpg/960px-Pasteis_de_Belem.jpg', // Pastéis de Nata
  'francesinha portuguese sandwich': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Francesinha_Sandwich_%28cropped%29.jpg/960px-Francesinha_Sandwich_%28cropped%29.jpg', // Francesinha
};

export interface PhotoCredit { word: string; file: string; author: string; license: string; }
export const PHOTO_CREDITS: PhotoCredit[] = [
  { word: 'Bacalhau à Brás', file: 'Bacalhau a Bras.jpg', author: 'Fpenteado at en.wikipedia', license: 'CC BY-SA 3.0' },
  { word: 'Cataplana', file: 'Seafood Cataplana at World Heritage Cuisine Summit & Food Festival 2018 (Day 2) - 20.jpg', author: 'Satdeep Gill', license: 'CC BY-SA 4.0' },
  { word: 'Açorda', file: 'Acorda09 (cropped).jpg', author: 'Ramessos', license: 'CC BY-SA 4.0' },
  { word: 'Amêijoas à Bulhão Pato', file: 'Ameijoas à bulhão Pato.jpg', author: 'Mariana Aurelio', license: 'CC BY-SA 2.0' },
  { word: 'Sardinhas Assadas', file: 'Grilled Sardines 5.50€ Marisqueira O Varino Nazaré (3785526688).jpg', author: 'Yusuke Kawasaki from Tokyo, Japan', license: 'CC BY 2.0' },
  { word: 'Alheira', file: 'Alheira Feira 2010.jpg', author: 'Lichinga', license: 'CC BY-SA 4.0' },
  { word: 'Bifana', file: 'Porto-style Bifana sandwich with egg.jpg', author: 'Siliconred', license: 'CC BY-SA 4.0' },
  { word: 'Polvo à Lagareiro', file: 'Polvo à lagareiro (Alcochete).jpg', author: 'The Ogre', license: 'CC BY-SA 4.0' },
  { word: 'Cozido à Portuguesa', file: 'Cozido a portuguesa 1.JPG', author: 'Uxbona', license: 'CC BY-SA 3.0' },
  { word: 'Pão de Ló', file: 'Pão-de-ló.jpg', author: 'Adriao', license: 'CC BY-SA 3.0' },
  { word: 'Ginjinha', file: 'Ginjinha 2020.jpg', author: 'MiguelAlanCS', license: 'CC BY-SA 4.0' },
  { word: 'Bacalhau à Gomes de Sá', file: 'Bacalhau à Gomes de Sá.jpg', author: 'Adriao', license: 'CC BY-SA 3.0' },
  { word: 'Bacalhau com Natas', file: 'Bacalhau com natas.jpg', author: 'Fpenteado', license: 'CC0' },
  { word: 'Bacalhau à Lagareiro', file: 'Bacalhau assado com batatas a murro.jpg', author: 'Enrique Dans', license: 'CC BY 2.0' },
  { word: 'Bacalhau à Zé do Pipo', file: 'Bacalhau Ze Do Pipo.jpg', author: 'Fpenteado (talk)', license: 'CC BY-SA 3.0' },
  { word: 'Sopa da Pedra', file: 'Sopa da pedra em Almeirim.JPG', author: 'Adriao', license: 'Public domain' },
  { word: 'Canja de Galinha', file: 'Canja de galinha.jpg', author: 'Sebástian Freire from Rio de Janeiro, Brasil', license: 'CC BY-SA 2.0' },
  { word: 'Leitão à Bairrada', file: 'Leitão à Bairrada.JPG', author: 'Adriao', license: 'CC BY 3.0' },
  { word: 'Cabrito Assado', file: 'Cabrito Assado Paredes.jpg', author: 'MunParedes', license: 'CC BY-SA 4.0' },
  { word: 'Frango à Piri-Piri', file: '2018-02-03 Chicken Piri-Piri, Albufeira (1).JPG', author: 'Kolforn', license: 'CC BY-SA 4.0' },
  { word: 'Rojões', file: 'Rojões à moda do minho com arroz de sarrabulho.jpg', author: 'Myself, adriao', license: 'Public domain' },
  { word: 'Tripas à Moda do Porto', file: 'Tripas (8907365960).jpg', author: 'Jeremy Keith from Brighton & Hove, United Kingdom', license: 'CC BY 2.0' },
  { word: 'Caldeirada', file: 'Caldeirada de rape - juantiagues.jpg', author: 'juantiagues', license: 'CC BY-SA 2.0' },
  { word: 'Percebes', file: 'Pollicipes pollicipes.jpg', author: 'Hans Hillewaert', license: 'CC BY-SA 4.0' },
  { word: 'Choco Frito', file: 'Tapa de Chocos fritos.jpg', author: 'Jazmin azul2', license: 'CC BY-SA 4.0' },
  { word: 'Queijo Serra da Estrela', file: 'Queijo Serra da Estrela.jpg', author: 'Adriao', license: 'Public domain' },
  { word: 'Migas à Alentejana', file: 'Migas-alentejanas-ricardo.jpg', author: 'ricardo from London', license: 'CC BY 2.0' },
  { word: 'Chouriço', file: 'Chorizos P6021974.jpg', author: 'Amasuela-Luis Lafuente Agudín', license: 'CC BY-SA 4.0' },
  { word: 'Paio', file: 'Paios.jpg', author: 'Adriao', license: 'CC BY-SA 3.0' },
  { word: 'Presunto', file: 'Presunto de Chaves.jpg', author: 'Carlos Botelho', license: 'CC BY 2.5' },
  { word: 'Broa de Milho', file: 'Broa de milho (Portugal), Brona de millo (Galicia).jpg', author: 'María Alabau', license: 'CC BY-SA 4.0' },
  { word: 'Bola de Berlim', file: 'Bola de Berlim 1 by wax115.jpg', author: 'Carlos Paes', license: 'Copyrighted free use' },
  { word: 'Travesseiro de Sintra', file: 'Piriquita (14401986732).jpg', author: 'yuka HAYASHI from Osaka, JAPAN', license: 'CC BY 2.0' },
  { word: 'Queijadas de Sintra', file: 'Queijadinha SV300005.jpg', author: 'Edvaldo LL Souza', license: 'CC BY-SA 4.0' },
  { word: 'Arroz Doce', file: 'Arroz doce - Jul 2008.jpg', author: 'Therese C', license: 'CC BY 2.0' },
  { word: 'Pudim Flan', file: 'Crème caramel at NB Steak JK.jpg', author: 'Oleg Yunakov', license: 'CC BY-SA 4.0' },
  { word: 'Serradura', file: 'Serradura.JPG', author: 'Popo le Chien', license: 'CC0' },
  { word: 'Tigelada', file: 'Tigelada.JPG', author: 'Hflm at Portuguese Wikipedia', license: 'Public domain' },
  { word: 'Barrigas de Freira', file: 'Barrigadf.jpg', author: 'Chedlund808', license: 'CC BY-SA 4.0' },
  { word: 'Ovos Moles de Aveiro', file: 'Ovos moles.jpg', author: 'Mix321', license: 'GFDL' },
  { word: 'Vinho Verde', file: 'Vinho Verde at Tasca Tasca - Sarah Stierch.jpg', author: 'Missvain', license: 'CC BY 4.0' },
  { word: 'Vinho do Alentejo', file: 'Portuguese Alentejo wine.jpg', author: 'Agne27', license: 'CC BY-SA 3.0' },
  { word: 'Aguardente', file: 'A glass of tasty grappa.jpg', author: 'Carsten Tolkmit', license: 'CC BY-SA 2.0' },
  { word: 'Licor Beirão', file: 'Licor-Beirão-&-Orus - Orus Clothing (cropped).png', author: 'Poit99', license: 'CC BY-SA 4.0' },
  { word: 'Bica', file: 'Café Delta.jpg', author: '', license: 'CC BY 2.0' },
  { word: 'Petiscos', file: 'Pinchos aperitivo.jpg', author: 'Ardo Beltz', license: 'CC BY-SA 3.0' },
  { word: 'Pataniscas de Bacalhau', file: 'Pataniscas de bacalhau.jpg', author: 'Adriao', license: 'CC BY-SA 3.0' },
  { word: 'Rissóis de Camarão', file: 'Risole2.jpg', author: 'PD-self', license: 'Public domain' },
  { word: 'Espada com Banana', file: 'Espada (black scabbardfish) with banana at Doca do Cavacas (52892208512).jpg', author: 'Bex Walton from London, England', license: 'CC BY 2.0' },
  { word: 'Espetada', file: 'Zum Grill umgebautes Fass mit Espetada-Spießen II.jpg', author: 'GerritR', license: 'CC BY-SA 4.0' },
  { word: 'Cozido das Furnas', file: 'Cozido das Furnas (50687782641).jpg', author: 'Navin75', license: 'CC BY-SA 2.0' },
  { word: 'Alcatra', file: 'Alcatra com massa sovada (Azores).jpg', author: 'The Ogre', license: 'CC BY-SA 4.0' },
  { word: 'Lapas', file: 'Lapas grelhadas, Rabo de Peixe Açores.jpg', author: 'Gartxoak', license: 'CC BY-SA 4.0' },
  { word: 'Peixe Espada', file: 'Aphanopus carbo, pez sable negro, peixe-espada-preto, en el Mercado dos Lavradores, de Funchal, Madeira, Portugal.jpg', author: 'CARLOS TEIXIDOR CADENAS', license: 'CC BY-SA 4.0' },
  { word: 'Bolo de Mel', file: 'Bolo de Mel.JPG', author: 'TeWeBs', license: 'CC BY-SA 4.0' },
  { word: 'Açorda dos Açores', file: 'Acorda.jpg', author: 'Valereee', license: 'CC0' },
  { word: 'Caldo Verde', file: 'Caldo verde.jpg', author: 'Mateus Hidalgo', license: 'CC BY-SA 2.5 br' },
  { word: 'Pastéis de Nata', file: 'Pasteis de Belem.jpg', author: 'Mon Œil', license: 'CC BY 2.0' },
  { word: 'Francesinha', file: 'Francesinha Sandwich (cropped).jpg', author: 'TheRealDapperDan', license: 'CC BY-SA 4.0' },
];
