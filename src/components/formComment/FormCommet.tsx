import { useState } from "react"
import emailjs from '@emailjs/browser'
import Validates from "../../utils/validates/validates"
import { showModal } from "../../utils/showModal"
import style from './FormComment.module.scss'

const FormComment = () => {

    const SID = import.meta.env.VITE_EMAILJS_SID
    const TID = import.meta.env.VITE_EMAILJS_TID
    const PK = import.meta.env.VITE_EMAILJS_PK

    const [dataEntry, setDataEntry] = useState({
        email:'',
        name: '',
        subject: '',
        message: ''
    })

    const [errorData, setErrorData] = useState({
        email:'',
        name: '',
        subject: '',
        message: ''
    })

    const handleChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        if(event.target?.name === 'email'){
            setDataEntry({...dataEntry, email: event.target.value}); 
            setErrorData({... errorData, email: Validates().validEmail(event.target.value)})
        }
        if(event.target?.name === 'name'){
            setDataEntry({...dataEntry, name: event.target.value}); 
            setErrorData({... errorData, name: Validates().validName(event.target.value)})
        }
        if(event.target?.name === 'subject'){
            setDataEntry({...dataEntry, subject: event.target.value}); 
            setErrorData({... errorData, subject: Validates().validSubject(event.target.value)})
        }
        if(event.target?.name === 'message'){
            setDataEntry({...dataEntry, message: event.target.value}); 
            setErrorData({... errorData, message: Validates().validMessage(event.target.value)})
        }
    }
    const handleClick = (event: React.MouseEvent<HTMLInputElement>) =>{
        //event.currentTarget.name === 'preview' ? alert('Hola Mundo') : null;
        event.currentTarget.name === 'clean' ? setDataEntry({email:'', name: '', subject: '', message: ''}) : null;
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        
        if(SID?.toString && TID?.toString && PK?.toString){
            emailjs
                .sendForm(SID, TID, event.currentTarget, {
                    publicKey: PK,
                })
                .then(() => {
                    showModal('succes', 'Mail enviado con éxito');
                    setDataEntry({email:'', name: '', subject: '', message: ''})
                },
                (error) => {
                    showModal('warning', 'No hemos podido enviar el email');
                    console.log(error.text);
                },
            );
        }
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className='formItems'>
                <label>Email: </label>
                <div>
                    <input
                        type='text'
                        name='email'
                        value={dataEntry.email}
                        placeholder="user@expample.com"
                        autoComplete="off"
                        onChange={handleChange}
                    />
                    <p className={errorData.email === 'OK' ? style.succesEntry : style.errorEntry}>{errorData.email}</p>
                </div>
                <label>Nombre: </label>
                <div>
                    <input
                        type='text'
                        name='name'
                        value={dataEntry.name}
                        placeholder="Tu nombre"
                        autoComplete="off"
                        onChange={handleChange}
                    />
                    <p className={errorData.name === 'OK' ? style.succesEntry : style.errorEntry}>{errorData.name}</p>
                </div>
                <label>Asunto: </label>
                <div>
                    <input
                        type='text'
                        name='subject'
                        value={dataEntry.subject}
                        placeholder="Me gusta tu sitio"
                        autoComplete="off"
                        onChange={handleChange}
                    />
                    <p className={errorData.subject === 'OK' ? style.succesEntry : style.errorEntry}>{errorData.subject}</p>
                </div>
                <label>Mensaje: </label>
                <div>
                    <textarea
                        name='message'
                        value={dataEntry.message}
                        placeholder="Podrías buscar backgrounds que generen más contraste"
                        autoComplete="off"
                        onChange={handleChange}
                    ></textarea>
                    <p className={errorData.message === 'OK' ? style.succesEntry : style.errorEntry}>{errorData.message}</p>
                </div>
            </div>
                <div className={style.btnOrder}>
                    {/* <input type='button' name='preview' value='Previsualizar' onClick={handleClick} /> */}
                    <input type='button' name='clean' value='Limpiar' onClick={handleClick} />
                    <input type='submit' name='send' value='Enviar' />
                </div>
        </form>
        </>
    )
}

export default FormComment;