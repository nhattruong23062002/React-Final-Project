import styles from './List.module.css';

function List({title,lable,icon}:{title:string, lable:string,icon:React.ReactNode}){
    return(
        <li className={styles.itemLi}>
            <span>{icon}</span>
            <span className={styles.title}>{title}</span>
            <span>{lable}</span>
        </li>
    )
}

export default List;

