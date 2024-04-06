const moment = require("moment");

module.exports = {
  formatDate: (date) => {
    return moment(date).format("DD MMMM YYYY, h:mm:ss a");
  },
  truncate: function (str, len) {
    if (str.length > len && str.length > 0) {
      let new_str = str + " ";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + "...";
    }
    return str;
  },
  stripTags: function (input) {
    return input.replace(/<(?:.|\n)*?>/gm, "");
  },
  editIcon: function (storyUser, loggedUser, storyId, floating = true) {
    if (storyUser._id.toString() == loggedUser._id.toString()) {
      if (floating) {
        return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`;
      } else {
        return `<a href="/stories/edit/${storyId}"><i class="fas fa-edit"></i></a>`;
      }
    } else {
      return "";
    }
  },
  joinDate: function (date) {
    function getTimeSinceCreation(createdAt) {
      const createdDate = new Date(createdAt);
      const currentDate = new Date();
      const timeDifference = currentDate - createdDate;

      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (days > 0) {
        return `joined ${createdDate.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}`;
      } else if (hours > 0) {
        return `joined ${hours} ${hours === 1 ? "hour" : "hours"} ago`;
      } else {
        return `joined ${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
      }
    }

    const createdAt = "2024-04-05T12:47:42.904Z";
    console.log(getTimeSinceCreation(date));
    return getTimeSinceCreation(date);
  },
};
