import { updateHerbalTea, updateFervex, updateMagicPill, updateDefault } from "./drugs";


export class Drug {
	constructor(name, expiresIn, benefit) {
	  this.name = name;
	  this.expiresIn = expiresIn;
	  this.benefit = benefit;
	}

	update() {
		const method = Drug.methods[this.name] || Drug.methods.default;
		// console.log(`Updating "${this.name}"...`, method === Drug.methods.default ? "→ using default" : "→ using specific method");
		method(this);
	  }

	  static methods = {
		"Herbal Tea": updateHerbalTea,
		"Fervex": updateFervex,
		"Magic Pill": updateMagicPill,
		default: updateDefault
	  };
}

export class Pharmacy {
	constructor(drugs = []) {
	  this.drugs = drugs;
	}

	updateBenefitValue() {
		this.drugs.forEach(drug => drug.update());
		return this.drugs;
	}
}
