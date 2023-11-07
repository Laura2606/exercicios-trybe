// const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

// try {
//   const data = fs.readFileSync(nomeDoArquivo, 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(`Erro ao ler o arquivo: ${err.path}`);
//   console.log(err);
// }

const fs = require('fs').promises;
async function main() {
    try {
          const data = await fs.readFile(nomeDoArquivo, 'utf8');
          console.log(data);
        } catch (err) {
          console.error(`Erro ao ler o arquivo: ${err.path}`);
          console.log(err);
        }
}

main()

//Note que para podermos utilizar o async/await, precisamos criar uma função main e colocar nossa lógica dentro dela. 
//Isso acontece porque o await só pode ser utilizado dentro de funções async.