const APIUtil = require ('./api_util');

class FollowToggle {
  constructor($el) {
    this.$el = $el;
    this.userId = $el.data('user-id');
    this.followState = $el.data('initial-follow-state');
    this.render();
    $el.on('click', this.handleClick.bind(this));
  }
  
  render () {
  
    if (this.followState === 'following') {
      this.$el.prop('disabled', true);
      this.$el.html("following...");
    } else if (this.followState === 'unfollowing') {
      this.$el.prop('disabled', true);
      this.$el.html("unfollowing...");
    } else if (this.followState) {
      this.$el.html("Unfollow!");
      this.$el.prop('disabled', false);
    } else {
      this.$el.html("Follow!");
      this.$el.prop('disabled', false);
    }
    
  }
  
  handleClick () {
    // e.preventDefault();
    if (this.followState === false) {
      APIUtil.followUser(this.userId)
        .then((res) => {
          this.followState = true;
          this.render();
        });
      this.followState = 'following';
      this.render();
    } else {
      APIUtil.unfollowUser(this.userId)
        .then((res) => {
          this.followState = false;
          this.render();
        });
      this.followState = 'unfollowing';
      this.render();
    }
  }
}

module.exports = FollowToggle;