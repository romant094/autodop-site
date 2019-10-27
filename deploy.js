const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: "romant2e_ftp",
    password: "ci99pqsy",
    host: "romant2e.beget.tech",
    port: 21,
    localRoot: __dirname + "/dist",
    remoteRoot: "/askque.ru/public_html/projects/autodop",
    include: ["**/**"],
    exclude: [],
    deleteRemote: false,
    forcePasv: true
};

ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));
