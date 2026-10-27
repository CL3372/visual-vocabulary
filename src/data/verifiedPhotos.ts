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
  'frango assado brazilian roast chicken beer herbs': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Max%27s_Roasted_Chicken_-_Evan_Swigart.jpg/960px-Max%27s_Roasted_Chicken_-_Evan_Swigart.jpg', // Frango Assado
  'costela barranco beef ribs slow wood fire brazil': '', // Costela no Barranco — no trustworthy photo yet
  'fraldinha beef flank cut churrascaria brazil': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Flap_steak.jpg/960px-Flap_steak.jpg', // Fraldinha
  'tutu feijao minas gerais bean paste cassava flour': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Tutu_de_feij%C3%A3o_27_05_2015_%284%29.JPG/960px-Tutu_de_feij%C3%A3o_27_05_2015_%284%29.JPG', // Tutu de Feijão
  'arroz feijao rice beans brazilian everyday meal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Rice_and_beans%2C_Hotel_in_Itatiaia.jpeg/960px-Rice_and_beans%2C_Hotel_in_Itatiaia.jpeg', // Arroz com Feijão
  'vatapa bahian shrimp peanut coconut paste': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Vatap%C3%A1.jpg/960px-Vatap%C3%A1.jpg', // Vatapá
  'caldinho feijao black bean broth shot glass street food brazil': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Del_Barbiere_%284624606821%29.jpg/960px-Del_Barbiere_%284624606821%29.jpg', // Caldinho de Feijão
  'empada brazilian small pie chicken shrimp pastry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Empadas_de_frango_Vila_Isabel_Rio_de_Janeiro_Brasil.jpg/960px-Empadas_de_frango_Vila_Isabel_Rio_de_Janeiro_Brasil.jpg', // Empada
  'pastel fried pastry street market brazil filling': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Brazilian_pastel.jpg/960px-Brazilian_pastel.jpg', // Pastel
  'esfirra esfiha brazilian arab pastry minced meat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Sfiha2.jpg/960px-Sfiha2.jpg', // Esfirra
  'tapioca brazilian crepe cassava starch filled': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Tapioca_de_trancoso_2.jpg/960px-Tapioca_de_trancoso_2.jpg', // Tapioca
  'couve refogada kale collard greens garlic brazilian': '', // Couve Refogada — no trustworthy photo yet
  'mandioca frita fried cassava crispy brazil': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Mandioca_frita_en_restaurante_de_Argentina.jpg/960px-Mandioca_frita_en_restaurante_de_Argentina.jpg', // Mandioca Frita
  'quindim yellow coconut egg yolk brazilian dessert': 'https://upload.wikimedia.org/wikipedia/commons/4/44/Quindim.jpg', // Quindim
  'beijinho coconut condensed milk truffle sweet brazilian party': 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Beijinho.jpg', // Beijinho
  'romeu julieta guava paste cheese minas brasil': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Romeo_e_julieta.jpg/960px-Romeo_e_julieta.jpg', // Romeu e Julieta
  'bolo de rolo pernambuco guava roll cake thin layers': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Bolo_de_Rolo%2C_doce_brasileiro%2C_t%C3%ADpico_de_Pernambuco.jpg/960px-Bolo_de_Rolo%2C_doce_brasileiro%2C_t%C3%ADpico_de_Pernambuco.jpg', // Bolo de Rolo
  'guarana antartica soda can brazil drink': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Lata_de_Guaran%C3%A1_Antarctica.jpg/960px-Lata_de_Guaran%C3%A1_Antarctica.jpg', // Guaraná
  'cachaca sugarcane spirit bottle glass brazil': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Cachaca.JPG/960px-Cachaca.JPG', // Cachaça
  'suco maracuja passion fruit juice brazil yellow': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Passion_Fruit_juice.jpg/960px-Passion_Fruit_juice.jpg', // Suco de Maracujá
  'feijoada black bean stew pork brazilian': 'https://upload.wikimedia.org/wikipedia/commons/8/84/Feijoada_01.jpg', // Feijoada
  'churrasco brazilian bbq grilled meat skewer': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Churrasco00003.jpg/960px-Churrasco00003.jpg', // Churrasco
  'pao de queijo cheese bread balls brazilian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Cheesebread.jpg/960px-Cheesebread.jpg', // Pão de Queijo
  'brigadeiro chocolate truffle brazilian sweet': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Brigadeiro.jpg/960px-Brigadeiro.jpg', // Brigadeiro
  'moqueca brazilian fish coconut stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Moqueca.jpg/960px-Moqueca.jpg', // Moqueca
  'caipirinha lime cachaca brazilian cocktail': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Caipirinha_with_lime.jpg/960px-Caipirinha_with_lime.jpg', // Caipirinha
  'acai bowl purple toppings fruit granola': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/A%C3%A7a%C3%AD_do_Par%C3%A1.jpg/960px-A%C3%A7a%C3%AD_do_Par%C3%A1.jpg', // Açaí Bowl
  'coxinha fried chicken croquette teardrop': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/%282014-11-22%29_La_Donosti_-_Agudos_-_Coxinha_de_Leitoa_Romerito_Pontes_%2815870107515%29.jpg/960px-%282014-11-22%29_La_Donosti_-_Agudos_-_Coxinha_de_Leitoa_Romerito_Pontes_%2815870107515%29.jpg', // Coxinha
  'farofa toasted cassava flour brazilian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Farofa_brazil.jpg/960px-Farofa_brazil.jpg', // Farofa
  'acaraje fried bean cake bahian street food': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Acaraje-Baiana.jpg/960px-Acaraje-Baiana.jpg', // Acarajé
  'bobo de camarao shrimp cassava puree bahia': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Assis_Lima_Bobo_de_Camar%C3%A3ol_RioBranco_%2826992971238%29.jpg/960px-Assis_Lima_Bobo_de_Camar%C3%A3ol_RioBranco_%2826992971238%29.jpg', // Bobó de Camarão
  'picanha beef rump cap grilled brazilian': 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Picanha3.jpg', // Picanha
  'caldo verde green soup kale sausage': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Caldo_verde.jpg/960px-Caldo_verde.jpg', // Caldo Verde
  'spanish tortilla omelette potato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Tortilla_de_Patatas_%28Corte_transversal%29.jpg/960px-Tortilla_de_Patatas_%28Corte_transversal%29.jpg', // Tortilla Española
  'fabada asturiana bean stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Fabada_en_cazuela_de_barro.jpg/960px-Fabada_en_cazuela_de_barro.jpg', // Fabada Asturiana
  'pulpo gallega octopus paprika': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Raci%C3%B3nPulpo.jpg/960px-Raci%C3%B3nPulpo.jpg', // Pulpo a la Gallega
  'pan con tomate bread tomato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Pan_con_Tumaca.jpg/960px-Pan_con_Tumaca.jpg', // Pan con Tomate
  'salmorejo cold tomato soup spanish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Salmorejo_cordobes.jpg/960px-Salmorejo_cordobes.jpg', // Salmorejo
  'croquetas fried spanish ham': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Croquetas_Caseras_%287068664101%29.jpg/960px-Croquetas_Caseras_%287068664101%29.jpg', // Croquetas
  'gambas al ajillo garlic prawns': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Gambas_al_ajillo.jpg/960px-Gambas_al_ajillo.jpg', // Gambas al Ajillo
  'manchego cheese spanish sheep': 'https://upload.wikimedia.org/wikipedia/commons/5/59/Manchego.jpg', // Manchego
  'turron nougat almond spanish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Turr%C3%B3n_de_Alicante_%28Casa_Mira%29.jpg/960px-Turr%C3%B3n_de_Alicante_%28Casa_Mira%29.jpg', // Turrón
  'crema catalana burnt custard': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Food_in_Catalonia_06.jpg/960px-Food_in_Catalonia_06.jpg', // Crema Catalana
  'sangria wine fruit red': 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Red_Wine_Sangria_with_lemon%2C_lime%2C_apple%2C_and_orange_served_in_a_glass_-_Evan_Swigart.jpg', // Sangría
  'cocido madrileno chickpea stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/CocidoMadrile%C3%B1o.jpg/960px-CocidoMadrile%C3%B1o.jpg', // Cocido Madrileño
  'boquerones anchovies marinated white vinegar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Boquerones_en_vinagre-Madrid.jpg/960px-Boquerones_en_vinagre-Madrid.jpg', // Boquerones
  'pimientos padron blistered peppers tapas': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Pementos_de_Padron.jpg/960px-Pementos_de_Padron.jpg', // Pimientos de Padrón
  'croquetas jamon ham bechamel fried spanish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Croquetas_Caseras_%287068664101%29.jpg/960px-Croquetas_Caseras_%287068664101%29.jpg', // Croquetas de Jamón
  'albondigas meatballs tomato sauce spanish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Pelotas_de_carne.jpg/960px-Pelotas_de_carne.jpg', // Albóndigas
  'calamares squid rings fried crispy lemon': 'https://upload.wikimedia.org/wikipedia/commons/7/74/Calamares_Romana_0984.jpg', // Calamares a la Romana
  'mejillones mussels escabeche spanish tapas': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Conserva_de_mejillones_en_escabeche_%28Espa%C3%B1a%29.jpg/960px-Conserva_de_mejillones_en_escabeche_%28Espa%C3%B1a%29.jpg', // Mejillones
  'ancas de rana frog legs fried garlic parsley spanish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Frog_legs.JPG/960px-Frog_legs.JPG', // Ancas de Rana
  'pintxos basque food bar counter bites': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/TapasenBarcelona.JPG/960px-TapasenBarcelona.JPG', // Pintxos
  'patatas alioli garlic mayo potato spanish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Cre%C3%AFlles_amb_allioli_a_un_bar_del_carrer_Andr%C3%A9s_Lambert%2C_X%C3%A0bia.jpg/960px-Cre%C3%AFlles_amb_allioli_a_un_bar_del_carrer_Andr%C3%A9s_Lambert%2C_X%C3%A0bia.jpg', // Patatas Alioli
  'paella valenciana chicken rabbit rice pan': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/01_Paella_Valenciana_original.jpg/960px-01_Paella_Valenciana_original.jpg', // Paella Valenciana
  'seafood paella prawns mussels clams saffron': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Seafood_paella_in_Brisbane%2C_Queensland.jpg/960px-Seafood_paella_in_Brisbane%2C_Queensland.jpg', // Paella de Marisco
  'arroz negro squid ink rice spanish black': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/14-08-04-barcelona-RalfR-41.jpg/960px-14-08-04-barcelona-RalfR-41.jpg', // Arroz Negro
  'fideua noodle paella seafood valencian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Fideua_-_xurde.jpg/960px-Fideua_-_xurde.jpg', // Fideuà
  'cocido madrileno chickpea stew madrid pork': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/CocidoMadrile%C3%B1o.jpg/960px-CocidoMadrile%C3%B1o.jpg', // Cocido Madrileño
  'ajo blanco white gazpacho almond garlic': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Ajo_blanco.jpg/960px-Ajo_blanco.jpg', // Ajo Blanco
  'salmorejo cordoba thick tomato soup egg': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Salmorejo_cordobes.jpg/960px-Salmorejo_cordobes.jpg', // Salmorejo
  'bacalao pil pil cod basque olive oil garlic': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Bacalao_al_Pil_Pil_%28Vizcaya%29.jpg/960px-Bacalao_al_Pil_Pil_%28Vizcaya%29.jpg', // Bacalao al Pil-Pil
  'txangurro spider crab basque stuffed baked': '', // Txangurro — no trustworthy photo yet
  'almejas clams white wine garlic spanish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Almejas_a_la_marinera-2009.jpg/960px-Almejas_a_la_marinera-2009.jpg', // Almejas a la Marinera
  'vieiras scallops galicia baked shell': 'https://upload.wikimedia.org/wikipedia/commons/0/09/Argopecten_irradians.jpg', // Vieiras
  'cochinillo asado roast suckling pig segovian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Cochinillo_asado-Madrid.jpg/960px-Cochinillo_asado-Madrid.jpg', // Cochinillo Asado
  'cordero asado roast lamb castile oven': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Cordero_asado.JPG/960px-Cordero_asado.JPG', // Cordero Asado
  'rabo de toro oxtail stew cordoba spanish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Rabo_de_toro-Estofado_%2801%29.JPG/960px-Rabo_de_toro-Estofado_%2801%29.JPG', // Rabo de Toro
  'pollo ajillo garlic chicken spanish tapas': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Pollo_al_ajillo_%28Panaderas%29.jpg/960px-Pollo_al_ajillo_%28Panaderas%29.jpg', // Pollo al Ajillo
  'migas fried breadcrumbs chorizo egg spanish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Migas.PNG/960px-Migas.PNG', // Migas
  'callos tripe stew madrid chorizo paprika': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Callos_cociendose.jpg/960px-Callos_cociendose.jpg', // Callos a la Madrileña
  'chorizo spanish sausage sliced paprika red': 'https://upload.wikimedia.org/wikipedia/commons/2/25/Chorizos_P6021974.jpg', // Chorizo
  'morcilla blood sausage spain black rice': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Morcilla-burgos_2.jpg/960px-Morcilla-burgos_2.jpg', // Morcilla
  'lomo embuchado pork loin cured sliced spain': 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Big_lomito.jpg', // Lomo Embuchado
  'manchego cheese wedge spanish sheep milk': 'https://upload.wikimedia.org/wikipedia/commons/5/59/Manchego.jpg', // Queso Manchego
  'cabrales blue cheese asturian cave aged': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Cabrales_blue_Cheese.jpg/960px-Cabrales_blue_Cheese.jpg', // Queso Cabrales
  'pan con tomate catalan bread tomato olive oil': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Pan_con_Tumaca.jpg/960px-Pan_con_Tumaca.jpg', // Pan Tumaca
  'ensaimada mallorcan spiral pastry lard': 'https://upload.wikimedia.org/wikipedia/commons/5/50/Ensaimada_3.jpg', // Ensaimada
  'torta aceite thin crispy biscuit sesame': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Tortas_de_Aceite.JPG/960px-Tortas_de_Aceite.JPG', // Torta de Aceite
  'polvoron spanish shortbread almond crumbly': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Polvor%C3%B3n_de_Estepa.jpg/960px-Polvor%C3%B3n_de_Estepa.jpg', // Polvorón
  'arroz con leche rice pudding cinnamon spanish': 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Arroz_con_leche.png', // Arroz con Leche
  'flan caramel custard spanish dessert': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Cr%C3%A8me_caramel_2.jpg/960px-Cr%C3%A8me_caramel_2.jpg', // Flan
  'tarta santiago almond cake galicia cross': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Tarta_de_Santiago-2009.jpg/960px-Tarta_de_Santiago-2009.jpg', // Tarta de Santiago
  'leche frita fried milk dessert custard dusted': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Leche_frita.jpg', // Leche Frita
  'tocino de cielo egg yolk sweet caramel': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Tocinillos_de_cielo-_%28La_Mallorquina%29.jpg/960px-Tocinillos_de_cielo-_%28La_Mallorquina%29.jpg', // Tocino de Cielo
  'cava sparkling wine glass bubbles catalan': '', // Cava — no trustworthy photo yet
  'horchata tiger nut drink valencia cold': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Horchata_de_chufa_2.jpg/960px-Horchata_de_chufa_2.jpg', // Horchata
  'vermut vermouth tapas glass olive spain': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Four_bottles_of_vermouth.jpg/960px-Four_bottles_of_vermouth.jpg', // Vermut
  'rebujito sherry manzanilla lemonade seville': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Course_-1-_Rebujito_%28cropped%29.jpg/960px-Course_-1-_Rebujito_%28cropped%29.jpg', // Rebujito
  'papas arrugadas wrinkled salt potatoes canary islands mojo sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Papasarrugadas.jpg/960px-Papasarrugadas.jpg', // Papas Arrugadas
  'mojo rojo red sauce canary islands garlic chilli pepper bowl': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Papasarrugadas.jpg/960px-Papasarrugadas.jpg', // Mojo Rojo
  'ropa vieja stewed shredded beef chickpeas tomato rich sauce canarian': '', // Ropa Vieja Canaria — no trustworthy photo yet
  'almond cream dessert sweet sauce honey canary islands': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/CanaryBienmesabe.jpg/960px-CanaryBienmesabe.jpg', // Bienmesabe
  'paella spanish rice': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/01_Paella_Valenciana_original.jpg/960px-01_Paella_Valenciana_original.jpg', // Paella
  'gazpacho cold soup spanish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Gazpacho_Malague%C3%B1o_con_su_%E2%80%9Cpica%C3%ADto%E2%80%9D_-_Moreno%2C_Playa_Burriana_%28cropped%29.jpg/960px-Gazpacho_Malague%C3%B1o_con_su_%E2%80%9Cpica%C3%ADto%E2%80%9D_-_Moreno%2C_Playa_Burriana_%28cropped%29.jpg', // Gazpacho
  'churros spanish fried dough': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Chocolate_con_churros_%2827343655726%29.jpg/960px-Chocolate_con_churros_%2827343655726%29.jpg', // Churros
  'tapas spanish appetizers': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/TapasenBarcelona.JPG/960px-TapasenBarcelona.JPG', // Tapas
  'iberian ham jamon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Jamon_iberico_de_bellota_2_%28cinco_jotas%29.jpg/960px-Jamon_iberico_de_bellota_2_%28cinco_jotas%29.jpg', // Jamón Ibérico
  'patatas bravas spicy potatoes': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Patatas_bravas_madrid.jpg/960px-Patatas_bravas_madrid.jpg', // Patatas Bravas
  'amatriciana pasta tomato guanciale': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Bucatini_allamatriciana.jpg/960px-Bucatini_allamatriciana.jpg', // Amatriciana
  'gelato italian ice cream cone': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Gelato_ice_cream.jpg/960px-Gelato_ice_cream.jpg', // Gelato
  'focaccia bread olive oil rosemary': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Focaccia_with_Crumb.jpg/960px-Focaccia_with_Crumb.jpg', // Focaccia
  'panettone christmas italian sweet bread': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Panettone_-_Nicolettone_2017_-_IMG_7092_%2831752504105%29.jpg/960px-Panettone_-_Nicolettone_2017_-_IMG_7092_%2831752504105%29.jpg', // Panettone
  'carpaccio raw beef thin sliced': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Carpaccio_with_cheese_in_Warsaw.jpg/960px-Carpaccio_with_cheese_in_Warsaw.jpg', // Carpaccio
  'saltimbocca veal prosciutto sage': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Saltimbocca_01.jpg/960px-Saltimbocca_01.jpg', // Saltimbocca
  'burrata fresh cheese creamy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Burrata2.jpg/960px-Burrata2.jpg', // Burrata
  'limoncello lemon liqueur italian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/SIMAL_limoncello_jp.jpg/960px-SIMAL_limoncello_jp.jpg', // Limoncello
  'spaghetti bolognese meat sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Quorn_Spaghetti_Bolognese.jpg/960px-Quorn_Spaghetti_Bolognese.jpg', // Spaghetti Bolognese
  'tagliatelle pasta fresh egg ragù': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Making_a_better_homemade_pasta_-_16670047286.jpg/960px-Making_a_better_homemade_pasta_-_16670047286.jpg', // Tagliatelle
  'penne arrabbiata spicy tomato pasta': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Penne_Arrabbiata.jpg/960px-Penne_Arrabbiata.jpg', // Penne all'Arrabbiata
  'aglio olio spaghetti garlic olive oil': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Spaghetti_di_Gragnano_e_colatura_di_alici.jpg/960px-Spaghetti_di_Gragnano_e_colatura_di_alici.jpg', // Aglio e Olio
  'spaghetti vongole clams white wine': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Flickr_-_cyclonebill_-_Spaghetti_med_muslinger.jpg/960px-Flickr_-_cyclonebill_-_Spaghetti_med_muslinger.jpg', // Vongole
  'cacio e pepe pasta black pepper cheese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Tonnarelli_cacio_e_pepe.jpg/960px-Tonnarelli_cacio_e_pepe.jpg', // Cacio e Pepe
  'pappardelle pasta wide ribbon ragu': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Pappardelle.jpg/960px-Pappardelle.jpg', // Pappardelle
  'orecchiette pasta broccoli rabe puglia': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Orecchiette_su_tavoliere_in_legno.jpg/960px-Orecchiette_su_tavoliere_in_legno.jpg', // Orecchiette
  'bucatini amatriciana pasta thick hollow': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Bucatini.jpg/960px-Bucatini.jpg', // Bucatini
  'tortellini pasta broth stuffed ring': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Tortellini_Bolognesi.jpg/960px-Tortellini_Bolognesi.jpg', // Tortellini
  'ravioli stuffed pasta butter sage': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Ravioli_2020.jpg/960px-Ravioli_2020.jpg', // Ravioli
  'fettuccine alfredo cream pasta parmesan': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Fettuccine_Alfredo_originals.jpg/960px-Fettuccine_Alfredo_originals.jpg', // Fettuccine Alfredo
  'pasta fagioli bean soup italian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Pasta_e_fagioli_cannellini.jpg/960px-Pasta_e_fagioli_cannellini.jpg', // Pasta e Fagioli
  'pizza margherita tomato mozzarella basil': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Neapolitan_pizza_at_Trappica_%2848701940197%29.jpg/960px-Neapolitan_pizza_at_Trappica_%2848701940197%29.jpg', // Pizza Margherita
  'neapolitan pizza wood fired charred': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Forno_a_legna_pizza_napoletana.jpg/960px-Forno_a_legna_pizza_napoletana.jpg', // Pizza Napolitana
  'pizza al taglio roman slice rectangular': 'https://upload.wikimedia.org/wikipedia/commons/4/43/Pizza_al_taglio.jpg', // Pizza al Taglio
  'calzone folded pizza stuffed oven': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Calzone_Tradition_%2B_poivrons.JPG/960px-Calzone_Tradition_%2B_poivrons.JPG', // Calzone
  'antipasto board italian charcuterie': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Antipasto_nell%27isola_di_Ortigia.jpg/960px-Antipasto_nell%27isola_di_Ortigia.jpg', // Antipasto
  'crostini bread toasted toppings italian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Crostini_by_Charles_Haynes.jpg/960px-Crostini_by_Charles_Haynes.jpg', // Crostini
  'suppli roman rice ball fried mozzarella': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Suppl%C3%AC_al_telefono.jpg/960px-Suppl%C3%AC_al_telefono.jpg', // Supplì
  'vitello tonnato veal tuna sauce piemonte': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Vitello_tonnato_%287169906567%29.jpg/960px-Vitello_tonnato_%287169906567%29.jpg', // Vitello Tonnato
  'caprese salad mozzarella tomato basil': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Caprese-1_%28tigher_crop%29.jpg/960px-Caprese-1_%28tigher_crop%29.jpg', // Insalata Caprese
  'cotoletta milanese breaded veal cutlet': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Cotoletta_alla_milanese_in_milano.jpg/960px-Cotoletta_alla_milanese_in_milano.jpg', // Cotoletta Milanese
  'osso buco veal shank braised gremolata': 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Ossobuco.jpg', // Osso Buco
  'bollito misto boiled meat italian northern': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/20171225_Bollito_misto.jpg/960px-20171225_Bollito_misto.jpg', // Bollito Misto
  'bistecca fiorentina tuscan t-bone steak': 'https://upload.wikimedia.org/wikipedia/commons/1/12/Bistecca_alla_fiorentina-01.jpg', // Bistecca Fiorentina
  'porchetta italian roast pork herbs': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Saveurs_2016_62.jpg/960px-Saveurs_2016_62.jpg', // Porchetta
  'pork loin roasted tuscan rosemary garlic': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Fusion_of_traditional_dishes%2C_Tuscan_roasted_pork_%28arista%29_with_Shiitake_mushrooms.jpg/960px-Fusion_of_traditional_dishes%2C_Tuscan_roasted_pork_%28arista%29_with_Shiitake_mushrooms.jpg', // Arista di Maiale
  'fritto misto seafood fried mixed italian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Fritto_misto_di_pesce_con_limone.jpg/960px-Fritto_misto_di_pesce_con_limone.jpg', // Fritto Misto
  'baccala salt cod italian dried fish stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Vicenza%2C_Espressamente%2C_baccala_vicentina.jpg/960px-Vicenza%2C_Espressamente%2C_baccala_vicentina.jpg', // Baccalà
  'ribollita tuscan bread soup kale beans': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Ribollita_toscana.JPG/960px-Ribollita_toscana.JPG', // Ribollita
  'acquacotta tuscan water soup egg bread': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Acquacotta.jpg/960px-Acquacotta.jpg', // Acquacotta
  'mushroom risotto porcini italian creamy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Risotto_ai_funghi_porcini.JPG/960px-Risotto_ai_funghi_porcini.JPG', // Risotto ai Funghi
  'black squid ink risotto venetian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Risotto_al_nero_di_seppia.jpg/960px-Risotto_al_nero_di_seppia.jpg', // Risotto Nero
  'grissini breadsticks thin crispy italian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Soepstengels_%283871017999%29.jpg/960px-Soepstengels_%283871017999%29.jpg', // Grissini
  'schiacciata flatbread tuscan olive oil': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Focaccia_o_schiacciata_di_patate.jpg/960px-Focaccia_o_schiacciata_di_patate.jpg', // Schiacciata
  'piadina romagna flatbread stuffed': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Piadina.jpg/960px-Piadina.jpg', // Piadina
  'parmesan cheese block aged grated': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Parmigiano-Reggiano_at_Eataly_in_Stockholm.jpg/960px-Parmigiano-Reggiano_at_Eataly_in_Stockholm.jpg', // Parmigiano Reggiano
  'buffalo mozzarella fresh white italy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Mozzarella_di_bufala2.jpg/960px-Mozzarella_di_bufala2.jpg', // Mozzarella di Bufala
  'pecorino romano cheese hard grated': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Pecorino_romano_cheese.jpg/960px-Pecorino_romano_cheese.jpg', // Pecorino Romano
  'gorgonzola blue cheese italian creamy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/A_Gongonzola_from_Baci.jpg/960px-A_Gongonzola_from_Baci.jpg', // Gorgonzola
  'ricotta cheese fresh white creamy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Ricotta_fresca.jpg/960px-Ricotta_fresca.jpg', // Ricotta
  'taleggio cheese washed rind italian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Taleggio_vecchia_lavorazione_%283323694182%29.jpg/960px-Taleggio_vecchia_lavorazione_%283323694182%29.jpg', // Taleggio
  'sfogliatella pastry shell naples flaky': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Sfogliatelle_ricce_e_frolle.jpg/960px-Sfogliatelle_ricce_e_frolle.jpg', // Sfogliatella
  'cassata siciliana cake marzipan ricotta': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Cassatasiciliana.jpg/960px-Cassatasiciliana.jpg', // Cassata Siciliana
  'zeppole fried doughnuts cream pastry': 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Zeppole_di_San_Giuseppe.jpg', // Zeppole
  'granita coffee ice sicilian slush': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Tris_di_granite.JPG/960px-Tris_di_granite.JPG', // Granita
  'torta della nonna custard pine nut tart': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Torta_della_Nonna.jpg/960px-Torta_della_Nonna.jpg', // Torta della Nonna
  'struffoli naples honey balls christmas': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Struffoli2.JPG/960px-Struffoli2.JPG', // Struffoli
  'aperol spritz orange cocktail prosecco': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Aperol_Spritz_aboard_Viking_Mariella.jpg/960px-Aperol_Spritz_aboard_Viking_Mariella.jpg', // Aperol Spritz
  'negroni cocktail red bitter gin': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Negroni_served_in_Vancouver_BC.jpg/960px-Negroni_served_in_Vancouver_BC.jpg', // Negroni
  'grappa spirit italy glass clear': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/A_glass_of_tasty_grappa.jpg/960px-A_glass_of_tasty_grappa.jpg', // Grappa
  'amaro bitter italian liqueur digestif': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/ManyAmari.jpg/960px-ManyAmari.jpg', // Amaro
  'pasta italian bowl': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg/960px-%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg', // Pasta
  'carbonara pasta creamy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Espaguetis_carbonara.jpg/960px-Espaguetis_carbonara.jpg', // Carbonara
  'risotto creamy rice': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Risotto_con_l%27ossobuco%2C_Editathon_Vegnii_a_ved%C3%A8_se_l%27%C3%B2rghen_el_gh%27%C3%A8%2C_Baggio%2C_Milano_01.jpg/960px-Risotto_con_l%27ossobuco%2C_Editathon_Vegnii_a_ved%C3%A8_se_l%27%C3%B2rghen_el_gh%27%C3%A8%2C_Baggio%2C_Milano_01.jpg', // Risotto
  'tiramisu dessert coffee': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Home-made_tiramisu%2C_november_2008.jpg/960px-Home-made_tiramisu%2C_november_2008.jpg', // Tiramisu
  'lasagna baked pasta': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Meaty_Lasagna_8of8_%288736299782%29.jpg/960px-Meaty_Lasagna_8of8_%288736299782%29.jpg', // Lasagna
  'pesto sauce basil green': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/BasilPesto.JPG/960px-BasilPesto.JPG', // Pesto
  'minestrone soup italian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Minestrone_soup.jpg/960px-Minestrone_soup.jpg', // Minestrone
  'cannoli sicilian pastry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Cannoli_siciliani_al_Caff%C3%A8_Impero%2C_ad_Alcamo.jpg/960px-Cannoli_siciliani_al_Caff%C3%A8_Impero%2C_ad_Alcamo.jpg', // Cannoli
  'panna cotta dessert': 'https://upload.wikimedia.org/wikipedia/commons/0/01/Panna_cotta_with_chocolate_mousse.jpg', // Panna Cotta
  'arancini rice balls fried': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Arancini_002.jpg/960px-Arancini_002.jpg', // Arancini
  'bruschetta tomato toasted': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/2014_Bruschetta_The_Larder_Chiang_Mai.jpg/960px-2014_Bruschetta_The_Larder_Chiang_Mai.jpg', // Bruschetta
  'gnocchi potato dumplings': 'https://upload.wikimedia.org/wikipedia/commons/8/86/Gnocchi_di_ricotta_burro_e_salvia.jpg', // Gnocchi
  'french onion soup gratin cheese crock': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Mmm...onion_soup_%285344349906%29.jpg/960px-Mmm...onion_soup_%285344349906%29.jpg', // French Onion Soup
  'vichyssoise cold potato leek soup cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Vichyssoise.jpg/960px-Vichyssoise.jpg', // Vichyssoise
  'lobster bisque cream soup french': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Bisque_de_homard.jpg/960px-Bisque_de_homard.jpg', // Bisque
  'soupe au pistou provencal vegetable bean': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Pistour-4.JPG/960px-Pistour-4.JPG', // Soupe au Pistou
  'pate liver french terrine charcuterie': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/%C3%89tal_de_charcutier-traiteur.JPG/960px-%C3%89tal_de_charcutier-traiteur.JPG', // Pâté
  'terrine french pork countryside rustic': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/La_Tuili%C3%A8re_-_Montloup_-_Ferme_auberge_Au_pr%C3%A9_de_mon_arbre_-_Terrine_de_campagne.jpg/960px-La_Tuili%C3%A8re_-_Montloup_-_Ferme_auberge_Au_pr%C3%A9_de_mon_arbre_-_Terrine_de_campagne.jpg', // Terrine
  'gougeres cheese puff choux french': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Petites_goug%C3%A8res_ap%C3%A9ritif.jpg/960px-Petites_goug%C3%A8res_ap%C3%A9ritif.jpg', // Gougères
  'salade nicoise tuna egg anchovy olives': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Salade_ni%C3%A7oise_001.jpg/960px-Salade_ni%C3%A7oise_001.jpg', // Salade Niçoise
  'duck confit crispy skin french cassoulet': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/MCB-duck-leg-confit.jpg/960px-MCB-duck-leg-confit.jpg', // Confit de Canard
  'cassoulet white bean duck sausage slow': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Cassoulet.cuit.jpg/960px-Cassoulet.cuit.jpg', // Cassoulet
  'pot au feu french boiled beef vegetables broth': 'https://upload.wikimedia.org/wikipedia/commons/5/51/Pot-au-feu2.jpg', // Pot-au-Feu
  'blanquette veau veal cream stew french': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Blanquette_de_veau_%C3%A0_l%27ancienne_04.jpg/960px-Blanquette_de_veau_%C3%A0_l%27ancienne_04.jpg', // Blanquette de Veau
  'navarin lamb stew spring vegetables french': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Navarin_02.jpg/960px-Navarin_02.jpg', // Navarin d'Agneau
  'steak tartare raw beef capers egg yolk': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Tartare_de_boeuf_charolais_01.jpg/960px-Tartare_de_boeuf_charolais_01.jpg', // Steak Tartare
  'steak frites bistro french fries entrecote': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Steak_frites.jpg/960px-Steak_frites.jpg', // Steak Frites
  'magret duck breast scored pink medium rare': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Magret_de_canard_02.jpg/960px-Magret_de_canard_02.jpg', // Magret de Canard
  'french roast chicken poulet roti golden': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Max%27s_Roasted_Chicken_-_Evan_Swigart.jpg/960px-Max%27s_Roasted_Chicken_-_Evan_Swigart.jpg', // Poulet Rôti
  'rabbit mustard cream sauce french rustic': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Lapin_aux_deux_moutardes.jpg/960px-Lapin_aux_deux_moutardes.jpg', // Lapin à la Moutarde
  'sole meuniere butter lemon fish french': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Sole_meuniere_%284689490702%29.jpg/960px-Sole_meuniere_%284689490702%29.jpg', // Sole Meunière
  'moules marinieres mussels white wine garlic': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Normandy_%2710-_Saint-Vaast-la-Hougue_%284826863803%29.jpg/960px-Normandy_%2710-_Saint-Vaast-la-Hougue_%284826863803%29.jpg', // Moules Marinières
  'brandade salt cod puree cream olive oil': 'https://upload.wikimedia.org/wikipedia/commons/6/68/Brandade5.jpg', // Brandade de Morue
  'croque monsieur ham cheese bechamel grilled': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Croque_Monsieur_and_salad_at_Paris_Bakery.jpg/960px-Croque_Monsieur_and_salad_at_Paris_Bakery.jpg', // Croque Monsieur
  'croque madame fried egg toast french cafe': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Croque-madame_02.jpg/960px-Croque-madame_02.jpg', // Croque Madame
  'french omelette eggs butter fold yellow': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Omelette-Plate.jpg/960px-Omelette-Plate.jpg', // Omelette
  'salade lyonnaise frisee lardons poached egg': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Salade_lyonnaise.JPG/960px-Salade_lyonnaise.JPG', // Salade Lyonnaise
  'tarte flambee alsatian thin pizza cream onion': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Tarte_flamb%C3%A9e_alsacienne_514471722.jpg/960px-Tarte_flamb%C3%A9e_alsacienne_514471722.jpg', // Tarte Flambée
  'quiche lorraine bacon egg cream tart': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/54._Quiche_lorraine.jpg/960px-54._Quiche_lorraine.jpg', // Quiche Lorraine
  'choucroute garnie sauerkraut sausage alsace': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Choucroute_garnie_servie_au_restaurant_Stam%2C_%C3%A0_Lyon_%28mars_2023%29.jpg/960px-Choucroute_garnie_servie_au_restaurant_Stam%2C_%C3%A0_Lyon_%28mars_2023%29.jpg', // Choucroute Garnie
  'bouillabaisse marseille fish stew rouille': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Bouillabaisse_01.jpg/960px-Bouillabaisse_01.jpg', // Bouillabaisse
  'piperade basque pepper tomato egg french': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Piperade_01.jpg/960px-Piperade_01.jpg', // Piperade
  'aligot mashed potato cheese stretchy auvergne': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Bol_d%27aligot.jpg/960px-Bol_d%27aligot.jpg', // Aligot
  'tartiflette reblochon potato bacon savoy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Tartiflette.jpg/960px-Tartiflette.jpg', // Tartiflette
  'gratin dauphinois potato cream garlic bake': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Gratin_dauphinois.jpg/960px-Gratin_dauphinois.jpg', // Gratin Dauphinois
  'baguette french bread crispy crust': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Baguettes%2C_Paris%2C_France_-_panoramio.jpg/960px-Baguettes%2C_Paris%2C_France_-_panoramio.jpg', // Baguette
  'pain au chocolat chocolate croissant flaky': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Pain_au_chocolat_Luc_Viatour.jpg/960px-Pain_au_chocolat_Luc_Viatour.jpg', // Pain au Chocolat
  'brioche bread french enriched buttery': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Brioche_Nanterre_%28mars_2021%29.jpg/960px-Brioche_Nanterre_%28mars_2021%29.jpg', // Brioche
  'madeleine shell cake france lemon butter': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Madeleine_02.JPG/960px-Madeleine_02.JPG', // Madeleine
  'macarons colorful paris patisserie': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Macarons%2C_French_made_mini_cakes.JPG/960px-Macarons%2C_French_made_mini_cakes.JPG', // Macaron
  'eclair chocolate pastry cream choux': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Eclairs_with_chocolate_icing_at_Cafe_Blue_Hills.jpg/960px-Eclairs_with_chocolate_icing_at_Cafe_Blue_Hills.jpg', // Éclair
  'paris brest choux ring praline cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Paris-Brest_IMG_0875.JPG/960px-Paris-Brest_IMG_0875.JPG', // Paris-Brest
  'millefeuille napoleon pastry cream layers': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Mille-feuille_02.jpg/960px-Mille-feuille_02.jpg', // Millefeuille
  'tarte tatin caramel apple upside down tart': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Tarte_Tatin_a_la_Michalak.jpg/960px-Tarte_Tatin_a_la_Michalak.jpg', // Tarte Tatin
  'clafoutis cherry batter pudding french': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Clafoutis_cerises.jpg/960px-Clafoutis_cerises.jpg', // Clafoutis
  'ile flottante floating island meringue custard': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Auberge_Saint-Roch_%C3%AEle_flottante_%C3%A0_la_fraise.JPG/960px-Auberge_Saint-Roch_%C3%AEle_flottante_%C3%A0_la_fraise.JPG', // Île Flottante
  'profiteroles choux cream chocolate sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Profiterole_choc.jpg/960px-Profiterole_choc.jpg', // Profiteroles
  'chocolate mousse french dark rich cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Lafare_-_Bistrot_de_Pays_6.jpg/960px-Lafare_-_Bistrot_de_Pays_6.jpg', // Mousse au Chocolat
  'creme caramel flan custard golden sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Cremecaramel.jpg/960px-Cremecaramel.jpg', // Crème Caramel
  'kir royale champagne blackcurrant cocktail': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Kir_Royal.jpg/960px-Kir_Royal.jpg', // Kir Royale
  'pastis anise drink provence ice glass': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Pastis_005.jpg/960px-Pastis_005.jpg', // Pastis
  'calvados apple brandy normandy glass': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Daron_Calvados_XO.JPG/960px-Daron_Calvados_XO.JPG', // Calvados
  'croissant french pastry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Croissant-newspaper-and-tea.jpg/960px-Croissant-newspaper-and-tea.jpg', // Croissant
  'creme brulee caramel': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Creme_brul%C3%A9e.jpg/960px-Creme_brul%C3%A9e.jpg', // Crème Brûlée
  'ratatouille vegetable french': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Ratatouille_001.jpg/960px-Ratatouille_001.jpg', // Ratatouille
  'coq au vin chicken wine': 'https://upload.wikimedia.org/wikipedia/commons/3/30/Coq_au_vin_rouge.jpg', // Coq au Vin
  'crepes french thin pancake': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Crepes_dsc07085.jpg/960px-Crepes_dsc07085.jpg', // Crêpes
  'boeuf bourguignon beef stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Boeuf_Bourguignon_2022.jpg/960px-Boeuf_Bourguignon_2022.jpg', // Boeuf Bourguignon
  'escargot snails french': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Escargot_at_restaurant_Grill_it%21_Tapiola_Garden.jpg/960px-Escargot_at_restaurant_Grill_it%21_Tapiola_Garden.jpg', // Escargot
  'foie gras pate': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Foie_gras_IMGP2349.jpg/960px-Foie_gras_IMGP2349.jpg', // Foie Gras
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
  { word: 'Frango Assado', file: 'Max\'s Roasted Chicken - Evan Swigart.jpg', author: 'Evan Swigart from Chicago, USA', license: 'CC BY 2.0' },
  { word: 'Fraldinha', file: 'Flap steak.jpg', author: 'Arnold Gatilao', license: 'CC BY 2.0' },
  { word: 'Tutu de Feijão', file: 'Tutu de feijão 27 05 2015 (4).JPG', author: 'DAR7', license: 'CC BY-SA 4.0' },
  { word: 'Arroz com Feijão', file: 'Rice and beans, Hotel in Itatiaia.jpeg', author: 'Henrique Dante de Almeida', license: 'CC BY-SA 3.0' },
  { word: 'Vatapá', file: 'Vatapá.jpg', author: 'Elingunnur', license: 'CC BY 3.0' },
  { word: 'Caldinho de Feijão', file: 'Del Barbiere (4624606821).jpg', author: 'Marcelo Träsel from Porto Alegre, Brasil', license: 'CC BY-SA 2.0' },
  { word: 'Empada', file: 'Empadas de frango Vila Isabel Rio de Janeiro Brasil.jpg', author: 'Eduardo P', license: 'CC BY-SA 3.0' },
  { word: 'Pastel', file: 'Brazilian pastel.jpg', author: 'BuenosAiresPhotographer', license: 'CC BY-SA 2.0' },
  { word: 'Esfirra', file: 'Sfiha2.jpg', author: 'Bazel', license: 'Public domain' },
  { word: 'Tapioca', file: 'Tapioca de trancoso 2.jpg', author: 'Byfreddygutierrez', license: 'CC BY-SA 4.0' },
  { word: 'Mandioca Frita', file: 'Mandioca frita en restaurante de Argentina.jpg', author: 'Horacio Cambeiro', license: 'CC BY-SA 3.0' },
  { word: 'Quindim', file: 'Quindim.jpg', author: 'Leonardo "Leguas" Carvalho', license: 'CC BY-SA 2.5' },
  { word: 'Beijinho', file: 'Beijinho.jpg', author: 'Yardena at English Wikipedia', license: 'Public domain' },
  { word: 'Romeu e Julieta', file: 'Romeo e julieta.jpg', author: 'إيان', license: 'CC BY-SA 4.0' },
  { word: 'Bolo de Rolo', file: 'Bolo de Rolo, doce brasileiro, típico de Pernambuco.jpg', author: 'Guilherme Jófili', license: 'CC BY 2.0' },
  { word: 'Guaraná', file: 'Lata de Guaraná Antarctica.jpg', author: 'Cabeza2000', license: 'CC BY-SA 4.0' },
  { word: 'Cachaça', file: 'Cachaca.JPG', author: 'Tom Tom at German Wikipedia', license: 'CC BY-SA 3.0' },
  { word: 'Suco de Maracujá', file: 'Passion Fruit juice.jpg', author: 'Dr. Chinchu C.', license: 'CC BY-SA 4.0' },
  { word: 'Feijoada', file: 'Feijoada 01.jpg', author: '', license: 'CC BY-SA 3.0' },
  { word: 'Churrasco', file: 'Churrasco00003.jpg', author: 'Leonardo Sakaki', license: 'CC BY-SA 4.0' },
  { word: 'Pão de Queijo', file: 'Cheesebread.jpg', author: 'Murilo manzini', license: 'CC BY-SA 4.0' },
  { word: 'Brigadeiro', file: 'Brigadeiro.jpg', author: 'User Mayra (Maych) on Flickr', license: 'CC BY-SA 2.0' },
  { word: 'Moqueca', file: 'Moqueca.jpg', author: 'BR', license: 'CC BY-SA 4.0' },
  { word: 'Caipirinha', file: 'Caipirinha with lime.jpg', author: 'rawpixel.com', license: 'CC0' },
  { word: 'Açaí Bowl', file: 'Açaí do Pará.jpg', author: 'Túllio F', license: 'CC BY-SA 4.0' },
  { word: 'Coxinha', file: '(2014-11-22) La Donosti - Agudos - Coxinha de Leitoa Romerito Pontes (15870107515).jpg', author: 'Romerito Pontes from São Carlos', license: 'CC BY 2.0' },
  { word: 'Farofa', file: 'Farofa brazil.jpg', author: 'User Carioca', license: 'CC BY-SA 3.0' },
  { word: 'Acarajé', file: 'Acaraje-Baiana.jpg', author: 'Claudia Baiana', license: 'Public domain' },
  { word: 'Bobó de Camarão', file: 'Assis Lima Bobo de Camarãol RioBranco (26992971238).jpg', author: 'MTur Destinos', license: 'Public domain' },
  { word: 'Picanha', file: 'Picanha3.jpg', author: '', license: 'Public domain' },
  { word: 'Tortilla Española', file: 'Tortilla de Patatas (Corte transversal).jpg', author: 'Tamorlan', license: 'CC BY-SA 3.0' },
  { word: 'Fabada Asturiana', file: 'Fabada en cazuela de barro.jpg', author: 'Juan J. Martínez from Valencia, España', license: 'CC BY-SA 2.0' },
  { word: 'Pulpo a la Gallega', file: 'RaciónPulpo.jpg', author: 'Tamorlan', license: 'CC BY-SA 3.0' },
  { word: 'Pan con Tomate', file: 'Pan con Tumaca.jpg', author: 'Javier Lastras from España/Spain', license: 'CC BY 2.0' },
  { word: 'Salmorejo', file: 'Salmorejo cordobes.jpg', author: 'Javier Lastras from España/Spain', license: 'CC BY 2.0' },
  { word: 'Croquetas', file: 'Croquetas Caseras (7068664101).jpg', author: 'Jonathan Pincas from Leon, Spain', license: 'CC BY 2.0' },
  { word: 'Gambas al Ajillo', file: 'Gambas al ajillo.jpg', author: 'Javier Lastras from España/Spain', license: 'CC BY 2.0' },
  { word: 'Manchego', file: 'Manchego.jpg', author: 'Zerohund', license: 'CC BY-SA 3.0' },
  { word: 'Turrón', file: 'Turrón de Alicante (Casa Mira).jpg', author: 'Tamorlan', license: 'CC BY 3.0' },
  { word: 'Crema Catalana', file: 'Food in Catalonia 06.jpg', author: 'Kritzolina', license: 'CC BY-SA 4.0' },
  { word: 'Sangría', file: 'Red Wine Sangria with lemon, lime, apple, and orange served in a glass - Evan Swigart.jpg', author: 'Evan Swigart from Chicago, USA', license: 'CC BY 2.0' },
  { word: 'Cocido Madrileño', file: 'CocidoMadrileño.jpg', author: 'Tnarik', license: 'CC BY-SA 2.0' },
  { word: 'Boquerones', file: 'Boquerones en vinagre-Madrid.jpg', author: 'Tamorlan', license: 'CC BY 3.0' },
  { word: 'Pimientos de Padrón', file: 'Pementos de Padron.jpg', author: 'Luis Miguel Bugallo Sánchez (http://commons.wikimedia.org/wiki/User:Lm', license: 'CC BY-SA 3.0' },
  { word: 'Albóndigas', file: 'Pelotas de carne.jpg', author: 'Juan Emilio Prades Bel', license: 'CC BY-SA 4.0' },
  { word: 'Calamares a la Romana', file: 'Calamares Romana 0984.jpg', author: 'jlastras', license: 'CC BY 2.0' },
  { word: 'Mejillones', file: 'Conserva de mejillones en escabeche (España).jpg', author: 'Juan Emilio Prades Bel', license: 'CC BY-SA 4.0' },
  { word: 'Ancas de Rana', file: 'Frog legs.JPG', author: 'Midori', license: 'CC BY-SA 3.0' },
  { word: 'Pintxos', file: 'TapasenBarcelona.JPG', author: 'Elemaki', license: 'CC BY 3.0' },
  { word: 'Patatas Alioli', file: 'Creïlles amb allioli a un bar del carrer Andrés Lambert, Xàbia.jpg', author: 'Joanbanjo', license: 'CC BY-SA 4.0' },
  { word: 'Paella Valenciana', file: '01 Paella Valenciana original.jpg', author: 'Jan Harenburg', license: 'CC BY-SA 4.0' },
  { word: 'Paella de Marisco', file: 'Seafood paella in Brisbane, Queensland.jpg', author: 'Kgbo', license: 'CC BY-SA 4.0' },
  { word: 'Arroz Negro', file: '14-08-04-barcelona-RalfR-41.jpg', author: 'Ralf Roletschek', license: 'GFDL 1.2' },
  { word: 'Fideuà', file: 'Fideua - xurde.jpg', author: 'Jorge Díaz from Madrid, Spain', license: 'CC BY-SA 2.0' },
  { word: 'Ajo Blanco', file: 'Ajo blanco.jpg', author: 'Popo le Chien', license: 'CC0' },
  { word: 'Bacalao al Pil-Pil', file: 'Bacalao al Pil Pil (Vizcaya).jpg', author: 'jlastras', license: 'CC BY 2.0' },
  { word: 'Almejas a la Marinera', file: 'Almejas a la marinera-2009.jpg', author: 'Tamorlan', license: 'CC BY 3.0' },
  { word: 'Vieiras', file: 'Argopecten irradians.jpg', author: 'Rachael Norris and Marina Freudzon / Mayscallop at en.wikipedia', license: 'Public domain' },
  { word: 'Cochinillo Asado', file: 'Cochinillo asado-Madrid.jpg', author: 'Tamorlan', license: 'CC BY 3.0' },
  { word: 'Cordero Asado', file: 'Cordero asado.JPG', author: 'Gondalf', license: 'Public domain' },
  { word: 'Rabo de Toro', file: 'Rabo de toro-Estofado (01).JPG', author: 'Tamorlan', license: 'CC BY-SA 3.0' },
  { word: 'Pollo al Ajillo', file: 'Pollo al ajillo (Panaderas).jpg', author: 'Tamorlan', license: 'CC BY-SA 3.0' },
  { word: 'Migas', file: 'Migas.PNG', author: 'Nanow jesús madrid 21:40, 6 May 2007 (UTC)', license: 'CC BY-SA 3.0' },
  { word: 'Callos a la Madrileña', file: 'Callos cociendose.jpg', author: 'Javier Lastras from España/Spain', license: 'CC BY 2.0' },
  { word: 'Morcilla', file: 'Morcilla-burgos 2.jpg', author: 'PincasPhoto', license: 'CC BY 2.0' },
  { word: 'Lomo Embuchado', file: 'Big lomito.jpg', author: 'Donpositivo', license: 'CC BY-SA 3.0' },
  { word: 'Queso Cabrales', file: 'Cabrales blue Cheese.jpg', author: 'PDPhoto.org', license: 'Public domain' },
  { word: 'Ensaimada', file: 'Ensaimada 3.jpg', author: '', license: 'Copyrighted free use' },
  { word: 'Torta de Aceite', file: 'Tortas de Aceite.JPG', author: 'Alfonsofvazquez', license: 'CC BY-SA 4.0' },
  { word: 'Polvorón', file: 'Polvorón de Estepa.jpg', author: 'Marianne Perdomo', license: 'CC BY-SA 4.0' },
  { word: 'Arroz con Leche', file: 'Arroz con leche.png', author: 'Eli123seo', license: 'CC BY-SA 4.0' },
  { word: 'Flan', file: 'Crème caramel 2.jpg', author: 'Amanda Coutinho', license: 'CC BY 2.0' },
  { word: 'Tarta de Santiago', file: 'Tarta de Santiago-2009.jpg', author: 'Tamorlan', license: 'CC BY 3.0' },
  { word: 'Leche Frita', file: 'Leche frita.jpg', author: 'https://www.flickr.com/people/deramaenrama/', license: 'CC BY 2.0' },
  { word: 'Tocino de Cielo', file: 'Tocinillos de cielo- (La Mallorquina).jpg', author: 'Tamorlan', license: 'CC BY 3.0' },
  { word: 'Horchata', file: 'Horchata de chufa 2.jpg', author: 'Photocapy', license: 'CC BY-SA 2.0' },
  { word: 'Vermut', file: 'Four bottles of vermouth.jpg', author: 'Kenneth C. Zirkel', license: 'CC BY-SA 4.0' },
  { word: 'Rebujito', file: 'Course -1- Rebujito (cropped).jpg', author: 'City Foodsters', license: 'CC BY 2.0' },
  { word: 'Papas Arrugadas', file: 'Papasarrugadas.jpg', author: 'Fer..', license: 'CC BY 2.0' },
  { word: 'Bienmesabe', file: 'CanaryBienmesabe.jpg', author: 'AnticoMu90', license: 'CC0' },
  { word: 'Gazpacho', file: 'Gazpacho Malagueño con su “picaíto” - Moreno, Playa Burriana (cropped).jpg', author: 'Haydn Blackey', license: 'CC BY-SA 2.0' },
  { word: 'Churros', file: 'Chocolate con churros (27343655726).jpg', author: 'Joy', license: 'CC BY 2.0' },
  { word: 'Jamón Ibérico', file: 'Jamon iberico de bellota 2 (cinco jotas).jpg', author: 'Cantabrucu', license: 'CC0' },
  { word: 'Patatas Bravas', file: 'Patatas bravas madrid.jpg', author: 'Krista', license: 'CC BY 2.0' },
  { word: 'Amatriciana', file: 'Bucatini allamatriciana.jpg', author: 'Popo le Chien', license: 'CC0' },
  { word: 'Gelato', file: 'Gelato ice cream.jpg', author: 'rawpixel', license: 'CC0' },
  { word: 'Focaccia', file: 'Focaccia with Crumb.jpg', author: 'Fred Benenson', license: 'CC BY-SA 4.0' },
  { word: 'Panettone', file: 'Panettone - Nicolettone 2017 - IMG 7092 (31752504105).jpg', author: 'N i c o l a from Fiumicino (Rome), Italy', license: 'CC BY 2.0' },
  { word: 'Carpaccio', file: 'Carpaccio with cheese in Warsaw.jpg', author: 'MichalPL', license: 'CC BY-SA 4.0' },
  { word: 'Saltimbocca', file: 'Saltimbocca 01.jpg', author: 'Arnaud 25', license: 'CC BY-SA 4.0' },
  { word: 'Burrata', file: 'Burrata2.jpg', author: 'Popo le Chien', license: 'CC0' },
  { word: 'Limoncello', file: 'SIMAL limoncello jp.jpg', author: 'claudia', license: 'CC BY-SA 4.0' },
  { word: 'Spaghetti Bolognese', file: 'Quorn Spaghetti Bolognese.jpg', author: 'Quorn Foods Deutschland', license: 'CC BY-SA 4.0' },
  { word: 'Tagliatelle', file: 'Making a better homemade pasta - 16670047286.jpg', author: 'Joy', license: 'CC BY 2.0' },
  { word: 'Penne all\'Arrabbiata', file: 'Penne Arrabbiata.jpg', author: 'Petar Milošević', license: 'CC BY-SA 4.0' },
  { word: 'Aglio e Olio', file: 'Spaghetti di Gragnano e colatura di alici.jpg', author: 'Elga Cappellari', license: 'CC BY-SA 2.0' },
  { word: 'Vongole', file: 'Flickr - cyclonebill - Spaghetti med muslinger.jpg', author: 'cyclonebill', license: 'CC BY-SA 2.0' },
  { word: 'Cacio e Pepe', file: 'Tonnarelli cacio e pepe.jpg', author: 'Camelia.boban', license: 'CC BY-SA 4.0' },
  { word: 'Pappardelle', file: 'Pappardelle.jpg', author: 'Popo le Chien', license: 'CC BY-SA 3.0' },
  { word: 'Orecchiette', file: 'Orecchiette su tavoliere in legno.jpg', author: 'Giuseppe Nigro', license: 'CC BY-SA 4.0' },
  { word: 'Bucatini', file: 'Bucatini.jpg', author: 'Popo le Chien', license: 'CC0' },
  { word: 'Tortellini', file: 'Tortellini Bolognesi.jpg', author: 'Angelo.Muratore', license: 'CC BY-SA 4.0' },
  { word: 'Ravioli', file: 'Ravioli 2020.jpg', author: 'Ramagliolo9', license: 'CC BY-SA 4.0' },
  { word: 'Fettuccine Alfredo', file: 'Fettuccine Alfredo originals.jpg', author: 'Civa61', license: 'CC BY 4.0' },
  { word: 'Pasta e Fagioli', file: 'Pasta e fagioli cannellini.jpg', author: 'Spinoziano', license: 'CC BY-SA 4.0' },
  { word: 'Pizza Margherita', file: 'Neapolitan pizza at Trappica (48701940197).jpg', author: 'Bex Walton from London, England', license: 'CC BY 2.0' },
  { word: 'Pizza Napolitana', file: 'Forno a legna pizza napoletana.jpg', author: 'CDibisceglia', license: 'CC BY-SA 4.0' },
  { word: 'Pizza al Taglio', file: 'Pizza al taglio.jpg', author: 'Shoebill2', license: 'Public domain' },
  { word: 'Calzone', file: 'Calzone Tradition + poivrons.JPG', author: 'Mario56', license: 'CC BY-SA 3.0' },
  { word: 'Antipasto', file: 'Antipasto nell\'isola di Ortigia.jpg', author: 'Herbert Frank', license: 'CC BY 2.0' },
  { word: 'Crostini', file: 'Crostini by Charles Haynes.jpg', author: 'Charles Haynes', license: 'CC BY-SA 2.0' },
  { word: 'Supplì', file: 'Supplì al telefono.jpg', author: 'Krista', license: 'CC BY 2.0' },
  { word: 'Vitello Tonnato', file: 'Vitello tonnato (7169906567).jpg', author: 'cyclonebill from Copenhagen, Denmark', license: 'CC BY-SA 2.0' },
  { word: 'Insalata Caprese', file: 'Caprese-1 (tigher crop).jpg', author: 'Rainer Zenz', license: 'CC BY-SA 3.0' },
  { word: 'Cotoletta Milanese', file: 'Cotoletta alla milanese in milano.jpg', author: 'Vaselineeeeeeee', license: 'CC BY-SA 4.0' },
  { word: 'Osso Buco', file: 'Ossobuco.jpg', author: 'Mogens Engelund', license: 'CC BY-SA 3.0' },
  { word: 'Bollito Misto', file: '20171225 Bollito misto.jpg', author: 'Melancholia~itwiki', license: 'CC0' },
  { word: 'Bistecca Fiorentina', file: 'Bistecca alla fiorentina-01.jpg', author: 'mike packard', license: 'CC BY-SA 2.0' },
  { word: 'Porchetta', file: 'Saveurs 2016 62.jpg', author: 'JJ Georges', license: 'CC BY-SA 4.0' },
  { word: 'Arista di Maiale', file: 'Fusion of traditional dishes, Tuscan roasted pork (arista) with Shiitake mushrooms.jpg', author: 'Albarubescens', license: 'CC BY-SA 4.0' },
  { word: 'Fritto Misto', file: 'Fritto misto di pesce con limone.jpg', author: 'Sergio Conti', license: 'CC BY-SA 2.0' },
  { word: 'Baccalà', file: 'Vicenza, Espressamente, baccala vicentina.jpg', author: 'Palickap', license: 'CC BY-SA 4.0' },
  { word: 'Ribollita', file: 'Ribollita toscana.JPG', author: 'Ithunn', license: 'CC BY-SA 3.0' },
  { word: 'Acquacotta', file: 'Acquacotta.jpg', author: 'Fooding Around', license: 'CC BY 2.0' },
  { word: 'Risotto ai Funghi', file: 'Risotto ai funghi porcini.JPG', author: 'Number55', license: 'CC BY-SA 3.0' },
  { word: 'Risotto Nero', file: 'Risotto al nero di seppia.jpg', author: 'Micaela &amp; Massimo', license: 'CC BY 2.0' },
  { word: 'Grissini', file: 'Soepstengels (3871017999).jpg', author: 'Sander van der Wel from Netherlands', license: 'CC BY-SA 2.0' },
  { word: 'Schiacciata', file: 'Focaccia o schiacciata di patate.jpg', author: 'Rollopack', license: 'CC BY-SA 3.0' },
  { word: 'Piadina', file: 'Piadina.jpg', author: 'Kobako', license: 'CC BY-SA 2.5' },
  { word: 'Parmigiano Reggiano', file: 'Parmigiano-Reggiano at Eataly in Stockholm.jpg', author: 'Sinikka Halme', license: 'CC BY-SA 4.0' },
  { word: 'Mozzarella di Bufala', file: 'Mozzarella di bufala2.jpg', author: 'Popo le Chien', license: 'CC BY-SA 3.0' },
  { word: 'Pecorino Romano', file: 'Pecorino romano cheese.jpg', author: 'Jon Sullivan', license: 'Public domain' },
  { word: 'Gorgonzola', file: 'A Gongonzola from Baci.jpg', author: 'Peachyeung316', license: 'CC BY-SA 4.0' },
  { word: 'Ricotta', file: 'Ricotta fresca.jpg', author: 'it:Lasagnolo9', license: 'CC BY-SA 4.0' },
  { word: 'Taleggio', file: 'Taleggio vecchia lavorazione (3323694182).jpg', author: 'F. D. Richards from Clinton, MI', license: 'CC BY-SA 2.0' },
  { word: 'Sfogliatella', file: 'Sfogliatelle ricce e frolle.jpg', author: 'Saggittarius A', license: 'CC BY-SA 4.0' },
  { word: 'Cassata Siciliana', file: 'Cassatasiciliana.jpg', author: 'Unknown author', license: 'CC BY-SA 4.0' },
  { word: 'Zeppole', file: 'Zeppole di San Giuseppe.jpg', author: 'Lucas81', license: 'CC BY-SA 3.0' },
  { word: 'Granita', file: 'Tris di granite.JPG', author: 'Adriao', license: 'CC BY 3.0' },
  { word: 'Torta della Nonna', file: 'Torta della Nonna.jpg', author: 'Exilexi', license: 'CC BY 4.0' },
  { word: 'Struffoli', file: 'Struffoli2.JPG', author: 'Steve-081', license: 'Public domain' },
  { word: 'Aperol Spritz', file: 'Aperol Spritz aboard Viking Mariella.jpg', author: 'JIP', license: 'CC BY-SA 4.0' },
  { word: 'Negroni', file: 'Negroni served in Vancouver BC.jpg', author: 'Geoff Peters from Vancouver, BC, Canada', license: 'CC BY 2.0' },
  { word: 'Grappa', file: 'A glass of tasty grappa.jpg', author: 'Carsten Tolkmit from Kiel, Germany', license: 'CC BY-SA 2.0' },
  { word: 'Amaro', file: 'ManyAmari.jpg', author: 'Shabbychef at English Wikipedia', license: 'CC BY-SA 3.0' },
  { word: 'Pasta', file: '(Pasta) by David Adam Kess (pic.2).jpg', author: 'David Adam Kess', license: 'CC BY-SA 4.0' },
  { word: 'Carbonara', file: 'Espaguetis carbonara.jpg', author: 'Javier Somoza', license: 'CC BY-SA 4.0' },
  { word: 'Risotto', file: 'Risotto con l\'ossobuco, Editathon Vegnii a vedè se l\'òrghen el gh\'è, Baggio, Milano 01.jpg', author: 'Mattia Luigi Nappi', license: 'CC BY-SA 4.0' },
  { word: 'Tiramisu', file: 'Home-made tiramisu, november 2008.jpg', author: 'procristination', license: 'CC BY 2.0' },
  { word: 'Lasagna', file: 'Meaty Lasagna 8of8 (8736299782).jpg', author: 'Breville USA', license: 'CC BY 2.0' },
  { word: 'Pesto', file: 'BasilPesto.JPG', author: 'Ɱ', license: 'CC BY-SA 3.0' },
  { word: 'Minestrone', file: 'Minestrone soup.jpg', author: 'Katrin Morenz from Aachen, Deutschland', license: 'CC BY-SA 2.0' },
  { word: 'Cannoli', file: 'Cannoli siciliani al Caffè Impero, ad Alcamo.jpg', author: 'Ensahequ', license: 'CC BY-SA 4.0' },
  { word: 'Panna Cotta', file: 'Panna cotta with chocolate mousse.jpg', author: 'Insatiable Munchies', license: 'CC BY 2.0' },
  { word: 'Arancini', file: 'Arancini 002.jpg', author: 'No machine-readable author provided. Gmelfi assumed (based on copyrigh', license: 'Public domain' },
  { word: 'Bruschetta', file: '2014 Bruschetta The Larder Chiang Mai.jpg', author: 'Takeaway', license: 'CC BY-SA 4.0' },
  { word: 'Gnocchi', file: 'Gnocchi di ricotta burro e salvia.jpg', author: 'Paoletta S.', license: 'CC BY 2.0' },
  { word: 'French Onion Soup', file: 'Mmm...onion soup (5344349906).jpg', author: 'jeffreyw', license: 'CC BY 2.0' },
  { word: 'Vichyssoise', file: 'Vichyssoise.jpg', author: 'BocaDorada', license: 'CC BY-SA 2.0' },
  { word: 'Bisque', file: 'Bisque de homard.jpg', author: 'Arnaud 25', license: 'CC BY-SA 4.0' },
  { word: 'Soupe au Pistou', file: 'Pistour-4.JPG', author: '120 / V. Mourre', license: 'CC BY-SA 3.0' },
  { word: 'Pâté', file: 'Étal de charcutier-traiteur.JPG', author: 'DC', license: 'CC BY-SA 3.0' },
  { word: 'Terrine', file: 'La Tuilière - Montloup - Ferme auberge Au pré de mon arbre - Terrine de campagne.jpg', author: 'Romainbehar', license: 'CC0' },
  { word: 'Gougères', file: 'Petites gougères apéritif.jpg', author: 'Jebulon', license: 'CC0' },
  { word: 'Salade Niçoise', file: 'Salade niçoise 001.jpg', author: 'Arnaud 25', license: 'CC BY-SA 4.0' },
  { word: 'Confit de Canard', file: 'MCB-duck-leg-confit.jpg', author: 'en:User:MCB', license: 'CC BY-SA 2.5' },
  { word: 'Cassoulet', file: 'Cassoulet.cuit.jpg', author: 'GD. Guilhem06 21:37, 20 April 2007 (UTC)', license: 'Public domain' },
  { word: 'Pot-au-Feu', file: 'Pot-au-feu2.jpg', author: 'Andre', license: 'CC BY-SA 3.0' },
  { word: 'Blanquette de Veau', file: 'Blanquette de veau à l\'ancienne 04.jpg', author: 'Arnaud 25', license: 'CC BY-SA 4.0' },
  { word: 'Navarin d\'Agneau', file: 'Navarin 02.jpg', author: 'Arnaud 25', license: 'CC BY-SA 4.0' },
  { word: 'Steak Tartare', file: 'Tartare de boeuf charolais 01.jpg', author: 'Arnaud 25', license: 'CC BY-SA 4.0' },
  { word: 'Steak Frites', file: 'Steak frites.jpg', author: 'LWY', license: 'CC BY 2.0' },
  { word: 'Magret de Canard', file: 'Magret de canard 02.jpg', author: 'Arnaud 25', license: 'CC BY-SA 4.0' },
  { word: 'Poulet Rôti', file: 'Max\'s Roasted Chicken - Evan Swigart.jpg', author: 'Evan Swigart from Chicago, USA', license: 'CC BY 2.0' },
  { word: 'Lapin à la Moutarde', file: 'Lapin aux deux moutardes.jpg', author: 'Arnaud 25', license: 'CC0' },
  { word: 'Sole Meunière', file: 'Sole meuniere (4689490702).jpg', author: 'Jay Cross from Berkeley, California, US', license: 'CC BY 2.0' },
  { word: 'Moules Marinières', file: 'Normandy \'10- Saint-Vaast-la-Hougue (4826863803).jpg', author: 'Archangel12', license: 'CC BY 2.0' },
  { word: 'Brandade de Morue', file: 'Brandade5.jpg', author: 'Unknown author', license: 'CC BY-SA 3.0' },
  { word: 'Croque Monsieur', file: 'Croque Monsieur and salad at Paris Bakery.jpg', author: 'Ruth Hartnup', license: 'CC BY 2.0' },
  { word: 'Croque Madame', file: 'Croque-madame 02.jpg', author: 'Arnaud 25', license: 'CC0' },
  { word: 'Omelette', file: 'Omelette-Plate.jpg', author: 'MaedaAkihiko', license: 'CC BY-SA 4.0' },
  { word: 'Salade Lyonnaise', file: 'Salade lyonnaise.JPG', author: 'Arnaud 25', license: 'CC BY-SA 3.0' },
  { word: 'Tarte Flambée', file: 'Tarte flambée alsacienne 514471722.jpg', author: 'Lulu Durand', license: 'CC BY 2.0' },
  { word: 'Quiche Lorraine', file: '54. Quiche lorraine.jpg', author: 'Claude Humbert', license: 'CC BY-SA 4.0' },
  { word: 'Choucroute Garnie', file: 'Choucroute garnie servie au restaurant Stam, à Lyon (mars 2023).jpg', author: 'Sebleouf', license: 'CC BY-SA 4.0' },
  { word: 'Bouillabaisse', file: 'Bouillabaisse 01.jpg', author: 'Arnaud 25', license: 'CC BY-SA 4.0' },
  { word: 'Piperade', file: 'Piperade 01.jpg', author: 'Arnaud 25', license: 'CC BY-SA 4.0' },
  { word: 'Aligot', file: 'Bol d\'aligot.jpg', author: 'Slastic', license: 'Public domain' },
  { word: 'Tartiflette', file: 'Tartiflette.jpg', author: 'Chrisjt', license: 'CC BY-SA 2.0 de' },
  { word: 'Gratin Dauphinois', file: 'Gratin dauphinois.jpg', author: 'Ludovic Péron', license: 'CC BY-SA 3.0' },
  { word: 'Baguette', file: 'Baguettes, Paris, France - panoramio.jpg', author: 'Nick Thweatt', license: 'CC BY-SA 3.0' },
  { word: 'Pain au Chocolat', file: 'Pain au chocolat Luc Viatour.jpg', author: 'Luc Viatour', license: 'CC BY-SA 3.0' },
  { word: 'Brioche', file: 'Brioche Nanterre (mars 2021).jpg', author: 'Benoît Prieur', license: 'CC0' },
  { word: 'Madeleine', file: 'Madeleine 02.JPG', author: 'Un Chausson', license: 'CC BY-SA 4.0' },
  { word: 'Macaron', file: 'Macarons, French made mini cakes.JPG', author: 'Nicolas Halftermeyer', license: 'CC BY-SA 3.0' },
  { word: 'Éclair', file: 'Eclairs with chocolate icing at Cafe Blue Hills.jpg', author: 'georgie_grd', license: 'CC BY-SA 2.0' },
  { word: 'Paris-Brest', file: 'Paris-Brest IMG 0875.JPG', author: 'Deror_avi', license: 'CC BY-SA 4.0' },
  { word: 'Millefeuille', file: 'Mille-feuille 02.jpg', author: 'Arnaud 25', license: 'CC0' },
  { word: 'Tarte Tatin', file: 'Tarte Tatin a la Michalak.jpg', author: 'Shani Evenstein (שני אבנשטיין)', license: 'CC BY-SA 4.0' },
  { word: 'Clafoutis', file: 'Clafoutis cerises.jpg', author: 'Popo le Chien', license: 'CC BY-SA 4.0' },
  { word: 'Île Flottante', file: 'Auberge Saint-Roch île flottante à la fraise.JPG', author: 'Marianne Casamance', license: 'CC BY-SA 4.0' },
  { word: 'Profiteroles', file: 'Profiterole choc.jpg', author: 'Hcrepin', license: 'CC BY-SA 3.0' },
  { word: 'Mousse au Chocolat', file: 'Lafare - Bistrot de Pays 6.jpg', author: 'Marianne Casamance', license: 'CC BY-SA 3.0' },
  { word: 'Crème Caramel', file: 'Cremecaramel.jpg', author: 'Popo le Chien', license: 'CC BY-SA 3.0' },
  { word: 'Kir Royale', file: 'Kir Royal.jpg', author: 'Martin Asche', license: 'CC BY-SA 3.0' },
  { word: 'Pastis', file: 'Pastis 005.jpg', author: 'Arnaud 25', license: 'CC BY-SA 4.0' },
  { word: 'Calvados', file: 'Daron Calvados XO.JPG', author: 'ChickenFalls', license: 'CC BY-SA 3.0' },
  { word: 'Croissant', file: 'Croissant-newspaper-and-tea.jpg', author: 'Petr Kratochvil', license: 'CC0' },
  { word: 'Crème Brûlée', file: 'Creme brulée.jpg', author: 'Arnaud 25', license: 'Public domain' },
  { word: 'Ratatouille', file: 'Ratatouille 001.jpg', author: 'Arnaud 25', license: 'CC BY-SA 4.0' },
  { word: 'Coq au Vin', file: 'Coq au vin rouge.jpg', author: 'stevendepolo', license: 'CC BY 2.0' },
  { word: 'Crêpes', file: 'Crepes dsc07085.jpg', author: 'David Monniaux', license: 'CC BY-SA 3.0' },
  { word: 'Boeuf Bourguignon', file: 'Boeuf Bourguignon 2022.jpg', author: 'ZhengZhou', license: 'CC BY-SA 4.0' },
  { word: 'Escargot', file: 'Escargot at restaurant Grill it! Tapiola Garden.jpg', author: 'JIP', license: 'CC BY-SA 4.0' },
  { word: 'Foie Gras', file: 'Foie gras IMGP2349.jpg', author: 'Nikodem Nijaki', license: 'CC BY-SA 3.0' },
];
