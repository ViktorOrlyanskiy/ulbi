const fs = require("fs/promises");
const resolveRoot = require("./resolveRoot");
const getNameComponent = require("./getNameComponent");
const publicApiTemplate = require("../templates/publicApiTemplate");

module.exports = async (layer, sliceName) => {
    try {
        const componentName = getNameComponent(sliceName);

        await fs.writeFile(
            resolveRoot("src", layer, sliceName, "index.ts"),
            publicApiTemplate(sliceName, componentName)
        );
    } catch (e) {
        console.log("Не удалось создать PUBLIC API");
    }
};
