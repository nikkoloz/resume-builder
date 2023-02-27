import valid from "../assets/valid.svg";
import invalid from "../assets/invalid.svg";

function InputC({
  inputType,
  id,
  divClass,
  inpClass,
  pClass,
  labelText,
  pText,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) {
  let isError = !!error;
  return (
    <div className={`relative flex w-full flex-col  ${divClass}`}>
      <label
        className={`mb-2 text-lb ${
          touched && isError ? " text-main-invalid" : "text-black"
        }`}
        htmlFor={id}
      >
        {labelText}
      </label>
      <div className="">
        <input
          className={`mb-2 w-full rounded-[4px] border-[1px] border-main-gray3 px-4 py-[14px] text-lbp 
          focus:border-main-gray3 focus:shadow-none focus:outline-2
          ${inpClass} 
          ${touched && !isError && " border-main-valid"} 
          ${touched && isError && " border-main-invalid"}`}
          type={inputType ? inputType : "text"}
          id={id}
          placeholder={placeholder}
          name={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <img
          src={invalid}
          alt="nwnw"
          className={`absolute right-[-30px] top-[45px] ${
            touched && isError ? "" : "hidden"
          }`}
        />
        <img
          src={valid}
          alt="nwnw"
          className={`absolute top-[47px]
           ${inputType === "date" ? "right-[-30px]" : "right-[5px]"}
           ${touched && !isError ? "" : "hidden"}`}
        />
      </div>
      <p className={`${pClass} text-er`}>{pText}</p>
    </div>
  );
}

export default InputC;
