import { FC, memo } from "react";
import { classNames } from "shared/lib";
import { Text, TextAlign } from "shared/ui";
import cls from "./ArticleBlockImage.module.scss";
import { ArticleImageBlock } from "../../model/types/article";

interface ArticleBlockImageProps {
    block: ArticleImageBlock;
    className?: string;
}

export const ArticleBlockImage: FC<ArticleBlockImageProps> = memo((props) => {
    const { block, className } = props;
    return (
        <div className={classNames(cls.ArticleBlockImage, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
});
