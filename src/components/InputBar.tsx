type InputBarProps = {
  label: string;
};
const InputBar = ({ label }: InputBarProps) => {
  return (
    <div className="@container">
      <div className="flex w-full justify-between @[25em]:flex-row flex-col">
        <label
          htmlFor=""
          className="shrink-0 w-[8em] font-semibold text-[1.1em]"
        >
          {label}:
        </label>
        <input
          type="text"
          placeholder="TYPE HERE"
          className="w-full px-[0.5em] rouned-[0.2em] py-[0.5em] text-[0.8em] focus:ring-brand focus:border-brand"
        />
      </div>
    </div>
  );
};

export default InputBar;
