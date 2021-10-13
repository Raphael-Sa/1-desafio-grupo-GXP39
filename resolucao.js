// Resolução da primeira questão:

function exercicio01 (listaProdutos) {
    var lista = 0;
    for (var i = 0;i < listaProdutos.length; i++) {
        lista += listaProdutos[i].qtdEstoque; 
    }
    return lista;
}
var primeiraLista = exercicio01 (listaProdutos);

console.log(`${primeiraLista} produtos encontrados.`)

// Resolução da segunda questão: 

function exercicio02 (listaProdutos, yes) {
    var destaque = [];
    for (var i = 0;i < listaProdutos.length; i++) {
        if (listaProdutos[i].emDestaque == yes) {
            destaque.push(listaProdutos[i]);
        }
    }
    return destaque;
}

var segundaLista = exercicio02 (listaProdutos, "sim");

console.log (`${segundaLista.length} produtos encontrados.`);

// Resolução da terceira questão:

function exercicio03 (listaProdutos, yes) {
    var dispo = [];

    for (var i = 0; i < listaProdutos.length; i++) {
        if (listaProdutos[i].disponivel == yes) {
            dispo.push(listaProdutos[i]);
        }
    }
    return dispo;
}

var terceiraLista = exercicio03 (listaProdutos, "sim");

console.log (`${terceiraLista.length} produtos encontrados.`);

// Resolução da quarta questão

function exercicio04 (listaProdutos, yes) {
    var presente = [];

    for (var i = 0; i < listaProdutos.length; i++) {
        if (listaProdutos[i].disponivel == yes && listaProdutos[i].emDestaque == yes) {
            presente.push(listaProdutos[i]);
        }
    }
    return presente;
}

var quartaLista = exercicio04 (listaProdutos, "sim");
console.log (`${quartaLista.length} produtos encontrados.`);

//  Resolução da quinta questão
function exercicio05() {
    let valorTotal = 0;
    for (let i=0; i<listaProdutos.length; i++){
        if (listaProdutos[i].qtdEstoque > 0){
            valorTotal += (listaProdutos[i].preco * listaProdutos[i].qtdEstoque);
        }
    }
    console.log(`O Valor total do inventário da empresa é R$ ${valorTotal}`);
    return valorTotal;        
};
    exercicio05()
    
//  Resolução da sexta questão

function exercicio06() {
    let produtoMaisCaro = listaProdutos[0];
    for (let i=1; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        if (produto.preco > produtoMaisCaro.preco){
            produtoMaisCaro = produto;
        }
    }
    console.log(`O produto mais caro da empresa é: ${produtoMaisCaro.descricao}`);
}
    exercicio06()

//  Resolução da sétima questão

function exercicio07() {
    let produtoMaisBarato = listaProdutos [0];
    for (i=1; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        if (produto.preco < produtoMaisBarato.preco){
            produtoMaisBarato = produto;
        }
    }
    console.log(`O produto mais barato da empresa é: ${produtoMaisBarato.descricao}`);
}
    exercicio07()

//  Resolução da oitava questão

function exercicio08() {
    let estoqueMaisValioso = listaProdutos [0];
    for (i=1; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        if (produto.qtdEstoque > 0){
            if (produto.preco * produto.qtdEstoque > estoqueMaisValioso.preco * estoqueMaisValioso.qtdEstoque) {
                estoqueMaisValioso = produto;
            }
        }
     }
    console.log(`O estoque mais valioso é do produto ${estoqueMaisValioso.descricao} cujo valor está estimado em R$ 
    ${estoqueMaisValioso.preco*estoqueMaisValioso.qtdEstoque}`)
}
    exercicio08()

//  Resolução da nona questão

function exercicio09() {
    let estoqueMenosValioso = listaProdutos [0];
    for (i=1; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        if (produto.qtdEstoque > 0){
            if (produto.preco * produto.qtdEstoque < estoqueMenosValioso.preco * estoqueMenosValioso.qtdEstoque) {
                estoqueMenosValioso = produto;
            }
        }
    }
    console.log(`O estoque menos valioso é do produto ${estoqueMenosValioso.descricao} cujo valor está estimado em R$
    ${estoqueMenosValioso.preco*estoqueMenosValioso.qtdEstoque}`)
    return estoqueMenosValioso
}
    exercicio09()

// Resolução da décima questão

function exercicio10() {
    let valorProduto = 0; 
    for (i=0; i<listaProdutos.length; i++){
        valorProduto += listaProdutos[i].preco;
    }
    let ticketMedio = valorProduto / listaProdutos.length;   
    console.log(`O valor do ticket médio é de ${ticketMedio.toFixed(2)}`)
    return valorProduto
}    
    exercicio10()

// Resolução da décima primeira questão: 

