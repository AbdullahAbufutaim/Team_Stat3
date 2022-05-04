const team = {
    _players: [
      { firstName: "John", lastName: "bit", age: 36 },
      { firstName: "Abdullah", lastName: "Mohammed", age: 22 },
      { firstName: "Ali", lastName: "Yaser", age: 25 },
    ],
    _games: [
      { opponent: "Jet", teamPoints: 52, opponentPoints: 27 },
      { opponent: "Giant", teamPoints: 42, opponentPoints: 37 },
      { opponent: "Eagles", teamPoints: 31, opponentPoints: 50 },
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      }
      this.players.push(player);
    
    },
    addGames(newOpponent, newTeamPoints, newOpponentPoints){
        let game={
            opponent : newOpponent,
            teamPoints : newTeamPoints,
            opponentPoints : newOpponentPoints
        };
        this.games.push(game);
    }
};
  
  team.addPlayer("Arwa", "Hussien", 19);
  console.log(team.players);

  team.addGames('Titans', 100 , 98);
  console.log(team.games);
  