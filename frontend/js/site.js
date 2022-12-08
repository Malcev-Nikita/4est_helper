let site = document.getElementsByClassName("site")

for (let i = 0; i < site.length; i++)
{
    site[i].addEventListener('click', () =>
    {
        url = site[i].getAttribute('data-site')

        console.log(url)
        console.log(typeof(url))
        eel.site_in_window(url)
    })
}