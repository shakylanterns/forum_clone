import { FieldMetaProps } from "formik";
import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

type Props<T> = {
  meta: FieldMetaProps<T>;
};

function FieldError<T>({ meta }: Props<T>) {
  if (meta.error && meta.touched) {
    return (
      <div className="text-red-500 flex items-center space-x-2">
        <FaExclamationCircle className="inline-block" />
        <span>{meta.error}</span>
      </div>
    );
  } else {
    return null;
  }
}

export default FieldError;
