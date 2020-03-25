const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: "infoauzx_ranton",
    password: "Ci9(pqsY",
    host: "infoauzx.beget.tech",
    port: 21,
    localRoot: __dirname + "/dist",
    remoteRoot: "/test.autodopspb.ru/public_html",
    include: ["**/**"],
    exclude: [],
    deleteRemote: false,
    forcePasv: true
};

ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));
