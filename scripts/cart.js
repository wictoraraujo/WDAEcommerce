//Recebe os dados do Produto em forma de string e transforma para formato de objeto
const productStr = localStorage.getItem('product');

const productObj = JSON.parse(productStr);

//Preencher a tabela Janela do Cart com os dados do produto
const getNameProduct = document.getElementById('name');
const getPrice = document.getElementById('price');
const getQuantity = document.getElementById('quantity');

getNameProduct.insertAdjacentHTML('afterbegin', productObj.name);
getPrice.insertAdjacentHTML('afterbegin', productObj.price);
getQuantity.insertAdjacentHTML('afterbegin', productObj.quantity);

//Ação do botão Continuar Comprando
//retornando a página Inicial
function returnPage(){
    window.location.href = "/";
}

/*Ação do botão Finalizar compra
    Ao finalizar ele salva os dados do produto no local storage e torna visível a tela de cadastro do cliente que vem a ser a etapa final*/
function saveDataProduct(){

    const getDiv = document.querySelector('.client');
    
    if(productObj.name !== "" && productObj.price !== "" && productObj.quantity !== ""){
        
        alert('Para finalizar sua compra, precisamos que preencha o cadastro abaixo com seus dados. Obrigado por comprar conosco. Volte Sempre!');
    
        getDiv.style.display = "flex";
    }
    else{
        alert('Não existe itens no carrinho, volte para adicionar um item.')
    } 
}

//salvar os dados do cliente no local storage
function saveDataClient(){

    const getNameClient = document.getElementById('client-name').value;
    const getEmailClient = document.getElementById('client-email').value;
    const getAddressClient = document.getElementById('client-address').value;

    let client = [
        {
            name: getNameClient,
            email: getEmailClient,
            address: getAddressClient
        }
    ]

    if(getNameClient !== "" && getEmailClient !== "" && getAddressClient !== ""){
        localStorage.setItem('client', JSON.stringify(client));
        alert('Cadastrado Finalizado');
    }
    else{
        alert('Preencha todos os campos para finalizar a compra');
    }

}