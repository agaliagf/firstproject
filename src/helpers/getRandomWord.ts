let words: string[] = [
  'COMPUTADORA',
  'AGUACATE',
  'CANDELO',
  'MAGUI',
  'BLENDER',
  'FREDDY',
  'MAYKELL',
  'MERWE'
]

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length)

  return words[randomIndex]
}
