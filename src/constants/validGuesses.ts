import { CONFIG } from './config'

export const VALIDGUESSES = [
  "nepuy",
  "segep",
  "keget"
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
