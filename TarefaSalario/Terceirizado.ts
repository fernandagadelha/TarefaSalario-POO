import {Funcionario} from "./Funcionario";

export class Terceirizado extends Funcionario{
	private insalubre : boolean;
	private horas : number;

	public constructor(nome : string, diarias : number, insalubre : boolean, horas : number) {
		super(nome, diarias);
		this.insalubre = insalubre;
		this.horas = horas;
	}

	public isInsalubre() : boolean {
		return this.insalubre;
	}

	public setInsalubre(insalubre : boolean) : void {
		this.insalubre = insalubre;
	}

	public getHoras() : number {
		return this.horas;
	}

	public setHoras(horas : number) : void {
		this.horas = horas;
	}

	public calcularSalario() : number {
		let salario : number = (this.getHoras() * 4);
		if (this.isInsalubre()) {
			salario += 500;
		}
		
		return salario;
	}
}