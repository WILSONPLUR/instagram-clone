import React from "react";

export const Field = ({
  value,
  onChangeHandler,
  placeholder,
  classNames,
  type,
}: {
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  classNames: string;
  type: "text" | "email" | "password";
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      className={classNames}
    />
  );
};
