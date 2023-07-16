
import axios from "axios";
export const payUsingPaytm = async (data) => {
  try {
    console.log("Patm Karo");
    const response = await axios.post(`https://flipkart-iim1.onrender.com/payment`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling Paytm API", error);
  }
};
