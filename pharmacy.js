import { HerbalTea, Fervex, MagicPill, Dafalgan, Default } from "./drugs";


export class Drug {
	constructor(name, expiresIn, benefit) {
	  this.name = name;
	  this.expiresIn = expiresIn;
	  this.benefit = benefit;
	}

	// The update method determines which specific update function to call based on the drug's name.
	update() {
		const method = Drug.methods[this.name] || Drug.methods.default;
		method(this);
	  }

	  static methods = {
		"Herbal Tea": HerbalTea,
		"Fervex": Fervex,
		"Magic Pill": MagicPill,
		"Dafalgan": Dafalgan,
		default: Default
	  };

	}

export class Pharmacy {
	constructor(drugs = []) {
	  this.drugs = drugs;
	}

	// This triggers the appropriate update logic (based on the drug's name) for each drug.
	updateBenefitValue() {
		this.drugs.forEach(drug => drug.update());
		return this.drugs;
	}
}
