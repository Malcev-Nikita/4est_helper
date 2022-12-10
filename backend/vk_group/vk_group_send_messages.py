import vk_api
from vk_api.utils import get_random_id

from .config import API_GROUP

session_group = vk_api.VkApi(token=API_GROUP)

def vk_group_send_messages(message):  
    
    # users = select_users()

    # for user in users:
    session_group.method("messages.send", {"user_id": "622898009",
                                            "random_id": get_random_id(),
                                            "message": message})


def select_users():
    users = []
    offset = 0

    count = session_group.method("groups.getMembers", {"group_id": "31298981"})

    while (offset < count.get('count')):
        
        result = session_group.method("groups.getMembers", {"group_id": "31298981",
                                                            "offset": offset})

        offset += len(result.get('items'))

        for user in result.get('items'):
            users.append(user)

    return users