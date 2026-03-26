from django.contrib import admin
from .models import StudentProfile, Scholarship, Application, Document

@admin.register(Scholarship)
class ScholarshipAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'amount_per_semester', 'status', 'end_date']
    list_filter = ['category', 'status']
    search_fields = ['title']

@admin.register(StudentProfile)
class StudentProfileAdmin(admin.ModelAdmin):
    list_display = ['student_id', 'full_name', 'faculty', 'gpax']
    search_fields = ['student_id', 'full_name']

@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ['student', 'scholarship', 'status', 'submitted_at']
    list_filter = ['status']

@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ['application', 'doc_type', 'uploaded_at']