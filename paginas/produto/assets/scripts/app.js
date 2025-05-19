// FOTOS DO PRODUTO
function changeImage(src) {
    const mainImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    mainImage.src = src;

    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    const selected = Array.from(thumbnails).find(img => img.src.includes(src));
    if (selected) selected.classList.add('active');
}

// FAVORITAR
  const icon = document.getElementById('favorite-icon');
  icon.addEventListener('click', () => {
    icon.classList.toggle('bi-heart');
    icon.classList.toggle('bi-heart-fill');
    icon.style.color = icon.classList.contains('bi-heart-fill') ? '#DDA42A' : 'black';
});


// TIPO


// DROPDOWN (QUANTIDADE)
function toggleDropdown() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}

function selecionarQuantidade(qtd) {
    document.querySelector(".dropdown-toggle").textContent = `Quantidade: ${qtd}`;
    document.getElementById("dropdown-menu").classList.remove("show");

    // Resetar input personalizado se voltar a selecionar valores padrão
    document.getElementById("input-personalizado").classList.add("hidden");
    document.getElementById("opcao-mais-6").classList.remove("hidden");
}

function mostrarInputPersonalizado() {
    document.getElementById("opcao-mais-6").classList.add("hidden");
    document.getElementById("input-personalizado").classList.remove("hidden");
    document.getElementById("quantidade").focus();
}

function aplicarQuantidade() {
    const qtd = document.getElementById("quantidade").value;
    if (qtd && qtd >= 7) {
        document.querySelector(".dropdown-toggle").textContent = `Quantidade: ${qtd}`;
        document.getElementById("dropdown-menu").classList.remove("show");
    } else {
        alert("Digite um número maior ou igual a 7");
    }
}

// Fecha dropdown ao clicar fora
window.addEventListener("click", function (e) {
    const dropdown = document.getElementById("dropdown");
    if (!dropdown.contains(e.target)) {
        document.getElementById("dropdown-menu").classList.remove("show");
    }
});



