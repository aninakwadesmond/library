import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon_text({
  letter,
  letter_bg_color,
  letter_text_color,
  icon,
  text,
  text_size,
  text_color,
}) {
  return (
    <div className="flex items-center justify-start gap-1">
      {icon ? (
        <span
          className={`flex h-5 w-5 flex-col items-center justify-center rounded-sm ${letter_bg_color}`}
        >
          <FontAwesomeIcon
            icon={icon}
            className={`text-[12px] ${letter_text_color} h-[90%] w-[90%] font-bold`}
          />
        </span>
      ) : (
        <span
          className={`flex h-4 w-4 flex-col items-center justify-center rounded-full ${letter_bg_color} text-[11px] ${letter_text_color}`}
        >
          {letter}
        </span>
      )}

      <span
        className={`font-bold tracking-tight capitalize ${text_color} ${text_size ? text_size : "text-[14px] "}`}
      >
        {text}
      </span>
    </div>
  );
}

export default Icon_text;
