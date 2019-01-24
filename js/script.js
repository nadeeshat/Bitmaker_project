
var allDeck = ["C2","C3","C4","C5","C6","C7","C8","C9","C10","CJ","CQ","CK","CA","D2","D3","D4","D5","D6","D7","D8","D9","D10","DJ","DQ","DK","DA","H2","H3","H4","H5","H6","H7","H8","H9","H10","HJ","HQ","HK","HA","S2","S3","S4","S5","S6","S7","S8","S9","S10","SJ","SQ","SK","SA"];
var autoDeck = new Array(26);
var userDeck = new Array(26);

var autoDeck2 = [];
var userDeck2 = [];

var autoWon = [];
var userWon = [];

var autoObj;
var userObj;

var autoCard;
var userCard;

var autoScore = 0;
var userScore = 0;

var counter = 0;

var play = document.getElementById("start");
var userlabel = document.getElementById("userlabel");
var usertext = document.getElementById("username");

play.addEventListener("click", playGame);

var user = "";

function playGame()
{
  document.getElementById("play-table").classList.add("container");
  document.getElementById("banner").classList.add("after-play");
  document.getElementById("details").classList.add("after-play");
  play.classList.add("after-play");
  user = document.getElementById("username").value;
  document.getElementById("user-label").innerHTML = user;
  userlabel.classList.add("after-play");
  usertext.classList.add("after-play");
}

var start = document.getElementById("btn-play");

start.addEventListener("click", startGame);

function startGame()
{
  start.classList.add("after-play");
  document.getElementById("buttons-play").classList.remove("buttons-before");
  document.getElementById("buttons-play").classList.add("buttons-after");
  document.getElementById("start-div").classList.add("after-play");
  document.getElementById("view-div").classList.remove("before-play");
  document.getElementById("select-div").classList.remove("before-play");
  document.getElementById("btn-view").classList.remove("before-play");
  document.getElementById("btn-view").classList.add("btn-view");
  document.getElementById("btn-select").classList.remove("before-play");
  document.getElementById("btn-select").classList.add("btn-select");
  shuffle();
}

var exit = document.getElementById("exit");

exit.addEventListener("click", exitGame);

function exitGame()
{
  document.getElementById("play-table").classList.remove("container");
  document.getElementById("banner").classList.remove("after-play");
  document.getElementById("details").classList.remove("after-play");
  play.classList.remove("after-play");
  userlabel.classList.remove("after-play");
  usertext.classList.remove("after-play");
  document.getElementById("buttons-play").classList.remove("buttons-after");
  document.getElementById("buttons-play").classList.add("buttons-before");
  document.getElementById("start-div").classList.remove("after-play");
  start.classList.remove("after-play");
  start.classList.add("btn-play");
  document.getElementById("view-div").classList.add("before-play");
  document.getElementById("select-div").classList.add("before-play");
  document.getElementById("btn-view").classList.remove("btn-view");
  document.getElementById("btn-select").classList.remove("btn-select");
  document.getElementById("btn-view").classList.add("before-play");
  document.getElementById("btn-select").classList.add("before-play");
}

