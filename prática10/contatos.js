document.addEventListener("DOMContentLoaded", function () {
    // Este código será executado quando a DOM estiver completamente carregada.

    function enviarMensagem() {
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var mensagem = document.getElementById("mensagem").value;

        // Verifica se os campos obrigatórios foram preenchidos
        if (nome && email && mensagem) {
            // Redireciona para a página de cadastro
            window.location.href = "pagina-de-cadastro.html";
        } else {
            alert("Por favor, preencha todos os campos obrigatórios.");
        }
    }

    // Associando a função enviarMensagem ao clique do botão
    document.getElementById("enviarBtn").addEventListener("click", enviarMensagem);

    // Se houver outras funções JavaScript, você pode adicioná-las aqui.

});
