document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    const errorPopup = document.getElementById("error-popup");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = loginForm.elements.username.value;
        const password = loginForm.elements.password.value;

        // Verifique as credenciais (substitua isso por seu próprio mecanismo de verificação)
        if (username === "Arthur" && password === "123@qwe") {
            // Redirecionar para a página desejada
            window.location.href = "http://127.0.0.1:5500/front/html/lista.html";
        } else {
            // Exibir mensagem de erro
            errorMessage.textContent = "Credenciais inválidas. Tente novamente.";
            errorPopup.style.display = "block";

            // Defina a posição do erro fora do quadrado de login
            errorPopup.style.top = "10px"; // Altura personalizada
            errorPopup.style.left = "50%";
            errorPopup.style.transform = "translateX(-50%)";
        }

        // Altere o conteúdo do elemento "error-message"
        errorMessage.textContent = "Usuário 'Arthur' não encontrado. Tente novamente.";

        // Altere o estilo do texto da mensagem de erro
        errorMessage.style.color = "red";
        errorMessage.style.fontWeight = "bold";

        // Adicione um botão para fechar o pop-up
        const closeButton = document.createElement("button");
        closeButton.textContent = "Fechar";
        closeButton.addEventListener("click", function () {
            errorPopup.style.display = "none";
        });
        errorPopup.appendChild(closeButton);

        // Adicione um temporizador para esconder a mensagem de erro
        const timer = setTimeout(function () {
            errorPopup.style.display = "none";
        }, 5000);

        // Desative o temporizador se o usuário clicar no botão "Fechar"
        closeButton.addEventListener("click", function () {
            clearTimeout(timer);
        });

    });
});
