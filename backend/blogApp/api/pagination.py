from rest_framework.pagination import CursorPagination, LimitOffsetPagination


class CursorSetPagination(CursorPagination):
    page_size = 6
    page_size_query_param = 'page_size'
    ordering = 'id'  


class CustomLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 6
