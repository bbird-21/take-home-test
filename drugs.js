/* This file contains the update functions for each Drug used by the Pharmacy. */
/* We assume the drug object is properly constructed with valid values */

export function HerbalTea(drug) {
	drug.expiresIn -= 1;

	if (drug.benefit < 50 && drug.expiresIn < 0 )
		drug.benefit += 2;
	else
		drug.benefit += 1;
	drug.benefit = Math.min(drug.benefit, 50);
}

export function Fervex(drug) {
	drug.expiresIn -= 1;

	if (drug.expiresIn < 0)
	  drug.benefit = 0;
	else {
	  if (drug.benefit < 50) drug.benefit += 1;
	  if (drug.expiresIn < 10 && drug.benefit < 50) drug.benefit += 1;
	  if (drug.expiresIn < 5 && drug.benefit < 50) drug.benefit += 1;
	}
}

export function MagicPill(_) {
	// console.log("Nothing to do")
}

export function Dafalgan(drug) {
	drug.expiresIn -= 1;

	if ( drug.benefit > 0 ) {
		if ( drug.expiresIn < 0 ) {
			drug.benefit -= 2;
		}
		else
			drug.benefit -= 1;
	}
	else
		drug.benefit = 0;
}

export function Default(drug) {
	drug.expiresIn -= 1;

	if (drug.benefit > 0 && drug.expiresIn < 0 )
		drug.benefit -= 2;
	else
		drug.benefit -= 1;
	drug.benefit = Math.max(drug.benefit, 0);
}
