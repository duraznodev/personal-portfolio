import React from "react";
import { FiAlertTriangle, FiCheck, FiLoader, FiSend } from "react-icons/fi";

export const FormButton = ({ type }) => {
  return (
    <button
      className={`flex scale-110 items-center justify-center gap-2 py-2 text-xl font-bold ${
        type === "neutral" ? "hover:text-neutral-600" : ""
      } `}
      target="_blank"
      typeof="submit"
      value="Send"
      disabled={type !== "neutral"}
    >
      {type === "neutral" && (
        <>
          <span>Send</span>
          <FiSend />
        </>
      )}
      {type === "loading" && (
        <>
          <span>Loading</span>
          <FiLoader className="animate-spin" />
        </>
      )}
      {type === "success" && (
        <>
          <span>Sended</span>
          <FiCheck />
        </>
      )}
      {type === "error" && (
        <>
          <span>Error</span>
          <FiAlertTriangle />
        </>
      )}
    </button>
  );
};
