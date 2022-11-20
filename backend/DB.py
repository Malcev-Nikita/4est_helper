import pymysql
import pymysql.cursors
from .config_db import HOST, USER, PASSWD, DB


def Select(SQL):
    db = pymysql.connect(host = HOST,
                         user = USER,
                         passwd = PASSWD,
                         db = DB,
                         charset = 'utf8')

    cursor = db.cursor()
    cursor.execute(SQL)
    result = cursor.fetchall()
    db.close()

    return result


def Update(SQL):
    db = pymysql.connect(host = HOST,
                         user = USER,
                         passwd = PASSWD,
                         db = DB,
                         charset = 'utf8')

    cursor = db.cursor()
    cursor.execute(SQL)
    db.commit()
    db.close()