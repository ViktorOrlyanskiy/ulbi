import { User } from "entities/User";

export enum ArticleBlockType {
    CODE = "CODE",
    IMAGE = "IMAGE",
    TEXT = "TEXT",
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}
export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export type ArticleBlock =
    | ArticleTextBlock
    | ArticleImageBlock
    | ArticleCodeBlock;

export enum ArticleType {
    ALL = "ALL",
    IT = "IT",
    SCIENCE = "SCIENCE",
    ECONOMICS = "ECONOMICS",
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    user: User;
    type: ArticleType[];
    blocks: ArticleBlock[];
}

export enum ArticleSort {
    VIEWS = "views",
    TITLE = "title",
    CREATED = "createdAt",
}

export enum ArticleView {
    LIST = "LIST",
    GRID = "GRID",
}
