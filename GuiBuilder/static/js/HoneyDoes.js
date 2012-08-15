function removeTask(removeButton, updateControl)
{
    var task = JUParentElement(removeButton, 'Task');
    var countdown = JUGetElementByClassName('Countdown', task);
    var seconds = JUGetElementByClassName('Seconds', task);

    JUShowElement(countdown);
    JUCountDown(seconds, 10, 'ajaxSubmit("' + updateControl + '", false, "action=remove")');
}

function undoRemoveTask(undoButton)
{
    var task = JUParentElement(undoButton, 'Task');
    var countdown = JUGetElementByClassName('Countdown', task);
    var seconds = JUGetElementByClassName('Seconds', task);

    JUHideElement(countdown);
    JUAbortCountDown(seconds);
}

function previewColor(color)
{
    var taskCreator = JUParentElement(color, 'CreateTask');
    var text = JUGetElementByClassName('NewTaskText', taskCreator);

    text.style.backgroundColor = color.style.backgroundColor;
}

function removeColorPreview(color)
{
    var taskCreator = JUParentElement(color, 'CreateTask');
    var text = JUGetElementByClassName('NewTaskText', taskCreator);
    var selectedColor = JUGetElementByClassName('SelectedColor', taskCreator);

    text.style.backgroundColor = selectedColor.value;
}

function selectColor(color)
{
    var taskCreator = JUParentElement(color, 'CreateTask');
    var selectedColor = JUGetElementByClassName('SelectedColor', taskCreator);
    var colors = JUGetElementsByClassName('ColorChoice', taskCreator);

    selectedColor.value = color.style.backgroundColor;
    for(currentElement = 0; currentElement < colors.length; currentElement++)
    {
        JURemoveClass(colors[currentElement], 'Selected');
    }
    JUAddClass(color, 'Selected');
}

function updateAllTasks()
{
    ajaxUpdate(['TasksCompletedToday', 'TodaysTasks', 'FutureTasks', 'CompletedTasks'], true);
}

function changeView(button, view, value)
{
    if(view == "MyTasks")
    {
        JUHideElement('findFriends');
        JUHideElement('friendsTasks');
        JUShowElement('myTasks');
    }
    else if(view == "FindFriends")
    {
        JUHideElement('myTasks');
        JUHideElement('friendsTasks');
        JUShowElement('findFriends');
    }
    else if(view == "FriendsProfile")
    {
        ajaxUpdate('FriendsProfile', false, "friend=" + value);
        JUHideElement('myTasks');
        JUHideElement('findFriends');
        JUShowElement('friendsTasks')
    }
    JURemoveClass(selectedViewButton, 'Selected');
    JUAddClass(button, 'Selected');
    selectedViewButton = button;
}