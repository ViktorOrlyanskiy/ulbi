import path from "path";
import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: "",
        entry: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
        locales: "",
        buildLocales: "",
    };
    config.resolve!.modules!.push(paths.src);
    config.resolve!.modules!.unshift(paths.src);
    // @ts-ignore
    // config.resolve.modules = [paths.src, "node_modules"];
    config.resolve!.extensions!.push(".ts", ".tsx");

    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module!.rules!.push(buildSvgLoader());
    config.module!.rules!.push(buildCssLoader(true));

    config.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(""),
            __PROJECT__: JSON.stringify("storybook"),
        })
    );

    return config;
};
