const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti({
   emojis: ['✨', '🌸','', '📱', '💻', '🖥️', '🚀'],
})
})
// '✨', '🌸',