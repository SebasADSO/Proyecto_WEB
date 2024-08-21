export const login_re = () => {
    location.href="../Paginas/index.html"
}
export const correct_re = () => {
    setTimeout(() => {
        location.href = "../Login/Login.html"
    }, 5000);
}
export const logout = () => {
    localStorage.setItem("user", "")
    localStorage.setItem("rol", "")
    location.href="../Login/Login.html"
}

export const login_ad = () => {
    location.href="../Recover_pass/user_maneger.html"
}