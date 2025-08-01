import React from 'react';
import { useNavigate } from 'react-router-dom';
import LazyImage from './LazyImage';
import { Search, X } from 'lucide-react';

interface Path {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const PathsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [filteredCities, setFilteredCities] = React.useState<Array<{name: string, path: string, caminho: string}>>([]);
  const navigate = useNavigate();

  // Lista completa de cidades dos 4 caminhos
  const allCities = [
    // Caminho dos Diamantes
    { name: 'Acaiaca', path: '/caminhos/diamantes/acaiaca', caminho: 'Diamantes' },
    { name: 'Alvinópolis', path: '/caminhos/diamantes/alvinopolis', caminho: 'Diamantes' },
    { name: 'Alvorada de Minas', path: '/caminhos/diamantes/alvorada-de-minas', caminho: 'Diamantes' },
    { name: 'Antônio Pereira', path: '/caminhos/diamantes/antonio-pereira', caminho: 'Diamantes' },
    { name: 'Barão de Cocais', path: '/caminhos/diamantes/barao-de-cocais', caminho: 'Diamantes' },
    { name: 'Barra Longa', path: '/caminhos/diamantes/barra-longa', caminho: 'Diamantes' },
    { name: 'Bela Vista de Minas', path: '/caminhos/diamantes/bela-vista-de-minas', caminho: 'Diamantes' },
    { name: 'Bento Rodrigues', path: '/caminhos/diamantes/bento-rodrigues', caminho: 'Diamantes' },
    { name: 'Bocaiúva', path: '/caminhos/diamantes/bocaiuva', caminho: 'Diamantes' },
    { name: 'Bom Jesus do Amparo', path: '/caminhos/diamantes/bom-jesus-do-amparo', caminho: 'Diamantes' },
    { name: 'Botumirim', path: '/caminhos/diamantes/botumirim', caminho: 'Diamantes' },
    { name: 'Brumal', path: '/caminhos/diamantes/brumal', caminho: 'Diamantes' },
    { name: 'Camargos', path: '/caminhos/diamantes/camargos', caminho: 'Diamantes' },
    { name: 'Cantagalo', path: '/caminhos/diamantes/cantagalo', caminho: 'Diamantes' },
    { name: 'Capitão Enéas', path: '/caminhos/diamantes/capitao-eneas', caminho: 'Diamantes' },
    { name: 'Carmésia', path: '/caminhos/diamantes/carmesia', caminho: 'Diamantes' },
    { name: 'Carmópolis de Minas', path: '/caminhos/diamantes/carmopolis-de-minas', caminho: 'Diamantes' },
    { name: 'Catas Altas', path: '/caminhos/diamantes/catas-altas', caminho: 'Diamantes' },
    { name: 'Cocais', path: '/caminhos/diamantes/cocais', caminho: 'Diamantes' },
    { name: 'Coluna', path: '/caminhos/diamantes/coluna', caminho: 'Diamantes' },
    { name: 'Conceição do Mato Dentro', path: '/cidade/conceicao-do-mato-dentro', caminho: 'Diamantes' },
    { name: 'Congonhas do Norte', path: '/caminhos/diamantes/congonhas-do-norte', caminho: 'Diamantes' },
    { name: 'Córregos', path: '/caminhos/diamantes/corregos', caminho: 'Diamantes' },
    { name: 'Couto de Magalhães de Minas', path: '/caminhos/diamantes/couto-de-magalhaes-de-minas', caminho: 'Diamantes' },
    { name: 'Cristália', path: '/caminhos/diamantes/cristalia', caminho: 'Diamantes' },
    { name: 'Datas', path: '/caminhos/diamantes/datas', caminho: 'Diamantes' },
    { name: 'Diamantina', path: '/caminhos/diamantes/diamantina', caminho: 'Diamantes' },
    { name: 'Dom Joaquim', path: '/caminhos/diamantes/dom-joaquim', caminho: 'Diamantes' },
    { name: 'Dores de Guanhães', path: '/caminhos/diamantes/dores-de-guanhaes', caminho: 'Diamantes' },
    { name: 'Felício dos Santos', path: '/caminhos/diamantes/felicio-dos-santos', caminho: 'Diamantes' },
    { name: 'Ferros', path: '/caminhos/diamantes/ferros', caminho: 'Diamantes' },
    { name: 'Francisco Sá', path: '/caminhos/diamantes/francisco-sa', caminho: 'Diamantes' },
    { name: 'Frei Lagonegro', path: '/caminhos/diamantes/frei-lagonegro', caminho: 'Diamantes' },
    { name: 'Gouveia', path: '/caminhos/diamantes/gouveia', caminho: 'Diamantes' },
    { name: 'Grão Mogol', path: '/caminhos/diamantes/grao-mogol', caminho: 'Diamantes' },
    { name: 'Guanhães', path: '/caminhos/diamantes/guanhaes', caminho: 'Diamantes' },
    { name: 'Ipoema', path: '/caminhos/diamantes/ipoema', caminho: 'Diamantes' },
    { name: 'Itacambira', path: '/caminhos/diamantes/itacambira', caminho: 'Diamantes' },
    { name: 'Itambé do Mato Dentro', path: '/caminhos/diamantes/itambe-do-mato-dentro', caminho: 'Diamantes' },
    { name: 'Itapanhoacanga', path: '/caminhos/diamantes/itapanhoacanga', caminho: 'Diamantes' },
    { name: 'Mariana', path: '/caminhos/diamantes/mariana', caminho: 'Diamantes' },
    { name: 'Materlândia', path: '/caminhos/diamantes/materlandia', caminho: 'Diamantes' },
    { name: 'Matias Cardoso', path: '/caminhos/diamantes/matias-cardoso', caminho: 'Diamantes' },
    { name: 'Milho Verde', path: '/caminhos/diamantes/milho-verde', caminho: 'Diamantes' },
    { name: 'Montes Claros', path: '/caminhos/diamantes/montes-claros', caminho: 'Diamantes' },
    { name: 'Morro do Pilar', path: '/caminhos/diamantes/morro-do-pilar', caminho: 'Diamantes' },
    { name: 'Olhos-d\'Água', path: '/caminhos/diamantes/olhos-dagua', caminho: 'Diamantes' },
    { name: 'Ouro Preto', path: '/caminhos/diamantes/ouro-preto', caminho: 'Diamantes' },
    { name: 'Passagem de Mariana', path: '/caminhos/diamantes/passagem-de-mariana', caminho: 'Diamantes' },
    { name: 'Paulistas', path: '/caminhos/diamantes/paulistas', caminho: 'Diamantes' },
    { name: 'Peçanha', path: '/caminhos/diamantes/pecanha', caminho: 'Diamantes' },
    { name: 'Presidente Kubitschek', path: '/caminhos/diamantes/presidente-kubitschek', caminho: 'Diamantes' },
    { name: 'Rio do Peixe', path: '/caminhos/diamantes/rio-do-peixe', caminho: 'Diamantes' },
    { name: 'Rio Vermelho', path: '/caminhos/diamantes/rio-vermelho', caminho: 'Diamantes' },
    { name: 'Sabinópolis', path: '/caminhos/diamantes/sabinopolis', caminho: 'Diamantes' },
    { name: 'Santa Bárbara', path: '/caminhos/diamantes/santa-barbara', caminho: 'Diamantes' },
    { name: 'Santa Rita Durão', path: '/caminhos/diamantes/santa-rita-durao', caminho: 'Diamantes' },
    { name: 'Santo Antônio do Norte', path: '/caminhos/diamantes/santo-antonio-do-norte', caminho: 'Diamantes' },
    { name: 'São Domingos do Prata', path: '/caminhos/diamantes/sao-domingos-do-prata', caminho: 'Diamantes' },
    { name: 'São Gonçalo do Rio das Pedras', path: '/caminhos/diamantes/sao-goncalo-do-rio-das-pedras', caminho: 'Diamantes' },
    { name: 'São José do Goiabal', path: '/caminhos/diamantes/sao-jose-do-goiabal', caminho: 'Diamantes' },
    { name: 'São Pedro do Suaçuí', path: '/caminhos/diamantes/sao-pedro-do-suacui', caminho: 'Diamantes' },
    { name: 'São Sebastião do Rio Preto', path: '/caminhos/diamantes/sao-sebastiao-do-rio-preto', caminho: 'Diamantes' },
    { name: 'Sem-Peixe', path: '/caminhos/diamantes/sem-peixe', caminho: 'Diamantes' },
    { name: 'Senhora do Carmo', path: '/caminhos/diamantes/senhora-do-carmo', caminho: 'Diamantes' },
    { name: 'Senhora do Porto', path: '/caminhos/diamantes/senhora-do-porto', caminho: 'Diamantes' },
    { name: 'Serro', path: '/caminhos/diamantes/serro', caminho: 'Diamantes' },
    { name: 'Tapera', path: '/caminhos/diamantes/tapera', caminho: 'Diamantes' },
    { name: 'Virginópolis', path: '/caminhos/diamantes/virginopolis', caminho: 'Diamantes' },

    // Caminho Novo
    { name: 'Alfredo Vasconcelos', path: '/caminhos/novo/alfredo-vasconcelos', caminho: 'Novo' },
    { name: 'Alto Rio Doce', path: '/caminhos/novo/alto-rio-doce', caminho: 'Novo' },
    { name: 'Antônio Carlos', path: '/caminhos/novo/antonio-carlos', caminho: 'Novo' },
    { name: 'Areal', path: '/caminhos/novo/areal', caminho: 'Novo' },
    { name: 'Barbacena', path: '/caminhos/novo/barbacena', caminho: 'Novo' },
    { name: 'Belmiro Braga', path: '/caminhos/novo/belmiro-braga', caminho: 'Novo' },
    { name: 'Bias Fortes', path: '/caminhos/novo/bias-fortes', caminho: 'Novo' },
    { name: 'Capela Nova', path: '/caminhos/novo/capela-nova', caminho: 'Novo' },
    { name: 'Caranaíba', path: '/caminhos/novo/caranaiba', caminho: 'Novo' },
    { name: 'Carandaí', path: '/caminhos/novo/carandai', caminho: 'Novo' },
    { name: 'Catas Altas da Noruega', path: '/caminhos/novo/catas-altas-da-noruega', caminho: 'Novo' },
    { name: 'Chácara', path: '/caminhos/novo/chacara', caminho: 'Novo' },
    { name: 'Chapada', path: '/caminhos/novo/chapada', caminho: 'Novo' },
    { name: 'Chiador', path: '/caminhos/novo/chiador', caminho: 'Novo' },
    { name: 'Cipotânea', path: '/caminhos/novo/cipotanea', caminho: 'Novo' },
    { name: 'Comendador Levy Gasparian', path: '/caminhos/novo/comendador-levy-gasparian', caminho: 'Novo' },
    { name: 'Conceição de Ibitipoca', path: '/caminhos/novo/conceicao-de-ibitipoca', caminho: 'Novo' },
    { name: 'Conselheiro Lafaiete', path: '/caminhos/novo/conselheiro-lafaiete', caminho: 'Novo' },
    { name: 'Coronel Pacheco', path: '/caminhos/novo/coronel-pacheco', caminho: 'Novo' },
    { name: 'Cristiano Otoni', path: '/caminhos/novo/cristiano-otoni', caminho: 'Novo' },
    { name: 'Desterro do Melo', path: '/caminhos/novo/desterro-do-melo', caminho: 'Novo' },
    { name: 'Diogo de Vasconcelos', path: '/caminhos/novo/diogo-de-vasconcelos', caminho: 'Novo' },
    { name: 'Ewbank da Câmara', path: '/caminhos/novo/ewbank-da-camara', caminho: 'Novo' },
    { name: 'Ibertioga', path: '/caminhos/novo/ibertioga', caminho: 'Novo' },
    { name: 'Inconfidência', path: '/caminhos/novo/inconfidencia', caminho: 'Novo' },
    { name: 'Itaipava', path: '/caminhos/novo/itaipava', caminho: 'Novo' },
    { name: 'Itatiaia', path: '/caminhos/novo/itatiaia', caminho: 'Novo' },
    { name: 'Itaverava', path: '/caminhos/novo/itaverava', caminho: 'Novo' },
    { name: 'Juiz de Fora', path: '/caminhos/novo/juiz-de-fora', caminho: 'Novo' },
    { name: 'Lamim', path: '/caminhos/novo/lamim', caminho: 'Novo' },
    { name: 'Lavras Novas', path: '/caminhos/novo/lavras-novas', caminho: 'Novo' },
    { name: 'Lima Duarte', path: '/caminhos/novo/lima-duarte', caminho: 'Novo' },
    { name: 'Magé', path: '/caminhos/novo/mage', caminho: 'Novo' },
    { name: 'Matias Barbosa', path: '/caminhos/novo/matias-barbosa', caminho: 'Novo' },
    { name: 'Mercês', path: '/caminhos/novo/merces', caminho: 'Novo' },
    { name: 'Monte Serrat', path: '/caminhos/novo/monte-serrat', caminho: 'Novo' },
    { name: 'Olaria', path: '/caminhos/novo/olaria', caminho: 'Novo' },
    { name: 'Oliveira Fortes', path: '/caminhos/novo/oliveira-fortes', caminho: 'Novo' },
    { name: 'Ouro Branco', path: '/caminhos/novo/ouro-branco', caminho: 'Novo' },
    { name: 'Paiva', path: '/caminhos/novo/paiva', caminho: 'Novo' },
    { name: 'Paraíba do Sul', path: '/caminhos/novo/paraiba-do-sul', caminho: 'Novo' },
    { name: 'Pedro do Rio', path: '/caminhos/novo/pedro-do-rio', caminho: 'Novo' },
    { name: 'Pedro Teixeira', path: '/caminhos/novo/pedro-teixeira', caminho: 'Novo' },
    { name: 'Pequeri', path: '/caminhos/novo/pequeri', caminho: 'Novo' },
    { name: 'Petrópolis', path: '/caminhos/novo/petropolis', caminho: 'Novo' },
    { name: 'Piau', path: '/caminhos/novo/piau', caminho: 'Novo' },
    { name: 'Piranga', path: '/caminhos/novo/piranga', caminho: 'Novo' },
    { name: 'Porto Estrela', path: '/caminhos/novo/porto-estrela', caminho: 'Novo' },
    { name: 'Presidente Bernardes', path: '/caminhos/novo/presidente-bernardes', caminho: 'Novo' },
    { name: 'Queima Sangue', path: '/caminhos/novo/queima-sangue', caminho: 'Novo' },
    { name: 'Queluzito', path: '/caminhos/novo/queluzito', caminho: 'Novo' },
    { name: 'Ressaquinha', path: '/caminhos/novo/ressaquinha', caminho: 'Novo' },
    { name: 'Rio de Janeiro', path: '/caminhos/novo/rio-de-janeiro', caminho: 'Novo' },
    { name: 'Rio Espera', path: '/caminhos/novo/rio-espera', caminho: 'Novo' },
    { name: 'Rio Pomba', path: '/caminhos/novo/rio-pomba', caminho: 'Novo' },
    { name: 'Santa Bárbara do Tugúrio', path: '/caminhos/novo/santa-barbara-do-tugurio', caminho: 'Novo' },
    { name: 'Santa Rita de Ibitipoca', path: '/caminhos/novo/santa-rita-de-ibitipoca', caminho: 'Novo' },
    { name: 'Santana do Deserto', path: '/caminhos/novo/santana-do-deserto', caminho: 'Novo' },
    { name: 'Santana dos Montes', path: '/caminhos/novo/santana-dos-montes', caminho: 'Novo' },
    { name: 'Santos Dumont', path: '/caminhos/novo/santos-dumont', caminho: 'Novo' },
    { name: 'Secretário', path: '/caminhos/novo/secretario', caminho: 'Novo' },
    { name: 'Senhora de Oliveira', path: '/caminhos/novo/senhora-de-oliveira', caminho: 'Novo' },
    { name: 'Senhora dos Remédios', path: '/caminhos/novo/senhora-dos-remedios', caminho: 'Novo' },
    { name: 'Simão Pereira', path: '/caminhos/novo/simao-pereira', caminho: 'Novo' },
    { name: 'Três Rios', path: '/caminhos/novo/tres-rios', caminho: 'Novo' },

    // Caminho Velho
    { name: 'Aiuruoca', path: '/caminhos/velho/aiuruoca', caminho: 'Velho' },
    { name: 'Alagoa', path: '/caminhos/velho/alagoa', caminho: 'Velho' },
    { name: 'Andrelândia', path: '/caminhos/velho/andrelandia', caminho: 'Velho' },
    { name: 'Angra dos Reis', path: '/caminhos/velho/angra-dos-reis', caminho: 'Velho' },
    { name: 'Aparecida', path: '/caminhos/velho/aparecida', caminho: 'Velho' },
    { name: 'Areias', path: '/caminhos/velho/areias', caminho: 'Velho' },
    { name: 'Arujá', path: '/caminhos/velho/aruja', caminho: 'Velho' },
    { name: 'Baependi', path: '/caminhos/velho/baependi', caminho: 'Velho' },
    { name: 'Bananal', path: '/caminhos/velho/bananal', caminho: 'Velho' },
    { name: 'Barra do Piraí', path: '/caminhos/velho/barra-do-pirai', caminho: 'Velho' },
    { name: 'Barra Mansa', path: '/caminhos/velho/barra-mansa', caminho: 'Velho' },
    { name: 'Barroso', path: '/caminhos/velho/barroso', caminho: 'Velho' },
    { name: 'Bocaina de Minas', path: '/caminhos/velho/bocaina-de-minas', caminho: 'Velho' },
    { name: 'Cachoeira do Campo', path: '/caminhos/velho/cachoeira-do-campo', caminho: 'Velho' },
    { name: 'Cachoeira Paulista', path: '/caminhos/velho/cachoeira-paulista', caminho: 'Velho' },
    { name: 'Caçapava', path: '/caminhos/velho/cacapava', caminho: 'Velho' },
    { name: 'Campos do Jordão', path: '/caminhos/velho/campos-do-jordao', caminho: 'Velho' },
    { name: 'Canas', path: '/caminhos/velho/canas', caminho: 'Velho' },
    { name: 'Capivari', path: '/caminhos/velho/capivari', caminho: 'Velho' },
    { name: 'Carrancas', path: '/caminhos/velho/carrancas', caminho: 'Velho' },
    { name: 'Carvalhos', path: '/caminhos/velho/carvalhos', caminho: 'Velho' },
    { name: 'Conceição do Rio Verde', path: '/caminhos/velho/conceicao-do-rio-verde', caminho: 'Velho' },
    { name: 'Cruzeiro', path: '/caminhos/velho/cruzeiro', caminho: 'Velho' },
    { name: 'Cruzília', path: '/caminhos/velho/cruzilia', caminho: 'Velho' },
    { name: 'Cunha', path: '/caminhos/velho/cunha', caminho: 'Velho' },
    { name: 'Garganta do Embaú', path: '/caminhos/velho/garganta-do-embau', caminho: 'Velho' },
    { name: 'Glaura', path: '/cidade/glaura', caminho: 'Velho' },
    { name: 'Guaratinguetá', path: '/caminhos/velho/guaratingueta', caminho: 'Velho' },
    { name: 'Igaratá', path: '/caminhos/velho/igarata', caminho: 'Velho' },
    { name: 'Ingaí', path: '/caminhos/velho/ingai', caminho: 'Velho' },
    { name: 'Itamonte', path: '/caminhos/velho/itamonte', caminho: 'Velho' },
    { name: 'Itanhandu', path: '/caminhos/velho/itanhandu', caminho: 'Velho' },
    { name: 'Jacareí', path: '/caminhos/velho/jacarei', caminho: 'Velho' },
    { name: 'Jambeiro', path: '/caminhos/velho/jambeiro', caminho: 'Velho' },
    { name: 'Jesuânia', path: '/caminhos/velho/jesuania', caminho: 'Velho' },
    { name: 'Lagoa Dourada', path: '/caminhos/velho/lagoa-dourada', caminho: 'Velho' },
    { name: 'Lagoinha', path: '/caminhos/velho/lagoinha', caminho: 'Velho' },
    { name: 'Lavrinhas', path: '/caminhos/velho/lavrinhas', caminho: 'Velho' },
    { name: 'Liberdade', path: '/caminhos/velho/liberdade', caminho: 'Velho' },
    { name: 'Lorena', path: '/caminhos/velho/lorena', caminho: 'Velho' },
    { name: 'Madre de Deus de Minas', path: '/caminhos/velho/madre-de-deus-de-minas', caminho: 'Velho' },
    { name: 'Minduri', path: '/caminhos/velho/minduri', caminho: 'Velho' },
    { name: 'Natividade da Serra', path: '/caminhos/velho/natividade-da-serra', caminho: 'Velho' },
    { name: 'Nazareno', path: '/caminhos/velho/nazareno', caminho: 'Velho' },
    { name: 'Paraty', path: '/caminhos/velho/paraty', caminho: 'Velho' },
    { name: 'Passa Quatro', path: '/caminhos/velho/passa-quatro', caminho: 'Velho' },
    { name: 'Passa Vinte', path: '/caminhos/velho/passa-vinte', caminho: 'Velho' },
    { name: 'Pindamonhangaba', path: '/caminhos/velho/pindamonhangaba', caminho: 'Velho' },
    { name: 'Pinheiral', path: '/caminhos/velho/pinheiral', caminho: 'Velho' },
    { name: 'Piquete', path: '/caminhos/velho/piquete', caminho: 'Velho' },
    { name: 'Piraí', path: '/caminhos/velho/pirai', caminho: 'Velho' },
    { name: 'Porto Real', path: '/caminhos/velho/porto-real', caminho: 'Velho' },
    { name: 'Potim', path: '/caminhos/velho/potim', caminho: 'Velho' },
    { name: 'Pouso Alto', path: '/caminhos/velho/pouso-alto', caminho: 'Velho' },
    { name: 'Prados', path: '/caminhos/velho/prados', caminho: 'Velho' },
    { name: 'Quatis', path: '/caminhos/velho/quatis', caminho: 'Velho' },
    { name: 'Queluz', path: '/caminhos/velho/queluz', caminho: 'Velho' },
    { name: 'Redenção da Serra', path: '/caminhos/velho/redencao-da-serra', caminho: 'Velho' },
    { name: 'Resende', path: '/caminhos/velho/resende', caminho: 'Velho' },
    { name: 'Rio Claro', path: '/caminhos/velho/rio-claro', caminho: 'Velho' },
    { name: 'Rio das Flores', path: '/caminhos/velho/rio-das-flores', caminho: 'Velho' },
    { name: 'Roseira', path: '/caminhos/velho/roseira', caminho: 'Velho' },
    { name: 'Santa Branca', path: '/caminhos/velho/santa-branca', caminho: 'Velho' },
    { name: 'Santa Isabel', path: '/caminhos/velho/santa-isabel', caminho: 'Velho' },
    { name: 'Santo Antônio do Leite', path: '/caminhos/velho/santo-antonio-do-leite', caminho: 'Velho' },
    { name: 'São Bartolomeu', path: '/caminhos/velho/sao-bartolomeu', caminho: 'Velho' },
    { name: 'São Bento do Sapucaí', path: '/caminhos/velho/sao-bento-do-sapucai', caminho: 'Velho' },
    { name: 'São Brás do Suaçuí', path: '/caminhos/velho/sao-bras-do-suacui', caminho: 'Velho' },
    { name: 'São João del-Rei', path: '/cidade/sao-joao-del-rei', caminho: 'Velho' },
    { name: 'São José do Barreiro', path: '/caminhos/velho/sao-jose-do-barreiro', caminho: 'Velho' },
    { name: 'São José dos Campos', path: '/caminhos/velho/sao-jose-dos-campos', caminho: 'Velho' },
    { name: 'São Lourenço', path: '/caminhos/velho/sao-lourenco', caminho: 'Velho' },
    { name: 'São Luiz do Paraitinga', path: '/caminhos/velho/sao-luiz-do-paraitinga', caminho: 'Velho' },
    { name: 'São Sebastião da Vitória', path: '/caminhos/velho/sao-sebastiao-da-vitoria', caminho: 'Velho' },
    { name: 'São Sebastião do Rio Verde', path: '/caminhos/velho/sao-sebastiao-do-rio-verde', caminho: 'Velho' },
    { name: 'São Thomé das Letras', path: '/caminhos/velho/sao-thome-das-letras', caminho: 'Velho' },
    { name: 'Seritinga', path: '/caminhos/velho/seritinga', caminho: 'Velho' },
    { name: 'Serranos', path: '/caminhos/velho/serranos', caminho: 'Velho' },
    { name: 'Silveiras', path: '/caminhos/velho/silveiras', caminho: 'Velho' },
    { name: 'Soledade de Minas', path: '/caminhos/velho/soledade-de-minas', caminho: 'Velho' },
    { name: 'Taubaté', path: '/caminhos/velho/taubate', caminho: 'Velho' },
    { name: 'Tiradentes', path: '/cidade/tiradentes', caminho: 'Velho' },
    { name: 'Tremembé', path: '/caminhos/velho/tremembe', caminho: 'Velho' },
    { name: 'Ubatuba', path: '/caminhos/velho/ubatuba', caminho: 'Velho' },
    { name: 'Valença', path: '/caminhos/velho/valenca', caminho: 'Velho' },
    { name: 'Vassouras', path: '/caminhos/velho/vassouras', caminho: 'Velho' },
    { name: 'Vila do Embaú', path: '/caminhos/velho/vila-do-embau', caminho: 'Velho' },
    { name: 'Virgínia', path: '/caminhos/velho/virginia', caminho: 'Velho' },
    { name: 'Volta Redonda', path: '/caminhos/velho/volta-redonda', caminho: 'Velho' },

    // Caminho de Sabarabuçu
    { name: 'Acuruí', path: '/caminhos/sabarabucu/acurui', caminho: 'Sabarabuçu' },
    { name: 'Brumadinho', path: '/caminhos/sabarabucu/brumadinho', caminho: 'Sabarabuçu' },
    { name: 'Caeté', path: '/caminhos/sabarabucu/caete', caminho: 'Sabarabuçu' },
    { name: 'Honório Bicalho', path: '/caminhos/sabarabucu/honorio-bicalho', caminho: 'Sabarabuçu' },
    { name: 'Itabirito', path: '/caminhos/sabarabucu/itabirito', caminho: 'Sabarabuçu' },
    { name: 'Morro Vermelho', path: '/caminhos/sabarabucu/morro-vermelho', caminho: 'Sabarabuçu' },
    { name: 'Nova Lima', path: '/caminhos/sabarabucu/nova-lima', caminho: 'Sabarabuçu' },
    { name: 'Raposos', path: '/caminhos/sabarabucu/raposos', caminho: 'Sabarabuçu' },
    { name: 'Rio Acima', path: '/caminhos/sabarabucu/rio-acima', caminho: 'Sabarabuçu' },
    { name: 'Sabará', path: '/caminhos/sabarabucu/sabara', caminho: 'Sabarabuçu' }
  ];

