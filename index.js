import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente('Iuri', 1122334455);
const conta1 = new ContaCorrente(cliente1, 1002);

// conta1.depositar(500);

const contaPoupanca = new ContaPoupanca(100, cliente1, 1001);
console.log(contaPoupanca);

const conta = new Conta(0, cliente1, 1001);

console.log(conta1);
console.log(ContaCorrente.numeroDeContas);