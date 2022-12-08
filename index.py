import eel
from backend.whatsapp.whatsapp_send_messages import send_messages


@eel.expose
def whatsapp_mailing(count, message):

    send_messages(count, message)


@eel.expose
def site_in_window(url):

    eel.start('', mode="chrome", size=(1920, 1080), host=url, port=-1)

if __name__ == '__main__':
    eel.init('frontend')
    eel.start('html/index.html', mode="chrome", size=(1920, 1080))