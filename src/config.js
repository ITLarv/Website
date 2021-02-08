const devBranch = () => {
	return {
		enabled: false,
		name: "",
	};
};

const initialApplication = () => {
	return {
		navLink: false,
		open: false,
	};
};

const finalApplication = () => {
	return {
		enabled: true,
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
		currentYear: true,
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
		open: true,
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
