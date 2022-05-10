const prompt = require("prompt-sync")();
console.clear();

const red = "\u001b[31m";
const reset = "\u001b[0m";

let status = {
  saude: {
    pontos: 100,
    alterarSaude: function (valor, operador) {
      if (operador == "somar") {
        this.pontos += valor;
      } else if (operador == "subtrair") {
        this.pontos -= valor;
      } else {
        this.pontos = 100;
      }
    },
  },

  fome: {
    pontos: 100,
    alterarFome: function (valor, operador) {
      if (operador == "somar") {
        this.pontos += valor;
      } else if (operador == "subtrair") {
        this.pontos -= valor;
      } else if (operador == "dividir") {
        this.pontos /= valor;
      } else {
        this.pontos = 100;
      }
    },
  },

  energia: {
    pontos: 100,
    alterarEnergia: function (valor, operador) {
      if (operador == "somar") {
        this.pontos += valor;
      } else if (operador == "subtrair") {
        this.pontos -= valor;
      } else if (operador == "dividir") {
        this.pontos /= valor;
      } else {
        this.pontos = 100;
      }
    },
  },

  carisma: {
    pontos: 50,
    alterarCarisma: function (valor, operador) {
      if (operador == "somar") {
        this.pontos += valor;
      } else if (operador == "subtrair") {
        this.pontos -= valor;
      } else {
        this.pontos = 50;
      }
    },
  },

  embriaguez: {
    pontos: 0,
    alterarEmbriaguez: function (valor, operador) {
      if (operador == "somar") {
        this.pontos += valor;
      } else if (operador == "subtrair") {
        this.pontos -= valor;
      } else {
        this.pontos = 0;
      }
    },
  },
};

let tempo = {
  periodo: "Manhã",

  passaPeriodoManha: function () {
    this.periodo = "Manhã";
  },

  passaPeriodoTarde: function () {
    this.periodo = "Tarde";
  },

  passaPeriodoNoite: function () {
    this.periodo = "Noite";
  },
};

