import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 4000,
  HLS_SEGMENT_DURATION: process.env.HLS_SEGMENT_DURATION,
  HLS_LIST_SIZE: process.env.HLS_LIST_SIZE,
  CODEC: {
    AUDIO: process.env.AUDIO,
    VIDEO: process.env.VIDEO,
  },
}
