const computeLocation = (iw, ih, x, y) => (
	[
		{
            location: "Miami, FL",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			x: iw * 0.31 + x,
			y: ih * 0.17 + y
        },
		{
            location: "New York, NY",
			x: iw * 0.845 + x,
			y: ih * 0.23 + y
        },
		{
            location: "San Juan, Puerto Rico",
			x: iw * 0.7 + x,
			y: ih * 0.51 + y
        },
        {   location: "Havana, Cuba",
			x: iw * 0.25 + x,
			y: ih * 0.305 + y
        },
        {   location: "Colombia",
			x: iw * 0.48 + x,
			y: ih * 0.9 + y
        },
        {   location: "Santo Domingo, D.R.",
			x: iw * 0.61 + x,
			y: ih * 0.505 + y
        }
    ]
)

export {computeLocation};