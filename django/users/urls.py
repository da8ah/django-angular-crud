from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_user),
    path('read/', views.read_users),
    path('update/<int:user_id>', views.update_user),
    path('delete/<int:user_id>', views.delete_user),
]
