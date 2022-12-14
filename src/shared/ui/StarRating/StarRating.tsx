import { FC, memo, useState } from "react";
import { classNames } from "@/shared/lib";
import cls from "./StarRating.module.scss";
import StarIcon from "./star.svg";
import { Icon } from "../Icon/Icon";

interface StarRatingProps {
    size?: number;
    selectedStars?: number;
    onSelect?: (starsCount: number) => void;
    className?: string;
}

const STARS = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = memo((props) => {
    const { size = 30, selectedStars = 0, onSelect, className } = props;
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
    const [currentStarHovered, setCurrentStarHovered] = useState(0);

    const onHover = (starHovered: number) => () => {
        if (!isSelected) {
            setCurrentStarHovered(starHovered);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarHovered(0);
        }
    };

    const onClick = (starHovered: number) => () => {
        if (!isSelected) {
            onSelect?.(starHovered);
            setCurrentStarHovered(starHovered);
            setIsSelected(true);
        }
    };

    return (
        <div className={className}>
            {STARS.map((starNumber) => (
                <Icon
                    Svg={StarIcon}
                    size={size}
                    key={starNumber}
                    onMouseEnter={onHover(starNumber)}
                    onMouseLeave={onLeave}
                    onClick={onClick(starNumber)}
                    className={classNames(
                        cls.icon,
                        {
                            [cls.hovered]: currentStarHovered >= starNumber,
                            [cls.selected]: isSelected,
                        },
                        []
                    )}
                />
            ))}
        </div>
    );
});
