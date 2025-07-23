import { Quiz, Announcement } from "../types";

export class ApiService {
  private static baseUrl = "http://localhost:3001/api/";
  private static token: string | null = localStorage.getItem("token");

  private static getHeaders() {
    return {
      "Content-Type": "application/json",
      ...(this.token && { Authorization: `Bearer ${this.token}` }),
    };
  }

  static async login(
    username: string,
    password: string
  ): Promise<{ token: string; user: { id: string; username: string } }> {
    const response = await fetch(`${this.baseUrl}auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Login failed response:", errorText); 
      throw new Error("Login failed");
    }

    const data = await response.json();
    console.log("Raw login API response:", data); 
    this.token = data.token;
    localStorage.setItem("token", data.token);
    return data;
  }

  static async getQuizzes(): Promise<Quiz[]> {
    const response = await fetch(`${this.baseUrl}quizzes`, {
      headers: this.getHeaders(),
    });
    if (!response.ok) throw new Error("Failed to fetch quizzes");
    return response.json();
  }

  static async getAnnouncements(): Promise<Announcement[]> {
    const response = await fetch(`${this.baseUrl}announcements`, {
      headers: this.getHeaders(),
    });
    if (!response.ok) throw new Error("Failed to fetch announcements");
    return response.json();
  }

  static async signup(username: string, password: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) throw new Error("Signup failed");
  }

  static logout() {
    this.token = null;
    localStorage.removeItem("token");
  }
}

export default ApiService;
