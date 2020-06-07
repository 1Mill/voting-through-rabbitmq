<script>
import { voteObject } from '../utilities/voteObject';

const CANIDATES = [
	'Canidate A',
	'Canidate B',
	'Canidate C',
]

export default {
	data() {
		return {
			CANIDATES,
			votes: [...new Array(12)].map((_, index) => {
				return voteObject({
					candidate: CANIDATES[index % CANIDATES.length],
					voter: `Voter ${index}`,
				})
			})
		}
	},
}
</script>

<template>
	<main>
		<h1>Voting application</h1>
		<div class="flex">
			<v-btn
			v-for="candidate in CANIDATES"
			:key="candidate"
			>
				{{ candidate }}
			</v-btn>
		</div>
		<v-data-table
		:headers="[
			{
				text: 'Candidate',
				value: 'candidate',
			},
			{
				text: 'Voter',
				value: 'voter',
			},
			{
				text: 'Datetime',
				value: 'datetime',
			},
		]"
		:items="votes"
		>
		</v-data-table>
	</main>
</template>
