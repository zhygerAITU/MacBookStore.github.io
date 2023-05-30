const btn = document.querySelector('.navbar-brand')

btn.addEventListener('click', () => {
  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti({
   emojis: ['✨', '🌸'],
})
})