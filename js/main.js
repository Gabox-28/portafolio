const copyButton = document.getElementById('copy-button')
const buttonSpan = document.getElementById('button-span')

copyButton.addEventListener('click', copyEmailToClipboard)

function copyEmailToClipboard(){
    navigator.clipboard.writeText('gabrielmayorgate@gmail.com')
    buttonSpan.textContent = '¡Copiado!'
    copyButton.style.backgroundColor = '#021d50'

    setTimeout(restoreCopyButton, 2000)
}

function restoreCopyButton(){
    buttonSpan.textContent = 'Copiar'
    copyButton.style.backgroundColor = 'var(--bg-vrdark-blue)'
}