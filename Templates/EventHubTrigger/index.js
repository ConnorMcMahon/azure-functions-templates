﻿module.exports = function (context, workItem) {
    context.log('Node.js eventhub trigger function processed work item ' + workItem);

    context.done();
}