const disparos = [0, 50, 90, 80, 100, 80, 40];

    //quando disparo for maior que 70
    //contabilize 1 ponto

let pontuacao = 0;

    for (let pontos of disparos){
        if (pontos > 70){
            pontuacao += 1;
        }
    }
        if (pontuacao >= 3){
            console.log(pontuacao);
        }
        else {
            console.log("ELIMINADO");
        }

    