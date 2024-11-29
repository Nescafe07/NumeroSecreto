function numeroSecreto() {
    const nome = prompt("Entre com o nome: ");
    const max = prompt("Quantos números terá no jogo? ")
    const n = Math.floor(Math.random() * max + 1);
    alert("VAMOS COMEÇAR O JOGO!!!")
    let i = 1;
    let x = max+1;
    while (x != n) {
        x = prompt("Entre com um número: ")
        if (x == n) {
            break
        }
           else if (x > n) {
            alert("Está quase lá. O número é menor!")
        }
            else if (x < n) {
            alert("Está quase lá. O número é maior!")
        }
       
        i++;
    } 
    if (i == 1 ) {
        alert("Parabéns "+nome+", Você acertou!!! " +
            "O número era: " + n + ". Você acertou em " + i + " tentativa.")
    } else {
    alert("Parabéns "+nome+", Você acertou!!! " +
        "O número era: " + n + ". Você acertou em " + i + " tentativas.")
    }
}