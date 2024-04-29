export const vpCalculator = (vp : number) => {

    let breackPoint : string = '';
    vp <= 520 
        ? breackPoint = 'SM' 
        : vp > 520 && vp < 1000 
            ? breackPoint = 'MD'
            : breackPoint = 'LG'
    
    return breackPoint
}