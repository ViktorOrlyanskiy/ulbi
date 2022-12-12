import { FC, memo } from "react";
import { Code } from "@/shared/ui";
import { ArticleCodeBlock } from "../../model/types/article";

interface ArticleBlockCodeProps {
    block: ArticleCodeBlock;
    className?: string;
}

export const ArticleBlockCode: FC<ArticleBlockCodeProps> = memo((props) => {
    const { block, className } = props;
    return (
        <div className={className}>
            <Code>{block.code}</Code>
        </div>
    );
});
