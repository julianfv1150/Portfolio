import { useState } from "react"
import Validates from "../../utils/validates/validates"

const FormComment = () => {

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
        event.currentTarget.name === 'preview' ? alert('Hola Mundo') : null;
        event.currentTarget.name === 'clean' ? setDataEntry({email:'', name: '', subject: '', message: ''}) : null;
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        console.log(dataEntry);
        console.log(errorData);
        
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className='formItems'>
                <label>Email: </label>
                <input
                    type='text'
                    name='email'
                    value={dataEntry.email}
                    placeholder="user@expample.com"
                    autoComplete="off"
                    onChange={handleChange}
                />
                <label>Nombre: </label>
                <input
                    type='text'
                    name='name'
                    value={dataEntry.name}
                    placeholder="Tu nombre"
                    autoComplete="off"
                    onChange={handleChange}
                />
                <label>Asunto: </label>
                <input
                    type='text'
                    name='subject'
                    value={dataEntry.subject}
                    placeholder="Me gusta tu sitio"
                    autoComplete="off"
                    onChange={handleChange}
                />
                <label>Mensaje: </label>
                <textarea
                    name='message'
                    value={dataEntry.message}
                    placeholder="Podrías buscar backgrounds que generen más contraste"
                    autoComplete="off"
                    onChange={handleChange}
                ></textarea>
            </div>
                <div>
                    <input type='button' name='preview' value='Previsualizar' onClick={handleClick} />
                    <input type='button' name='clean' value='Limpiar' onClick={handleClick} />
                    <input type='submit' name='send' value='Enviar' />
                </div>
        </form>
        </>
    )
}

export default FormComment;