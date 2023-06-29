import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { useSelector, useDispatch  } from 'react-redux';
import { setItems,RootState } from '../store/items.redux';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ItemField } from './TaskList';

export function NewTask() {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');

    const items = useSelector((state: RootState) => state.items);
    
    const handleCreateItem = (event: FormEvent) => {
        event.preventDefault();
        const newItem = {
            checked: false,
            text: inputValue
        } as ItemField;
        dispatch(setItems([...items, newItem]));
        setInputValue('');
    }

    const handleInputTextChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleCreateItem}>
                <input type="text" required name="task" onChange={handleInputTextChanged} value={inputValue} placeholder="Adicione uma nova tarefa" />
                <button type="submit">Criar <PlusCircle /></button>
            </form>
        </div>
    )
}