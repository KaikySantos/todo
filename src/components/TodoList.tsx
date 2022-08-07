import { CheckCircle, Circle, ClipboardText, Trash } from 'phosphor-react';
import styles from './TodoList.module.css';

type TodoListType = {
  text: string;
  isFinished: boolean;
}

interface TodoListProps {
  todoList: TodoListType[];
}

export function TodoList({ todoList }: TodoListProps) {
  const numberOfCompletedTasks = todoList.reduce((count, task) => {
    if (task.isFinished) {
      count++;
    }

    return count;
  }, 0);

  const textCompletedTasks = todoList.length === 0 ?
    '0' : `${numberOfCompletedTasks} de ${todoList.length}`

  return (
    <div className={styles.todoList}>
      <header>
        <p className={styles.createdTasksTitle}>
          Tarefas criadas
          <span>{todoList.length}</span>
        </p>

        <p className={styles.completedTasks}>
          Concluídas
          <span>{textCompletedTasks}</span>
        </p>
      </header>

      {todoList.length === 0 ? (
        <div className={styles.emptyList}>
          <ClipboardText size={56} />
          <p>
            Você ainda não tem tarefas cadastradas
            <br />
            <span>Crie tarefas e organize seus itens a fazer</span>
          </p>
        </div>
      ) : (
        <div className={styles.taskList}>
          {todoList.map(task => (
            <div key={task.text} className={task.isFinished ? styles.taskFinished : styles.task}>
              {task.isFinished ? (
                <CheckCircle className={styles.checkboxSelected} size={20} weight="fill" />
                ) : (
                <Circle className={styles.checkbox} size={20} weight="bold" />
              )}
              <p>{task.text}</p>
              <button type="button">
                <Trash size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}