const formateTime = sec =>{
    let minutos = Math.floor(sec/60);
    let segundos = Math.floor(sec%60);
    if(minutos>=10)
        return (segundos>=10) ?  `${minutos} : ${segundos}` : `${minutos} : 0${segundos}`;
    else
        return (segundos>=10) ?  `0${minutos} : ${segundos}` :  `0${minutos} : 0${segundos}`;
};

export {formateTime};