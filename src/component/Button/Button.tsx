import styles from './Button.module.css';

function Button({lable,icon,customClass=''} : {lable: string, icon?: React.ReactNode, customClass?:string}){
    return(
        <button className={`${styles.button} ${styles[customClass]}`}>{icon ? icon :null} {lable}</button>
    )
}

export default Button;