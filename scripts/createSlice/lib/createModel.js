const fs = require("fs/promises");
const resolveRoot = require("./resolveRoot");
const getNameComponent = require("./getNameComponent");
const schemaTypeTemplate = require("../templates/schemaTypeTemplate");

module.exports = async (layer, sliceName) => {
    const resolveModelPath = (...segments) =>
        resolveRoot("src", layer, sliceName, "model", ...segments);

    const createModelStructure = async () => {
        try {
            await fs.mkdir(resolveModelPath());
            await fs.mkdir(resolveModelPath("const"));
            await fs.mkdir(resolveModelPath("types"));
        } catch (e) {
            console.log(
                `Не удалось создать model сегмент для слайса ${sliceName}`,
                e
            );
        }
    };

    const createSchemaType = async () => {
        try {
            const componentName = getNameComponent(sliceName);
            await fs.writeFile(
                resolveModelPath("types", `${sliceName}-schema.ts`),
                schemaTypeTemplate(componentName)
            );
        } catch (e) {
            console.log("Не удалось создать тип схемы стейта", e);
        }
    };

    await createModelStructure();
    await createSchemaType();
};
