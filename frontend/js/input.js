let whatsapp__hidden__form__count_down = document.getElementsByClassName("whatsapp__hidden__form__count_down")[0]
let whatsapp__hidden__form__count_up = document.getElementsByClassName("whatsapp__hidden__form__count_up")[0]

let whatsapp__hidden__form__count_count = document.getElementsByClassName("whatsapp__hidden__form__count_count")[0]


whatsapp__hidden__form__count_down.addEventListener('click', function ()
{
    if (Number(whatsapp__hidden__form__count_count.textContent) > 5)
    {
        whatsapp__hidden__form__count_count.textContent = Number(whatsapp__hidden__form__count_count.textContent) - 5
    }
})

whatsapp__hidden__form__count_up.addEventListener('click', function ()
{
    if (Number(whatsapp__hidden__form__count_count.textContent) < 50)
    {
        whatsapp__hidden__form__count_count.textContent = Number(whatsapp__hidden__form__count_count.textContent) + 5
    }
})

let valid = false
let whatsapp__hidden__form__textarea = document.getElementsByClassName("whatsapp__hidden__form__textarea")[0]

var reg = /([А-ЯЁа-яёA-Za-z])/gm

whatsapp__hidden__form__textarea.addEventListener("keydown", function ()
{
    if (whatsapp__hidden__form__textarea.value.match(reg)) valid = true

    else valid = false
})


let whatsapp__hidden__form__button = document.getElementsByClassName("whatsapp__hidden__form__button")[0]

whatsapp__hidden__form__button.addEventListener("click", function () 
{
    console.log(whatsapp__hidden__form__count_count.textContent)
    console.log(typeof(whatsapp__hidden__form__count_count.value))

    eel.whatsapp_mailing(Number(whatsapp__hidden__form__count_count.textContent), 
                         whatsapp__hidden__form__textarea.value)
})