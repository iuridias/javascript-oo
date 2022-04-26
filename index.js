import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = 'Iuri';
cliente1.cpf = 11223344556;

const cliente2 = new Cliente();
cliente2.nome = 'Nath';
cliente2.cpf = 1128998784;

const contaCorrenteIuri = new ContaCorrente();
contaCorrenteIuri.agencia = 2001;
contaCorrenteIuri.cliente = cliente1;
contaCorrenteIuri.depositar(500);

const conta2 = new ContaCorrente();
conta2.agencia = 2001;
conta2.cliente = cliente2;

let valor = 200;

contaCorrenteIuri.transferir(valor, conta2);

console.log(contaCorrenteIuri);
console.log(conta2);