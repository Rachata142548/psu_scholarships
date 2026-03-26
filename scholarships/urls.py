from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('scholarships/', views.scholarships, name='scholarships'),
    path('scholarships/<str:category>/', views.scholarship_list, name='scholarship_list'),
    path('scholarship/<int:pk>/', views.scholarship_detail, name='scholarship_detail'),
    path('scholarship/<int:pk>/apply-form/', views.apply_form, name='apply_form'),
    path('scholarship/<int:pk>/success/', views.apply_success, name='apply_success'),
    path('application/<int:pk>/update/', views.update_application, name='update_application'),
    path('jobs/', views.jobs, name='jobs'),
    path('payment-form/', views.payment_form, name='payment_form'),
    path('about/', views.about, name='about'),
    path('about/team/', views.team, name='team'),
    path('about/contact/', views.contact, name='contact'),
    path('news/', views.news, name='news'),
    path('faq/', views.faq, name='faq'),
    path('login/', views.CustomLoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(next_page='home'), name='logout'),
    path('profile/', views.profile, name='profile'),
    path('admin-dashboard/', views.admin_dashboard, name='admin_dashboard'),
    path('register/', views.register, name='register'),
    path('dashboard/', views.scholarship_dashboard, name='scholarship_dashboard'),
]