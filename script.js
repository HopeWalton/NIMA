var form = document.getElementById("formId");

function submitForm(event) {
 
  event.preventDefault();

  form.reset();

  shootConfetti();
}

form.addEventListener('submit', submitForm);

function shootConfetti() {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti({
    emojis: ['🍄', '🍃'],
    emojiSize: 40,
    confettiNumber: 80,
  });
}