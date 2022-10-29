const { origin } = location,
    registerButtonEl = document.querySelector("#register");

registerButtonEl.onclick = (event) => {
    event.preventDefault();
    location.href = `${origin}/pages/register.htm`;
};
const serverUrl = "https://sndlrv1wsl5d.usemoralis.com:2053/server";
const appId = "5uPH0OxHOWu6BAyuPBa3NrovyTICvbM4TpSRnHKL";


Moralis.start({
    serverUrl,
    appId,
  });
  

const check = () => {
    if (!window.ethereum)
        alert(
            "Sorry a browser wallet is required before you can use this service"
        );
};

async function connect() {
    let user = await Moralis.User.current();

    if (!user) {
        user = await Moralis.authenticate({
            signingMessage: "Please connect and sign wallet to get access",
        });
        await Moralis.enableWeb3();
        const ethAddress = user.get("ethAddress"),
            topText = ethAddress.slice(0, 5),
            bottomText = ethAddress.slice(-4);
        document.getElementById(
            "connect"
        ).textContent = `${topText}...${bottomText}`;
    } else {
        await Moralis.User.logOut();
        document.getElementById("connect").textContent = "connect";
    }
}
check()