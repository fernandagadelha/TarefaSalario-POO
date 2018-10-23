declare function require(msg : string) : any;
var readline = require('readline-sync');

import {Funcionario} from "./Funcionario";
import {Professor} from "./Professor";
import {STA} from "./STA";
import {Terceirizado} from "./Terceirizado";

let funcionarios : Array<Funcionario> = [];
let nome : string = null;

let comando : string = readline.question("Digite um comando: ");
if (comando == "addProf") {
	nome = readline.question("Digite o nome: ");
	let classe : string = readline.question("Digite a classe: ");
	let prof : Professor = new Professor(nome, 0, classe);
	funcionarios.push(prof);
}

else if(comando == "addSta") {
	nome = readline.question("Digite o nome: ");
	let nivel : number = readline.question("Digite o nivel: ");
	let sta : STA = new STA(nome, 0, nivel);
	funcionarios.push(sta);
}

else if(comando == "addTer") {
	nome = readline.question("Digite o nome: ");
	let horas : number = readline.question("Digite quantas horas: ");
	let insalubre : string = readline.question("Digite sim se for insalubre ou nao: ");
	let terc : Terceirizado = new Terceirizado(nome, 0, true, horas);
	if(insalubre == "nao"){
		terc.setInsalubre(false);
	}
	funcionarios.push(terc);
}

else if(comando == "show"){
	nome = readline.question("Digite o nome do funcionario: ");
	let f : Funcionario | undefined = undefined;
	for(let i of funcionarios){
		if(i.getNome() == nome){
			f = i;
		}
	}
	if(f == undefined){
		console.log("Nao existe");
	}
	else {
		console.log(f);
	}
}

let menu : string = "" +
	"1 - cadastrar funcionario" + "\n" +
	"2 - mostrar funcionario" + "\n" +
	"3 - remover funcionario" + "\n" +
	""

while(true) {

	console.log(menu);

	let comando : string = readline.question("Digite o numero do comando: ");

	switch (comando) {
		case "1":
			
			break;
		
		case "2":
			
			break;

		case "3":

			break;
	}


}

