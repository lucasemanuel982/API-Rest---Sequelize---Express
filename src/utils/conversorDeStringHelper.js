module.exports = (ObjetoParams) => {
    for (let propriedade in ObjetoParams) {
        if(/Id|id/.test(propriedade)){
            ObjetoParams[propriedade] = Number(ObjetoParams[propriedade]);
        }
    }
    return ObjetoParams;
};