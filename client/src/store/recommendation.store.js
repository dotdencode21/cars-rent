import { RecommendationService } from "@/services/recommendation.service";
import { create } from "zustand";

export const useRecommendationStore = create((set) => ({
  recommendations: [],
  error: null,

  getAssociations: async (query) => {
    try {
      const data = await RecommendationService.getAssociations(query);

      set({ recommendations: data ? data : [] });
    } catch (e) {
      set({ error: e });
    }
  },
  createAssociation: async (payload) => {
    try {
      await RecommendationService.createAssociation(payload);
    } catch (e) {
      set({ error: e });
    }
  },
}));
