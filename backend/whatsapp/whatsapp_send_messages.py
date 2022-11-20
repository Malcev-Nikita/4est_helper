from time import sleep
import pywhatkit
import pymysql
import pymysql.cursors
import keyboard as k

from ..DB import Select, Update

def send_messages(count, message):

    ACCOUNT_MAILINGS = Select(f"SELECT `mobile` FROM whatsapp_account ORDER BY `count` LIMIT {count}")

    for ACCOUNT in ACCOUNT_MAILINGS:

        pywhatkit.sendwhatmsg_instantly(phone_no = "+" + ACCOUNT[0], message = message)
        sleep(20)
        k.press_and_release('enter')

        sleep(2)
        k.press_and_release('ctrl+w')

        sleep(3)

        Update(f"UPDATE `whatsapp_account` SET `count`=`count` + 1 WHERE `mobile` = {ACCOUNT[0]}")