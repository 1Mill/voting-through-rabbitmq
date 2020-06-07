import { randomDate } from "./randomDate";

export const voteObject = ({ candidate, voter }) => {
	return {
		candidate,
		datetime: randomDate(),
		voter,
	};
};
