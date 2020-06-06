export function getOneColor () {
  const tagColorArr = [
    '#00CED1',
    '#00BFFF',
    '#4169E1',
    '#FF00FF',
    '#849b87',
    '#e15b64',
    '#f47e60',
    '#f26d6d',
    '#67cc86',
    '#fb9b5f',
    '#3498db'
  ]
  const index = Math.floor(Math.random() * tagColorArr.length)
  return tagColorArr[index]
}
