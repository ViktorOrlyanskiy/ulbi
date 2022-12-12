import { Article } from "entities/Article";
import { $rtkApi } from "shared/api/rtkApi";

const recommendedArticles = $rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchRecommendedArticles: build.query<Article[], number>({
            query: (limit) => ({
                url: "/articles",
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const useFetchRecomandedArticles =
    recommendedArticles.useFetchRecommendedArticlesQuery;
