require('dotenv').config()
const path = require('path');
const FtpDeploy = require('ftp-deploy');

const ftpDeploy = new FtpDeploy();

const isTest = process.env.DEPLOY_MODE === 'test';

console.log(process.env)
const {
    FTP_USER: user,
    FTP_PASSWORD: password,
    FTP_HOST: host,
    FTP_PORT: port,
    FTP_REMOTE_ROOT: remoteRoot,
    FTP_REMOTE_ROOT_TEST: remoteRootTest
} = process.env;

const remoteRootDir = isTest ? remoteRootTest : remoteRoot;

const config = {
    user,
    password,
    host,
    port,
    remoteRoot: remoteRootDir,
    localRoot: path.resolve(__dirname + '/dist'),
    include: ['**/**'],
    exclude: [],
    deleteRemote: false,
    forcePasv: true
};
console.log(config)

// ftpDeploy
//     .deploy(config)
//     .then(res => console.log('finished:', res))
//     .catch(err => console.log(err));
