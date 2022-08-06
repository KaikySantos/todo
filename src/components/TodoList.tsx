import { ClipboardText } from 'phosphor-react';
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

      <div className={styles.emptyList}>
        <ClipboardText size={56} />
        <p>
          Você ainda não tem tarefas cadastradas
          <br />
          <span>Crie tarefas e organize seus itens a fazer</span>
        </p>
      </div>
    </div>
  );
}