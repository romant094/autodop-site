const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: "infoauzx_ranton",
    password: "ci99pqsy",
    host: "infoauzx.beget.tech",
    port: 21,
    localRoot: __dirname + "/dist",
    remoteRoot: "/infoauzx.beget.tech/public_html",
    include: ["**/**"],
    exclude: [],
    deleteRemote: false,
    forcePasv: true
};

ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));
