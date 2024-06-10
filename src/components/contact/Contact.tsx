import FormComment from "../formComment/FormCommet";
import PlainText from "../plainText/PlainText";
import styles from "./Contact.module.scss"

const Contact = () => {

    return (<>
            <h2 className={styles.title}>👇Dejame un mensaje</h2>
            <div className={styles.contact}>
                <FormComment />
                <PlainText title="Contáctame" />
            </div>
            <br /><br /><br /><br />
        </>)
}

export default Contact;