'use strict';

/**
 *
 * ���������� - JS �ļ�
 *
 * @author  MaiCong <i@maicong.me>
 * @link    https://github.com/maicong/music
 * @since   1.5.9
 *
 */

$(function() {
  // ��ȡ����
  function q(key) {
    var value = null;
    var tmp = [];
    location.search
      .substr(1)
      .split('&')
      .forEach(function(v) {
        tmp = v.split('=');
        if (tmp[0] === key) {
          value = decodeURIComponent(tmp[1]);
        }
      });
    return value;
  }

  // ������ʷ��¼
  function pushState(title, link) {
    if (window.history && window.history.pushState) {
      window.history.pushState(null, title, link);
    }
  }

  // ��ȡ url
  function getUrl(path) {
    var url = location.href.split('?')[0];
    return path ? url + path : url;
  }

  // ��������
  var player = null;
  var playerList = [];
  var nopic = 'static/img/nopic.jpg';
  var qName = q('name');
  var qId = q('id');
  var qUrl = q('url');
  var qType = q('type');
  var siteTitle = document.title;

  // ����������� name/id �� type
  if ((qName || qId) && qType) {
    setTimeout(function() {
      $('#j-input').val(qName || qId);
      $('#j-type input[value="' + qType + '"]').prop('checked', true);
      if (qName) {
        $('#j-nav [data-filter="name"]').trigger('click');
      }
      if (qId) {
        $('#j-nav [data-filter="id"]').trigger('click');
      }
      $('#j-validator').trigger('submit');
    }, 0);
  }

  // ����������� url
  if (qUrl) {
    setTimeout(function() {
      $('#j-type').hide();
      $('#j-input').val(qUrl);
      $('#j-nav [data-filter="url"]').trigger('click');
      $('#j-validator').trigger('submit');
    }, 0);
  }

  // Tab �л�
  $('#j-nav').on('click', 'li', function() {
    var holder = {
      name: '����: ��Ҫ˵�� ����Ѹ',
      id: '����: 25906124',
      url: '����: http://music.163.com/#/song?id=25906124',
      pattern_name: '^.+$',
      pattern_id: '^[\\w\\/\\|]+$',
      pattern_url: '^https?:\\/\\/\\S+$'
    };
    var filter = $(this).data('filter');

    $(this)
      .addClass('am-active')
      .siblings('li')
      .removeClass('am-active');

    $('#j-input')
      .data('filter', filter)
      .attr({
        placeholder: holder[filter],
        pattern: holder['pattern_' + filter]
      })
      .removeClass('am-field-valid am-field-error am-active')
      .closest('.am-form-group')
      .removeClass('am-form-success am-form-error')
      .find('.am-alert')
      .hide();

    if (filter === 'url') {
      $('#j-type').hide();
    } else {
      $('#j-type').show();
    }
  });

  // ������֤
  $('#j-validator').validator({
    onValid: function onValid(v) {
      $(v.field)
        .closest('.am-form-group')
        .find('.am-alert')
        .hide();
    },
    onInValid: function onInValid(v) {
      var $field = $(v.field);
      var $group = $field.closest('.am-form-group');
      var msgs = {
        name: '�� ���� �� ���� һ����������ƥ���',
        id: '���������鿴����İ���',
        url: '���������鿴����İ���'
      };
      var $alert = $group.find('.am-alert');
      var msg = msgs[$field.data('filter')] || this.getValidationMessage(v);

      if (!$alert.length) {
        $alert = $(
          '<div class="am-alert am-alert-danger am-animation-shake"></div>'
        )
          .hide()
          .appendTo($group);
      }
      $alert.html(msg).show();
    },
    submit: function submit(v) {
      v.preventDefault();
      if (this.isFormValid()) {
        var input = $.trim($('#j-input').val());
        var filter = $('#j-input').data('filter');
        var type =
          filter === 'url' ? '_' : $('input[name="music_type"]:checked').val();
        var page = 1;
        var $more = $('<div class="aplayer-more">�������</div>');
        var isload = false;
        var ajax = function ajax(input, filter, type, page) {
          $.ajax({
            type: 'POST',
            url: getUrl(),
            timeout: 30000,
            data: {
              input: input,
              filter: filter,
              type: type,
              page: page
            },
            dataType: 'json',
            beforeSend: function beforeSend() {
              isload = true;
              var title = document.title;
              switch (filter) {
                case 'name':
                  pushState(title, getUrl('?name=' + input + '&type=' + type));
                  break;
                case 'id':
                  pushState(title, getUrl('?id=' + input + '&type=' + type));
                  break;
                case 'url':
                  pushState(title, getUrl('?url=' + encodeURIComponent(input)));
                  break;
              }
              if (page === 1) {
                $('#j-input').attr('disabled', true);
                $('#j-submit').button('loading');
              } else {
                $more.text('���Ժ�...');
              }
            },
            success: function success(result) {
              if (result.code === 200 && result.data) {
                result.data.map(function(v) {
                  if (!v.title) v.title = '����';
                  if (!v.author) v.author = '����';
                  if (!v.pic) v.pic = nopic;
                  if (!v.lrc) v.lrc = '[00:00.00] ���޸��';
                  if (!/\[00:(\d{2})\./.test(v.lrc)) {
                    v.lrc = '[00:00.00] ��Ч���';
                  }
                });
                var setValue = function setValue(data) {
                  $('#j-link').val(data.link);
                  $('#j-link-btn').attr('href', data.link);
                  $('#j-src').val(data.url);
                  $('#j-src-btn').attr('href', data.url);
                  $('#j-lrc').val(data.lrc);
                  $('#j-lrc-btn').attr(
                    'href',
                    'data:application/octet-stream;base64,' +
                      btoa(unescape(encodeURIComponent(data.lrc)))
                  );
                  if ('download' in $('#j-src-btn')[0]) {
                    var name = data.title + '-' + data.author;
                    $('#j-src-btn').attr('download', name + '.mp3');
                    $('#j-lrc-btn').attr('download', name + '.lrc');
                    $('#j-src-btn-icon, #j-lrc-btn-icon')
                      .addClass('am-icon-download')
                      .removeClass('am-icon-external-link');
                  }
                  $('#j-songid').val(data.songid);
                  $('#j-name').val(data.title);
                  $('#j-author').val(data.author);
                };

                if (page === 1) {
                  if (player) {
                    player.pause();
                  }

                  playerList = result.data;

                  setValue(playerList[0]);

                  $('#j-validator').slideUp();
                  $('#j-main').slideDown();

                  player = new APlayer({
                    element: $('#j-player')[0],
                    autoplay: false,
                    narrow: false,
                    showlrc: 1,
                    mutex: false,
                    mode: 'circulation',
                    preload: 'metadata',
                    theme: '#0e90d2',
                    music: result.data
                  });

                  $('#j-player').append($more);

                  $more.on('click', function() {
                    if (isload) return;
                    page++;
                    ajax(input, filter, type, page);
                  });
                } else {
                  player.addMusic(result.data);
                  playerList = playerList.concat(result.data);
                }

                player.on('canplay', function() {
                  player.play();
                });
                player.on('play', function() {
                  var data = playerList[player.playIndex];
                  var img = new Image();
                  img.src = data.pic;
                  img.onerror = function() {
                    $('.aplayer-pic').css(
                      'background-image',
                      'url(' + nopic + ')'
                    );
                  };
                  document.title =
                    '���ڲ���: ' + data.title + ' - ' + data.author;
                  setValue(data);
                });
                player.on('ended', function() {
                  document.title = siteTitle;
                });
                if (result.data.length < 10) {
                  $more.hide();
                } else {
                  $more.text('�������');
                }
              } else {
                if (page === 1) {
                  $('#j-input')
                    .closest('.am-form-group')
                    .find('.am-alert')
                    .html(result.error || '(��`�㡨) ����������չ���')
                    .show();
                } else {
                  $more.text('û����');
                  setTimeout(function() {
                    $more.slideUp();
                  }, 1000);
                }
              }
            },
            error: function error(e, t) {
              if (page === 1) {
                var err = '(��`�㡨) ���˵�С���⣬������';
                if (t === 'timeout') {
                  err = '(��`�㡨) ����ʱ�ˣ����Ժ�����';
                }
                $('#j-input')
                  .closest('.am-form-group')
                  .find('.am-alert')
                  .html(err)
                  .show();
              } else {
                $more.text('(��`�㡨) ����ʧ���ˣ��������');
              }
            },
            complete: function complete() {
              isload = false;
              if (page === 1) {
                $('#j-input').attr('disabled', false);
                $('#j-submit').button('reset');
              }
            }
          });
        };

        ajax(input, filter, type, page);
      }
    }
  });

  $('#j-main input').focus(function() {
    $(this).select();
  });

  $('#j-more').on('click', function() {
    $(this).hide();
    $('#j-quote').removeClass('music-overflow');
  });

  $('#j-back').on('click', function() {
    if (player) {
      player.pause();
    }
    $('#j-validator').slideDown();
    $('#j-main').slideUp();
    $('#j-main input').val('');
    document.title = siteTitle;
    pushState(siteTitle, getUrl());
  });
});
