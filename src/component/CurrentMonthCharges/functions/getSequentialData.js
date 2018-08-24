import { getStorage } from "../../utility";

export const getSequentialData = async callback => {
  const data = await getStorage("currentUser");
  let val = {
    consumerNo: data.authentication.personalProfile.consumerNo
  };

  let sequentialData = [
    {
      date: "1/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "2/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "3/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "4/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "5/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "6/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "7/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "8/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "9/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "10/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "11/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "12/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "13/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "14/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "15/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "16/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "17/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "18/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "19/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "20/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "21/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "22/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "23/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "24/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "25/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "26/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "27/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "28/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "29/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "30/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    },
    {
      date: "31/8/18",
      reading: "10",
      charges: "17",
      daily_consumption: "14"
    }
  ];

  callback(sequentialData);
};
