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
];
