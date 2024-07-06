const Validate = (email, password) => {
    // const regName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const regmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // if(!isSignIn){
    //     if (!regName) return "Name not valid !";
    // }
    if (!regmail) return "E-mail not valid !";
    if (!regpass) return "Password not valid !";
    return null;
}

export default Validate;