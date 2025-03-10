interface GameConfig {
  volume: number;
  resolution: string;
  difficulty: Difficulty;
}

export enum Difficulty {
  Facil = "Fácil",
  Medio = "Médio",
  Dificil = "Difícil",
}

export class GameSettings {
  private static instance: GameSettings;
  private config: GameConfig;

  private constructor() {
    this.config = {
      volume: 50,
      resolution: "1920x1080",
      difficulty: Difficulty.Medio,
    };
  }

  public static getInstance(): GameSettings {
    if (!GameSettings.instance) {
      GameSettings.instance = new GameSettings();
    }
    return GameSettings.instance;
  }

  public getVolume(): number {
    return this.config.volume;
  }

  public getResolution(): string {
    return this.config.resolution;
  }

  public getDifficulty(): string {
    return this.config.difficulty;
  }

  public getSettings(): GameConfig {
    return this.config;
  }

  public setVolume(volume: number): void {
    if (volume >= 0 && volume <= 100) {
      this.config.volume = volume;
    }
  }

  public setResolution(resolution: string): void {
    this.config.resolution = resolution;
  }

  public setDifficulty(difficulty: Difficulty): void {
    this.config.difficulty = difficulty;
  }
}
