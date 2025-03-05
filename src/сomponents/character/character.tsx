import React, {FC} from 'react';
import styles from "./character.module.css";

interface IProps {
    name: string;
    img: string;
}
type ITypeProps = IProps & {children?: React.ReactNode}

const Character:FC<ITypeProps> = ({name, img, children}) => {

    return (
        <div className={styles.characterBox}>

            {/*<        <div className={[styles.characterBox, styles.testBox].join(' ')}>*/}
            <h2>{name}</h2>
            <p>{children}</p>
            <img src={img} alt={name}/>
        </div>
    );
};
export default Character;