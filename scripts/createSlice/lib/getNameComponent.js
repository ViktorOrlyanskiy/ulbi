module.exports = (sliceName) =>
    sliceName
        .split("-")
        .map((str) => str[0].toUpperCase() + str.slice(1))
        .join("");
