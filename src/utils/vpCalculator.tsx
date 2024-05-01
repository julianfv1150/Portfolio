export const vpCalculator = (vp : number) => {

    let breackPoint : string = '';
    vp <= 481 
        ? breackPoint = 'SM' 
        : vp > 480 && vp < 1025 
            ? breackPoint = 'MD'
            : vp > 1024 && vp < 1441 
                ? breackPoint = 'LG'
                : 'XL'
    
    return breackPoint
}