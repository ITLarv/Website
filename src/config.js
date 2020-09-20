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

const map = () => {
	return {
		showMap: false,
	};
};

const catalog = () => {
	return {
		show: true,
		currentYear: false,
	};
};

const CoordinatorApplication = () => {
	return {
		open: false,
	};
};

const VolunteerApplication = () => {
	return {
		open: true,
	};
};

const PGApplication = () => {
	return {
		open: false,
	};
};

export {
	devBranch,
	initialApplication,
	finalApplication,
	map,
	catalog,
	CoordinatorApplication,
	VolunteerApplication,
	PGApplication,
};
