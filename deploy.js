//https://stackoverflow.com/a/45082999/11192976

import { execSync } from 'child_process'

console.log('\nBUILDING\n')
execSync('npm run build', { stdio: 'inherit' })
console.log('\nDEPLOYING \n')
execSync('firebase deploy', { stdio: 'inherit' })
console.log('\nBUILD AND DEPLOY COMPLETE\n')
