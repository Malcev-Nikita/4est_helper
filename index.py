import eel
from backend.whatsapp.whatsapp_send_messages import send_messages


@eel.expose
def whatsapp_mailing(count, message):

    send_messages(count, message)

if __name__ == '__main__':
    eel.init('frontend')
    eel.start('html/index.html', mode="chrome", size=(1920, 1080))