const devBranch = () => {
	return {
		enabled: false,
		name: "",
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

const gallery = () => {
	return {
		show: false,
	};
};

const catalog = () => {
	return {
		show: true,
		currentYear: false,
	};
};

const calendar = () => {
	return {
		show: false,
	};
};

const CoordinatorApplication = () => {
	return {
		open: false,
	};
};

const VolunteerApplication = () => {
	return {
		open: false,
		nomination: false,
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
	calendar,
	CoordinatorApplication,
	VolunteerApplication,
	PGApplication,
	gallery,
};
