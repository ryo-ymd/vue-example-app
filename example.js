var targetRepo = 'vuejs/vue'
var apiURL = 'https://api.github.com/repos/' + targetRepo + '/commits?per_page=3&sha='

var test = new Vue({
    el: '#demo',
    data: {
      branches: ['master', 'develop'],
      active: 'master',
      repo: targetRepo,
      commits: null
    }
});
