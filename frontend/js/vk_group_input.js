let vkgroup__hidden__form__button = document.getElementsByClassName("vkgroup__hidden__form__button")[0]
let vkgroup__hidden__form__textarea = document.getElementsByClassName("vkgroup__hidden__form__textarea")[0]

vkgroup__hidden__form__button.addEventListener("click", function () 
{
    // if (len(vkgroup__hidden__form__button.value) > 100)
    eel.vk_group_mailing(vkgroup__hidden__form__textarea.value)
})