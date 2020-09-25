import styles from "./Contact.module.css";
import styleContainer from "../common/styles/Container.module.css";
import styleTitle from "../common/styles/FontStyles.module.css";
import React from "react";

function Contact() {

    return (
        <div className={`${styles.contactBlock} ${styleContainer.containerOutside}`}>
            <div className={`${styles.container} ${styleContainer.container}`}>
                <h2 className={styleTitle.title}>Contact</h2>
                <form className={styles.form__group}>
                    <div className={styles.form__item}>
                        <input type="text" placeholder="Your Name*" id="first-name" className={styles.form} name="name"
                               required/>
                    </div>
                    <div className={styles.form__item}>
                        <input type="email" placeholder="Your Email*" id="email" className={styles.form} name="email"
                               required/>
                    </div>
                    <div className={styles.form__item}>
                                <textarea placeholder="Your Massage*" id="description" className={styles.form} name="message"
                                          rows={6} required>

                                </textarea>
                    </div>
                    <div className={` ${styleContainer.center}`}>
                        <input type="submit" title="Submit Your Message!" className={`${styles.button} ${styles.btn_contact_bg}`}
                               id="submitButton" name="submit" value="Send message"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;