// shuffle function distributes the cards between the 2 players at the game start. When this function runs, each player's hands are populated as array of card objects (autoDeck and userDeck)
function shuffle()
{
  // for javascript, we dont need to specify the array length when we initialize it. In fact, doing a push on this will make the array length 27.  
  // eg. autoArray = new Array(3)
  // autoArray.push('testPush')
  // autoArray here will be [undefined, undefined, undefined, 'testPush']

  var autoArray = new Array(26);
  var userArray = new Array(26);

  for(var i=0;i<26;i++)
  {
    var currentVal = Math.floor(Math.random() * 52);

    if(autoArray.includes(currentVal))
    {
      i--;
    }
    else
    {
      autoArray.push(currentVal);
    }
  }
  for(var j=0;j<26;j++)
  {
    var currentVal = Math.floor(Math.random() * 52);

    if(autoArray.includes(currentVal) || userArray.includes(currentVal))
    {
      j--;
    }
    else
    {
      userArray.push(currentVal);
    }
  }

  //console.log(autoArray);
  //console.log(userArray);
  console.log("Auto Player Cards");
  for(var n=0;n<autoArray.length;n++)
  {
    //console.log(allDeck[autoArray[n]]);
    //autoDeck.push()
    var card = allDeck[autoArray[n]];
    card = String(card);
    var image = `${card}.png`;
    var cardType = card.substr(0,1);
    var cardVal = card.slice(1);
    var rank = 0;
    // this switch/case is ok too, you could do an array here to represent the rank order:
    // let ranks = ['A', 'K', 'Q', 'J', '10'...]
    // cardRank = ranks.indexOf(cardVal)
    switch(cardVal){
      case 'A':
        rank=1;
        break;
      case 'K':
        rank=2;
        break;
      case 'Q':
        rank=3;
        break;
      case 'J':
        rank=4;
        break;
      case '10':
        rank=5;
        break;
      case '9':
        rank=6;
        break;
      case '8':
        rank=7;
        break;
      case '7':
        rank=8;
        break;
      case '6':
        rank=9;
        break;
      case '5':
        rank=10;
        break;
      case '4':
        rank=11;
        break;
      case '3':
        rank=12;
        break;
      case '2':
        rank=13;
        break;
      case '1':
        rank=14;
        break;
      default:
        rank=0;
        break;
    }

    //console.log(cardType+' '+cardVal);
    autoObj = {type: cardType, val: cardVal, r: rank, img: image};
    autoDeck[n] = autoObj;
  }

  console.log("User Player Cards");
  for(var m=0;m<userArray.length;m++)
  {
    //console.log(allDeck[userArray[m]]);
    //autoDeck.push()
    var card = allDeck[userArray[m]];
    card = String(card);
    var image = `${card}.png`;
    var cardType = card.substr(0,1);
    var cardVal = card.slice(1);
    var rank = 0;

    switch(cardVal){
      case 'A':
        rank=1;
        break;
      case 'K':
        rank=2;
        break;
      case 'Q':
        rank=3;
        break;
      case 'J':
        rank=4;
        break;
      case '10':
        rank=5;
        break;
      case '9':
        rank=6;
        break;
      case '8':
        rank=7;
        break;
      case '7':
        rank=8;
        break;
      case '6':
        rank=9;
        break;
      case '5':
        rank=10;
        break;
      case '4':
        rank=11;
        break;
      case '3':
        rank=12;
        break;
      case '2':
        rank=13;
        break;
      case '1':
        rank=14;
        break;
      default:
        rank=0;
        break;
    }

    //console.log(cardType+' '+cardVal);
    userObj = {type: cardType, val: cardVal, r: rank, img: image};
    userDeck[m] = userObj;
    //console.log(userDeck[m]).img);
  }

  //console.log(userDeck['1'].img);
}

var viewBtn = document.getElementById("btn-view");
viewBtn.addEventListener("click", loadCard);

// loadCard will take the last card from teh autoDeck and tack it into the start of autoDeck2. If autoDeck runs out, it will reset autoDeck with autoDeck2. The last card from the userDeck is also taken and placed in userDeck2.
function loadCard()
{
    /*if(autoDeck2.length == 26)
    {
      autoDeck = autoDeck2;
      autoDeck2 = [];
    }

    var autoCard = autoDeck.pop();
    var autoImage = autoCard.img;
    document.getElementById("autoimg").src=`images/${autoImage}`;
    //console.log(autoCard.type);
    autoDeck2.unshift(autoCard);*/

    if(counter == 0)
    {
      autoCard = autoDeck.pop();
      var autoImage = autoCard.img;
      document.getElementById("autoimg").src=`images/${autoImage}`;
      //console.log(autoCard.type);
      autoDeck2.unshift(autoCard);
      counter++;
    }

    if(userDeck2.length == 26)
    {
      userDeck = userDeck2;
      userDeck2 = [];
    }

    userCard = userDeck.pop();
    var userImage = userCard.img;
    document.getElementById("userimg").src=`images/${userImage}`;
    //console.log(userCard.img);
    userDeck2.unshift(userCard);
}

