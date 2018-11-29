const APIUtil = require ('./api_util');

class UsersSearch {
  constructor($el) {
    this.$el = $el;
    this.$ul = $('.users');
    this.$input = $('.users-search-input');
  }
  
  handleInput() {
    this.$el.on ('keypress', APIUtil.searchUsers(this.$input.val()), renderResults);
  }
  
  renderResults(res) {
    // let users = this.$ul;
    this.$ul.empty();
    for (var i = 0; i < res.length; i++) {
      let user = res[i];
      const $li = $(`<li>${user}</li>`);
      this.$ul.append($li);
    }
  }
}

module.exports = UsersSearch;

