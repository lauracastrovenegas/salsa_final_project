

const computeLocation = (iw, ih, x, y) => (
	[
		{
            location: "Miami, FL",
			title: "Salsa, the Dance",
			x: iw * 0.31 + x,
			y: ih * 0.17 + y
        },
		{
            location: "Midtown, NY",
			title: "Palladium Ballroom Dancers",
			x: iw * 0.843 + x,
			y: ih * 0.24 + y
        },
		{
            location: "Bronx, NY",
			title: "Salsa and Activism in NYC",
			x: iw * 0.88 + x,
			y: ih * 0.17 + y
        },
		{
            location: "New York, NY",
			title: "NYC Mambo, Boogaloo, and Salsa Family Tree",
			x: iw * 0.855 + x,
			y: ih * 0.20 + y
        },
		{
            location: "New York, NY",
			title: "Interview: Jorge Cepeda",
			x: iw * 0.81 + x,
			y: ih * 0.25 + y
        },
		{   location: "Havana, Cuba",
			title: "Interview: Alexandra",
			x: iw * 0.25 + x,
			y: ih * 0.305 + y
        },
		{   location: "Cuba",
			title: "Abuela's Flan Recipe",
			x: iw * 0.4 + x,
			y: ih * 0.4 + y
        },
		{   location: "Cuba",
			title: "Patria Y Vida",
			x: iw * 0.33 + x,
			y: ih * 0.35 + y
        },
		{
            location: "Puerto Rico",
			title: "Salsa en Las Calles de Puerto Rico",
			x: iw * 0.73 + x,
			y: ih * 0.515 + y
        },
		{
            location: "Mayaguez, Puerto Rico",
			title: "Bomba",
			x: iw * 0.69 + x,
			y: ih * 0.515 + y
        },
		{
            location: "San Juan, Puerto Rico",
			title: "Cuatro",
			x: iw * 0.71 + x,
			y: ih * 0.51 + y
        },
		{   location: "Santo Domingo, D.R.",
			title: "Doble Sentido in Bachata",
			x: iw * 0.61 + x,
			y: ih * 0.505 + y
        },
		{   location: "Santiago, D.R.",
			title: "Perico Ripiao — Traditional Merengue",
			x: iw * 0.58 + x,
			y: ih * 0.465 + y
		},
		{   location: "D.R.",
			title: "Interview: Marisol",
			x: iw * 0.58 + x,
			y: ih * 0.5 + y
		},
		{   location: "Santiago, D.R.",
			title: "Interview: Greg",
			x: iw * 0.61 + x,
			y: ih * 0.465 + y
		},
        {   location: "Colombia",
			title: "Interview: Claudia",
			x: iw * 0.51 + x,
			y: ih * 0.85 + y
        },
        {   location: "Cali, Colombia",
			title: "The World Capital of Salsa - Cali, Colombia",
			x: iw * 0.48 + x,
			y: ih * 0.89 + y
        }
    ]
)

export {computeLocation};