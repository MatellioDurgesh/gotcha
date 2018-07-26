from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import Note

class NoteTestCase(TestCase):
    # fixtures = ['notes']

    pk = 1

    def setUp(self):
    	self.client = APIClient()

    def test_create(self, **kwargs):
    	return self.client.post(reverse('note_list'), format='json', **kwargs)

    def test_list(self, **kwargs):
    	return self.client.get( reverse('note_list'), format='json', **kwargs)

    def test_retrieve(self, **kwargs):
    	return self.client.get(reverse('note_detail', kwargs={'pk': self.pk}), format='json', **kwargs)

    def test_update(self, **kwargs):
    	return self.client.put(reverse('note_detail', kwargs={'pk': self.pk}), format='json', **kwargs)

    def test_destroy(self, **kwargs):
    	return self.client.delete(reverse('note_detail', kwargs={'pk': self.pk}), format='json', **kwargs)
