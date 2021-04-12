var lista = [];
var elementoSelecionado = -1;
var indice;

$(document).ready
  (function () {
    $('#atual').hide();
    $('#inclu').show();
  });

function incluir() {
  var nome = document.getElementById('nome').value;
  var quantidade = document.getElementById('qtd').value;
  var preco = document.getElementById('preco').value;
  var produto = {
    'nome': nome,
    'quantidade': quantidade,
    'preco': preco
  }
  if (produto.nome.length <= 3) {
    document.getElementById('nome').style.border = '2px solid rgb(219, 61, 61)'
    document.getElementById('erroNome').innerText = 'Confira se o nome possui mais de 3 caracteres.'
    document.getElementsByClassName('backgroundDiv')[0].style.height = '570px'
  }
  else if (isNaN(produto.quantidade) || produto.quantidade < 0) {
    document.getElementById('qtd').style.border = '2px solid rgb(219, 61, 61)'
    document.getElementById('erroQtd').innerText = 'Confira se a quantidade informada é um número ou um número postivo.'
    document.getElementsByClassName('backgroundDiv')[0].style.height = '570px'
  }
  else if (isNaN(produto.preco) || produto.preco < 0) {
    document.getElementById('preco').style.border = '2px solid rgb(219, 61, 61)'
    document.getElementById('erroPreco').innerText = 'Confira se o preço informado é um número ou um número postivo.'
    document.getElementsByClassName('backgroundDiv')[0].style.height = '570px'
  }
  else {
    document.getElementById('nome').style.border = '2px solid gray'
    document.getElementById('qtd').style.border = '2px solid gray'
    document.getElementById('preco').style.border = '2px solid gray'
    document.getElementById('erroNome').innerText = ''
    document.getElementById('erroQtd').innerText = ''
    document.getElementById('erroPreco').innerText = ''
    document.getElementsByClassName('backgroundDiv')[0].style.height = '440px'
    lista.push(produto);
    listar();
    document.getElementById('qtdLiItem').innerHTML = `Quantidade de Itens: ${lista.length}`
    mostrarmensagem("> Produto incluído na lista!");
  }
}

function listar() {
  var listaUL = '';
  for (var i = 0; i < lista.length; i++) {
    var produto = lista[i];
    var conteudo = '<li>';
    conteudo += produto.nome;
    conteudo += ' - ';
    conteudo += produto.quantidade;
    conteudo += ' - ';
    conteudo += produto.preco;
    conteudo += ' - ';
    conteudo += '<button type="button" onclick="excluir(' + i + ')">Excluir</button>';
    conteudo += ' - ';
    conteudo += '<button onclick="alterar(' + i + ')">Alterar</button>';
    conteudo += '</li>';
    listaUL += conteudo;
  }
  document.getElementById('lista').innerHTML = listaUL;
}

function excluir(indice) {
  lista.splice(indice, 1);
  listar();
  document.getElementById('qtdLiItem').innerHTML = `Quantidade de Itens: ${lista.length}`
  mostrarmensagem("> Produto excluído da lista!");
}

function alterar(indice) {
  elementoSelecionado = indice;
  var produto = lista[elementoSelecionado];
  document.getElementById('nome').value = produto.nome;
  document.getElementById('qtd').value = produto.quantidade;
  document.getElementById('preco').value = produto.preco;
  $('#atual').show();
  $('#inclu').hide();
}

function atualizar() {
  var nome = document.getElementById('nome').value;
  var quantidade = document.getElementById('qtd').value;
  var preco = document.getElementById('preco').value;
  var produto = {
    'nome': nome,
    'quantidade': quantidade,
    'preco': preco
  };
  if (produto.nome.length <= 3) {
    document.getElementById('nome').style.border = '2px solid rgb(219, 61, 61)'
    document.getElementById('erroNome').innerText = 'Confira se o nome possui mais de 3 caracteres.'
    document.getElementsByClassName('backgroundDiv')[0].style.height = '570px'
  }
  else if (isNaN(produto.quantidade) || produto.quantidade < 0) {
    document.getElementById('qtd').style.border = '2px solid rgb(219, 61, 61)'
    document.getElementById('erroQtd').innerText = 'Confira se a quantidade informada é um número ou um número postivo.'
    document.getElementsByClassName('backgroundDiv')[0].style.height = '570px'
  }
  else if (isNaN(produto.preco) || produto.preco < 0) {
    document.getElementById('preco').style.border = '2px solid rgb(219, 61, 61)'
    document.getElementById('erroPreco').innerText = 'Confira se o preço informado é um número ou um número postivo.'
    document.getElementsByClassName('backgroundDiv')[0].style.height = '570px'
  }
  else {
    document.getElementById('nome').style.border = '2px solid gray'
    document.getElementById('qtd').style.border = '2px solid gray'
    document.getElementById('preco').style.border = '2px solid gray'
    document.getElementById('erroNome').innerText = ''
    document.getElementById('erroQtd').innerText = ''
    document.getElementById('erroPreco').innerText = ''
    document.getElementsByClassName('backgroundDiv')[0].style.height = '440px'
    lista[elementoSelecionado] = produto;
    elementoSelecionado = -1;
    $('#atual').hide();
    $('#inclu').show();
    listar();
    mostrarmensagem("> Produto alterado e atualizado na lista!");
  }
}

function mostrarmensagem(msg) {
  var mensagem = msg;
  document.getElementById('mensagem').innerHTML = mensagem;
}

function mlkFino() {
  var headerOn = document.getElementById('headerOn')
  var name = document.getElementById('name');
  document.getElementById('name').innerHTML = 'Mlk Gente Boa! ༼ つ ◕_◕ ༽つ';
  name.style.color = 'whitesmoke';
  name.style.fontFamily = 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'
  headerOn.style.background = 'royalblue';
  headerOn.style.transition = '0.3s'
  headerOn.style.borderRadius = '10px'
}

function normal() {
  var headerOn = document.getElementById('headerOn')
  var name = document.getElementById('name');
  document.getElementById('name').innerHTML = 'Felipe Marques de Stefano';
  name.style.color = 'black';
  name.style.fontFamily = 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'
  headerOn.style.background = 'whitesmoke';
  headerOn.style.transition = '0.3s'
  headerOn.style.borderRadius = '10px'
}

function salvar() {
  if(lista.length <= 0){
    mostrarmensagem('> Nenhum produto incluído não gera arquivo!')
  }
  else{
  let texto = document.getElementById('lista').innerText;
  let titulo = "Produtos";
  let blob = new Blob([texto],
    {
      type: "text/plain;charset=utf-8"
    });
    saveAs(blob, titulo + ".txt");
    mostrarmensagem('> Arquivo "Produtos" salvo!')
  }
};

//Desafio : Passar informações da lista para um arquivo .txt e incluir botão para apagar todos os produtos da lista.
