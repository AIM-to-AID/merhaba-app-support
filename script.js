function getElements() {
  return {
    supportElement: document.getElementById("support"),
    privatePolicyElement: document.getElementById("private-policy")
  }
}

function support() {
  const {supportElement, privatePolicyElement} = getElements()
  supportElement.style.display = "block"
  privatePolicyElement.style.display = "none"
}

function privatePolicy() {
  const {supportElement, privatePolicyElement} = getElements()
  supportElement.style.display = "none"
  privatePolicyElement.style.display = "block"
}