var selectBtn = document.getElementById("btn-select");

selectBtn.addEventListener("click", selectCard);

// selectCard plays the round. A user may only win if they have the same suite as their opponent and a higher rank
function selectCard()
{
  //alert("Select Button Clicked !");
  var autoType = autoCard.type;
  var autoRank = parseInt(autoCard.r);
  var autoVal = autoCard.val;

  var userType = userCard.type;
  var userRank = parseInt(userCard.r);
  var userVal = userCard.val;

  //alert("Auto Type & value : "+autoType+" "+autoVal+" User Type & value : "+userType+" "+userVal);

  //autoDeck2.shift();
  //userDeck2.shift();

  if(autoType == userType)
  {
    if(autoRank < userRank)
    {
      autoWon.push(autoCard);
      autoWon.push(userCard);
    }
    else
    {
      userWon.push(userCard);
      userWon.push(autoCard);
    }
  }
  else
  {
    autoWon.push(autoCard);
    autoWon.push(userCard);
  }
  // if the autoDeck has run out of cards, reset it
  if(autoDeck2.length == 26)
  {
    autoDeck = autoDeck2;
    autoDeck2 = [];
  }
  // take the last card from the autoDeck and see if it has been played previously and won.
  autoCard = autoDeck.pop();
  // if autoCard is an object representing the card, can we just set a boolean or stringfield on the autoCard when it's been won, and use that instead? 
  // pop removes teh element from the array. I'm not sure if the intent here is to check the card that is currently displayed (which has already been popped off of autoDeck in loadCard) or to check the next card before it is played?
  autoCard = checkWonAuto(autoCard);

  var autoImage = autoCard.img;
  document.getElementById("autoimg").src=`images/${autoImage}`;
  //console.log(autoCard.type);
  autoDeck2.unshift(autoCard);

  if(userDeck2.length == 26)
  {
    userDeck = userDeck2;
    userDeck2 = [];
  }

  userCard = userDeck.pop();

  userCard = checkWonUser(userCard);

  var userImage = userCard.img;
  document.getElementById("userimg").src=`images/${userImage}`;
  //console.log(userCard.img);
  userDeck2.unshift(userCard);
}
// checks if curCard is already present in teh autoWon or userWon arrays (i.e. has this already been played)
function checkWonAuto(curCard)
{
  var okCard;
  var flag = 0;

  for(var a=0;a<autoWon.length;a++)
  {
    if((autoWon[a].type == curCard.type) && (autoWon[a].val == curCard.val))
    {
      flag = 1;
    }
  }

  for(var b=0;b<userWon.length;b++)
  {
    if((userWon[b].type == curCard.type) && (userWon[b].val == curCard.val))
    {
      flag = 1;
    }
  }

  if(flag == 1)
  {
    // this will mutate autoDeck to remove the last card.  Should this just be taking the last index, or shifting this card into autoDeck2 at some point? 
    okCard = autoDeck.pop();

    okCard = checkWonAuto(okCard);
  }
  else
  {
    okCard = curCard;
  }

  return okCard;
}

function checkWonUser(curCard)
{
  var okCard;
  var flag = 0;

  for(var a=0;a<autoWon.length;a++)
  {
    if((autoWon[a].type == curCard.type) && (autoWon[a].val == curCard.val))
    {
      flag = 1;
    }
  }

  for(var b=0;b<userWon.length;b++)
  {
    if((userWon[b].type == curCard.type) && (userWon[b].val == curCard.val))
    {
      flag = 1;
    }
  }

  if(flag == 1)
  {
    okCard = userDeck.pop();

    okCard = checkWonUser(okCard);
  }
  else
  {
    okCard = curCard;
  }

  return okCard;
}
