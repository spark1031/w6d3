const FollowToggle = require('./follow_toggle');

$(() => {
  const $allUsers = $(".follow-toggle");
  // console.log($allUsers.eq(0));
  for(let i = 0; i < $allUsers.length; i++) {
    let button = $allUsers.eq(i);
    new FollowToggle(button);
  }
}); 