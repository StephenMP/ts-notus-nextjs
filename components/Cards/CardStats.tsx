import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faEquals,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export type CardStatsProps = {
  statSubtitle: string;
  statTitle: string;
  statArrow: "up" | "down";
  statPercent: string;
  statPercentColor: string;
  statDescripiron: string;
  statIconName: IconDefinition;
  statIconColor: string;
};

export default function CardStats({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
}: CardStatsProps) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                <FontAwesomeIcon icon={statIconName} />
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className={statPercentColor + " mr-2"}>
              <FontAwesomeIcon
                icon={
                  statArrow === "up"
                    ? faArrowUp
                    : statArrow === "down"
                    ? faArrowDown
                    : faEquals
                }
              />{" "}
              {statPercent}%
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p>
        </div>
      </div>
    </>
  );
}

CardStats.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: faChartBar,
  statIconColor: "bg-red-500",
} as CardStatsProps;
