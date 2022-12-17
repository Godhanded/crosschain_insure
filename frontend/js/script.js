const { origin } = location;
console.log(origin);
function register() {
    // event.preventDefault();
    location.href = `${origin}/pages/register.htm`;
}
const serverUrl = "https://parse-server-moralised.herokuapp.com/server";
const appId = "master";

Moralis.start({
    serverUrl,
    appId,
});

const check = async () => {
    if (!window.ethereum)
        alert(
            "Sorry a browser wallet is required before you can use this service"
        );
};

async function handleAuth(provider) {
    // Enable web3 to get user address and chain
    await Moralis.enableWeb3({ throwOnError: true, provider });
    const { account, chainId } = Moralis;

    if (!account) {
        throw new Error(
            "Connecting to chain failed, as no connected account was found"
        );
    }
    if (!chainId) {
        throw new Error(
            "Connecting to chain failed, as no connected chain was found"
        );
    }
    console.log(chainId, account);
    // Get message to sign from the auth api
    const { message } = await Moralis.Cloud.run("requestMessage", {
        address: account,
        chain: parseInt(chainId, 16),
        network: "evm",
    });
    console.log(message);

    let topText = account.slice(0, 5);
    let bottomText = account.slice(-4);
    document.getElementById(
        "connect"
    ).textContent = `${topText}...${bottomText}`;

    // Authenticate and login via parse
    const user = await Moralis.authenticate({
        signingMessage: message,
        throwOnError: true,
    });
    console.log("user: ", user);
}

async function pay(provider) {
    await Moralis.enableWeb3({ throwOnError: true, provider });
    const { chainId } = Moralis;
    const renewIdNumber = document.getElementById("cid");

    const id =
        renewIdNumber.textContent == ""
            ? document.querySelector("#id-number").textContent.toString()
            : renewIdNumber.value.toString();

    let option = {
        contractAddress: addresses[parseInt(chainId)].address,
        functionName: "payInsurance",
        abi: abi,
        params: {
            id: id,
        },
        msgValue: Moralis.Units.ETH(200),
    };

    let result = await Moralis.executeFunction(option);
}
check();
