class Round {
  private gpu: string;
  private command: "LEFT" | "RIGHT" | "UP" | "DOWN";
  constructor(gpu: string) {
    console.error("gpu: ", gpu);
    this.gpu = gpu;
  }

  update(gameLoop: number) {
    this.command = this.gpu.charAt(gameLoop) === "#" ? "UP" : "LEFT";
  }

  print() {
    console.log(this.command);
  }
}

export default Round;
