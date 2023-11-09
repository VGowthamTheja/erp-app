export class Logger {
  private static instance: Logger;
  private static logFilePath: string;

  private constructor() {
    Logger.logFilePath = "../logs/";
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private getCurrentTimestamp(): string {
    const now = new Date();
    const timestamp = now.toISOString().replace(/T/, " ").replace(/\..+/, "");
    return `[${timestamp}]`;
  }

  public log(message: string): void {
    const timestampedMessage = `${this.getCurrentTimestamp()} [INFO] ==> ${message}`;
    console.log(timestampedMessage);
  }

  public error(message: string): void {
    const timestampedMessage = `${this.getCurrentTimestamp()} [ERROR] ==> ${message}`;
    console.error(timestampedMessage);
  }

  public warn(message: string): void {
    const timestampedMessage = `${this.getCurrentTimestamp()} [WARNING] ==> ${message}`;
    console.warn(timestampedMessage);
  }
}

const logger = Logger.getInstance();

export default logger;
