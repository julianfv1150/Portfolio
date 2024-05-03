import Tags from "../components/tags/Tags";
import { vpCalculator } from "./vpCalculator";

export const trimmerText = (text : string | undefined, vpWidth : number) => {
    const trimmedLink = <Tags title='Leer más'/>;
    const trimmedSend: Array<string | JSX.Element> = [];
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
                trimmedSend.push(text, '')
                return trimmedSend
                break;
        }
    }
}