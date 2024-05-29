const words: string[] = [
  'COMPUTADOR',
  'ABACATE',
  'PROGRAMADOR',
  'AMARELO',
  'BLENDER',
  'ESTUDANTE',
  'SISTEMA',
  'DEVELOPER'
]

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length)

  return words[randomIndex]
}
