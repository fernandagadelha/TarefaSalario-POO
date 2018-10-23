export class Funcionario{
	private nome : string;
	private diarias : number;

	public constructor(nome : string, diarias : number){
		this.nome = nome;
		this.diarias = diarias;
	}

	public getNome() : string {
		return this.nome;
	}

	public setNome(nome : string) : void {
		this.nome = nome;
	}

	public getDiarias() : number {
		return this.diarias;
	}

	public setDiarias(diarias : number) : void {
		this.diarias = diarias;
	}

	public addDiaria() : boolean {
		return false;
	}

	public calcularSalario() : number {
		return 0;
	}

	public cadastrarFuncionario(nome : string) : void {	
		


	}

	public mostrarFuncionario(nome : string) : string {

	}

	public removerFuncionario(nome : string) : void {

	}

	public toString() : string {
		let func : string = "" + "\n" +
		"Nome: " + this.nome + "\n" + 
		"Diarias: " + this.diarias;
		return func;
	}

}	