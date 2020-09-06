const devBranch = () => {
	return {
		enabled: true,
		name: "alpha",
	};
};

const initialApplication = () => {
	return {
		navLink: true,
		open: true,
	};
};

const finalApplication = () => {
	return {
		enabled: false,
	};
};

export { devBranch, initialApplication, finalApplication };
