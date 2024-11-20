import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'aa',
  'b',
  'd',
  'e',
  'ee',
  'g',
  'gw',
  'h',
  'hl',
  'j',
  'k',
  "k'",
  'kw',
  "kw'",
  'ky',
  "ky'",
  'l',
  'm',
  "'m",
  'n',
  "'n",
  'o',
  'oo',
  'p',
  "p'",
  's',
  't',
  "t'",
  'ts',
  "ts'",
  'ue',
  'uue',
  'w',
  "'w",
  'x',
  'y',
  "'y",
  "'",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
