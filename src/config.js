const devBranch = () => {
	return {
		enabled: true,
		name: "beta",
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

const map = () => {
	return {
		showMap: false,
	};
};

export { devBranch, initialApplication, finalApplication, map };
