import {Funcionario} from "./Funcionario";

export class STA extends Funcionario{
	private nivel : number;

	public constructor(nome : string, diarias : number, nivel : number) {
		super(nome, diarias);
		this.nivel = nivel;

	}

	public getNivel() : number {
		return this.nivel;
	}

	public setNivel(nivel : number) : void {
		this.nivel = nivel;
	}

	public addDiaria() : boolean {
		if(this.getDiarias() < 1){
			this.setDiarias(this.getDiarias() +1);
			return true;
		}
		else {
			return false;
		}
		
	}

	public calcularSalario() : number {
		let salario : number = 3000 + (this.getNivel() * 300) + (this.getDiarias() * 100);


	}
}

