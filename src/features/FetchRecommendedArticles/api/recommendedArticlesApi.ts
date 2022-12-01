import { $rtkApi } from "shared/api/rtkApi";

const recommendedArticles = $rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchRecommendedArticles: build.query({
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
