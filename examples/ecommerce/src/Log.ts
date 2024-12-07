import colors from 'colors';

type Style = "bold" | "italic" | "underline";
type Color = "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray";

export default class Log {
  static title(title: string, style:Style  = "bold", color:Color = "blue"): void {
    console.log();
    console.log(colors[style][color](title));
    console.log("-".repeat(title.length));
  }

  static info(message: string, style:Style  = "bold", color:Color = "white"): void {
    console.log(colors[style][color](message));
  }
}
