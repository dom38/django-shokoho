import http from "../http-common";

class ItemsDataService {
  getAll() {
    return http.get("/items");
  }

  get(id) {
    return http.get(`/items/${id}`);
  }

  create(data) {
    return http.post("/items", data);
  }

  update(id, data) {
    return http.put(`/items/${id}`, data);
  }

  delete(id) {
    return http.delete(`/items/${id}`);
  }

  deleteAll() {
    return http.delete(`/items`);
  }

  findByName(title) {
    return http.get(`/items?title=${title}`);
  }
}

export default new ItemsDataService();