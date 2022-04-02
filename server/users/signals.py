import email
from unicodedata import name
from urllib import request
from webbrowser import get
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

from .models import Project, Profile , User

@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(email=instance)
