const
    { origin } = location,
    registerButtonEl = document.querySelector("#register");

registerButtonEl.onclick = (event) => {
    event.preventDefault();
    location.href = `${origin}/pages/register.htm`;
};