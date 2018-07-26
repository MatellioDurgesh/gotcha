from .models import Note
from rest_framework import serializers

class NoteSerializer(serializers.Serializer):
	id = serializers.IntegerField(read_only=True)
	title = serializers.CharField(required=True, allow_blank=False, max_length=256)
	details = serializers.CharField(required=False, allow_blank=True)
	color = serializers.CharField(required=False, allow_blank=True)

	def create(self, validated_data):
		return Note.objects.create(**validated_data)

	def update(self, instance, validated_data):
		instance.title = validated_data.get('title', instance.title)
		instance.details = validated_data.get('details', instance.details)
		instance.color = validated_data.get('color', instance.color)
		instance.save()
		return instance

    # class Meta:
    #     model = Note
    #     # fields = ('title', 'color')
    #     fields = '__all__'


