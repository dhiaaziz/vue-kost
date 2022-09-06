// import { inject } from "vue";
import moment from "moment";
export const dateFormatter = (date) => {
  // const moment = inject("$moment");
  return moment(date).format("DD MMMM YYYY");
};

export default dateFormatter;
