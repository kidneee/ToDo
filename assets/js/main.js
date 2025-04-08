const taskList = document.getElementById('taskList');
const saveBtn = document.getElementById('saveBtn');
const deleteBtn = document.getElementById('deleteBtn');
const taskContent = document.getElementById('taskContent');
const tasks = [];

saveBtn.addEventListener('click', () => {
  if (taskContent.value !== '') {
    // タスクを配列に追加
    tasks.push(taskContent.value);
    console.log(tasks);
    // タスクリストをクリア
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
      // 各タスク項目（タスクと削除ボタン）を作成
      let taskItem = document.createElement('li');
      taskItem.className = 'taskItem';
      taskItem.textContent = task;
      // 削除ボタンを作成
      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = '削除';
      deleteBtn.className = 'deleteBtn';
      // 削除ボタンを項目に追加
      taskItem.appendChild(deleteBtn);
      // タスク項目を追加
      taskList.appendChild(taskItem);

      // 削除ボタンのイベントリスナー
      deleteBtn.addEventListener('click', () => {
        // DOMからの削除
        taskItem.remove();
        // 配列からも削除
        const index = tasks.indexOf(task);
        if (index > -1) {
          tasks.splice(index, 1);
        }
      });
    });
  } else {
    alert('タスクを入力してください');
  }

  //入力欄をクリア
  taskContent.value = '';
});
