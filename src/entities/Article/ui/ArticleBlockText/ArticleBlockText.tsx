import { FC, memo } from "react";
import { Text } from "@/shared/ui";
import cls from "./ArticleBlockText.module.scss";
import { ArticleTextBlock } from "../../model/types/article";

interface ArticleBlockTextProps {
    block: ArticleTextBlock;
    className?: string;
}

export const ArticleBlockText: FC<ArticleBlockTextProps> = memo((props) => {
    const { className, block } = props;

    return (
        <div className={className}>
            {block.title && <Text title={block.title} className={cls.title} />}
            {block.paragraphs.map((paragraph, index) => (
                <Text key={index} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
});
