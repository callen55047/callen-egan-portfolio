/*
* GREEDY SIMULATION
* compare each of the priorities of the opposing members
* whoever is higher (lower index), proceeds to the next round
* next round = i (their priority) + n (total round length)
 */

function PredictPartyVictory(senate: string): string {
  // split them into 2 queues
  const Rsenators: number[] = [];
  const Dsenators: number[] = [];
  for (let i = 0; i < senate.length; i++) {
    // push their indexes to compare priority
    if (senate[i] === "D") {
      Dsenators.push(i);
    } else {
      Rsenators.push(i);
    }
  }

  // interate through both queues and compare voting rights
  // append total length of votes to account for next round of voting
  let round = senate.length;
  while(Rsenators.length > 0 && Dsenators.length > 0) {
    const radiant = Rsenators.shift()!;
    const dire = Dsenators.shift()!;

    if (radiant < dire) {
      Rsenators.push(radiant + round);
    } else {
      Dsenators.push(dire + round);
    }

    round++;
  }

  // whoever is left in queue will announce victory
  if (Rsenators.length > 0) {
    return "Radiant";
  } else {
    return "Dire";
  }
};