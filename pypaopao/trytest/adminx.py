import xadmin
from trytest.models import User


class UserAdmin(object):
    list_display = ['StudentNumber', 'PhoneNumber', 'Password']
    list_filter = ['StudentNumber', 'PhoneNumber']
    search_fields = ['StudentNumber', 'PhoneNumber']


xadmin.site.register(User, UserAdmin)
