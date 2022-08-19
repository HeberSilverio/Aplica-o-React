import styles from './Frase.module.css'

function Frase() {
   return (
      <section>
               
         <div className={styles.fraseContainer}>
            <p className="alert alert-primary mb-2 mb-lg-0" role="alert">Este é um componente com uma frase!</p>
         </div>
         <div className="alert alert-primary " role="alert">
         A simple primary alert—check it out!
         </div>
    </section>
   )
}

export default Frase

{/* {styles.fraseContent} */}
