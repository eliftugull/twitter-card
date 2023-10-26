//console.log('Bağlantı kontrol')



const placeholder = document.querySelector(".placeholder");
//console.log(placeholder)
const editableInput = document.querySelector(".editable");
//console.log(editableInput)
const tweetButton = document.querySelector(".button");
//console.log(tweetButton)
const counter = document.getElementById("counter");
//console.log(counter)
const readonly = document.querySelector(".readonly");
//console.log(readonly)

//Tıklama olayını dinliyoruz.
editableInput.addEventListener("click", () => {
//placeholder (span) rengini değiştiriyoruz
  placeholder.style.color = "#98a5b1";
});

//Inputun odağını dışarıya tıklayınca kaldırıyor
editableInput.onblur = () => {
  placeholder.style.color = " #333";
};

//Klavyenin basılma olayını dinliyor
editableInput.onkeypress = (e) => {
  placeholder.style.display = "none";
  //console.log(e)
  inputValidate(e.target.innerText);
};

//Klavyeden parmağımızı çektiğimiz anı dinliyor
editableInput.onkeyup = (e) => {
  placeholder.style.display="none";
  inputValidate(e.target.innerText);
};

//Yazılan tweetin karakter kontrolü
const inputValidate = (tweet) => {
  //console.log(tweet)
//Dışarıdan gelen input verisinin uzunluğunu gösteriyor
  const tweetLength = tweet.length;
  const tweetLimit=10
  const currentLimit=tweetLimit-tweetLength
  //console.log(tweetLength)
 // console.log(counter);


 //Karakterin olup olmadığına bakılıyor
  if (tweetLength <= 0) {

    //Karakter varsa
    //placeholder görünür hale gelir
    placeholder.style.display = "block";
    //tweet butonu pasif hale getirme
    tweetButton.classList.remove("active");
    //sayacın görünürlüğünü ortadan kaldırır
    counter.style.display='none'
  } else {
    tweetButton.classList.add("active");
    counter.style.display = "block";
    counter.innerText=currentLimit;
}


let newTweet;
if(tweetLength>tweetLimit){

  let overTweet=tweet.substr(tweetLimit,tweetLength)
  //console.log(overTweet)
  
  let overTweetElement=`<span class='overTweet' >${overTweet}</span>`
  //console.log(overTweetElement)
newTweet=tweet.substr(0,tweetLimit)+overTweetElement;
  readonly.style.zIndex='1'
  counter.style.color='red'
  tweetButton.classList.remove('active')
 
}

else{
  counter.style.color='#333';
  readonly.style.zIndex='-5'
}

readonly.innerHTML=newTweet
};
