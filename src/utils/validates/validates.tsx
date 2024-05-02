interface formData{
    email: string,
    name: string,
    subject: string,
    message: string
}
const Validates = () => {
    
    const validEmail = (email : string ) => {
        if(typeof(email) === 'undefined') return 'Formato inválido';
        if(email !== ''){
            if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)){
                return 'Formato de mail incorrecto'
            }
        }else{
            return 'Ingrese un email'
        }
        return 'OK'
    }

    const validName = (name : string) => {
        if(name !== ''){
            if(name.length < 3){
                return 'Su nombre no cumple con las condiciones mínimas'
            }
        }else{
            return 'Ingrese un Nombre'
        }
        return 'OK'
    }

    const validSubject = (subject : string) => {
        if(subject !== ''){
            if(subject.length < 3){
                return 'Su asunto no cumple con las condiciones mínimas'
            }
        }else{
            return 'Ingrese un asunto'
        }
        return 'OK'
    }

    const validMessage = (message : string) => {
        if(message !== ''){
            if(message.length < 3){
                return 'Su mensaje no cumple con las condiciones mínimas'
            }
        }else{
            return 'Ingrese un mensaje'
        }
        return 'OK'
    }

    const validForm = (formData : formData ) => {
        if(validEmail(formData.email) === 'OK'){
            if(validName(formData.name) === 'OK'){
                if(validSubject(formData.subject) === 'OK'){
                    if(validMessage(formData.message) === 'OK')
                        return true
                }
            }
        }
    }
    return {validEmail, validName, validSubject, validMessage, validForm}
}

export default Validates;