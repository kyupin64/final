let submit = $("div#submitButton");
let displayName = $("input#displayName");
let comment = $("input#commentInput");
let output = $("div#commentsContainer");
let post = $("div#post");
let edit = $("button#editButton");
let del = $("button#deleteButton");

function commentsMargin() {
  let height = post.height() + 40;
  output.css("margin-top", `${height}px`);
};
commentsMargin();

$(window).on("resize", function() {
  commentsMargin();
});

submit.on("click", function() {
  if ((displayName.val()).length === 0) {
    displayName.addClass("highlight");
  }
  else {
    displayName.removeClass("highlight");
  }
  if ((comment.val()).length === 0) {
    comment.addClass("highlight");
  }
  else {
    comment.removeClass("highlight");
  }
  if ((displayName.val()).length !== 0 && (comment.val()).length !== 0) {
    output.prepend(`<div id="comment">
    <img id="userIcon" src="photos/userIcon.png">
    <div id="bar">
    <p id="userName">${displayName.val()}</p>
    <div id="space"></div>
    <button id="editButton">Edit</button>
    <button id="deleteButton">Delete</button>
    </div>
    <h1 id="commentText">${comment.val()}</h1>
    </div>`)
  }
});

output.on("click", "button#deleteButton", function() {
  let parent = $(this).parents()[1];
  $(parent).remove();
});

output.on("click", "button#editButton", function() {
  let parent = $(this).parents()[1];
  if (($(parent).children()).length === 3) {
    let commentText = $($(parent).children()[2]).text();
    $(parent).append(`<div id="editComment">
    <input id="commentInput" type="text" value="${commentText}">
    <div id="submitEdit">Submit</div>
    </div>`)
  }
});

output.on("click", "div#submitEdit", function() {
  let parent = $(this).parents();
  console.log(parent);
  let originalComment = $(parent[1]).children()[2];
  console.log($(originalComment).text());
  let newComment = $($(this).prev()).val();
  console.log(newComment);
  $(originalComment).text(newComment);
  $(parent[0]).remove();
});