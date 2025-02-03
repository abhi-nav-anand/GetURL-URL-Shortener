import axios from "axios";
import { apiClient } from "./ApiClient";

export const executePostRequestToShortUrl
= (originalUrl) => apiClient.post(`/urls`, {
    originalUrl: originalUrl
  });

export const executeGetRequestToUrlDetails
= (userShortUrl) => apiClient.get(`${userShortUrl}/details`);
  