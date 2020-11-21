import "./game.js";
import "./quizz.js";

async function getdata() {
  const respone = await fetch(
    "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
  );
  const data = await respone.json();
  const res = data.results;
  let game = document.getElementById("game");
  let awn = [];

  for (let i = 0; i < res.length; i++) {
    game.innerHTML += `<game-screen id="game${i}" question="${res[i].question}" answer="" point="30"></game-screen>`;
    let tmp = res[i].incorrect_answers;
    tmp.push(res[i].correct_answer);
    awn.push(tmp);
    console.log(await tmp);
  }
  for (let i = 0; i < res.length; i++) {
    document.getElementById(`game${i}`).answer = awn[i];
    document.getElementById(`game${i}`).render();
  }
}
getdata();
