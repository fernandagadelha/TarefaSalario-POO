import {Funcionario} from "./Funcionario";

export class Professor extends Funcionario{
	private classe : string;

	public constructor(nome : string, diarias : number, classe : string) {
		super(nome, diarias);
		this.classe = classe;
	}

	public getClasse() : string {
		return this.classe;
	}

	public setClasse(classe : string) : void {
		this.classe = classe;
	}

	public addDiaria() : boolean {
		if(this.getDiarias() < 2){
			this.setDiarias(this.getDiarias() +1);
			return true;
		}
		else {
			return false;
		}
		
	}

	public calcularSalario() : number {

		if(this.classe == "A") {
			return 3000 + (this.getDiarias() * 100);
		}
		else if(this.classe == "B") {
				return 5000 + (this.getDiarias() * 100);
		
		}
		else if(this.classe == "C") {
				return 7000 + (this.getDiarias() * 100);
			
		}
		else if(this.classe == "D") {
				return 9000 + (this.getDiarias() * 100);
			
		}
		else if(this.classe == "E") {
				return 11000 + (this.getDiarias() * 100);
			
		}

		
	}



			

		}
	}
}