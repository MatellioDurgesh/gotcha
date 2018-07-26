from django.conf.urls import url, include
from notes import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
	url(r'^$', views.NoteList.as_view(), name='note_list'),
    url(r'^(?P<pk>[0-9]+)/$', views.NoteDetail.as_view(), name='note_detail'),

    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

