import Round from "./round";

class Game {
  constructor(readline) {
    const playerIdx: number = parseInt(readline());
    const nbGames: number = parseInt(readline());
    let round: Round;
    let loop = 0;

    // game loop
    while (true) {
      for (let i = 0; i < 3; i++) {
        const scoreInfo: string = readline();
      }
      for (let i = 0; i < nbGames; i++) {
        var inputs: string[] = readline().split(" ");
        const gpu: string = inputs[0];
        const reg0: number = parseInt(inputs[1]);
        const reg1: number = parseInt(inputs[2]);
        const reg2: number = parseInt(inputs[3]);
        const reg3: number = parseInt(inputs[4]);
        const reg4: number = parseInt(inputs[5]);
        const reg5: number = parseInt(inputs[6]);
        const reg6: number = parseInt(inputs[7]);
        if (!(round instanceof Round)) {
          round = new Round(gpu);
        }
        round.update(loop + 1);
      }

      round.print();
      loop++;
    }
  }
}

export default Game;
