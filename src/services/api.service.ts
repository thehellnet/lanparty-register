import axios from "axios";
import { Tournament } from "@/models/tournament";

class ApiService {
  public async getTournaments(): Promise<Tournament[]> {
    const response = await axios.get(
      "http://127.0.0.1:8080/lanparty_manager/api/public/v1/registration/getTournaments"
    );
    return response.data;
  }
}

const apiService = new ApiService();
export default apiService;
