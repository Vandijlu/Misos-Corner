document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('misoQuiz');
  const result = document.getElementById('result');
  const themeSelect = document.getElementById('themeSelect');

  if (themeSelect) {
    themeSelect.addEventListener('change', function () {
      document.body.style.backgroundColor = this.value;
    });
  }

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      let score = 0;
      const answers = {
        q1: 'mouse',
        q2: 'morning-evening',
        q3: 'find-me',
        q4: 'sun-spot',
        q5: 'scaredy-curious'
      };

      for (let question in answers) {
        const selected = document.querySelector('input[name="' + question + '"]:checked');
        if (selected && selected.value === answers[question]) {
          score++;
        }
      }

      if (score === 5) {
        result.textContent = 'Perfect score! You know Miso very well. Score: ' + score + '/5';
      } else if (score >= 3) {
        result.textContent = 'Nice job! You know a lot about Miso. Score: ' + score + '/5';
      } else {
        result.textContent = 'Good try! Visit the About Miso page to learn more. Score: ' + score + '/5';
      }
    });
  }
});