const blocos = {
  tecnobloco: function (embriaguez) {
    console.log(
      `Marcado pelas coreografias em correria de seus participantes, você decide ir
ao Tecnobloco. Assim que você chega na concentração na Praça da Bandeira
se arrepende um pouco de sua escolha ao notar o quão cheio está, correr 
com milhares de pessoas e uma boa porcentagem de pessoas bêbadas não 
soa como uma receita para o sucesso. Você começa a escutar os instrumentos
de sopro enquanto ainda está no meio da muvuca do bloco. A única opção 
agora é correr e esperar pelo melhor 
    

Pressione ${red}ENTER${reset} para continuar`
    );
    prompt();

    let random = Math.floor(Math.random() * 100) + 1;

    if (random <= 20 || embriaguez > 60) {
      console.clear();
      console.log(`Você acaba tropeçando no meio fio na hora de correr com o bloco
e rompe o ligamento do pé! Parece que a folia acabou para você :c


Pressione ${red}ENTER${reset} para continuar`);
      prompt();
      console.clear();
      return true;
    } else {
      console.clear();
      console.log(`Você corre em perfeita sintonia com o bloco, mas acaba se cansando 
um pouco com o ritmo frenético da folia, hora de voltar pra casa e descansar
ou não


Pressione ${red}ENTER${reset} para continuar`);
      prompt();
      return false;
    }
  },

  boiTolo: function () {
    console.log(
      `Todo ano a mesma pergunta ecoa nas ruas do Rio no Carnaval "Cadê o Boi Tolo?" e
com você não será diferente domar esse boi não é fácil, será
que você consegue? Você abre o celular e tenta encontrar uma 
das boiadas do Boi Tolo. Eis que aparece um post compartinhando
a suposta localização do bloco, você não tem certeza se é real
mas decide arrisca mesmo assim


Pressinone ${red}ENTER${reset} para continuar`
    );
    prompt();

    let random = Math.floor(Math.random() * 100) + 1;
    if (random >= 50) {
      console.clear();
      console.log(
        `Deu certo! Você seguiu a localização compartilhada e conseguiu encontrar o bloco,
mas como sempre o bloco está lotado e você acaba perdendo seus amigos na 
multidão, você tem duas opções tentar encontrá-los ou esperar que todos 
estejam são e salvos no Airbnb de noite


Digite ${red}1${reset} para tentar encontrá-los e ${red}2${reset} para desencar
e curtir o bloco`
      );
      let escolha = +prompt();
      while (escolha != 1 && escolha != 2) {
        console.clear();
        console.log(
          `Deu certo! Você seguiu a localização compartilhada e conseguiu encontrar o bloco,
mas como sempre o bloco está lotado e você acaba perdendo seus amigos na 
multidão, você tem duas opções tentar encontrá-los ou esperar que todos 
estejam são e salvos no Airbnb de noite


Opção inválida, por favor digite ${red}1${reset} ou ${red}2${reset}`
        );
        escolha = +prompt();
      }
      if (escolha == 1) {
        console.clear();
        console.log(
          `Você opta por procurar seus amigos, mas como conseguir encontrá-los no meio de
tanta gente. Eis que você lembra que haviam combinado de fazer um sinal
parecido com uma lhama para se encontrarem nos blocos caso se perdessem, 
então você levanta a mão pro alto fazendo um sinal de lhama e consegue
avistar outros três braços fazendo lhamas do outro lado da avenida. Ao
encontrá-los você se dá conta que estava só com seu celular enquanto seu 
dinheiro, documento e bilhete estavam na pochete da sua amiga. Ufa, ainda
bem que você decidiu procurar por eles


Pressione ${red}ENTER${reset} para continuar`
        );
        prompt();
        return 1;
      } else {
        console.log(
          `Você opta por continuar no bloco sozinho e acaba fazendo alguns amigos que te
convidam para ir a Praça São Salvador para beber depois do bloco
ou outro dia. Vocês trocam contato, mas eles acabam indo embora 
e você prefere ficar mais um pouco. Quando finalmente decide ir 
embora se dá conta de que todo seu dinheiro, documentos e bilhetes 
do metrô estavam na pochete da sua amiga, parece que alguém vai 
ter que voltar andando pra casa


Pressione ${red}ENTER${reset} para continuar`
        );
        prompt();
        return 2;
      }
    } else {
      console.clear();
      console.log(
        `Você vai em direção a localização compartilhada e tudo o que encontra são vestígios
de sua passagem, você tenta encontrar uma pista do paradeiro do bloco mas 
ninguém faz a menor ideia de onde ele está. Quem sabe você não consegue 
amanhã afinal o Boi Tolo já durou mais de 24 horas, até lá o que nos resta 
é beber uma cerveja na praça São Salvador


Pressinone ${red}ENTER${reset} para continuar`
      );
      prompt();
      return false;
    }
  },

  amigosDaOnca: function () {
    console.log(
      ` Desde 2012, desfilando espontaneamente pelas ruas do centro da cidade do Rio de 
Janeiro carregando em seu cortejo milhares de pessoas. Seu repertório vai das 
marchinhas ao Axé baiano, passando por Mamonas Assassinas e por suas hilárias 
musicas autorais, no melhor estilo "gastação". Você chega no bloco e decide pegar
umas bebidas com seu amigos em um dos camelôs


Presssinone ${red}ENTER${reset} para continuar`
    );
    prompt();

    console.clear();
    console.log(
      `Você toma uma cerveja com seus amigos enquanto vocês curtem o bloco, depois 
de um tempo um deles vira e pergunta "Bora pegar outra?" você faz que sim com 
a cabeça e vocês pegam mais bebida


Presssinone ${red}ENTER${reset} para continuar`
    );
    prompt();

    let beber = "";
    let quantidadeBebidas = 2;
    bebedeira: while (beber == "") {
      console.clear();
      console.log(
        `Depois de tomar a cerveja que pegou com seu amigo, você olha pra ele de novo
e ele fala "Bora mais uma?"


Pressione ${red}ENTER${reset} se quiser beber mais ou digite um ${red}caractere${reset} se quiser parar`
      );
      beber = prompt();

      if (quantidadeBebidas == 10) {
        break bebedeira;
      }
      quantidadeBebidas++;
    }

    if (quantidadeBebidas == 10) {
      console.clear();
      console.log(
        `Você e teu amigo acabam bebendo demais e o calor do Rio contribui para que o pior
acontecesse o temido gorfo. Vocês dois começam a vomitar intensamente um verdadeiro
ultraje se me perimite dizer, mas nada que já não tenha acontecido em outros carnavais.
Pelo menos vocês dois são bêbados conscientes e pedem ir pra casa depois do jorro


Pressione ${red}ENTER${reset} para continuar`
      );
      prompt();
      return true;
    } else {
      console.clear();
      console.log(
        `Você e teu amigo algumas cervejas, depois de ${quantidadeBebidas} latinhas você decide parar.
Parece que alguém aprendeu a lição nos carnavais passados, você fica
um pouco alto da bebida mas apenas o suficiente pra curtir o bloco 
ranquilo
        
        
Pressione ${red}ENTER${reset} para continuar`
      );
      prompt();
      return false;
    }
  },

  navioPirata: function (embriaguez) {
    console.log(`Navio Pirata é o bloco de Carnaval da banda BaianaSystem, com repertório 
majoritariamente autoral e sem hits clássicos e marcado pelas tradicionais rodinhas 
das apresentações do Baiana os famosos 'Bate cabeça'. Você chega no bloco e a roda
já começa a abrir ao lado do trio. Você pode escolher entre embarcar no bate cabeça
ou assistir a galera embarcando nessa loucura

Digite '${red}S${reset}' se deseja entrar nessa ou '${red}N${reset}' se quiser de fora`);
    let escolha = prompt().toLowerCase();
    while (escolha != "s" && escolha != "n") {
      console.clear();
      console.log(`Navio Pirata é o bloco de Carnaval da banda BaianaSystem, com repertório 
majoritariamente autoral e sem hits clássicos e marcado pelas tradicionais rodinhas 
das apresentações do Baiana os famosos 'Bate cabeça'. Você chega no bloco e a roda
já começa a abrir ao lado do trio. Você pode escolher entre embarcar no bate cabeça
ou assistir a galera embarcando nessa loucura

Resposta inválida, por favor escolha entre '${red}S${reset}' e '${red}N${reset}'`);
      escolha = prompt().toLowerCase();
    }

    if (escolha == "s") {
      let random = Math.floor(Math.random() * 100) + 1;

      if (random <= 40 || embriaguez >= 60) {
        console.clear();
        console.log(
          `Você decide entrar no bate cabeça, assim que você corre em direção ao centro da
roda e dá o primeiro salto... Recebe uma cotovelada na cara e acaba com um
olho roxo, acho que era melhor só ter assistido dessa vez


Pressione ${red}ENTER${reset} para continuar`
        );
        prompt();
        return true;
      } else {
        console.clear();
        console.log(
          `Você decide entrar no bate cabeça, assim que você corre em direção ao centro da
roda e dá o primeiro salto... Por incrível que pareça você sai ileso, 
talvez os santos do carnaval estejam te guardadando 


Pressione ${red}ENTER${reset} para continuar`
        );
        prompt();
        return false;
      }
    } else {
      console.clear();
      console.log(
        `Você opta por ficar de fora do bate cabeça e apenas assistir a galera
pulando e se mpurrando como se não houvesse amanhã


Pressione ${red}ENTER${reset} para continuar`
      );
      prompt();
      return false;
    }
  },

  orquestraVoadora: function () {
    console.log(
      `A Orquestra Voadora é um dos blocos mais energizantes e inebriantes do carnaval carioca.
Com mais de 50 ritmistas, a bateria da Orquestra desfila com o melhor da Nova MPB e mais 
de 150 músicos entre metais e percussionistas, além de contar com malabares, acrobatas, 
pernas-de-pau e mágicos. Especialmente esse ano você chegou cedo na concentração do bloco
e ajudou a montar a corda. Quando o bloco começa a lotar você vê a oportunidade de sair da
corda e se juntar aos músicos e a galera que faz parte do bloco, mas lembre-se que isso 
foge das boas práticas carnavalescas. Afinal "Jamais saíras da corda para se juntar aos
músicos"
      
      
Se quiser arriscar mesmo assim digite '${red}S${reset}' se prefere respeitar os mandamento do carnaval
digite '${red}N${reset}'`
    );
    let escolha = prompt().toLowerCase();
    while (escolha != "s" && escolha != "n") {
      console.clear();
      console.log(
        `A Orquestra Voadora é um dos blocos mais energizantes e inebriantes do carnaval carioca.
Com mais de 50 ritmistas, a bateria da Orquestra desfila com o melhor da Nova MPB e mais 
de 150 músicos entre metais e percussionistas, além de contar com malabares, acrobatas, 
pernas-de-pau e mágicos. Especialmente esse ano você chegou cedo na concentração do bloco
e ajudou a montar a corda. Quando o bloco começa a lotar você vê a oportunidade de sair da
corda e se juntar aos músicos e a galera que faz parte do bloco, mas lembre-se que isso 
foge das boas práticas carnavalescas. Afinal "Jamais saíras da corda para se juntar aos
músicos"
      
      
Resposta inválida, por favor digite '${red}S${reset}' se prefere respeitar os mandamento do carnaval
digite '${red}N${reset}'`
      );
      escolha = prompt().toLowerCase();
    }
    if (escolha == "n") {
      console.clear();
      console.log(
        `Você prefere não arriscar e curtir o bloco tranquilamente sem causar problemas
        
        
        
Pressione ${red}ENTER${reset} para continuar`
      );
      prompt();
      return 0;
    } else {
      console.clear();
      console.log(
        `Você decide arriscar e sai da corda em direção a galera que organiza o bloco. 
Você se arrepende no exato momento em que faz isso ao notar um acrobata vindo 
em sua direção dando mortais, ele não havia calculado sua presença quando começou
a soltar e o resultado da sua escolha foi uma belíssima pancada nas costas. Você 
cai no chão sem entender nada e seus amigos te levantam
        
        
Chegou a hora avaliar o estrago, pressione ${red}ENTER${reset} para continuar`
      );
      prompt();

      let random = Math.floor(Math.random() * 100) + 1;

      if (random <= 33) {
        console.clear();
        console.log(
          `Éhhh... Parece que a coisa foi séria, acho que o super chute do acrobata
acabou machucando feio seu ombro. Infelimente, isso significa que seu 
carnaval acabou por aqui, você vai sair do bloco direto pro pronto socorro
e vai ter que ficar uns dias de molho
        
        
Pressione ${red}ENTER${reset} para continuar`
        );
        prompt();
        return 1;
      } else {
        console.clear();
        console.log(
          `Éhhh... Parece que a coisa foi feia, mas não séria talvez os deuses
do carnaval tenham te concedido uma nova chance de se redimir. Entretanto, 
o impacto do chute é uma certeza, afinal te deixou com um hematoma no 
ombro e com a fama de estraga prazeres no bloco 
        
        
Pressione ${red}ENTER${reset} para continuar`
        );
        prompt();
        return 2;
      }
    }
  },

  semPretensao: function () {
    console.log(
      `Surgido no carnaval passado o bloco Sem Pretensão conquistou seu lugar especial 
no seu coração. Esse ano você escolhe passar um dos seus dias de carnaval nele 
novamente. Você chega na Zona Portuária e o público do bloco quase que triplicou
este ano. Como você é um antigo conhecido do Sem Pretensão, nele você tem passe
livre para furar o cordão, então você vai empurrando a galera até se juntar aos 
músicos. Sem pretensão você curte o bloco até que vê duas pessoas brigando quase
saindo na porrada


Eaí, você vai fazer algo a respeito? Digite '${red}S${reset}' se  quiser tentar resolver o 
conflito e '${red}N${reset}'`
    );
    let escolha = prompt().toLowerCase();
    while (escolha != "s" && escolha != "n") {
      console.clear();
      console.log(
        `Surgido no carnaval passado o bloco Sem Pretensão conquistou seu lugar especial 
no seu coração. Esse ano você escolhe passar um dos seus dias de carnaval nele 
novamente. Você chega na Zona Portuária e o público do bloco quase que triplicou
este ano. Como você é um antigo conhecido do Sem Pretensão, nele você tem passe
livre para furar o cordão, então você vai empurrando a galera até se juntar aos 
músicos. Sem pretensão você curte o bloco até que vê duas pessoas brigando quase
saindo na porrada
  
  
Resposta inválida, por favor digite '${red}S${reset}' ou '${red}N${reset}'`
      );

      escolha = prompt().toLowerCase();
    }

    if (escolha == "s") {
      console.clear();
      console.log(
        `Você pega um megafone emprestado e chama a atenção dos dois marmanjos, os 
músicos param de tocar e você diz "Oh Gente! Bora parar de brigar a gente 
tá aqui pra se divertir" no megafone, alguém puxa uma vaia para os dois bocós
brigando e eles param. O bloco volta a andar e você ganha o apelido de 'fiscal 
do bloco' rs
        

Pressione ${red}ENTER${reset} para continuar`
      );
      prompt();
      return true;
    } else {
      console.clear();
      console.log(
        `você deixa que eles mesmos se resolvam, mas fica observando de longe. Nessa
de ficar prestando anteção nos dois, você tropeça e cai. Não foi nada demais
você só rala um pouco o joelho
        

Pressione ${red}ENTER${reset} para continuar`
      );
      prompt();
      return false;
    }
  },

  bloco442: function () {
    console.log(
      `Você se dá conta de que chegou a data do 442 e decide ir tentar encontrar o(a) crush lá, você
se pergunta se ele(a) ainda se lembra de você vamos esperar que sim. De qualquer maneira o bloco
442 é incrível estando acompanhado ou não. Você chega ao bloco e não avista o tal rostinho familiar, 
então vai comprar uma bebida quando é surpreendio por mãos cobrindo seus olhos, quem poderia 
ser rs. O bloco começa a se movimentar e você sai correndo com sua paixonite pra dentro da corda, 
não é que ele(a) sabe tocar trompete. O bloco vai andando pelo rio até que chega aos pés do
bairro Santa Teresa, os músicos começam a tocar Carinhoso e o clima de romance pinta no ar


Digite '${red}S${reset}' se quiser dar um beijo de cinema no(a) crush e '${red}N${reset}' se não estiver no clima`
    );
    let resposta = prompt().toLowerCase();
    while (resposta != "s" && resposta != "n") {
      console.clear();
      console.log(
        `Você se dá conta de que chegou a data do 442 e decide ir tentar encontrar o(a) crush lá, você
se pergunta se ele(a) ainda se lembra de você vamos esperar que sim. De qualquer maneira o bloco
442 é incrível estando acompanhado ou não. Você chega ao bloco e não avista o tal rostinho familiar, 
então vai comprar uma bebida quando é surpreendio por mãos cobrindo seus olhos, quem poderia 
ser rs. O bloco começa a se movimentar e você sai correndo com sua paixonite pra dentro da corda, 
não é que ele(a) sabe tocar trompete. O bloco vai andando pelo rio até que chega aos pés do
bairro Santa Teresa, os músicos começam a tocar Carinhoso e o clima de romance pinta no ar
  
  
Por favor, digite '${red}S${reset}' ou '${red}N${reset}'`
      );
      resposta = prompt().toLowerCase();
    }

    if (resposta == "s") {
      console.clear();
      console.log(
        `No momento em que você se aproxima para o beijo o bloco inteiro começa a sentar no chão, só
pode ser coisa do destino... Vocês se olham e dão um beijo digno de Oscar ao som de carinhoso,
quando acabam de se beijar o bloco inteiro aplaude vocês, talvez essa paixonite de carnaval 
possa render algo a mais
        
        
Pressione ${red}ENTER${reset} para continuar`
      );
      prompt();
      return true;
    } else {
      console.clear();
      console.log(
        `Você prefere apenas curtir a música, acho que você não está no clima de grandes
romances. Quem sabe em um outro carnaval
        
        
        
Pressione ${red}ENTER${reset} para continuar`
      );
      prompt();
      return false;
    }
  },

  minhaLuzDeLED: function () {
    console.log(
      `Depois de ser impedido de sair pela PM no ano passado, parece que finalmente esse
ano o bloco Minha Luz É de LED vai voltar a iluminar as ruas do Rio. Porém, você 
esqueceu de fazer uma fantasia para esse bloco e vai ter que se virar nos trinta 
para criar algo com os fios de fada e fitas LED que comprou no Saara de última 
hora. Você começa a buscar uma referências no Pinterest e assiste unstutoriais no
YouTube. Você bola uma fantasia incrível, mas meio trabalhosa de fazer. Será que 
vai conseguir?


Digite um ${red}número${reset} entre ${red}1${reset} e ${red}100${reset} para descobrir se a fantasia deu certo`
    );
    let resposta = +prompt();
    while (isNaN(resposta) || resposta > 100 || resposta < 0) {
      console.clear();
      console.log(
        `Depois de ser impedido de sair pela PM no ano passado, parece que finalmente esse
ano o bloco Minha Luz É de LED vai voltar a iluminar as ruas do Rio. Porém, você 
esqueceu de fazer uma fantasia para esse bloco e vai ter que se virar nos trinta 
para criar algo com os fios de fada e fitas LED que comprou no Saara de última 
hora. Você começa a buscar uma referências no Pinterest e assiste unstutoriais no
YouTube. Você bola uma fantasia incrível, mas meio trabalhosa de fazer. Será que 
vai conseguir?
  

Respota inválida, por favor digite um ${red}número${reset} entre ${red}1${reset} e ${red}100${reset} para descobrir se a fantasia deu certo`
      );
      resposta = +prompt();
    }

    if (resposta % 7 == 0) {
      console.clear();
      console.log(
        `Você tenta criar sua fantasia da maneira como imaginou, mas acaba dando tudo errado
e você acaba tentando que se contentar em ir para o bloco com um clichê tutu com 
luzinhas de natal. Mesmo assim, você se diverte muito no bloco
        
        
Pressione ${red}ENTER${reset} para continuar`
      );
      prompt();
    } else {
      console.clear();
      console.log(
        `Você consegue criar uma fantasia luminosa incrível em pouco tempo, chegando no bloco 
todos elogiam sua fantasia. Até mesmo os próprios organizadores do bloco pedem para 
tirar uma foto sua ao lado do Bananobike - sistema de som do bloco. Essa noite não 
poderia ter sido melhor!
        

Pressione ${red}ENTER${reset} para continuar`
      );
      prompt();
    }
  },

  amoresLiquidos: function (carisma) {
    console.log(
      `Impossível negar que o carnaval traz o clima de amor no ar, seja passageira ou não
sempre bom tentar encontrar uma paixão carnavalesca. Acredito que não há
bloco melhorar para tal acontecimento do que o Amores Líquidos. Então você 
decide arriscar em um romance, chegando no bloco você começa a trocar olhares
com uma das pessoas dentro da corda. Eaí? O que vai fazer?

Digite '${red}S${reset}' se quiser tentar se aproximar da pessoa ou '${red}N${reset}' se estiver de boa e
só quer curtir o bloco com seus amigos`
    );
    let resposta = prompt().toLowerCase();
    while (resposta != "s" && resposta != "n") {
      console.clear();
      console.log(
        `Impossível negar que o carnaval traz o clima de amor no ar, seja passageira ou não
sempre bom tentar encontrar uma paixão carnavalesca. Acredito que não há
bloco melhorar para tal acontecimento do que o Amores Líquidos. Então você 
decide arriscar em um romance, chegando no bloco você começa a trocar olhares
com uma das pessoas dentro da corda. Eaí? O que vai fazer?

Digite '${red}S${reset}' se quiser tentar se aproximar da pessoa ou '${red}N${reset}' se estiver de boa e
só quer curtir o bloco com seus amigos`
      );
      console.log();
      console.log("Resposta inválida, por favor tente novamente");
      resposta = prompt().toLowerCase();
    }

    if (resposta == "s" && carisma > 50) {
      console.clear();
      console.log(
        `Você se aproxima da pessoa que está te olhando e vocês começam a flertar, até que você
decide chgegar mais perto e acaba rolando um beijão de cinema. Vocês começam a
conversar, papo vai papo vem e você recebe um convite para irem embora juntos

Você aceita o convite? Digite '${red}S${reset}' pra sim e '${red}N${reset}' para não`
      );
      let escolha = prompt().toLowerCase();
      while (escolha != "s" && escolha != "n") {
        console.clear();
        console.log(
          `Você se aproxima da pessoa que está te olhando e vocês começam a flertar, até que você
decide chgegar mais perto e acaba rolando um beijão de cinema. Vocês começam a
conversar, papo vai papo vem e você recebe um convite para irem embora juntos

Você aceita o convite? Digite '${red}S${reset}' pra sim e '${red}N${reset}' para não`
        );
        console.log(`Resposta inválida, por favor tente novamente`);
        escolha = prompt().toLowerCase();
      }
      if (escolha == "s") {
        console.clear();
        console.log(
          `Vocês vão embora juntos e bem... Eu nem preciso comentar sobre o que aconteceu durante a
noite, mas posso afirmar que você não dormiu nadinha rs.  Quando vc está se arrumando pra 
ir embora sua paixão de carnaval te passa a data, horário e local do secreto bloco442 e 
diz que espera te encontrar lá

Pressione ${red}ENTER${reset} para continuar`
        );
        prompt();
        return true;
      } else {
        console.clear();
        console.log(
          `Você diz que não está muito no clima hoje e sua paquera diz que entende, você decide ir embora
mas antes de partir vocês trocam números. Já saindo do bloco você recebe 
uma mensagem com a data, horário e local do secreto bloco442 e em seguida
ema mensagem dizendo "espero te encontrar lá :)"

Pressione ${red}ENTER${reset} para continuar`
        );
        prompt();
        return true;
      }
    } else if (resposta == "s" && carisma < 50) {
      console.clear();
      console.log(
        `Você tenta um flerte, mas acaba levando um fora. Relaxa todo mundo já levou um fora no bloquinho, 
a solução é desencanar e curtir com seus amigos

Pressione ${red}ENTER${reset} para continuar`
      );
      prompt();
      return false;
    } else {
      console.clear();
      console.log(
        `Você prefere curtir o bloco com seus amigos, talvez no final das contas Bauman estava certo rs
      
Pressione ${red}ENTER${reset} para continuar`
      );
      prompt();
      return false;
    }
  },
};

