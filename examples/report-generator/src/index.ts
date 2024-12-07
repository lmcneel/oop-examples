import Log from "./Log.js";
import ReportGenerator from "./ReportGenerator.js";
import ConsoleLogger from "./logger/ConsoleLogger.js";
import FileLogger from "./logger/FileLogger.js";
import EmailNotifier from "./notifier/EmailNotifier.js";
import SMSNotifier from "./notifier/SMSNotifier.js";

Log.title("Report Generator");

Log.title("Creating loggers and notifiers");
const consoleLogger = new ConsoleLogger();
const fileLogger = new FileLogger("report.log");
const emailNotifier = new EmailNotifier("some-email-server.com");
const smsNotifier = new SMSNotifier("some-sms-server.com");

Log.title("Creating report generator with email notifier and console logger");
const reportGenerator = new ReportGenerator(emailNotifier, consoleLogger);
reportGenerator.generate("report1", "some-email@example.com");

Log.title("Creating report generator with SMS notifier and file logger");
const reportGenerator2 = new ReportGenerator(smsNotifier, fileLogger);
reportGenerator2.generate("report2", "some-phone-number");
