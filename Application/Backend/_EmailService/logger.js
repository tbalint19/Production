module.exports = (options, error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent", options);
  }
}
