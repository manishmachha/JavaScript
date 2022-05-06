const rootNode = document.getRootNode()
console.log(rootNode)
const htmlElementNode = rootNode.childNodes[0]
console.log(htmlElementNode)
const htmlChildNodes = htmlElementNode.childNodes
console.log(htmlChildNodes)
const headElement = htmlElementNode.childNodes[0]
console.log(headElement.childNodes)
const textElement = htmlElementNode.childNodes[1]
console.log(textElement)
const bodyElement = htmlElementNode.childNodes[2]
console.log(bodyElement.childNodes)
const div = bodyElement.children[0]
console.log(div)
const divChildren = div.children
console.log(divChildren)