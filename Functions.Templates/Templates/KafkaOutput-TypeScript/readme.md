# KafkaOutput - TypeScript

The `KafkaOutput` makes it incredibly easy to send a new events to a Kafka Broker. This sample demonstrates a simple use case of sending data to a given Kafka Broker using TypeScript.

## How it works

For a `KafkaOutput` to work, you must provide a topic name which dictates where the messages should be sent to with authentication.

## Configuration

### EventHubs for Kafka

Add `BrokerList` and `Password` to your `local.settings.json`

_local.settings.json_

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "BrokerList": "{YOUR_EVENT_HUBS_NAMESPACE}.servicebus.windows.net:9093",
    "Password": "{EVENT_HUBS_CONNECTION_STRING}"
  }
}
```

### Others

Modify `function.json` or `KafkaOutput` attribute according to your broker.