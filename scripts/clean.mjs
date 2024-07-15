/* eslint-env node */

import fs from "fs"

function removeDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true })
  }
}

removeDirectory(".next")
removeDirectory("out")
