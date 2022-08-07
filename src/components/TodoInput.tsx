import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './TodoInput.module.css';

import { PlusCircle } from 'phosphor-react';

interface TodoListProps {
  text: string;
  isFinished: boolean;
}

interface TodoInput {
  onAddTask: (newTask: TodoListProps) => void;
}

export function TodoInput({ onAddTask }: TodoInput) {
  const [newTodoText, setNewTodoText] = useState('');

  function handleChangeNewText(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTodoText(event.target.value);
  }

  function handleNewTodoTextInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask({
      text: newTodoText,
      isFinished: false
    });

    setNewTodoText('');
  }

  const isNewTodoTextEmpty = newTodoText.length === 0;

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTodoText}
          onChange={handleChangeNewText}
          required
          onInvalid={handleNewTodoTextInvalid}
        />
        <button type="submit" disabled={isNewTodoTextEmpty}>
          Criar
          <PlusCircle size={20} weight="bold" />
        </button>
      </form>
    </section>
  );
}