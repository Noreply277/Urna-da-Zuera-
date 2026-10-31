const somUrna = new Audio("SONS/confirma-urna.");
const candidatos = {
    "13": {
        nome: "LULADROID",
        partido: "PTF",
        foto: "PHOTOS/candidato1.JPG.jpg"
    },

    "55": {
        nome: "ZOIO",
        partido: "PM",
        foto: "PHOTOS/candidato2.JPG.jpg"
    },

    "77": {
        nome: "Ednaldo Pereira",
        partido: "PB",
        foto: "PHOTOS/candidato3.WEBP.webp"
    },

    "24": {
        nome: "Duny",
        partido: "PTR",
        foto: "PHOTOS/candidato4.WEBP.webp"
    },

    "22": {
        nome: "GLaDOS",
        partido: "PAC",
        foto: "PHOTOS/candidato5.WEBP.webp"
    }
};

let voto = "";

function digitar(numero) {

    if (voto.length < 2) {
        voto += numero;
        atualizarTela();
    }

}

function atualizarTela() {

    document.getElementById("digito1").textContent =
        voto[0] || "";

    document.getElementById("digito2").textContent =
        voto[1] || "";

    const candidato = candidatos[voto];

    if (candidato) {

        document.getElementById("nome").textContent =
            candidato.nome;

        document.getElementById("partido").textContent =
            candidato.partido;

        document.getElementById("numero").textContent =
            voto;

        document.getElementById("foto").src =
            candidato.foto;

        document.getElementById("mensagem").textContent = "";

    } else {

        document.getElementById("nome").textContent = "---";
        document.getElementById("partido").textContent = "---";
        document.getElementById("numero").textContent = "---";
        document.getElementById("foto").src =
            "PHOTOS/candidato1.jpg.jpg";

    }

}

function corrigir() {

    voto = "";
    atualizarTela();

    document.getElementById("mensagem").textContent =
        "Digite novamente.";

}

function confirmar() {

    if (voto.length !== 2) {
        alert("Digite o número do candidato!");
        return;
    }

    if (!candidatos[voto]) {
        alert("Candidato não encontrado!");
        return;
    }

    const candidato = candidatos[voto];

    alert("Voto confirmado para: " + candidato.nome);

    voto = "";
    atualizarTela();

    document.getElementById("mensagem").textContent =
        "VOTO CONFIRMADO!";

}
