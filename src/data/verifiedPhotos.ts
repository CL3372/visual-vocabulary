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
  'okonomiyaki japanese savory pancake': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Okonomiyaki_001.jpg/960px-Okonomiyaki_001.jpg', // Okonomiyaki
  'takoyaki octopus balls japanese street food': 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Takoyaki_by_yomi955.jpg', // Takoyaki
  'gyoza japanese pan fried dumplings': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Gyoza_%2852769973678%29.jpg/960px-Gyoza_%2852769973678%29.jpg', // Gyoza
  'onigiri japanese rice ball nori': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Onigiri_002.jpg/960px-Onigiri_002.jpg', // Onigiri
  'sukiyaki japanese hot pot beef': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Sukiyaki_01.jpg/960px-Sukiyaki_01.jpg', // Sukiyaki
  'shabu shabu japanese hot pot thin meat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Shabu-shabu-01.jpg/960px-Shabu-shabu-01.jpg', // Shabu-Shabu
  'natto fermented soybeans japanese': 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Natto_mixed.jpg', // Natto
  'mochi japanese rice cake sweet': 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Rice_Cake.jpg', // Mochi
  'yakisoba japanese fried noodles': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Yakisoba_-_01.jpg/960px-Yakisoba_-_01.jpg', // Yakisoba
  'tonkotsu ramen pork broth egg noodles': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Tonkotsu_ramen_in_Tokyo.jpg/960px-Tonkotsu_ramen_in_Tokyo.jpg', // Tonkotsu Ramen
  'matcha green tea powder japanese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Matcha_Scoop.jpg/960px-Matcha_Scoop.jpg', // Matcha
  'sake japanese rice wine bottle': 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Sake_set.jpg', // Sake
  'soba buckwheat noodles japanese cold': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Mori-soba_002.jpg/960px-Mori-soba_002.jpg', // Soba
  'nigiri sushi rice fish hand pressed': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Rokusanen_Wakayama_Japan07s5.jpg/960px-Rokusanen_Wakayama_Japan07s5.jpg', // Nigiri
  'maki sushi roll nori seaweed rice cut': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Makizushi2.jpg/960px-Makizushi2.jpg', // Maki
  'temaki hand roll cone sushi nori': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Spider_hand_roll.jpg/960px-Spider_hand_roll.jpg', // Temaki
  'chirashi scattered sushi bowl rice fish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Chirashi_zushi_by_Marshall_Astor_in_Gardena%2C_CA.jpg/960px-Chirashi_zushi_by_Marshall_Astor_in_Gardena%2C_CA.jpg', // Chirashi
  'shio ramen salt clear broth noodle': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Japanese_Salt_flavor_Sapporo_Ramen.JPG/960px-Japanese_Salt_flavor_Sapporo_Ramen.JPG', // Shio Ramen
  'shoyu ramen soy sauce brown broth tokyo': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Shoyu_Ramen%EF%BC%88Tokyo_Ramen%EF%BC%89_-_01.jpg/960px-Shoyu_Ramen%EF%BC%88Tokyo_Ramen%EF%BC%89_-_01.jpg', // Shoyu Ramen
  'miso ramen sapporo rich cloudy broth': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/%E3%82%89%E3%83%BC%E3%82%81%E3%82%93%E5%91%B3%E5%99%8C%EF%BC%88%E5%A4%A7%E5%B3%B6%EF%BC%89.jpg/960px-%E3%82%89%E3%83%BC%E3%82%81%E3%82%93%E5%91%B3%E5%99%8C%EF%BC%88%E5%A4%A7%E5%B3%B6%EF%BC%89.jpg', // Miso Ramen
  'tsukemen dipping ramen noodles separate broth': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Tsuke-men_001.jpg/960px-Tsuke-men_001.jpg', // Tsukemen
  'yakitori grilled chicken skewers charcoal japanese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Typical_yakitori_001.jpg/960px-Typical_yakitori_001.jpg', // Yakitori
  'kushiyaki japanese skewers grilled meat vegetables': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Cooking_yakitori.jpg/960px-Cooking_yakitori.jpg', // Kushiyaki
  'yakiniku japanese bbq meat grill table': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Yakiniku_002.jpg/960px-Yakiniku_002.jpg', // Yakiniku
  'robatayaki hearth grilled japanese seafood vegetables': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Robatayaki.jpg/960px-Robatayaki.jpg', // Robatayaki
  'somen thin white noodles cold dipping japanese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Somen_is_wonderfully_refreshing_summer_noodle_in_Japan.jpg/960px-Somen_is_wonderfully_refreshing_summer_noodle_in_Japan.jpg', // Somen
  'hiyashi chuka cold ramen sesame summer toppings': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Hiyashi_chuka_002.jpg/960px-Hiyashi_chuka_002.jpg', // Hiyashi Chuka
  'donburi rice bowl toppings japanese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Donburi_Rice_bowl_of_Chicken_Teriyaki_with_Tomato.jpg/960px-Donburi_Rice_bowl_of_Chicken_Teriyaki_with_Tomato.jpg', // Donburi
  'oyakodon chicken egg rice bowl japanese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Oyakodon_003.jpg/960px-Oyakodon_003.jpg', // Oyakodon
  'katsudon pork cutlet egg rice bowl japanese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Katsudon_001.jpg/960px-Katsudon_001.jpg', // Katsudon
  'ochazuke tea rice bowl japanese green tea': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/%E3%81%8A%E8%8C%B6%E6%BC%AC%E3%81%91%E3%81%8A%E6%96%B0%E9%A6%99%E4%BB%98%E3%81%8D01.jpg/960px-%E3%81%8A%E8%8C%B6%E6%BC%AC%E3%81%91%E3%81%8A%E6%96%B0%E9%A6%99%E4%BB%98%E3%81%8D01.jpg', // Ochazuke
  'korokke japanese potato croquette fried': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Potato_croquettes_001.jpg/960px-Potato_croquettes_001.jpg', // Korokke
  'ebi furai fried shrimp prawns panko japanese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Ebi_Fry_003.jpg/960px-Ebi_Fry_003.jpg', // Ebi Furai
  'agedashi tofu fried silken dashi broth': 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Agedashi_tofu%2C_fried_tofu_with_broth.jpg', // Agedashi Tofu
  'nabe japanese hot pot winter communal': 'https://upload.wikimedia.org/wikipedia/commons/5/50/Cookingsukiyaki.jpg', // Nabe
  'oden japanese winter stew daikon fish cake': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Oden_001.jpg/960px-Oden_001.jpg', // Oden
  'chawanmushi steamed egg custard japanese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Chawan-mushi.JPG/960px-Chawan-mushi.JPG', // Chawanmushi
  'tamagoyaki rolled omelette japanese sweet egg': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/%E9%B3%A5%E7%84%BC%E3%81%8D%E5%B1%85%E9%85%92%E5%B1%8B_%2839394233682%29.jpg/960px-%E9%B3%A5%E7%84%BC%E3%81%8D%E5%B1%85%E9%85%92%E5%B1%8B_%2839394233682%29.jpg', // Tamagoyaki
  'tamago gohan raw egg rice japanese breakfast': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Tamagokake-gohan_001.jpg/960px-Tamagokake-gohan_001.jpg', // Tamago Gohan
  'taiyaki fish shaped waffle red bean japanese street food': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Taiyaki_003.jpg/960px-Taiyaki_003.jpg', // Taiyaki
  'dorayaki red bean pancake sandwich japanese sweet': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Dorayaki_001_%283%29.jpg/960px-Dorayaki_001_%283%29.jpg', // Dorayaki
  'karaage fried chicken japanese crispy lemon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Chicken_karaage_003.jpg/960px-Chicken_karaage_003.jpg', // Karaage
  'tsukemono japanese pickles colourful assorted': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Nukazuke.jpg/960px-Nukazuke.jpg', // Tsukemono
  'umeboshi pickled plum japanese sour red': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Umeboshi_20101209_c.jpg/960px-Umeboshi_20101209_c.jpg', // Umeboshi
  'miso paste fermented soybean japanese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Miso_paste_by_wilbanks_in_Nishiki_Ichiba%2C_Kyoto.jpg/960px-Miso_paste_by_wilbanks_in_Nishiki_Ichiba%2C_Kyoto.jpg', // Miso
  'wasabi fresh green paste japanese sushi': 'https://upload.wikimedia.org/wikipedia/commons/3/3c/WasabiOnOroshigane.jpg', // Wasabi
  'dashi broth kombu bonito stock japanese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/JapaneseBouillon_Dashi.jpg/960px-JapaneseBouillon_Dashi.jpg', // Dashi
  'kaiseki japanese fine dining multi course': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Jisaku_Kaiseki_Ryori_01.jpg/960px-Jisaku_Kaiseki_Ryori_01.jpg', // Kaiseki
  'wagyu beef marbled steak japanese premium': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Sliced_Matsusaka_wagyu_beef.jpg/960px-Sliced_Matsusaka_wagyu_beef.jpg', // Wagyu
  'anmitsu agar jelly bean paste fruit japanese': 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Anmitsu_in_Isezakicho.jpg', // Anmitsu
  'kakigori shaved ice syrup japanese summer': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Macha_kakigori_snow_cone.jpg/960px-Macha_kakigori_snow_cone.jpg', // Kakigori
  'wagashi traditional japanese sweets seasonal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/%E5%92%8C%E8%8F%93%E5%AD%90_%285376984019%29.jpg/960px-%E5%92%8C%E8%8F%93%E5%AD%90_%285376984019%29.jpg', // Wagashi
  'daifuku mochi rice cake red bean filling': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Daifuku_001.jpg/960px-Daifuku_001.jpg', // Daifuku
  'matcha latte green tea milk frothy cup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Matcha_tea_art.jpg/960px-Matcha_tea_art.jpg', // Matcha Latte
  'amazake sweet rice drink japanese winter': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Amazake_by_emily_harbour_in_july.jpg/960px-Amazake_by_emily_harbour_in_july.jpg', // Amazake
  'umeshu plum wine japanese sweet liqueur': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Jisaku_Umeshu_with_ume.jpg/960px-Jisaku_Umeshu_with_ume.jpg', // Umeshu
  'edamame soybeans boiled salted japanese izakaya': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Edamame_by_Zesmerelda_in_Chicago.jpg/960px-Edamame_by_Zesmerelda_in_Chicago.jpg', // Edamame
  'hiyayakko cold tofu ginger soy bonito japanese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Hiya-yakko_002.jpg/960px-Hiya-yakko_002.jpg', // Hiyayakko
  'kaisen don seafood sashimi rice bowl colourful': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Kaisendon.jpg/960px-Kaisendon.jpg', // Kaisen Don
  'natto sticky fermented soybeans rice japanese breakfast': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Natto_gohan_in_Kochi.jpg/960px-Natto_gohan_in_Kochi.jpg', // Natto Gohan
  'japanese curry rice karē raisu thick mild': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Beef_curry_rice_003.jpg/960px-Beef_curry_rice_003.jpg', // Kare Raisu
  'sushi japanese roll': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Various_sushi%2C_beautiful_October_night_at_midnight.jpg/960px-Various_sushi%2C_beautiful_October_night_at_midnight.jpg', // Sushi
  'ramen noodle soup japanese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Tonkotsu_Ramen_-_Goemon_Ramen_Bar_2023-06-06.jpg/960px-Tonkotsu_Ramen_-_Goemon_Ramen_Bar_2023-06-06.jpg', // Ramen
  'tempura fried battered': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Tempurainjapan-ikebukuro-dec312007.jpg/960px-Tempurainjapan-ikebukuro-dec312007.jpg', // Tempura
  'sashimi raw fish salmon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/241109_Shigaraki_ware_Koga_Shiga_pref_Japan01s3.jpg/960px-241109_Shigaraki_ware_Koga_Shiga_pref_Japan01s3.jpg', // Sashimi
  'miso soup japanese tofu': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Miso_Soup_001.jpg/960px-Miso_Soup_001.jpg', // Miso Soup
  'udon noodle soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Bowl_of_Kitsune_Udon.jpg/960px-Bowl_of_Kitsune_Udon.jpg', // Udon
  'tonkatsu pork cutlet': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Tonkatsu_by_ayustety_in_Tokyo.jpg/960px-Tonkatsu_by_ayustety_in_Tokyo.jpg', // Tonkatsu
  'teriyaki chicken glaze': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Teriyaki_003.jpg/960px-Teriyaki_003.jpg', // Teriyaki
  'ponzu citrus soy sauce japanese dipping': '', // Ponzu — no trustworthy photo yet
  'dosa south indian crispy crepe': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Masala_dosa_01.jpg/960px-Masala_dosa_01.jpg', // Dosa
  'idli steamed rice cake south indian': 'https://upload.wikimedia.org/wikipedia/commons/1/11/Idli_Sambar.JPG', // Idli
  'chana masala chickpea curry indian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Chana_masala.jpg/960px-Chana_masala.jpg', // Chana Masala
  'aloo gobi potato cauliflower indian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Aloo_gobi.jpg/960px-Aloo_gobi.jpg', // Aloo Gobi
  'tandoori chicken red spiced grilled clay oven': 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Chickentandoori.jpg', // Tandoori Chicken
  'rasam south indian pepper soup thin': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Rasam.JPG/960px-Rasam.JPG', // Rasam
  'khichdi indian rice lentil porridge': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Dall_Khichdi.jpg/960px-Dall_Khichdi.jpg', // Khichdi
  'gulab jamun indian syrup sweet balls': 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Gulab-jamun-wallpaper-1.jpg', // Gulab Jamun
  'raita yogurt cucumber indian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Cucumber-raita.jpg/960px-Cucumber-raita.jpg', // Raita
  'lassi indian yogurt drink mango': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Salt_lassi.jpg/960px-Salt_lassi.jpg', // Lassi
  'malai kofta paneer balls cream sauce indian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/MalaiKofta.jpg/960px-MalaiKofta.jpg', // Malai Kofta
  'puri indian fried bread puffed': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Fluffy_Poori_%28cropped%29.JPG/960px-Fluffy_Poori_%28cropped%29.JPG', // Puri
  'rogan josh kashmiri lamb curry red': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Rogan_Josh_Kashmiri.jpg/960px-Rogan_Josh_Kashmiri.jpg', // Rogan Josh
  'palak paneer spinach cheese curry green indian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Palakpaneer_Rayagada_Odisha_0009.jpg/960px-Palakpaneer_Rayagada_Odisha_0009.jpg', // Palak Paneer
  'vindaloo goan pork curry hot fiery red': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Beef_Vindaloo_-_Chilli_Mama%2C_Chadstone_%283014236693%29.jpg/960px-Beef_Vindaloo_-_Chilli_Mama%2C_Chadstone_%283014236693%29.jpg', // Vindaloo
  'saag mustard greens punjabi curry winter': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Makki_di_Roti_Te_Sarson_Da_Saag.jpg/960px-Makki_di_Roti_Te_Sarson_Da_Saag.jpg', // Saag
  'korma mild creamy curry yogurt almonds': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Chicken_White_Qorma_%28Korma%29.JPG/960px-Chicken_White_Qorma_%28Korma%29.JPG', // Korma
  'dhansak parsi lentil meat curry caramelised': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Dhansak.JPG/960px-Dhansak.JPG', // Dhansak
  'fish curry coconut milk south indian coastal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Meen_curry_2.JPG/960px-Meen_curry_2.JPG', // Fish Curry
  'roti chapati whole wheat flatbread indian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/2020-05-08_19_34_28_Chapati_being_made_in_a_pan_in_the_Franklin_Farm_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg/960px-2020-05-08_19_34_28_Chapati_being_made_in_a_pan_in_the_Franklin_Farm_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg', // Roti
  'paratha layered flatbread butter ghee flaky': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Triangle_paratha_%28cropped%29.JPG/960px-Triangle_paratha_%28cropped%29.JPG', // Paratha
  'bhatura deep fried leavened bread puffed': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Bikaner_chole_bhature.jpg/960px-Bikaner_chole_bhature.jpg', // Bhatura
  'appam kerala rice pancake lacy coconut': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Appam_-_%E0%AE%85%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AE%AE%E0%AF%8D.jpg/960px-Appam_-_%E0%AE%85%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AE%AE%E0%AF%8D.jpg', // Appam
  'pulao pilaf rice spices vegetables indian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/VEGETABLE_PULAO_~_An_Indian_cuisine_made_from_fried_rice_mixed_with_fried_vegetables.jpg/960px-VEGETABLE_PULAO_~_An_Indian_cuisine_made_from_fried_rice_mixed_with_fried_vegetables.jpg', // Pulao
  'hyderabadi biryani dum rice lamb saffron': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/960px-Hyderabadi_Chicken_Biryani.jpg', // Hyderabadi Biryani
  'pongal south indian rice lentil pepper ghee': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Ven_pongal_with_sambar_and_chutney.jpg/960px-Ven_pongal_with_sambar_and_chutney.jpg', // Pongal
  'pani puri golgappa hollow crispy ball tamarind': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Pani_Puri1.JPG/960px-Pani_Puri1.JPG', // Pani Puri
  'bhel puri mumbai street food puffed rice chutney': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Behael_Puri_%286105489342%29.jpg/960px-Behael_Puri_%286105489342%29.jpg', // Bhel Puri
  'vada pav mumbai potato fritter bread street food': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Vada_Pav-Indian_street_food.JPG/960px-Vada_Pav-Indian_street_food.JPG', // Vada Pav
  'pakora fritters onion vegetable battered fried': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Onion_pakora_-_a.jpg/960px-Onion_pakora_-_a.jpg', // Pakora
  'aloo tikki potato patty fried chutney chaat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Aloo_Tikki_served_with_chutneys.jpg/960px-Aloo_Tikki_served_with_chutneys.jpg', // Aloo Tikki
  'chaat street food tangy spicy sweet tamarind': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Dahi_puri%2C_Doi_phuchka.jpg/960px-Dahi_puri%2C_Doi_phuchka.jpg', // Chaat
  'uttapam thick dosa onion tomato south indian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Mini_Uttappam.jpg/960px-Mini_Uttappam.jpg', // Uttapam
  'medu vada south indian lentil doughnut sambar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Medu_Vada.JPG/960px-Medu_Vada.JPG', // Vada
  'sambar south indian lentil vegetable soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Pumpkin_sambar.JPG/960px-Pumpkin_sambar.JPG', // Sambar
  'avial kerala mixed vegetables coconut yoghurt': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Ayiyal.jpg/960px-Ayiyal.jpg', // Avial
  'kerala fish molee coconut milk curry yellow mild': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Fish_Moilee_Kerala_Style_%28aka_KeralaFish_Molly%29.JPG/960px-Fish_Moilee_Kerala_Style_%28aka_KeralaFish_Molly%29.JPG', // Kerala Fish Molee
  'seekh kebab minced meat skewer tandoor indian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Pakistani_Food_Beef_Kabobs.jpg/960px-Pakistani_Food_Beef_Kabobs.jpg', // Seekh Kebab
  'paneer tikka marinated cheese grilled tandoor': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Paneer_tikka.jpg/960px-Paneer_tikka.jpg', // Paneer Tikka
  'indian kebab galawat lucknow melt tandoor': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Tunday_Kebabs.jpg/960px-Tunday_Kebabs.jpg', // Kebab
  'dal makhani black lentil butter cream punjabi': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Punjabi_style_Dal_Makhani.jpg/960px-Punjabi_style_Dal_Makhani.jpg', // Dal Makhani
  'dal tadka yellow lentil tempered cumin ghee': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Dal_Tadka-Delhi.jpg/960px-Dal_Tadka-Delhi.jpg', // Dal Tadka
  'rajma red kidney bean curry north indian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Rajma_Masala_%2832081557778%29.jpg/960px-Rajma_Masala_%2832081557778%29.jpg', // Rajma
  'baingan bharta roasted eggplant mashed spiced': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Baigan_Bharta_from_Nagpur.JPG/960px-Baigan_Bharta_from_Nagpur.JPG', // Baingan Bharta
  'paneer butter masala orange curry cheese creamy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Shahi_panner.jpg/960px-Shahi_panner.jpg', // Paneer Butter Masala
  'kheer rice pudding cardamom saffron indian sweet': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Kheer.jpg/960px-Kheer.jpg', // Kheer
  'halwa semolina carrot sweet dessert indian': 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Cuisine_%28268%29_44.jpg', // Halwa
  'jalebi orange spiral fried sweet indian street food': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Basavanagudi_Kadalekai_Parishe_%282025%29_Bangalore_%2886%29.jpg/960px-Basavanagudi_Kadalekai_Parishe_%282025%29_Bangalore_%2886%29.jpg', // Jalebi
  'rasgulla bengali cheese ball syrup white soft': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Rasgulla.jpg/960px-Rasgulla.jpg', // Rasgulla
  'kulfi indian ice cream pistachio cardamom stick': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Kulfi_5.jpg/960px-Kulfi_5.jpg', // Kulfi
  'masala chai spiced milk tea india ginger': 'https://upload.wikimedia.org/wikipedia/commons/8/89/Chai_In_Sakora.jpg', // Masala Chai
  'nimbu pani indian lemonade salt cumin': 'https://upload.wikimedia.org/wikipedia/commons/8/81/Nimbu_pani.JPG', // Nimbu Pani
  'thandai holi milk drink rose nuts spiced': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Thandai_%28Spiced_Indian_Milk_Drink%29.JPG/960px-Thandai_%28Spiced_Indian_Milk_Drink%29.JPG', // Thandai
  'chutney green mint coriander tamarind indian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Chutneykarnataka.jpg/960px-Chutneykarnataka.jpg', // Chutney
  'achar indian pickle mango mustard oil spiced': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Chilli_pickle_in_a_plate_2.jpg/960px-Chilli_pickle_in_a_plate_2.jpg', // Pickle (Achar)
  'curry indian spicy sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Taj_Mahal_-_Lamb_Curry_Madras.jpg/960px-Taj_Mahal_-_Lamb_Curry_Madras.jpg', // Curry
  'samosa fried indian pastry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Samosas%2C_snack_food_at_Wikipedia%27s_16th_Birthday_celebration_in_Chittagong_%2801%29.jpg/960px-Samosas%2C_snack_food_at_Wikipedia%27s_16th_Birthday_celebration_in_Chittagong_%2801%29.jpg', // Samosa
  'biryani indian rice spiced': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/960px-%22Hyderabadi_Dum_Biryani%22.jpg', // Biryani
  'naan bread indian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Annapurna_Naan.jpg/960px-Annapurna_Naan.jpg', // Naan
  'butter chicken tikka masala': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg/960px-Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg', // Butter Chicken
  'dal lentil soup indian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Daal_after_Tadka_Pulse_Soup_India.jpg/960px-Daal_after_Tadka_Pulse_Soup_India.jpg', // Dal
  'xiao long bao soup dumplings chinese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/A_Xiaolongbao_from_The_Modern_Shanghai.jpg/960px-A_Xiaolongbao_from_The_Modern_Shanghai.jpg', // Xiao Long Bao
  'mapo tofu sichuan spicy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Chen_Mapo_Tofu.jpg/960px-Chen_Mapo_Tofu.jpg', // Mapo Tofu
  'char siu chinese bbq pork red': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Char_siu_pieces.jpg/960px-Char_siu_pieces.jpg', // Char Siu
  'wonton soup chinese dumplings broth': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/HK_Sai_Ying_Pun_Centre_Street_%E9%9B%B2%E5%90%9E_Wonton_noodle_July-2012.JPG/960px-HK_Sai_Ying_Pun_Centre_Street_%E9%9B%B2%E5%90%9E_Wonton_noodle_July-2012.JPG', // Wonton Soup
  'congee rice porridge chinese breakfast': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Chinese_rice_congee.jpg/960px-Chinese_rice_congee.jpg', // Congee
  'dan dan noodles sichuan sesame spicy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Dan-dan_noodles%2C_Shanghai.jpg/960px-Dan-dan_noodles%2C_Shanghai.jpg', // Dan Dan Noodles
  'chow mein stir fried noodles chinese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Homemade_Chow_mein_with_shrimps_and_meat_with_a_choy_and_Choung.jpg/960px-Homemade_Chow_mein_with_shrimps_and_meat_with_a_choy_and_Choung.jpg', // Chow Mein
  'fried rice chinese egg wok': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Chinese_egg_fried_rice.jpg/960px-Chinese_egg_fried_rice.jpg', // Fried Rice
  'twice cooked pork chinese sichuan': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Twice_cooked_pork%2C_Jia_Yan%2C_5_rue_Humblot%2C_Paris_003.jpg/960px-Twice_cooked_pork%2C_Jia_Yan%2C_5_rue_Humblot%2C_Paris_003.jpg', // Twice Cooked Pork
  'lions head chinese pork meatballs': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/%E7%8B%AE%E5%AD%90%E6%A5%BC%E7%8B%AE%E5%AD%90%E5%A4%B4.jpg/960px-%E7%8B%AE%E5%AD%90%E6%A5%BC%E7%8B%AE%E5%AD%90%E5%A4%B4.jpg', // Lion\'s Head
  'steamed fish chinese ginger soy sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Ginger_Scallion_Red_Perch_%2850-366%29_%2825058329532%29.jpg/960px-Ginger_Scallion_Red_Perch_%2850-366%29_%2825058329532%29.jpg', // Steamed Fish
  'tea eggs chinese marbled brown': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Tea_eggs_1.jpg/960px-Tea_eggs_1.jpg', // Tea Eggs
  'zongzi sticky rice dumpling bamboo leaves': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Zongzi.jpg/960px-Zongzi.jpg', // Zongzi
  'har gow prawn dumpling dim sum steamed': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Steamed_prawn_dumplings.jpg/960px-Steamed_prawn_dumplings.jpg', // Har Gow
  'siu mai open topped pork prawn dim sum': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Yellow_dim_sum_in_steamer_basket.jpg/960px-Yellow_dim_sum_in_steamer_basket.jpg', // Siu Mai
  'cheung fun rice noodle roll dim sum soy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/A_Steam_White_Rice_Noodle_Rolls_from_KC_Chinese_Restaurant.jpg/960px-A_Steam_White_Rice_Noodle_Rolls_from_KC_Chinese_Restaurant.jpg', // Cheung Fun
  'turnip cake lo bak go dim sum pan fried': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/%E9%A6%99%E7%85%8E%E8%98%BF%E8%94%94%E7%B3%95_%E2%80%9CFried_Turnip_Cake%E2%80%9D%2C_%E5%88%A9%E8%8B%91%E9%85%92%E5%AE%B6%E5%8D%88%E5%B8%82%E9%BB%9E%E5%BF%83_Lei_Garden_Lunchtime_Dim_Sum_SML.20120925.G12.00418_%288085981921%29.jpg/960px-%E9%A6%99%E7%85%8E%E8%98%BF%E8%94%94%E7%B3%95_%E2%80%9CFried_Turnip_Cake%E2%80%9D%2C_%E5%88%A9%E8%8B%91%E9%85%92%E5%AE%B6%E5%8D%88%E5%B8%82%E9%BB%9E%E5%BF%83_Lei_Garden_Lunchtime_Dim_Sum_SML.20120925.G12.00418_%288085981921%29.jpg', // Turnip Cake
  'claypot rice chicken sausage cantonese crispy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Claypot_Chicken_Rice%2C_Singapore.JPG/960px-Claypot_Chicken_Rice%2C_Singapore.JPG', // Claypot Rice
  'cantonese roast goose hong kong crispy skin': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Cantonese_roast_goose_served_in_Guangzhou%2C_China%2C_June_2026.jpg/960px-Cantonese_roast_goose_served_in_Guangzhou%2C_China%2C_June_2026.jpg', // Roast Goose
  'sichuan hot pot mala spicy broth bubbling': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Hot_Pot.jpg/960px-Hot_Pot.jpg', // Sichuan Hot Pot
  'kung pao chicken sichuan peanuts dried chili': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Kung-pao-shanghai.jpg/960px-Kung-pao-shanghai.jpg', // Kung Pao Chicken
  'yu xiang qiezi sichuan eggplant garlic sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Qiezi.jpg/960px-Qiezi.jpg', // Yu Xiang Qiezi
  'shanghai hairy crab autumn steamed roe': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Roe_inside_steamed_female_hairy_crab.jpg/960px-Roe_inside_steamed_female_hairy_crab.jpg', // Shanghai Hairy Crab
  'hong shao rou red braised pork belly soy star anise': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Red_braised_pork_%2820141106191221%29.JPG/960px-Red_braised_pork_%2820141106191221%29.JPG', // Red Braised Pork
  'sheng jian bao pan fried pork bun crispy bottom': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Sheng_Jian_Bao_on_a_pan.jpg/960px-Sheng_Jian_Bao_on_a_pan.jpg', // Sheng Jian Bao
  'yangzhou fried rice egg prawn ham colourful': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Chinese_fried_rice_by_stu_spivack_in_Cleveland%2C_OH.jpg/960px-Chinese_fried_rice_by_stu_spivack_in_Cleveland%2C_OH.jpg', // Yangzhou Fried Rice
  'zhajiangmian beijing noodles minced pork fermented bean': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Billyzhajiang1.jpg/960px-Billyzhajiang1.jpg', // Zhajiangmian
  'jiaozi chinese dumplings pan fried boiled': 'https://upload.wikimedia.org/wikipedia/commons/8/88/%E5%8F%B0%E7%81%A3%E5%8D%97%E6%8A%95%E8%8D%89%E5%B1%AF%E6%B0%B4%E9%A4%83Nantou%2C_Taiwan_Caotun_dumplings.jpg', // Jiaozi
  'yangrou chuanr lamb skewer beijing night market cumin': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Spicy_lamb_skewers_%40_Tian_Tian_Wang_%40_Paris_%2834591424026%29.jpg/960px-Spicy_lamb_skewers_%40_Tian_Tian_Wang_%40_Paris_%2834591424026%29.jpg', // Lamb Skewer
  'fo tiao qiang buddha jumps wall seafood soup luxury': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Buddha_jumps_over_the_wall_at_Jingrong_%2820161203135907%29.jpg/960px-Buddha_jumps_over_the_wall_at_Jingrong_%2820161203135907%29.jpg', // Buddha Jumps Over the Wall
  'salt baked chicken hakka cantonese whole golden': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Salt_baked_chicken_-_San_Francisco%2C_CA.jpg/960px-Salt_baked_chicken_-_San_Francisco%2C_CA.jpg', // Salt Baked Chicken
  'lanzhou beef noodle hand pulled broth china': 'https://upload.wikimedia.org/wikipedia/commons/c/c9/%E8%98%AD%E5%B7%9E%E7%89%9B%E8%82%89%E6%8B%89%E9%BA%BA.jpg', // Lanzhou Beef Noodle
  'guilin rice noodles pork broth guangxi china': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/%E6%A1%82%E6%9E%97%E7%B1%B3%E7%B2%89%28Guilin_Rice_Noodle_%29.jpg/960px-%E6%A1%82%E6%9E%97%E7%B1%B3%E7%B2%89%28Guilin_Rice_Noodle_%29.jpg', // Guilin Rice Noodles
  'tang yuan glutinous rice ball soup black sesame': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Wufangzhai_Tangyuan_in_Wuhan.jpg/960px-Wufangzhai_Tangyuan_in_Wuhan.jpg', // Tang Yuan
  'chinese egg tart custard pastry hong kong': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/HK_SSP_%E9%95%B7%E6%B2%99%E7%81%A3_Cheung_Sha_Wan_%E6%B7%B1%E7%9B%9B%E8%B7%AF_Sham_Shing_Road_%E6%B3%93%E6%99%AF%E6%BB%99%E5%95%86%E5%A0%B4_Banyan_Mall_shop_%E8%9B%8B%E6%92%BB%E7%8E%8B_King_Bakery_Studio_December_2019_SS2_egg_tarts.jpg/960px-HK_SSP_%E9%95%B7%E6%B2%99%E7%81%A3_Cheung_Sha_Wan_%E6%B7%B1%E7%9B%9B%E8%B7%AF_Sham_Shing_Road_%E6%B3%93%E6%99%AF%E6%BB%99%E5%95%86%E5%A0%B4_Banyan_Mall_shop_%E8%9B%8B%E6%92%BB%E7%8E%8B_King_Bakery_Studio_December_2019_SS2_egg_tarts.jpg', // Egg Tart
  'tanghulu candied hawthorn skewer street food china': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/TangHuLu.JPG/960px-TangHuLu.JPG', // Tanghulu
  'bubble tea boba milk tea tapioca pearls taiwanese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Pearl_Milk_Tea_in_Chun_Shui_Tang.jpg/960px-Pearl_Milk_Tea_in_Chun_Shui_Tang.jpg', // Bubble Tea
  'dim sum chinese dumplings': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Chinese_DimSum_%289023590541%29.jpg/960px-Chinese_DimSum_%289023590541%29.jpg', // Dim Sum
  'peking duck crispy beijing': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Peking_Duck%2C_2014_%2802%29.jpg/960px-Peking_Duck%2C_2014_%2802%29.jpg', // Peking Duck
  'spring rolls chinese fried': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Spring_Rolls_%283357696061%29.jpg/960px-Spring_Rolls_%283357696061%29.jpg', // Spring Rolls
  'mole negro oaxacan dark chili chocolate sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Mole_negro_de_Oaxaca_con_arroz.jpg/960px-Mole_negro_de_Oaxaca_con_arroz.jpg', // Mole Negro
  'pozole mexican hominy soup red pork': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Green_pozole%2C_dressed_%2829161841908%29_%28cropped%29.jpg/960px-Green_pozole%2C_dressed_%2829161841908%29_%28cropped%29.jpg', // Pozole
  'chiles rellenos stuffed poblano pepper battered': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Chile_Rellenos.jpg/960px-Chile_Rellenos.jpg', // Chiles Rellenos
  'tamales mexican corn masa wrapped banana leaf': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Tamal_oaxaque%C3%B1o.jpg/960px-Tamal_oaxaque%C3%B1o.jpg', // Tamales
  'cochinita pibil slow roasted pork achiote yucatan': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Cochinita_pibil_2.jpg/960px-Cochinita_pibil_2.jpg', // Cochinita Pibil
  'birria tacos mexican goat beef consomme': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Plato_de_birria.jpg/960px-Plato_de_birria.jpg', // Birria
  'elote mexican street corn mayo cheese chili': 'https://upload.wikimedia.org/wikipedia/commons/6/67/Elote_recipe.jpg', // Elote
  'churros fried dough cinnamon sugar chocolate': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Chocolate_con_churros_%2827343655726%29.jpg/960px-Chocolate_con_churros_%2827343655726%29.jpg', // Churros
  'horchata mexican rice milk drink cinnamon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Horchata_de_arroz.jpg/960px-Horchata_de_arroz.jpg', // Horchata
  'menudo mexican tripe soup red chili': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Bowl_of_menudo_stew.jpg/960px-Bowl_of_menudo_stew.jpg', // Menudo
  'sopa de lima yucatan lime chicken soup': 'https://upload.wikimedia.org/wikipedia/commons/2/27/Sopa_de_lima.jpg', // Sopa de Lima
  'tacos al pastor spit pork pineapple mexico city': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Tacos_al_pastor%2C_taco_de_panza.jpg/960px-Tacos_al_pastor%2C_taco_de_panza.jpg', // Tacos al Pastor
  'tacos barbacoa beef cheek steamed slow cooked': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Tacos_de_barbacoa_con_salsa_de_chile_rayado.jpg/960px-Tacos_de_barbacoa_con_salsa_de_chile_rayado.jpg', // Tacos de Barbacoa
  'carnitas pork confit michoacan crispy shredded': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Carnitas.jpg/960px-Carnitas.jpg', // Tacos de Carnitas
  'quesadilla cheese tortilla grilled mexican': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Quesadilla_2.jpg/960px-Quesadilla_2.jpg', // Quesadilla
  'caldo de res mexican beef vegetable soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Caldo_de_res_mexican_food.jpg/960px-Caldo_de_res_mexican_food.jpg', // Caldo de Res
  'tortilla soup tomato chicken strips crispy': 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Sopa_de_tortilla_con_chicharron_de_real_del_monte.jpg', // Sopa de Tortilla
  'caldo tlalpeno chicken chickpea chipotle soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Caldo_tlalpe%C3%B1o.JPG/960px-Caldo_tlalpe%C3%B1o.JPG', // Caldo Tlalpeño
  'salsa verde tomatillo green chili mexican': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Salsa_verde.jpg/960px-Salsa_verde.jpg', // Salsa Verde
  'salsa roja red tomato chili mexican sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Salsa_roja.jpg/960px-Salsa_roja.jpg', // Salsa Roja
  'pico de gallo fresh tomato onion cilantro chopped': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Mmm..._Pico_de_Gallo_%285923456035%29.jpg/960px-Mmm..._Pico_de_Gallo_%285923456035%29.jpg', // Pico de Gallo
  'mole poblano dark chocolate chili sauce turkey': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/ChickRedMole.JPG/960px-ChickRedMole.JPG', // Mole Poblano
  'gordita thick corn cake stuffed mexican street food': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/GORDITA.jpg/960px-GORDITA.jpg', // Gordita
  'tostada crispy corn tortilla toppings shrimp': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Tostada_de_tinga.jpg/960px-Tostada_de_tinga.jpg', // Tostada
  'sope thick masa patty beans cheese meat': 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Sopes1.jpg', // Sope
  'huarache long oval masa topped cactus beef': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Huarache_de_pollo_en_salsa_roja.JPG/960px-Huarache_de_pollo_en_salsa_roja.JPG', // Huarache
  'tlayuda oaxacan large tortilla black beans quesillo': 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Tlayuda12-05oaxaca013x.jpg', // Tlayuda
  'arroz rojo mexican red rice tomato cumin': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Mexican_rice_144235.jpg/960px-Mexican_rice_144235.jpg', // Arroz Rojo
  'frijoles olla pot beans black pinto mexican': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Frijoles_de_la_olla_1.jpg/960px-Frijoles_de_la_olla_1.jpg', // Frijoles de Olla
  'queso fresco mexican fresh crumbly white cheese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Queso_fresco.JPG/960px-Queso_fresco.JPG', // Queso Fresco
  'tres leches cake soaked cream mexican dessert': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Pastel_de_Tres_Leches.jpg/960px-Pastel_de_Tres_Leches.jpg', // Tres Leches
  'atole warm corn drink mexican traditional': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Atole.jpg/960px-Atole.jpg', // Atole
  'champurrado hot chocolate corn drink thick': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Champurrado_thenewplace_sf.jpg/960px-Champurrado_thenewplace_sf.jpg', // Champurrado
  'agua fresca hibiscus melon cucumber water mexican': 'https://upload.wikimedia.org/wikipedia/commons/5/5b/ManekiNeko_horchata_jar.jpg', // Agua Fresca
  'huevos rancheros fried eggs salsa tortilla mexican': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Mmm...huevos_rancheros.jpg/960px-Mmm...huevos_rancheros.jpg', // Huevos Rancheros
  'chilaquiles tortilla chips salsa verde egg mexican breakfast': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Chilaquiles_at_the_Grand_Cantina%2C_Windsor%2C_Ontario%2C_2025-09-01_04.jpg/960px-Chilaquiles_at_the_Grand_Cantina%2C_Windsor%2C_Ontario%2C_2025-09-01_04.jpg', // Chilaquiles
  'tacos mexican food': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/960px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg', // Tacos
  'guacamole avocado dip': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Guacamole_IMGP1271.jpg/960px-Guacamole_IMGP1271.jpg', // Guacamole
  'enchiladas mexican cheese sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Enchilada_Rice_Beans.jpg/960px-Enchilada_Rice_Beans.jpg', // Enchiladas
  'mole sauce mexican chocolate': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Mole_casero%2C_picante%2C_M%C3%A9xico.jpg/960px-Mole_casero%2C_picante%2C_M%C3%A9xico.jpg', // Mole
  'crema mexicana sour cream drizzle tacos': '', // Crema Mexicana — no trustworthy photo yet
  'baklava turkish honey nut pastry golden': 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Baklava%281%29.png', // Baklava
  'iskender kebap turkish lamb pide tomato butter': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/%C4%B0skender_Kebap.jpg/960px-%C4%B0skender_Kebap.jpg', // İskender Kebap
  'lahmacun turkish flatbread minced meat thin': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Lahmacun.jpg/960px-Lahmacun.jpg', // Lahmacun
  'manti turkish dumplings yogurt chili butter': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/960px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg', // Mantı
  'pide turkish flatbread boat shaped egg cheese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/2019-07-27_Turkish_pide_with_cheese_at_Istanbul_restaurant.jpg/960px-2019-07-27_Turkish_pide_with_cheese_at_Istanbul_restaurant.jpg', // Pide
  'simit turkish sesame bread ring street food': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Simit-2x.JPG/960px-Simit-2x.JPG', // Simit
  'turkish delight lokum rose powdered sugar pink': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/TurkishDelightDisplay.jpg/960px-TurkishDelightDisplay.jpg', // Turkish Delight
  'ayran turkish yogurt drink white frothy glass': 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Fresh_ayran.jpg', // Ayran
  'turkish coffee small cup dark thick grounds': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/T%C3%BCrk_Kahvesi_-_Bakir_Cezve.jpg/960px-T%C3%BCrk_Kahvesi_-_Bakir_Cezve.jpg', // Turkish Coffee
  'haydari turkish yogurt herb meze dip': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Haydari_in_a_square_plate.jpg/960px-Haydari_in_a_square_plate.jpg', // Haydari
  'ezme turkish tomato pepper salad spicy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Ac%C4%B1l%C4%B1_Ezme.jpg/960px-Ac%C4%B1l%C4%B1_Ezme.jpg', // Ezme
  'cacik turkish cucumber yogurt mint cold soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Cacik-1.jpg/960px-Cacik-1.jpg', // Cacık
  'dolma stuffed vine leaves rice lemon turkish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Stuffed_grape_leaves.jpg/960px-Stuffed_grape_leaves.jpg', // Dolma
  'arnavut cigeri fried liver spiced red onion': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Arnavut_ci%C4%9Feri.jpg/960px-Arnavut_ci%C4%9Feri.jpg', // Arnavut Ciğeri
  'adana kebap spicy lamb mince skewer charcoal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Adana_kebab.jpg/960px-Adana_kebab.jpg', // Adana Kebap
  'cop sis turkish small meat skewer wood charcoal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/%C3%87%C3%B6p_%C5%9Fi%C5%9F.jpg/960px-%C3%87%C3%B6p_%C5%9Fi%C5%9F.jpg', // Çöp Şiş
  'cag kebabi horizontal spit erzurum lamb': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Ca%C4%9Fkebab%C4%B15.jpg/960px-Ca%C4%9Fkebab%C4%B15.jpg', // Cağ Kebabı
  'sis tavuk chicken skewer turkish grilled tomato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Tavuk_%C5%9Ei%C5%9F.jpg/960px-Tavuk_%C5%9Ei%C5%9F.jpg', // Şiş Tavuk
  'gozleme turkish flatbread filled spinach cheese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/G%C3%B6zleme.JPG/960px-G%C3%B6zleme.JPG', // Gözleme
  'katmer gaziantep flaky bread pistachio cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/F%C4%B1st%C4%B1kl%C4%B1_kaymakl%C4%B1_muska_katmer.jpg/960px-F%C4%B1st%C4%B1kl%C4%B1_kaymakl%C4%B1_muska_katmer.jpg', // Katmer
  'acma turkish soft pastry bread olive breakfast': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/A%C3%A7ma_from_Turkey.jpg/960px-A%C3%A7ma_from_Turkey.jpg', // Açma
  'mercimek corbasi red lentil soup turkish lemon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Mercimek_%C3%A7orbas%C4%B1_in_Ankara%2C_Turkey.jpg/960px-Mercimek_%C3%A7orbas%C4%B1_in_Ankara%2C_Turkey.jpg', // Mercimek Çorbası
  'iskembe corbasi tripe soup turkish night': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Tripe_soup_from_Turkey.jpg/960px-Tripe_soup_from_Turkey.jpg', // İşkembe Çorbası
  'pilav turkish rice butter vermicelli': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/%C5%9Eehriyeli_pilav.jpg/960px-%C5%9Eehriyeli_pilav.jpg', // Pilav
  'ic pilav rice chicken liver currants pine nuts': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/%C4%B0%C3%A7_pilav.jpg/960px-%C4%B0%C3%A7_pilav.jpg', // İç Pilav
  'kunefe turkish shredded wheat cheese syrup hot': 'https://upload.wikimedia.org/wikipedia/commons/c/c8/K%C3%BCnefe.jpg', // Künefe
  'kazandibi turkish caramelised milk pudding burnt': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Kazandibi_Dessert.jpg/960px-Kazandibi_Dessert.jpg', // Kazandibi
  'asure noah pudding grains nuts pomegranate': 'https://upload.wikimedia.org/wikipedia/commons/7/7a/A%C5%9Fure_%281%29.JPG', // Aşure
  'revani semolina syrup cake turkish ottoman': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Revani_with_lemon_zest.jpg/960px-Revani_with_lemon_zest.jpg', // Revani
  'raki turkish anise spirit lion milk table': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Rak%C4%B1.jpg/960px-Rak%C4%B1.jpg', // Raki
  'salep turkish winter hot drink orchid cinnamon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Salep_drink.jpg/960px-Salep_drink.jpg', // Salep
  'kebab skewer grilled meat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Lula_kebab_2.jpg/960px-Lula_kebab_2.jpg', // Kebab
  'kofte meatball turkish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Izgara_k%C3%B6fte.jpg/960px-Izgara_k%C3%B6fte.jpg', // Köfte
  'borek turkish pastry filo': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Su_b%C3%B6re%C4%9Fi_2025.jpg/960px-Su_b%C3%B6re%C4%9Fi_2025.jpg', // Börek
  'urfa kebap dark lamb mince mild skewer grilled': '', // Urfa Kebap — no trustworthy photo yet
  'greek salad horiatiki feta': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Greece_Food_Horiatiki.JPG/960px-Greece_Food_Horiatiki.JPG', // Horiatiki
  'dolmades stuffed vine leaves': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Dolmades_Kurdish_and_Greek_-_Dec_2018.jpg/960px-Dolmades_Kurdish_and_Greek_-_Dec_2018.jpg', // Dolmades
  'kleftiko slow roast lamb greek': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Kleftiko.JPG/960px-Kleftiko.JPG', // Kleftiko
  'loukoumades honey doughnuts greek': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Loukoumades_Greek_Doughnuts_with_Walnuts_and_Honey.jpg/960px-Loukoumades_Greek_Doughnuts_with_Walnuts_and_Honey.jpg', // Loukoumades
  'pastitsio greek baked pasta': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Pastitsio_homemade.jpg/960px-Pastitsio_homemade.jpg', // Pastitsio
  'fasolada greek bean soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Fasolada.JPG/960px-Fasolada.JPG', // Fasolada
  'taramasalata fish roe dip pink': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Taramosalata01.jpg/960px-Taramosalata01.jpg', // Taramasalata
  'galaktoboureko custard pastry greek': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Galaktoboureko.jpg/960px-Galaktoboureko.jpg', // Galaktoboureko
  'hummus chickpea dip olive oil greek meze': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Lebanese_style_hummus.jpg/960px-Lebanese_style_hummus.jpg', // Hummus
  'melitzanosalata greek roasted aubergine dip smoky': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Baba_ganoush_closeup.jpg/960px-Baba_ganoush_closeup.jpg', // Melitzanosalata
  'saganaki fried cheese greek pan crispy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Grekiska_koket_02.jpg/960px-Grekiska_koket_02.jpg', // Saganaki
  'tiropita cheese pie phyllo pastry greek': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Tiropita_Greek_dish.jpg/960px-Tiropita_Greek_dish.jpg', // Tiropita
  'kolokithokeftedes zucchini fritters greek feta herbs': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Restaurant_Thal%C3%A1mi_%28Almyrida%29_-_Kolokithokeftedes_%28courgette_or_zucchini_balls%29.jpg/960px-Restaurant_Thal%C3%A1mi_%28Almyrida%29_-_Kolokithokeftedes_%28courgette_or_zucchini_balls%29.jpg', // Kolokithokeftedes
  'stifado greek beef rabbit onion stew tomato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Stifado_%282%29.jpg/960px-Stifado_%282%29.jpg', // Stifado
  'giouvetsi greek lamb orzo tomato baked casserole': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Giouvetsi.JPG/960px-Giouvetsi.JPG', // Giouvetsi
  'gemista stuffed tomatoes peppers rice greek baked': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Gemista.jpg/960px-Gemista.jpg', // Gemista
  'briam greek roasted vegetables zucchini potato olive oil': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Briam.jpg/960px-Briam.jpg', // Briam
  'plaki baked fish greek tomato onion olive oil': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Baked_Fish_with_Tomato_Sauce_with_Lemon_Slices.jpg/960px-Baked_Fish_with_Tomato_Sauce_with_Lemon_Slices.jpg', // Plaki
  'greek roast lamb easter oregano lemon oven': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Easter_Lamb_%283477180857%29.jpg/960px-Easter_Lamb_%283477180857%29.jpg', // Arnaki Fresko
  'feta cheese block brine greek salad': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Feta_Cheese.jpg/960px-Feta_Cheese.jpg', // Feta
  'halloumi grilled cheese squeaky golden': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Grilled_Halloumi.jpg/960px-Grilled_Halloumi.jpg', // Halloumi
  'graviera greek hard cheese crete yellow': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Naxos_Gravi%C3%A9ra.jpg/960px-Naxos_Gravi%C3%A9ra.jpg', // Graviera
  'tsoureki greek easter braided sweet bread': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Tsoureki_athen_20260323_1.jpg/960px-Tsoureki_athen_20260323_1.jpg', // Tsoureki
  'koulouri thessaloniki sesame bread ring street': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Koulouri_Philadelphia_-_Hellenic_Bakery_2025-04-28.jpg/960px-Koulouri_Philadelphia_-_Hellenic_Bakery_2025-04-28.jpg', // Koulouri
  'paidakia greek lamb chops charcoal grilled lemon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Freshippo_grilled_lamb_chops.jpg/960px-Freshippo_grilled_lamb_chops.jpg', // Paidakia
  'kokoretsi greek offal wrapped spit easter roasted': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Ioannina_-_kokoretsi.jpg/960px-Ioannina_-_kokoretsi.jpg', // Kokoretsi
  'gyros pita pork chicken greek wrapped tzatziki': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Pita_giros.JPG/960px-Pita_giros.JPG', // Gyros
  'kourabiedes greek almond shortbread icing sugar christmas': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Kourabiedes_platter_2008_01_08.jpg/960px-Kourabiedes_platter_2008_01_08.jpg', // Kourabiedes
  'melomakarona greek honey walnut christmas cookies': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Melomakarona.jpg/960px-Melomakarona.jpg', // Melomakarona
  'rizogalo greek rice pudding cinnamon cold': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Rice_pudding_cinnamon.jpg/960px-Rice_pudding_cinnamon.jpg', // Rizogalo
  'ouzo anise spirit cloudy water greek seafood': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Ouzo_Ouzo.JPG/960px-Ouzo_Ouzo.JPG', // Ouzo
  'greek frappe iced coffee shaken foam': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Frapp%C3%A9.jpg/960px-Frapp%C3%A9.jpg', // Frappé
  'moussaka greek eggplant': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/MussakasMeMelitsanesKePatates01.JPG/960px-MussakasMeMelitsanesKePatates01.JPG', // Moussaka
  'souvlaki greek skewer meat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/%CE%95%CE%BB%CE%BB%CE%B7%CE%BD%CE%B9%CE%BA%CF%8C_%CE%A3%CE%BF%CF%85%CE%B2%CE%BB%CE%AC%CE%BA%CE%B9_-_panoramio.jpg/960px-%CE%95%CE%BB%CE%BB%CE%B7%CE%BD%CE%B9%CE%BA%CF%8C_%CE%A3%CE%BF%CF%85%CE%B2%CE%BB%CE%AC%CE%BA%CE%B9_-_panoramio.jpg', // Souvlaki
  'baklava honey pastry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Baklava_kymi_greece.jpg/960px-Baklava_kymi_greece.jpg', // Baklava
  'tzatziki yogurt cucumber dip': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Tzatziki_meze_or_appetizer%2C_also_used_as_a_sauce.jpg/960px-Tzatziki_meze_or_appetizer%2C_also_used_as_a_sauce.jpg', // Tzatziki
  'spanakopita spinach feta pastry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Spanakopita.jpg/960px-Spanakopita.jpg', // Spanakopita
  'tteokbokki spicy rice cakes korean red': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Tteokbokki.JPG/960px-Tteokbokki.JPG', // Tteokbokki
  'bulgogi korean marinated beef grilled': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Bulgogi_2.jpg/960px-Bulgogi_2.jpg', // Bulgogi
  'japchae korean glass noodles vegetables': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Polish_Korean_Cuisine_and_Culture_Exchanges_Gradmother%E2%80%99s_Recipes_05.jpg/960px-Polish_Korean_Cuisine_and_Culture_Exchanges_Gradmother%E2%80%99s_Recipes_05.jpg', // Japchae
  'doenjang jjigae korean soybean paste stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Doenjang-jjigae.jpg/960px-Doenjang-jjigae.jpg', // Doenjang Jjigae
  'sundubu jjigae soft tofu stew korean spicy': 'https://upload.wikimedia.org/wikipedia/commons/0/02/Sundubu-jjigae.jpg', // Sundubu Jjigae
  'pajeon korean green onion pancake': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Korean_pancake-Pajeon-05.jpg/960px-Korean_pancake-Pajeon-05.jpg', // Pajeon
  'samgyeopsal korean pork belly grilled': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Samgyeopsal-gui.jpg/960px-Samgyeopsal-gui.jpg', // Samgyeopsal
  'kimchi jjigae stew tofu pork': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Kimchi_jjigae_-_San_Francisco%2C_CA.jpg/960px-Kimchi_jjigae_-_San_Francisco%2C_CA.jpg', // Kimchi Jjigae
  'naengmyeon korean cold noodles buckwheat': 'https://upload.wikimedia.org/wikipedia/commons/5/58/Naengmyeon_%28cold_noodles%29.jpg', // Naengmyeon
  'hotteok korean sweet pancake brown sugar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Hotteok.jpg/960px-Hotteok.jpg', // Hotteok
  'soju korean spirit green bottle glass': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Soju.jpg/960px-Soju.jpg', // Soju
  'galbi tang beef short rib soup clear korean': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Galbitang_%EA%B0%88%EB%B9%84%ED%83%95_beeniru.jpg/960px-Galbitang_%EA%B0%88%EB%B9%84%ED%83%95_beeniru.jpg', // Galbi Tang
  'haemul sundubu jjigae seafood soft tofu stew spicy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Haemul-sundubu-jjigae.jpg/960px-Haemul-sundubu-jjigae.jpg', // Haemul Sundubu
  'seolleongtang ox bone soup milky white korean': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Seolleongtang2024.jpg/960px-Seolleongtang2024.jpg', // Seolleongtang
  'budae jjigae army stew spam sausage ramen kimchi': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Budae_jjigae_%2828587380901%29.jpg/960px-Budae_jjigae_%2828587380901%29.jpg', // Budae Jjigae
  'dolsot bibimbap stone pot rice crispy vegetables egg': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/960px-Dolsot-bibimbap.jpg', // Dolsot Bibimbap
  'mul naengmyeon cold buckwheat noodle soup korean': 'https://upload.wikimedia.org/wikipedia/commons/b/bf/KOCIS_Mul-naengmyeon%2C_Chilled_Buckwheat_Noodle_Soup_%284594756202%29.jpg', // Mul Naengmyeon
  'jajangmyeon black bean sauce noodles korean chinese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Jajangmyeon.jpg/960px-Jajangmyeon.jpg', // Jajangmyeon
  'ramyeon korean instant noodle spicy pot': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/A_spicy_ramyeon.jpg/960px-A_spicy_ramyeon.jpg', // Ramyeon
  'galbi korean beef short ribs grilled charcoal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Korean.food-Galbi-03.jpg/960px-Korean.food-Galbi-03.jpg', // Galbi
  'chadolbaegi thin beef brisket korean bbq grill': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Chadolbagi-gui.jpg/960px-Chadolbagi-gui.jpg', // Chadolbaegi
  'dak galbi spicy stir fried chicken gochujang sweet potato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Korean_cuisine-Dakgalbi-01.jpg/960px-Korean_cuisine-Dakgalbi-01.jpg', // Dak Galbi
  'kimchi jeon korean kimchi pancake crispy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Kimchi-jeon_-_Kimchi_pancake_-_Kogi_Korean_cuisine_2024-09-03.jpg/960px-Kimchi-jeon_-_Kimchi_pancake_-_Kogi_Korean_cuisine_2024-09-03.jpg', // Kimchi Jeon
  'haemul pajeon seafood green onion pancake korean': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Pajeon.jpg/960px-Pajeon.jpg', // Haemul Pajeon
  'twigim korean fried vegetables shrimp street food': 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Gim-mari-twigim_2.jpg', // Twigim
  'kkakdugi cubed radish kimchi korean fermented': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Korean.food-kkakdugi-01.jpg/960px-Korean.food-kkakdugi-01.jpg', // Kkakdugi
  'banchan korean side dishes small plates table': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Banchan.jpg/960px-Banchan.jpg', // Banchan
  'gyeran bap korean egg rice butter soy simple': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Ganjang-gyeran-bap_1.jpg/960px-Ganjang-gyeran-bap_1.jpg', // Gyeran Bap
  'bingsu korean shaved ice dessert red bean mango': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Patbingsu.jpg/960px-Patbingsu.jpg', // Bingsu
  'sikhye korean sweet rice punch drink cold': 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Korean.food-Sikhye-01.jpg', // Sikhye
  'makgeolli korean rice wine milky bowl traditional': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Makgeolli_2.jpg/960px-Makgeolli_2.jpg', // Makgeolli
  'bibimbap korean rice bowl': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Bibimbap_7.jpg/960px-Bibimbap_7.jpg', // Bibimbap
  'kimchi korean fermented': 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Various_kimchi.jpg', // Kimchi
  'massaman curry thai peanut potato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Kaeng_matsaman_kai.JPG/960px-Kaeng_matsaman_kai.JPG', // Massaman Curry
  'tom kha gai coconut chicken soup thai': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Flickr_preppybyday_4711943668--Tom_kha_gai.jpg/960px-Flickr_preppybyday_4711943668--Tom_kha_gai.jpg', // Tom Kha Gai
  'mango sticky rice thai dessert coconut': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Mango_sticy_rice_%283859549574%29.jpg/960px-Mango_sticy_rice_%283859549574%29.jpg', // Mango Sticky Rice
  'thai satay skewer peanut sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Pork_satay_2022.jpg/960px-Pork_satay_2022.jpg', // Thai Satay
  'laab thai minced meat salad herb': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Larb_Moo_-_Siam_Thai_Restaurant_-_Regina_%2830194553768%29.jpg/960px-Larb_Moo_-_Siam_Thai_Restaurant_-_Regina_%2830194553768%29.jpg', // Laab
  'pad kra pao thai basil stir fry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Basil_fried_crispy_pork_with_rice_-_Chiang_Mai_-_2017-07-11_%28002%29.jpg/960px-Basil_fried_crispy_pork_with_rice_-_Chiang_Mai_-_2017-07-11_%28002%29.jpg', // Pad Kra Pao
  'thai iced tea orange condensed milk': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Cha_yen.JPG/960px-Cha_yen.JPG', // Thai Iced Tea
  'panang curry thai thick peanut': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Panang_curry_%2842943883862%29.jpg/960px-Panang_curry_%2842943883862%29.jpg', // Panang Curry
  'kaeng hang le northern thai pork curry tamarind': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%AE%E0%B8%B1%E0%B8%87%E0%B9%80%E0%B8%A5_%E0%B8%97%E0%B8%B5%E0%B9%88_%E0%B8%AB%E0%B8%A5%E0%B8%B9%E0%B9%89%E0%B8%A5%E0%B8%B3.jpg/960px-%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%AE%E0%B8%B1%E0%B8%87%E0%B9%80%E0%B8%A5_%E0%B8%97%E0%B8%B5%E0%B9%88_%E0%B8%AB%E0%B8%A5%E0%B8%B9%E0%B9%89%E0%B8%A5%E0%B8%B3.jpg', // Kaeng Hang Le
  'kaeng som sour orange curry fish vegetables thai': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Kaeng_som-marum63.JPG/960px-Kaeng_som-marum63.JPG', // Kaeng Som
  'pad see ew wide rice noodle dark soy egg wok': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Pad_see_ew.jpg/960px-Pad_see_ew.jpg', // Pad See Ew
  'khao soi chiang mai curry noodle crispy northern thai': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Khao_Soi_Northern_Thai_food_%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%8B%E0%B8%AD%E0%B8%A2_%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B8%AD%E0%B8%87.jpg/960px-Khao_Soi_Northern_Thai_food_%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%8B%E0%B8%AD%E0%B8%A2_%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B8%AD%E0%B8%87.jpg', // Khao Soi
  'guay teow thai noodle soup broth street food': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Boat_noodles.jpg/960px-Boat_noodles.jpg', // Guay Teow
  'pad woon sen glass noodles stir fry egg thai': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Fried_cellophane_noodles_with_shrimp_Pad_woon_sen_kung.jpg/960px-Fried_cellophane_noodles_with_shrimp_Pad_woon_sen_kung.jpg', // Pad Woon Sen
  'khao man gai thai poached chicken rice ginger sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Hainanese_Chicken_Rice.jpg/960px-Hainanese_Chicken_Rice.jpg', // Khao Man Gai
  'khao pad thai fried rice egg tomato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Thaifriedrice.jpg/960px-Thaifriedrice.jpg', // Khao Pad
  'khao niew sticky rice bamboo basket northern thai': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Glutinous_rice%2C_Saveurs_d%27Asie%2C_9_Rue_de_Vouill%C3%A9%2C_75015_Paris%2C_5_November_2016.jpg/960px-Glutinous_rice%2C_Saveurs_d%27Asie%2C_9_Rue_de_Vouill%C3%A9%2C_75015_Paris%2C_5_November_2016.jpg', // Khao Niew
  'som tam green papaya salad thai mortar chili': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Som_Tam_green_papaya_salad%2C_Bangkok%2C_Thailand.jpg/960px-Som_Tam_green_papaya_salad%2C_Bangkok%2C_Thailand.jpg', // Som Tam
  'yam nua thai beef salad lime chili lemongrass': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/YUM_NUAH_%28Thai_Beef_Salad%29_Red_onions%2C_green_onions%2C_tomato%2C_cucumbers%2C_cilantro%2C_fresh_chilies_mixed_with_homemade_sauce%2C_served_on_bed_of_greens.jpg/960px-YUM_NUAH_%28Thai_Beef_Salad%29_Red_onions%2C_green_onions%2C_tomato%2C_cucumbers%2C_cilantro%2C_fresh_chilies_mixed_with_homemade_sauce%2C_served_on_bed_of_greens.jpg', // Yam Nua
  'miang kham betel leaf wrapped bite thai snack': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Miang_kham_platter.jpg/960px-Miang_kham_platter.jpg', // Miang Kham
  'khanom buang thai crispy crepe coconut topping street': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Ang_Thong_%282024%29_-_khanom_bueang_boran_%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B9%80%E0%B8%9A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%82%E0%B8%9A%E0%B8%A3%E0%B8%B2%E0%B8%93.jpg/960px-Ang_Thong_%282024%29_-_khanom_bueang_boran_%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B9%80%E0%B8%9A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%82%E0%B8%9A%E0%B8%A3%E0%B8%B2%E0%B8%93.jpg', // Khanom Buang
  'gai yang thai grilled chicken lemongrass charcoal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Kai_yang_2.jpg/960px-Kai_yang_2.jpg', // Gai Yang
  'tod man pla thai fish cake lime cucumber sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Thai_Fish_Cake.jpg/960px-Thai_Fish_Cake.jpg', // Tod Man Pla
  'kluay buat chi thai banana coconut milk dessert warm': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Kluai_buat_chi.jpg/960px-Kluai_buat_chi.jpg', // Kluay Buat Chi
  'nam manao thai lime soda drink refreshing': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Koh_Mak%2C_Thailand%2C_Lime_juice%2C_Lemonade%2C_Limeade.jpg/960px-Koh_Mak%2C_Thailand%2C_Lime_juice%2C_Lemonade%2C_Limeade.jpg', // Nam Manao
  'pad thai noodles thai': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/960px-Phat_Thai_kung_Chang_Khien_street_stall.jpg', // Pad Thai
  'tom yum soup thai spicy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Tom_yam_kung_maenam.jpg/960px-Tom_yam_kung_maenam.jpg', // Tom Yum
  'green curry thai coconut': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Thai_green_chicken_curry_and_roti.jpg/960px-Thai_green_chicken_curry_and_roti.jpg', // Green Curry
  'fish and chips battered cod golden crispy chips newspaper english takeaway': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Fish_and_chips_blackpool.jpg/960px-Fish_and_chips_blackpool.jpg', // Fish and Chips
  'sunday roast beef yorkshire pudding roast potatoes gravy vegetables traditional plate': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Sunday_roast_lamb_Cock_Inn_Henham_Essex_England_01.jpg/960px-Sunday_roast_lamb_Cock_Inn_Henham_Essex_England_01.jpg', // Sunday Roast
  'shepherd\'s pie mashed potato crust golden baked lamb mince gravy dish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Homerton_College_-_Shepherd%27s_pie_%28cropped%29.jpg/960px-Homerton_College_-_Shepherd%27s_pie_%28cropped%29.jpg', // Shepherd\'s Pie
  'beef wellington puff pastry sliced rare pink mushroom duxelles golden crust': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Beef_Wellington_2019.jpg/960px-Beef_Wellington_2019.jpg', // Beef Wellington
  'scones clotted cream strawberry jam cream tea afternoon tiered stand english': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Scone_with_clotted_cream_and_jam_-_Dyke_Road_Park_Cafe_2025-08-10.jpg/960px-Scone_with_clotted_cream_and_jam_-_Dyke_Road_Park_Cafe_2025-08-10.jpg', // Scones
  'full english breakfast fry up eggs bacon sausage baked beans black pudding toast plate': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Full_English_breakfast_%28cropped%29.jpg/960px-Full_English_breakfast_%28cropped%29.jpg', // Full English Breakfast
  'kippers smoked herring grilled plate butter brown bread english breakfast': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Kipper.JPG/960px-Kipper.JPG', // Kippers
  'steak kidney pie golden shortcrust pastry gravy pub english traditional': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Steak_%26_Kidney_Pie_-_3_3_2019_%2832347115557%29.jpg/960px-Steak_%26_Kidney_Pie_-_3_3_2019_%2832347115557%29.jpg', // Steak and Kidney Pie
  'pork pie melton mowbray hot water crust raised pastry jelly sliced': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/PORK_PIES.jpg/960px-PORK_PIES.jpg', // Pork Pie
  'roast beef sliced pink sunday lunch horseradish gravy plate english': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Roast_beef_dish.jpg/960px-Roast_beef_dish.jpg', // Roast Beef
  'yorkshire pudding risen tall golden hollow batter crispy oven': 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Yorkshire_Puddings_on_plate.jpg', // Yorkshire Pudding
  'chicken tikka masala creamy orange tomato curry rice naan england': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Chicken_Tikka_Masala_on_White_Plate_with_Spoon.jpg/960px-Chicken_Tikka_Masala_on_White_Plate_with_Spoon.jpg', // Chicken Tikka Masala
  'ploughmans lunch cheese bread pickle chutney apple salad english pub board': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/An_Elsecar_Ploughman%27s_Lunch.jpg/960px-An_Elsecar_Ploughman%27s_Lunch.jpg', // Ploughman\'s Lunch
  'scotch egg sliced sausage meat breadcrumb runny yolk pub gastropub english': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/One_scotch_egg_%28No_jar_of_Marmite%29.jpg/960px-One_scotch_egg_%28No_jar_of_Marmite%29.jpg', // Scotch Egg
  'chip butty white bread thick chips ketchup butter northern england sandwich': 'https://upload.wikimedia.org/wikipedia/commons/0/02/Chip_Butty.jpg', // Chip Butty
  'jam roly poly suet pudding custard school dinner english traditional': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Jam_roly-poly02.jpg/960px-Jam_roly-poly02.jpg', // Jam Roly-Poly
  'bakewell tart almond frangipane raspberry jam shortcrust pastry slice': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Bakewell_tart_on_a_plate.jpg/960px-Bakewell_tart_on_a_plate.jpg', // Bakewell Tart
  'summer pudding red berries moulded bread crimson juices english dessert': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Summer_Pudding-3.jpg/960px-Summer_Pudding-3.jpg', // Summer Pudding
  'afternoon tea tiered stand scones sandwiches cakes english hotel traditional': 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Tea_at_the_Rittenhouse_Hotel.jpg', // Afternoon Tea
  'bangers mash sausages potato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Sausage_and_mash_with_peas.jpg/960px-Sausage_and_mash_with_peas.jpg', // Bangers and Mash
  'toad in the hole yorkshire pudding sausage': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Toad_in_the_hole.jpg/960px-Toad_in_the_hole.jpg', // Toad in the Hole
  'lancashire hotpot lamb potato': 'https://upload.wikimedia.org/wikipedia/commons/9/91/Lancashire_hotpot.jpg', // Lancashire Hotpot
  'cornish pasty traditional crimped': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Cornish_Pasty_%28cropped%29.jpeg/960px-Cornish_Pasty_%28cropped%29.jpeg', // Cornish Pasty
  'sticky toffee pudding caramel sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Sticky_toffee_pudding_at_the_Black_Swan_-_Stierch.jpg/960px-Sticky_toffee_pudding_at_the_Black_Swan_-_Stierch.jpg', // Sticky Toffee Pudding
  'eton mess strawberry meringue cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Eton_Mess_2025-2_%28cropped%29.jpg/960px-Eton_Mess_2025-2_%28cropped%29.jpg', // Eton Mess
  'victoria sponge cake jam cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Victoria_Sponges.jpg/960px-Victoria_Sponges.jpg', // Victoria Sponge
  'spotted dick steamed pudding currants': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Spotted_dick.jpg/960px-Spotted_dick.jpg', // Spotted Dick
  'bread butter pudding baked': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Bread_pudding_June_2020.jpg/960px-Bread_pudding_June_2020.jpg', // Bread and Butter Pudding
  'treacle tart golden syrup': 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Mary_Berry_treacle_tart_%288131434026%29.jpg', // Treacle Tart
  'kedgeree smoked haddock rice egg': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Kedgeree.jpg/960px-Kedgeree.jpg', // Kedgeree
  'pie and mash london eel liquor': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Goddards_pie_mash_and_liquor.jpg/960px-Goddards_pie_mash_and_liquor.jpg', // Pie and Mash
  'cream tea scones clotted cream jam': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Classic_cream_tea_-_Nymans_Garden_Riding_House.jpg/960px-Classic_cream_tea_-_Nymans_Garden_Riding_House.jpg', // Cream Tea
  'jellied eels london cockney': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Eels_1385.JPG/960px-Eels_1385.JPG', // Jellied Eels
  'cumberland sausage coiled': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Cumberland_sausage.jpg/960px-Cumberland_sausage.jpg', // Cumberland Sausage
  'pork scratchings crackling crispy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Pork_Scratchings_%283%29.jpg/960px-Pork_Scratchings_%283%29.jpg', // Pork Scratchings
  'bbq ribs smoked southern american barbecue': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Dickey%27s_Barbecue_Pit_BBQ_Ribs_%2826992922031%29.jpg/960px-Dickey%27s_Barbecue_Pit_BBQ_Ribs_%2826992922031%29.jpg', // BBQ Ribs
  'mac and cheese american creamy baked': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Original_Mac_n_Cheese_.jpg/960px-Original_Mac_n_Cheese_.jpg', // Mac and Cheese
  'gumbo louisiana seafood okra stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Gumbo.JPG/960px-Gumbo.JPG', // Gumbo
  'jambalaya louisiana rice shrimp sausage': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Homemade_Jambalaya.JPG', // Jambalaya
  'pulled pork sandwich smoked southern': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Pulled_pork_while_pulling.JPG/960px-Pulled_pork_while_pulling.JPG', // Pulled Pork
  'cornbread american golden cast iron skillet': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Skillet_cornbread_%28cropped%29.jpg/960px-Skillet_cornbread_%28cropped%29.jpg', // Cornbread
  'biscuits gravy southern american breakfast sausage': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Biscuits-and-gravy.jpg/960px-Biscuits-and-gravy.jpg', // Biscuits & Gravy
  'po boy new orleans shrimp fried sandwich': 'https://upload.wikimedia.org/wikipedia/commons/8/89/Shrimppoboy.jpg', // Po\'Boy
  'beignets new orleans fried dough powdered sugar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Beignets_at_Pastis_%2815057250578%29.jpg/960px-Beignets_at_Pastis_%2815057250578%29.jpg', // Beignets
  'pecan pie southern american brown sugar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/My_first_pecan_pie%21.jpg/960px-My_first_pecan_pie%21.jpg', // Pecan Pie
  'clam chowder new england creamy white': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Quail_07_bg_041506.jpg/960px-Quail_07_bg_041506.jpg', // Clam Chowder
  'lobster roll new england buttered bun': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Lobster_Roll.png/960px-Lobster_Roll.png', // Lobster Roll
  'bagel lox cream cheese new york salmon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Lox-and-bagel-02.jpg/960px-Lox-and-bagel-02.jpg', // Bagel with Lox
  'new york cheesecake dense cream cheese slice': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Baked_cheesecake_with_raspberries_and_blueberries.jpg/960px-Baked_cheesecake_with_raspberries_and_blueberries.jpg', // New York Cheesecake
  'clambake new england seafood corn lobster': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/New_England_clam_bake.jpg/960px-New_England_clam_bake.jpg', // Clam Bake
  'buffalo wings hot sauce american crispy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Buffalo_wings-01.jpg/960px-Buffalo_wings-01.jpg', // Buffalo Wings
  'philly cheesesteak sandwich beef onion': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Cheesesteak_05_14_20.jpg/960px-Cheesesteak_05_14_20.jpg', // Philly Cheesesteak
  'chicago deep dish pizza thick cheese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Chicago-Style_Stuffed_Pizza.jpg/960px-Chicago-Style_Stuffed_Pizza.jpg', // Chicago Deep Dish
  'apple pie american lattice golden baked': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Apple_pie_14.jpg/960px-Apple_pie_14.jpg', // Apple Pie
  'thanksgiving turkey roasted whole table': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Roast_turkey_from_fall_season.jpg/960px-Roast_turkey_from_fall_season.jpg', // Thanksgiving Turkey
  'chili con carne beef beans tex mex': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Bowl_of_chili.jpg/960px-Bowl_of_chili.jpg', // Chili con Carne
  'pancakes american stack maple syrup butter': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Foodiesfeed.com_pouring-honey-on-pancakes-with-walnuts.jpg/960px-Foodiesfeed.com_pouring-honey-on-pancakes-with-walnuts.jpg', // Pancakes
  'eggs benedict hollandaise poached english muffin': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Traditional_Eggs_Benedict.jpg/960px-Traditional_Eggs_Benedict.jpg', // Eggs Benedict
  'key lime pie florida yellow tart': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Slice_of_Key_Lime_Pie.jpg/960px-Slice_of_Key_Lime_Pie.jpg', // Key Lime Pie
  'blt sandwich bacon lettuce tomato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Mmm..._BLT_for_me%21_%285487341380%29.jpg/960px-Mmm..._BLT_for_me%21_%285487341380%29.jpg', // BLT Sandwich
  'smores marshmallow chocolate graham cracker campfire': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Smores-Microwave.jpg/960px-Smores-Microwave.jpg', // S\'mores
  'nachos tortilla chips cheese jalapeno': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Nachos-cheese.jpg/960px-Nachos-cheese.jpg', // Nachos
  'cobb salad chicken avocado egg american': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Cobb_salad%2C_15_October_2010.jpg/960px-Cobb_salad%2C_15_October_2010.jpg', // Cobb Salad
  'fried clam strips new england seafood': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Clam_strips%2C_fried_-_San_Francisco%2C_CA.jpg/960px-Clam_strips%2C_fried_-_San_Francisco%2C_CA.jpg', // Clam Strips
  'reuben sandwich corned beef sauerkraut swiss rye': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Katz%27s_Deli_-_Lunch.jpg/960px-Katz%27s_Deli_-_Lunch.jpg', // Reuben Sandwich
  'hamburger beef burger': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/960px-RedDot_Burger.jpg', // Hamburger
  'hot dog american': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/960px-Hot_dog_with_mustard.png', // Hot Dog
  'meze spread lebanese table small plates': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Petra_metzes.jpg/960px-Petra_metzes.jpg', // Meze
  'mutabbal smoky eggplant tahini lebanese dip': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Mutabbel_2.JPG/960px-Mutabbel_2.JPG', // Mutabbal
  'muhammara red pepper walnut dip lebanese syrian': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Tanoreen_muhammara.jpg', // Mouhamara
  'kibbeh nayyeh raw lamb bulgur lebanese meze olive oil': 'https://upload.wikimedia.org/wikipedia/commons/1/17/Kibbeh_Nayyeh.jpg', // Kebbeh Nayyeh
  'arayes lebanese stuffed pita minced meat grilled': 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Arayes_leb.jpg', // Arayes
  'shish taouk marinated chicken skewer grilled lebanese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Tavuk_%C5%9Ei%C5%9F.jpg/960px-Tavuk_%C5%9Ei%C5%9F.jpg', // Shish Taouk
  'kafta meshwiyyeh lebanese minced meat skewer parsley': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Grilled_Kefta_Skewers.jpg/960px-Grilled_Kefta_Skewers.jpg', // Kafta Meshwiyyeh
  'riz shaeriyye lebanese vermicelli rice buttered': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Arabic_rice.jpg/960px-Arabic_rice.jpg', // Riz bi Shaʿriyyeh
  'freekeh smoked green wheat lebanese chicken': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Freekeh_%28uncooked%29.jpg/960px-Freekeh_%28uncooked%29.jpg', // Freekeh
  'lebanese lentil soup cumin lemon turmeric': 'https://upload.wikimedia.org/wikipedia/commons/6/61/EgFoodLentilSoup.jpg', // Lentil Soup
  'yakhnet sabanekh lebanese spinach lamb stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Afghan_lamb_with_spinach_and_beans.jpg/960px-Afghan_lamb_with_spinach_and_beans.jpg', // Yakhnet Sabanekh
  'kaak lebanese sesame bread ring street beirut': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Arabkaak.jpg/960px-Arabkaak.jpg', // Kaak
  'sfeeha lebanese meat pie open faced pastry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Sfiha2.jpg/960px-Sfiha2.jpg', // Sfeeha
  'toum lebanese garlic sauce white fluffy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Toum_%28Lebanese_Garlic_Sauce%29.JPG/960px-Toum_%28Lebanese_Garlic_Sauce%29.JPG', // Toum
  'pomegranate molasses lebanese condiment dark bottle': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Pomegranate_molasses_in_a_chinese_spoon.jpg/960px-Pomegranate_molasses_in_a_chinese_spoon.jpg', // Pomegranate Molasses
  'meghli lebanese rice pudding caraway anise celebration': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/%D0%9C%D0%B8%D0%B3%D0%BB%D0%B8_%D1%81_%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BA%D0%B0%D0%BC%D0%B8.JPG/960px-%D0%9C%D0%B8%D0%B3%D0%BB%D0%B8_%D1%81_%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BA%D0%B0%D0%BC%D0%B8.JPG', // Meghli
  'awamat lebanese fried dough balls syrup sesame': 'https://upload.wikimedia.org/wikipedia/commons/0/08/Loukoumades.jpg', // Awamat
  'jallab lebanese drink grape rose water pine nuts': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Jallab.jpg/960px-Jallab.jpg', // Jallab
  'kibbeh lebanese bulgur ground meat fried': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Kibbeh3.jpg/960px-Kibbeh3.jpg', // Kibbeh
  'fattoush lebanese bread salad pita': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Fattoush_mixed-salad.jpg', // Fattoush
  'mujaddara lentils rice caramelized onions': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Mujaddara.jpg/960px-Mujaddara.jpg', // Mujaddara
  'manakish zaatar flatbread lebanese breakfast': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Zaatar_Mankousheh.jpg/960px-Zaatar_Mankousheh.jpg', // Manakish
  'labneh strained yogurt olive oil herb': 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Labneh01.jpg', // Labneh
  'warak dawali stuffed grape vine leaves': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Stuffed_grape_leaves.jpg/960px-Stuffed_grape_leaves.jpg', // Warak Dawali
  'arak anise spirit levant glass milky water': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Arak_with_water_and_ice.jpg/960px-Arak_with_water_and_ice.jpg', // Arak
  'hummus chickpea dip': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Lebanese_style_hummus.jpg/960px-Lebanese_style_hummus.jpg', // Hummus
  'falafel fried chickpea ball': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Falafels_2.jpg/960px-Falafels_2.jpg', // Falafel
  'shawarma wrap meat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Shawarma_2.jpg/960px-Shawarma_2.jpg', // Shawarma
  'tabbouleh parsley salad': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Tabouleh_1.JPG/960px-Tabouleh_1.JPG', // Tabbouleh
  'baba ghanoush eggplant dip': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Baba_Ganoush_05of05_%288735238183%29.jpg/960px-Baba_Ganoush_05of05_%288735238183%29.jpg', // Baba Ghanoush
  'samke harra lebanese spiced fish tahini sauce': '', // Samke Harra — no trustworthy photo yet
  'sauerbraten german pot roast beef vinegar gravy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Heldrunger_Sauerbraten_2.JPG/960px-Heldrunger_Sauerbraten_2.JPG', // Sauerbraten
  'kassler smoked pork chop sauerkraut german': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Kassler.jpg/960px-Kassler.jpg', // Kassler
  'eisbein german pork knuckle boiled sauerkraut': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Eisbein-2.jpg/960px-Eisbein-2.jpg', // Eisbein
  'schweinebraten bavarian roast pork gravy dark beer': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Schweinebraten_Goldener_Adler_M%C3%BCrsbach.jpg/960px-Schweinebraten_Goldener_Adler_M%C3%BCrsbach.jpg', // Schweinebraten
  'rinderroulade beef roll mustard bacon gherkin gravy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Th%C3%BCringer_Rinderroulade_mit_Kl%C3%B6%C3%9Fen.JPG/960px-Th%C3%BCringer_Rinderroulade_mit_Kl%C3%B6%C3%9Fen.JPG', // Rinderroulade
  'currywurst berlin street food ketchup curry powder': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/20220430_currywurst.jpg/960px-20220430_currywurst.jpg', // Currywurst
  'leberkase bavarian meatloaf bread roll mustard': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Leberk%C3%A4se-1.jpg/960px-Leberk%C3%A4se-1.jpg', // Leberkäse
  'hackepeter mett raw minced pork bread onion german': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Mettbroetchen.jpg/960px-Mettbroetchen.jpg', // Hackepeter
  'weisswurst bavarian white sausage pretzel sweet mustard': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Wei%C3%9Fwurst-1.jpg/960px-Wei%C3%9Fwurst-1.jpg', // Weißwurst
  'nurnberger small sausages charcoal grilled sauerkraut': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/N%C3%BCrnberger_W%C3%BCrstchen_%2810579337046%29.jpg/960px-N%C3%BCrnberger_W%C3%BCrstchen_%2810579337046%29.jpg', // Nürnberger
  'frankfurter sausage mustard bread german': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Frankfurter_wuerstchen.jpg/960px-Frankfurter_wuerstchen.jpg', // Frankfurter
  'blutwurst german blood sausage fried apple': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/-2021-07-24_Sliced_Black_pudding_sausage%2C_Trimingham%2C_Norfolk.JPG/960px--2021-07-24_Sliced_Black_pudding_sausage%2C_Trimingham%2C_Norfolk.JPG', // Blutwurst
  'kartoffelknoedel potato dumpling german gravy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Kn%C3%B6delschneem%C3%A4nner_1.jpg/960px-Kn%C3%B6delschneem%C3%A4nner_1.jpg', // Kartoffelknödel
  'rotkohl braised red cabbage apple vinegar german': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/BraisedRedCabbage-0719.jpg/960px-BraisedRedCabbage-0719.jpg', // Rotkohl
  'spatzle german egg noodle butter cheese swabians': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Sp%C3%A4tzle-02.jpg/960px-Sp%C3%A4tzle-02.jpg', // Spätzle
  'kasespatzle german cheese noodles fried onion': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Berggasthof_Haldenhof_-_K%C3%A4skn%C3%B6pfle_%281%29.jpg/960px-Berggasthof_Haldenhof_-_K%C3%A4skn%C3%B6pfle_%281%29.jpg', // Käsespätzle
  'kartoffelsalat german potato salad vinegar bacon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Kartoffelsalat_with_mayonnaise.jpg/960px-Kartoffelsalat_with_mayonnaise.jpg', // Kartoffelsalat
  'pumpernickel dark rye bread westphalian dense': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Pumpernickel_allemand.jpg/960px-Pumpernickel_allemand.jpg', // Pumpernickel
  'brezel pretzel bavarian soft baked salt': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Brezel_l_B%C3%A4ckerei-Raisch.jpg/960px-Brezel_l_B%C3%A4ckerei-Raisch.jpg', // Brezeln
  'stollen german christmas fruitcake marzipan icing sugar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Stollen-Dresdner_Christstollen.jpg/960px-Stollen-Dresdner_Christstollen.jpg', // Stollen
  'gulaschsuppe german goulash soup paprika beef': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Goulash_soup_2.jpg/960px-Goulash_soup_2.jpg', // Gulaschsuppe
  'pichelsteiner bavarian meat vegetable stew pot': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Pichelsteiner_Eintopf.jpg/960px-Pichelsteiner_Eintopf.jpg', // Pichelsteiner
  'schwarzwalder kirschtorte black forest cake cherry cream chocolate': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Black_Forest_gateau.jpg/960px-Black_Forest_gateau.jpg', // Schwarzwälder Kirschtorte
  'apfelstrudel apple strudel pastry cinnamon cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Strudel.jpg/960px-Strudel.jpg', // Apfelstrudel
  'lebkuchen nuremberg gingerbread spiced christmas': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Lebkuchen-pile.jpg/960px-Lebkuchen-pile.jpg', // Lebkuchen
  'weissbier bavarian wheat beer cloudy glass': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/2013_Augustiner_Weissbier_Munich_pub.jpg/960px-2013_Augustiner_Weissbier_Munich_pub.jpg', // Weißbier
  'gluhwein mulled wine christmas market germany': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Gl%C3%BChwein_Weinnachtsmarkt_OS.JPG/960px-Gl%C3%BChwein_Weinnachtsmarkt_OS.JPG', // Glühwein
  'schnitzel breaded cutlet': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/960px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG', // Schnitzel
  'bratwurst german sausage': 'https://upload.wikimedia.org/wikipedia/commons/b/b0/German_Bratw%C3%BCrste.jpg', // Bratwurst
  'sauerkraut fermented cabbage': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Bauernseufzer_Sauerkraut_Bayreuth.jpg/960px-Bauernseufzer_Sauerkraut_Bayreuth.jpg', // Sauerkraut
  'scottish dressed crab shell white brown meat': 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Crab_meat_in_shell_with_salad_and_Marie_Rose_sauce.jpg', // Dressed Crab
  'scottish langoustines scampi grilled lemon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Langoustine_%28Nephrops_norvegicus%29_%28Ifremer_00710-82223%29.jpg/960px-Langoustine_%28Nephrops_norvegicus%29_%28Ifremer_00710-82223%29.jpg', // Langoustines
  'smoked haddock finnan haddie yellow scotch': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Smoked_haddock_with_pease_pudding_and_saffron.jpg/960px-Smoked_haddock_with_pease_pudding_and_saffron.jpg', // Smoked Haddock
  'potted shrimp brown butter spiced toast british': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Potted_shrimp_on_toast_with_pickled_cucumber.jpg/960px-Potted_shrimp_on_toast_with_pickled_cucumber.jpg', // Potted Shrimp
  'grouse roasted scottish game bird heather moors': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/2014-04-21_Lagopus_lagopus_scotica%2C_Hawsen_Burn_1.jpg/960px-2014-04-21_Lagopus_lagopus_scotica%2C_Hawsen_Burn_1.jpg', // Grouse
  'scottish venison red deer loin steak game': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Venison_Loin_%283293814360%29.jpg/960px-Venison_Loin_%283293814360%29.jpg', // Venison
  'aberdeen angus beef steak scotland quality': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Ribeye_steak%2C_chips%2C_b%C3%A9arnaise_sauce.jpg/960px-Ribeye_steak%2C_chips%2C_b%C3%A9arnaise_sauce.jpg', // Aberdeen Angus
  'scotch pie hot water pastry mutton football': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Scotch_pie.jpg/960px-Scotch_pie.jpg', // Scotch Pie
  'scotch broth lamb barley turnip vegetable soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Lunch_at_Inveraray_Castle_-_Scotch_broth_%2814342541740%29.jpg/960px-Lunch_at_Inveraray_Castle_-_Scotch_broth_%2814342541740%29.jpg', // Scotch Broth
  'cock a leekie scottish chicken leek soup prunes': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Cock-a-leekie_Soup.jpg/960px-Cock-a-leekie_Soup.jpg', // Cock-a-Leekie
  'selkirk bannock scottish fruit loaf border': 'https://upload.wikimedia.org/wikipedia/commons/d/d2/BannockBeremeal.jpg', // Selkirk Bannock
  'cranachan scottish dessert cream raspberries oatmeal whisky': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Cranachan_%284332953688%29.jpg/960px-Cranachan_%284332953688%29.jpg', // Cranachan
  'scottish tablet fudge sugar condensed milk': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Butter_tablet.JPG/960px-Butter_tablet.JPG', // Tablet
  'single malt scotch whisky glass distillery scotland': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Bowmore_whisky_12_years.JPG/960px-Bowmore_whisky_12_years.JPG', // Single Malt Whisky
  'irn bru scottish orange soda can iconic': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Barr_IRN-BRU_Sugar_Free_%283_of_3%29.jpg/960px-Barr_IRN-BRU_Sugar_Free_%283_of_3%29.jpg', // Irn-Bru
  'haggis scottish traditional': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Scotland_Haggis.jpg/960px-Scotland_Haggis.jpg', // Haggis
  'cullen skink smoked haddock soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Cullen_Skink.JPG/960px-Cullen_Skink.JPG', // Cullen Skink
  'stovies scottish potato stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Stovies_containing_beef.jpg/960px-Stovies_containing_beef.jpg', // Stovies
  'arbroath smokie smoked haddock': 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Arbroath_Smokies_-_geograph.org.uk_-_481678.jpg', // Arbroath Smokie
  'clootie dumpling scottish pudding': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Clootie_dumpling.jpg/960px-Clootie_dumpling.jpg', // Clootie Dumpling
  'shortbread scottish butter biscuit': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Shortbread_House_round_biscuit_.jpg/960px-Shortbread_House_round_biscuit_.jpg', // Shortbread
  'porridge oatmeal breakfast': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Oatmeal_%281%29.jpg/960px-Oatmeal_%281%29.jpg', // Porridge
  'neeps tatties turnip potato mash': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Burns_Supper_-_January_25th_2024.jpg/960px-Burns_Supper_-_January_25th_2024.jpg', // Neeps and Tatties
  'lorne sausage square scottish': 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Grinners_breakfast.jpg', // Lorne Sausage
  'dundee cake scottish fruit': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/North_British_Dundee_cake.JPG/960px-North_British_Dundee_cake.JPG', // Dundee Cake
  'forfar bridie scottish pasty': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Bridie.jpg/960px-Bridie.jpg', // Forfar Bridie
  'empire biscuit double shortbread jam icing cherry': '', // Empire Biscuit — no trustworthy photo yet
  'irish brown bread wholemeal soda loaf': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Irish_brown_soda_bread.JPG/960px-Irish_brown_soda_bread.JPG', // Brown Bread
  'soda farl ulster fry griddle bread northern ireland': 'https://upload.wikimedia.org/wikipedia/commons/2/29/Ben_W_Bell_Soda_Bread_Farl_05_June_2007.jpg', // Farl
  'barmbrack irish fruit bread halloween ring': 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Barmbrack.jpg', // Barmbrack
  'potato farl irish griddle cake mashed': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Ulster_fry_1.jpg/960px-Ulster_fry_1.jpg', // Potato Farl
  'champ irish mashed potato spring onion butter': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Champ_%28food%29.JPG/960px-Champ_%28food%29.JPG', // Champ
  'colcannon irish mashed potato kale cabbage butter': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Colcannon.JPG/960px-Colcannon.JPG', // Colcannon
  'boxty irish potato pancake griddle ulster': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Boxty_triangle.jpg/960px-Boxty_triangle.jpg', // Boxty
  'dublin coddle sausage bacon potato onion stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Irish_Coddle.jpg/960px-Irish_Coddle.jpg', // Dublin Coddle
  'irish stew lamb potato carrot onion': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Bone-in_Irish_lamb_stew_made_with_-guiness_and_red_wine_%E9%AA%A8%E3%81%A4%E3%81%8D%E3%83%A9%E3%83%A0%E5%85%A5%E3%82%8A%E3%80%81-%E3%82%AE%E3%83%8D%E3%82%B9_%E3%81%A8%E8%B5%A4%E3%83%AF%E3%82%A4%E3%83%B3%E3%81%A7%E7%85%AE%E8%BE%BC%E3%82%93%E3%81%A0%E3%82%A2%E3%82%A4%E3%83%AA%E3%83%83%E3%82%B7%E3%83%A5%E3%82%B7%E3%83%81%E3%83%A5%E3%83%BC_-stpatricksday_-%E8%81%96%E3%83%91%E3%83%88%E3%83%AA%E3%83%83%E3%82%AF%E3%81%AE%E6%97%A5.jpg/960px-Bone-in_Irish_lamb_stew_made_with_-guiness_and_red_wine_%E9%AA%A8%E3%81%A4%E3%81%8D%E3%83%A9%E3%83%A0%E5%85%A5%E3%82%8A%E3%80%81-%E3%82%AE%E3%83%8D%E3%82%B9_%E3%81%A8%E8%B5%A4%E3%83%AF%E3%82%A4%E3%83%B3%E3%81%A7%E7%85%AE%E8%BE%BC%E3%82%93%E3%81%A0%E3%82%A2%E3%82%A4%E3%83%AA%E3%83%83%E3%82%B7%E3%83%A5%E3%82%B7%E3%83%81%E3%83%A5%E3%83%BC_-stpatricksday_-%E8%81%96%E3%83%91%E3%83%88%E3%83%AA%E3%83%83%E3%82%AF%E3%81%AE%E6%97%A5.jpg', // Irish Stew
  'corned beef cabbage boiled irish american st patricks': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Corned_Beef_and_Cabbage_%2816227912513%29.jpg/960px-Corned_Beef_and_Cabbage_%2816227912513%29.jpg', // Corned Beef and Cabbage
  'irish smoked salmon brown bread butter lemon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/2014_smoked_salmon_and_egg_salad_toasted_baguette.JPG/960px-2014_smoked_salmon_and_egg_salad_toasted_baguette.JPG', // Smoked Salmon
  'crubeens irish pigs trotters boiled traditional': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Crubeens_2008.jpg/960px-Crubeens_2008.jpg', // Crubeens
  'irish butter kerrygold golden dish quality': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Butter_dish.jpg/960px-Butter_dish.jpg', // Irish Butter
  'cashel blue irish cheese tipperary creamy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/CashelBlue.JPG/960px-CashelBlue.JPG', // Cashel Blue
  'irish whiskey glass bottle jameson bushmills': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/GoodIrishWhiskeys.jpg/960px-GoodIrishWhiskeys.jpg', // Irish Whiskey
  'poitin irish moonshine traditional spirit bottle': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/A_selection_of_Irish_Poit%C3%ADn.jpg/960px-A_selection_of_Irish_Poit%C3%ADn.jpg', // Poitín
  'irish soda bread loaf': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Irish_soda_bread_%2858_of_68%29_%28cropped%29.jpg/960px-Irish_soda_bread_%2858_of_68%29_%28cropped%29.jpg', // Soda Bread
  'full irish breakfast fry up': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Irish_breakfast%2C_cooked.JPG/960px-Irish_breakfast%2C_cooked.JPG', // Full Irish
  'bacon cabbage irish boiled': 'https://upload.wikimedia.org/wikipedia/commons/7/78/Bacon_and_Cabbage_in_Ireland.jpg', // Bacon and Cabbage
  'irish seafood chowder cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Seafood_chowder.jpg/960px-Seafood_chowder.jpg', // Irish Seafood Chowder
  'black white pudding irish breakfast': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Irish_black_and_white_pudding_slices.JPG/960px-Irish_black_and_white_pudding_slices.JPG', // Black and White Pudding
  'guinness beef stew dark beer': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/IrishStew_Guinness.JPG/960px-IrishStew_Guinness.JPG', // Guinness Beef Stew
  'porter cake irish dark beer dried fruit christmas': '', // Porter Cake — no trustworthy photo yet
  'harira moroccan tomato lentil soup': 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Harira.png', // Harira
  'bastilla moroccan pigeon pie pastry': 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Bisteeya.jpg', // Bastilla
  'msemen moroccan flatbread square': 'https://upload.wikimedia.org/wikipedia/commons/f/f5/%D9%85%D8%B3%D9%85%D9%86.jpg', // Msemen
  'zaalouk moroccan eggplant tomato dip': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Zaalouk-01.JPG/960px-Zaalouk-01.JPG', // Zaalouk
  'chermoula moroccan herb marinade green': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Poulet_chermoula_aux_olives_rouges.png/960px-Poulet_chermoula_aux_olives_rouges.png', // Chermoula
  'makouda moroccan potato fritters': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Maakouda.jpg/960px-Maakouda.jpg', // Makouda
  'moroccan mint tea glass pot': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Mint_tea%2C_Marrakesh.jpg/960px-Mint_tea%2C_Marrakesh.jpg', // Moroccan Mint Tea
  'rfissa moroccan chicken shredded bread': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rfissa_marocaine.jpg/500px-Rfissa_marocaine.jpg', // Rfissa
  'tagine mrouzia sweet lamb raisins honey almond': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/IB_tajine_02.jpg/960px-IB_tajine_02.jpg', // Tagine Mrouzia
  'tagine kefta meatball egg tomato moroccan': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Tajine_kefta_%288348397161%29.jpg/960px-Tajine_kefta_%288348397161%29.jpg', // Tagine Kefta
  'chicken tagine preserved lemon olives moroccan': 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Tajine-marocain-un-plat-varie-et-sain_%28cropped%29.jpg', // Tagine Poulet
  'bissara moroccan split pea soup cumin olive oil': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Bissara_Moroccan_split_pea_and_fava_bean_soup.jpg/960px-Bissara_Moroccan_split_pea_and_fava_bean_soup.jpg', // Bissara
  'chorba moroccan lamb tomato noodle soup ramadan': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Chorba_cooked_in_the_home_kitchen.jpg/960px-Chorba_cooked_in_the_home_kitchen.jpg', // Chorba
  'khobz moroccan round bread flat oven': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Pains_matlou_dans_une_boulangerie_de_la_rue_d%27Aligre%2C_%C3%A0_Paris.jpg/960px-Pains_matlou_dans_une_boulangerie_de_la_rue_d%27Aligre%2C_%C3%A0_Paris.jpg', // Khobz
  'beghrir moroccan honeycomb pancake honey butter': 'https://upload.wikimedia.org/wikipedia/commons/d/d2/%D8%A8%D8%BA%D8%B1%D9%8A%D8%B1.jpg', // Beghrir
  'harcha moroccan semolina flatbread pan fried': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Ary-7ercha.JPG/960px-Ary-7ercha.JPG', // Harcha
  'taktouka moroccan green pepper tomato salad cooked': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Moroccan_Grilled_Red_Pepper_Salad.jpg/960px-Moroccan_Grilled_Red_Pepper_Salad.jpg', // Taktouka
  'mechoui whole roast lamb pit moroccan feast': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Mechoui.jpg/960px-Mechoui.jpg', // Mechoui
  'tangia marrakech slow cooked lamb clay urn': 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Tanjia-959.jpg', // Tangia
  'merguez spicy lamb sausage grilled north africa': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Merguez_sausages.jpg/960px-Merguez_sausages.jpg', // Merguez
  'chebakia moroccan sesame honey cookie ramadan': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Chebakia.jpg/960px-Chebakia.jpg', // Chebakia
  'kaab el ghazal almond pastry gazelle horn moroccan': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/%D9%83%D8%B9%D8%A8_%D8%A7%D9%84%D8%BA%D8%B2%D8%A7%D9%84.jpg/960px-%D9%83%D8%B9%D8%A8_%D8%A7%D9%84%D8%BA%D8%B2%D8%A7%D9%84.jpg', // Kaab el Ghazal
  'sellou moroccan toasted flour almond sesame sweet': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Sfouf.jpg/960px-Sfouf.jpg', // Sellou
  'argan oil moroccan culinary bottle nuts': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Huile_d%27argan_010.JPG/960px-Huile_d%27argan_010.JPG', // Argan Oil
  'tagine moroccan stew pot': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Moroccan_dinner-02.jpg/960px-Moroccan_dinner-02.jpg', // Tagine
  'couscous moroccan vegetable': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Moroccan_cuscus%2C_from_Casablanca%2C_September_2018.jpg/960px-Moroccan_cuscus%2C_from_Casablanca%2C_September_2018.jpg', // Couscous
  'moroccan mallow salad herb lemon olive oil': '', // Khoubiza — no trustworthy photo yet
  'bun cha vietnamese grilled pork noodles': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/B%C3%BAn_ch%E1%BA%A3_Vietnamese_food.jpg/960px-B%C3%BAn_ch%E1%BA%A3_Vietnamese_food.jpg', // Bun Cha
  'goi cuon vietnamese fresh spring rolls': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Homemade_spring_rolls_%287010969349%29.jpg/960px-Homemade_spring_rolls_%287010969349%29.jpg', // Goi Cuon
  'banh xeo vietnamese sizzling crepe shrimp': 'https://upload.wikimedia.org/wikipedia/commons/5/59/Banh_Xeo_with_fish_sauce_and_vegetables.jpg', // Banh Xeo
  'cao lau hoi an noodles pork': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Cao_l%E1%BA%A7u_H%E1%BB%99i_An_%282024%29.jpg/960px-Cao_l%E1%BA%A7u_H%E1%BB%99i_An_%282024%29.jpg', // Cao Lau
  'banh cuon vietnamese steamed rice rolls': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/B%C3%A1nh_cu%E1%BB%91n_Thanh_Tr%C3%AC.jpg/960px-B%C3%A1nh_cu%E1%BB%91n_Thanh_Tr%C3%AC.jpg', // Banh Cuon
  'ca kho to vietnamese caramel fish clay pot': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/C%C3%A1_kho_t%E1%BB%99%2C_c%C3%A1_h%C3%BA.jpg/960px-C%C3%A1_kho_t%E1%BB%99%2C_c%C3%A1_h%C3%BA.jpg', // Ca Kho To
  'che vietnamese sweet dessert soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Ch%C3%A8_b%C3%A0_ba.jpg/960px-Ch%C3%A8_b%C3%A0_ba.jpg', // Che
  'cha ca hanoi turmeric fish dill': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Ch%E1%BA%A3_c%C3%A1_L%C3%A3_V%E1%BB%8Dng_H%C3%A0_N%E1%BB%99i.jpg/960px-Ch%E1%BA%A3_c%C3%A1_L%C3%A3_V%E1%BB%8Dng_H%C3%A0_N%E1%BB%99i.jpg', // Cha Ca
  'bun bo hue spicy beef noodle soup hue central vietnam': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/B%C3%BAn_b%C3%B2_Hu%E1%BA%BF_-_Ch%E1%BB%A3_%C4%90%C3%B4ng_Ba_%282024%29_-_img_02.jpg/960px-B%C3%BAn_b%C3%B2_Hu%E1%BA%BF_-_Ch%E1%BB%A3_%C4%90%C3%B4ng_Ba_%282024%29_-_img_02.jpg', // Bun Bo Hue
  'mi quang quang nam turmeric noodle shrimp pork rice cracker': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/M%C3%AC_Qu%E1%BA%A3ng%2C_Da_Nang%2C_Vietnam.jpg/960px-M%C3%AC_Qu%E1%BA%A3ng%2C_Da_Nang%2C_Vietnam.jpg', // Mi Quang
  'hu tieu southern vietnam pork noodle soup clear': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Hu_Tieu_Nam_Vang.jpg/960px-Hu_Tieu_Nam_Vang.jpg', // Hu Tieu
  'thit nuong vietnamese grilled pork charcoal lemongrass': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Bun_thit_nuong.jpg/960px-Bun_thit_nuong.jpg', // Thit Nuong
  'com tam broken rice pork chop fried egg saigon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg/960px-C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg', // Com Tam
  'vit quay vietnamese roast duck crispy caramelised': 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Vit-quay-bac-kinh-by-vit-quay-to-thi.jpg', // Vit Quay
  'com chien vietnamese fried rice egg shrimp': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/Fried_rice_in_home.jpg/960px-Fried_rice_in_home.jpg', // Com Chien
  'xoi vietnamese sticky rice toppings colourful': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/X%C3%B4i_s%E1%BA%AFn.jpg/960px-X%C3%B4i_s%E1%BA%AFn.jpg', // Xoi
  'bo luc lac shaking beef wok tender cubes salad': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Product_Shots_of_Food-Bo_Luc_Lac.jpg/960px-Product_Shots_of_Food-Bo_Luc_Lac.jpg', // Bo Luc Lac
  'ca hap steamed fish ginger soy vietnamese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Steamed_fish_in_dinner.jpg/960px-Steamed_fish_in_dinner.jpg', // Ca Hap
  'goi du du vietnamese papaya salad shrimp herbs': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/G%E1%BB%8Fi_%C4%91u_%C4%91%E1%BB%A7_kh%C3%B4_b%C3%B2.jpg/960px-G%E1%BB%8Fi_%C4%91u_%C4%91%E1%BB%A7_kh%C3%B4_b%C3%B2.jpg', // Goi Du Du
  'rau muong water spinach stir fry garlic vietnamese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Rau_mu%E1%BB%91ng_x%C3%A0o_t%E1%BB%8Fi.jpg/960px-Rau_mu%E1%BB%91ng_x%C3%A0o_t%E1%BB%8Fi.jpg', // Rau Muong Xao Toi
  'ca phe trung egg coffee hanoi creamy whipped': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/C%C3%A0_ph%C3%AA_tr%E1%BB%A9ng.jpg/960px-C%C3%A0_ph%C3%AA_tr%E1%BB%A9ng.jpg', // Ca Phe Trung
  'nuoc mia sugarcane juice fresh squeezed vietnamese': 'https://upload.wikimedia.org/wikipedia/commons/6/63/Sugarcanejuice.jpg', // Nuoc Mia
  'pho vietnamese noodle soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Bowl_of_Meatball_pho.jpg/960px-Bowl_of_Meatball_pho.jpg', // Pho
  'banh mi vietnamese sandwich': 'https://upload.wikimedia.org/wikipedia/commons/0/0c/B%C3%A1nh_m%C3%AC_th%E1%BB%8Bt_n%C6%B0%E1%BB%9Bng.png', // Banh Mi
  'tom rim vietnamese caramelised shrimp chili garlic': '', // Tom Rim — no trustworthy photo yet
  'che ba mau three colour dessert coconut milk jelly': '', // Che Ba Mau — no trustworthy photo yet
  'nasi lemak coconut rice sambal anchovies egg': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Nasi_Lemak_dengan_Chili_Nasi_Lemak_dan_Sotong_Pedas%2C_di_Penang_Summer_Restaurant.jpg/960px-Nasi_Lemak_dengan_Chili_Nasi_Lemak_dan_Sotong_Pedas%2C_di_Penang_Summer_Restaurant.jpg', // Nasi Lemak
  'char kway teow penang flat noodle wok hei prawn': 'https://upload.wikimedia.org/wikipedia/commons/0/04/Char_kway_teow.jpg', // Char Kway Teow
  'laksa noodle soup coconut curry prawn malaysia': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Nyonya_Laksa.jpg/960px-Nyonya_Laksa.jpg', // Laksa
  'roti canai flaky flatbread dhal curry malaysia': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/YosriRotiCanai.jpg/960px-YosriRotiCanai.jpg', // Roti Canai
  'rendang beef dry curry coconut caramelised': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Rendang_daging_sapi_asli_Padang.JPG/960px-Rendang_daging_sapi_asli_Padang.JPG', // Rendang
  'hainanese chicken rice poached ginger sesame singapore': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Hainanese_Chicken_Rice.jpg/960px-Hainanese_Chicken_Rice.jpg', // Hainanese Chicken Rice
  'mee goreng mamak fried noodle egg tomato malaysia': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Kampung_Bukit_Jagong%2C_Pendang_20240917_172701.jpg/960px-Kampung_Bukit_Jagong%2C_Pendang_20240917_172701.jpg', // Mee Goreng
  'satay grilled skewer peanut sauce malaysia kajang': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/CHICKEN_SATAY.jpg/960px-CHICKEN_SATAY.jpg', // Satay
  'cendol dessert green pandan coconut milk palm sugar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Kampung_Paya_Jaras_Tengah%2C_Selangor_20250112_111330.jpg/960px-Kampung_Paya_Jaras_Tengah%2C_Selangor_20250112_111330.jpg', // Cendol
  'teh tarik pulled tea malaysia frothy condensed milk': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Teh_Tarik_at_the_Iskandar_Curry_House_at_One_Riverside_%28DSCF0286%29.jpg/960px-Teh_Tarik_at_the_Iskandar_Curry_House_at_One_Riverside_%28DSCF0286%29.jpg', // Teh Tarik
  'bak kut teh pork rib herbal soup malaysia': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Song_Fa_Bak_Kut_Teh%2C_New_Bridge_Rd%2C_Singapore_%282023%29_06.jpg/960px-Song_Fa_Bak_Kut_Teh%2C_New_Bridge_Rd%2C_Singapore_%282023%29_06.jpg', // Bak Kut Teh
  'asado argentine beef grill parrilla charcoal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Asado_tradicional_argentino%2C_le%C3%B1a%2C_brasas.jpg/960px-Asado_tradicional_argentino%2C_le%C3%B1a%2C_brasas.jpg', // Asado
  'empanada argentine beef pastry baked fried': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Tapa_de_empanadillitas.JPG/960px-Tapa_de_empanadillitas.JPG', // Empanada
  'chimichurri sauce parsley garlic oregano green': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Chimichurri_Sauce_Recipe_%2813294574784%29.jpg/960px-Chimichurri_Sauce_Recipe_%2813294574784%29.jpg', // Chimichurri
  'choripan argentine chorizo sandwich bread chimichurri': 'https://upload.wikimedia.org/wikipedia/commons/a/af/Choripan.jpg', // Choripán
  'milanesa argentina breaded beef schnitzel fried': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Milanesa_plated_with_lemon_slices_and_french_fries_%28in_Buenos_Aires%2C_Argentina%29.jpg/960px-Milanesa_plated_with_lemon_slices_and_french_fries_%28in_Buenos_Aires%2C_Argentina%29.jpg', // Milanesa
  'locro argentinian stew white corn squash pork': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Locro_argentino.jpg/500px-Locro_argentino.jpg', // Locro
  'dulce de leche caramel spread argentina spoon jar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/DulceDeLeche.jpg/960px-DulceDeLeche.jpg', // Dulce de Leche
  'alfajor argentina dulce de leche cookie chocolate': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/AlfajoresP1115215_02.jpg/960px-AlfajoresP1115215_02.jpg', // Alfajor
  'mate yerba argentina gourd bombilla green': 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Mate_en_calabaza.jpg', // Mate
  'provoleta grilled cheese argentinian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Provoleta_con_cazuela_%28porci%C3%B3n%29.jpg/960px-Provoleta_con_cazuela_%28porci%C3%B3n%29.jpg', // Provoleta,
  'ayib ethiopian fresh cheese cottage': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Ayib_and_gomen.jpg/960px-Ayib_and_gomen.jpg', // Ayib
  'ful ethiopian fava beans spiced': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/ShahanFul.jpg/960px-ShahanFul.jpg', // Ethiopian Ful
  'injera sourdough flatbread teff spongy ethiopia': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Injera_from_ivory_teff.jpg/960px-Injera_from_ivory_teff.jpg', // Injera
  'doro wat ethiopian chicken stew berbere egg': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Injera_and_doro_wat.jpg/960px-Injera_and_doro_wat.jpg', // Doro Wat
  'misir wat red lentil stew berbere spiced': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Misir_Wat_in_Pot.jpg/500px-Misir_Wat_in_Pot.jpg', // Misir Wat
  'tibs ethiopian sauteed beef lamb onion rosemary': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Mutton_tibs_and_injera.jpg/960px-Mutton_tibs_and_injera.jpg', // Tibs
  'kitfo ethiopian raw beef mitmita niter kibbeh': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Ethiopian_Kitfo.JPG/500px-Ethiopian_Kitfo.JPG', // Kitfo
  'shiro chickpea stew ethiopia powder sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Taita_and_shiro.jpg/960px-Taita_and_shiro.jpg', // Shiro
  'gored gored raw beef cubed mitmita butter ethiopian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Gored_gored_plate%2C_July_2019.jpg/960px-Gored_gored_plate%2C_July_2019.jpg', // Gored Gored
  'berbere ethiopian spice blend red chili fenugreek': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Berberespice.jpg/960px-Berberespice.jpg', // Berbere
  'tej ethiopian honey wine mead yellow flask': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Tej_%28Ethiopian_honey_wine%29_%2827241999346%29.jpg/960px-Tej_%28Ethiopian_honey_wine%29_%2827241999346%29.jpg', // Tej
  'ethiopian coffee ceremony jebena pot green beans': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Coffee_ceremony.jpg', // Ethiopian Coffee
  'chechebsa ethiopian bread torn niter kibbeh berbere breakfast': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Kitcha_fit_fit.png/500px-Kitcha_fit_fit.png', // Chechebsa,
  'raggmunk potato pancake lingonberry pork': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Raggmunk_med_fl%C3%A4sk.jpg/960px-Raggmunk_med_fl%C3%A4sk.jpg', // Raggmunk
  'pytt i panna swedish hash beef potato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Pyttipanna.JPG/960px-Pyttipanna.JPG', // Pytt i Panna
  'swedish meatballs gravy lingonberry cream sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Swedish.food-K%C3%B6ttbullar_med_lingon-01.jpg/960px-Swedish.food-K%C3%B6ttbullar_med_lingon-01.jpg', // Köttbullar
  'smorgasbord swedish buffet herring eggs cold cuts': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Sm%C3%B6rg%C3%A5sbord.jpg/960px-Sm%C3%B6rg%C3%A5sbord.jpg', // Smörgåsbord
  'gravlax cured salmon dill mustard sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Gravlax_2.jpg/960px-Gravlax_2.jpg', // Gravlax
  'pickled herring swedish jar varieties mustard onion': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Midsummer_pickled_herring.jpg/960px-Midsummer_pickled_herring.jpg', // Inlagd Sill
  'janssons frestelse potato anchovy cream gratin swedish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Janssons_frestelse.jpg/960px-Janssons_frestelse.jpg', // Janssons Frestelse
  'husmanskost swedish home cooking pork potato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Kroppkaka.jpg/960px-Kroppkaka.jpg', // Husmanskost
  'artsoppa swedish yellow pea soup pork thursday': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/%C3%84rtsoppa_och_pannkakor.jpg/960px-%C3%84rtsoppa_och_pannkakor.jpg', // Ärtsoppa
  'surstromming fermented herring tin sweden': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Surstr%C3%B6mming.jpg/960px-Surstr%C3%B6mming.jpg', // Surströmming
  'prinsesstarta swedish princess cake green marzipan dome': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Princess_Cake_2025-Oct-02.jpg/960px-Princess_Cake_2025-Oct-02.jpg', // Prinsesstårta
  'semla swedish cardamom bun cream almond paste': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/SemlaFlickr.jpg/960px-SemlaFlickr.jpg', // Semla
  'kanelbulle swedish cinnamon bun cardamom pearl sugar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Kanelbulle.jpg/960px-Kanelbulle.jpg', // Kanelbulle
  'aquavit scandinavian spirit caraway fennel glass': 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Aquavit_Schweden.jpg', // Aquavit,
  'ceviche peruvian raw fish lime chili corn': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Cebiche_de_corvina.JPG/960px-Cebiche_de_corvina.JPG', // Ceviche
  'lomo saltado peruvian stir fry beef soy fries': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Lomo_Saltado_-_Lima%2C_Peru_Miraflores_%28Tiendecita_Blanca%29.jpg/960px-Lomo_Saltado_-_Lima%2C_Peru_Miraflores_%28Tiendecita_Blanca%29.jpg', // Lomo Saltado
  'aji de gallina peruvian creamy chicken yellow pepper walnut': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Aj%C3%AD_de_gallina.jpg/960px-Aj%C3%AD_de_gallina.jpg', // Ají de Gallina
  'anticucho beef heart skewer grilled peruvian street': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Anticuchos_-_Grilled_Beef_Heart_skewers.jpg/960px-Anticuchos_-_Grilled_Beef_Heart_skewers.jpg', // Anticucho
  'causa limena peruvian potato terrine chicken avocado': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Causa_Rellena.jpg/960px-Causa_Rellena.jpg', // Causa Limeña
  'papa huancaina potato yellow sauce cheese peru': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Papa_a_la_huancaina.jpg/960px-Papa_a_la_huancaina.jpg', // Papa a la Huancaína
  'pollo a la brasa peruvian rotisserie chicken charcoal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Un_cuarto_de_Pollo_a_la_Brasa.JPG/960px-Un_cuarto_de_Pollo_a_la_Brasa.JPG', // Pollo a la Brasa
  'pachamanca peruvian earth oven stones meat potato': 'https://upload.wikimedia.org/wikipedia/commons/5/57/PachaComer.jpg', // Pachamanca
  'chicha morada purple corn drink peru cinnamon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Chicha_Morada_2017.jpg/960px-Chicha_Morada_2017.jpg', // Chicha Morada
  'pisco sour peruvian cocktail egg white foam lime': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Pisco_sour_20100613b.JPG/960px-Pisco_sour_20100613b.JPG', // Pisco Sour
  'arroz con leche peruvian rice pudding cinnamon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Arroz_con_leche%2C_postre.jpg/960px-Arroz_con_leche%2C_postre.jpg', // Arroz con Leche
  'tiradito peruvian fish slices sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Tiradito.jpg/960px-Tiradito.jpg', // Tiradito
  'lecso hungarian pepper tomato stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Warm_Colors-_my_Mom%27s_Hungarian_Lecs%C3%B3_cropped.jpg/960px-Warm_Colors-_my_Mom%27s_Hungarian_Lecs%C3%B3_cropped.jpg', // Lecsó
  'palinka hungarian fruit brandy shot': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Sopron_barack_07.JPG/960px-Sopron_barack_07.JPG', // Pálinka
  'turos csusza hungarian pasta cottage cheese bacon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/T%C3%BAr%C3%B3st%C3%A9szta.jpg/960px-T%C3%BAr%C3%B3st%C3%A9szta.jpg', // Túrós Csusza
  'hungarian goulash beef paprika soup pot': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Gulyas080.jpg/960px-Gulyas080.jpg', // Gulyás
  'paprikas csirke hungarian chicken paprika sour cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Chicken_Paprikash_%28Csirke_Paprik%C3%A1s%29.jpg/960px-Chicken_Paprikash_%28Csirke_Paprik%C3%A1s%29.jpg', // Paprikás Csirke
  'porkolt hungarian beef stew paprika onion thick': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/P%C3%B6rk%C3%B6lt.jpg/960px-P%C3%B6rk%C3%B6lt.jpg', // Pörkölt
  'halaszle hungarian fishermans soup paprika carp': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Pot_of_Hungarian_Fisherman%27s_Soup_%28Hal%C3%A1szl%C3%A9%2C_Karpfensuppe%29.jpg/500px-Pot_of_Hungarian_Fisherman%27s_Soup_%28Hal%C3%A1szl%C3%A9%2C_Karpfensuppe%29.jpg', // Halászlé
  'toltott kaposzta hungarian stuffed cabbage sauerkraut smoked meat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/T%C3%B6lt%C3%B6tt_k%C3%A1poszta%2C_2.jpg/960px-T%C3%B6lt%C3%B6tt_k%C3%A1poszta%2C_2.jpg', // Töltött Káposzta
  'langos hungarian fried dough sour cream cheese garlic': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Langos_Eger_Hungary.jpg/960px-Langos_Eger_Hungary.jpg', // Lángos
  'kurtoskalacs chimney cake spiral cinnamon sugar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/K%C3%BCrt%C5%91skal%C3%A1cs2011.jpg/960px-K%C3%BCrt%C5%91skal%C3%A1cs2011.jpg', // Kürtőskalács
  'dobos torte hungarian chocolate caramel layer cake': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Dobos_cake_%28Gerbeaud_Confectionery_Budapest_Hungary%29.jpg/960px-Dobos_cake_%28Gerbeaud_Confectionery_Budapest_Hungary%29.jpg', // Dobos Torta
  'retes hungarian strudel cherry apple sour cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Strudel.jpg/960px-Strudel.jpg', // Rétes
  'unicum hungarian bitter herbal liqueur dark bottle': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Unicumbottle.png/960px-Unicumbottle.png', // Unicum
  'tokaji wine golden sweet hungarian botrytis': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Szent_Tam%C3%A1s_Szamorodni_2013.jpg/500px-Szent_Tam%C3%A1s_Szamorodni_2013.jpg', // Tokaji,
  'zacusca romanian vegetable spread jar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Zacusc%C4%83_bgiu.jpg/960px-Zacusc%C4%83_bgiu.jpg', // Zacuscă
  'tochitura pork stew romanian polenta': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Tochitura-moldoveneasca.jpg/960px-Tochitura-moldoveneasca.jpg', // Tochitura
  'murături pickled vegetables romanian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Gogonic%C4%83_castrave%C5%A3i_conopid%C4%83_murate.jpg/960px-Gogonic%C4%83_castrave%C5%A3i_conopid%C4%83_murate.jpg', // Murături
  'drob romanian lamb offal terrine': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Drob_de_Miel.JPG/960px-Drob_de_Miel.JPG', // Drob
  'mamaliga romanian polenta cornmeal pot': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Kulesha%26brunza.jpg/500px-Kulesha%26brunza.jpg', // Mămăligă
  'sarmale romanian stuffed cabbage rolls pork rice': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Sarmale_with_polenta_and_sour_cream.jpg/500px-Sarmale_with_polenta_and_sour_cream.jpg', // Sarmale
  'ciorba de burta romanian tripe soup sour cream vinegar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Ciorba_de_burta_2.jpg/960px-Ciorba_de_burta_2.jpg', // Ciorbă de Burtă
  'mici romanian grilled skinless sausages mustard': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Mititei_aufm_Grill.jpg/960px-Mititei_aufm_Grill.jpg', // Mici
  'ciorba romanian sour vegetable soup borsch lovage': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Ciorb%C4%83_de_legume_2.jpg/960px-Ciorb%C4%83_de_legume_2.jpg', // Ciorbă de Legume
  'tocanita romanian pork stew tomato paprika': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Toc%C4%83ni%C8%9B%C4%83_de_mur%C4%83turi.jpg/960px-Toc%C4%83ni%C8%9B%C4%83_de_mur%C4%83turi.jpg', // Tocăniță
  'jumari romanian pork cracklings lard fried': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Pork_crackling_02.jpg/960px-Pork_crackling_02.jpg', // Jumări
  'cozonac romanian sweet bread walnut cocoa christmas': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Cozonac-cu-nuca-103.jpg/960px-Cozonac-cu-nuca-103.jpg', // Cozonac
  'papanasi romanian fried cheese doughnut cream jam': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Papanasi_cu_cirese.jpg/960px-Papanasi_cu_cirese.jpg', // Papanași
  'palinca romanian fruit brandy plum spirit glass': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Palinc%C4%83.jpg/960px-Palinc%C4%83.jpg', // Pălincă
  'salata de boeuf romanian potato vegetable mayonnaise': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Salat%C4%83_de_boeuf3.png/960px-Salat%C4%83_de_boeuf3.png', // Salată de Boeuf,
  'moules frites belgian mussels steamed fries': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Moules_Frites.jpg/500px-Moules_Frites.jpg', // Moules-Frites
  'belgian frites fries cone mayo friture': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Belgian_frites_with_andalouse_sauce.jpg/960px-Belgian_frites_with_andalouse_sauce.jpg', // Belgian Frites
  'carbonnade flamande belgian beef beer stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Jielbeaumadier_carbonade_flamande_2010.jpg/960px-Jielbeaumadier_carbonade_flamande_2010.jpg', // Carbonnade Flamande
  'waterzooi belgian chicken fish stew cream vegetable': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Waterzooi_%28Fastaff%29.jpg/960px-Waterzooi_%28Fastaff%29.jpg', // Waterzooi
  'belgian waffle liège brussels cream strawberry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Waffle_with_strawberries_and_confectioner%27s_sugar.jpg/960px-Waffle_with_strawberries_and_confectioner%27s_sugar.jpg', // Belgian Waffle
  'belgian chocolate praline truffle box': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Belgian_chocolates.jpg/500px-Belgian_chocolates.jpg', // Belgian Chocolate
  'speculoos spiced cookie belgium cinnamon caramelised': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Speculoos_Cookies_%2825841384343%29.jpg/960px-Speculoos_Cookies_%2825841384343%29.jpg', // Speculoos
  'belgian beer trappist abbey glass golden': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Duvel_beer_in_beer_glass%2C_2024.jpg/960px-Duvel_beer_in_beer_glass%2C_2024.jpg', // Belgian Beer
  'jenever belgian gin spirit juniper glass': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Hasseltse_jenever.jpg/960px-Hasseltse_jenever.jpg', // Jenever
  'stoemp mashed potato vegetables belgian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Cod_and_stoemp.jpg/960px-Cod_and_stoemp.jpg', // Stoemp
  'chicons au gratin chicory ham cheese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Chicory_%28witlof%29%2C_oven_dish_with_ham_and_cheese.jpg/960px-Chicory_%28witlof%29%2C_oven_dish_with_ham_and_cheese.jpg', // Chicons au Gratin,
  'banitsa bulgarian filo pastry cheese egg': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/%D0%92%D0%BA%D1%83%D1%81%D0%BD%D0%B0_%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B0_%D0%B1%D0%B0%D0%BD%D0%B8%D1%86%D0%B0.JPG/960px-%D0%92%D0%BA%D1%83%D1%81%D0%BD%D0%B0_%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B0_%D0%B1%D0%B0%D0%BD%D0%B8%D1%86%D0%B0.JPG', // Banitsa
  'shopska salad bulgarian tomato cucumber pepper feta': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Chopska.jpg/960px-Chopska.jpg', // Shopska Salad
  'kavarma bulgarian pork stew clay pot mushroom': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Kavarma.jpeg/960px-Kavarma.jpeg', // Kavarma
  'tarator bulgarian cold cucumber yogurt soup dill': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Tarator_%28Bulgarian_cold_soup%29.jpg/960px-Tarator_%28Bulgarian_cold_soup%29.jpg', // Tarator
  'sarmi bulgarian stuffed cabbage grape leaves rice pork': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/Sarma_and_yugourt.JPG/960px-Sarma_and_yugourt.JPG', // Sarmi
  'kebapche bulgarian grilled minced meat cumin': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Kebapche_bg.jpg/960px-Kebapche_bg.jpg', // Kebapche
  'shkembe chorba tripe soup bulgaria garlic vinegar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Shkembe-chorba_in_Kardzhali_2011.JPG/960px-Shkembe-chorba_in_Kardzhali_2011.JPG', // Shkembe Chorba
  'lyutenitsa bulgarian red pepper tomato spread': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/%D0%9B%D1%83%D1%82%D0%B5%D0%BD%D0%B8%D1%86%D0%B0.jpg/960px-%D0%9B%D1%83%D1%82%D0%B5%D0%BD%D0%B8%D1%86%D0%B0.jpg', // Lyutenitsa
  'mekitsi bulgarian fried dough breakfast yogurt jam': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Mekici_and_jam.JPG/960px-Mekici_and_jam.JPG', // Mekitsi
  'ayran bulgarian yogurt drink chilled': 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Fresh_ayran.jpg', // Ayran
  'kyufte bulgarian meatball grilled': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Kebapcheta.JPG/960px-Kebapcheta.JPG', // Kyufte
  'meshana skara mixed grill bulgarian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Bulgarian_cuisine_Meat_dish_with_garnish_and_lyutenitsa_sauce_%28Cucina_Bulgara%29_01.jpg/960px-Bulgarian_cuisine_Meat_dish_with_garnish_and_lyutenitsa_sauce_%28Cucina_Bulgara%29_01.jpg', // Meshana Skara
  'rakia bulgarian brandy shot': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/%D0%95%D0%BB%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D0%A1%D0%BB%D0%B8%D0%B2%D0%BE%D0%B2%D0%B0.jpg/330px-%D0%95%D0%BB%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D0%A1%D0%BB%D0%B8%D0%B2%D0%BE%D0%B2%D0%B0.jpg', // Rakia
  'boza fermented drink bulgarian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Boza_bg.jpg/960px-Boza_bg.jpg', // Boza,
  'cevapi balkan grilled sausage somun bread kajmak': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Cevapi_s_kajmakom.jpg/500px-Cevapi_s_kajmakom.jpg', // Ćevapi
  'burek bosnian filo meat cheese spinach spiral': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Meat_burek_%28GAK_bakery%2C_Belgrade%2C_Serbia%29.jpg/960px-Meat_burek_%28GAK_bakery%2C_Belgrade%2C_Serbia%29.jpg', // Burek
  'pljeskavica serbian burger patty lepinja cheese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Pleskavitsa.JPG/960px-Pleskavitsa.JPG', // Pljeskavica
  'ajvar balkan roasted red pepper relish jar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Ajvar1_bright.jpg/960px-Ajvar1_bright.jpg', // Ajvar
  'kajmak balkan cream cheese spread dairy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Kaymak_from_Montenegro_04.jpg/960px-Kaymak_from_Montenegro_04.jpg', // Kajmak
  'rakija slivovitz plum brandy balkan shot': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/%C5%A0ljivovica_%28Serbian_Slivovitz%29.jpg/960px-%C5%A0ljivovica_%28Serbian_Slivovitz%29.jpg', // Rakija
  'baklava balkan filo walnut syrup sweet': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Baklava_in_Sarajevo_84_in_LJubljana.jpg/960px-Baklava_in_Sarajevo_84_in_LJubljana.jpg', // Baklava
  'sarma balkan stuffed cabbage roll rice pork sour': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Serbian_Sarma.jpg/960px-Serbian_Sarma.jpg', // Sarma
  'tavce gravce north macedonian bean clay pot': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/%D0%A2%D0%B0%D0%B2%D1%87%D0%B5_%D0%93%D1%80%D0%B0%D0%B2%D1%87%D0%B5.jpg/960px-%D0%A2%D0%B0%D0%B2%D1%87%D0%B5_%D0%93%D1%80%D0%B0%D0%B2%D1%87%D0%B5.jpg', // Tavče Gravče
  'karadjordjeva snicla serbian stuffed schnitzel': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Kara%C4%91or%C4%91eva_%C5%A1nicla.jpg/960px-Kara%C4%91or%C4%91eva_%C5%A1nicla.jpg', // Karađorđeva Šnicla
  'pasulj serbian bean soup smoked meat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Pasulj_%2810291319804%29.jpg/960px-Pasulj_%2810291319804%29.jpg', // Pasulj
  'gibanica serbian cheese phyllo pastry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Gibanica_single_slice_with_full_pie_in_background.jpg/500px-Gibanica_single_slice_with_full_pie_in_background.jpg', // Gibanica
  'paprikas croatian chicken paprika stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Pile%C4%87i_Paprika%C5%A1_sa_Doma%C4%87im_Noklicama.jpg/960px-Pile%C4%87i_Paprika%C5%A1_sa_Doma%C4%87im_Noklicama.jpg', // Paprikaš
  'strukli croatian cheese pastry dumplings': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/%C5%A0trukli_iz_Okrugljaka.jpg/960px-%C5%A0trukli_iz_Okrugljaka.jpg', // Strukli,
  'chelo kebab persian rice saffron grilled meat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Chelo_Kabab_Soltani_Berlin_Kourosh.jpg/960px-Chelo_Kabab_Soltani_Berlin_Kourosh.jpg', // Chelo Kebab
  'ghormeh sabzi persian herb stew kidney beans lamb': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Ghormeh_Sabzi.JPG/960px-Ghormeh_Sabzi.JPG', // Ghormeh Sabzi
  'fesenjan persian walnut pomegranate chicken dark stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Khoresht-e_fesenjan.jpg/960px-Khoresht-e_fesenjan.jpg', // Fesenjan
  'ash reshteh persian noodle soup herb kashk': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Ash_Reshteh.JPG/960px-Ash_Reshteh.JPG', // Ash Reshteh
  'tahdig persian crispy rice crust golden saffron': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Persianmom%27s_mother%27s_%28persiangrandma%29_perfect_tahdig_rice.png/960px-Persianmom%27s_mother%27s_%28persiangrandma%29_perfect_tahdig_rice.png', // Tahdig
  'joojeh kabab persian saffron chicken skewer grilled': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Jujeh_Kabab_by_Taha.7.13.jpg/960px-Jujeh_Kabab_by_Taha.7.13.jpg', // Joojeh Kabab
  'bastani persian ice cream saffron rosewater pistachio': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Akbar_Mashti.JPG/500px-Akbar_Mashti.JPG', // Bastani
  'zereshk polo barberry rice saffron chicken iran': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Zereshk_polo_-_Riso_con_crespini.jpg/960px-Zereshk_polo_-_Riso_con_crespini.jpg', // Zereshk Polo
  'persian tea glass sugar cube saffron iran': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Persian_tea_glass.JPG/960px-Persian_tea_glass.JPG', // Persian Tea
  'doogh persian yogurt mint drink fizzy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Dough_%28ayran_%29_dei_Qashqai_in_Iran.jpg/960px-Dough_%28ayran_%29_dei_Qashqai_in_Iran.jpg', // Doogh
  'halva sesame saffron sweet persian dense': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Persian_halva.jpg/960px-Persian_halva.jpg', // Halva,
  'opor ayam indonesian coconut chicken white curry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Opor_Ayam_Telur_Pindang.JPG/960px-Opor_Ayam_Telur_Pindang.JPG', // Opor Ayam
  'martabak indonesian stuffed pancake thick': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/MartabakTelur.JPG/960px-MartabakTelur.JPG', // Martabak
  'rawon indonesian black beef soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Rawon_Setan_II.jpg/960px-Rawon_Setan_II.jpg', // Rawon
  'nasi goreng indonesian fried rice egg kecap manis': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Nasi_Goreng_Kampung_%2811967588375%29.jpg/960px-Nasi_Goreng_Kampung_%2811967588375%29.jpg', // Nasi Goreng
  'gado gado indonesian peanut sauce vegetable salad': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Gado_gado_jakarta.jpg/960px-Gado_gado_jakarta.jpg', // Gado-Gado
  'satay indonesian skewer peanut sauce charcoal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Sate_Ayam_Sabang_Telur_Uritan_1.jpg/960px-Sate_Ayam_Sabang_Telur_Uritan_1.jpg', // Satay
  'soto ayam indonesian chicken soup turmeric noodle': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Soto_ayam.JPG/960px-Soto_ayam.JPG', // Soto Ayam
  'tempeh indonesian fermented soybean fried': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Tempe_Goreng.jpg/960px-Tempe_Goreng.jpg', // Tempeh
  'bakso indonesian meatball soup noodle broth': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Bakso_mi_bihun.jpg/500px-Bakso_mi_bihun.jpg', // Bakso
  'nasi padang rice small dishes minangkabau': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Nasi_Padang_Pak_Nurdin.jpg/960px-Nasi_Padang_Pak_Nurdin.jpg', // Nasi Padang
  'cendol indonesian shaved ice pandan coconut palm sugar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Jakarta_street-side_Es_Cendol_4.jpg/960px-Jakarta_street-side_Es_Cendol_4.jpg', // Es Cendol
  'rendang beef dry curry coconut caramelised dark': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Rendang_daging_sapi_asli_Padang.JPG/960px-Rendang_daging_sapi_asli_Padang.JPG', // Rendang,
  'borscht ukrainian beet soup sour cream red': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Borscht_served.jpg/960px-Borscht_served.jpg', // Borscht
  'varenyky ukrainian dumplings potato cheese sour cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Varenyky_with_Potatoes_-_2026_-03.jpg/960px-Varenyky_with_Potatoes_-_2026_-03.jpg', // Varenyky
  'holubtsi ukrainian stuffed cabbage rolls rice pork tomato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Holubtsi.jpg/500px-Holubtsi.jpg', // Holubtsi
  'chicken kyiv breaded butter herb filled cutlet': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Chicken_Kiev_-_Ukrainian_East_Village_restaurant.jpg/500px-Chicken_Kiev_-_Ukrainian_East_Village_restaurant.jpg', // Chicken Kyiv
  'salo ukrainian cured pork fat garlic bread': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/%D0%A1%D0%B0%D0%BB%D0%BE_%D0%B7_%D1%87%D0%B0%D1%81%D0%BD%D0%B8%D0%BA%D0%BE%D0%BC_%D1%82%D0%B0_%D0%B3%D1%80%D1%96%D0%BD%D0%BA%D0%B8.jpg/960px-%D0%A1%D0%B0%D0%BB%D0%BE_%D0%B7_%D1%87%D0%B0%D1%81%D0%BD%D0%B8%D0%BA%D0%BE%D0%BC_%D1%82%D0%B0_%D0%B3%D1%80%D1%96%D0%BD%D0%BA%D0%B8.jpg', // Salo
  'pampushky ukrainian garlic bread buns soft': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Pampuchy_Donetsk.JPG/960px-Pampuchy_Donetsk.JPG', // Pampushky
  'deruny ukrainian potato pancakes sour cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Potato_pancakes_%D0%B4%D0%B5%D1%80%D1%83%D0%BD%D0%B8_diruni_deruni_daruni_dirani.jpg/960px-Potato_pancakes_%D0%B4%D0%B5%D1%80%D1%83%D0%BD%D0%B8_diruni_deruni_daruni_dirani.jpg', // Deruny
  'medivnyk ukrainian honey cake spiced dark': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Medivnyk_-_2.jpg/960px-Medivnyk_-_2.jpg', // Medivnyk
  'horilka ukrainian vodka spirit wheat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Zirkova_One_Ultra_Premium_Vodka_%28obverse%2C_Ukrainian_flag%29%2C_Canada%2C_2026-03-31.jpg/960px-Zirkova_One_Ultra_Premium_Vodka_%28obverse%2C_Ukrainian_flag%29%2C_Canada%2C_2026-03-31.jpg', // Horilka
  'kapusniak ukrainian sauerkraut soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Kapusniak.jpg/500px-Kapusniak.jpg', // Kapusniak
  'galushky ukrainian soft dumplings': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%81%D1%8C%D0%BA%D1%96_%D0%B3%D0%B0%D0%BB%D1%83%D1%88%D0%BA%D0%B8.jpg/960px-%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%81%D1%8C%D0%BA%D1%96_%D0%B3%D0%B0%D0%BB%D1%83%D1%88%D0%BA%D0%B8.jpg', // Galushky
  'kovbasa ukrainian sausage smoked': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/%D0%94%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D1%8F_%D0%BA%D0%BE%D0%B2%D0%B1%D0%B0%D1%81%D0%B0%2C_%D0%B7%D0%B0%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B0_%D0%B2_%D0%B4%D1%83%D1%85%D0%BE%D0%B2%D1%86%D1%96._%D0%97%D0%B0%D0%B2%D0%BE%D0%B4%D1%81%D1%8C%D0%BA%D0%B5._%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%89%D0%B8%D0%BD%D0%B0._2026_07.jpg/960px-%D0%94%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D1%8F_%D0%BA%D0%BE%D0%B2%D0%B1%D0%B0%D1%81%D0%B0%2C_%D0%B7%D0%B0%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B0_%D0%B2_%D0%B4%D1%83%D1%85%D0%BE%D0%B2%D1%86%D1%96._%D0%97%D0%B0%D0%B2%D0%BE%D0%B4%D1%81%D1%8C%D0%BA%D0%B5._%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%89%D0%B8%D0%BD%D0%B0._2026_07.jpg', // Kovbasa,
  'smorrebrod danish open sandwich rye bread herring': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Sm%C3%B8rrebr%C3%B8d_at_Kastrup_IMG_8275_C.JPG/960px-Sm%C3%B8rrebr%C3%B8d_at_Kastrup_IMG_8275_C.JPG', // Smørrebrød
  'frikadeller danish meatballs pan fried pork veal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Frikadeller.jpg/960px-Frikadeller.jpg', // Frikadeller
  'flaeskesteg danish roast pork crackling christmas': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Fl%C3%A6skesteg_r%C3%B8dk%C3%A5l_brunede_kartofler.jpg/960px-Fl%C3%A6skesteg_r%C3%B8dk%C3%A5l_brunede_kartofler.jpg', // Flæskesteg
  'rugbrod danish rye bread sourdough dark slice': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Rugbr%C3%B8d.JPG/960px-Rugbr%C3%B8d.JPG', // Rugbrød
  'aebleskiver danish pancake balls powdered sugar jam': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Aebelskivers_in_New_Orleans.jpg/960px-Aebelskivers_in_New_Orleans.jpg', // Æbleskiver
  'danish pastry wienerbrood laminated butter cinnamon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Homemade_spandauer_%28pastry%29_with_vanilla_cream_and_powdered_sugar.png/960px-Homemade_spandauer_%28pastry%29_with_vanilla_cream_and_powdered_sugar.png', // Wienerbrød
  'danish pickled herring marinated onion rye bread': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Aringa-marinato.jpg/960px-Aringa-marinato.jpg', // Herring
  'rodgrod rhubarb strawberry red berry pudding cream denmark': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Rote_Gr%C3%BCtze_mit_Sahne-3.jpg/960px-Rote_Gr%C3%BCtze_mit_Sahne-3.jpg', // Rødgrød med Fløde
  'stegt flaek danish fried pork': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Stegt_fl%C3%A6sk_med_persillesovs.jpg/960px-Stegt_fl%C3%A6sk_med_persillesovs.jpg', // Stegt Flæsk
  'risalamande danish rice pudding cherry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Risalamande%2C_a_Danish_Christmas_dessert.jpg/960px-Risalamande%2C_a_Danish_Christmas_dessert.jpg', // Risalamande,
  'svickova czech beef sirloin cream sauce bread dumpling': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Sv%C3%AD%C4%8Dkov%C3%A1_na_smetan%C4%9B.JPG/960px-Sv%C3%AD%C4%8Dkov%C3%A1_na_smetan%C4%9B.JPG', // Svíčková
  'vepro knedlo zelo czech pork knedliky sauerkraut': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Vep%C5%99o_knedlo_zelo%2C_Prague.jpg/960px-Vep%C5%99o_knedlo_zelo%2C_Prague.jpg', // Vepřo-knedlo-zelo
  'knedliky czech bread dumplings sliced steamed': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Dan%C4%8D%C3%AD_gul%C3%A1%C5%A1_a_houskov%C3%A9_knedl%C3%ADky_01.jpg/960px-Dan%C4%8D%C3%AD_gul%C3%A1%C5%A1_a_houskov%C3%A9_knedl%C3%ADky_01.jpg', // Knedlíky
  'trdelnik czech chimney cake cinnamon sugar prague': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Trdeln%C3%ADk-Basket-20101.JPG/960px-Trdeln%C3%ADk-Basket-20101.JPG', // Trdelník
  'gulas czech beef goulash bread dumpling pub': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Veprovy_gulas_s_karlovarskym_knedlikem.JPG/960px-Veprovy_gulas_s_karlovarskym_knedlikem.JPG', // Guláš
  'czech beer pilsner urquell pint prague pub': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Pilsner_Urquell_mug.jpg/960px-Pilsner_Urquell_mug.jpg', // Czech Beer
  'medovnik czech honey cake cream layers': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Medovnik_Prav%C4%8Dick%C3%A1_br%C3%A1na.jpg/960px-Medovnik_Prav%C4%8Dick%C3%A1_br%C3%A1na.jpg', // Medovník
  'smazeny syr czech fried cheese edam tartar sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Sma%C5%BEen%C3%BD_s%C3%BDr_s_tatarskou_om%C3%A1%C4%8Dkou_a_brambory.jpg/960px-Sma%C5%BEen%C3%BD_s%C3%BDr_s_tatarskou_om%C3%A1%C4%8Dkou_a_brambory.jpg', // Smažený Sýr
  'bramboraky czech potato pancakes garlic': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Potato_pancakes.jpg/960px-Potato_pancakes.jpg', // Bramboráky
  'czech roast duck cabbage dumplings': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Roast_duck_with_dumplings_%28Czech%29.JPG/960px-Roast_duck_with_dumplings_%28Czech%29.JPG', // Roast Duck & Cabbage
  'svestkove knedliky czech plum dumplings': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Polish_Plum_Dumplings_in_Warsaw.jpg/960px-Polish_Plum_Dumplings_in_Warsaw.jpg', // Švestkové Knedlíky
  'utopenci pickled sausages czech pub': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Utopenci.jpg/960px-Utopenci.jpg', // Utopenci,
  'baltic black rye bread dense dark sourdough': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Lithuanian_traditional_bread.jpg/960px-Lithuanian_traditional_bread.jpg', // Black Bread
  'cold borscht lithuanian pink yogurt beet cucumber': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Lurid_borscht.jpg/500px-Lurid_borscht.jpg', // Cold Borscht
  'cepelinai lithuanian potato dumpling pork bacon cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Cepelinai_Kaunas_2023.jpg/960px-Cepelinai_Kaunas_2023.jpg', // Cepelinai
  'smoked fish latvia estonia sprat herring brisling': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Zakouskis_aux_sprats.JPG/960px-Zakouskis_aux_sprats.JPG', // Smoked Fish
  'kama estonian roasted grain flour yogurt kefir': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Kama.jpg/960px-Kama.jpg', // Kama
  'latvian piragi bacon onion bread roll pastry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Latvian_piragi_%28bacon_buns%29.jpg/960px-Latvian_piragi_%28bacon_buns%29.jpg', // Latvian Piragi
  'kvass baltic fermented rye bread drink': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Mint_bread_kvas.jpg/960px-Mint_bread_kvas.jpg', // Kvass
  'latvian lithuanian beer alus farmhouse dark': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Glass_of_beer_at_restaurant_Jura_in_Jurmala.jpg/960px-Glass_of_beer_at_restaurant_Jura_in_Jurmala.jpg', // Alus
  'sakotis lithuanian tree cake baumkuchen': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/%C5%A0akotis_display_at_Kaunas_Central_Market_%28Urmas%29_2025.jpg/960px-%C5%A0akotis_display_at_Kaunas_Central_Market_%28Urmas%29_2025.jpg', // Šakotis
  'grey peas bacon latvian traditional': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Grey_peas_at_restaurant_Milda_in_Riga.jpg/960px-Grey_peas_at_restaurant_Milda_in_Riga.jpg', // Grey Peas & Bacon
  'verivorst estonian blood sausage christmas': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Verivorstid.jpg/960px-Verivorstid.jpg', // Verivorst,
  'cawl welsh lamb leek stew pot': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Cawl_Cymreig.jpg/330px-Cawl_Cymreig.jpg', // Cawl
  'welsh rarebit cheese sauce toast beer mustard': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Welsh_rarebit.JPG/960px-Welsh_rarebit.JPG', // Welsh Rarebit
  'bara brith welsh fruit bread tea speckled': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Bara_Brith_%283320696816%29.jpg/960px-Bara_Brith_%283320696816%29.jpg', // Bara Brith
  'laverbread welsh seaweed breakfast cockles bacon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Laverbread_or_Bara_Lawr_%28Porphyra_umbilicalis%29_on_Toast.jpg/960px-Laverbread_or_Bara_Lawr_%28Porphyra_umbilicalis%29_on_Toast.jpg', // Laverbread
  'welsh lamb roast leeks mountains hillside': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Roast_leg_of_lamb.jpg/960px-Roast_leg_of_lamb.jpg', // Welsh Lamb
  'glamorgan sausage welsh cheese leek vegetarian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Glamorgan_Sausages_with_Tomato_Chutney.jpg/960px-Glamorgan_Sausages_with_Tomato_Chutney.jpg', // Glamorgan Sausage
  'caerphilly cheese welsh white crumbly': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Caerphilly_cheese.jpg/960px-Caerphilly_cheese.jpg', // Caerphilly Cheese
  'welsh cake griddle scone dried fruit sugar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Closeup_of_Welsh_cakes%2C_February_2009.jpg/960px-Closeup_of_Welsh_cakes%2C_February_2009.jpg', // Welsh Cake
  'crempog welsh pancakes stack': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Crempog_-_Anglesey_style.JPG/960px-Crempog_-_Anglesey_style.JPG', // Crempog
  'faggots meatballs gravy welsh': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Faggots-and-gravy.jpg/960px-Faggots-and-gravy.jpg', // Faggots,
  'stamppot dutch mashed potato kale sausage': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Boerenkool_stamppot.jpg/960px-Boerenkool_stamppot.jpg', // Stamppot
  'stroopwafel dutch caramel waffle coffee cup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/How_to_eat_a_stroopwafel_%288557345379%29.jpg/960px-How_to_eat_a_stroopwafel_%288557345379%29.jpg', // Stroopwafel
  'bitterballen dutch fried meat croquette mustard beer': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Bitterballen_with_Dijon_mustard_-_Taproom_%E2%80%98t_Blauwe_Theehuis_2024-11-26.jpg/960px-Bitterballen_with_Dijon_mustard_-_Taproom_%E2%80%98t_Blauwe_Theehuis_2024-11-26.jpg', // Bitterballen
  'dutch raw herring hollandse nieuwe onion pickle': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Haring_met_ui.jpg/960px-Haring_met_ui.jpg', // Herring
  'poffertjes dutch mini pancake butter sugar fair': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Poffertjes-Melkhuis_%28cropped%29.jpg/960px-Poffertjes-Melkhuis_%28cropped%29.jpg', // Poffertjes
  'erwtensoep dutch split pea soup sausage rye bread': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Erwtensoep_roggebrood_katenspek.jpg/960px-Erwtensoep_roggebrood_katenspek.jpg', // Erwtensoep
  'gouda dutch cheese market wheel aged': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Chesses_gouda_affinage.JPG/960px-Chesses_gouda_affinage.JPG', // Gouda
  'appelgebak dutch apple cake cinnamon cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Apple_pie_7.jpg/960px-Apple_pie_7.jpg', // Appelgebak
  'hutspot dutch carrot potato mash': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Hutspot_met_stooflap_op_bord.JPG/500px-Hutspot_met_stooflap_op_bord.JPG', // Hutspot
  'rookworst dutch smoked sausage': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Rookworst_gedeeltelijk_in_plakjes_2025.jpg/960px-Rookworst_gedeeltelijk_in_plakjes_2025.jpg', // Rookworst,
  'fondue swiss cheese gruyere caquelon bread dip': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Swiss_cheese_fondue.JPG/960px-Swiss_cheese_fondue.JPG', // Fondue
  'raclette swiss melted cheese potato pickle machine': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Raclette_20040817_140816.jpg/960px-Raclette_20040817_140816.jpg', // Raclette
  'rosti swiss potato pancake crispy golden fried': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Roesti.jpg/500px-Roesti.jpg', // Rösti
  'zurcher geschnetzeltes swiss veal mushroom cream sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Z%C3%BCrcher_Geschnetzeltes_at_Zur_rote_Buech.jpg/960px-Z%C3%BCrcher_Geschnetzeltes_at_Zur_rote_Buech.jpg', // Zürcher Geschnetzeltes
  'swiss chocolate lindt bar milky smooth': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/L%C3%A4derach.jpg/960px-L%C3%A4derach.jpg', // Swiss Chocolate
  'birchermuesli swiss oat overnight yogurt apple': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Muesli.jpg/960px-Muesli.jpg', // Birchermüesli
  'alplermagronen swiss alpine macaroni potato cheese onion': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/%C3%84lplermagronen_2021.jpeg/960px-%C3%84lplermagronen_2021.jpeg', // Älplermagronen
  'rivella swiss soft drink whey lactose bottle': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Kleine_Rivellas_in_Bern_2024.jpg/960px-Kleine_Rivellas_in_Bern_2024.jpg', // Rivella
  'leckerli swiss spiced biscuit': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Basler_L%C3%A4ckerli_02.jpeg/500px-Basler_L%C3%A4ckerli_02.jpeg', // Leckerli,
  'wiener schnitzel veal breaded fried lemon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/960px-Wiener-Schnitzel02.jpg', // Wiener Schnitzel
  'tafelspitz boiled beef austrian horseradish apple sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Tafelspitz.jpg/960px-Tafelspitz.jpg', // Tafelspitz
  'sachertorte chocolate apricot cake vienna': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Sachertorte_in_Vienna.jpg/960px-Sachertorte_in_Vienna.jpg', // Sachertorte
  'kaiserschmarrn austrian shredded pancake plum compote': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/2015_0731_Kaiserschmarrn_Apfelso%C3%9Fe_Edelweissh%C3%BCtte_S%C3%B6lden.jpg/960px-2015_0731_Kaiserschmarrn_Apfelso%C3%9Fe_Edelweissh%C3%BCtte_S%C3%B6lden.jpg', // Kaiserschmarrn
  'gulasch viennese beef paprika stew bread roll': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Fiaker_Gulasch_Pumpe_Klagenfurt.jpg/960px-Fiaker_Gulasch_Pumpe_Klagenfurt.jpg', // Gulasch
  'viennese coffee house melange einspanner schlagobers': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Wiener_Melange_2.JPG/960px-Wiener_Melange_2.JPG', // Viennese Coffee
  'knodel bread dumplings austrian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Semmelkn%C3%B6del.jpg/960px-Semmelkn%C3%B6del.jpg', // Knödel
  'linzer torte almond jam tart austrian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Linzer_Torte%2C_2023.jpg/960px-Linzer_Torte%2C_2023.jpg', // Linzer Torte
  'apfelstrudel apple strudel pastry vienna cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Strudel.jpg/960px-Strudel.jpg', // Apfelstrudel (same photo as German Cuisine)
  'leberkase austrian meat loaf slice roll mustard': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Leberk%C3%A4se-1.jpg/960px-Leberk%C3%A4se-1.jpg', // Leberkäse (same photo as German Cuisine)
  'lutefisk dried cod norwegian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/ForkLutefisk.jpg/960px-ForkLutefisk.jpg', // Lutefisk
  'pinnekjott dried lamb ribs norwegian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Pinnekjott.jpg/960px-Pinnekjott.jpg', // Pinnekjøtt
  'rommegrot sour cream porridge norwegian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/R%C3%B6mmegr%C3%B6t.jpg/500px-R%C3%B6mmegr%C3%B6t.jpg', // Rømmegrøt
  'rakfisk norwegian fermented trout flatbread sour cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Sliced_rakfisk.jpg/960px-Sliced_rakfisk.jpg', // Rakfisk
  'farikol norwegian lamb cabbage stew pepper national dish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/F%C3%A5r_i_k%C3%A5l.jpg/960px-F%C3%A5r_i_k%C3%A5l.jpg', // Fårikål
  'lefse norwegian potato flatbread butter sugar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Rolled_lefse.jpg/960px-Rolled_lefse.jpg', // Lefse
  'klippfisk norwegian salt dried cod bacalao': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Klippfisk.jpg/960px-Klippfisk.jpg', // Klippfisk
  'kjottkaker norwegian meatballs gravy potato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Traditional_Kj%C3%B8ttkaker.jpg/960px-Traditional_Kj%C3%B8ttkaker.jpg', // Kjøttkaker
  'gravlaks norwegian cured salmon dill mustard': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Graved_Lachs_Kartoffeln_Senfsosse.JPG/960px-Graved_Lachs_Kartoffeln_Senfsosse.JPG', // Gravlaks
  'brunost norwegian brown cheese caramel sweet': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Brunost_-_Brown_cheese.jpg/960px-Brunost_-_Brown_cheese.jpg', // Brunost
  'krumkake norwegian cone wafer cookie cream christmas': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Krumkaker.JPG/960px-Krumkaker.JPG', // Krumkake
  'red red ghanaian black eyed peas plantain': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Red_red_and_ripe_plantain.jpg/500px-Red_red_and_ripe_plantain.jpg', // Red Red
  'kontomire taro leaf stew ghanaian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Kontomire_Stew%2C_Eggs_and_Plantian.jpg/960px-Kontomire_Stew%2C_Eggs_and_Plantian.jpg', // Kontomire Stew
  'kenkey fermented corn dumpling ghana': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Kenkey_and_ground_pepper_with_sardine.jpg/960px-Kenkey_and_ground_pepper_with_sardine.jpg', // Kenkey
  'jollof rice ghanaian tomato stew one pot': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Jollof_Rice_with_Stew.jpg/960px-Jollof_Rice_with_Stew.jpg', // Jollof Rice
  'fufu ghanaian cassava plantain pounded stew soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Fufu_with_light_soup_and_chicken_in_a_ceramic_bowl.jpg/500px-Fufu_with_light_soup_and_chicken_in_a_ceramic_bowl.jpg', // Fufu
  'waakye ghanaian rice beans sorghum red sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Waakye_with_vegetables%2C_fish_and_egg_with_ripe_plantains.jpg/500px-Waakye_with_vegetables%2C_fish_and_egg_with_ripe_plantains.jpg', // Waakye
  'kelewele ghanaian spiced fried plantain ginger': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/%E2%80%9CKelewele%E2%80%9D_in_Ghana.jpg/960px-%E2%80%9CKelewele%E2%80%9D_in_Ghana.jpg', // Kelewele
  'groundnut soup ghana peanut chicken tomato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Fufuo_and_peanut_butter_soup.jpg/960px-Fufuo_and_peanut_butter_soup.jpg', // Groundnut Soup
  'banku ghana fermented corn cassava dough': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Banku_with_pepper_in_Asanka.jpg/960px-Banku_with_pepper_in_Asanka.jpg', // Banku
  'palm nut soup ghana banga red oily stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Palm_nut_soup_with_fish.jpg/960px-Palm_nut_soup_with_fish.jpg', // Palm Nut Soup
  'sobolo hibiscus drink ghana red ginger spiced': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Homemade_sorrel_drink.jpg/960px-Homemade_sorrel_drink.jpg', // Sobolo
  'sukuma wiki kenyan collard greens': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Ugali_%26_Sukuma_Wiki.jpg/500px-Ugali_%26_Sukuma_Wiki.jpg', // Sukuma Wiki
  'githeri kenyan beans corn stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Githeri_Meal.jpg/960px-Githeri_Meal.jpg', // Githeri
  'maharagwe kenyan coconut milk beans': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/MaharaGwe_yaliyoungwa_kwa_nazi.jpg/960px-MaharaGwe_yaliyoungwa_kwa_nazi.jpg', // Maharagwe
  'ugali kenyan cornmeal porridge stiff white': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Ugali_and_cabbage.jpg/960px-Ugali_and_cabbage.jpg', // Ugali
  'nyama choma kenyan roasted goat meat charcoal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Nyama_choma_barbeque.jpg/960px-Nyama_choma_barbeque.jpg', // Nyama Choma
  'pilau kenyan spiced rice meat cumin cinnamon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Pilau_Food_in_Kenya.jpg/960px-Pilau_Food_in_Kenya.jpg', // Pilau
  'matoke ugandan green banana stew steamed': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Matoke_and_Chicken.jpg/960px-Matoke_and_Chicken.jpg', // Matoke
  'mandazi east african fried dough coconut cardamom': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Bowl_of_mandazi.jpg/500px-Bowl_of_mandazi.jpg', // Mandazi
  'tanzanian banana soup green plantain coconut': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Mtori.jpg/960px-Mtori.jpg', // Supu ya Ndizi
  'east african chapati flatbread kenya layered': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/2_Chapati_warm_and_ready_to_be_eaten.jpg/960px-2_Chapati_warm_and_ready_to_be_eaten.jpg', // Chapati
  'kenyan chai tea spiced milk ginger cinnamon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Chai_In_Sakora.jpg/500px-Chai_In_Sakora.jpg', // Chai Masala
  'lumpia filipino spring rolls crispy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Lumpiang_Shanghai_2023.jpg/960px-Lumpiang_Shanghai_2023.jpg', // Lumpia
  'adobo filipino chicken pork soy vinegar garlic braised': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Chicken_adobo.jpg/960px-Chicken_adobo.jpg', // Adobo
  'sinigang filipino sour tamarind soup pork vegetable': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/The_Best_Sinigang_Cuisine.jpg/960px-The_Best_Sinigang_Cuisine.jpg', // Sinigang
  'lechon philippine whole roasted pig crispy skin': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Lechon_Baboy%2C_June_2025_%281%29.jpg/960px-Lechon_Baboy%2C_June_2025_%281%29.jpg', // Lechon
  'kare kare filipino oxtail peanut stew bagoong': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Mac_MG_5939.jpg/960px-Mac_MG_5939.jpg', // Kare-Kare
  'sisig filipino chopped pork sizzling plate calamansi': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Authentic_Kapampangan_Sisig.jpg/960px-Authentic_Kapampangan_Sisig.jpg', // Sisig
  'pancit filipino noodle stir fry shrimp pork birthday': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Pancit_Ilonggo_Style_-_12110747826.jpg/960px-Pancit_Ilonggo_Style_-_12110747826.jpg', // Pancit
  'halo halo filipino shaved ice ube purple taro': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Halo-Halo.jpg/960px-Halo-Halo.jpg', // Halo-Halo
  'balut fertilized duck egg philippine street food': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/EGG_BALUT.jpg/960px-EGG_BALUT.jpg', // Balut
  'meat pie australian pastry gravy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Aussie_meat_pie_%28cropped%29.jpg/500px-Aussie_meat_pie_%28cropped%29.jpg', // Meat Pie
  'sausage roll pastry flaky golden': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Sausage_roll_-_One_Market%2C_One_Garden_Brighton_%28cropped%29.jpg/960px-Sausage_roll_-_One_Market%2C_One_Garden_Brighton_%28cropped%29.jpg', // Sausage Roll
  'vegemite toast butter australian breakfast': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Vegemite_on_toast.jpg/330px-Vegemite_on_toast.jpg', // Vegemite Toast
  'lamington australian coconut chocolate sponge': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Mocha_Flake_amingtons.jpg/960px-Mocha_Flake_amingtons.jpg', // Lamington
  'anzac biscuits golden oat australian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/ANZAC_biscuits_%2814_April_2006%29.jpg/960px-ANZAC_biscuits_%2814_April_2006%29.jpg', // ANZAC Biscuits
  'damper australian bush bread campfire': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Wattleseed_Damper_%28cropped%29.jpg/960px-Wattleseed_Damper_%28cropped%29.jpg', // Damper
  'barramundi fish chips australian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Noosa_-_Barramundi_and_chips.jpg/960px-Noosa_-_Barramundi_and_chips.jpg', // Barramundi & Chips
  'chicken parmigiana parma australian pub': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Chicken_parmigiana.jpg/960px-Chicken_parmigiana.jpg', // Chicken Parma
  'smashed avocado toast sourdough cafe': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Smashed_Avocado_On_Toast_%28with_one_poached_egg%29_-_Jonny%27s_2026-01-06.jpg/960px-Smashed_Avocado_On_Toast_%28with_one_poached_egg%29_-_Jonny%27s_2026-01-06.jpg', // Smashed Avo
  'flat white coffee australian espresso milk': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Flat_white_coffee_with_pretty_feather_pattern.jpg/960px-Flat_white_coffee_with_pretty_feather_pattern.jpg', // Flat White
  'tim tam chocolate biscuit australian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Tim_Tams.jpg/960px-Tim_Tams.jpg', // Tim Tam
  'chiko roll australian deep fried': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Chiko_roll_wrapped_in_bag_and_handheld.jpg/960px-Chiko_roll_wrapped_in_bag_and_handheld.jpg', // Chiko Roll
  'kangaroo steak game meat red australian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Kangaroo_steak_at_a_restaurant_in_Sydney%2C_Australia.jpg/960px-Kangaroo_steak_at_a_restaurant_in_Sydney%2C_Australia.jpg', // Kangaroo Steak
  'fairy bread hundreds thousands sprinkles': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Fairy_Bread.jpg/960px-Fairy_Bread.jpg', // Fairy Bread
  'bush tucker australian native food indigenous': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Australian_bush_tucker%2C_Alice_Springs.jpg/500px-Australian_bush_tucker%2C_Alice_Springs.jpg', // Bush Tucker
  'pavlova meringue cream fruit dessert': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Pavlova_dessert.JPG/960px-Pavlova_dessert.JPG', // Pavlova
  'hangi maori earth oven new zealand': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/EDC_hangi_2010.jpg/960px-EDC_hangi_2010.jpg', // Hāngī
  'whitebait fritters new zealand fish patty': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Whitebait_Fritter.JPG/960px-Whitebait_Fritter.JPG', // Whitebait Fritters
  'green lipped mussels new zealand shell': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Steamed_mussels_-_Napier%2C_New_Zealand.jpg/960px-Steamed_mussels_-_Napier%2C_New_Zealand.jpg', // Green-lipped Mussels
  'paua abalone new zealand shell iridescent': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Haliotis_iris_LC0282.jpg/960px-Haliotis_iris_LC0282.jpg', // Pāua
  'hokey pokey ice cream honeycomb new zealand': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Honeycomb_ice_cream_and_hot_toffee_sauce_%285725734559%29.jpg/960px-Honeycomb_ice_cream_and_hot_toffee_sauce_%285725734559%29.jpg', // Hokey Pokey Ice Cream
  'rewena bread maori sourdough potato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Rewena.jpg/960px-Rewena.jpg', // Rewena Bread
  'bluff oysters new zealand raw shell': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Bluff_oysters_on_ice.jpg/960px-Bluff_oysters_on_ice.jpg', // Bluff Oysters
  'new zealand lamb roast rosemary': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Lamb_Sunday_roast_at_Black_Horse_Inn%2C_Nuthurst_West_Sussex_England.jpg/960px-Lamb_Sunday_roast_at_Black_Horse_Inn%2C_Nuthurst_West_Sussex_England.jpg', // NZ Lamb Roast
  'bacon egg pie new zealand pastry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Bacon%26egg_pie.jpg/960px-Bacon%26egg_pie.jpg', // Bacon & Egg Pie
  'feijoa crumble dessert new zealand': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Feijoa_Sorbet_%284202806392%29.jpg/960px-Feijoa_Sorbet_%284202806392%29.jpg', // Feijoa Crumble
  'kiwi burger beetroot egg new zealand': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Kiwiburger_sitting_on_the_top_of_the_container.jpg/960px-Kiwiburger_sitting_on_the_top_of_the_container.jpg', // Kiwi Burger
  'manuka honey jar toast new zealand': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Manuka_honey_in_a_bowl.jpg/960px-Manuka_honey_in_a_bowl.jpg', // Mānuka Honey Toast
  'kumara sweet potato soup new zealand': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Butternut_squash_soup_%285171665819%29.jpg/960px-Butternut_squash_soup_%285171665819%29.jpg', // Kumara Soup
  'lemon paeroa l&p new zealand drink bottle': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/L%26P_600ml_bottle_2023.jpg/960px-L%26P_600ml_bottle_2023.jpg', // L&P
  'chorba tunisian lamb soup tomato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Chorba_in_Tunisia.jpg/500px-Chorba_in_Tunisia.jpg', // Chorba
  'fricassee tunisienne fried bun tuna olives': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Le_fricass%C3%A9.JPG/960px-Le_fricass%C3%A9.JPG', // Fricassee Tunisienne
  'assida tunisian semolina pudding': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Tunisian_Assida_2018_2.jpg/960px-Tunisian_Assida_2018_2.jpg', // Assida
  'harissa tunisian chili paste red spice': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Harissa_Sauce.JPG/960px-Harissa_Sauce.JPG', // Harissa
  'brik tunisian fried pastry egg tuna': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Tunisian_Briks.JPG/960px-Tunisian_Briks.JPG', // Brik
  'lablabi tunisian chickpea soup harissa bread egg': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Bol_de_Leblabi_de_Tunisie%2C_21_mars_2017.jpg/960px-Bol_de_Leblabi_de_Tunisie%2C_21_mars_2017.jpg', // Lablabi
  'mechouia tunisian grilled salad pepper tomato tuna olive': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Salade_Mechouwya%2C_Tunisie%2C_juin_2021.jpg/960px-Salade_Mechouwya%2C_Tunisie%2C_juin_2021.jpg', // Mechouia
  'couscous tunisian lamb vegetable harissa': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Couscous_merguez%2C_kedid%2C_Tunisie_2021.jpg/960px-Couscous_merguez%2C_kedid%2C_Tunisie_2021.jpg', // Couscous Tunisien
  'ojja tunisian egg tomato pepper shakshouka merguez': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Ojja_merguez_photo1_%D8%B9%D8%AC%D8%A9_%D9%85%D8%B1%D9%82%D8%A7%D8%B2.jpg/960px-Ojja_merguez_photo1_%D8%B9%D8%AC%D8%A9_%D9%85%D8%B1%D9%82%D8%A7%D8%B2.jpg', // Ojja
  'makroudh tunisian semolina date pastry honey': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Makrouds.JPG/960px-Makrouds.JPG', // Makroudh
  'mint tea tunisian green glass pine nuts': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Tunisian_Tea_with_pine_nuts.jpg/960px-Tunisian_Tea_with_pine_nuts.jpg', // Mint Tea
  'merguez spicy lamb sausage grilled north african': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Merguez_sausages.jpg/960px-Merguez_sausages.jpg', // Merguez (same photo as Moroccan Cuisine Merguez)
  'khorovats armenian barbecue pork skewer charcoal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Barbecue_Armenian.jpg/960px-Barbecue_Armenian.jpg', // Khorovats
  'dolma armenian grape leaf stuffed rice lamb': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Armenian_Dolma_with_grape_leaves.jpg/960px-Armenian_Dolma_with_grape_leaves.jpg', // Dolma
  'harissa armenian wheat chicken porridge': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Armenian_Harisa.JPG/960px-Armenian_Harisa.JPG', // Harissa
  'manti armenian baked dumplings yogurt tomato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Carousel_Restaurant_Hollywood_July_2022_Manti.JPG/960px-Carousel_Restaurant_Hollywood_July_2022_Manti.JPG', // Manti
  'lahmajoun armenian flatbread minced meat thin pizza': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Lahmajoun_%28armenian%29_-_2014_-_3.JPG/960px-Lahmajoun_%28armenian%29_-_2014_-_3.JPG', // Lahmajoun
  'ghapama armenian stuffed pumpkin rice dried fruit': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/Ghapama.jpg/960px-Ghapama.jpg', // Ghapama
  'basturma armenian cured beef fenugreek spice': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Basturma_or_Pastroma_from_Armenia_2.JPG/960px-Basturma_or_Pastroma_from_Armenia_2.JPG', // Basturma
  'armenian brandy ararat cognac glass amber': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Ararat_brandy_%28cognac%29_bottles.jpg/960px-Ararat_brandy_%28cognac%29_bottles.jpg', // Armenian Brandy
  'lavash armenian flatbread thin': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Lavash_arm%C3%A9nien.jpg/960px-Lavash_arm%C3%A9nien.jpg', // Lavash
  'soujouk spiced sausage armenian grilled': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Yerevan%2C_Sujuk%2C_Basturma%2C_Armenian_dried_meat%2C_Armenia.jpg/960px-Yerevan%2C_Sujuk%2C_Basturma%2C_Armenian_dried_meat%2C_Armenia.jpg', // Soujouk
  'dibi senegalese grilled lamb mustard': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Dibi_accompagn%C3%A9_de_salades_et_frites.jpg/500px-Dibi_accompagn%C3%A9_de_salades_et_frites.jpg', // Dibi
  'thiou senegalese rice stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Thiou%2C_plat_s%C3%A9n%C3%A9galais.png/500px-Thiou%2C_plat_s%C3%A9n%C3%A9galais.png', // Thiou
  'thieboudienne senegalese fish rice one pot vegetable': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Ceebu_Jen%2C_Senegalese_dish.jpg/960px-Ceebu_Jen%2C_Senegalese_dish.jpg', // Thiéboudienne
  'yassa poulet senegalese chicken lemon onion': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Poulet_yassa_01.jpg/960px-Poulet_yassa_01.jpg', // Yassa Poulet
  'mafe senegalese peanut stew beef lamb groundnut': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Mafe.malien.jpg/960px-Mafe.malien.jpg', // Mafé
  'fataya senegalese fried pastry fish onion street food': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Fataya.jpg/960px-Fataya.jpg', // Fataya
  'thiakry senegalese millet yogurt dessert sweet': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Gambia_Chakery_0001.jpg/960px-Gambia_Chakery_0001.jpg', // Thiakry
  'cafe touba senegalese spiced coffee grains selim': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Caf%C3%A9_touba.jpg/960px-Caf%C3%A9_touba.jpg', // Café Touba
  'bissap hibiscus drink senegal red chilled mint': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Bissap_%26_Ginger_Juice_%287558541174%29.jpg/960px-Bissap_%26_Ginger_Juice_%287558541174%29.jpg', // Bissap
  'curry goat jamaican stew roti': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Curry_Goat_and_Rice.jpg/960px-Curry_Goat_and_Rice.jpg', // Curry Goat
  'bammy jamaican cassava flatbread fried': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Bammies.jpg/960px-Bammies.jpg', // Bammy
  'jerk chicken jamaican spiced grilled scotch bonnet': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Jerk_chicken_as_served_july_05.jpg/960px-Jerk_chicken_as_served_july_05.jpg', // Jerk Chicken
  'ackee saltfish jamaican national dish breakfast': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Ackee_and_Saltfish.jpg/960px-Ackee_and_Saltfish.jpg', // Ackee and Saltfish
  'jamaican oxtail stew butter beans allspice': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Jamaican_Oxtail_and_Butter_Beans.jpg/960px-Jamaican_Oxtail_and_Butter_Beans.jpg', // Oxtail
  'rice peas jamaican coconut milk kidney beans': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Rice_and_Peas.jpg/960px-Rice_and_Peas.jpg', // Rice and Peas
  'jamaican patty yellow pastry beef spiced': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Homemade_Jamaican_patties.jpg/960px-Homemade_Jamaican_patties.jpg', // Patty
  'escovitch fish jamaican fried pickled vinegar pepper': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Escovitch_fish%2C_fried_plaintains%2C_and_vegetables_on_top_of_rice.jpg/960px-Escovitch_fish%2C_fried_plaintains%2C_and_vegetables_on_top_of_rice.jpg', // Escovitch Fish
  'jamaican rum punch tropical fruit juice lime': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Planters_Punch_2.jpg/960px-Planters_Punch_2.jpg', // Rum Punch
  'mustikkapiirakka blueberry pie finnish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Finnish_blueberry_pie_with_ice_cream.jpg/960px-Finnish_blueberry_pie_with_ice_cream.jpg', // Mustikkapiirakka
  'kalakukko fish pork bread finnish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Kalakukko_%28opened%29.jpg/500px-Kalakukko_%28opened%29.jpg', // Kalakukko
  'karelian pasty rye rice porridge butter egg': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Karjalanpiirakka-20060227.jpg/960px-Karjalanpiirakka-20060227.jpg', // Karelian Pasty
  'lohikeitto finnish salmon soup cream potato dill': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Lohikeitto_dish.jpg/960px-Lohikeitto_dish.jpg', // Lohikeitto
  'finnish rye bread ruisleipa dark sour sourdough': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Ruisleip%C3%A4-limppu_reik%C3%A4leip%C3%A4_reissumies_hapankorppu-1.JPG/960px-Ruisleip%C3%A4-limppu_reik%C3%A4leip%C3%A4_reissumies_hapankorppu-1.JPG', // Rye Bread
  'mammi finnish rye malt easter pudding dark': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/M%C3%A4mmi_Kymppi.jpg/960px-M%C3%A4mmi_Kymppi.jpg', // Mämmi
  'reindeer sauteed lapland finnish lingonberry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Poronk%C3%A4ristys.jpg/960px-Poronk%C3%A4ristys.jpg', // Reindeer
  'salmiak finnish salmiakki salty liquorice candy black': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Salmiakki_-_Halva_-_composition.jpg/960px-Salmiakki_-_Halva_-_composition.jpg', // Salmiak
  'lonkero finnish long drink gin grapefruit soda can': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Orange_Long_Drink.jpg/960px-Orange_Long_Drink.jpg', // Lonkero
  'skyr icelandic dairy yogurt thick protein': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Skyr.is_me%C3%B0_vanillu.jpg/960px-Skyr.is_me%C3%B0_vanillu.jpg', // Skyr
  'hakarl fermented shark iceland dried cubes': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/H%C3%A1karl2.jpg/960px-H%C3%A1karl2.jpg', // Hákarl
  'kjotsupar icelandic lamb soup root vegetable': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Kj%C3%B6ts%C3%BApa.JPG/960px-Kj%C3%B6ts%C3%BApa.JPG', // Lamb Soup
  'plokkfiskur icelandic fish potato stew cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Plokkfiskur_2.jpg/960px-Plokkfiskur_2.jpg', // Plokkfiskur
  'rugbrad icelandic rye bread dark steam geothermal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/R%C3%BAgbrau%C3%B0_and_Flatbrau%C3%B0.jpg/960px-R%C3%BAgbrau%C3%B0_and_Flatbrau%C3%B0.jpg', // Rúgbrauð
  'kleinur icelandic twisted doughnut fried cardamom': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Kleina.jpg/960px-Kleina.jpg', // Kleinur
  'brennivin icelandic schnapps black death caraway': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Brennevin_500ml_bottle_on_the_table_with_various_icelandic_foods_in_background.jpg/960px-Brennevin_500ml_bottle_on_the_table_with_various_icelandic_foods_in_background.jpg', // Brennivín
  'hangikjot icelandic smoked lamb leg sliced': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Hangikj%C3%B6t.jpg/960px-Hangikj%C3%B6t.jpg', // Hangikjöt
  'icelandic hot dog pylsur reykjavik': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Hot_dog_from_B%C3%A6jarins_Beztu_Pylsur.jpg/960px-Hot_dog_from_B%C3%A6jarins_Beztu_Pylsur.jpg', // Pylsur
  'koshari egyptian rice lentils pasta': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Egyptian_food_Koshary.jpg/960px-Egyptian_food_Koshary.jpg', // Koshari
  'ful medames fava beans egyptian breakfast': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Ful_Medames.JPG/960px-Ful_Medames.JPG', // Ful Medames
  'molokhia jute leaf soup egyptian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Molokheya_hi_res.JPG/960px-Molokheya_hi_res.JPG', // Molokhia
  'hawawshi egyptian spiced meat sandwich': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Egyptian_meatloaf.jpg/960px-Egyptian_meatloaf.jpg', // Hawawshi
  'feteer meshaltet egyptian layered pastry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Egyptian-food-16.jpg/960px-Egyptian-food-16.jpg', // Feteer Meshaltet
  'om ali egyptian bread pudding cream': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Umm_Ali.JPG/960px-Umm_Ali.JPG', // Om Ali
  'basbousa semolina cake syrup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Basboosa.jpg/960px-Basboosa.jpg', // Basbousa
  'fattah egyptian bread rice lamb': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Egyptian_Fattah.jpg/960px-Egyptian_Fattah.jpg', // Fattah
  'shawarma meat wrap bread middle east': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Shawarma-sandwich-01.jpg/500px-Shawarma-sandwich-01.jpg', // Shawarma
  'kofta grilled meat skewer middle east': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Koftet-el-hati.jpg/960px-Koftet-el-hati.jpg', // Kofta
  'mahshi stuffed vegetables zucchini pepper rice': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/EgyptianMahshyStuffedAubergineTomatoWithRice_PhotoByWaelNawara.jpg/960px-EgyptianMahshyStuffedAubergineTomatoWithRice_PhotoByWaelNawara.jpg', // Mahshi
  'pelmeni russian dumplings meat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Pelmeni_Russian.jpg/960px-Pelmeni_Russian.jpg', // Pelmeni
  'beef stroganoff cream sauce mushroom': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Beef_Stroganoff_%26_Egg_Noodles.jpg/960px-Beef_Stroganoff_%26_Egg_Noodles.jpg', // Beef Stroganoff
  'blini russian pancakes caviar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Singer_Caf%C3%A9_-_Blini_with_sour_cream_and_red_caviar_IMG_3424.JPG/960px-Singer_Caf%C3%A9_-_Blini_with_sour_cream_and_red_caviar_IMG_3424.JPG', // Blini
  'olivier salad russian potato mayo': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/%D0%A1%D0%B0%D0%BB%D0%B0%D1%82_%D0%9E%D0%BB%D0%B8%D0%B2%D1%8C%D0%B5_03.jpg/960px-%D0%A1%D0%B0%D0%BB%D0%B0%D1%82_%D0%9E%D0%BB%D0%B8%D0%B2%D1%8C%D0%B5_03.jpg', // Olivier Salad
  'shchi russian cabbage soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Schi.jpg/960px-Schi.jpg', // Shchi
  'pirozhki russian stuffed buns': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Piroshki.JPG/960px-Piroshki.JPG', // Pirozhki
  'solyanka russian sour soup meat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Soljanka_food_05.jpg/960px-Soljanka_food_05.jpg', // Solyanka
  'okroshka cold kvass soup russian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/%D0%9E%D0%BA%D1%80%D0%BE%D1%88%D0%BA%D0%B0_Okroshka_05.jpg/960px-%D0%9E%D0%BA%D1%80%D0%BE%D1%88%D0%BA%D0%B0_Okroshka_05.jpg', // Okroshka
  'medovik honey cake russian layers': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Medovik.jpg/960px-Medovik.jpg', // Medovik
  'syrniki cottage cheese pancakes russian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Syrniki6.jpg/960px-Syrniki6.jpg', // Syrniki
  'kvass russian fermented bread drink': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Mint_bread_kvas.jpg/960px-Mint_bread_kvas.jpg', // Kvass
  'kasha buckwheat porridge russian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/%D0%93%D1%80%D0%B5%D1%87%D0%BD%D0%B5%D0%B2%D0%B0%D1%8F_%D0%BA%D0%B0%D1%88%D0%B0.jpg/960px-%D0%93%D1%80%D0%B5%D1%87%D0%BD%D0%B5%D0%B2%D0%B0%D1%8F_%D0%BA%D0%B0%D1%88%D0%B0.jpg', // Kasha
  'holodets aspic meat jelly russian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Aspic-with-eggs.jpg/500px-Aspic-with-eggs.jpg', // Holodets
  'wild alaska salmon fillet grilled cedar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Grilled_plated_salmon_fillet.jpg/960px-Grilled_plated_salmon_fillet.jpg', // Salmon
  'alaska king crab legs steamed red': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Alaskan_King_Crab_Legs_%283241225745%29.jpg/960px-Alaskan_King_Crab_Legs_%283241225745%29.jpg', // King Crab
  'halibut alaska pacific white fish grilled': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Grilled_halibut_with_smoked_Chilliwack_corn_puree%2C_faro_verde_risotto%2C_campari_tomato_chutney%2C_and_bitter_green_salad.jpg/960px-Grilled_halibut_with_smoked_Chilliwack_corn_puree%2C_faro_verde_risotto%2C_campari_tomato_chutney%2C_and_bitter_green_salad.jpg', // Halibut
  'akutaq eskimo ice cream alaska berries fat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Akutaq.jpg/960px-Akutaq.jpg', // Akutaq
  'bannock alaska native fry bread campfire': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Bannock_3.JPG/960px-Bannock_3.JPG', // Bannock
  'fireweed honey alaska pink flower meadow': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/%D0%9C%D1%91%D0%B4_%D0%B8%D0%B2%D0%B0%D0%BD-%D1%87%D0%B0%D1%8F_%D1%83%D0%B7%D0%BA%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%BD%D0%BE%D0%B3%D0%BE_%28honey_of_fireweed%29.jpg/330px-%D0%9C%D1%91%D0%B4_%D0%B8%D0%B2%D0%B0%D0%BD-%D1%87%D0%B0%D1%8F_%D1%83%D0%B7%D0%BA%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%BD%D0%BE%D0%B3%D0%BE_%28honey_of_fireweed%29.jpg', // Fireweed Honey
  'reindeer sausage alaska grilled hot dog bun': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Buttermilk_pancake_and_reindeer_sausage_%282526754309%29.jpg/960px-Buttermilk_pancake_and_reindeer_sausage_%282526754309%29.jpg', // Reindeer Sausage
  'muktuk whale skin blubber arctic indigenous': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/2013-365-282_Mmmmm_Muktuk_%2810184839444%29.jpg/960px-2013-365-282_Mmmmm_Muktuk_%2810184839444%29.jpg', // Muktuk
  'string hoppers sri lankan rice noodle nest': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Idiyappam_in_plate_1.jpg/960px-Idiyappam_in_plate_1.jpg', // String Hoppers
  'sri lankan rice curry dahl coconut multiple dishes': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Sri_Lankan_Rice_and_Curry.jpg/960px-Sri_Lankan_Rice_and_Curry.jpg', // Rice and Curry
  'hoppers sri lankan bowl shaped rice coconut egg': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Sri_Lanka-Egg_hoppers.jpg/960px-Sri_Lanka-Egg_hoppers.jpg', // Hoppers
  'kottu roti sri lankan chopped flatbread egg vegetable': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Chicken_Kottu.jpg/960px-Chicken_Kottu.jpg', // Kottu Roti
  'lamprais dutch burgher sri lankan banana leaf rice': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Lamprais_%282%29.jpg/960px-Lamprais_%282%29.jpg', // Lamprais
  'pol sambol sri lankan coconut chili onion condiment': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Pol_Sambol.jpg/960px-Pol_Sambol.jpg', // Pol Sambol
  'ceylon tea sri lankan plantation orange pekoe cup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Sri_Lanka-Broken_Orange_Pekoe.jpg/960px-Sri_Lanka-Broken_Orange_Pekoe.jpg', // Ceylon Tea
  'empanada chilena oven baked beef olive egg': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Empanada_de_pino.jpg/960px-Empanada_de_pino.jpg', // Empanada de Pino
  'cazuela chilena chicken beef stew potato corn': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Cazuela_de_pollo_chilena_%282021%29.jpg/960px-Cazuela_de_pollo_chilena_%282021%29.jpg', // Cazuela
  'pastel de choclo chilean corn pie beef': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Pastel_de_choclo.jpg/960px-Pastel_de_choclo.jpg', // Pastel de Choclo
  'completo chilean hot dog avocado sauerkraut mayo': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Completo_italiano_-_Flickr_-_B%C3%A1rb_Santelices.jpg/960px-Completo_italiano_-_Flickr_-_B%C3%A1rb_Santelices.jpg', // Completo
  'curanto chiloé earth pit seafood shellfish potato': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Curanto_al_Hoyo_Chilo%C3%A9.JPG/960px-Curanto_al_Hoyo_Chilo%C3%A9.JPG', // Curanto
  'pisco sour chilean cocktail lemon egg white': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Pisco_sour_20100613b.JPG/960px-Pisco_sour_20100613b.JPG', // Pisco Sour
  'sopaipillas chilean fried pumpkin bread': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Sopaipillas_con_Chancho_en_Piedra.jpg/960px-Sopaipillas_con_Chancho_en_Piedra.jpg', // Sopaipillas
  'ajiaco colombian chicken potato soup cream capers': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Ajiaco_in_Bogot%C3%A1.jpg/960px-Ajiaco_in_Bogot%C3%A1.jpg', // Ajiaco
  'bandeja paisa colombian platter beans rice pork egg': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Bandeja_paisa_30062011.jpg/960px-Bandeja_paisa_30062011.jpg', // Bandeja Paisa
  'arepa colombian corn cake grilled cheese': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Arepas_1.jpg/960px-Arepas_1.jpg', // Arepa
  'sancocho colombian chicken stew yuca plantain corn': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Sancocho_de_gallina_yopal.jpg/960px-Sancocho_de_gallina_yopal.jpg', // Sancocho
  'aguardiente colombian anise liquor shot glass': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Aguardiente_Antioque%C3%B1o_botellas.jpg/960px-Aguardiente_Antioque%C3%B1o_botellas.jpg', // Aguardiente
  'bunuelo colombian cheese fritter christmas round': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Bu%C3%B1uelos_Colombianos_%2824221303805%29.jpg/960px-Bu%C3%B1uelos_Colombianos_%2824221303805%29.jpg', // Buñuelo
  'changua colombian milk soup egg breakfast': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Changua_Soup.jpg/960px-Changua_Soup.jpg', // Changua
  'lechona colombian stuffed roast pig': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Lechona.JPG/960px-Lechona.JPG', // Lechona
  'pierogi polish dumplings boiled': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Pierogi_z_mas%C5%82em_-_2023.03.31.jpg/960px-Pierogi_z_mas%C5%82em_-_2023.03.31.jpg', // Pierogi
  'bigos hunter stew sauerkraut polish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Bigos%2C_March_2023_%281%29.jpg/960px-Bigos%2C_March_2023_%281%29.jpg', // Bigos
  'zurek sour rye soup polish egg': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/02026_Gut-Healing_Sour_Rye_Soup_with_a_Collagen_Broth.jpg/960px-02026_Gut-Healing_Sour_Rye_Soup_with_a_Collagen_Broth.jpg', // Żurek
  'barszcz beetroot borscht polish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Barszcz_czerwony_-_2.jpg/960px-Barszcz_czerwony_-_2.jpg', // Barszcz
  'kotlet schabowy breaded pork cutlet': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Kotlet_Schabowy.jpg/960px-Kotlet_Schabowy.jpg', // Kotlet Schabowy
  'golabki stuffed cabbage rolls polish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Golabki_jacek.jpg/960px-Golabki_jacek.jpg', // Gołąbki
  'kielbasa polish sausage grilled': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Polish_sausage%2C_Pozna%C5%84_2014.jpg/960px-Polish_sausage%2C_Pozna%C5%84_2014.jpg', // Kiełbasa
  'oscypek smoked cheese polish mountain': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Oscypek_z_grilla.jpg/960px-Oscypek_z_grilla.jpg', // Oscypek
  'makowiec poppy seed roll polish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/020211119_160347_silesian_poppy_seed_cake.jpg/960px-020211119_160347_silesian_poppy_seed_cake.jpg', // Makowiec
  'sernik polish cheesecake baked': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/2023_Sernik_polski_%281%29.jpg/960px-2023_Sernik_polski_%281%29.jpg', // Sernik
  'rosol polish chicken broth noodles': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/20221127_ros%C3%B3%C5%82_04.jpg/960px-20221127_ros%C3%B3%C5%82_04.jpg', // Rosół
  'placki ziemniaczane potato pancakes polish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Potato_pancakes.jpg/960px-Potato_pancakes.jpg', // Placki Ziemniaczane
  'poke bowl hawaii ahi tuna sesame seaweed': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Poke_bowl_001.jpg/960px-Poke_bowl_001.jpg', // Poke
  'hawaiian plate lunch macaroni salad two scoops rice': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Wardsplatelunch.jpg/960px-Wardsplatelunch.jpg', // Plate Lunch
  'kalua pig imu underground oven hawaii shredded pork': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Homemade_Kalua_Pig.jpg/960px-Homemade_Kalua_Pig.jpg', // Kalua Pig
  'loco moco hawaii hamburger rice egg gravy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Loco_moco_001.jpg/960px-Loco_moco_001.jpg', // Loco Moco
  'spam musubi hawaii sushi seaweed rice can': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Spam_musubi_001.jpg/960px-Spam_musubi_001.jpg', // Spam Musubi
  'shave ice hawaii rainbow syrup azuki matcha': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Hilo_Ice_Shave.JPG/960px-Hilo_Ice_Shave.JPG', // Shave Ice
  'poi taro paste purple hawaiian traditional': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Bowl_of_poi.jpg/960px-Bowl_of_poi.jpg', // Poi
  'lomi lomi salmon hawaiian tomato salt': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Lomi_lomi_salmon.jpg/960px-Lomi_lomi_salmon.jpg', // Lomi Salmon
  'haupia hawaiian coconut pudding white square': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Haupia.jpg/960px-Haupia.jpg', // Haupia
  'poutine canadian fries cheese curds gravy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Poutine_from_Windsor%2C_ON.jpg/960px-Poutine_from_Windsor%2C_ON.jpg', // Poutine
  'butter tarts canadian golden sweet pastry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Butter_tarts_on_cutting_board%288293490785%29.jpg/960px-Butter_tarts_on_cutting_board%288293490785%29.jpg', // Butter Tarts
  'nanaimo bars canadian chocolate custard': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Nanaimo_Bars%2C_stacked.jpg/960px-Nanaimo_Bars%2C_stacked.jpg', // Nanaimo Bars
  'tourtiere quebec meat pie christmas pastry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Warm_Tourtiere.jpg/960px-Warm_Tourtiere.jpg', // Tourtière
  'beaver tails canadian fried pastry cinnamon sugar': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Three_BeaverTails_pastry_flavours.jpg/960px-Three_BeaverTails_pastry_flavours.jpg', // BeaverTails
  'montreal smoked meat sandwich rye bread': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Smoked_meat_sandwich.jpg/960px-Smoked_meat_sandwich.jpg', // Montreal Smoked Meat
  'bannock indigenous canadian bread fried': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Bannock_3.JPG/960px-Bannock_3.JPG', // Bannock
  'peameal bacon canadian back bacon cornmeal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Flickr_bokchoi-snowpea_4266923676--Roast_peameal_bacon.jpg/960px-Flickr_bokchoi-snowpea_4266923676--Roast_peameal_bacon.jpg', // Peameal Bacon
  'saskatoon berry pie canadian prairie purple': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Saskatoon_berry_pie_served_at_The_Berry_Barn_outside_Saskatoon.jpg/960px-Saskatoon_berry_pie_served_at_The_Berry_Barn_outside_Saskatoon.jpg', // Saskatoon Berry Pie
  'newfoundland salt cod dried bread brewis': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/FishAndBrewisWithScrunchions.jpg/960px-FishAndBrewisWithScrunchions.jpg', // Fish and Brewis
  'wild pacific salmon cedar plank barbecue canada': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Cedar_Plank_Salmon_with_Balsamic_Ginger_Marinade_%2828836223862%29.jpg/960px-Cedar_Plank_Salmon_with_Balsamic_Ginger_Marinade_%2828836223862%29.jpg', // Wild Salmon
  'maple taffy sugar shack snow tire canada': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Maple_toffee.JPG/500px-Maple_toffee.JPG', // Maple Syrup Taffy
  'jollof rice west african tomato spiced': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Jollof_Rice_with_Stew.jpg/960px-Jollof_Rice_with_Stew.jpg', // Jollof Rice
  'egusi soup melon seed nigerian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Egusi_soup_in_a_plate.jpg/960px-Egusi_soup_in_a_plate.jpg', // Egusi Soup
  'pounded yam nigerian dough white': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Pounded_yam_%28Iy%C3%A0n%29.jpg/960px-Pounded_yam_%28Iy%C3%A0n%29.jpg', // Pounded Yam
  'suya nigerian spiced beef skewer': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/SuyavarietiesTX.JPG/960px-SuyavarietiesTX.JPG', // Suya
  'akara black eyed pea fritters nigerian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Beans_Ball-Akara.jpg/500px-Beans_Ball-Akara.jpg', // Akara
  'moi moi steamed bean pudding nigerian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Moin-Moin-good.jpg/960px-Moin-Moin-good.jpg', // Moi Moi
  'pepper soup nigerian spicy broth meat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Fish_pepper_soup.jpg/960px-Fish_pepper_soup.jpg', // Pepper Soup
  'ogbono soup wild mango seed nigerian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Ogbono_soup.jpg/960px-Ogbono_soup.jpg', // Ogbono Soup
  'puff puff nigerian fried dough balls': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Nigerian-puff-puff-recipe_cropped.jpg/500px-Nigerian-puff-puff-recipe_cropped.jpg', // Puff Puff
  'eba garri cassava nigerian dough': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Nigerian_Garri_%28Eba%29_and_Egusi_Soup.jpg/960px-Nigerian_Garri_%28Eba%29_and_Egusi_Soup.jpg', // Eba
  'banga soup palm nut nigerian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Eba_served_with_Fresh_fish_banga_soup_in_a_clay_pot.jpg/960px-Eba_served_with_Fresh_fish_banga_soup_in_a_clay_pot.jpg', // Banga Soup
  'boerewors south african sausage coil braai': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Boerewors_braai.jpg/960px-Boerewors_braai.jpg', // Boerewors
  'biltong south african dried cured meat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Sliced_Biltong.jpg/960px-Sliced_Biltong.jpg', // Biltong
  'bobotie south african spiced meat egg custard': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Bobotie_South_Africa.jpg/960px-Bobotie_South_Africa.jpg', // Bobotie
  'bunny chow curry bread bowl south africa': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Durban%27s_Famous_Mutton_Bunny_Chow.jpg/960px-Durban%27s_Famous_Mutton_Bunny_Chow.jpg', // Bunny Chow
  'potjiekos south african cast iron stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/The_Potjie_is_ready.JPG/960px-The_Potjie_is_ready.JPG', // Potjiekos
  'melktert south african milk tart': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Melktert.jpg/960px-Melktert.jpg', // Melktert
  'koeksister south african syrup pastry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Koeksisters.JPG/960px-Koeksisters.JPG', // Koeksister
  'vetkoek south african fried bread': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Vetkoek.jpg/960px-Vetkoek.jpg', // Vetkoek
  'chakalaka south african vegetable relish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Chakalaka.jpg/960px-Chakalaka.jpg', // Chakalaka
  'pap south african maize porridge': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Pap_with_sheba%2C_wors_and_mutton_chop.jpg/960px-Pap_with_sheba%2C_wors_and_mutton_chop.jpg', // Pap
  'braai south african barbecue grill': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/South_African_Braai_fire_used.jpg/960px-South_African_Braai_fire_used.jpg', // Braai
  'tostones twice fried green plantain flat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Tostones.JPG/960px-Tostones.JPG', // Tostones
  'cuban flan caramel custard dessert': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Homemade_Flan.jpg/960px-Homemade_Flan.jpg', // Flan Cubano
  'ropa vieja cuban shredded beef tomato peppers': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/RealRopaVieja.jpg/960px-RealRopaVieja.jpg', // Ropa Vieja
  'moros y cristianos cuban black beans rice together': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Moros_y_Cristianos%2C_Cuba_%289419810743%29.jpg/960px-Moros_y_Cristianos%2C_Cuba_%289419810743%29.jpg', // Moros y Cristianos
  'cuban sandwich pressed roasted pork ham swiss': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Tampa_Cuban_sandwich.jpg/500px-Tampa_Cuban_sandwich.jpg', // Cuban Sandwich
  'lechon asado cuban roast pork mojo citrus garlic': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Pernil.1.jpg/960px-Pernil.1.jpg', // Lechón Asado
  'mojito cuban rum mint lime soda glass': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Drinks_-_Virgin_Mojito%2C_Orange_Juice.jpg/960px-Drinks_-_Virgin_Mojito%2C_Orange_Juice.jpg', // Mojito
  'cuban coffee colada espresso shot sweet dark': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/Cuban_coffee-_2013-04-05_14-30.jpg/960px-Cuban_coffee-_2013-04-05_14-30.jpg', // Cuban Coffee
  'khachapuri georgian cheese bread': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Old_Tbilisi%2C_Georgian_khachapuri%2C_Georgia.jpg/960px-Old_Tbilisi%2C_Georgian_khachapuri%2C_Georgia.jpg', // Khachapuri
  'khinkali georgian dumplings meat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Khinkali%2C_Restaurant_Aragvi.jpg/960px-Khinkali%2C_Restaurant_Aragvi.jpg', // Khinkali
  'mtsvadi georgian shashlik skewer': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Grilled_shashlik.jpg/960px-Grilled_shashlik.jpg', // Mtsvadi
  'chakhokhbili georgian chicken herb stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/%D0%A7%D0%B0%D1%85%D0%BE%D1%85%D0%B1%D0%B8%D0%BB%D0%B8.JPG/960px-%D0%A7%D0%B0%D1%85%D0%BE%D1%85%D0%B1%D0%B8%D0%BB%D0%B8.JPG', // Chakhokhbili
  'badrijani nigvzit eggplant walnut georgian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Badrijani_%28cropped%29.jpg/960px-Badrijani_%28cropped%29.jpg', // Badrijani Nigvzit
  'satsivi georgian walnut sauce chicken': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Satsivi_%282%29.jpg/960px-Satsivi_%282%29.jpg', // Satsivi
  'churchkhela georgian walnut candy grape': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Churchkhela%2C_Tbilisi_%282023%29.jpg/960px-Churchkhela%2C_Tbilisi_%282023%29.jpg', // Churchkhela
  'lobiani georgian bean bread pastry': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Lobiani%2C_Restaurant_Aragvi.jpg/960px-Lobiani%2C_Restaurant_Aragvi.jpg', // Lobiani
  'tkemali georgian plum sauce condiment': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Red_and_brown_tkemali.jpg/960px-Red_and_brown_tkemali.jpg', // Tkemali
  'adjarian khachapuri boat egg cheese georgian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Khachapuri_Adjaruli_with_egg_and_butter_2016.jpg/960px-Khachapuri_Adjaruli_with_egg_and_butter_2016.jpg', // Adjarian Khachapuri
  'chakapuli georgian lamb tarragon stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Chakapuli.jpg/960px-Chakapuli.jpg', // Chakapuli
  'rechta algerian flat noodles chicken': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/20161201_211344_rechta.jpg/960px-20161201_211344_rechta.jpg', // Rechta
  'berkoukes algerian pearl pasta stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Berkoukes.jpg/960px-Berkoukes.jpg', // Berkoukes
  'tagine olives chicken algerian': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Chicken_Tajine_1.jpg/960px-Chicken_Tajine_1.jpg', // Tagine Zitoune
  'bourek algerian fried roll meat': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Bourek_laadjine.jpg/960px-Bourek_laadjine.jpg', // Bourek
  'algerian couscous lamb chickpeas vegetables broth': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Liat_Portal_for_Foodie_Disorder_-_Algerian_Couscous_with_Vegetables.jpg/960px-Liat_Portal_for_Foodie_Disorder_-_Algerian_Couscous_with_Vegetables.jpg', // Couscous Algérien
  'chakhchoukha algerian torn bread stew lamb sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Lyon_7e_-_Restaurant_Air_du_Pays_-_Chakhchoukha_Biskra_Poulet.jpg/960px-Lyon_7e_-_Restaurant_Air_du_Pays_-_Chakhchoukha_Biskra_Poulet.jpg', // Chakhchoukha
  'merguez algerian lamb spicy sausage grilled': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Merguez_grilled.jpg/960px-Merguez_grilled.jpg', // Merguez
  'makrout algerian semolina date pastry honey': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Makroudh_-_%D9%85%D9%82%D8%B1%D9%88%D8%B6_-_Makroud_photo2.jpg/960px-Makroudh_-_%D9%85%D9%82%D8%B1%D9%88%D8%B6_-_Makroud_photo2.jpg', // Makrout
  'algerian mint tea gunpowder glass sugar cube pine nuts': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Tunisian_Tea_with_pine_nuts.jpg/960px-Tunisian_Tea_with_pine_nuts.jpg', // Mint Tea
  'wonton mee noodles singapore': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Singapore_Wonton_noodles_%28cropped%29.jpg/960px-Singapore_Wonton_noodles_%28cropped%29.jpg', // Wonton Mee
  'ice kachang shaved ice dessert singapore colorful': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Ais_kacang.jpg/960px-Ais_kacang.jpg', // Ice Kachang
  'chilli crab singapore mudcrab tomato sauce mantou': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Chilli_crab-01.jpg/960px-Chilli_crab-01.jpg', // Chilli Crab
  'hainanese chicken rice singapore poached ginger soy': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Hainanese_chicken_rice_in_Singapore.jpg/960px-Hainanese_chicken_rice_in_Singapore.jpg', // Chicken Rice
  'singapore laksa coconut curry noodle prawn': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Katong_laksa.jpg/960px-Katong_laksa.jpg', // Laksa
  'char kway teow singapore wok hei flat noodle prawn': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Char_kway_teow.jpg/500px-Char_kway_teow.jpg', // Char Kway Teow
  'kaya toast singapore coconut jam butter coffee eggs': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Kaya_toast_on_a_plate.jpg/960px-Kaya_toast_on_a_plate.jpg', // Kaya Toast
  'sauce arachide west african peanut sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Mafe.malien.jpg/960px-Mafe.malien.jpg', // Sauce Arachide
  'foutou pounded yam plantain ivory coast': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Du_foutou_%C3%A0_la_banane_plantain_05.jpg/960px-Du_foutou_%C3%A0_la_banane_plantain_05.jpg', // Foutou
  'attieke ivorian fermented cassava couscous fish': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Attieke.JPG/960px-Attieke.JPG', // Attiéké
  'garba attieke tuna abidjan street food': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Traditional_Garba.jpg/500px-Traditional_Garba.jpg', // Garba
  'aloco ivorian fried ripe plantain spicy sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Fried_plantain_alloco.jpg/500px-Fried_plantain_alloco.jpg', // Aloco
  'kedjenou ivory coast chicken clay pot tomato pepper': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Kedjenou.JPG/960px-Kedjenou.JPG', // Kedjenou
  'palm wine bangui ivory coast gourd white': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Toddy_Bottle_and_Glass.jpg/500px-Toddy_Bottle_and_Glass.jpg', // Bangui
  'kuy teav cambodian noodle soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Kuyteav.jpg/500px-Kuyteav.jpg', // Kuy Teav
  'fish amok cambodian steamed coconut curry banana leaf': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Fish_Amok_with_Rice.jpg/960px-Fish_Amok_with_Rice.jpg', // Fish Amok
  'lok lak cambodian stir fry beef lime pepper': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Beef_Lok_Lak_at_Krong_Kracheh.jpg/960px-Beef_Lok_Lak_at_Krong_Kracheh.jpg', // Lok Lak
  'nom banh chok cambodian rice noodle fish curry green': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Num_Banh_Chok_Somlar_Kari.jpg/960px-Num_Banh_Chok_Somlar_Kari.jpg', // Nom Banh Chok
  'kampot pepper cambodia green red black vine': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Kampot_peppercorns_in_a_mango_wooden_bowl.jpg/960px-Kampot_peppercorns_in_a_mango_wooden_bowl.jpg', // Kampot Pepper
  'lu rou fan taiwanese braised pork rice': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Lurou_fan%28Taiwanese_cuisine%29.jpg/960px-Lurou_fan%28Taiwanese_cuisine%29.jpg', // Lu Rou Fan
  'oyster omelette taiwanese night market': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Oyster_omelette%2C_Taipei%2C_Taiwan._%288447333000%29_%282%29.jpg/960px-Oyster_omelette%2C_Taipei%2C_Taiwan._%288447333000%29_%282%29.jpg', // Oyster Omelette
  'taiwanese beef noodle soup braised broth noodles': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Taiwanese_Beef_Noodle_Soup.jpg/960px-Taiwanese_Beef_Noodle_Soup.jpg', // Beef Noodle Soup
  'scallion pancake taiwan cong you bing crispy layered': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Plate_of_scallion_pancakes.jpg/960px-Plate_of_scallion_pancakes.jpg', // Scallion Pancake
  'oyster vermicelli taiwan night market starch soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Oyster_Vermicelli.jpg/960px-Oyster_Vermicelli.jpg', // Oyster Vermicelli
  'bubble tea boba taiwan milk tapioca pearls straw': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Pearl_Milk_Tea_in_Chun_Shui_Tang.jpg/960px-Pearl_Milk_Tea_in_Chun_Shui_Tang.jpg', // Bubble Tea
  'pineapple cake taiwan souvenir shortbread jam': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Taiwanese_Pineapple_Cake_001.jpg/960px-Taiwanese_Pineapple_Cake_001.jpg', // Pineapple Cake
  'seekh kebab grilled minced meat skewer': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Seekh_Kabab_1.JPG/960px-Seekh_Kabab_1.JPG', // Seekh Kebab
  'nihari pakistani slow cooked beef shank spice': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Beef_Nihari.JPG/960px-Beef_Nihari.JPG', // Nihari
  'karachi biryani pakistani rice meat spiced': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Sindhi_Biryani.JPG/960px-Sindhi_Biryani.JPG', // Biryani
  'chapli kebab pashtun beef patty flat spiced': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Chapli_Kebab.jpg/960px-Chapli_Kebab.jpg', // Chapli Kebab
  'haleem pakistani wheat lentil meat stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Pakistani_Haleem_served_with_garnish.jpg/960px-Pakistani_Haleem_served_with_garnish.jpg', // Haleem
  'chicken karahi pakistani iron wok tomato ginger': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Karahi_Chicken.jpg/960px-Karahi_Chicken.jpg', // Karahi
  'fiambre guatemalan cold cuts salad all saints': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Fiambre_-_11042021_%28cropped%29.jpg/960px-Fiambre_-_11042021_%28cropped%29.jpg', // Fiambre
  'hilachas guatemalan shredded beef tomato stew': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Hilacha.jpg/960px-Hilacha.jpg', // Hilachas
  'atole de elote corn drink warm guatemalan': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/100320_atol_de_elote_guatemala.JPG/960px-100320_atol_de_elote_guatemala.JPG', // Atol de Elote
  'pepian guatemalan mole chicken squash seed sauce': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Catalinos_Restaurant_New_Orleans_October_2018_Pepian.jpg/960px-Catalinos_Restaurant_New_Orleans_October_2018_Pepian.jpg', // Pepián
  'jocon guatemalan chicken tomatillo green sauce cilantro': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Jocon.jpg/330px-Jocon.jpg', // Jocon
  'kakik guatemalan mayan turkey chile soup': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/2010.05.13.141849_Kac-iq_Fonda_Calle_Real_Antigua_Guatemala.jpg/960px-2010.05.13.141849_Kac-iq_Fonda_Calle_Real_Antigua_Guatemala.jpg', // Kak'ik
  'chuchitos guatemalan small tamale corn masa': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Chuchitos_%28639489829%29.jpg/960px-Chuchitos_%28639489829%29.jpg', // Chuchitos
  'horchata guatemalan rice drink cinnamon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Horchata%2C_my_drink_of_choice_in_Mexico_-_Merida_Yucatan_21_March_2021.jpg/960px-Horchata%2C_my_drink_of_choice_in_Mexico_-_Merida_Yucatan_21_March_2021.jpg', // Horchata
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
  { word: 'Okonomiyaki', file: 'Okonomiyaki 001.jpg', author: 'ume-y', license: 'CC BY 2.0' },
  { word: 'Takoyaki', file: 'Takoyaki by yomi955.jpg', author: 'heiwa4126', license: 'CC BY 2.0' },
  { word: 'Gyoza', file: 'Gyoza (52769973678).jpg', author: 'nakashi from Chofu, Tokyo, JAPAN', license: 'CC BY-SA 2.0' },
  { word: 'Onigiri', file: 'Onigiri 002.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Sukiyaki', file: 'Sukiyaki 01.jpg', author: 'ajari', license: 'CC BY 2.0' },
  { word: 'Shabu-Shabu', file: 'Shabu-shabu-01.jpg', author: 'jimg944', license: 'CC BY 2.0' },
  { word: 'Natto', file: 'Natto mixed.jpg', author: 'User:Gleam', license: 'CC BY-SA 3.0' },
  { word: 'Mochi', file: 'Rice Cake.jpg', author: 'Unknown author', license: 'CC BY-SA 3.0' },
  { word: 'Yakisoba', file: 'Yakisoba - 01.jpg', author: 'Quercus acuta', license: 'CC BY-SA 4.0' },
  { word: 'Tonkotsu Ramen', file: 'Tonkotsu ramen in Tokyo.jpg', author: 'Syced', license: 'CC0' },
  { word: 'Matcha', file: 'Matcha Scoop.jpg', author: 'Evanhoever', license: 'CC BY-SA 4.0' },
  { word: 'Sake', file: 'Sake set.jpg', author: 'The Epopt', license: 'Public domain' },
  { word: 'Soba', file: 'Mori-soba 002.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Nigiri', file: 'Rokusanen Wakayama Japan07s5.jpg', author: '663highland', license: 'CC BY 2.5' },
  { word: 'Maki', file: 'Makizushi2.jpg', author: 'pasqualeschiavoneph', license: 'CC0' },
  { word: 'Temaki', file: 'Spider hand roll.jpg', author: 'RightCowLeftCoast', license: 'CC BY-SA 4.0' },
  { word: 'Chirashi', file: 'Chirashi zushi by Marshall Astor in Gardena, CA.jpg', author: 'Marshall Astor - Food Pornographer from Japanese restaurant Tampopo Re', license: 'CC BY-SA 2.0' },
  { word: 'Shio Ramen', file: 'Japanese Salt flavor Sapporo Ramen.JPG', author: 'STRONGlk7', license: 'CC BY-SA 3.0' },
  { word: 'Shoyu Ramen', file: 'Shoyu Ramen（Tokyo Ramen） - 01.jpg', author: 'Quercus acuta', license: 'CC BY-SA 4.0' },
  { word: 'Miso Ramen', file: 'らーめん味噌（大島）.jpg', author: 'くろふね', license: 'CC BY-SA 4.0' },
  { word: 'Tsukemen', file: 'Tsuke-men 001.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Yakitori', file: 'Typical yakitori 001.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Kushiyaki', file: 'Cooking yakitori.jpg', author: '竹麦魚(Searobin)', license: 'CC BY-SA 3.0' },
  { word: 'Yakiniku', file: 'Yakiniku 002.jpg', author: 'Jonathan Lin', license: 'CC BY-SA 2.0' },
  { word: 'Robatayaki', file: 'Robatayaki.jpg', author: 'Schellack', license: 'CC BY 3.0' },
  { word: 'Somen', file: 'Somen is wonderfully refreshing summer noodle in Japan.jpg', author: 'Blue Lotus from Tokyo', license: 'CC BY 2.0' },
  { word: 'Hiyashi Chuka', file: 'Hiyashi chuka 002.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Donburi', file: 'Donburi Rice bowl of Chicken Teriyaki with Tomato.jpg', author: 'TechnoKittyCat', license: 'CC0' },
  { word: 'Oyakodon', file: 'Oyakodon 003.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Katsudon', file: 'Katsudon 001.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Ochazuke', file: 'お茶漬けお新香付き01.jpg', author: 'ととりん', license: 'CC BY-SA 3.0' },
  { word: 'Korokke', file: 'Potato croquettes 001.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Ebi Furai', file: 'Ebi Fry 003.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Agedashi Tofu', file: 'Agedashi tofu, fried tofu with broth.jpg', author: 'HungryHuy', license: 'CC BY 2.0' },
  { word: 'Nabe', file: 'Cookingsukiyaki.jpg', author: 'Kapichu', license: 'CC BY-SA 3.0' },
  { word: 'Oden', file: 'Oden 001.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Chawanmushi', file: 'Chawan-mushi.JPG', author: 'Brücke-Osteuropa', license: 'CC0' },
  { word: 'Tamagoyaki', file: '鳥焼き居酒屋 (39394233682).jpg', author: '極地狐', license: 'CC BY 2.0' },
  { word: 'Tamago Gohan', file: 'Tamagokake-gohan 001.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Taiyaki', file: 'Taiyaki 003.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Dorayaki', file: 'Dorayaki 001 (3).jpg', author: 'Ocdp', license: 'CC BY-SA 3.0' },
  { word: 'Karaage', file: 'Chicken karaage 003.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Tsukemono', file: 'Nukazuke.jpg', author: 'DoWhile', license: 'CC BY-SA 3.0' },
  { word: 'Umeboshi', file: 'Umeboshi 20101209 c.jpg', author: 'Batholith (talk)', license: 'Public domain' },
  { word: 'Miso', file: 'Miso paste by wilbanks in Nishiki Ichiba, Kyoto.jpg', author: 'wilbanks from Shop of boiled beans, side dishes and miso, Adzumaya Foo', license: 'CC BY-SA 2.0' },
  { word: 'Wasabi', file: 'WasabiOnOroshigane.jpg', author: 'Unknown author', license: 'CC BY-SA 3.0' },
  { word: 'Dashi', file: 'JapaneseBouillon Dashi.jpg', author: 'サフィル', license: 'CC BY-SA 4.0' },
  { word: 'Kaiseki', file: 'Jisaku Kaiseki Ryori 01.jpg', author: 'Unknown author', license: 'CC BY-SA 3.0' },
  { word: 'Wagyu', file: 'Sliced Matsusaka wagyu beef.jpg', author: 'Schellack', license: 'CC BY 3.0' },
  { word: 'Anmitsu', file: 'Anmitsu in Isezakicho.jpg', author: 'akira yamada from Yokohama (横浜市中区伊勢佐木町 - Isezakicho)', license: 'CC BY-SA 2.0' },
  { word: 'Kakigori', file: 'Macha kakigori snow cone.jpg', author: 'Unknown author', license: 'CC BY-SA 3.0' },
  { word: 'Wagashi', file: '和菓子 (5376984019).jpg', author: 'Ai Amo from Japan', license: 'CC BY 2.0' },
  { word: 'Daifuku', file: 'Daifuku 001.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Matcha Latte', file: 'Matcha tea art.jpg', author: 'John Beans', license: 'CC BY 2.0' },
  { word: 'Amazake', file: 'Amazake by emily harbour in july.jpg', author: 'emily_harbour_in_july', license: 'CC BY 2.0' },
  { word: 'Umeshu', file: 'Jisaku Umeshu with ume.jpg', author: 'Unknown author', license: 'CC BY-SA 3.0' },
  { word: 'Edamame', file: 'Edamame by Zesmerelda in Chicago.jpg', author: 'Tammy Green (aka Zesmerelda) from Chicago Upscale Dining + Lounge Repu', license: 'CC BY-SA 2.0' },
  { word: 'Hiyayakko', file: 'Hiya-yakko 002.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Kaisen Don', file: 'Kaisendon.jpg', author: '海鮮ドン', license: 'CC BY-SA 4.0' },
  { word: 'Natto Gohan', file: 'Natto gohan in Kochi.jpg', author: 'ノボホショコロトソ', license: 'CC BY 4.0' },
  { word: 'Kare Raisu', file: 'Beef curry rice 003.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Sushi', file: 'Various sushi, beautiful October night at midnight.jpg', author: 'Yumi Kimura', license: 'CC BY-SA 2.0' },
  { word: 'Ramen', file: 'Tonkotsu Ramen - Goemon Ramen Bar 2023-06-06.jpg', author: 'Andy Li', license: 'CC0' },
  { word: 'Tempura', file: 'Tempurainjapan-ikebukuro-dec312007.jpg', author: 'Nesnad', license: 'CC0' },
  { word: 'Sashimi', file: '241109 Shigaraki ware Koga Shiga pref Japan01s3.jpg', author: '663highland', license: 'CC BY-SA 4.0' },
  { word: 'Miso Soup', file: 'Miso Soup 001.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Udon', file: 'Bowl of Kitsune Udon.jpg', author: 'LingLass', license: 'CC0' },
  { word: 'Tonkatsu', file: 'Tonkatsu by ayustety in Tokyo.jpg', author: 'ayustety from Tokyo, Japan', license: 'CC BY-SA 2.0' },
  { word: 'Teriyaki', file: 'Teriyaki 003.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Dosa', file: 'Masala dosa 01.jpg', author: 'Marajozkee', license: 'CC BY-SA 4.0' },
  { word: 'Idli', file: 'Idli Sambar.JPG', author: 'Soumya dey at English Wikipedia', license: 'CC BY-SA 3.0' },
  { word: 'Chana Masala', file: 'Chana masala.jpg', author: 'Simon Law (sfllaw) from Montréal, QC, Canada', license: 'CC BY-SA 2.0' },
  { word: 'Aloo Gobi', file: 'Aloo gobi.jpg', author: 'paul goyette', license: 'CC BY-SA 2.0' },
  { word: 'Tandoori Chicken', file: 'Chickentandoori.jpg', author: 'kspoddar', license: 'CC BY-SA 2.0' },
  { word: 'Rasam', file: 'Rasam.JPG', author: 'Miansari66', license: 'Public domain' },
  { word: 'Khichdi', file: 'Dall Khichdi.jpg', author: 'Rpande', license: 'CC BY-SA 4.0' },
  { word: 'Gulab Jamun', file: 'Gulab-jamun-wallpaper-1.jpg', author: 'Sapra5379', license: 'CC BY-SA 4.0' },
  { word: 'Raita', file: 'Cucumber-raita.jpg', author: 'Sonia Goyal', license: 'CC BY-SA 2.0' },
  { word: 'Lassi', file: 'Salt lassi.jpg', author: 'Raksanand', license: 'CC BY-SA 4.0' },
  { word: 'Malai Kofta', file: 'MalaiKofta.jpg', author: 'Monali.mishra', license: 'CC BY-SA 4.0' },
  { word: 'Puri', file: 'Fluffy Poori (cropped).JPG', author: 'Vidyascooking', license: 'CC BY-SA 4.0' },
  { word: 'Rogan Josh', file: 'Rogan Josh Kashmiri.jpg', author: 'Spice Eats', license: 'CC BY 3.0' },
  { word: 'Palak Paneer', file: 'Palakpaneer Rayagada Odisha 0009.jpg', author: 'Lopanayak', license: 'CC BY-SA 4.0' },
  { word: 'Vindaloo', file: 'Beef Vindaloo - Chilli Mama, Chadstone (3014236693).jpg', author: 'Alpha from Melbourne, Australia', license: 'CC BY-SA 2.0' },
  { word: 'Saag', file: 'Makki di Roti Te Sarson Da Saag.jpg', author: 'Yash Kapoor', license: 'CC BY-SA 3.0' },
  { word: 'Korma', file: 'Chicken White Qorma (Korma).JPG', author: 'Miansari66', license: 'CC0' },
  { word: 'Dhansak', file: 'Dhansak.JPG', author: 'Miansari66', license: 'CC0' },
  { word: 'Fish Curry', file: 'Meen curry 2.JPG', author: 'Kalakki at Malayalam Wikipedia', license: 'CC BY-SA 2.5' },
  { word: 'Roti', file: '2020-05-08 19 34 28 Chapati being made in a pan in the Franklin Farm section of Oak Hill, Fairfax County, Virginia.jpg', author: 'Famartin', license: 'CC BY-SA 4.0' },
  { word: 'Paratha', file: 'Triangle paratha (cropped).JPG', author: 'Nithyasrm', license: 'CC BY-SA 4.0' },
  { word: 'Bhatura', file: 'Bikaner chole bhature.jpg', author: 'Aleemk72', license: 'CC BY-SA 4.0' },
  { word: 'Appam', file: 'Appam - அப்பம்.jpg', author: 'VinPrasad', license: 'CC BY-SA 4.0' },
  { word: 'Pulao', file: 'VEGETABLE PULAO ~ An Indian cuisine made from fried rice mixed with fried vegetables.jpg', author: 'Jagisnowjughead', license: 'CC BY-SA 4.0' },
  { word: 'Hyderabadi Biryani', file: 'Hyderabadi Chicken Biryani.jpg', author: 'Garrett Ziegler from New York, United States', license: 'CC BY 2.0' },
  { word: 'Pongal', file: 'Ven pongal with sambar and chutney.jpg', author: 'Shafana jasmine', license: 'CC BY-SA 4.0' },
  { word: 'Pani Puri', file: 'Pani Puri1.JPG', author: 'Sruthi612', license: 'CC BY-SA 4.0' },
  { word: 'Bhel Puri', file: 'Behael Puri (6105489342).jpg', author: 'Barry Pousman from New York, NY', license: 'CC BY 2.0' },
  { word: 'Vada Pav', file: 'Vada Pav-Indian street food.JPG', author: 'Rutvi Mistry', license: 'CC BY-SA 4.0' },
  { word: 'Pakora', file: 'Onion pakora - a.jpg', author: 'Babu iyer', license: 'CC BY-SA 4.0' },
  { word: 'Aloo Tikki', file: 'Aloo Tikki served with chutneys.jpg', author: 'Raveesh Vyas from [Ahmedabad, Noida], India', license: 'CC BY-SA 2.0' },
  { word: 'Chaat', file: 'Dahi puri, Doi phuchka.jpg', author: 'Rupamdas75', license: 'CC BY-SA 4.0' },
  { word: 'Uttapam', file: 'Mini Uttappam.jpg', author: 'Ramesh NG', license: 'CC BY-SA 2.0' },
  { word: 'Vada', file: 'Medu Vada.JPG', author: 'Lubnakarim06', license: 'CC BY-SA 4.0' },
  { word: 'Sambar', file: 'Pumpkin sambar.JPG', author: 'Kalaiselvi Murugesan', license: 'CC BY-SA 4.0' },
  { word: 'Avial', file: 'Ayiyal.jpg', author: 'Samphotography', license: 'CC BY-SA 4.0' },
  { word: 'Kerala Fish Molee', file: 'Fish Moilee Kerala Style (aka KeralaFish Molly).JPG', author: 'Drsoumyadeepb', license: 'CC BY-SA 4.0' },
  { word: 'Seekh Kebab', file: 'Pakistani Food Beef Kabobs.jpg', author: 'Jess Lander from Culver City, CA, USA', license: 'CC BY 2.0' },
  { word: 'Paneer Tikka', file: 'Paneer tikka.jpg', author: 'Meghana Mohanty', license: 'CC BY-SA 4.0' },
  { word: 'Kebab', file: 'Tunday Kebabs.jpg', author: 'Lillottama', license: 'CC BY-SA 4.0' },
  { word: 'Dal Makhani', file: 'Punjabi style Dal Makhani.jpg', author: 'Radhikamprabhu82', license: 'CC BY-SA 4.0' },
  { word: 'Dal Tadka', file: 'Dal Tadka-Delhi.jpg', author: 'AugustineKajur', license: 'CC BY-SA 4.0' },
  { word: 'Rajma', file: 'Rajma Masala (32081557778).jpg', author: 'Gaurav Nemade', license: 'CC BY-SA 2.0' },
  { word: 'Baingan Bharta', file: 'Baigan Bharta from Nagpur.JPG', author: 'Dheerajk88', license: 'CC BY-SA 4.0' },
  { word: 'Paneer Butter Masala', file: 'Shahi panner.jpg', author: 'Om shankar singh', license: 'CC BY-SA 4.0' },
  { word: 'Kheer', file: 'Kheer.jpg', author: 'stu spivack', license: 'CC BY-SA 2.0' },
  { word: 'Halwa', file: 'Cuisine (268) 44.jpg', author: 'AmanAgrahari01', license: 'CC BY-SA 4.0' },
  { word: 'Jalebi', file: 'Basavanagudi Kadalekai Parishe (2025) Bangalore (86).jpg', author: 'Gpkp', license: 'CC BY-SA 4.0' },
  { word: 'Rasgulla', file: 'Rasgulla.jpg', author: 'HrichikHv', license: 'CC BY-SA 4.0' },
  { word: 'Kulfi', file: 'Kulfi 5.jpg', author: 'Gaurav Dhwaj Khadka', license: 'CC BY-SA 4.0' },
  { word: 'Masala Chai', file: 'Chai In Sakora.jpg', author: 'Dadhichbittu007', license: 'CC BY-SA 4.0' },
  { word: 'Nimbu Pani', file: 'Nimbu pani.JPG', author: 'Archana Joshi', license: 'CC BY-SA 4.0' },
  { word: 'Thandai', file: 'Thandai (Spiced Indian Milk Drink).JPG', author: 'Aparna Balasubramanian', license: 'CC BY-SA 4.0' },
  { word: 'Chutney', file: 'Chutneykarnataka.jpg', author: 'Charles Haynes', license: 'CC BY-SA 2.0' },
  { word: 'Pickle (Achar)', file: 'Chilli pickle in a plate 2.jpg', author: 'Suyash.dwivedi', license: 'CC BY-SA 4.0' },
  { word: 'Curry', file: 'Taj Mahal - Lamb Curry Madras.jpg', author: 'Francesc Fort', license: 'CC BY-SA 4.0' },
  { word: 'Samosa', file: 'Samosas, snack food at Wikipedia\'s 16th Birthday celebration in Chittagong (01).jpg', author: 'Moheen Reeyad', license: 'CC BY-SA 4.0' },
  { word: 'Biryani', file: '"Hyderabadi Dum Biryani".jpg', author: 'Mahi Tatavarty', license: 'CC BY-SA 4.0' },
  { word: 'Naan', file: 'Annapurna Naan.jpg', author: 'snowpea&amp;bokchoi', license: 'CC BY 2.0' },
  { word: 'Butter Chicken', file: 'Butter Chicken & Butter Naan - Home - Chandigarh - India - 0006.jpg', author: 'Yuvraj Singh 97', license: 'CC BY-SA 4.0' },
  { word: 'Dal', file: 'Daal after Tadka Pulse Soup India.jpg', author: 'aimee rivers', license: 'CC BY-SA 2.0' },
  { word: 'Xiao Long Bao', file: 'A Xiaolongbao from The Modern Shanghai.jpg', author: 'Peachyeung316', license: 'CC BY-SA 4.0' },
  { word: 'Mapo Tofu', file: 'Chen Mapo Tofu.jpg', author: 'ZhengZhou', license: 'CC BY-SA 4.0' },
  { word: 'Char Siu', file: 'Char siu pieces.jpg', author: 'Michael', license: 'Public domain' },
  { word: 'Wonton Soup', file: 'HK Sai Ying Pun Centre Street 雲吞 Wonton noodle July-2012.JPG', author: 'Angeimoarm', license: 'CC BY-SA 3.0' },
  { word: 'Congee', file: 'Chinese rice congee.jpg', author: 'Daiju Azuma', license: 'CC BY-SA 2.5' },
  { word: 'Dan Dan Noodles', file: 'Dan-dan noodles, Shanghai.jpg', author: 'Steven G. Johnson', license: 'CC BY-SA 3.0' },
  { word: 'Chow Mein', file: 'Homemade Chow mein with shrimps and meat with a choy and Choung.jpg', author: 'Peachyeung316', license: 'CC BY-SA 4.0' },
  { word: 'Fried Rice', file: 'Chinese egg fried rice.jpg', author: 'Euniceyeoh07', license: 'CC BY-SA 4.0' },
  { word: 'Twice Cooked Pork', file: 'Twice cooked pork, Jia Yan, 5 rue Humblot, Paris 003.jpg', author: 'Guilhem Vellut from Paris, France', license: 'CC BY 2.0' },
  { word: 'Lion\'s Head', file: '狮子楼狮子头.jpg', author: '三猎', license: 'CC BY-SA 4.0' },
  { word: 'Steamed Fish', file: 'Ginger Scallion Red Perch (50-366) (25058329532).jpg', author: 'Tim Sackton from Somerville, MA', license: 'CC BY-SA 2.0' },
  { word: 'Tea Eggs', file: 'Tea eggs 1.jpg', author: 'Daniela Eftimova', license: 'CC BY-SA 4.0' },
  { word: 'Zongzi', file: 'Zongzi.jpg', author: 'Allentchang', license: 'CC BY-SA 3.0' },
  { word: 'Har Gow', file: 'Steamed prawn dumplings.jpg', author: 'Maksym Kozlenko', license: 'CC BY-SA 4.0' },
  { word: 'Siu Mai', file: 'Yellow dim sum in steamer basket.jpg', author: 'Mshuang2', license: 'CC0' },
  { word: 'Cheung Fun', file: 'A Steam White Rice Noodle Rolls from KC Chinese Restaurant.jpg', author: 'Peachyeung316', license: 'CC BY-SA 4.0' },
  { word: 'Turnip Cake', file: '香煎蘿蔔糕 “Fried Turnip Cake”, 利苑酒家午市點心 Lei Garden Lunchtime Dim Sum SML.20120925.G12.00418 (8085981921).jpg', author: 'See-ming Lee from Hong Kong SAR, China', license: 'CC BY 2.0' },
  { word: 'Claypot Rice', file: 'Claypot Chicken Rice, Singapore.JPG', author: 'Banej', license: 'CC BY-SA 3.0' },
  { word: 'Roast Goose', file: 'Cantonese roast goose served in Guangzhou, China, June 2026.jpg', author: 'Guangzhou Private Tours by Janvi', license: 'CC BY 4.0' },
  { word: 'Sichuan Hot Pot', file: 'Hot Pot.jpg', author: 'Praneeth Thalla', license: 'CC BY-SA 4.0' },
  { word: 'Kung Pao Chicken', file: 'Kung-pao-shanghai.jpg', author: 'Steven G. Johnson', license: 'CC BY-SA 3.0' },
  { word: 'Yu Xiang Qiezi', file: 'Qiezi.jpg', author: 'Popo le Chien', license: 'CC0' },
  { word: 'Shanghai Hairy Crab', file: 'Roe inside steamed female hairy crab.jpg', author: 'Jpatokal', license: 'CC BY-SA 4.0' },
  { word: 'Red Braised Pork', file: 'Red braised pork (20141106191221).JPG', author: 'N509FZ', license: 'CC BY-SA 4.0' },
  { word: 'Sheng Jian Bao', file: 'Sheng Jian Bao on a pan.jpg', author: 'Brian Harrington Spier', license: 'CC BY-SA 2.0' },
  { word: 'Yangzhou Fried Rice', file: 'Chinese fried rice by stu spivack in Cleveland, OH.jpg', author: 'stu_spivack from C & Y Chinese Restaurant in Cleveland\'s Chinatown', license: 'CC BY-SA 2.0' },
  { word: 'Zhajiangmian', file: 'Billyzhajiang1.jpg', author: 'Archon6812', license: 'CC BY-SA 3.0' },
  { word: 'Jiaozi', file: '台灣南投草屯水餃Nantou, Taiwan Caotun dumplings.jpg', author: 'Yeepunchmen', license: 'CC BY-SA 4.0' },
  { word: 'Lamb Skewer', file: 'Spicy lamb skewers @ Tian Tian Wang @ Paris (34591424026).jpg', author: 'Guilhem Vellut from Paris, France', license: 'CC BY 2.0' },
  { word: 'Buddha Jumps Over the Wall', file: 'Buddha jumps over the wall at Jingrong (20161203135907).jpg', author: 'N509FZ', license: 'CC BY-SA 4.0' },
  { word: 'Salt Baked Chicken', file: 'Salt baked chicken - San Francisco, CA.jpg', author: 'Daderot', license: 'CC0' },
  { word: 'Lanzhou Beef Noodle', file: '蘭州牛肉拉麺.jpg', author: 'Super koikeyuriko', license: 'CC0' },
  { word: 'Guilin Rice Noodles', file: '桂林米粉(Guilin Rice Noodle ).jpg', author: 'Flickr user gigijin', license: 'CC BY-SA 2.0' },
  { word: 'Tang Yuan', file: 'Wufangzhai Tangyuan in Wuhan.jpg', author: 'Zheng Zhou', license: 'CC BY-SA 4.0' },
  { word: 'Egg Tart', file: 'HK SSP 長沙灣 Cheung Sha Wan 深盛路 Sham Shing Road 泓景滙商場 Banyan Mall shop 蛋撻王 King Bakery Studio December 2019 SS2 egg tarts.jpg', author: 'LNAM Haoi', license: 'CC BY-SA 4.0' },
  { word: 'Tanghulu', file: 'TangHuLu.JPG', author: 'Popo le Chien', license: 'CC0' },
  { word: 'Bubble Tea', file: 'Pearl Milk Tea in Chun Shui Tang.jpg', author: 'Battlesnake1', license: 'CC0' },
  { word: 'Dim Sum', file: 'Chinese DimSum (9023590541).jpg', author: 'LeonardKong', license: 'CC BY 2.0' },
  { word: 'Peking Duck', file: 'Peking Duck, 2014 (02).jpg', author: 'City Foodsters', license: 'CC BY 2.0' },
  { word: 'Spring Rolls', file: 'Spring Rolls (3357696061).jpg', author: 'Donna Benjamin', license: 'CC BY-SA 2.0' },
  { word: 'Mole Negro', file: 'Mole negro de Oaxaca con arroz.jpg', author: 'ProtoplasmaKid', license: 'CC BY-SA 4.0' },
  { word: 'Pozole', file: 'Green pozole, dressed (29161841908) (cropped).jpg', author: 'T.Tseng', license: 'CC BY 2.0' },
  { word: 'Chiles Rellenos', file: 'Chile Rellenos.jpg', author: 'Skyler Lewis', license: 'CC BY-SA 3.0' },
  { word: 'Tamales', file: 'Tamal oaxaqueño.jpg', author: 'Georgina Meneses', license: 'CC BY-SA 4.0' },
  { word: 'Cochinita Pibil', file: 'Cochinita pibil 2.jpg', author: 'Popo le Chien', license: 'CC BY-SA 3.0' },
  { word: 'Birria', file: 'Plato de birria.jpg', author: 'Equipo 9mkt', license: 'CC BY-SA 3.0' },
  { word: 'Elote', file: 'Elote recipe.jpg', author: 'SimpleFoodie', license: 'Public domain' },
  { word: 'Churros', file: 'Chocolate con churros (27343655726).jpg', author: 'Joy', license: 'CC BY 2.0' },
  { word: 'Horchata', file: 'Horchata de arroz.jpg', author: 'Ernesto Andrade from Fremont, United States', license: 'CC BY 2.0' },
  { word: 'Menudo', file: 'Bowl of menudo stew.jpg', author: 'David Martin Davies', license: 'CC BY-SA 2.0' },
  { word: 'Sopa de Lima', file: 'Sopa de lima.jpg', author: 'Aome7937', license: 'CC BY-SA 3.0' },
  { word: 'Tacos al Pastor', file: 'Tacos al pastor, taco de panza.jpg', author: 'T.Tseng', license: 'CC BY 2.0' },
  { word: 'Tacos de Barbacoa', file: 'Tacos de barbacoa con salsa de chile rayado.jpg', author: 'Daniela Gomez', license: 'CC BY-SA 4.0' },
  { word: 'Tacos de Carnitas', file: 'Carnitas.jpg', author: 'Mike McCune', license: 'CC BY 2.0' },
  { word: 'Quesadilla', file: 'Quesadilla 2.jpg', author: 'Popo le Chien', license: 'CC BY-SA 3.0' },
  { word: 'Caldo de Res', file: 'Caldo de res mexican food.jpg', author: 'Julianduenas', license: 'CC BY-SA 3.0' },
  { word: 'Sopa de Tortilla', file: 'Sopa de tortilla con chicharron de real del monte.jpg', author: 'Elizabethcasasola', license: 'CC BY-SA 4.0' },
  { word: 'Caldo Tlalpeño', file: 'Caldo tlalpeño.JPG', author: 'Saloca', license: 'CC BY-SA 3.0' },
  { word: 'Salsa Verde', file: 'Salsa verde.jpg', author: 'stu_spivack', license: 'CC BY-SA 2.0' },
  { word: 'Salsa Roja', file: 'Salsa roja.jpg', author: 'goblinbox_(queen_of_ad_hoc_bento) from Minneapolis, MN, US', license: 'CC BY 2.0' },
  { word: 'Pico de Gallo', file: 'Mmm... Pico de Gallo (5923456035).jpg', author: 'jeffreyw', license: 'CC BY 2.0' },
  { word: 'Mole Poblano', file: 'ChickRedMole.JPG', author: 'AlejandroLinaresGarcia', license: 'CC BY-SA 4.0' },
  { word: 'Gordita', file: 'GORDITA.jpg', author: 'JEDIKNIGHT1970', license: 'CC BY-SA 2.5' },
  { word: 'Tostada', file: 'Tostada de tinga.jpg', author: 'Jennifer Woodard Maderazo from San Francisco, USA', license: 'CC BY 2.0' },
  { word: 'Sope', file: 'Sopes1.jpg', author: 'Mm serg', license: 'Public domain' },
  { word: 'Huarache', file: 'Huarache de pollo en salsa roja.JPG', author: 'Svein Meinguer', license: 'CC BY-SA 4.0' },
  { word: 'Tlayuda', file: 'Tlayuda12-05oaxaca013x.jpg', author: 'Bobak', license: 'CC BY-SA 2.5' },
  { word: 'Arroz Rojo', file: 'Mexican rice 144235.jpg', author: 'Ralf Peter Reimann', license: 'CC BY-SA 2.0' },
  { word: 'Frijoles de Olla', file: 'Frijoles de la olla 1.jpg', author: 'Salvador alc', license: 'CC BY-SA 4.0' },
  { word: 'Queso Fresco', file: 'Queso fresco.JPG', author: 'Geoff', license: 'CC BY-SA 3.0' },
  { word: 'Tres Leches', file: 'Pastel de Tres Leches.jpg', author: '@joefoodie', license: 'CC BY 2.0' },
  { word: 'Atole', file: 'Atole.jpg', author: 'ottmarliebert.com', license: 'CC BY-SA 2.0' },
  { word: 'Champurrado', file: 'Champurrado thenewplace sf.jpg', author: 'Tom White (Toboris)', license: 'CC BY 2.5' },
  { word: 'Agua Fresca', file: 'ManekiNeko horchata jar.jpg', author: 'ManekiNeko', license: 'Public domain' },
  { word: 'Huevos Rancheros', file: 'Mmm...huevos rancheros.jpg', author: 'jeffreyw', license: 'CC BY 2.0' },
  { word: 'Chilaquiles', file: 'Chilaquiles at the Grand Cantina, Windsor, Ontario, 2025-09-01 04.jpg', author: 'Chris Woodrich', license: 'CC BY-SA 4.0' },
  { word: 'Tacos', file: '001 Tacos de carnitas, carne asada y al pastor.jpg', author: 'Larry Miller', license: 'CC BY-SA 2.0' },
  { word: 'Guacamole', file: 'Guacamole IMGP1271.jpg', author: 'Nikodem Nijaki', license: 'CC BY-SA 3.0' },
  { word: 'Enchiladas', file: 'Enchilada Rice Beans.jpg', author: 'Jon Sullivan', license: 'Public domain' },
  { word: 'Mole', file: 'Mole casero, picante, México.jpg', author: 'Petrvs III', license: 'CC BY-SA 4.0' },
  { word: 'Baklava', file: 'Baklava(1).png', author: 'Sakaman', license: 'CC BY-SA 4.0' },
  { word: 'İskender Kebap', file: 'İskender Kebap.jpg', author: 'Garrett Ziegler', license: 'CC BY-SA 4.0' },
  { word: 'Lahmacun', file: 'Lahmacun.jpg', author: 'Rainer Zenz', license: 'CC BY-SA 3.0' },
  { word: 'Mantı', file: 'Kayseride bir restoranda Kayseri mantısı (cropped).jpg', author: 'Kızılkum', license: 'CC BY-SA 4.0' },
  { word: 'Pide', file: '2019-07-27 Turkish pide with cheese at Istanbul restaurant.jpg', author: 'Maksym Kozlenko', license: 'CC BY-SA 4.0' },
  { word: 'Simit', file: 'Simit-2x.JPG', author: 'Barbarossa', license: 'CC BY-SA 3.0' },
  { word: 'Turkish Delight', file: 'TurkishDelightDisplay.jpg', author: 'Quick fix', license: 'CC BY-SA 2.0' },
  { word: 'Ayran', file: 'Fresh ayran.jpg', author: 'Mavigogun', license: 'CC BY-SA 3.0' },
  { word: 'Turkish Coffee', file: 'Türk Kahvesi - Bakir Cezve.jpg', author: 'Eaeeae', license: 'CC BY-SA 3.0' },
  { word: 'Haydari', file: 'Haydari in a square plate.jpg', author: 'E4024', license: 'CC BY-SA 4.0' },
  { word: 'Ezme', file: 'Acılı Ezme.jpg', author: 'Garrett Ziegler', license: 'CC BY-SA 4.0' },
  { word: 'Cacık', file: 'Cacik-1.jpg', author: 'Rainer Zenz', license: 'CC BY-SA 3.0' },
  { word: 'Dolma', file: 'Stuffed grape leaves.jpg', author: 'Jon Sullivan', license: 'Public domain' },
  { word: 'Arnavut Ciğeri', file: 'Arnavut ciğeri.jpg', author: 'E4024', license: 'CC BY-SA 4.0' },
  { word: 'Adana Kebap', file: 'Adana kebab.jpg', author: 'Anatolianpride', license: 'Public domain' },
  { word: 'Çöp Şiş', file: 'Çöp şiş.jpg', author: 'E4024', license: 'CC BY-SA 4.0' },
  { word: 'Cağ Kebabı', file: 'Cağkebabı5.jpg', author: 'Eaeeae', license: 'CC BY 3.0' },
  { word: 'Şiş Tavuk', file: 'Tavuk Şiş.jpg', author: 'Garrett Ziegler', license: 'CC BY-SA 4.0' },
  { word: 'Gözleme', file: 'Gözleme.JPG', author: 'Maderibeyza', license: 'CC BY-SA 3.0' },
  { word: 'Katmer', file: 'Fıstıklı kaymaklı muska katmer.jpg', author: 'YG1', license: 'CC BY 4.0' },
  { word: 'Açma', file: 'Açma from Turkey.jpg', author: 'E4024', license: 'CC BY-SA 4.0' },
  { word: 'Mercimek Çorbası', file: 'Mercimek çorbası in Ankara, Turkey.jpg', author: 'E4024', license: 'CC BY-SA 4.0' },
  { word: 'İşkembe Çorbası', file: 'Tripe soup from Turkey.jpg', author: 'E4024', license: 'CC BY-SA 4.0' },
  { word: 'Pilav', file: 'Şehriyeli pilav.jpg', author: 'E4024', license: 'CC BY-SA 4.0' },
  { word: 'İç Pilav', file: 'İç pilav.jpg', author: 'E4024', license: 'CC BY-SA 4.0' },
  { word: 'Künefe', file: 'Künefe.jpg', author: 'elif ayse', license: 'CC BY 2.0' },
  { word: 'Kazandibi', file: 'Kazandibi Dessert.jpg', author: 'Garrett Ziegler', license: 'CC BY-SA 4.0' },
  { word: 'Aşure', file: 'Aşure (1).JPG', author: 'Maderibeyza', license: 'CC BY-SA 3.0' },
  { word: 'Revani', file: 'Revani with lemon zest.jpg', author: 'E4024', license: 'CC BY-SA 4.0' },
  { word: 'Raki', file: 'Rakı.jpg', author: 'Garrett Ziegler', license: 'CC BY-SA 4.0' },
  { word: 'Salep', file: 'Salep drink.jpg', author: 'DesignbyNur', license: 'CC BY-SA 3.0' },
  { word: 'Kebab', file: 'Lula kebab 2.jpg', author: 'Lesya Dolyk', license: 'CC BY-SA 2.0' },
  { word: 'Köfte', file: 'Izgara köfte.jpg', author: 'E4024', license: 'CC BY-SA 4.0' },
  { word: 'Börek', file: 'Su böreği 2025.jpg', author: 'Samizambak', license: 'CC BY-SA 4.0' },
  { word: 'Horiatiki', file: 'Greece Food Horiatiki.JPG', author: 'Jpatokal', license: 'CC BY-SA 4.0' },
  { word: 'Dolmades', file: 'Dolmades Kurdish and Greek - Dec 2018.jpg', author: 'Sina.ahm', license: 'CC BY-SA 4.0' },
  { word: 'Kleftiko', file: 'Kleftiko.JPG', author: 'Lord Mountbatten', license: 'CC BY-SA 3.0' },
  { word: 'Loukoumades', file: 'Loukoumades Greek Doughnuts with Walnuts and Honey.jpg', author: 'Alpha', license: 'CC BY-SA 2.0' },
  { word: 'Pastitsio', file: 'Pastitsio homemade.jpg', author: 'Sam Bailey', license: 'CC BY-SA 4.0' },
  { word: 'Fasolada', file: 'Fasolada.JPG', author: 'Miansari66', license: 'CC0' },
  { word: 'Taramasalata', file: 'Taramosalata01.jpg', author: 'Robert Kindermann', license: 'CC BY-SA 2.5' },
  { word: 'Galaktoboureko', file: 'Galaktoboureko.jpg', author: 'Badseed', license: 'CC BY 3.0' },
  { word: 'Hummus', file: 'Lebanese style hummus.jpg', author: 'Beyrouthhh', license: 'CC BY 3.0' },
  { word: 'Melitzanosalata', file: 'Baba ganoush closeup.jpg', author: 'avlxyz', license: 'CC BY-SA 2.0' },
  { word: 'Saganaki', file: 'Grekiska koket 02.jpg', author: 'Scouten', license: 'CC BY-SA 3.0' },
  { word: 'Tiropita', file: 'Tiropita Greek dish.jpg', author: 'Tanya Bakogiannis', license: 'CC BY 3.0' },
  { word: 'Kolokithokeftedes', file: 'Restaurant Thalámi (Almyrida) - Kolokithokeftedes (courgette or zucchini balls).jpg', author: 'Benoît Prieur', license: 'CC0' },
  { word: 'Stifado', file: 'Stifado (2).jpg', author: 'KF', license: 'Public domain' },
  { word: 'Giouvetsi', file: 'Giouvetsi.JPG', author: 'Robert Kindermann', license: 'CC BY-SA 2.5' },
  { word: 'Gemista', file: 'Gemista.jpg', author: 'Badseed', license: 'CC BY-SA 3.0' },
  { word: 'Briam', file: 'Briam.jpg', author: 'Dianeira', license: 'CC BY-SA 4.0' },
  { word: 'Plaki', file: 'Baked Fish with Tomato Sauce with Lemon Slices.jpg', author: 'Peachyeung316', license: 'CC BY-SA 4.0' },
  { word: 'Arnaki Fresko', file: 'Easter Lamb (3477180857).jpg', author: 'Klearchos Kapoutsis', license: 'CC BY 2.0' },
  { word: 'Feta', file: 'Feta Cheese.jpg', author: 'JJ Harrison', license: 'CC BY-SA 2.5' },
  { word: 'Halloumi', file: 'Grilled Halloumi.jpg', author: 'Hmioannou', license: 'CC BY 3.0' },
  { word: 'Graviera', file: 'Naxos Graviéra.jpg', author: 'Ossony', license: 'CC BY-SA 4.0' },
  { word: 'Tsoureki', file: 'Tsoureki athen 20260323 1.jpg', author: 'Z thomas', license: 'CC BY-SA 4.0' },
  { word: 'Koulouri', file: 'Koulouri Philadelphia - Hellenic Bakery 2025-04-28.jpg', author: 'Andy Li', license: 'CC0' },
  { word: 'Paidakia', file: 'Freshippo grilled lamb chops.jpg', author: 'Fumikas Sagisavas', license: 'CC0' },
  { word: 'Kokoretsi', file: 'Ioannina - kokoretsi.jpg', author: 'Ptyx', license: 'CC BY-SA 4.0' },
  { word: 'Gyros', file: 'Pita giros.JPG', author: 'Antonio Fajardo i López', license: 'CC BY-SA 3.0' },
  { word: 'Kourabiedes', file: 'Kourabiedes platter 2008 01 08.jpg', author: 'Jastrow', license: 'CC BY 2.5' },
  { word: 'Melomakarona', file: 'Melomakarona.jpg', author: 'Kalambaki2', license: 'CC BY-SA 3.0' },
  { word: 'Rizogalo', file: 'Rice pudding cinnamon.jpg', author: 'Ross Berteig', license: 'CC BY 2.0' },
  { word: 'Ouzo', file: 'Ouzo Ouzo.JPG', author: 'Beemwej', license: 'CC BY-SA 3.0' },
  { word: 'Frappé', file: 'Frappé.jpg', author: 'Kritzolina', license: 'CC BY-SA 4.0' },
  { word: 'Moussaka', file: 'MussakasMeMelitsanesKePatates01.JPG', author: 'Robert Kindermann', license: 'CC BY-SA 2.5' },
  { word: 'Souvlaki', file: 'Ελληνικό Σουβλάκι - panoramio.jpg', author: 'EntaXoyas', license: 'CC BY-SA 3.0' },
  { word: 'Baklava', file: 'Baklava kymi greece.jpg', author: 'Mari Beika', license: 'CC BY-SA 4.0' },
  { word: 'Tzatziki', file: 'Tzatziki meze or appetizer, also used as a sauce.jpg', author: 'Nikodem Nijaki', license: 'CC BY-SA 3.0' },
  { word: 'Spanakopita', file: 'Spanakopita.jpg', author: 'Alpha', license: 'CC BY-SA 2.0' },
  { word: 'Tteokbokki', file: 'Tteokbokki.JPG', author: 'Popo le Chien', license: 'CC0' },
  { word: 'Bulgogi', file: 'Bulgogi 2.jpg', author: '국립국어원', license: 'CC BY-SA 2.0' },
  { word: 'Japchae', file: 'Polish Korean Cuisine and Culture Exchanges Gradmother’s Recipes 05.jpg', author: 'korea.net', license: 'CC BY-SA 2.0' },
  { word: 'Doenjang Jjigae', file: 'Doenjang-jjigae.jpg', author: 'jyleen21', license: 'CC0' },
  { word: 'Sundubu Jjigae', file: 'Sundubu-jjigae.jpg', author: '행복한 초록개구리', license: 'CC BY 4.0' },
  { word: 'Pajeon', file: 'Korean pancake-Pajeon-05.jpg', author: 'Tales of an LA Addict (Abby)', license: 'CC BY-SA 2.0' },
  { word: 'Samgyeopsal', file: 'Samgyeopsal-gui.jpg', author: 'jinsoo jang', license: 'CC0' },
  { word: 'Kimchi Jjigae', file: 'Kimchi jjigae - San Francisco, CA.jpg', author: 'Daderot', license: 'CC0' },
  { word: 'Naengmyeon', file: 'Naengmyeon (cold noodles).jpg', author: 'wjlee4284', license: 'CC BY 2.5' },
  { word: 'Hotteok', file: 'Hotteok.jpg', author: 'Korea.net', license: 'CC BY-SA 2.0' },
  { word: 'Soju', file: 'Soju.jpg', author: 'grahamhills', license: 'CC BY 2.0' },
  { word: 'Galbi Tang', file: 'Galbitang 갈비탕 beeniru.jpg', author: 'Beeniru', license: 'CC BY-SA 3.0' },
  { word: 'Haemul Sundubu', file: 'Haemul-sundubu-jjigae.jpg', author: 'Ajumeoni', license: 'CC0' },
  { word: 'Seolleongtang', file: 'Seolleongtang2024.jpg', author: 'Kimhs5400', license: 'CC BY 4.0' },
  { word: 'Budae Jjigae', file: 'Budae jjigae (28587380901).jpg', author: 'T.Tseng', license: 'CC BY 2.0' },
  { word: 'Dolsot Bibimbap', file: 'Dolsot-bibimbap.jpg', author: 'Sous Chef', license: 'CC BY 2.0' },
  { word: 'Mul Naengmyeon', file: 'KOCIS Mul-naengmyeon, Chilled Buckwheat Noodle Soup (4594756202).jpg', author: 'Korea.net', license: 'CC BY-SA 2.0' },
  { word: 'Jajangmyeon', file: 'Jajangmyeon.jpg', author: '국립국어원', license: 'CC BY-SA 2.0' },
  { word: 'Ramyeon', file: 'A spicy ramyeon.jpg', author: 'BrithnyBiong', license: 'CC BY 4.0' },
  { word: 'Galbi', file: 'Korean.food-Galbi-03.jpg', author: 'ayustety', license: 'CC BY-SA 2.0' },
  { word: 'Chadolbaegi', file: 'Chadolbagi-gui.jpg', author: 'lazy fri13th', license: 'CC BY 2.0' },
  { word: 'Dak Galbi', file: 'Korean cuisine-Dakgalbi-01.jpg', author: 'shizu k (shezzz)', license: 'CC BY-SA 2.0' },
  { word: 'Kimchi Jeon', file: 'Kimchi-jeon - Kimchi pancake - Kogi Korean cuisine 2024-09-03.jpg', author: 'Andy Li', license: 'CC0' },
  { word: 'Haemul Pajeon', file: 'Pajeon.jpg', author: 'Brücke-Osteuropa', license: 'CC0' },
  { word: 'Twigim', file: 'Gim-mari-twigim 2.jpg', author: '경빈마마', license: 'CC BY 2.0' },
  { word: 'Kkakdugi', file: 'Korean.food-kkakdugi-01.jpg', author: 'milkchug', license: 'CC BY 2.0' },
  { word: 'Banchan', file: 'Banchan.jpg', author: '국립국어원', license: 'CC BY-SA 2.0' },
  { word: 'Gyeran Bap', file: 'Ganjang-gyeran-bap 1.jpg', author: '건강한 레시피', license: 'CC BY 4.0' },
  { word: 'Bingsu', file: 'Patbingsu.jpg', author: '국립국어원', license: 'CC BY-SA 2.0' },
  { word: 'Sikhye', file: 'Korean.food-Sikhye-01.jpg', author: 'Drpepper000', license: 'CC BY-SA 3.0' },
  { word: 'Makgeolli', file: 'Makgeolli 2.jpg', author: '국립국어원', license: 'CC BY-SA 2.0' },
  { word: 'Bibimbap', file: 'Bibimbap 7.jpg', author: 'Chloe Lim', license: 'CC BY 2.0' },
  { word: 'Kimchi', file: 'Various kimchi.jpg', author: '국립국어원', license: 'CC BY-SA 2.0' },
  { word: 'Massaman Curry', file: 'Kaeng matsaman kai.JPG', author: 'Takeaway', license: 'CC BY-SA 3.0' },
  { word: 'Tom Kha Gai', file: 'Flickr preppybyday 4711943668--Tom kha gai.jpg', author: 'Evan Joshua Swigart (TheCulinaryGeek)', license: 'CC BY 2.0' },
  { word: 'Mango Sticky Rice', file: 'Mango sticy rice (3859549574).jpg', author: 'Dennis Wong', license: 'CC BY 2.0' },
  { word: 'Thai Satay', file: 'Pork satay 2022.jpg', author: 'Athikhun.suw', license: 'CC BY-SA 4.0' },
  { word: 'Laab', file: 'Larb Moo - Siam Thai Restaurant - Regina (30194553768).jpg', author: 'Haydn Blackey', license: 'CC BY-SA 2.0' },
  { word: 'Pad Kra Pao', file: 'Basil fried crispy pork with rice - Chiang Mai - 2017-07-11 (002).jpg', author: 'Iudexvivorum', license: 'CC0' },
  { word: 'Thai Iced Tea', file: 'Cha yen.JPG', author: 'Takeaway', license: 'CC BY-SA 3.0' },
  { word: 'Panang Curry', file: 'Panang curry (42943883862).jpg', author: 'Vee Satayamas', license: 'CC BY 2.0' },
  { word: 'Kaeng Hang Le', file: 'แกงฮังเล ที่ หลู้ลำ.jpg', author: 'Chainwit', license: 'CC BY-SA 4.0' },
  { word: 'Kaeng Som', file: 'Kaeng som-marum63.JPG', author: 'Xufanc', license: 'CC BY-SA 3.0' },
  { word: 'Pad See Ew', file: 'Pad see ew.jpg', author: 'stu_spivack', license: 'CC BY-SA 2.0' },
  { word: 'Khao Soi', file: 'Khao Soi Northern Thai food ข้าวซอย ผักดอง.jpg', author: 'Chainwit', license: 'CC BY-SA 4.0' },
  { word: 'Guay Teow', file: 'Boat noodles.jpg', author: 'Alpha', license: 'CC BY-SA 2.0' },
  { word: 'Pad Woon Sen', file: 'Fried cellophane noodles with shrimp Pad woon sen kung.jpg', author: 'Sakurai Midori', license: 'CC BY-SA 3.0' },
  { word: 'Khao Man Gai', file: 'Hainanese Chicken Rice.jpg', author: 'Terence', license: 'CC BY 2.5' },
  { word: 'Khao Pad', file: 'Thaifriedrice.jpg', author: 'Jazzcello', license: 'CC BY 2.5' },
  { word: 'Khao Niew', file: 'Glutinous rice, Saveurs d\'Asie, 9 Rue de Vouillé, 75015 Paris, 5 November 2016.jpg', author: 'Guilhem Vellut', license: 'CC BY 2.0' },
  { word: 'Som Tam', file: 'Som Tam green papaya salad, Bangkok, Thailand.jpg', author: 'Vyacheslav Argenberg', license: 'CC BY 4.0' },
  { word: 'Yam Nua', file: 'YUM NUAH (Thai Beef Salad) Red onions, green onions, tomato, cucumbers, cilantro, fresh chilies mixed with homemade sauce, served on bed of greens.jpg', author: 'T.Tseng', license: 'CC BY 2.0' },
  { word: 'Miang Kham', file: 'Miang kham platter.jpg', author: 'Jpatokal', license: 'CC BY-SA 4.0' },
  { word: 'Khanom Buang', file: 'Ang Thong (2024) - khanom bueang boran ขนมเบื้องโบราณ.jpg', author: 'Chainwit', license: 'CC BY 4.0' },
  { word: 'Gai Yang', file: 'Kai yang 2.jpg', author: 'lazy fri13th', license: 'CC BY 2.0' },
  { word: 'Tod Man Pla', file: 'Thai Fish Cake.jpg', author: 'Justin Hee', license: 'CC BY 2.0' },
  { word: 'Kluay Buat Chi', file: 'Kluai buat chi.jpg', author: 'Susan Slater', license: 'CC BY-SA 4.0' },
  { word: 'Nam Manao', file: 'Koh Mak, Thailand, Lime juice, Lemonade, Limeade.jpg', author: 'Vyacheslav Argenberg', license: 'CC BY 4.0' },
  { word: 'Pad Thai', file: 'Phat Thai kung Chang Khien street stall.jpg', author: 'Takeaway', license: 'CC BY-SA 3.0' },
  { word: 'Tom Yum', file: 'Tom yam kung maenam.jpg', author: 'Takeaway', license: 'CC BY-SA 3.0' },
  { word: 'Green Curry', file: 'Thai green chicken curry and roti.jpg', author: 'Takeaway', license: 'CC BY-SA 3.0' },
  { word: 'Fish and Chips', file: 'Fish and chips blackpool.jpg', author: 'Matthias Meckel', license: 'CC BY-SA 4.0' },
  { word: 'Sunday Roast', file: 'Sunday roast lamb Cock Inn Henham Essex England 01.jpg', author: 'Acabashi', license: 'CC BY-SA 4.0' },
  { word: 'Shepherd\'s Pie', file: 'Homerton College - Shepherd\'s pie (cropped).jpg', author: 'Oxfordian Kissuth', license: 'CC BY-SA 3.0' },
  { word: 'Beef Wellington', file: 'Beef Wellington 2019.jpg', author: 'Snielsen1112', license: 'CC BY-SA 4.0' },
  { word: 'Scones', file: 'Scone with clotted cream and jam - Dyke Road Park Cafe 2025-08-10.jpg', author: 'Andy Li', license: 'CC0' },
  { word: 'Full English Breakfast', file: 'Full English breakfast (cropped).jpg', author: 'Joadl', license: 'CC BY-SA 3.0 AT' },
  { word: 'Kippers', file: 'Kipper.JPG', author: 'Gaius Cornelius', license: 'Public domain' },
  { word: 'Steak and Kidney Pie', file: 'Steak & Kidney Pie - 3 3 2019 (32347115557).jpg', author: 'CharmaineZoe\'s Marvelous Melange', license: 'CC BY 2.0' },
  { word: 'Pork Pie', file: 'PORK PIES.jpg', author: 'Terry Kearney', license: 'CC0' },
  { word: 'Roast Beef', file: 'Roast beef dish.jpg', author: 'Akahito Yamabe', license: 'CC0' },
  { word: 'Yorkshire Pudding', file: 'Yorkshire Puddings on plate.jpg', author: 'Sam Greenhalgh', license: 'CC BY 2.0' },
  { word: 'Chicken Tikka Masala', file: 'Chicken Tikka Masala on White Plate with Spoon.jpg', author: 'Lance Vanlewen', license: 'CC BY-SA 4.0' },
  { word: 'Ploughman\'s Lunch', file: 'An Elsecar Ploughman\'s Lunch.jpg', author: 'Glammmur', license: 'CC BY-SA 4.0' },
  { word: 'Scotch Egg', file: 'One scotch egg (No jar of Marmite).jpg', author: 'Unhindered by Talent', license: 'CC BY-SA 2.0' },
  { word: 'Chip Butty', file: 'Chip Butty.jpg', author: 'Annie Mole', license: 'CC BY 2.0' },
  { word: 'Jam Roly-Poly', file: 'Jam roly-poly02.jpg', author: 'EAT&ART TARO', license: 'CC BY-SA 4.0' },
  { word: 'Bakewell Tart', file: 'Bakewell tart on a plate.jpg', author: 'Brynn', license: 'CC BY-SA 3.0' },
  { word: 'Summer Pudding', file: 'Summer Pudding-3.jpg', author: 'Summer Pudding', license: 'CC BY 2.0' },
  { word: 'Afternoon Tea', file: 'Tea at the Rittenhouse Hotel.jpg', author: 'joyosity', license: 'CC BY 2.0' },
  { word: 'Bangers and Mash', file: 'Sausage and mash with peas.jpg', author: 'anokarina', license: 'CC BY-SA 2.0' },
  { word: 'Toad in the Hole', file: 'Toad in the hole.jpg', author: 'Robert Gibert', license: 'Public domain' },
  { word: 'Lancashire Hotpot', file: 'Lancashire hotpot.jpg', author: 'alexcwood', license: 'CC BY 2.0' },
  { word: 'Cornish Pasty', file: 'Cornish Pasty (cropped).jpeg', author: 'David Johnson', license: 'CC BY-SA 3.0' },
  { word: 'Sticky Toffee Pudding', file: 'Sticky toffee pudding at the Black Swan - Stierch.jpg', author: 'Sarah Stierch', license: 'CC BY 2.0' },
  { word: 'Eton Mess', file: 'Eton Mess 2025-2 (cropped).jpg', author: 'Exx8', license: 'CC0' },
  { word: 'Victoria Sponge', file: 'Victoria Sponges.jpg', author: 'euphro', license: 'CC BY-SA 2.0' },
  { word: 'Spotted Dick', file: 'Spotted dick.jpg', author: 'Jem Stone', license: 'CC BY 2.0' },
  { word: 'Bread and Butter Pudding', file: 'Bread pudding June 2020.jpg', author: 'Philafrenzy', license: 'CC BY-SA 4.0' },
  { word: 'Treacle Tart', file: 'Mary Berry treacle tart (8131434026).jpg', author: 'Tony Hall', license: 'CC BY 2.0' },
  { word: 'Kedgeree', file: 'Kedgeree.jpg', author: 'Justinc', license: 'CC BY-SA 2.0' },
  { word: 'Pie and Mash', file: 'Goddards pie mash and liquor.jpg', author: 'Goddards Pies Limited', license: 'CC BY-SA 4.0' },
  { word: 'Cream Tea', file: 'Classic cream tea - Nymans Garden Riding House.jpg', author: 'Andy Li', license: 'CC0' },
  { word: 'Jellied Eels', file: 'Eels 1385.JPG', author: 'JanesDaddy', license: 'CC BY-SA 3.0' },
  { word: 'Cumberland Sausage', file: 'Cumberland sausage.jpg', author: 'Andrew Fogg', license: 'CC BY 2.0' },
  { word: 'Pork Scratchings', file: 'Pork Scratchings (3).jpg', author: 'Fumikas Sagisavas', license: 'CC0' },
  { word: 'BBQ Ribs', file: 'Dickey\'s Barbecue Pit BBQ Ribs (26992922031).jpg', author: 'Willis Lam', license: 'CC BY-SA 2.0' },
  { word: 'Mac and Cheese', file: 'Original Mac n Cheese .jpg', author: 'Texasfoodgawker', license: 'CC BY-SA 4.0' },
  { word: 'Gumbo', file: 'Gumbo.JPG', author: 'Amadscientist', license: 'CC BY-SA 3.0' },
  { word: 'Jambalaya', file: 'Homemade Jambalaya.JPG', author: 'Amadscientist', license: 'CC BY-SA 3.0' },
  { word: 'Pulled Pork', file: 'Pulled pork while pulling.JPG', author: 'Thogru', license: 'CC BY-SA 3.0' },
  { word: 'Cornbread', file: 'Skillet cornbread (cropped).jpg', author: 'Zankopedia', license: 'CC BY-SA 3.0' },
  { word: 'Biscuits & Gravy', file: 'Biscuits-and-gravy.jpg', author: 'Kaszeta', license: 'Public domain' },
  { word: 'Po\'Boy', file: 'Shrimppoboy.jpg', author: 'Perlow', license: 'Public domain' },
  { word: 'Beignets', file: 'Beignets at Pastis (15057250578).jpg', author: 'Jun Seita', license: 'CC BY 2.0' },
  { word: 'Pecan Pie', file: 'My first pecan pie!.jpg', author: 'Librarygroover', license: 'CC BY 4.0' },
  { word: 'Clam Chowder', file: 'Quail 07 bg 041506.jpg', author: 'Jon Sullivan', license: 'Public domain' },
  { word: 'Lobster Roll', file: 'Lobster Roll.png', author: 'Maguy23', license: 'CC BY-SA 4.0' },
  { word: 'Bagel with Lox', file: 'Lox-and-bagel-02.jpg', author: 'Kristina D.C. Hoeppner', license: 'CC BY-SA 2.0' },
  { word: 'New York Cheesecake', file: 'Baked cheesecake with raspberries and blueberries.jpg', author: 'zingyyellow', license: 'CC BY 2.0' },
  { word: 'Clam Bake', file: 'New England clam bake.jpg', author: 'inuyaki.com', license: 'CC BY-SA 2.0' },
  { word: 'Buffalo Wings', file: 'Buffalo wings-01.jpg', author: 'Clotee Pridgen Allochuku', license: 'CC BY 2.0' },
  { word: 'Philly Cheesesteak', file: 'Cheesesteak 05 14 20.jpg', author: '17parkc', license: 'CC BY-SA 4.0' },
  { word: 'Chicago Deep Dish', file: 'Chicago-Style Stuffed Pizza.jpg', author: 'Олександр Дячук', license: 'CC BY-SA 4.0' },
  { word: 'Apple Pie', file: 'Apple pie 14.jpg', author: 'Shisma', license: 'CC BY 4.0' },
  { word: 'Thanksgiving Turkey', file: 'Roast turkey from fall season.jpg', author: 'Jim, the Photographer', license: 'CC BY 2.0' },
  { word: 'Chili con Carne', file: 'Bowl of chili.jpg', author: 'Carstor', license: 'CC BY-SA 2.5' },
  { word: 'Pancakes', file: 'Foodiesfeed.com pouring-honey-on-pancakes-with-walnuts.jpg', author: 'Mae Mu', license: 'CC0' },
  { word: 'Eggs Benedict', file: 'Traditional Eggs Benedict.jpg', author: 'Mark Miller', license: 'CC BY-SA 4.0' },
  { word: 'Key Lime Pie', file: 'Slice of Key Lime Pie.jpg', author: 'Louiemantia', license: 'CC BY-SA 4.0' },
  { word: 'BLT Sandwich', file: 'Mmm... BLT for me! (5487341380).jpg', author: 'jeffreyw', license: 'CC BY 2.0' },
  { word: 'S\'mores', file: 'Smores-Microwave.jpg', author: 'Evan-Amos', license: 'CC0' },
  { word: 'Nachos', file: 'Nachos-cheese.jpg', author: 'chee.hong', license: 'CC BY 2.0' },
  { word: 'Cobb Salad', file: 'Cobb salad, 15 October 2010.jpg', author: 'Jodimichelle', license: 'CC BY-SA 2.0' },
  { word: 'Clam Strips', file: 'Clam strips, fried - San Francisco, CA.jpg', author: 'Daderot', license: 'CC0' },
  { word: 'Reuben Sandwich', file: 'Katz\'s Deli - Lunch.jpg', author: 'Ernesto Andrade', license: 'CC BY 2.0' },
  { word: 'Hamburger', file: 'RedDot Burger.jpg', author: 'Hongreddotbrewhouse', license: 'CC BY-SA 3.0' },
  { word: 'Hot Dog', file: 'Hot dog with mustard.png', author: 'Renee Comet', license: 'Public domain' },
  { word: 'Meze', file: 'Petra metzes.jpg', author: 'Unai Guerra', license: 'CC BY-SA 2.0' },
  { word: 'Mutabbal', file: 'Mutabbel 2.JPG', author: 'Dr. Bernd Gross', license: 'CC BY-SA 3.0' },
  { word: 'Mouhamara', file: 'Tanoreen muhammara.jpg', author: 'Krista', license: 'CC BY 2.0' },
  { word: 'Kebbeh Nayyeh', file: 'Kibbeh Nayyeh.jpg', author: '122589423KM', license: 'Public domain' },
  { word: 'Arayes', file: 'Arayes leb.jpg', author: 'Ahmedhamdy007', license: 'CC BY-SA 4.0' },
  { word: 'Shish Taouk', file: 'Tavuk Şiş.jpg', author: 'Garrett Ziegler', license: 'CC BY-SA 4.0' },
  { word: 'Kafta Meshwiyyeh', file: 'Grilled Kefta Skewers.jpg', author: 'Strawberrypotato', license: 'CC BY 4.0' },
  { word: 'Riz bi Shaʿriyyeh', file: 'Arabic rice.jpg', author: 'El Mono Español', license: 'CC BY-SA 4.0' },
  { word: 'Freekeh', file: 'Freekeh (uncooked).jpg', author: 'Wribln', license: 'CC BY-SA 4.0' },
  { word: 'Lentil Soup', file: 'EgFoodLentilSoup.jpg', author: 'Roland Unger', license: 'CC BY-SA 3.0' },
  { word: 'Yakhnet Sabanekh', file: 'Afghan lamb with spinach and beans.jpg', author: 'WordRidden', license: 'CC BY 2.0' },
  { word: 'Kaak', file: 'Arabkaak.jpg', author: 'Nsaum75', license: 'CC BY-SA 3.0' },
  { word: 'Sfeeha', file: 'Sfiha2.jpg', author: 'Bazel', license: 'Public domain' },
  { word: 'Toum', file: 'Toum (Lebanese Garlic Sauce).JPG', author: 'Miansari66', license: 'CC0' },
  { word: 'Pomegranate Molasses', file: 'Pomegranate molasses in a chinese spoon.jpg', author: 'El Mono Español', license: 'CC BY-SA 4.0' },
  { word: 'Meghli', file: 'Мигли с добавками.JPG', author: 'حسين علي قرياني', license: 'CC BY-SA 3.0' },
  { word: 'Awamat', file: 'Loukoumades.jpg', author: 'avlxyz', license: 'CC BY-SA 2.0' },
  { word: 'Jallab', file: 'Jallab.jpg', author: 'Adam Jung', license: 'CC BY 2.0' },
  { word: 'Kibbeh', file: 'Kibbeh3.jpg', author: 'Bazel', license: 'CC BY-SA 3.0' },
  { word: 'Fattoush', file: 'Fattoush mixed-salad.jpg', author: 'Arousing Appetites', license: 'CC BY-SA 3.0' },
  { word: 'Mujaddara', file: 'Mujaddara.jpg', author: 'Bazel', license: 'CC BY-SA 3.0' },
  { word: 'Manakish', file: 'Zaatar Mankousheh.jpg', author: 'Elie.ghob', license: 'CC BY-SA 4.0' },
  { word: 'Labneh', file: 'Labneh01.jpg', author: 'Omernos', license: 'Public domain' },
  { word: 'Warak Dawali', file: 'Stuffed grape leaves.jpg', author: 'Jon Sullivan', license: 'Public domain' },
  { word: 'Arak', file: 'Arak with water and ice.jpg', author: 'Preacher lad', license: 'CC BY-SA 4.0' },
  { word: 'Hummus', file: 'Lebanese style hummus.jpg', author: 'Beyrouthhh', license: 'CC BY 3.0' },
  { word: 'Falafel', file: 'Falafels 2.jpg', author: 'Popo le Chien', license: 'CC BY-SA 3.0' },
  { word: 'Shawarma', file: 'Shawarma 2.jpg', author: 'Vis M', license: 'CC BY-SA 4.0' },
  { word: 'Tabbouleh', file: 'Tabouleh 1.JPG', author: 'Miansari66', license: 'CC0' },
  { word: 'Baba Ghanoush', file: 'Baba Ganoush 05of05 (8735238183).jpg', author: 'Breville USA', license: 'CC BY 2.0' },
  { word: 'Sauerbraten', file: 'Heldrunger Sauerbraten 2.JPG', author: 'Dr. Bernd Gross', license: 'CC BY-SA 4.0' },
  { word: 'Kassler', file: 'Kassler.jpg', author: 'Achim Raschka', license: 'CC BY-SA 3.0' },
  { word: 'Eisbein', file: 'Eisbein-2.jpg', author: 'Rainer Zenz', license: 'CC BY-SA 3.0' },
  { word: 'Schweinebraten', file: 'Schweinebraten Goldener Adler Mürsbach.jpg', author: 'Benreis', license: 'CC BY-SA 4.0' },
  { word: 'Rinderroulade', file: 'Thüringer Rinderroulade mit Klößen.JPG', author: 'Dr. Bernd Gross', license: 'CC BY-SA 4.0' },
  { word: 'Currywurst', file: '20220430 currywurst.jpg', author: 'Ziko van Dijk', license: 'CC BY-SA 4.0' },
  { word: 'Leberkäse', file: 'Leberkäse-1.jpg', author: 'Rainer Zenz', license: 'CC BY-SA 3.0' },
  { word: 'Hackepeter', file: 'Mettbroetchen.jpg', author: 'Nize', license: 'CC BY-SA 3.0' },
  { word: 'Weißwurst', file: 'Weißwurst-1.jpg', author: 'Rainer Zenz', license: 'CC BY-SA 3.0' },
  { word: 'Nürnberger', file: 'Nürnberger Würstchen (10579337046).jpg', author: 'Dirk Vorderstraße', license: 'CC BY 2.0' },
  { word: 'Frankfurter', file: 'Frankfurter wuerstchen.jpg', author: 'WordRidden', license: 'CC BY 2.0' },
  { word: 'Blutwurst', file: '-2021-07-24 Sliced Black pudding sausage, Trimingham, Norfolk.JPG', author: 'Kolforn', license: 'CC BY-SA 4.0' },
  { word: 'Kartoffelknödel', file: 'Knödelschneemänner 1.jpg', author: 'Schnobby', license: 'CC BY-SA 4.0' },
  { word: 'Rotkohl', file: 'BraisedRedCabbage-0719.jpg', author: 'DC Central Kitchen', license: 'CC BY 2.0' },
  { word: 'Spätzle', file: 'Spätzle-02.jpg', author: 'Kobako', license: 'CC BY-SA 2.5' },
  { word: 'Käsespätzle', file: 'Berggasthof Haldenhof - Käsknöpfle (1).jpg', author: '1971markus', license: 'CC BY-SA 4.0' },
  { word: 'Kartoffelsalat', file: 'Kartoffelsalat with mayonnaise.jpg', author: 'cyclonebill', license: 'CC BY-SA 2.0' },
  { word: 'Pumpernickel', file: 'Pumpernickel allemand.jpg', author: 'Thomon', license: 'CC BY-SA 4.0' },
  { word: 'Brezeln', file: 'Brezel l Bäckerei-Raisch.jpg', author: 'LenaRaisch', license: 'CC BY-SA 4.0' },
  { word: 'Stollen', file: 'Stollen-Dresdner Christstollen.jpg', author: 'Gürgi', license: 'Public domain' },
  { word: 'Gulaschsuppe', file: 'Goulash soup 2.jpg', author: 'Tiia Monto', license: 'CC BY-SA 3.0' },
  { word: 'Pichelsteiner', file: 'Pichelsteiner Eintopf.jpg', author: 'Josef Türk Jun.', license: 'CC BY-SA 2.0' },
  { word: 'Schwarzwälder Kirschtorte', file: 'Black Forest gateau.jpg', author: 'Mikelo', license: 'CC BY-SA 2.0' },
  { word: 'Apfelstrudel', file: 'Strudel.jpg', author: 'che', license: 'CC BY-SA 2.5' },
  { word: 'Lebkuchen', file: 'Lebkuchen-pile.jpg', author: 'Cnbrb', license: 'CC BY-SA 4.0' },
  { word: 'Weißbier', file: '2013 Augustiner Weissbier Munich pub.jpg', author: 'Takeaway', license: 'CC BY-SA 3.0' },
  { word: 'Glühwein', file: 'Glühwein Weinnachtsmarkt OS.JPG', author: 'Basotxerri', license: 'CC BY-SA 4.0' },
  { word: 'Schnitzel', file: 'Breitenlesau Krug Bräu Schnitzel.JPG', author: 'Benreis', license: 'CC BY-SA 3.0' },
  { word: 'Bratwurst', file: 'German Bratwürste.jpg', author: 'Gerbis', license: 'CC BY-SA 3.0' },
  { word: 'Sauerkraut', file: 'Bauernseufzer Sauerkraut Bayreuth.jpg', author: 'Benreis', license: 'CC BY-SA 4.0' },
  { word: 'Dressed Crab', file: 'Crab meat in shell with salad and Marie Rose sauce.jpg', author: 'horax zeigt hier', license: 'CC BY-SA 2.0' },
  { word: 'Langoustines', file: 'Langoustine (Nephrops norvegicus) (Ifremer 00710-82223).jpg', author: 'Isabelle Cheret', license: 'CC BY 4.0' },
  { word: 'Smoked Haddock', file: 'Smoked haddock with pease pudding and saffron.jpg', author: 'Bertrand Man', license: 'CC BY 2.0' },
  { word: 'Potted Shrimp', file: 'Potted shrimp on toast with pickled cucumber.jpg', author: 'Kai Chan Vong', license: 'CC BY 2.0' },
  { word: 'Grouse', file: '2014-04-21 Lagopus lagopus scotica, Hawsen Burn 1.jpg', author: 'MPF', license: 'CC BY-SA 3.0' },
  { word: 'Venison', file: 'Venison Loin (3293814360).jpg', author: 'Ruth Hartnup', license: 'CC BY 2.0' },
  { word: 'Aberdeen Angus', file: 'Ribeye steak, chips, béarnaise sauce.jpg', author: 'Socket0', license: 'CC0' },
  { word: 'Scotch Pie', file: 'Scotch pie.jpg', author: 'Delta-NC', license: 'Public domain' },
  { word: 'Scotch Broth', file: 'Lunch at Inveraray Castle - Scotch broth (14342541740).jpg', author: 'bnhsu', license: 'CC BY-SA 2.0' },
  { word: 'Cock-a-Leekie', file: 'Cock-a-leekie Soup.jpg', author: 'Laurel F', license: 'CC BY-SA 2.0' },
  { word: 'Selkirk Bannock', file: 'BannockBeremeal.jpg', author: 'Lou Sander', license: 'CC BY-SA 3.0' },
  { word: 'Cranachan', file: 'Cranachan (4332953688).jpg', author: 'Saskia van de Nieuwenhof', license: 'CC BY-SA 2.0' },
  { word: 'Tablet', file: 'Butter tablet.JPG', author: 'Seraphim Whipp', license: 'Public domain' },
  { word: 'Single Malt Whisky', file: 'Bowmore whisky 12 years.JPG', author: 'Sansvase', license: 'CC BY-SA 3.0' },
  { word: 'Irn-Bru', file: 'Barr IRN-BRU Sugar Free (3 of 3).jpg', author: 'Ubcule', license: 'CC BY-SA 4.0' },
  { word: 'Haggis', file: 'Scotland Haggis.jpg', author: 'Chris Brown', license: 'CC BY 2.0' },
  { word: 'Cullen Skink', file: 'Cullen Skink.JPG', author: 'Metukkalihis', license: 'CC BY-SA 3.0' },
  { word: 'Stovies', file: 'Stovies containing beef.jpg', author: 'Mutt Lunker', license: 'CC BY-SA 4.0' },
  { word: 'Arbroath Smokie', file: 'Arbroath Smokies - geograph.org.uk - 481678.jpg', author: 'Anne Burgess', license: 'CC BY-SA 2.0' },
  { word: 'Clootie Dumpling', file: 'Clootie dumpling.jpg', author: 'Matt Riggott', license: 'CC BY-SA 2.0' },
  { word: 'Shortbread', file: 'Shortbread House round biscuit .jpg', author: 'Elumineau', license: 'CC BY-SA 4.0' },
  { word: 'Porridge', file: 'Oatmeal (1).jpg', author: 'Renee Comet', license: 'Public domain' },
  { word: 'Neeps and Tatties', file: 'Burns Supper - January 25th 2024.jpg', author: 'Evelyn Hollow', license: 'CC BY-SA 4.0' },
  { word: 'Lorne Sausage', file: 'Grinners breakfast.jpg', author: 'Grinner', license: 'CC BY-SA 3.0' },
  { word: 'Dundee Cake', file: 'North British Dundee cake.JPG', author: 'RGloucester', license: 'CC BY-SA 4.0' },
  { word: 'Forfar Bridie', file: 'Bridie.jpg', author: 'Lindy Buckley', license: 'CC BY 2.0' },
  { word: 'Brown Bread', file: 'Irish brown soda bread.JPG', author: 'O\'Dea', license: 'CC BY-SA 4.0' },
  { word: 'Farl', file: 'Ben W Bell Soda Bread Farl 05 June 2007.jpg', author: 'Canterbury Tail', license: 'CC BY-SA 3.0' },
  { word: 'Barmbrack', file: 'Barmbrack.jpg', author: 'Fordmadoxfraud', license: 'CC BY-SA 3.0' },
  { word: 'Potato Farl', file: 'Ulster fry 1.jpg', author: 'Kent Wang', license: 'CC BY-SA 2.0' },
  { word: 'Champ', file: 'Champ (food).JPG', author: 'Glane23', license: 'CC BY-SA 3.0' },
  { word: 'Colcannon', file: 'Colcannon.JPG', author: 'Alison Cassidy', license: 'Public domain' },
  { word: 'Boxty', file: 'Boxty triangle.jpg', author: 'さえぼー', license: 'CC0' },
  { word: 'Dublin Coddle', file: 'Irish Coddle.jpg', author: 'Shushshello', license: 'CC0' },
  { word: 'Irish Stew', file: 'Bone-in Irish lamb stew made with -guiness and red wine 骨つきラム入り、-ギネス と赤ワインで煮込んだアイリッシュシチュー -stpatricksday -聖パトリックの日.jpg', author: 'naotakem', license: 'CC BY 2.0' },
  { word: 'Corned Beef and Cabbage', file: 'Corned Beef and Cabbage (16227912513).jpg', author: 'Willis Lam', license: 'CC BY-SA 2.0' },
  { word: 'Smoked Salmon', file: '2014 smoked salmon and egg salad toasted baguette.JPG', author: 'Takeaway', license: 'CC BY-SA 3.0' },
  { word: 'Crubeens', file: 'Crubeens 2008.jpg', author: 'Helen', license: 'CC BY-SA 2.0' },
  { word: 'Irish Butter', file: 'Butter dish.jpg', author: 'The Digital Pimp', license: 'CC BY 2.0' },
  { word: 'Cashel Blue', file: 'CashelBlue.JPG', author: 'AchilleT', license: 'Public domain' },
  { word: 'Irish Whiskey', file: 'GoodIrishWhiskeys.jpg', author: 'Hammersbach', license: 'CC BY-SA 3.0' },
  { word: 'Poitín', file: 'A selection of Irish Poitín.jpg', author: 'Handyandy70', license: 'CC BY 4.0' },
  { word: 'Soda Bread', file: 'Irish soda bread (58 of 68) (cropped).jpg', author: 'Wheeler Cowperthwaite', license: 'CC BY 2.0' },
  { word: 'Full Irish', file: 'Irish breakfast, cooked.JPG', author: 'O\'Dea', license: 'CC BY-SA 4.0' },
  { word: 'Bacon and Cabbage', file: 'Bacon and Cabbage in Ireland.jpg', author: 'Zackgallagher', license: 'CC BY-SA 4.0' },
  { word: 'Irish Seafood Chowder', file: 'Seafood chowder.jpg', author: 'Jazz Guy', license: 'CC BY 2.0' },
  { word: 'Black and White Pudding', file: 'Irish black and white pudding slices.JPG', author: 'O\'Dea', license: 'CC BY-SA 4.0' },
  { word: 'Guinness Beef Stew', file: 'IrishStew Guinness.JPG', author: 'Jpatokal', license: 'CC BY-SA 4.0' },
  { word: 'Harira', file: 'Harira.png', author: 'Kattusa24', license: 'Public domain' },
  { word: 'Bastilla', file: 'Bisteeya.jpg', author: 'Krista', license: 'CC BY 2.0' },
  { word: 'Msemen', file: 'مسمن.jpg', author: 'إيان', license: 'CC BY-SA 4.0' },
  { word: 'Zaalouk', file: 'Zaalouk-01.JPG', author: 'Tamorlan', license: 'CC BY-SA 3.0' },
  { word: 'Chermoula', file: 'Poulet chermoula aux olives rouges.png', author: 'Fzlaissi', license: 'CC BY-SA 4.0' },
  { word: 'Makouda', file: 'Maakouda.jpg', author: 'Jeouit', license: 'CC BY-SA 3.0' },
  { word: 'Moroccan Mint Tea', file: 'Mint tea, Marrakesh.jpg', author: 'Adam Harangozó', license: 'CC BY-SA 4.0' },
  { word: 'Rfissa', file: 'Rfissa marocaine.jpg', author: 'Mokhtaroo', license: 'CC BY-SA 3.0' },
  { word: 'Tagine Mrouzia', file: 'IB tajine 02.jpg', author: 'Iron Bishop', license: 'CC BY-SA 3.0' },
  { word: 'Tagine Kefta', file: 'Tajine kefta (8348397161).jpg', author: 'Mzximvs VdB', license: 'CC BY-SA 2.0' },
  { word: 'Tagine Poulet', file: 'Tajine-marocain-un-plat-varie-et-sain (cropped).jpg', author: 'BBouchra00', license: 'CC BY-SA 4.0' },
  { word: 'Bissara', file: 'Bissara Moroccan split pea and fava bean soup.jpg', author: 'Ruby Josephine Smith', license: 'CC BY-SA 4.0' },
  { word: 'Chorba', file: 'Chorba cooked in the home kitchen.jpg', author: 'Bgelo777', license: 'CC BY-SA 4.0' },
  { word: 'Khobz', file: 'Pains matlou dans une boulangerie de la rue d\'Aligre, à Paris.jpg', author: 'Indif', license: 'CC BY-SA 3.0' },
  { word: 'Beghrir', file: 'بغرير.jpg', author: 'فاطمة الزهراء', license: 'CC BY-SA 4.0' },
  { word: 'Harcha', file: 'Ary-7ercha.JPG', author: 'Lucyin', license: 'CC BY-SA 4.0' },
  { word: 'Taktouka', file: 'Moroccan Grilled Red Pepper Salad.jpg', author: 'Ni4535', license: 'CC BY 4.0' },
  { word: 'Mechoui', file: 'Mechoui.jpg', author: 'Andre Piquet', license: 'CC BY 3.0' },
  { word: 'Tangia', file: 'Tanjia-959.jpg', author: 'VraieMarocaine', license: 'Public domain' },
  { word: 'Merguez', file: 'Merguez sausages.jpg', author: 'Stu Spivack', license: 'CC BY-SA 2.0' },
  { word: 'Chebakia', file: 'Chebakia.jpg', author: 'Indif', license: 'CC BY-SA 3.0' },
  { word: 'Kaab el Ghazal', file: 'كعب الغزال.jpg', author: 'Sambasoccer27', license: 'CC BY-SA 4.0' },
  { word: 'Sellou', file: 'Sfouf.jpg', author: 'DocteurCosmos', license: 'CC BY-SA 3.0' },
  { word: 'Argan Oil', file: 'Huile d\'argan 010.JPG', author: 'Arnaud 25', license: 'CC BY-SA 3.0' },
  { word: 'Tagine', file: 'Moroccan dinner-02.jpg', author: 'Matt Perreault', license: 'CC BY-SA 2.0' },
  { word: 'Couscous', file: 'Moroccan cuscus, from Casablanca, September 2018.jpg', author: 'Lmmima', license: 'CC BY-SA 4.0' },
  { word: 'Bun Cha', file: 'Bún chả Vietnamese food.jpg', author: 'stuart_spivack', license: 'CC BY 2.0' },
  { word: 'Goi Cuon', file: 'Homemade spring rolls (7010969349).jpg', author: 'pelican', license: 'CC BY-SA 2.0' },
  { word: 'Banh Xeo', file: 'Banh Xeo with fish sauce and vegetables.jpg', author: 'HungryHuy', license: 'CC BY 2.0' },
  { word: 'Cao Lau', file: 'Cao lầu Hội An (2024).jpg', author: 'Chainwit.', license: 'CC BY 4.0' },
  { word: 'Banh Cuon', file: 'Bánh cuốn Thanh Trì.jpg', author: 'Casablanca1911', license: 'Public domain' },
  { word: 'Ca Kho To', file: 'Cá kho tộ, cá hú.jpg', author: 'Charles Haynes', license: 'CC BY-SA 2.0' },
  { word: 'Che', file: 'Chè bà ba.jpg', author: 'Zxcvasdfqwer888', license: 'CC BY-SA 3.0' },
  { word: 'Cha Ca', file: 'Chả cá Lã Vọng Hà Nội.jpg', author: 'Phương Huy', license: 'Public domain' },
  { word: 'Bun Bo Hue', file: 'Bún bò Huế - Chợ Đông Ba (2024) - img 02.jpg', author: 'Chainwit.', license: 'CC BY 4.0' },
  { word: 'Mi Quang', file: 'Mì Quảng, Da Nang, Vietnam.jpg', author: 'Christopher Crouzet', license: 'CC BY-SA 4.0' },
  { word: 'Hu Tieu', file: 'Hu Tieu Nam Vang.jpg', author: 'Dianne Flor Reyno', license: 'CC BY 2.0' },
  { word: 'Thit Nuong', file: 'Bun thit nuong.jpg', author: 'Lưu Ly', license: 'Public domain' },
  { word: 'Com Tam', file: 'Cơm Tấm, Da Nang, Vietnam.jpg', author: 'Christopher Crouzet', license: 'CC BY-SA 4.0' },
  { word: 'Vit Quay', file: 'Vit-quay-bac-kinh-by-vit-quay-to-thi.jpg', author: 'Vitquaytothi', license: 'CC BY-SA 4.0' },
  { word: 'Com Chien', file: 'Fried rice in home.jpg', author: 'Peachyeung316', license: 'CC BY-SA 4.0' },
  { word: 'Xoi', file: 'Xôi sắn.jpg', author: 'Hoangkid', license: 'CC BY-SA 4.0' },
  { word: 'Bo Luc Lac', file: 'Product Shots of Food-Bo Luc Lac.jpg', author: 'Nick Nguyen', license: 'CC BY-SA 2.0' },
  { word: 'Ca Hap', file: 'Steamed fish in dinner.jpg', author: 'Apeach316', license: 'CC BY-SA 2.0' },
  { word: 'Goi Du Du', file: 'Gỏi đu đủ khô bò.jpg', author: 'stu_spivack', license: 'CC BY-SA 2.0' },
  { word: 'Rau Muong Xao Toi', file: 'Rau muống xào tỏi.jpg', author: 'Andy Wright', license: 'CC BY 2.0' },
  { word: 'Ca Phe Trung', file: 'Cà phê trứng.jpg', author: 'travel oriented', license: 'CC BY-SA 2.0' },
  { word: 'Nuoc Mia', file: 'Sugarcanejuice.jpg', author: 'Food Trails', license: 'CC BY-SA 2.0' },
  { word: 'Pho', file: 'Bowl of Meatball pho.jpg', author: 'SerraKnightz', license: 'CC BY 4.0' },
  { word: 'Banh Mi', file: 'Bánh mì thịt nướng.png', author: 'nsaum75', license: 'CC BY-SA 3.0' },
  { word: 'Nasi Lemak', file: 'Nasi Lemak dengan Chili Nasi Lemak dan Sotong Pedas, di Penang Summer Restaurant.jpg', author: 'Meandkancil2020', license: 'CC BY-SA 4.0' },
  { word: 'Char Kway Teow', file: 'Char kway teow.jpg', author: 'Elizetang', license: 'Public domain' },
  { word: 'Laksa', file: 'Nyonya Laksa.jpg', author: 'Giddy98', license: 'CC BY-SA 4.0' },
  { word: 'Roti Canai', file: 'YosriRotiCanai.jpg', author: 'Yosri', license: 'GFDL' },
  { word: 'Rendang', file: 'Rendang daging sapi asli Padang.JPG', author: 'Midori', license: 'CC BY 3.0' },
  { word: 'Hainanese Chicken Rice', file: 'Hainanese Chicken Rice.jpg', author: 'Terence', license: 'CC BY 2.5' },
  { word: 'Mee Goreng', file: 'Kampung Bukit Jagong, Pendang 20240917 172701.jpg', author: 'Wiki Farazi', license: 'CC0' },
  { word: 'Satay', file: 'CHICKEN SATAY.jpg', author: 'Elly Suhailee', license: 'CC BY-SA 4.0' },
  { word: 'Cendol', file: 'Kampung Paya Jaras Tengah, Selangor 20250112 111330.jpg', author: 'Wiki Farazi', license: 'CC0' },
  { word: 'Teh Tarik', file: 'Teh Tarik at the Iskandar Curry House at One Riverside (DSCF0286).jpg', author: 'Yu Chu Chin', license: 'CC BY-SA 4.0' },
  { word: 'Bak Kut Teh', file: 'Song Fa Bak Kut Teh, New Bridge Rd, Singapore (2023) 06.jpg', author: 'Chainwit.', license: 'CC BY 4.0' },
  { word: 'Asado', file: 'Asado tradicional argentino, leña, brasas.jpg', author: 'Maxd2', license: 'CC BY-SA 4.0' },
  { word: 'Empanada', file: 'Tapa de empanadillitas.JPG', author: 'Tamorlan', license: 'CC BY 3.0' },
  { word: 'Chimichurri', file: 'Chimichurri Sauce Recipe (13294574784).jpg', author: 'Dominic Lockyer', license: 'CC BY 2.0' },
  { word: 'Choripán', file: 'Choripan.jpg', author: 'SimpleFoodie', license: 'Public domain' },
  { word: 'Milanesa', file: 'Milanesa plated with lemon slices and french fries (in Buenos Aires, Argentina).jpg', author: 'Ben Tavener', license: 'CC BY 2.0' },
  { word: 'Locro', file: 'Locro argentino.jpg', author: 'Matías Repetto / GCBA', license: 'CC BY 2.5 AR' },
  { word: 'Dulce de Leche', file: 'DulceDeLeche.jpg', author: 'audinou', license: 'CC BY 2.0' },
  { word: 'Alfajor', file: 'AlfajoresP1115215 02.jpg', author: 'Alex Lozupone', license: 'CC BY 4.0' },
  { word: 'Mate', file: 'Mate en calabaza.jpg', author: 'Jorgealfonso', license: 'CC BY-SA 2.5' },
  { word: 'Provoleta', file: 'Provoleta con cazuela (porción).jpg', author: 'Horacio Cambeiro', license: 'CC BY 3.0' },
  { word: 'Ayib', file: 'Ayib and gomen.jpg', author: 'stu_spivack', license: 'CC BY-SA 2.0' },
  { word: 'Ethiopian Ful', file: 'ShahanFul.jpg', author: 'Temesgen Woldezion (edited by Merhawie Woldezion)', license: 'CC BY-SA 2.5' },
  { word: 'Injera', file: 'Injera from ivory teff.jpg', author: 'Edsel Little', license: 'CC BY-SA 2.0' },
  { word: 'Doro Wat', file: 'Injera and doro wat.jpg', author: 'Edsel Little', license: 'CC BY-SA 2.0' },
  { word: 'Misir Wat', file: 'Misir Wat in Pot.jpg', author: 'Omnipc', license: 'CC BY 4.0' },
  { word: 'Tibs', file: 'Mutton tibs and injera.jpg', author: 'ShanaliCT', license: 'CC BY 4.0' },
  { word: 'Kitfo', file: 'Ethiopian Kitfo.JPG', author: 'Kimtonga', license: 'CC BY-SA 4.0' },
  { word: 'Shiro', file: 'Taita and shiro.jpg', author: 'Temesgen Woldezion (edited by Merhawie Woldezion)', license: 'CC BY-SA 2.5' },
  { word: 'Gored Gored', file: 'Gored gored plate, July 2019.jpg', author: 'Thomson200', license: 'CC0' },
  { word: 'Berbere', file: 'Berberespice.jpg', author: 'Badagnani', license: 'CC BY 3.0' },
  { word: 'Tej', file: 'Tej (Ethiopian honey wine) (27241999346).jpg', author: 'cotterillmike', license: 'CC0' },
  { word: 'Ethiopian Coffee', file: 'Coffee ceremony.jpg', author: 'Hans van der Splinter', license: 'CC BY-SA 2.5' },
  { word: 'Chechebsa', file: 'Kitcha fit fit.png', author: 'Merhawie', license: 'CC BY-SA 2.5' },
  { word: 'Raggmunk', file: 'Raggmunk med fläsk.jpg', author: 'Mikaela Börjesson', license: 'CC BY-SA 4.0' },
  { word: 'Pytt i Panna', file: 'Pyttipanna.JPG', author: 'Skivsamlare', license: 'CC BY-SA 3.0' },
  { word: 'Köttbullar', file: 'Swedish.food-Köttbullar med lingon-01.jpg', author: 'tuey', license: 'CC BY 2.0' },
  { word: 'Smörgåsbord', file: 'Smörgåsbord.jpg', author: 'Jordan Klein', license: 'CC BY 2.0' },
  { word: 'Gravlax', file: 'Gravlax 2.jpg', author: 'Tiia Monto', license: 'CC BY-SA 4.0' },
  { word: 'Inlagd Sill', file: 'Midsummer pickled herring.jpg', author: 'Fluff', license: 'CC BY-SA 3.0' },
  { word: 'Janssons Frestelse', file: 'Janssons frestelse.jpg', author: 'Andejons', license: 'CC BY-SA 3.0' },
  { word: 'Husmanskost', file: 'Kroppkaka.jpg', author: 'Sendelbach', license: 'CC BY-SA 3.0' },
  { word: 'Ärtsoppa', file: 'Ärtsoppa och pannkakor.jpg', author: 'hildgrim', license: 'CC BY-SA 2.0' },
  { word: 'Surströmming', file: 'Surströmming.jpg', author: 'Lapplaender', license: 'CC BY-SA 4.0' },
  { word: 'Prinsesstårta', file: 'Princess Cake 2025-Oct-02.jpg', author: 'MarcellusW', license: 'CC0' },
  { word: 'Semla', file: 'SemlaFlickr.jpg', author: 'Frugan', license: 'CC BY 2.0' },
  { word: 'Kanelbulle', file: 'Kanelbulle.jpg', author: 'Bengt Olof Åradsson', license: 'Public domain' },
  { word: 'Aquavit', file: 'Aquavit Schweden.jpg', author: 'Peng', license: 'CC BY-SA 3.0' },
  { word: 'Ceviche', file: 'Cebiche de corvina.JPG', author: 'Picanteria karol', license: 'CC BY-SA 4.0' },
  { word: 'Lomo Saltado', file: 'Lomo Saltado - Lima, Peru Miraflores (Tiendecita Blanca).jpg', author: 'Chasqui (Luis Tamayo)', license: 'CC BY-SA 2.0' },
  { word: 'Ají de Gallina', file: 'Ají de gallina.jpg', author: 'Feralbt', license: 'CC BY-SA 3.0' },
  { word: 'Anticucho', file: 'Anticuchos - Grilled Beef Heart skewers.jpg', author: 'Carly & Art', license: 'CC BY-SA 2.0' },
  { word: 'Causa Limeña', file: 'Causa Rellena.jpg', author: 'spersper', license: 'CC BY 2.0' },
  { word: 'Papa a la Huancaína', file: 'Papa a la huancaina.jpg', author: 'Feralbt', license: 'CC BY 3.0' },
  { word: 'Pollo a la Brasa', file: 'Un cuarto de Pollo a la Brasa.JPG', author: 'Dtarazona', license: 'CC BY-SA 3.0' },
  { word: 'Pachamanca', file: 'PachaComer.jpg', author: 'Håkan Svensson (Xauxa)', license: 'CC BY-SA 3.0' },
  { word: 'Chicha Morada', file: 'Chicha Morada 2017.jpg', author: 'Young Shanahan', license: 'CC BY 2.0' },
  { word: 'Pisco Sour', file: 'Pisco sour 20100613b.JPG', author: 'Dtarazona', license: 'CC BY-SA 4.0' },
  { word: 'Arroz con Leche', file: 'Arroz con leche, postre.jpg', author: 'Juan Emilio Prades Bel', license: 'CC BY-SA 4.0' },
  { word: 'Tiradito', file: 'Tiradito.jpg', author: 'Manuel González Olaechea', license: 'CC BY 3.0' },
  { word: 'Lecsó', file: 'Warm Colors- my Mom\'s Hungarian Lecsó cropped.jpg', author: 'zeevveez', license: 'CC BY-SA 4.0' },
  { word: 'Pálinka', file: 'Sopron barack 07.JPG', author: 'Traumrune', license: 'CC BY-SA 3.0' },
  { word: 'Túrós Csusza', file: 'Túróstészta.jpg', author: 'Christo', license: 'CC BY-SA 4.0' },
  { word: 'Gulyás', file: 'Gulyas080.jpg', author: 'Lily15', license: 'CC BY-SA 3.0' },
  { word: 'Paprikás Csirke', file: 'Chicken Paprikash (Csirke Paprikás).jpg', author: 'Atilla the Great', license: 'CC BY-SA 4.0' },
  { word: 'Pörkölt', file: 'Pörkölt.jpg', author: 'Orrling', license: 'CC BY-SA 3.0' },
  { word: 'Halászlé', file: 'Pot of Hungarian Fisherman\'s Soup (Halászlé, Karpfensuppe).jpg', author: 'Wikiuser100', license: 'CC BY-SA 4.0' },
  { word: 'Töltött Káposzta', file: 'Töltött káposzta, 2.jpg', author: 'Christo', license: 'CC BY-SA 4.0' },
  { word: 'Lángos', file: 'Langos Eger Hungary.jpg', author: 'sikeri', license: 'CC BY-SA 4.0' },
  { word: 'Kürtőskalács', file: 'Kürtőskalács2011.jpg', author: 'Cyril5555', license: 'CC BY-SA 3.0' },
  { word: 'Dobos Torta', file: 'Dobos cake (Gerbeaud Confectionery Budapest Hungary).jpg', author: 'Savannah Grandfather', license: 'CC BY 2.0' },
  { word: 'Rétes', file: 'Strudel.jpg', author: 'che', license: 'CC BY-SA 2.5' },
  { word: 'Unicum', file: 'Unicumbottle.png', author: 'Zwack Sándor', license: 'CC BY-SA 4.0' },
  { word: 'Tokaji', file: 'Szent Tamás Szamorodni 2013.jpg', author: 'SzentTamas86', license: 'CC BY-SA 4.0' },
  { word: 'Zacuscă', file: 'Zacuscă bgiu.jpg', author: 'Bogdan', license: 'CC BY-SA 3.0' },
  { word: 'Tochitura', file: 'Tochitura-moldoveneasca.jpg', author: 'Nicubunu', license: 'CC BY-SA 3.0' },
  { word: 'Murături', file: 'Gogonică castraveţi conopidă murate.jpg', author: 'Bogdan29roman', license: 'CC0' },
  { word: 'Drob', file: 'Drob de Miel.JPG', author: 'Sacha47', license: 'CC BY-SA 4.0' },
  { word: 'Mămăligă', file: 'Kulesha&brunza.jpg', author: 'Kagor', license: 'CC BY-SA 3.0' },
  { word: 'Sarmale', file: 'Sarmale with polenta and sour cream.jpg', author: 'Alucard 7.33', license: 'CC BY-SA 4.0' },
  { word: 'Ciorbă de Burtă', file: 'Ciorba de burta 2.jpg', author: 'Sacha47', license: 'CC BY-SA 4.0' },
  { word: 'Mici', file: 'Mititei aufm Grill.jpg', author: 'Stoschmidt', license: 'CC BY 3.0' },
  { word: 'Ciorbă de Legume', file: 'Ciorbă de legume 2.jpg', author: 'Sacha47', license: 'CC BY-SA 4.0' },
  { word: 'Tocăniță', file: 'Tocăniță de murături.jpg', author: 'Mngck', license: 'CC BY-SA 4.0' },
  { word: 'Jumări', file: 'Pork crackling 02.jpg', author: 'Athikhun.suw', license: 'CC BY-SA 4.0' },
  { word: 'Cozonac', file: 'Cozonac-cu-nuca-103.jpg', author: 'Vvssmmaann', license: 'CC BY-SA 4.0' },
  { word: 'Papanași', file: 'Papanasi cu cirese.jpg', author: 'Nicubunu', license: 'CC BY-SA 3.0' },
  { word: 'Pălincă', file: 'Palincă.jpg', author: 'Morosanul', license: 'CC BY-SA 4.0' },
  { word: 'Salată de Boeuf', file: 'Salată de boeuf3.png', author: 'Sacha47', license: 'CC BY-SA 4.0' },
  { word: 'Moules-Frites', file: 'Moules Frites.jpg', author: 'dennis and aimee jonez', license: 'CC BY-SA 2.0' },
  { word: 'Belgian Frites', file: 'Belgian frites with andalouse sauce.jpg', author: 'anders pearson', license: 'CC BY-SA 2.0' },
  { word: 'Carbonnade Flamande', file: 'Jielbeaumadier carbonade flamande 2010.jpg', author: 'Jiel Beaumadier', license: 'CC BY-SA 4.0' },
  { word: 'Waterzooi', file: 'Waterzooi (Fastaff).jpg', author: 'Tamorlan', license: 'CC BY-SA 3.0' },
  { word: 'Belgian Waffle', file: 'Waffle with strawberries and confectioner\'s sugar.jpg', author: 'Ralph Daily', license: 'CC BY 2.0' },
  { word: 'Belgian Chocolate', file: 'Belgian chocolates.jpg', author: 'frank wouters', license: 'CC BY 2.0' },
  { word: 'Speculoos', file: 'Speculoos Cookies (25841384343).jpg', author: 'The Marmot', license: 'CC BY 2.0' },
  { word: 'Belgian Beer', file: 'Duvel beer in beer glass, 2024.jpg', author: 'Chris Olszewski', license: 'CC BY-SA 4.0' },
  { word: 'Jenever', file: 'Hasseltse jenever.jpg', author: 'Paul Hermans', license: 'CC BY-SA 3.0' },
  { word: 'Stoemp', file: 'Cod and stoemp.jpg', author: 'Simon Aughton', license: 'CC BY-SA 2.0' },
  { word: 'Chicons au Gratin', file: 'Chicory (witlof), oven dish with ham and cheese.jpg', author: 'Vincent van Zeijst', license: 'CC BY-SA 4.0' },
  { word: 'Banitsa', file: 'Вкусна домашна баница.JPG', author: 'Sheku80', license: 'CC BY-SA 3.0' },
  { word: 'Shopska Salad', file: 'Chopska.jpg', author: 'Popo le Chien', license: 'CC0' },
  { word: 'Kavarma', file: 'Kavarma.jpeg', author: 'Jeroen Kransen', license: 'CC BY-SA 2.5' },
  { word: 'Tarator', file: 'Tarator (Bulgarian cold soup).jpg', author: 'Gillgaramond', license: 'CC BY-SA 4.0' },
  { word: 'Sarmi', file: 'Sarma and yugourt.JPG', author: 'Biso', license: 'CC BY 3.0' },
  { word: 'Kebapche', file: 'Kebapche bg.jpg', author: 'Ikonact', license: 'CC BY-SA 3.0' },
  { word: 'Shkembe Chorba', file: 'Shkembe-chorba in Kardzhali 2011.JPG', author: 'Bin im Garten', license: 'CC BY-SA 3.0' },
  { word: 'Lyutenitsa', file: 'Лутеница.jpg', author: 'Чакаровска', license: 'CC BY-SA 4.0' },
  { word: 'Mekitsi', file: 'Mekici and jam.JPG', author: 'Biso (Biser Todorov)', license: 'CC BY-SA 3.0' },
  { word: 'Kyufte', file: 'Kebapcheta.JPG', author: 'Biso', license: 'CC BY 3.0' },
  { word: 'Meshana Skara', file: 'Bulgarian cuisine Meat dish with garnish and lyutenitsa sauce (Cucina Bulgara) 01.jpg', author: 'EvelinaRibarova', license: 'CC BY-SA 4.0' },
  { word: 'Rakia', file: 'ЕленскаСливова.jpg', author: 'Blue (Bulgarian Wikipedia)', license: 'CC BY-SA 3.0' },
  { word: 'Boza', file: 'Boza bg.jpg', author: 'Ikonact', license: 'CC BY-SA 3.0' },
  { word: 'Ćevapi', file: 'Cevapi s kajmakom.jpg', author: 'Christian Paul', license: 'CC BY-SA 2.0' },
  { word: 'Burek', file: 'Meat burek (GAK bakery, Belgrade, Serbia).jpg', author: 'Petar Milošević', license: 'CC BY-SA 4.0' },
  { word: 'Pljeskavica', file: 'Pleskavitsa.JPG', author: 'Biso', license: 'CC BY 3.0' },
  { word: 'Ajvar', file: 'Ajvar1 bright.jpg', author: 'Off-shell', license: 'CC BY-SA 4.0' },
  { word: 'Kajmak', file: 'Kaymak from Montenegro 04.jpg', author: 'Milica Buha', license: 'CC BY-SA 4.0' },
  { word: 'Rakija', file: 'Šljivovica (Serbian Slivovitz).jpg', author: 'Petar Milošević', license: 'CC BY-SA 4.0' },
  { word: 'Baklava', file: 'Baklava in Sarajevo 84 in LJubljana.jpg', author: 'Alex Sirac', license: 'CC BY 4.0' },
  { word: 'Sarma', file: 'Serbian Sarma.jpg', author: 'Goran Andjelic', license: 'CC BY-SA 4.0' },
  { word: 'Tavče Gravče', file: 'Тавче Гравче.jpg', author: 'Cuklev', license: 'CC BY-SA 4.0' },
  { word: 'Karađorđeva Šnicla', file: 'Karađorđeva šnicla.jpg', author: 'Vacant0', license: 'CC BY 4.0' },
  { word: 'Pasulj', file: 'Pasulj (10291319804).jpg', author: 'Ivana Sokolović', license: 'CC BY 2.0' },
  { word: 'Gibanica', file: 'Gibanica single slice with full pie in background.jpg', author: 'Cyrus Roepers (Arousing Appetites)', license: 'CC BY-SA 3.0' },
  { word: 'Paprikaš', file: 'Pileći Paprikaš sa Domaćim Noklicama.jpg', author: 'Tradition on a Plate', license: 'CC BY-SA 4.0' },
  { word: 'Strukli', file: 'Štrukli iz Okrugljaka.jpg', author: 'Bonč', license: 'CC BY-SA 3.0' },
  { word: 'Chelo Kebab', file: 'Chelo Kabab Soltani Berlin Kourosh.jpg', author: 'Benreis', license: 'CC BY 3.0' },
  { word: 'Ghormeh Sabzi', file: 'Ghormeh Sabzi.JPG', author: 'Amin Majidi', license: 'CC0' },
  { word: 'Fesenjan', file: 'Khoresht-e fesenjan.jpg', author: 'stringparts', license: 'CC BY 2.0' },
  { word: 'Ash Reshteh', file: 'Ash Reshteh.JPG', author: 'AilinParsa', license: 'CC BY-SA 3.0' },
  { word: 'Tahdig', file: 'Persianmom\'s mother\'s (persiangrandma) perfect tahdig rice.png', author: 'AninnymouseEditor', license: 'CC BY-SA 4.0' },
  { word: 'Joojeh Kabab', file: 'Jujeh Kabab by Taha.7.13.jpg', author: 'طاها حجتی', license: 'CC BY-SA 4.0' },
  { word: 'Bastani', file: 'Akbar Mashti.JPG', author: 'IDangerMouse', license: 'Public domain' },
  { word: 'Zereshk Polo', file: 'Zereshk polo - Riso con crespini.jpg', author: 'Marcuscalabresus', license: 'CC BY-SA 4.0' },
  { word: 'Persian Tea', file: 'Persian tea glass.JPG', author: 'Mondephile', license: 'Public domain' },
  { word: 'Doogh', file: 'Dough (ayran ) dei Qashqai in Iran.jpg', author: 'Marcuscalabresus', license: 'CC BY-SA 4.0' },
  { word: 'Halva', file: 'Persian halva.jpg', author: 'مانفی', license: 'CC BY-SA 4.0' },
  { word: 'Opor Ayam', file: 'Opor Ayam Telur Pindang.JPG', author: 'Sakurai Midori', license: 'CC BY 3.0' },
  { word: 'Martabak', file: 'MartabakTelur.JPG', author: 'Sakurai Midori', license: 'CC BY-SA 3.0' },
  { word: 'Rawon', file: 'Rawon Setan II.jpg', author: 'christian razukas', license: 'CC BY-SA 2.0' },
  { word: 'Nasi Goreng', file: 'Nasi Goreng Kampung (11967588375).jpg', author: 'shankar s.', license: 'CC BY 2.0' },
  { word: 'Gado-Gado', file: 'Gado gado jakarta.jpg', author: 'Piknikdong', license: 'CC BY-SA 4.0' },
  { word: 'Satay', file: 'Sate Ayam Sabang Telur Uritan 1.jpg', author: 'Gunawan Kartapranata', license: 'CC BY-SA 4.0' },
  { word: 'Soto Ayam', file: 'Soto ayam.JPG', author: 'Sakurai Midori', license: 'CC BY-SA 3.0' },
  { word: 'Tempeh', file: 'Tempe Goreng.jpg', author: 'Fido Cahya', license: 'CC BY-SA 4.0' },
  { word: 'Bakso', file: 'Bakso mi bihun.jpg', author: 'christian r', license: 'CC BY-SA 2.0' },
  { word: 'Nasi Padang', file: 'Nasi Padang Pak Nurdin.jpg', author: 'D.W. Fisher-Freberg', license: 'CC BY-SA 4.0' },
  { word: 'Es Cendol', file: 'Jakarta street-side Es Cendol 4.jpg', author: 'Gunawan Kartapranata', license: 'CC BY-SA 4.0' },
  { word: 'Borscht', file: 'Borscht served.jpg', author: 'liz west', license: 'CC BY 2.0' },
  { word: 'Varenyky', file: 'Varenyky with Potatoes - 2026 -03.jpg', author: 'DemieK07', license: 'CC BY-SA 4.0' },
  { word: 'Holubtsi', file: 'Holubtsi.jpg', author: 'Stefaniafleur', license: 'CC BY-SA 4.0' },
  { word: 'Chicken Kyiv', file: 'Chicken Kiev - Ukrainian East Village restaurant.jpg', author: 'Jason Lam', license: 'CC BY-SA 2.0' },
  { word: 'Salo', file: 'Сало з часником та грінки.jpg', author: 'Виталий Пуженко', license: 'CC BY-SA 4.0' },
  { word: 'Pampushky', file: 'Pampuchy Donetsk.JPG', author: 'MOs810', license: 'CC BY-SA 3.0' },
  { word: 'Deruny', file: 'Potato pancakes деруни diruni deruni daruni dirani.jpg', author: 'Zeliotvankaizer', license: 'CC BY 4.0' },
  { word: 'Medivnyk', file: 'Medivnyk - 2.jpg', author: 'Amakuha', license: 'CC BY 4.0' },
  { word: 'Horilka', file: 'Zirkova One Ultra Premium Vodka (obverse, Ukrainian flag), Canada, 2026-03-31.jpg', author: 'Chris Woodrich', license: 'CC BY-SA 4.0' },
  { word: 'Kapusniak', file: 'Kapusniak.jpg', author: 'Mariuszjbie', license: 'CC BY-SA 3.0' },
  { word: 'Galushky', file: 'Полтавські галушки.jpg', author: 'Andrii Orlov', license: 'CC BY-SA 4.0' },
  { word: 'Kovbasa', file: 'Домашня ковбаса, запечена в духовці. Заводське. Полтавщина. 2026 07.jpg', author: 'Мандрівниця', license: 'CC BY-SA 4.0' },
  { word: 'Smørrebrød', file: 'Smørrebrød at Kastrup IMG 8275 C.JPG', author: 'Anneli Salo', license: 'CC BY-SA 3.0' },
  { word: 'Frikadeller', file: 'Frikadeller.jpg', author: 'Kenneth Jorgensen', license: 'CC BY-SA 3.0' },
  { word: 'Flæskesteg', file: 'Flæskesteg rødkål brunede kartofler.jpg', author: 'Nillerdk', license: 'CC BY 3.0' },
  { word: 'Rugbrød', file: 'Rugbrød.JPG', author: 'Sten', license: 'CC BY-SA 3.0' },
  { word: 'Æbleskiver', file: 'Aebelskivers in New Orleans.jpg', author: 'edenpictures', license: 'CC BY 2.0' },
  { word: 'Wienerbrød', file: 'Homemade spandauer (pastry) with vanilla cream and powdered sugar.png', author: 'Marius Vassnes', license: 'CC BY-SA 4.0' },
  { word: 'Herring', file: 'Aringa-marinato.jpg', author: 'Kagor', license: 'CC BY-SA 3.0' },
  { word: 'Rødgrød med Fløde', file: 'Rote Grütze mit Sahne-3.jpg', author: 'Like the Grand Canyon', license: 'CC BY 2.0' },
  { word: 'Stegt Flæsk', file: 'Stegt flæsk med persillesovs.jpg', author: 'Nillerdk', license: 'CC BY 3.0' },
  { word: 'Risalamande', file: 'Risalamande, a Danish Christmas dessert.jpg', author: 'Lorie Shaull', license: 'CC BY-SA 4.0' },
  { word: 'Svíčková', file: 'Svíčková na smetaně.JPG', author: 'Matyáš Havel', license: 'CC BY-SA 3.0' },
  { word: 'Vepřo-knedlo-zelo', file: 'Vepřo knedlo zelo, Prague.jpg', author: 'Yusuke Kawasaki', license: 'CC BY 2.0' },
  { word: 'Knedlíky', file: 'Dančí guláš a houskové knedlíky 01.jpg', author: 'Pohled 111', license: 'CC BY-SA 4.0' },
  { word: 'Trdelník', file: 'Trdelník-Basket-20101.JPG', author: 'Tamorlan', license: 'CC BY-SA 3.0' },
  { word: 'Guláš', file: 'Veprovy gulas s karlovarskym knedlikem.JPG', author: '01x07x2022000', license: 'CC0' },
  { word: 'Czech Beer', file: 'Pilsner Urquell mug.jpg', author: 'martavasco', license: 'CC BY-SA 2.0' },
  { word: 'Medovník', file: 'Medovnik Pravčická brána.jpg', author: 'Benreis', license: 'CC BY-SA 4.0' },
  { word: 'Smažený Sýr', file: 'Smažený sýr s tatarskou omáčkou a brambory.jpg', author: 'Oldsoft', license: 'CC0' },
  { word: 'Bramboráky', file: 'Potato pancakes.jpg', author: 'Daniel Spils', license: 'CC BY-SA 2.0' },
  { word: 'Roast Duck & Cabbage', file: 'Roast duck with dumplings (Czech).JPG', author: 'Tamorlan', license: 'CC BY 3.0' },
  { word: 'Švestkové Knedlíky', file: 'Polish Plum Dumplings in Warsaw.jpg', author: 'Cookinpolish', license: 'CC BY-SA 4.0' },
  { word: 'Utopenci', file: 'Utopenci.jpg', author: 'Ludek', license: 'CC BY-SA 3.0' },
  { word: 'Black Bread', file: 'Lithuanian traditional bread.jpg', author: 'Bearas', license: 'CC BY 3.0' },
  { word: 'Cold Borscht', file: 'Lurid borscht.jpg', author: 'TreasuryTag', license: 'CC BY-SA 3.0' },
  { word: 'Cepelinai', file: 'Cepelinai Kaunas 2023.jpg', author: 'Bdx', license: 'CC0' },
  { word: 'Smoked Fish', file: 'Zakouskis aux sprats.JPG', author: 'Aliyarussophonekz', license: 'CC BY-SA 3.0' },
  { word: 'Kama', file: 'Kama.jpg', author: 'Mmh', license: 'CC BY-SA 3.0' },
  { word: 'Latvian Piragi', file: 'Latvian piragi (bacon buns).jpg', author: 'Sara McCleary', license: 'CC BY-SA 4.0' },
  { word: 'Kvass', file: 'Mint bread kvas.jpg', author: 'Mr.Icon (Mricon)', license: 'CC BY-SA 3.0' },
  { word: 'Alus', file: 'Glass of beer at restaurant Jura in Jurmala.jpg', author: 'JIP', license: 'CC BY-SA 4.0' },
  { word: 'Šakotis', file: 'Šakotis display at Kaunas Central Market (Urmas) 2025.jpg', author: 'Bdx', license: 'CC0' },
  { word: 'Grey Peas & Bacon', file: 'Grey peas at restaurant Milda in Riga.jpg', author: 'JIP', license: 'CC BY-SA 4.0' },
  { word: 'Verivorst', file: 'Verivorstid.jpg', author: 'Pikk de Päkk', license: 'CC BY-SA 3.0' },
  { word: 'Cawl', file: 'Cawl Cymreig.jpg', author: 'Rhyshuw1', license: 'CC BY-SA 3.0' },
  { word: 'Welsh Rarebit', file: 'Welsh rarebit.JPG', author: 'Worm That Turned', license: 'CC BY-SA 4.0' },
  { word: 'Bara Brith', file: 'Bara Brith (3320696816).jpg', author: 'zingyyellow', license: 'CC BY 2.0' },
  { word: 'Laverbread', file: 'Laverbread or Bara Lawr (Porphyra umbilicalis) on Toast.jpg', author: 'Rosser1954', license: 'CC BY-SA 4.0' },
  { word: 'Welsh Lamb', file: 'Roast leg of lamb.jpg', author: 'CNEcija12345', license: 'CC BY-SA 4.0' },
  { word: 'Glamorgan Sausage', file: 'Glamorgan Sausages with Tomato Chutney.jpg', author: 'Medievalist', license: 'CC BY-SA 3.0' },
  { word: 'Caerphilly Cheese', file: 'Caerphilly cheese.jpg', author: 'Jon Sullivan', license: 'Public domain' },
  { word: 'Welsh Cake', file: 'Closeup of Welsh cakes, February 2009.jpg', author: 'zingyyellow', license: 'CC BY 2.0' },
  { word: 'Crempog', file: 'Crempog - Anglesey style.JPG', author: 'FruitMonkey', license: 'CC BY-SA 4.0' },
  { word: 'Faggots', file: 'Faggots-and-gravy.jpg', author: 'Judgej', license: 'CC BY-SA 3.0' },
  { word: 'Stamppot', file: 'Boerenkool stamppot.jpg', author: 'M.Minderhoud', license: 'CC BY-SA 3.0' },
  { word: 'Stroopwafel', file: 'How to eat a stroopwafel (8557345379).jpg', author: 'Saaleha Bamjee', license: 'CC BY-SA 2.0' },
  { word: 'Bitterballen', file: 'Bitterballen with Dijon mustard - Taproom ‘t Blauwe Theehuis 2024-11-26.jpg', author: 'Andy Li', license: 'CC0' },
  { word: 'Herring', file: 'Haring met ui.jpg', author: 'Takeaway', license: 'CC BY-SA 3.0' },
  { word: 'Poffertjes', file: 'Poffertjes-Melkhuis (cropped).jpg', author: 'Illustratedjc', license: 'CC BY-SA 4.0' },
  { word: 'Erwtensoep', file: 'Erwtensoep roggebrood katenspek.jpg', author: 'Takeaway', license: 'CC BY-SA 3.0' },
  { word: 'Gouda', file: 'Chesses gouda affinage.JPG', author: 'Alpha.prim', license: 'Public domain' },
  { word: 'Appelgebak', file: 'Apple pie 7.jpg', author: 'Shisma', license: 'CC BY 4.0' },
  { word: 'Hutspot', file: 'Hutspot met stooflap op bord.JPG', author: 'Ellywa', license: 'CC BY-SA 3.0' },
  { word: 'Rookworst', file: 'Rookworst gedeeltelijk in plakjes 2025.jpg', author: 'JopkeB', license: 'CC BY-SA 4.0' },
  { word: 'Fondue', file: 'Swiss cheese fondue.JPG', author: 'Brücke-Osteuropa', license: 'CC0' },
  { word: 'Raclette', file: 'Raclette 20040817 140816.jpg', author: 'Ka23 13', license: 'CC BY-SA 4.0' },
  { word: 'Rösti', file: 'Roesti.jpg', author: 'Benutzer:Mussklprozz', license: 'CC BY-SA 3.0' },
  { word: 'Zürcher Geschnetzeltes', file: 'Zürcher Geschnetzeltes at Zur rote Buech.jpg', author: 'Jpatokal', license: 'CC BY-SA 3.0' },
  { word: 'Swiss Chocolate', file: 'Läderach.jpg', author: 'bigbirdz', license: 'CC BY 2.0' },
  { word: 'Birchermüesli', file: 'Muesli.jpg', author: 'VirtualSteve', license: 'CC BY-SA 2.5' },
  { word: 'Älplermagronen', file: 'Älplermagronen 2021.jpeg', author: 'Adrian Michael', license: 'CC BY-SA 4.0' },
  { word: 'Rivella', file: 'Kleine Rivellas in Bern 2024.jpg', author: 'Venca24', license: 'CC0' },
  { word: 'Leckerli', file: 'Basler Läckerli 02.jpeg', author: 'Manuel Schneider', license: 'CC BY-SA 3.0' },
  { word: 'Wiener Schnitzel', file: 'Wiener-Schnitzel02.jpg', author: 'Kobako', license: 'CC BY-SA 2.5' },
  { word: 'Tafelspitz', file: 'Tafelspitz.jpg', author: 'RobertK', license: 'CC BY-SA 2.5' },
  { word: 'Sachertorte', file: 'Sachertorte in Vienna.jpg', author: 'Rizka', license: 'CC BY-SA 4.0' },
  { word: 'Kaiserschmarrn', file: '2015 0731 Kaiserschmarrn Apfelsoße Edelweisshütte Sölden.jpg', author: 'Takeaway', license: 'CC BY-SA 4.0' },
  { word: 'Gulasch', file: 'Fiaker Gulasch Pumpe Klagenfurt.jpg', author: 'Benreis', license: 'CC BY-SA 4.0' },
  { word: 'Viennese Coffee', file: 'Wiener Melange 2.JPG', author: 'Dr. Bernd Gross', license: 'CC BY-SA 4.0' },
  { word: 'Knödel', file: 'Semmelknödel.jpg', author: 'Kobako', license: 'CC BY-SA 2.5' },
  { word: 'Linzer Torte', file: 'Linzer Torte, 2023.jpg', author: 'Burkhard Mücke', license: 'CC BY-SA 4.0' },
  { word: 'Lutefisk', file: 'ForkLutefisk.jpg', author: 'Jonathunder', license: 'CC BY-SA 3.0' },
  { word: 'Pinnekjøtt', file: 'Pinnekjott.jpg', author: 'Jarvin', license: 'CC BY-SA 3.0' },
  { word: 'Rømmegrøt', file: 'Römmegröt.jpg', author: 'Tomas Eklund', license: 'Public domain' },
  { word: 'Rakfisk', file: 'Sliced rakfisk.jpg', author: 'Aslak Raanes', license: 'CC BY 2.0' },
  { word: 'Fårikål', file: 'Får i kål.jpg', author: 'Jarvin', license: 'CC BY 3.0' },
  { word: 'Lefse', file: 'Rolled lefse.jpg', author: 'Funknendai', license: 'CC0' },
  { word: 'Klippfisk', file: 'Klippfisk.jpg', author: 'Karl Ragnar Gjertsen', license: 'CC BY-SA 3.0' },
  { word: 'Kjøttkaker', file: 'Traditional Kjøttkaker.jpg', author: 'Edward Russell', license: 'CC BY 2.0' },
  { word: 'Gravlaks', file: 'Graved Lachs Kartoffeln Senfsosse.JPG', author: 'Benreis', license: 'CC BY 3.0' },
  { word: 'Brunost', file: 'Brunost - Brown cheese.jpg', author: 'color line', license: 'CC BY 2.0' },
  { word: 'Krumkake', file: 'Krumkaker.JPG', author: 'Jonathunder', license: 'CC BY-SA 3.0' },
  { word: 'Red Red', file: 'Red red and ripe plantain.jpg', author: 'daSupremo', license: 'CC BY-SA 4.0' },
  { word: 'Kontomire Stew', file: 'Kontomire Stew, Eggs and Plantian.jpg', author: 'Robertjamal12', license: 'CC BY-SA 4.0' },
  { word: 'Kenkey', file: 'Kenkey and ground pepper with sardine.jpg', author: 'Mwintirew', license: 'CC BY-SA 4.0' },
  { word: 'Jollof Rice', file: 'Jollof Rice with Stew.jpg', author: 'Noahalorwu', license: 'CC BY-SA 4.0' },
  { word: 'Fufu', file: 'Fufu with light soup and chicken in a ceramic bowl.jpg', author: 'daSupremo', license: 'CC BY-SA 4.0' },
  { word: 'Waakye', file: 'Waakye with vegetables, fish and egg with ripe plantains.jpg', author: 'daSupremo', license: 'CC BY-SA 4.0' },
  { word: 'Kelewele', file: '“Kelewele” in Ghana.jpg', author: 'Edithobayaa1', license: 'CC BY-SA 4.0' },
  { word: 'Groundnut Soup', file: 'Fufuo and peanut butter soup.jpg', author: 'Rberchie', license: 'CC BY-SA 4.0' },
  { word: 'Banku', file: 'Banku with pepper in Asanka.jpg', author: 'daSupremo', license: 'CC BY-SA 4.0' },
  { word: 'Palm Nut Soup', file: 'Palm nut soup with fish.jpg', author: 'Rberchie', license: 'CC BY-SA 4.0' },
  { word: 'Sobolo', file: 'Homemade sorrel drink.jpg', author: 'stu_spivack', license: 'CC BY-SA 2.0' },
  { word: 'Sukuma Wiki', file: 'Ugali & Sukuma Wiki.jpg', author: 'Paresh Jai', license: 'CC BY 2.0' },
  { word: 'Githeri', file: 'Githeri Meal.jpg', author: 'safaritravelplus', license: 'CC0' },
  { word: 'Maharagwe', file: 'MaharaGwe yaliyoungwa kwa nazi.jpg', author: 'saM Fumbwani', license: 'CC BY-SA 4.0' },
  { word: 'Ugali', file: 'Ugali and cabbage.jpg', author: 'Mark Skipper', license: 'CC BY 2.0' },
  { word: 'Nyama Choma', file: 'Nyama choma barbeque.jpg', author: 'safaritravelplus', license: 'CC0' },
  { word: 'Pilau', file: 'Pilau Food in Kenya.jpg', author: 'Cmwaura', license: 'CC BY-SA 4.0' },
  { word: 'Matoke', file: 'Matoke and Chicken.jpg', author: 'Krugen', license: 'CC BY-SA 4.0' },
  { word: 'Mandazi', file: 'Bowl of mandazi.jpg', author: 'ChildofMidnight', license: 'CC BY 2.0' },
  { word: 'Supu ya Ndizi', file: 'Mtori.jpg', author: 'LittleT889', license: 'CC BY-SA 4.0' },
  { word: 'Chapati', file: '2 Chapati warm and ready to be eaten.jpg', author: 'KittyKaht', license: 'CC BY-SA 2.0' },
  { word: 'Chai Masala', file: 'Chai In Sakora.jpg', author: 'Dadhichbittu007', license: 'CC BY-SA 4.0' },
  { word: 'Lumpia', file: 'Lumpiang Shanghai 2023.jpg', author: 'Roderick Suñaz Sumalinog', license: 'CC BY-SA 4.0' },
  { word: 'Adobo', file: 'Chicken adobo.jpg', author: 'dbgg1979', license: 'CC BY 2.0' },
  { word: 'Sinigang', file: 'The Best Sinigang Cuisine.jpg', author: 'Jessartcam', license: 'CC BY-SA 4.0' },
  { word: 'Lechon', file: 'Lechon Baboy, June 2025 (1).jpg', author: 'Ralff Nestor Nacor', license: 'CC BY-SA 4.0' },
  { word: 'Kare-Kare', file: 'Mac MG 5939.jpg', author: 'GwennVienn', license: 'CC BY-SA 4.0' },
  { word: 'Sisig', file: 'Authentic Kapampangan Sisig.jpg', author: 'Joy L. Cruz', license: 'CC BY-SA 4.0' },
  { word: 'Pancit', file: 'Pancit Ilonggo Style - 12110747826.jpg', author: 'pulaw', license: 'CC BY 2.0' },
  { word: 'Halo-Halo', file: 'Halo-Halo.jpg', author: 'Herbertkikoy', license: 'CC BY-SA 4.0' },
  { word: 'Balut', file: 'EGG BALUT.jpg', author: 'Melchior22', license: 'CC BY-SA 4.0' },
  { word: 'Meat Pie', file: 'Aussie meat pie (cropped).jpg', author: 'Finbar.concaig', license: 'CC BY-SA 4.0' },
  { word: 'Sausage Roll', file: 'Sausage roll - One Market, One Garden Brighton (cropped).jpg', author: 'Andy Li', license: 'CC0' },
  { word: 'Vegemite Toast', file: 'Vegemite on toast.jpg', author: 'Tristanb', license: 'CC BY-SA 3.0' },
  { word: 'Lamington', file: 'Mocha Flake amingtons.jpg', author: 'Zeitgeistlondon', license: 'CC BY-SA 3.0' },
  { word: 'ANZAC Biscuits', file: 'ANZAC biscuits (14 April 2006).jpg', author: 'pfctdayelise', license: 'CC BY-SA 2.5' },
  { word: 'Damper', file: 'Wattleseed Damper (cropped).jpg', author: 'Finbar.concaig', license: 'CC BY-SA 4.0' },
  { word: 'Barramundi & Chips', file: 'Noosa - Barramundi and chips.jpg', author: 'GameBoy2936', license: 'CC BY-SA 4.0' },
  { word: 'Chicken Parma', file: 'Chicken parmigiana.jpg', author: 'Tristan Kenney', license: 'CC BY 2.0' },
  { word: 'Smashed Avo', file: 'Smashed Avocado On Toast (with one poached egg) - Jonny\'s 2026-01-06.jpg', author: 'Andy Li', license: 'CC0' },
  { word: 'Flat White', file: 'Flat white coffee with pretty feather pattern.jpg', author: 'GeorgeMichaelFarewell', license: 'CC BY-SA 4.0' },
  { word: 'Tim Tam', file: 'Tim Tams.jpg', author: 'Bilby', license: 'CC BY-SA 3.0' },
  { word: 'Chiko Roll', file: 'Chiko roll wrapped in bag and handheld.jpg', author: 'Mike Seyfang', license: 'CC BY 2.0' },
  { word: 'Kangaroo Steak', file: 'Kangaroo steak at a restaurant in Sydney, Australia.jpg', author: 'cogdogblog', license: 'CC0' },
  { word: 'Fairy Bread', file: 'Fairy Bread.jpg', author: 'Gemsling', license: 'Public domain' },
  { word: 'Bush Tucker', file: 'Australian bush tucker, Alice Springs.jpg', author: 'Tourism NT', license: 'Attribution' },
  { word: 'Pavlova', file: 'Pavlova dessert.JPG', author: 'Hazel Fowler', license: 'Public domain' },
  { word: 'Hāngī', file: 'EDC hangi 2010.jpg', author: 'Sarah Stewart', license: 'CC BY 2.0' },
  { word: 'Whitebait Fritters', file: 'Whitebait Fritter.JPG', author: 'Inanga', license: 'Public domain' },
  { word: 'Green-lipped Mussels', file: 'Steamed mussels - Napier, New Zealand.jpg', author: 'Daderot', license: 'CC0' },
  { word: 'Pāua', file: 'Haliotis iris LC0282.jpg', author: 'Jörg Hempel', license: 'CC BY-SA 3.0 de' },
  { word: 'Hokey Pokey Ice Cream', file: 'Honeycomb ice cream and hot toffee sauce (5725734559).jpg', author: 'Ben Sutherland', license: 'CC BY 2.0' },
  { word: 'Rewena Bread', file: 'Rewena.jpg', author: 'Groot42', license: 'CC0' },
  { word: 'Bluff Oysters', file: 'Bluff oysters on ice.jpg', author: 'George Pollard', license: 'CC BY-SA 4.0' },
  { word: 'NZ Lamb Roast', file: 'Lamb Sunday roast at Black Horse Inn, Nuthurst West Sussex England.jpg', author: 'Acabashi', license: 'CC BY-SA 4.0' },
  { word: 'Bacon & Egg Pie', file: 'Bacon&egg pie.jpg', author: 'Ottomachin', license: 'CC0' },
  { word: 'Feijoa Crumble', file: 'Feijoa Sorbet (4202806392).jpg', author: 'Arnold Gatilao', license: 'CC BY 2.0' },
  { word: 'Kiwi Burger', file: 'Kiwiburger sitting on the top of the container.jpg', author: 'Alexeyevitch', license: 'CC BY-SA 4.0' },
  { word: 'Mānuka Honey Toast', file: 'Manuka honey in a bowl.jpg', author: 'Sage Ross', license: 'CC BY-SA 3.0' },
  { word: 'Kumara Soup', file: 'Butternut squash soup (5171665819).jpg', author: 'Karen and Brad Emerson', license: 'CC BY 2.0' },
  { word: 'L&P', file: 'L&P 600ml bottle 2023.jpg', author: 'Yvanyblog', license: 'CC BY-SA 4.0' },
  { word: 'Chorba', file: 'Chorba in Tunisia.jpg', author: 'Shoestring', license: 'CC BY-SA 4.0' },
  { word: 'Fricassee Tunisienne', file: 'Le fricassé.JPG', author: 'Yamen', license: 'CC BY-SA 3.0' },
  { word: 'Assida', file: 'Tunisian Assida 2018 2.jpg', author: 'MedaliKaouaja', license: 'CC BY-SA 4.0' },
  { word: 'Harissa', file: 'Harissa Sauce.JPG', author: 'Miansari66', license: 'CC0' },
  { word: 'Brik', file: 'Tunisian Briks.JPG', author: 'Souad Anane Lesina', license: 'CC BY-SA 3.0' },
  { word: 'Lablabi', file: 'Bol de Leblabi de Tunisie, 21 mars 2017.jpg', author: 'Habib M\'henni', license: 'CC BY-SA 4.0' },
  { word: 'Mechouia', file: 'Salade Mechouwya, Tunisie, juin 2021.jpg', author: 'Habib M\'henni', license: 'CC BY-SA 4.0' },
  { word: 'Couscous Tunisien', file: 'Couscous merguez, kedid, Tunisie 2021.jpg', author: 'Habib M\'henni', license: 'CC BY-SA 4.0' },
  { word: 'Ojja', file: 'Ojja merguez photo1 عجة مرقاز.jpg', author: 'Sami Mlouhi', license: 'CC BY-SA 4.0' },
  { word: 'Makroudh', file: 'Makrouds.JPG', author: 'Mourad Ben Abdallah', license: 'Public domain' },
  { word: 'Mint Tea', file: 'Tunisian Tea with pine nuts.jpg', author: 'sky#walker', license: 'CC BY-SA 2.0' },
  { word: 'Khorovats', file: 'Barbecue Armenian.jpg', author: 'Violettarmenia', license: 'CC BY-SA 3.0' },
  { word: 'Dolma', file: 'Armenian Dolma with grape leaves.jpg', author: 'Beko', license: 'CC BY-SA 4.0' },
  { word: 'Harissa', file: 'Armenian Harisa.JPG', author: 'Ketone16', license: 'CC BY-SA 4.0' },
  { word: 'Manti', file: 'Carousel Restaurant Hollywood July 2022 Manti.JPG', author: 'Benoît Prieur', license: 'CC0' },
  { word: 'Lahmajoun', file: 'Lahmajoun (armenian) - 2014 - 3.JPG', author: 'Benoît Prieur', license: 'CC0' },
  { word: 'Ghapama', file: 'Ghapama.jpg', author: 'AndyHM', license: 'CC BY-SA 4.0' },
  { word: 'Basturma', file: 'Basturma or Pastroma from Armenia 2.JPG', author: 'RosarioVanTulpe', license: 'Public domain' },
  { word: 'Armenian Brandy', file: 'Ararat brandy (cognac) bottles.jpg', author: 'Yerevantsi', license: 'CC BY-SA 4.0' },
  { word: 'Lavash', file: 'Lavash arménien.jpg', author: 'Combrian', license: 'CC0' },
  { word: 'Soujouk', file: 'Yerevan, Sujuk, Basturma, Armenian dried meat, Armenia.jpg', author: 'Vyacheslav Argenberg', license: 'CC BY 4.0' },
  { word: 'Dibi', file: 'Dibi accompagné de salades et frites.jpg', author: 'Kalsoum17', license: 'CC BY-SA 4.0' },
  { word: 'Thiou', file: 'Thiou, plat sénégalais.png', author: 'Ajocom', license: 'CC BY-SA 4.0' },
  { word: 'Thiéboudienne', file: 'Ceebu Jen, Senegalese dish.jpg', author: 'Alweaver2', license: 'CC BY-SA 4.0' },
  { word: 'Yassa Poulet', file: 'Poulet yassa 01.jpg', author: 'Arnaud 25', license: 'CC0' },
  { word: 'Mafé', file: 'Mafe.malien.jpg', author: 'Marshiayers', license: 'CC0' },
  { word: 'Fataya', file: 'Fataya.jpg', author: 'Cheikh cherif', license: 'CC BY-SA 4.0' },
  { word: 'Thiakry', file: 'Gambia Chakery 0001.jpg', author: 'Atamari', license: 'CC BY-SA 3.0' },
  { word: 'Café Touba', file: 'Café touba.jpg', author: 'Sahm.diop', license: 'CC BY-SA 4.0' },
  { word: 'Bissap', file: 'Bissap & Ginger Juice (7558541174).jpg', author: 'Jen Arrr', license: 'CC BY-SA 2.0' },
  { word: 'Curry Goat', file: 'Curry Goat and Rice.jpg', author: 'Leon Brocard from London, UK', license: 'CC BY 2.0' },
  { word: 'Bammy', file: 'Bammies.jpg', author: 'Jongleur100', license: 'Public domain' },
  { word: 'Jerk Chicken', file: 'Jerk chicken as served july 05.jpg', author: 'Caroline Ford (Secretlondon)', license: 'CC BY-SA 2.0 UK' },
  { word: 'Ackee and Saltfish', file: 'Ackee and Saltfish.jpg', author: 'gailf548 from New York State, USA', license: 'CC BY 2.0' },
  { word: 'Oxtail', file: 'Jamaican Oxtail and Butter Beans.jpg', author: 'Sumit Surai', license: 'CC BY-SA 4.0' },
  { word: 'Rice and Peas', file: 'Rice and Peas.jpg', author: 'Whispyhistory', license: 'CC BY-SA 4.0' },
  { word: 'Patty', file: 'Homemade Jamaican patties.jpg', author: 'Lilpisomojado', license: 'CC BY-SA 4.0' },
  { word: 'Escovitch Fish', file: 'Escovitch fish, fried plaintains, and vegetables on top of rice.jpg', author: 'K6ka', license: 'CC BY-SA 4.0' },
  { word: 'Rum Punch', file: 'Planters Punch 2.jpg', author: 'Achim Schleuning', license: 'CC BY-SA 3.0 de' },
  { word: 'Mustikkapiirakka', file: 'Finnish blueberry pie with ice cream.jpg', author: 'JIP', license: 'CC BY-SA 4.0' },
  { word: 'Kalakukko', file: 'Kalakukko (opened).jpg', author: 'Rst2000', license: 'CC BY-SA 3.0' },
  { word: 'Karelian Pasty', file: 'Karjalanpiirakka-20060227.jpg', author: 'Jarno Elonen', license: 'Public domain' },
  { word: 'Lohikeitto', file: 'Lohikeitto dish.jpg', author: 'Nonepse', license: 'CC BY-SA 4.0' },
  { word: 'Rye Bread', file: 'Ruisleipä-limppu reikäleipä reissumies hapankorppu-1.JPG', author: 'Hellahulla', license: 'CC BY-SA 3.0' },
  { word: 'Mämmi', file: 'Mämmi Kymppi.jpg', author: 'Martin Terber from Cologne, Germany', license: 'CC BY 2.0' },
  { word: 'Reindeer', file: 'Poronkäristys.jpg', author: 'Htm', license: 'Public domain' },
  { word: 'Salmiak', file: 'Salmiakki - Halva - composition.jpg', author: 'Shaddack', license: 'Public domain' },
  { word: 'Lonkero', file: 'Orange Long Drink.jpg', author: 'JIP', license: 'CC BY-SA 4.0' },
  { word: 'Skyr', file: 'Skyr.is með vanillu.jpg', author: 'Schnee', license: 'CC BY-SA 4.0' },
  { word: 'Hákarl', file: 'Hákarl2.jpg', author: 'Xfigpower', license: 'CC BY-SA 3.0' },
  { word: 'Lamb Soup', file: 'Kjötsúpa.JPG', author: 'Ypsilon from Finland', license: 'CC0' },
  { word: 'Plokkfiskur', file: 'Plokkfiskur 2.jpg', author: 'Jasnaah', license: 'CC BY-SA 4.0' },
  { word: 'Rúgbrauð', file: 'Rúgbrauð and Flatbrauð.jpg', author: 'The blanz', license: 'CC BY-SA 3.0' },
  { word: 'Kleinur', file: 'Kleina.jpg', author: 'Steinninn ♨', license: 'CC BY-SA 3.0' },
  { word: 'Brennivín', file: 'Brennevin 500ml bottle on the table with various icelandic foods in background.jpg', author: 'Alexander Grebenkov', license: 'CC BY 3.0' },
  { word: 'Hangikjöt', file: 'Hangikjöt.jpg', author: 'Martin Sønderlev Christensen', license: 'CC BY-SA 2.0' },
  { word: 'Pylsur', file: 'Hot dog from Bæjarins Beztu Pylsur.jpg', author: 'Jschildk', license: 'CC BY-SA 3.0' },
  { word: 'Koshari', file: 'Egyptian food Koshary.jpg', author: 'Dina Said', license: 'CC BY-SA 4.0' },
  { word: 'Ful Medames', file: 'Ful Medames.JPG', author: 'Miansari66', license: 'CC0' },
  { word: 'Molokhia', file: 'Molokheya hi res.JPG', author: 'Yosi I', license: 'CC BY 2.5' },
  { word: 'Hawawshi', file: 'Egyptian meatloaf.jpg', author: 'Mkevy', license: 'CC BY-SA 4.0' },
  { word: 'Feteer Meshaltet', file: 'Egyptian-food-16.jpg', author: 'Mohamed Ouda', license: 'CC BY-SA 4.0' },
  { word: 'Om Ali', file: 'Umm Ali.JPG', author: 'Miansari66', license: 'CC0' },
  { word: 'Basbousa', file: 'Basboosa.jpg', author: 'stu_spivack', license: 'CC BY-SA 2.0' },
  { word: 'Fattah', file: 'Egyptian Fattah.jpg', author: 'Oh127', license: 'CC BY-SA 4.0' },
  { word: 'Shawarma', file: 'Shawarma-sandwich-01.jpg', author: 'Vera Yu and David Li', license: 'CC BY 2.0' },
  { word: 'Kofta', file: 'Koftet-el-hati.jpg', author: 'Turnopoems', license: 'CC BY-SA 4.0' },
  { word: 'Mahshi', file: 'EgyptianMahshyStuffedAubergineTomatoWithRice PhotoByWaelNawara.jpg', author: 'Wael Nawara', license: 'CC BY-SA 4.0' },
  { word: 'Pelmeni', file: 'Pelmeni Russian.jpg', author: 'Eugene Kim', license: 'CC BY 2.0' },
  { word: 'Beef Stroganoff', file: 'Beef Stroganoff & Egg Noodles.jpg', author: 'Buck', license: 'CC BY 2.0' },
  { word: 'Blini', file: 'Singer Café - Blini with sour cream and red caviar IMG 3424.JPG', author: 'Deror avi', license: 'CC BY-SA 3.0' },
  { word: 'Olivier Salad', file: 'Салат Оливье 03.jpg', author: 'Pannet', license: 'CC BY-SA 4.0' },
  { word: 'Shchi', file: 'Schi.jpg', author: 'Шнапс', license: 'Public domain' },
  { word: 'Pirozhki', file: 'Piroshki.JPG', author: 'Evilmonkey0013', license: 'CC BY 3.0' },
  { word: 'Solyanka', file: 'Soljanka food 05.jpg', author: 'Pannet', license: 'CC BY 4.0' },
  { word: 'Okroshka', file: 'Окрошка Okroshka 05.jpg', author: 'Nikkolo', license: 'CC BY-SA 3.0' },
  { word: 'Medovik', file: 'Medovik.jpg', author: 'Edinburgh blog', license: 'CC BY 2.0' },
  { word: 'Syrniki', file: 'Syrniki6.jpg', author: 'Tatyana Morozyuk', license: 'CC BY-SA 3.0' },
  { word: 'Kvass', file: 'Mint bread kvas.jpg', author: 'Mr.Icon', license: 'CC BY-SA 3.0' },
  { word: 'Kasha', file: 'Гречневая каша.jpg', author: 'Laitr Keiows', license: 'CC BY-SA 3.0' },
  { word: 'Holodets', file: 'Aspic-with-eggs.jpg', author: 'Anthony Georgeff', license: 'CC BY 2.0' },
  { word: 'Salmon', file: 'Grilled plated salmon fillet.jpg', author: 'DanaTentis', license: 'CC0' },
  { word: 'King Crab', file: 'Alaskan King Crab Legs (3241225745).jpg', author: 'missbossy', license: 'CC BY 2.0' },
  { word: 'Halibut', file: 'Grilled halibut with smoked Chilliwack corn puree, faro verde risotto, campari tomato chutney, and bitter green salad.jpg', author: 'ppacificvancouver', license: 'CC BY 2.0' },
  { word: 'Akutaq', file: 'Akutaq.jpg', author: 'Matyáš Havel', license: 'CC BY-SA 3.0' },
  { word: 'Bannock', file: 'Bannock 3.JPG', author: 'Skorp', license: 'CC0' },
  { word: 'Fireweed Honey', file: 'Мёд иван-чая узколистного (honey of fireweed).jpg', author: 'Vladlen Terezhe', license: 'CC BY-SA 4.0' },
  { word: 'Reindeer Sausage', file: 'Buttermilk pancake and reindeer sausage (2526754309).jpg', author: 'WordRidden', license: 'CC BY 2.0' },
  { word: 'Muktuk', file: '2013-365-282 Mmmmm Muktuk (10184839444).jpg', author: 'cogdogblog', license: 'CC BY 2.0' },
  { word: 'String Hoppers', file: 'Idiyappam in plate 1.jpg', author: 'Ramesh NG', license: 'CC BY-SA 2.0' },
  { word: 'Rice and Curry', file: 'Sri Lankan Rice and Curry.jpg', author: 'Lankan Foodie', license: 'CC BY-SA 4.0' },
  { word: 'Hoppers', file: 'Sri Lanka-Egg hoppers.jpg', author: 'Ji-Elle', license: 'CC BY-SA 3.0' },
  { word: 'Kottu Roti', file: 'Chicken Kottu.jpg', author: 'Dan arndt', license: 'CC BY-SA 4.0' },
  { word: 'Lamprais', file: 'Lamprais (2).jpg', author: 'Dan arndt', license: 'CC BY-SA 4.0' },
  { word: 'Pol Sambol', file: 'Pol Sambol.jpg', author: 'Dan arndt', license: 'CC BY-SA 4.0' },
  { word: 'Ceylon Tea', file: 'Sri Lanka-Broken Orange Pekoe.jpg', author: 'Ji-Elle', license: 'CC BY-SA 3.0' },
  { word: 'Empanada de Pino', file: 'Empanada de pino.jpg', author: 'J B', license: 'CC BY 2.0' },
  { word: 'Cazuela', file: 'Cazuela de pollo chilena (2021).jpg', author: 'LuisCG11', license: 'CC BY-SA 4.0' },
  { word: 'Pastel de Choclo', file: 'Pastel de choclo.jpg', author: 'Paloma Baytelman', license: 'CC BY-SA 2.0' },
  { word: 'Completo', file: 'Completo italiano - Flickr - Bárb Santelices.jpg', author: 'Bárb Santelices', license: 'CC0' },
  { word: 'Curanto', file: 'Curanto al Hoyo Chiloé.JPG', author: 'Fabiola Cárcamo', license: 'CC BY-SA 3.0' },
  { word: 'Pisco Sour', file: 'Pisco sour 20100613b.JPG', author: 'Dtarazona', license: 'CC BY-SA 4.0' },
  { word: 'Sopaipillas', file: 'Sopaipillas con Chancho en Piedra.jpg', author: 'Mariel.loyola', license: 'CC BY-SA 4.0' },
  { word: 'Ajiaco', file: 'Ajiaco in Bogotá.jpg', author: 'Bernard Gagnon', license: 'CC BY-SA 4.0' },
  { word: 'Bandeja Paisa', file: 'Bandeja paisa 30062011.jpg', author: 'Dtarazona', license: 'CC BY-SA 3.0' },
  { word: 'Arepa', file: 'Arepas 1.jpg', author: 'Debray05', license: 'CC0' },
  { word: 'Sancocho', file: 'Sancocho de gallina yopal.jpg', author: 'Daniestrella123', license: 'CC BY-SA 4.0' },
  { word: 'Aguardiente', file: 'Aguardiente Antioqueño botellas.jpg', author: 'El Mono Español', license: 'CC BY-SA 4.0' },
  { word: 'Buñuelo', file: 'Buñuelos Colombianos (24221303805).jpg', author: 'John Alexis Guerra Gómez', license: 'CC BY-SA 2.0' },
  { word: 'Changua', file: 'Changua Soup.jpg', author: 'Jorvato', license: 'CC BY-SA 4.0' },
  { word: 'Lechona', file: 'Lechona.JPG', author: 'Tamorlan', license: 'CC BY-SA 3.0' },
  { word: 'Pierogi', file: 'Pierogi z masłem - 2023.03.31.jpg', author: 'Aw58', license: 'CC BY-SA 4.0' },
  { word: 'Bigos', file: 'Bigos, March 2023 (1).jpg', author: 'MichalPL', license: 'CC BY-SA 4.0' },
  { word: 'Żurek', file: '02026 Gut-Healing Sour Rye Soup with a Collagen Broth.jpg', author: 'Marsilar', license: 'CC BY-SA 4.0' },
  { word: 'Barszcz', file: 'Barszcz czerwony - 2.jpg', author: 'Игорь Хмиловский', license: 'CC0' },
  { word: 'Kotlet Schabowy', file: 'Kotlet Schabowy.jpg', author: 'Dmitry Dzema', license: 'CC BY-SA 4.0' },
  { word: 'Gołąbki', file: 'Golabki jacek.jpg', author: 'Jacaldinho1', license: 'Public domain' },
  { word: 'Kiełbasa', file: 'Polish sausage, Poznań 2014.jpg', author: 'Kapsuglan', license: 'CC BY-SA 4.0' },
  { word: 'Oscypek', file: 'Oscypek z grilla.jpg', author: 'Аимаина хикари', license: 'CC0' },
  { word: 'Makowiec', file: '020211119 160347 silesian poppy seed cake.jpg', author: 'Silar', license: 'CC BY-SA 4.0' },
  { word: 'Sernik', file: '2023 Sernik polski (1).jpg', author: 'Jacek Halicki', license: 'CC BY-SA 4.0' },
  { word: 'Rosół', file: '20221127 rosół 04.jpg', author: 'Abraham', license: 'CC BY-SA 4.0' },
  { word: 'Placki Ziemniaczane', file: 'Potato pancakes.jpg', author: 'Daniel Spils', license: 'CC BY-SA 2.0' },
  { word: 'Poke', file: 'Poke bowl 001.jpg', author: 'Arnaud 25', license: 'CC0' },
  { word: 'Plate Lunch', file: 'Wardsplatelunch.jpg', author: 'Christian Razukas', license: 'CC BY-SA 2.0' },
  { word: 'Kalua Pig', file: 'Homemade Kalua Pig.jpg', author: 'Pacamah', license: 'CC BY 4.0' },
  { word: 'Loco Moco', file: 'Loco moco 001.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Spam Musubi', file: 'Spam musubi 001.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Shave Ice', file: 'Hilo Ice Shave.JPG', author: 'AlaskaDave', license: 'CC BY-SA 3.0' },
  { word: 'Poi', file: 'Bowl of poi.jpg', author: 'Bshams', license: 'Public domain' },
  { word: 'Lomi Salmon', file: 'Lomi lomi salmon.jpg', author: 'stu_spivack', license: 'CC BY-SA 2.0' },
  { word: 'Haupia', file: 'Haupia.jpg', author: 'Arnold Gatilao', license: 'CC BY 2.0' },
  { word: 'Poutine', file: 'Poutine from Windsor, ON.jpg', author: 'Antonydstevens', license: 'CC0' },
  { word: 'Butter Tarts', file: 'Butter tarts on cutting board(8293490785).jpg', author: 'Rob Campbell', license: 'CC BY 2.0' },
  { word: 'Nanaimo Bars', file: 'Nanaimo Bars, stacked.jpg', author: 'Craig Dugas', license: 'CC BY-SA 2.0' },
  { word: 'Tourtière', file: 'Warm Tourtiere.jpg', author: 'Craig Dugas', license: 'CC BY-SA 2.0' },
  { word: 'BeaverTails', file: 'Three BeaverTails pastry flavours.jpg', author: 'BeaverTails', license: 'CC BY-SA 4.0' },
  { word: 'Montreal Smoked Meat', file: 'Smoked meat sandwich.jpg', author: 'James Teterenko', license: 'CC BY-SA 3.0' },
  { word: 'Bannock', file: 'Bannock 3.JPG', author: 'Skorp', license: 'CC0' },
  { word: 'Peameal Bacon', file: 'Flickr bokchoi-snowpea 4266923676--Roast peameal bacon.jpg', author: 'snowpea and bokchoi', license: 'CC BY 2.0' },
  { word: 'Saskatoon Berry Pie', file: 'Saskatoon berry pie served at The Berry Barn outside Saskatoon.jpg', author: 'Jonathan Schilling', license: 'CC BY-SA 4.0' },
  { word: 'Fish and Brewis', file: 'FishAndBrewisWithScrunchions.jpg', author: 'Keith Pomakis', license: 'CC BY-SA 3.0' },
  { word: 'Wild Salmon', file: 'Cedar Plank Salmon with Balsamic Ginger Marinade (28836223862).jpg', author: 'Sharon Chen', license: 'CC BY 2.0' },
  { word: 'Maple Syrup Taffy', file: 'Maple toffee.JPG', author: 'SimonP', license: 'CC BY-SA 3.0' },
  { word: 'Jollof Rice', file: 'Jollof Rice with Stew.jpg', author: 'Noahalorwu', license: 'CC BY-SA 4.0' },
  { word: 'Egusi Soup', file: 'Egusi soup in a plate.jpg', author: 'Tesleemah', license: 'CC BY-SA 4.0' },
  { word: 'Pounded Yam', file: 'Pounded yam (Iyàn).jpg', author: 'Taoheedah', license: 'CC BY-SA 4.0' },
  { word: 'Suya', file: 'SuyavarietiesTX.JPG', author: 'WhisperToMe', license: 'CC0' },
  { word: 'Akara', file: 'Beans Ball-Akara.jpg', author: 'AkinkuotuFunmi', license: 'CC BY-SA 4.0' },
  { word: 'Moi Moi', file: 'Moin-Moin-good.jpg', author: 'ProVeg International', license: 'CC0' },
  { word: 'Pepper Soup', file: 'Fish pepper soup.jpg', author: 'Salma kyari', license: 'CC BY-SA 4.0' },
  { word: 'Ogbono Soup', file: 'Ogbono soup.jpg', author: 'Xtacywura', license: 'CC BY-SA 4.0' },
  { word: 'Puff Puff', file: 'Nigerian-puff-puff-recipe cropped.jpg', author: 'Afrolems', license: 'CC BY-SA 4.0' },
  { word: 'Eba', file: 'Nigerian Garri (Eba) and Egusi Soup.jpg', author: 'NiferO', license: 'CC BY-SA 4.0' },
  { word: 'Banga Soup', file: 'Eba served with Fresh fish banga soup in a clay pot.jpg', author: 'Justdifference', license: 'CC BY-SA 4.0' },
  { word: 'Boerewors', file: 'Boerewors braai.jpg', author: 'Ossewa', license: 'CC BY-SA 4.0' },
  { word: 'Biltong', file: 'Sliced Biltong.jpg', author: 'Delia du Plessis', license: 'CC BY-SA 3.0' },
  { word: 'Bobotie', file: 'Bobotie South Africa.jpg', author: 'Olivier Lemoine', license: 'CC BY-SA 4.0' },
  { word: 'Bunny Chow', file: 'Durban\'s Famous Mutton Bunny Chow.jpg', author: 'Djreddy1985', license: 'CC BY-SA 4.0' },
  { word: 'Potjiekos', file: 'The Potjie is ready.JPG', author: 'Chrstphr.jones', license: 'CC BY-SA 4.0' },
  { word: 'Melktert', file: 'Melktert.jpg', author: 'DimiTalen', license: 'CC BY-SA 3.0' },
  { word: 'Koeksister', file: 'Koeksisters.JPG', author: 'DO\'Neil', license: 'CC BY-SA 3.0' },
  { word: 'Vetkoek', file: 'Vetkoek.jpg', author: 'Stasia007', license: 'CC BY-SA 4.0' },
  { word: 'Chakalaka', file: 'Chakalaka.jpg', author: 'philipp', license: 'CC BY 2.0' },
  { word: 'Pap', file: 'Pap with sheba, wors and mutton chop.jpg', author: 'Pietersielie', license: 'CC BY-SA 4.0' },
  { word: 'Braai', file: 'South African Braai fire used.jpg', author: 'Thulani Godfrey Timba', license: 'CC BY-SA 4.0' },
  { word: 'Tostones', file: 'Tostones.JPG', author: 'AMartiniouk', license: 'CC BY-SA 3.0' },
  { word: 'Flan Cubano', file: 'Homemade Flan.jpg', author: 'Cary Bass', license: 'CC BY-SA 2.5' },
  { word: 'Ropa Vieja', file: 'RealRopaVieja.jpg', author: 'TGrey89', license: 'CC0' },
  { word: 'Moros y Cristianos', file: 'Moros y Cristianos, Cuba (9419810743).jpg', author: 'Rinaldo Wurglitsch', license: 'CC BY 2.0' },
  { word: 'Cuban Sandwich', file: 'Tampa Cuban sandwich.jpg', author: 'Zeng8r', license: 'CC BY-SA 4.0' },
  { word: 'Lechón Asado', file: 'Pernil.1.jpg', author: 'Ekem', license: 'CC BY-SA 4.0' },
  { word: 'Mojito', file: 'Drinks - Virgin Mojito, Orange Juice.jpg', author: 'Aditijuneja2023', license: 'CC BY-SA 4.0' },
  { word: 'Cuban Coffee', file: 'Cuban coffee- 2013-04-05 14-30.jpg', author: 'Colinkb7', license: 'CC BY-SA 3.0' },
  { word: 'Khachapuri', file: 'Old Tbilisi, Georgian khachapuri, Georgia.jpg', author: 'Vyacheslav Argenberg', license: 'CC BY 4.0' },
  { word: 'Khinkali', file: 'Khinkali, Restaurant Aragvi.jpg', author: 'Sandra C', license: 'CC BY-SA 2.0' },
  { word: 'Mtsvadi', file: 'Grilled shashlik.jpg', author: 'Alandislands', license: 'CC BY-SA 4.0' },
  { word: 'Chakhokhbili', file: 'Чахохбили.JPG', author: 'Victor Vizu', license: 'CC BY-SA 3.0' },
  { word: 'Badrijani Nigvzit', file: 'Badrijani (cropped).jpg', author: 'salvagekat', license: 'CC BY-SA 2.0' },
  { word: 'Satsivi', file: 'Satsivi (2).jpg', author: 'Lesya Dolyk', license: 'CC BY-SA 2.0' },
  { word: 'Churchkhela', file: 'Churchkhela, Tbilisi (2023).jpg', author: 'Lessormore', license: 'CC BY 4.0' },
  { word: 'Lobiani', file: 'Lobiani, Restaurant Aragvi.jpg', author: 'Sandra C', license: 'CC BY-SA 2.0' },
  { word: 'Tkemali', file: 'Red and brown tkemali.jpg', author: 'Jelger Groeneveld', license: 'CC BY 2.0' },
  { word: 'Adjarian Khachapuri', file: 'Khachapuri Adjaruli with egg and butter 2016.jpg', author: 'Eugene Krasnaok', license: 'CC BY 4.0' },
  { word: 'Chakapuli', file: 'Chakapuli.jpg', author: 'Georgia About', license: 'CC BY 3.0' },
  { word: 'Rechta', file: '20161201 211344 rechta.jpg', author: 'ABBASHouda', license: 'CC BY-SA 4.0' },
  { word: 'Berkoukes', file: 'Berkoukes.jpg', author: 'Indif', license: 'CC BY-SA 3.0' },
  { word: 'Tagine Zitoune', file: 'Chicken Tajine 1.jpg', author: 'Emna Mizouni', license: 'CC BY-SA 4.0' },
  { word: 'Bourek', file: 'Bourek laadjine.jpg', author: 'Waran18', license: 'CC BY-SA 4.0' },
  { word: 'Couscous Algérien', file: 'Liat Portal for Foodie Disorder - Algerian Couscous with Vegetables.jpg', author: 'HaJunkiyada', license: 'CC BY-SA 4.0' },
  { word: 'Chakhchoukha', file: 'Lyon 7e - Restaurant Air du Pays - Chakhchoukha Biskra Poulet.jpg', author: 'Sebleouf', license: 'CC BY-SA 4.0' },
  { word: 'Merguez', file: 'Merguez grilled.jpg', author: 'Thogru', license: 'CC BY-SA 3.0' },
  { word: 'Makrout', file: 'Makroudh - مقروض - Makroud photo2.jpg', author: 'Sami Mlouhi', license: 'CC BY-SA 4.0' },
  { word: 'Mint Tea', file: 'Tunisian Tea with pine nuts.jpg', author: 'sky#walker', license: 'CC BY-SA 2.0' },
  { word: 'Wonton Mee', file: 'Singapore Wonton noodles (cropped).jpg', author: 'Banej', license: 'CC BY-SA 3.0' },
  { word: 'Ice Kachang', file: 'Ais kacang.jpg', author: 'Andrew Bogott', license: 'CC BY-SA 3.0' },
  { word: 'Chilli Crab', file: 'Chilli crab-01.jpg', author: 'Dekcuf', license: 'CC BY-SA 2.0' },
  { word: 'Chicken Rice', file: 'Hainanese chicken rice in Singapore.jpg', author: 'Pauloleong2002', license: 'CC BY-SA 4.0' },
  { word: 'Laksa', file: 'Katong laksa.jpg', author: 'ProjectManhattan.', license: 'CC0' },
  { word: 'Char Kway Teow', file: 'Char kway teow.jpg', author: 'Elizetang', license: 'Public domain' },
  { word: 'Kaya Toast', file: 'Kaya toast on a plate.jpg', author: 'Pinklily08', license: 'CC BY-SA 4.0' },
  { word: 'Sauce Arachide', file: 'Mafe.malien.jpg', author: 'Marshiayers', license: 'CC0' },
  { word: 'Foutou', file: 'Du foutou à la banane plantain 05.jpg', author: 'Mognissan', license: 'CC BY-SA 4.0' },
  { word: 'Attiéké', file: 'Attieke.JPG', author: 'Serein', license: 'CC BY-SA 3.0' },
  { word: 'Garba', file: 'Traditional Garba.jpg', author: 'Jburgos', license: 'CC BY-SA 4.0' },
  { word: 'Aloco', file: 'Fried plantain alloco.jpg', author: 'Saudarh2', license: 'CC0' },
  { word: 'Kedjenou', file: 'Kedjenou.JPG', author: 'Serein', license: 'CC BY-SA 3.0' },
  { word: 'Bangui', file: 'Toddy Bottle and Glass.jpg', author: 'Dhruvarahjs', license: 'CC BY 3.0' },
  { word: 'Kuy Teav', file: 'Kuyteav.jpg', author: 'Goomba King', license: 'CC BY-SA 4.0' },
  { word: 'Fish Amok', file: 'Fish Amok with Rice.jpg', author: 'sharonang', license: 'CC0' },
  { word: 'Lok Lak', file: 'Beef Lok Lak at Krong Kracheh.jpg', author: 'Satdeep Gill', license: 'CC BY-SA 4.0' },
  { word: 'Nom Banh Chok', file: 'Num Banh Chok Somlar Kari.jpg', author: 'Turaids', license: 'CC BY-SA 4.0' },
  { word: 'Kampot Pepper', file: 'Kampot peppercorns in a mango wooden bowl.jpg', author: 'Turaids', license: 'CC BY-SA 4.0' },
  { word: 'Lu Rou Fan', file: 'Lurou fan(Taiwanese cuisine).jpg', author: 'Jzest', license: 'CC BY-SA 2.5' },
  { word: 'Oyster Omelette', file: 'Oyster omelette, Taipei, Taiwan. (8447333000) (2).jpg', author: 'istolethetv', license: 'CC BY 2.0' },
  { word: 'Beef Noodle Soup', file: 'Taiwanese Beef Noodle Soup.jpg', author: 'Jjj84206', license: 'CC BY-SA 4.0' },
  { word: 'Scallion Pancake', file: 'Plate of scallion pancakes.jpg', author: 'Infrogmation', license: 'CC BY 2.0' },
  { word: 'Oyster Vermicelli', file: 'Oyster Vermicelli.jpg', author: 'Jjj84206', license: 'CC BY-SA 4.0' },
  { word: 'Bubble Tea', file: 'Pearl Milk Tea in Chun Shui Tang.jpg', author: 'Battlesnake1', license: 'CC0' },
  { word: 'Pineapple Cake', file: 'Taiwanese Pineapple Cake 001.jpg', author: 'Ocdp', license: 'CC0' },
  { word: 'Seekh Kebab', file: 'Seekh Kabab 1.JPG', author: 'Miansari66', license: 'CC0' },
  { word: 'Nihari', file: 'Beef Nihari.JPG', author: 'Miansari66', license: 'CC0' },
  { word: 'Biryani', file: 'Sindhi Biryani.JPG', author: 'Miansari66', license: 'Public domain' },
  { word: 'Chapli Kebab', file: 'Chapli Kebab.jpg', author: 'Murcotipton', license: 'CC BY-SA 3.0' },
  { word: 'Haleem', file: 'Pakistani Haleem served with garnish.jpg', author: 'Halt123halt', license: 'CC BY-SA 3.0' },
  { word: 'Karahi', file: 'Karahi Chicken.jpg', author: 'Pankajrawat3', license: 'CC BY-SA 4.0' },
  { word: 'Fiambre', file: 'Fiambre - 11042021 (cropped).jpg', author: 'Gobierno de Guatemala', license: 'CC0' },
  { word: 'Hilachas', file: 'Hilacha.jpg', author: 'Joshua Heller', license: 'CC BY 2.0' },
  { word: 'Atol de Elote', file: '100320 atol de elote guatemala.JPG', author: 'Luisfi', license: 'CC BY-SA 3.0' },
  { word: 'Pepián', file: 'Catalinos Restaurant New Orleans October 2018 Pepian.jpg', author: 'Infrogmation', license: 'CC BY-SA 4.0' },
  { word: 'Jocon', file: 'Jocon.jpg', author: 'Andreamichell11', license: 'CC BY-SA 4.0' },
  { word: 'Kak\'ik', file: '2010.05.13.141849 Kac-iq Fonda Calle Real Antigua Guatemala.jpg', author: 'Hermann Luyken', license: 'CC BY-SA 3.0' },
  { word: 'Chuchitos', file: 'Chuchitos (639489829).jpg', author: 'Simon Law', license: 'CC BY-SA 2.0' },
  { word: 'Horchata', file: 'Horchata, my drink of choice in Mexico - Merida Yucatan 21 March 2021.jpg', author: 'Sharon Hahn Darlin', license: 'CC BY 2.0' },
];
