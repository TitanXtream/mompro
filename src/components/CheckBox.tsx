type CheckBoxProps = {
  label: string;
};

const CheckBox = ({ label }: CheckBoxProps) => {
  return (
    <div className="flex w-full gap-[1em] items-center">
      <input
        id="check"
        type="checkbox"
        placeholder="TYPE HERE"
        className="h-[1em] w-[1em] aspect-square shrink-0 text-brand outline-none focus:ring-0 border-[2px] border-brand"
      />
      <label htmlFor="check" className="w-full text-[1em]">
        {label}:
      </label>
    </div>
  );
};

export default CheckBox;
