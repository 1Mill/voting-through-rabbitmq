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
			votes: [...new Array(13)].map((_, index) => {
				return voteObject({
					candidate: CANIDATES[index % CANIDATES.length],
					voter: `Voter ${index}`,
				})
			})
		}
	},
	methods: {
		percentageOfVoteCount({ candidate }) {
			const canidateVotesCount = this.votes.filter(vote => vote.candidate === candidate).length
			const votesTotalCount = this.votes.length
			return ((canidateVotesCount / votesTotalCount) * 100).toFixed(2)
		},
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
		<v-layout>
			<v-card
			v-for="candidate in CANIDATES"
			:key="candidate"
			>
				<v-card-title>
					{{ candidate }}
				</v-card-title>
				<v-card-text>
					{{ percentageOfVoteCount({ candidate }) }}%
				</v-card-text>
			</v-card>
		</v-layout>
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
