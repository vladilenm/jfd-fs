function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateUserData() {
  return {
    rate: getRandomInt(1, 5),
    completedMeetings: getRandomInt(0, 200),
    image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
      .toString(36)
      .substring(7)}.svg`,
  }
}

module.exports = {
  generateUserData
}