  // Função para filtrar cidades baseado no termo de busca
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    
    if (value.length >= 3) {
      const filtered = allCities.filter(city =>
        city.name.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 8); // Limitar a 8 sugestões
      
      setFilteredCities(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      setFilteredCities([]);
    }
  };

  // Função para lidar com a seleção de uma cidade
  const handleCitySelect = (city: {name: string, path: string, caminho: string}) => {
    setSearchTerm(city.name);
    setShowSuggestions(false);
    setFilteredCities([]);
    
    // Navegar para a página da cidade ou caminho correspondente
    if (city.name === 'Conceição do Mato Dentro') {
      navigate('/cidade/conceicao-do-mato-dentro');
    } else if (city.name === 'Tiradentes') {
      navigate('/cidade/tiradentes');
    } else if (city.name === 'São João del-Rei') {
      navigate('/cidade/sao-joao-del-rei');
    } else if (city.name === 'Glaura') {
      navigate('/cidade/glaura');
    } else {
      // Para cidades sem página própria, redirecionar para a página do caminho com filtro
      const caminhoRoutes = {
        'Diamantes': '/caminho-diamantes',
        'Novo': '/caminho-novo',
        'Velho': '/caminho-velho',
        'Sabarabuçu': '/caminho-sabarabucu'
      };
      
      const targetRoute = caminhoRoutes[city.caminho as keyof typeof caminhoRoutes];
      if (targetRoute) {
        // Navegar com parâmetro de query para filtrar a cidade
        navigate(`${targetRoute}?cidade=${encodeURIComponent(city.name)}`);
      }
    }
  };

