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
  'rfissa moroccan chicken shredded bread': 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Rfissa_marocaine.jpg', // Rfissa
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
];
