var predictPartyVictory = function(senate) {
    let radiantCount = 0;
    let direCount = 0;
    let bannedRadiant = 0;
    let bannedDire = 0;

    // Count the number of Radiant and Dire senators
    for (let party of senate) {
        if (party === 'R') radiantCount++;
        else direCount++;
    }

    // Continue until one party is eliminated
    while (radiantCount > 0 && direCount > 0) {
        let newSenate = '';

        // Iterate through the senators and simulate the voting process
        for (let party of senate) {
            if (party === 'R') {
                if (bannedRadiant > 0) {
                    bannedRadiant--;
                    radiantCount--;
                } else {
                    bannedDire++;
                    newSenate += 'R';
                }
            } else {
                if (bannedDire > 0) {
                    bannedDire--;
                    direCount--;
                } else {
                    bannedRadiant++;
                    newSenate += 'D';
                }
            }
        }

        // Update the senate string for the next round
        senate = newSenate;
    }

    // Determine the winner based on the remaining senators
    return radiantCount > 0 ? "Radiant" : "Dire";
}

