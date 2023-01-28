import {
      BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
      Tooltip
} from "chart.js";
import { useTranslation } from 'next-i18next';
import React from "react";
import { Bar } from "react-chartjs-2";
ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
);

function DashboardChart(props) {
      const { t } = useTranslation("dashboard");
      const options = {
            responsive: true,
            plugins: {
                  legend: {
                        position: "top",
                  },
                  title: {
                        display: true,
                        text: t("dashSecFourMainTitle"),
                  },
            },
      };
      const data = {
            labels: props.labels,
            datasets: [
                  {
                        label: t("dashSecFourSubTitleOne"),
                        data: props.data1,
                        backgroundColor: "rgba(10, 81, 116, 0.5)",
                  },
                  {
                        label: t("dashSecFourSubTitleTwo"),
                        data: props.data2,
                        backgroundColor: "rgba(22, 163, 74, 0.5)",
                  },
                  {
                        label: t("dashSecFourSubTitleThree"),
                        data: props.data3,
                        backgroundColor: "rgba(206, 191, 42, 0.5)",
                  },
                  {
                        label: t("dashSecFourSubTitleFour"),
                        data: props.data4,
                        backgroundColor: "rgba(255, 0, 0, 0.5)",
                  },
            ],
      };
      return (
            <Bar options={options} data={data} />
      );
}

export default DashboardChart;