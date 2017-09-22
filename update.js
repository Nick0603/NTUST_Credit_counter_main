swal({
    title: '哈囉，工具有新版了!',
    text: '請問你要現在更新嗎?',
    type: 'info',
    animation: true,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '移動至更新頁面',
    cancelButtonText: '之後再說'

  }).then(function () {
    window.open("https://chrome.google.com/webstore/detail/ntust-credit-counter/gpcfnaccomfiionfglcphcoiokbcmiie?hl=zh-TW");
  })