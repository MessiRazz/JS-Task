function(){
    const question = document.getElementById('question');
    const answer = document.getElementById('answer');
    const timer = document.getElementById('timer');
    let limit = 60;
    const questionBank = ["Some of the links in this post may be affiliate links. If make a purchase through these links, we receive a commission at no extra cost to you. Please see our disclosure for more info"
];
question.innerHTML= questionBank[0];
let interval = setInterval(()=>{

    limit--;
    timer.innerHTML= limit;
    if(limit==0){
        clearInterval(interval);
        answer.setAttribute('disabled','disabled')
    }
})

}