let count =0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue(){
    if (count>=10 && count%10==0){
        alert(`Your Instagram post gained 10 more followers! Congratulations!`);
    }
}