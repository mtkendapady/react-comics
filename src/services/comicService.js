export function getComics() {
	return comics;
}

export function  getComicById( id ) {
	for ( let i = 0; i < comics.length; i++ ) {
		if ( comics[ i ]._id === id ) {
			return comics[ i ];
		}
	}
	return {};
}

const comics = [
	{
		"_id": "578f90cd97a17afaf6ba5160",
		"price": "$3.99",
		"company": "BIG TROUBLE LITTLE CHINA ESCAPE NEW YORK #1",
		"img": "../img/big-trouble-little-china.jpg",
		"about": "It's the mother of all crossovers as Jack Burton and Snake Plissken meet for the first time ever anywhere!'   Done with director John Carpenter's complete blessing, witness this melee of the mullets as two cult classic characters made famous by actor Kurt Russell crossover in an improbable adventure.   As lightning cascades around Jack and his good ol' Pork-Chop Express, he finds himself transported and driving through the horrors of what seems to be the dystopian future of...Escape from New York..  Snake Plissken catches wind of Jack and goes on the hunt to find who is trying to steal his identity.   Prepare for the road trip of a lifetime, with Jack and Snake rumblin' down the streets of a dystopian future to find what craziness caused Jack to jump through worlds.  Written by Greg Pak (Totally Awesome Hulk, Action Comics) and illustrated by Russ Manning Award nominee Daniel Bayliss (Kennel Block Blues, Translucid). \r\n"
	},
	{
		"_id": "578f90cd85e226eb434c2f95",
		"price": "$3.99",
		"company": "DOCTOR STRANGE AND THE SORCERERS SUPREME #1",
		"img": "../img/doctor-strange.jpg",
		"about": "An ancient evil threatens to unravel the fabric of reality, and one Sorcerer Supreme may not be enough. Doctor Strange must unite past, present and future Sorcerers Supremes to stem the coming darkness – Merlin, the Ancient One, Wiccan, and more! But Strange should watch his back, not all of these Sorcerers have his best interests in mind…\r\n"
	},
	{
		"_id": "578f90cd1f7d4e835d2ce995",
		"price": "$160.18",
		"company": "THE WALKING DEAD #159",
		"img": "../img/twd-issue159.jpeg",
		"about": "Beta tells Negan that he is the one that Beta wants. Negan tells him he is flattered before attacking him with his gun. They fight and Beta begins to gain the upper hand. Dwight is on the ground struggling to fight off a roamer and calls out to Negan before throwing Lucille to him.\r\n"
	},
	{
		"_id": "578f90cd74c10a822eafff38",
		"price": "$3.99",
		"company": "DEADPOOL: BACK IN BLACK #1",
		"img": "../img/deadpool.jpg",
		"about": "During 1984’s SECRET WARS, Deadpool was introduced to an alien symbiote who went on to become Spider-Man’s black costume and, eventually, Venom. Okay, okay, maybe that really happened in DEADPOOL’S SECRET SECRET WARS. Point is, did you know that after Spider-Man rejected the costume…it went slinking back to Deadpool on the rebound? And they went on adventures together? You didn’t? Well, you will, now, thanks to this series by Cullen Bunn (The DEADPOOL KILLOGY) & Salva Espin (DEADPOOL & THE MERCS FOR MONEY)\r\n"
	},
	{
		"_id": "578f90cd017b535f22251c24",
		"price": "$2.99",
		"company": "SUICIDE SQUAD #4",
		"img": "../img/suicide-squad.jpeg",
		"about": "THE BLACK VAULT” part four! It’s chaos in Belle Reve when the cosmic contents of the Black Vault are released, causing everyone on the Suicide Squad to turn against each other in a violent rage. Everybody, that is, except for the strangely sane Harley Quinn, who must fight her way through the heavily guarded facility before [REDACTED] can [REDACTED] and [REDACTED] the [REDACTED] forever!\r\n"
	}
]
