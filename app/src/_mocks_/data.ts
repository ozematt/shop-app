import { http, HttpResponse } from "msw";
import { AUTHORIZATION, CATEGORIES, PRODUCTS } from "../api/constant";
import productsTest from "../_mocks_/fixtures/productsTest.json";
import categoriesTest from "../_mocks_/fixtures/categoriesTest.json";
import loginTokenTest from "../_mocks_/fixtures/loginTokenTest.json";

export const dataHandlers = [
  http.get(PRODUCTS, () => {
    return HttpResponse.json(productsTest);
  }),
  http.get(CATEGORIES, () => {
    return HttpResponse.json(categoriesTest);
  }),
  http.post(AUTHORIZATION, () => {
    return HttpResponse.json(loginTokenTest);
  }),
];
