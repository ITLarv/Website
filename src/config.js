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
		show: true,
	};
};

const schedule = () => {
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
		open: true,
	};
};

const VolunteerApplication = () => {
	return {
		open: true,
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
	schedule,
};
