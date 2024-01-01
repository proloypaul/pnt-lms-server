import { Server } from 'http'
import app from './app'
import config from './config'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let server: Server

async function main() {
  try {
    server = app.listen(config.port, () => {
      console.log(`companyWala server running port ${config.port}`)
    })
  } catch (err) {
    console.log(`Failed to connect database`, err)
  }
}

main()
