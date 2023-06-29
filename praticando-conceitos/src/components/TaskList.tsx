import { ClipboardText, Trash } from 'phosphor-react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import styles from './TaskList.module.css';
import { useSelector, useDispatch  } from 'react-redux';
import { setItems,RootState } from '../store/items.redux';


export interface ItemField {
    checked: boolean;
    text: string;
}

export function TaskList() {

    const dispatch = useDispatch();

    const items = useSelector((state: RootState) => state.items);

    const allTasks = items.length;
    const completedTasks = items.filter(x => x.checked).length;

    const handleCheck = (item: ItemField) => {
        const newList = items.map(internalItem => {
            if(internalItem.text == item.text)
                return {...internalItem, checked: !item.checked};
            else
                return internalItem;
        });
        dispatch(setItems(newList));
    }

    const handleDeleteItem = (item: ItemField) => {
        const list = [...items];
        const value = list.filter(x => x.text != item.text);
        dispatch(setItems(value));
    }

    return (
        <div className={styles.container}>
            <header>
                <div className={styles.createdTasks}>Tarefas criadas <span>{allTasks}</span></div>
                <div className={styles.completedTasks}>Concluídas <span>{completedTasks} de {allTasks}</span></div>
            </header>
            <div className={styles.listArea}>

                {items.length > 0 && items.map(item => {
                    return (
                        <div key={item.text} className={styles.itemContainer}>
                            <div className={styles.itemContent}>
                                <button className={styles.checkContainer} onClick={() => handleCheck(item)}>{item.checked ? <BsFillCheckCircleFill /> : <div />}</button>
                                <label className={item.checked ? styles.selected : styles.unselected}>{item.text}</label>
                                <Trash onClick={() => handleDeleteItem(item)} size={24} />
                            </div>
                        </div>
                    )
                })}
                {items.length == 0 && <>
                    <ClipboardText size={56} />
                    <div className={styles.clearTasks}>
                        <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </>}
            </div>
        </div>
    )
}