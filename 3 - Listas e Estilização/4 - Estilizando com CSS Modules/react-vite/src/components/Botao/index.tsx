import styles from './styles.module.css'

export const Botao = () => {
  return (
    <div className={styles.quadrado}>
      <button className={styles['quadrado-botao']}>Clique aqui</button>
      <p className={styles['quadrado-legend']}>Lorem ipsum dolor sit amet consectetur m!</p>
    </div>
  )
}