sequencia = ">>>>>>>>>";

let numero = 0;

    for (let clique of sequencia){
        if (clique == ">" && numero == 6){
            clique = 0;
            numero = clique;
        } else if (clique == "<" && numero == -1){
            clique = 6;
            numero = clique;
        }
        
        if (clique == ">"){
            clique = 1;
            numero += clique;
        } else if (clique == "<"){
            clique = -1;
            numero += clique;
        }
    }
    console.log(numero);