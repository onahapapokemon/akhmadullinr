
var taskCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

var max = 0;
var maxName = 0;
for (task in taskCompleted) {
    if (max < taskCompleted[task]) {
        max = taskCompleted[task];
        maxName = task;
    }
}
alert(maxName || 'таких нет');