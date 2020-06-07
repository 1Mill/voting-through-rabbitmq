export const voteObject = ({ candidate, voter }) => {
	return {
		candidate,
		datetime: (new Date()).toISOString(),
		voter,
	};
};
