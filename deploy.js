require('dotenv').config()
const path = require('path');
const FtpDeploy = require('ftp-deploy');

const ftpDeploy = new FtpDeploy();

const isTest = process.env.DEPLOY_MODE === 'test';

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
console.log('Started uploading...')

ftpDeploy
    .deploy(config)
    .then(res => console.log('\nfinished:', res))
    .catch(err => console.log(err));

ftpDeploy.on('uploading', function(data) {
    const {totalFilesCount, transferredFileCount} = data

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Progress: ${transferredFileCount} / ${totalFilesCount}`);
});