  // Função para limpar a busca
  const clearSearch = () => {
    setSearchTerm('');
    setShowSuggestions(false);
    setFilteredCities([]);
  };

  // Fechar sugestões quando clicar fora
  React.useEffect(() => {
    const handleClickOutside = () => {
      setShowSuggestions(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
  const paths: Path[] = [
    {
      id: 1,
      title: "Caminho dos Diamantes",
      description: "Rota histórica que conecta Diamantina ao Rio de Janeiro, passando por cidades coloniais preservadas.",
      image: "http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/Design-sem-nome-2-e1752005916396.png",
      link: "/caminho-diamantes"
    },
    {
      id: 2,
      title: "Caminho Novo",
      description: "Trajeto criado no século XVIII para facilitar o transporte do ouro das Minas Gerais até o porto do Rio de Janeiro.",
      image: "http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/Design-sem-nome-3-e1752005952206.png",
      link: "/caminho-novo"
    },
    {
      id: 3,
      title: "Caminho Velho",
      description: "A primeira rota oficial entre São Paulo e as minas de ouro, percorrendo o Vale do Paraíba.",
      image: "http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-15-de-jul.-de-2025-14_17_40.png",
      link: "/caminho-velho"
    },
    {
      id: 4,
      title: "Caminho de Sabarabuçu",
      description: "Rota lendária que mescla paisagens naturais e heranças coloniais.",
      image: "http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-15-de-jul.-de-2025-14_27_35.png",
      link: "/caminho-sabarabucu"
    }
  ];

  return (
    <section id="caminhos" className="py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h2 
          className="text-[36px] font-bold text-[#2A5D3B] text-center mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Conheça os Caminhos da Estrada Real
        </h2>
        
        <p 
          className="text-[18px] text-[#4A4A4A] text-center max-w-[800px] mx-auto mb-12"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}
        >
          A Estrada Real é composta por quatro caminhos históricos que conectam cidades e paisagens incríveis. Descubra cada um deles e planeje sua aventura.
        </p>

        {/* Mobile Layout: Single column, stacked cards */}
        <div className="md:hidden space-y-4 mb-8">
          {paths.map((path) => (
            <div
              key={path.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              style={{ height: '480px' }}
            >
              {/* Image section - 260px height */}
              <div 
                className="w-full overflow-hidden"
                style={{ height: '260px' }}
              >
                <a href={path.link}>
                  <LazyImage
                    src={path.image}
                    alt={path.title}
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              
              {/* Text section with white background - 220px height */}
              <div 
                className="bg-white p-4 flex flex-col"
                style={{ height: '220px' }}
              >
                <div className="flex flex-col items-center text-center" style={{ height: '160px' }}>
                  {/* Title */}
                  <h3 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '600',
                      fontSize: '1.125rem',
                      color: '#1E4620',
                      lineHeight: '1.3',
                      textAlign: 'center'
                    }}
                  >
                    {path.title}
                  </h3>
                  
                  {/* Description */}
                  <p 
                    className="mb-3 flex-grow"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '400',
                      fontSize: '1rem',
                      color: '#555555',
                      lineHeight: '1.5',
                      textAlign: 'center'
                    }}
                  >
                    {path.description}
                  </p>
                </div>
                
                {/* Button - always at bottom with margin-top */}
                <div style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button
                  className="transition-colors duration-200 self-start"
                  style={{ 
                    backgroundColor: '#EDA10E',
                    color: '#FFFFFF',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '400',
                    fontSize: '1rem',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#c59405';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#EDA10E';
                  }}
                  onClick={() => navigate(path.link)}
                >
                  Explorar →
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout: 4 columns grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 mb-8">
          {paths.map((path) => (
            <div
              key={path.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              style={{ height: '480px' }}
            >
              {/* Image section - 260px height */}
              <div 
                className="w-full overflow-hidden"
                style={{ height: '260px' }}
              >
                <a href={path.link}>
                  <LazyImage
                    src={path.image}
                    alt={path.title}
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              
              {/* Text section with white background - 220px height */}
              <div 
                className="bg-white p-4 flex flex-col"
                style={{ height: '220px' }}
              >
                <div className="flex flex-col items-center text-center" style={{ height: '160px' }}>
                  {/* Title */}
                  <h3 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '600',
                      fontSize: '1.125rem',
                      color: '#1E4620',
                      lineHeight: '1.3',
                      textAlign: 'center'
                    }}
                  >
                    {path.title}
                  </h3>
                  
                  {/* Description */}
                  <p 
                    className="mb-3 flex-grow"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '400',
                      fontSize: '1rem',
                      color: '#555555',
                      lineHeight: '1.5',
                      textAlign: 'center'
                    }}
                  >
                    {path.description}
                  </p>
                </div>
                
                {/* Button - always at bottom with margin-top */}
                <div style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button
                  className="transition-colors duration-200 self-start"
                  style={{ 
                    backgroundColor: '#EDA10E',
                    color: '#FFFFFF',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '400',
                    fontSize: '1rem',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#c59405';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#EDA10E';
                  }}
                  onClick={() => navigate(path.link)}
                >
                  Explorar →
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Campo de Busca */}
        <div className="text-center mb-4">
          <h3 
            className="mb-2"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#1E4620'
            }}
          >
            BUSCAR
          </h3>
          
          <div className="flex justify-center">
            <div 
              className="relative w-full max-w-[600px]"
              style={{ marginBottom: '0px' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Search 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  style={{ color: '#555555' }}
                />
                <input
                  type="text"
                  placeholder="Digite o nome da cidade"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full"
                  style={{
                    height: '48px',
                    paddingLeft: '48px',
                    paddingRight: searchTerm ? '48px' : '16px',
                    border: '2px solid #1E4620',
                    borderRadius: '6px',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: '400',
                    color: '#555555',
                    outline: 'none'
                  }}
                />
                
                {/* Botão de limpar */}
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              
              {/* Lista de sugestões */}
              {showSuggestions && filteredCities.length > 0 && (
                <div 
                  className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1"
                  style={{ maxHeight: '300px', overflowY: 'auto' }}
                >
                  {filteredCities.map((city, index) => (
                    <button
                      key={index}
                      onClick={() => handleCitySelect(city)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1rem',
                        color: '#333333'
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{city.name}</span>
                        <span 
                          className="text-sm px-2 py-1 rounded-full"
                          style={{
                            backgroundColor: '#E8F5E9',
                            color: '#1E4620',
                            fontSize: '0.75rem',
                            fontWeight: '500'
                          }}
                        >
                          {city.caminho}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
              
              {/* Mensagem quando não há resultados */}
              {showSuggestions && searchTerm.length >= 3 && filteredCities.length === 0 && (
                <div 
                  className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1 px-4 py-3"
                >
                  <p 
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.875rem',
                      color: '#666666',
                      textAlign: 'center',
                      margin: 0
                    }}
                  >
                    Nenhuma cidade encontrada para "{searchTerm}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PathsSection;