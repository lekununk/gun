// Random Team Generator for League of Legends

// const input = document.getElementById("myInput");
// const sums = document.getElementById("numberTeam");
// const output = document.getElementById("output");
// const buttons = document.getElementById("buttons");

const userNumber = 10;

let team = ['SohyunC', 'GunWookC', 'BDG DON', 'Vocalist', 'dhaniAov', 'FModel', 'ciel', 'vip4evache', 'charismaghus', 'BinSour'];

/* <form onsubmit="addUsersFromBox()">
 <p>Please insert the items</p>
 <input type="text" id="box">
 <input type="submit" value="Submit">
</form>
*/

function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    const middleIndex = Math.ceil(array.length / 2);
    const firstHalf = array.splice(0, middleIndex);
    const secondHalf = array.splice(-middleIndex);

    return array = [firstHalf, secondHalf];
}

function addUsersFromBox() {
  boxvalue = document.getElementById('box').value;
  teams.push(boxvalue);
  console.log(team);
} // add users into arrays when user add input via the box

let result = shuffle(team);
console.log(result)