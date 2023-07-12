
import axios from "axios";
export const payUsingPaytm = async (data) => {
  try {
    console.log("Patm Karo");
    const response = await axios.post(`https://flipkart.tushargadher25.repl.co/payment`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling Paytm API", error);
  }
};
