import { vpCalculator } from "./vpCalculator";

export const trimmerText = (text : string | undefined, vpWidth : number) => {
    const trimmedLink : string = ' Leer más';
    const trimmedSend: Array<string> = [];
    if(typeof text === 'string'){
        switch (vpCalculator(vpWidth)) {
            case 'SM':
                trimmedSend.push(text.slice(0, -(text.length / 3)) + '...', trimmedLink)
                return trimmedSend
                break;
            case 'MD':
                trimmedSend.push(text.slice(0, -(text.length / 2)) + '...', trimmedLink)
                return trimmedSend
                break;
                case 'LG':
                    trimmedSend.push(text.slice(0, -(text.length / 4)) + '...', trimmedLink)
                    return trimmedSend
                    break;
            default:
                return 'Tamaño incorrecto'
                break;
        }
    }
}