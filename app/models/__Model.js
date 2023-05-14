import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);
export default class Model {
  constructor(url) {
    this.url = url;
  }

  async getAll() {
    const response = await axios.get(`${API_URL}/${this.url}`);
    return response.data;
  }

  async getById(id) {
    const response = await axios.get(`${API_URL}/${this.url}/${id}`);
    return response.data;
  }

  async save(item) {
    if (item.id) {
      return this.update(item);
    }
    const response = await axios.post(`${API_URL}/${this.url}`, item);
    return response.data;
  }

  async update(item) {
    const response = await axios.put(`${API_URL}/${this.url}/${item.id}`, item);
    return response.data;
  }

  async delete(id) {
    return await axios.delete(`${API_URL}/${this.url}/${id}`);
  }
}
