var fs = require("fs");
const fse = require("fs-extra");
const child_process = require("child_process");

if (fs.existsSync("./demo/static")) {
  fs.rmdirSync("./demo/static", { recursive: true });
}

fse.copySync("./lib/extensions", "./demo/static/extensions");
fse.copySync("./lib/node_modules", "./demo/static/node_modules");
fse.copySync("./lib/out", "./demo/static/out");

const webPlaygroundPath = './demo/static/extensions/vscode-web-playground';

child_process.execSync(`git clone https://github.com/microsoft/vscode-web-playground.git  ${webPlaygroundPath}`, {stdio: 'inherit'});

