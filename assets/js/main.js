const taskList = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');
const deleteBtn = document.getElementById('deleteBtn');
const taskContent = document.getElementById('taskContent');
const tasks = [];

addBtn.addEventListener('click', () => {
  if (taskContent.value !== '') {
    // タスクを配列に追加
    tasks.push(taskContent.value);
    console.log(tasks);
    // タスクリストをクリア
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
      // 各タスク項目（タスクと削除ボタンと完了ボタン）を作成
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

      // 完了ボタンを作成
      let doneBtn = document.createElement('button');
      doneBtn.textContent = '完了';
      doneBtn.className = 'doneBtn';
      // 完了ボタンを項目に追加
      taskItem.appendChild(doneBtn);
      // タスク項目を追加
      taskList.appendChild(taskItem);
      // 完了ボタンのイベントリスナー
      doneBtn.addEventListener('click', () => {
        // 取り消し線をつける
        taskItem.style.textDecoration = 'line-through';
      });


    });
  } else {
    alert('タスクを入力してください');
  }

  //入力欄をクリア
  taskContent.value = '';
});
