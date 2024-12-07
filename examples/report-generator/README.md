# Report Generator

Many applications need to log activities or send notifications. Different logging or notification strategies can be defined as interfaces, and implementations can vary—showing polymorphism through interfaces. Your main business logic can depend on these interfaces without caring about the specific logging or notification method used.

If tomorrow the company decides to send Slack notifications instead of emails or log to a database, just implement the Notifier or Logger interface differently. The ReportGenerator doesn’t change.
