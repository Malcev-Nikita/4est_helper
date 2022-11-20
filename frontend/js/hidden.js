let js__hidden = document.getElementsByClassName("js__hidden")
let mailing__content__button = document.getElementsByClassName("mailing__content__button")

let closebtn = document.getElementsByClassName("close")


for (let i = 0; i < mailing__content__button.length; i++)
{
    mailing__content__button[i].addEventListener("click", function() {

        for (let j = 0; j < mailing__content__button.length; j++)
        {
            if (j != i)
            {
                js__hidden[j].classList.remove(js__hidden[j].classList[0] + "_active")
            }
        }

        if (js__hidden[i].classList.contains(js__hidden[i].classList[0] + "_active"))
        {
            js__hidden[i].classList.remove(js__hidden[i].classList[0] + "_active")
        }
        else
        {
            js__hidden[i].classList.add(js__hidden[i].classList[0] + "_active")
        }

    })
}


for (let i = 0; i < closebtn.length; i++)
{
    closebtn[i].addEventListener("click", function(){

        for (let j = 0; j < mailing__content__button.length; j++)
        {
            js__hidden[j].classList.remove(js__hidden[j].classList[0] + "_active")
        }
    
    })
}