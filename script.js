document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const message = document.getElementById("message");
    const question = document.getElementById("question");
    const soundEffect = document.getElementById("sound-effect");
  
    // Yes button functionality
    yesButton.addEventListener("click", () => {
      // Play sound effect
      soundEffect.play();
  
      // Hide question and buttons with fade-out effect
      question.style.opacity = "0";
      yesButton.style.opacity = "0";
      noButton.style.opacity = "0";
  
      setTimeout(() => {
        question.style.display = "none";
        yesButton.style.display = "none";
        noButton.style.display = "none";
  
        // Show the message with animation
        message.style.display = "block";
        message.style.opacity = "1";
      }, 500);
    });
  
    // No button functionality (moving on hover)
    noButton.addEventListener("mouseover", () => {
      const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
      const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
      noButton.style.position = "absolute";
      noButton.style.left = `${x}px`;
      noButton.style.top = `${y}px`;
    });
  
    noButton.addEventListener("click", () => {
      alert("Nah priya ye hote pare na!,Keh do ki ye jhut hai!!");
    });
  });
  