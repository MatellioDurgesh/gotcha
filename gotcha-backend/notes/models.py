from django.db import models

class Note(models.Model):
	title = models.CharField(max_length=256, default='')
	details = models.TextField(default='')
	color = models.CharField(max_length=256, default='')

	class Meta:
		verbose_name = 'Note'

		def __str__(self):
			return self.title
