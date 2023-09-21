//https://stackoverflow.com/a/45082999/11192976

const execSync = require('child_process').execSync

console.log('\nBUILDING\n')
execSync('npm run build', { stdio: 'inherit' })
console.log('\nDEPLOYING \n')
execSync('firebase deploy', { stdio: 'inherit' })
console.log('\nBUILD AND DEPLOY COMPLETE\n')
