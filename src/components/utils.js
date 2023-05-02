

const computeLocation = (iw, ih, x, y) => (
	[
		{	index: 1,
            location: "Miami, FL",
			title: "Salsa, the Dance",
			x: iw * 0.31 + x,
			y: ih * 0.17 + y
        },
		{
			index: 2,
            location: "Midtown, NY",
			title: "Palladium Ballroom Dancers",
			x: iw * 0.843 + x,
			y: ih * 0.24 + y
        },
		{
			index: 3,
            location: "Bronx, NY",
			title: "Salsa and Activism in NYC",
			x: iw * 0.88 + x,
			y: ih * 0.17 + y
        },
		{
			index: 4,
            location: "New York, NY",
			title: "NYC Mambo, Boogaloo, and Salsa Family Tree",
			x: iw * 0.855 + x,
			y: ih * 0.20 + y
        },
		{
			index: 5,
            location: "New York, NY",
			title: "Interview: Jorge Cepeda",
			x: iw * 0.81 + x,
			y: ih * 0.25 + y
        },
		{   
			index: 6,
			location: "Havana, Cuba",
			title: "Interview: Alexandra",
			x: iw * 0.25 + x,
			y: ih * 0.305 + y
        },
		{   
			index: 7,
			location: "Cuba",
			title: "Abuela's Flan Recipe",
			x: iw * 0.4 + x,
			y: ih * 0.4 + y
        },
		{   index: 8,
			location: "Cuba",
			title: "Patria Y Vida",
			x: iw * 0.33 + x,
			y: ih * 0.35 + y
        },
		{
			index: 9,
            location: "Puerto Rico",
			title: "Salsa en Las Calles de Puerto Rico",
			x: iw * 0.73 + x,
			y: ih * 0.515 + y
        },
		{
			index: 10,
            location: "Mayaguez, Puerto Rico",
			title: "Bomba",
			x: iw * 0.69 + x,
			y: ih * 0.515 + y
        },
		{
			index: 11,
            location: "San Juan, Puerto Rico",
			title: "Cuatro",
			x: iw * 0.71 + x,
			y: ih * 0.51 + y
        },
		{   
			index: 12,
			location: "Santo Domingo, D.R.",
			title: "Doble Sentido in Bachata",
			x: iw * 0.61 + x,
			y: ih * 0.505 + y
        },
		{   
			index: 13,
			location: "Santiago, D.R.",
			title: "Perico Ripiao — Traditional Merengue",
			x: iw * 0.58 + x,
			y: ih * 0.465 + y
		},
		{   
			index: 14,
			location: "D.R.",
			title: "Interview: Marisol",
			x: iw * 0.58 + x,
			y: ih * 0.5 + y
		},
		{   
			index: 15,
			location: "Santiago, D.R.",
			title: "Interview: Greg",
			x: iw * 0.61 + x,
			y: ih * 0.465 + y
		},
        {   index: 16,
			location: "Colombia",
			title: "Interview: Claudia",
			x: iw * 0.51 + x,
			y: ih * 0.85 + y
        },
        {   
			index: 17,
			location: "Cali, Colombia",
			title: "The World Capital of Salsa - Cali, Colombia",
			x: iw * 0.48 + x,
			y: ih * 0.89 + y
        }
    ]
)

export {computeLocation};