function Exercicio11(Products, value) {
    var departArray = [];
    for (var i = 0; i < Products.length; i++) {
      departArray.push(Products[i].departamento.nomeDepto);
    }
  
    var departaments = [...new Set(departArray)],
      qntd = 0,
      finalArray = [];
  
    for (var i = 0; i < departaments.length; i++) {
      for (var x = 0; x < Products.length; x++) {
        if (
          Products[x].disponivel === value &&
          Products[x].departamento.nomeDepto === departaments[i]
        ) {
          qntd += 1;
        }
      }
  
      finalArray.push({ Departamento: departaments[i], Quantidade: qntd });
      qntd = 0;
    }
  
    return finalArray;
  }
  
  var exercicio11 = Exercicio11(listaProdutos, "sim");
  
  console.log(`11º) ARRAY COM DEPARTAMENTO / QUANTIDADE ▼:`);
  console.log(exercicio11);
  
  // Resolução da décima segunda questão:

  function Exercicio12(Products) {
    var departArray = [];
    for (var i = 0; i < Products.length; i++) {
      departArray.push(Products[i].departamento.nomeDepto);
    }
  
    var departaments = [...new Set(departArray)],
      qntd = 0,
      finalArray = [];
  
    for (var i = 0; i < departaments.length; i++) {
      for (var x = 0; x < Products.length; x++) {
        if (Products[x].departamento.nomeDepto === departaments[i]) {
          qntd += Products[x].preco * Products[x].qtdEstoque;
        }
      }
  
      finalArray.push({ Departamento: departaments[i], Inventario: qntd });
      qntd = 0;
    }
  
    return finalArray;
  }
  
  var exercicio12 = Exercicio12(listaProdutos);
  
  console.log(`12º) ARRAY COM DEPARTAMENTO / INVENTÁRIO ▼:`);
  console.log(exercicio12);
  
  // Resolução da décima terceira questão:

  function Exercicio13(Products) {
    var departArray = [];
    for (var i = 0; i < Products.length; i++) {
      departArray.push(Products[i].departamento.nomeDepto);
    }
  
    var departaments = [...new Set(departArray)],
      preco = 0,
      qntd = 0,
      media = 0,
      finalArray = [];
  
    for (var i = 0; i < departaments.length; i++) {
      for (var x = 0; x < Products.length; x++) {
        if (departaments[i] == Products[x].departamento.nomeDepto) {
          preco += Products[x].preco;
          qntd += Products[x].qtdEstoque;
        }
      }
  
      media = preco / qntd;
      finalArray.push({ Departamento: departaments[i], TicketMedio: media });
      preco = 0;
      qntd = 0;
    }
  
    return finalArray;
  }
  
  var exercicio13 = Exercicio13(listaProdutos);
  
  console.log(`13º) ARRAY COM DEPARTAMENTO / TICKET MÉDIO ▼:`);
  console.log(exercicio13);
  
  // Resolução da décima quarta questão:

  function Exercicio14(Products) {
    var departArray = [];
    for (var i = 0; i < Products.length; i++) {
      departArray.push(Products[i].departamento.nomeDepto);
    }
  
    var departaments = [...new Set(departArray)],
      preco,
      depart,
      valParc = 0,
      finalArray = [];
  
    for (var i = 0; i < departaments.length; i++) {
      preco = 0;
  
      for (var x = 0; x < Products.length; x++) {
        if (departaments[i] == Products[x].departamento.nomeDepto) {
          preco += Products[x].preco;
        }
      }
  
      valParc == 0 ? (valParc = preco) : "";
  
      if (preco > valParc) {
        valParc = preco;
        depart = departaments[i];
      }
    }
  
    finalArray.push({ Departamento: depart, Somatorio: valParc });
  
    return finalArray;
  }
  
  var exercicio14 = Exercicio14(listaProdutos);
  
  console.log(`14º) ARRAY COM DEPARTAMENTO / SOMATÓRIO MAIS VALIOSO ▼:`);
  console.log(exercicio14);
  
  
  // Resolução da décima quinta questão:

  function Exercicio15(Products) {
    var departArray = [];
    for (var i = 0; i < Products.length; i++) {
      departArray.push(Products[i].departamento.nomeDepto);
    }
  
    var departaments = [...new Set(departArray)],
      preco,
      depart,
      valParc = 0,
      finalArray = [];
  
    for (var i = 0; i < departaments.length; i++) {
      preco = 0;
  
      for (var x = 0; x < Products.length; x++) {
        if (departaments[i] == Products[x].departamento.nomeDepto) {
          preco += Products[x].preco;
        }
      }
  
      valParc == 0 ? (valParc = preco) : "";
  
      if (preco < valParc) {
        valParc = preco;
        depart = departaments[i];
      }
    }
  
    finalArray.push({ Departamento: depart, Somatorio: valParc });
  
    return finalArray;
  }
  
  var exercicio15 = Exercicio15(listaProdutos);
  
  console.log(`15º) ARRAY COM DEPARTAMENTO / SOMATÓRIO MENOS VALIOSO ▼:`);
  console.log(exercicio15);
