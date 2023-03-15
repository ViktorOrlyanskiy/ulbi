const fs = require("fs/promises");
const resolveRoot = require("./resolveRoot");

module.exports = async (layer, sliceName) => {
    const resolveModelPath = (...segments) =>
        resolveRoot("src", layer, sliceName, "lib", ...segments);

    const createModelStructure = async () => {
        try {
            await fs.mkdir(resolveModelPath());
        } catch (e) {
            console.log(
                `Не удалось создать lib сегмент для слайса ${sliceName}`,
                e
            );
        }
    };

    await createModelStructure();
};