function checagemStatus(saude, energia, fome, embriaguez) {
  if (saude <= 0) {
    return true;
  } else if (energia <= 0) {
    return true;
  } else if (fome <= 0) {
    return true;
  } else if (embriaguez >= 100) {
    return true;
  } else {
    return false;
  }
}

carnaventure: while (true) {
  console.log(`${red}
                      CARNAVENTURE${reset}`);
  console.log();
  console.log();
  console.log(`Bem-vindo(a) ao Carnaventure 2.3!`);
  console.log(`Você está pronto(a) para essa aventura regada a sepertina e muito glitter?
Se sim digite '${red}S${reset}', caso contrário digite '${red}N${reset}'`);
  let resposta1 = prompt().toLowerCase();
  while (resposta1 != "s" && resposta1 != "n") {
    console.clear();
    console.log(`${red}
                      CARNAVENTURE${reset}`);
    console.log();
    console.log();
    console.log();
    console.log(`Você está pronto(a) para essa aventura regada a sepertina e muito glitter? 
Se sim digite '${red}S${reset}', caso contrário digite '${red}N${reset}'`);
    console.log(`Resposta inválida, por favor tente novamente`);
    resposta1 = prompt().toLowerCase();
  }

  if (resposta1 == "n") {
    console.clear();
    console.log(`Parece que você não é muito fã da folia, sendo assim você opta 
por passar o Carnaval num hotel fazenda comendo fondue`);
    break carnaventure;
  }

  console.clear();
  console.log(
    `Ótimo! Então vamos começar, durante nossa jornada carnavalesca você fará algumas escolhas 
que afetaram os status do seu personagem e consequentemente o rumo da folia. Os status são:${red}
    -saúde
    -fome
    -energia
    -carisma
    -embriaguez${reset}`
  );
  console.log(
    `Lembre-se que a condição desses status pode alterar drasticamente o rumo da sua festança, 
dito isso vamos começar! 
Pressione ${red}ENTER${reset} para iniciar o jogo`
  );
  prompt();

  console.clear();
  console.log(
    `Você acorda na cidade maravilhosa no primeiro dia de folia e logo de cara abre 
seu Instagram para acompanhar a programção dos blocos. Xiiih... parece que esse 
ano nenhum bloco vai sair de manhã. Pelo menos você poderá escolher melhor como 
iniciar seu dia`
  );

  let listaBlocos = [
    "-" + red + "Tecnobloco" + reset,
    "-" + red + "Boi Tolo" + reset,
    "-" + red + "Navio Pirata" + reset,
    "-" + red + "Amigos da Onça" + reset,
    "-" + red + "Orquestra Voadora" + reset,
    "-" + red + "Sem Pretensão" + reset,
  ];

  let escolhasNoite = [
    `${red}Dormir${reset} - Estou completamente exausto(a) eu só quero me jogar na cama e acordar só amanhã, 
mas antes vou comer algo rapidinho`,
    `${red}Skincare${reset} - Minha pele está completamente destruída depois de tanto gliter, acho que vou 
fazer uma mascará de argila antes de dormir`,
    `${red}Pedir pizza${reset} - Pelo amor de Deus! Eu vou pedir uma pizza e comer inteira`,
    `${red}Amores Líquidos${reset} - Acho que só vou descobrir se o Bauman estava certo se eu for nesse bloco`,
    `${red}Minha Luz é de LED${reset} - Acho que tenho fôlego para mais um bloco`,
  ];

  let contadorTurnos = 0;
  let contadorBlocos = 0;

  let paixonite = false;

  // resetar pontos
  status.saude.alterarSaude(0, 0);
  status.energia.alterarEnergia(0, 0);
  status.fome.alterarFome(0, 0);
  status.carisma.alterarCarisma(0, 0);
  status.embriaguez.alterarEmbriaguez(0, 0);

  jogo: while (true) {
    tempo.passaPeriodoManha();
    if (tempo.periodo == "Manhã") {
      console.log(
        `Como deseja começar seu dia?${red}

  1${reset} - Café da manhã de novela${red}
  2${reset} - Hmm... Queria dar um upgrade na minha fantasia${red}
  3${reset} - Tá tão cedo, né? Acho que vou dormir mais um pouquinho${red}
  4${reset} - Já quero começar um esquenta com uns amigos bebendo alguns drinks
          
Digite um dos ${red}números${reset} acima para validar sua escolha`
      );
      let escolha = +prompt();
      while (escolha != 1 && escolha != 2 && escolha != 3 && escolha != 4) {
        console.clear();
        console.log(
          `Como deseja começar seu dia?${red}
    1${reset} - Café da manhã de novela${red}
    2${reset} - Hmm... Queria dar um upgrade na minha fantasia${red}
    3${reset} - Tá tão cedo, né? Acho que vou dormir mais um pouquinho${red}
    4${reset} - Já quero começar um esquenta com uns amigos bebendo alguns drinks
            
Escolha inválida, por favor digite um dos ${red}números${reset} acima para validar sua escolha`
        );
        escolha = +prompt();
      }
      if (escolha == 1) {
        status.fome.alterarFome(50, "somar");
        status.carisma.alterarCarisma(25, "subtrair");
        status.embriaguez.alterarEmbriaguez(15, "subtrair");
        contadorTurnos++;
      } else if (escolha == 2) {
        status.carisma.alterarCarisma(50, "somar");
        contadorTurnos++;
      } else if (escolha == 3) {
        status.energia.alterarEnergia(50, "somar");
        status.carisma.alterarCarisma(25, "subtrair");
        status.embriaguez.alterarEmbriaguez(15, "subtrair");
        contadorTurnos++;
      } else {
        status.embriaguez.alterarEmbriaguez(60, "somar");
        contadorTurnos++;
      }
    }

    console.clear();
    tempo.passaPeriodoTarde();

    if (
      checagemStatus(
        status.saude.pontos,
        status.energia.pontos,
        status.fome.pontos,
        status.embriaguez.pontos
      ) == true
    ) {
      console.log(
        `${reset}Hmm... Acho que você não está muito bem para sair de casa, melhor passar essa
tarde sem muita folia tente descansar e se alimentar melhor


Pressione ${red}ENTER${reset} para continuar`
      );
      prompt();
      tempo.passaPeriodoNoite();
    }

    if (tempo.periodo == "Tarde") {
      console.clear();
      console.log(`É chegada a tão aguardada tarde de folia, você desbloqueia seu celular para
checar o planejamento do dia. Qual dos blocos a seguir você escolheu para a
tarde de hoje?`);
      for (let i of listaBlocos) {
        console.log(i);
      }
      console.log();
      console.log(
        `Por favor digite uma das opções em ${red}vermelho${reset} descritas acima`
      );
      let escolha = prompt().toLowerCase().replace(/ /g, "");
      if (escolha == "sempretensao") {
        escolha = "sempretensão";
      } else if (escolha == "amigosdaonca") {
        escolha = "amigosdaonça";
      }

      while (
        escolha != "tecnobloco" &&
        escolha != "boitolo" &&
        escolha != "naviopirata" &&
        escolha != "amigosdaonça" &&
        escolha != "orquestravoadora" &&
        escolha != "sempretensão" &&
        escolha != "bloco442"
      ) {
        console.clear();
        console.log(`É chegada a tão aguardada tarde de folia, você desbloqueia seu celular para
checar o planejamento do dia. Qual dos blocos a seguir você escolheu para a
tarde de hoje?`);
        for (let i of listaBlocos) {
          console.log(i);
        }
        console.log();
        console.log(
          `Resposta inválida, por favor digite uma das opções em ${red}vermelho${reset} descritas acima!`
        );
        escolha = prompt().toLowerCase().replace(/ /g, "");
        if (escolha == "sempretensao") {
          escolha = "sempretensão";
        } else if (escolha == "amigosdaonca") {
          escolha = "amigosdaonça";
        }
      }

      if (escolha == "tecnobloco") {
        console.clear();

        if (blocos.tecnobloco(status.embriaguez.pontos)) {
          break jogo;
        } else {
          status.saude.alterarSaude(2, "dividir");
          status.energia.alterarEnergia(2, "dividir");
          status.fome.alterarFome(2, "dividir");

          let indice = listaBlocos.indexOf("-" + red + "Tecnobloco" + reset);
          listaBlocos.splice(indice, 1);
          contadorTurnos++;
          contadorBlocos++;
        }
      } else if (escolha == "boitolo") {
        console.clear();

        let indice = listaBlocos.indexOf("-" + red + "Boi Tolo" + reset);
        let retorno = blocos.boiTolo();

        if (retorno == 1) {
          status.energia.alterarEnergia(2, "dividir");
          status.fome.alterarFome(2, "dividir");
          listaBlocos.splice(indice, 1);
          contadorBlocos++;
        } else if (retorno == 2) {
          status.energia.alterarEnergia(75, "subtrair");
          status.fome.alterarFome(50, "subtrair");
          escolhasNoite.push(
            `${red}Praça São Salvador${reset} - Encontrar os amigos que fez no bloco Boi Tolo para beber algo`
          );
          listaBlocos.splice(indice, 1);
          contadorBlocos++;
        } else {
          status.energia.alterarEnergia(15, "subtrair");
          status.embriaguez.alterarEmbriaguez(20, "somar");
        }

        contadorTurnos++;
      } else if (escolha == "naviopirata") {
        console.clear();

        if (blocos.navioPirata(status.embriaguez.pontos) == true) {
          status.saude.alterarSaude(75, "subtrair");
          status.carisma.alterarCarisma(75, "subtrair");
        } else {
          status.energia.alterarEnergia(2, "dividir");
          status.fome.alterarFome(2, "dividir");
        }

        let indice = listaBlocos.indexOf("-" + red + "Navio Pirata" + reset);
        listaBlocos.splice(indice, 1);
        contadorTurnos++;
        contadorBlocos++;
      } else if (escolha == "amigosdaonça") {
        console.clear();

        if (blocos.amigosDaOnca() == true) {
          status.saude.alterarSaude(25, "subtrair");
        } else {
          status.embriaguez.alterarEmbriaguez(20, "somar");
        }

        let indice = listaBlocos.indexOf("-" + red + "Amigos da Onça" + reset);
        listaBlocos.splice(indice, 1);
        contadorTurnos++;
        contadorBlocos++;
      } else if (escolha == "orquestravoadora") {
        console.clear();

        let retorno = blocos.orquestraVoadora();
        if (retorno == 1) {
          break jogo;
        } else if (retorno == 2) {
          status.carisma.alterarCarisma(25, "subtrair");
          status.saude.alterarSaude(25, "subtrair");
        }

        let indice = listaBlocos.indexOf(
          "-" + red + "Orquestra Voadora" + reset
        );
        listaBlocos.splice(indice, 1);
        contadorTurnos++;
        contadorBlocos++;
      } else if (escolha == "sempretensão") {
        console.clear();

        if (blocos.semPretensao() == true) {
          status.carisma.alterarCarisma(25, "somar");
        } else {
          status.saude.alterarSaude(15, "subtrair");
        }

        status.energia.alterarEnergia(20, "subtrair");
        status.fome.alterarFome(20, "subtrair");

        let indice = listaBlocos.indexOf("-" + red + "Sem Pretensão" + reset);
        listaBlocos.splice(indice, 1);
        contadorTurnos++;
        contadorBlocos++;
      } else {
        console.clear();

        if (blocos.bloco442() == true) {
          paixonite = true;
        } else {
          status.carisma.alterarCarisma(25, "subtrair");
        }

        let indice = listaBlocos.indexOf("-" + red + "Bloco442" + reset);
        listaBlocos.splice(indice, 1);
        contadorTurnos++;
        contadorBlocos++;
      }
    }

    tempo.passaPeriodoNoite();
    if (tempo.periodo == "Noite") {
      console.clear();
      console.log(
        `É chegada a noite você teve uma tarde e tanto, mas o dia ainda não acabou você 
pode escolher entre começar a se recuperar ou fazer uma outra programação. Suas 
opções estão listadas abaixo:
`
      );
      for (let i of escolhasNoite) {
        console.log(i);
      }
      console.log(`
Digite uma das opções em ${red}vermelho${reset} para efetuar sua escolha`);

      let escolha = prompt().toLowerCase().replace(/ /g, "");
      if (escolha == "amoresliquidos") {
        escolha = "amoreslíquidos";
      } else if (escolha == "minhaluzedeled") {
        escolha = "minhaluzédeled";
      } else if (escolha == "praçasaosalvador") {
        escolha = "praçasãosalvador";
      }

      while (
        escolha != "dormir" &&
        escolha != "skincare" &&
        escolha != "pedirpizza" &&
        escolha != "minhaluzédeled" &&
        escolha != "amoreslíquidos" &&
        escolha != "praçasãosalvador"
      ) {
        console.clear();
        console.log(
          `É chegada a noite você teve uma tarde e tanto, mas o dia ainda não acabou você 
pode escolher entre começar a se recuperar ou fazer uma outra programação. Suas 
opções estão listadas abaixo:`
        );
        for (let i of escolhasNoite) {
          console.log(i);
        }
        console.log(`
Resposta inválida, digite uma das opções em ${red}vermelho${reset} para efetuar sua escolha`);

        escolha = prompt().toLowerCase().replace(/ /g, "");
        if (escolha == "amoresliquidos") {
          escolha = "amoreslíquidos";
        } else if (escolha == "minhaluzedeled") {
          escolha = "minhaluzédeled";
        } else if (escolha == "praçasaosalvador") {
          escolha = "praçasãosalvador";
        }
      }

      if (escolha == "dormir") {
        status.energia.alterarEnergia(50, "somar");
        status.embriaguez.alterarEmbriaguez(25, "subtrair");
        status.saude.alterarSaude(25, "somar");
        contadorTurnos++;
      } else if (escolha === "skincare") {
        status.carisma.alterarCarisma(50, "somar");
        contadorTurnos++;
      } else if (escolha == "pedirpizza") {
        status.fome.alterarFome(50, "somar");
        status.embriaguez.alterarEmbriaguez(25, "subtrair");
        contadorTurnos++;
      } else if (escolha == "minhaluzédeled") {
        console.clear();

        blocos.minhaLuzDeLED();
        let indice = escolhasNoite.indexOf(
          `${red}Minha Luz é de LED${reset} - Acho que tenho fôlego para mais um bloco`
        );
        status.energia.alterarEnergia(2, "dividir");
        status.fome.alterarFome(2, "dividir");
        escolhasNoite.splice(indice, 1);
        contadorTurnos++;
        contadorBlocos++;
      } else if (escolha == "amoreslíquidos") {
        console.clear();

        if (blocos.amoresLiquidos(status.carisma.pontos) == true) {
          listaBlocos.push("-" + red + "Bloco442" + reset);
        }
        let indice = escolhasNoite.indexOf(
          `${red}Amores Líquidos${reset} - Acho que só vou descobrir se o Bauman estava certo se eu for nesse bloco`
        );
        escolhasNoite.splice(indice, 1);

        status.energia.alterarEnergia(50, "subtrair");
        status.fome.alterarFome(50, "subtrair");
        contadorTurnos++;
        contadorBlocos++;
      } else {
        console.clear();

        status.embriaguez.alterarEmbriaguez(50, "somar");
        status.saude.alterarSaude(40, "subtrair");
        status.carisma.alterarCarisma(25, "subtrair");

        console.log(
          `Você manda uma mensagem para galera que conheceu no Boi Tolo e vocês marcam 
de tomar uma cerveja na praça São Salvador. Chegando lá você os avista 
na mesa de um bar e faz aquele ritual de sempre, cumprimenta todo mundo, 
apresenta seus amigos e blabla. Vocês começam com uma rodada de cerveja 
que acaba rapidamente, então pedem outra, outra, outra e outra... Quando 
se dão conta todos estão completamente bêbados. De repente, alguém tem 
a brilhante ideia de ir para a Praia do Flamengo nadar, porém ninguém 
te conta que a água dessa praia é imprópria pra banho. Que furada...


Pressione ${red}ENTER${reset} para continuar`
        );
        prompt();

        let indice = escolhasNoite.indexOf(
          `${red}Praça São Salvador${reset} - Encontrar os amigos que fez no bloco Boi Tolo para beber algo`
        );
        escolhasNoite.splice(indice, 1);
      }

      if (contadorTurnos == 12) {
        console.clear();
        if (paixonite == true) {
          console.log(
            `Parabéns!!! Você conseguiu sobreviver ao carnaval, talvez tenha rolado um percalço aqui
ou lá, mas o importante é que no fim tudo deu certo. Você foi em ${contadorBlocos} blocos diferentes,
ou seja, vai ter muito história pra contar. Além disso, você viveu um romance digno de cinema, quem 
sabe próximo Carnaval vocês não passam lado a lado
            
            
Pressione ${red}ENTER${reset} para continuar`
          );
          prompt();
        } else {
          console.log(
            `Parabéns!!! Você conseguiu sobreviver ao carnaval, talvez tenha rolado um percalço aqui
ou lá, mas o importante é que no fim tudo deu certo. Você foi em ${contadorBlocos} blocos diferentes,
ou seja, vai ter muito história pra contar.
            
            
Pressione ${red}ENTER${reset} para continuar`
          );
          prompt();
        }
        break jogo;
      }

      console.clear();
    }
  }

  console.clear();

  console.log(
    `Se você deseja jogar novamente digite '${red}S${reset}', se deseja parar por aqui digite '${red}N${reset}'`
  );
  let recomecar = prompt().toLowerCase();
  while (recomecar != "s" && recomecar != "n") {
    console.clear();
    console.log(
      `Se você deseja jogar novamente digite '${red}S${reset}', se deseja parar por aqui digite '${red}N${reset}'
      
      Resposta inválida, por favor tente novamente`
    );
    recomecar = prompt().toLowerCase();
  }

  if (recomecar == "s") {
    console.clear();
    continue carnaventure;
  } else {
    break carnaventure;
  }
}
