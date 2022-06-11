import { useField } from "formik";
import React from "react";
import FieldError from "./FieldError";

type Props = {
  name: string;
  labelText?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = (props: Props) => {
  const { name, labelText, disabled } = props;
  const [field, meta] = useField(props);
  // without label Text
  const withoutLabelText = { ...props };
  delete (
    withoutLabelText as Omit<Props, "labelText"> &
      Partial<Pick<Props, "labelText">>
  ).labelText;
  return (
    <div className="space-y-2 mb-2">
      {labelText && <label htmlFor={name}>{labelText}</label>}
      <input
        {...field}
        {...withoutLabelText}
        className={`${
          disabled ? "cursor-not-allowed" : "bg-white"
        } w-full  border-2 border-gray-200 p-2`}
        id={name}
      />
      <FieldError meta={meta} />
    </div>
  );
};

export default Input;
