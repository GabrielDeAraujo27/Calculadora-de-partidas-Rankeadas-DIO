var jogador = [
    { nome: "Player1", wt: 231, lt: 53 },
    { nome: "Player2", wt: 89, lt: 89 },
    { nome: "Player3", wt: 141, lt: 80 },
];

function calcularPontuacao(wt, lt) {
    return wt - lt;
}

function rankearPartidas(nome, wt, lt) {
    var pontuacao = calcularPontuacao(wt, lt);
    var rank;

    switch (true) {
        case (pontuacao <= 10):
            rank = "Ferro";
            break;
        case (pontuacao >= 11 && pontuacao <= 20):
            rank = "Bronze";
            break;
        case (pontuacao >= 21 && pontuacao <= 50):
            rank = "Prata";
            break;
        case (pontuacao >= 51 && pontuacao <= 80):
            rank = "Ouro";
            break;
        case (pontuacao >= 81 && pontuacao <= 90):
            rank = "Diamante";
            break;
        case (pontuacao >= 91 && pontuacao <= 100):
            rank = "Lendario";
            break;
        case (pontuacao >= 101):
            rank = "Imortal";
            break;
    }

    console.log(`O jogador ${nome} está no rank ${rank} com pontuação ${pontuacao}`);
}

for (var i = 0; i < jogador.length; i++) {
    var jogadorRank = jogador[i];
    rankearPartidas(jogadorRank.nome, jogadorRank.wt, jogadorRank.lt);
}