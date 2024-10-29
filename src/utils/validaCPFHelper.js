module.exports = (cpf) => {
    if (cpf.length !== 11) {
        return false;
    }else{
        return true;
    }
}