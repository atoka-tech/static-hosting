new Vue({
  el: "#app",
  data: {
    groups: [],
    lotteryResults: [],
  },
  methods: {
    addGroup() {
      this.groups.push({
        title: "",
        candidates: [""],
      });
    },
    removeGroup(index) {
      this.groups.splice(index, 1);
    },
    addCandidate(groupIndex) {
      this.groups[groupIndex].candidates.push("");
    },
    removeCandidate(groupIndex, candidateIndex) {
      this.groups[groupIndex].candidates.splice(candidateIndex, 1);
    },
    startLottery() {
      this.lotteryResults = [];

      this.groups.forEach((group) => {
        const winnerIndex = Math.floor(Math.random() * group.candidates.length);
        const winner = group.candidates[winnerIndex];

        this.lotteryResults.push({
          title: group.title,
          winner: winner,
        });
      });
    },
  },
});
