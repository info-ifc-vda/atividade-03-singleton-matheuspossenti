import { Difficulty, GameSettings } from "./gameSettingsSingleton";

const settings1 = GameSettings.getInstance();

console.log("Settings Padrão\n");
console.log(settings1.getSettings());

console.log("\nAlterando Settings com settings1\n");

settings1.setVolume(75);
settings1.setResolution("1280x720");
settings1.setDifficulty(Difficulty.Facil);  

const settings2 = GameSettings.getInstance();

console.log("É a mesma instância?", settings1 === settings2, "\n");

console.log("Acessando settings alteradas com settings2\n");
console.log(settings2.getSettings());
