import React, { useEffect } from "react";
import { useAppState } from "../context/StateContext";
import { Container } from "@material-ui/core";

export default function news() {
  const { news } = useAppState();

  useEffect(() => {
    console.log("news", news);
  }, [news]);

  return (
    <div className="centered">
      {news.map(item => {
        return (
          <div>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </div>
        );
      })}
      <style jsx>
        {`
          .centered {
            position: fixed;
            top: 50%;
            left: 50%;
            /* bring your own prefixes */
            transform: translate(-50%, -50%);
          }
        `}
      </style>
    </div>
  );
}
