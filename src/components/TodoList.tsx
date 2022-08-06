import styles from './TodoList.module.css';

export function TodoList() {
  return (
    <div className={styles.todoList}>
      <header>
        <p className={styles.createdTasksTitle}>
          Tarefas criadas
          <span>0</span>
        </p>

        <p className={styles.completedTasks}>
          Concluídas
          <span>1 de 5</span>
        </p>
      </header>
    </div>
  );
}